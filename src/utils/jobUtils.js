/**
 * Utility functions for processing and formatting job entries
 */

/**
 * Returns today's local date string formatted as YYYY-MM-DD
 */
export function getLocalTodayString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Formats a YYYY-MM-DD string into an uppercase editorial date
 * e.g., "2026-10-31" -> "OCTOBER 31, 2026"
 */
export function formatDisplayDate(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return "";
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr.toUpperCase();

  const [y, m, d] = parts.map(Number);
  if (isNaN(y) || isNaN(m) || isNaN(d)) return dateStr.toUpperCase();

  const dateObj = new Date(y, m - 1, d);
  return dateObj
    .toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
}

/**
 * Checks if a string is a safe, valid external URL
 */
export function isValidUrl(url) {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim();
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Groups and sorts job entries:
 * - Separates active pinned jobs (isPinned === true && pinnedUntil >= today)
 * - Once pinnedUntil crosses today's date, the job naturally falls back to chronological list
 * - Grouped by `date` (YYYY-MM-DD)
 * - Dates sorted in descending order (latest first)
 * - Jobs within each date sorted by `createdAt` descending
 * - Identifies whether each date corresponds to today (using local time)
 */
export function processJobs(rawJobs = []) {
  if (!Array.isArray(rawJobs) || rawJobs.length === 0) {
    return {
      pinnedJobs: [],
      groups: [],
      totalCount: 0,
    };
  }

  const todayStr = getLocalTodayString();
  const pinnedJobs = [];
  const regularJobs = [];

  for (const job of rawJobs) {
    if (!job) continue;

    const isActivelyPinned = Boolean(
      job.isPinned && (!job.pinnedUntil || String(job.pinnedUntil).trim() >= todayStr)
    );

    if (isActivelyPinned) {
      pinnedJobs.push(job);
    } else {
      regularJobs.push(job);
    }
  }

  // Sort pinned jobs by pinnedUntil ascending (earliest expiring first)
  pinnedJobs.sort((a, b) => {
    if (a.pinnedUntil && b.pinnedUntil) {
      return a.pinnedUntil.localeCompare(b.pinnedUntil);
    }
    return 0;
  });

  // Group regular entries by date
  const groupedMap = new Map();

  for (const job of regularJobs) {
    if (!job || !job.date) continue;
    const dateKey = String(job.date).trim();
    if (!groupedMap.has(dateKey)) {
      groupedMap.set(dateKey, []);
    }
    groupedMap.get(dateKey).push(job);
  }

  // Sort dates descending (latest date first)
  const sortedDates = Array.from(groupedMap.keys()).sort((a, b) => {
    return b.localeCompare(a);
  });

  const groups = sortedDates.map((dateKey) => {
    const jobsInDate = groupedMap.get(dateKey);

    jobsInDate.sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });

    const isToday = dateKey === todayStr;

    return {
      date: dateKey,
      formattedDate: formatDisplayDate(dateKey),
      isToday,
      jobs: jobsInDate,
    };
  });

  return {
    pinnedJobs,
    groups,
    totalCount: rawJobs.length,
  };
}

