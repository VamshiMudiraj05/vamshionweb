import React from "react";
import JobCard from "./JobCard";
import FeaturedWalkinCard from "./FeaturedWalkinCard";
import { Sparkles } from "lucide-react";

export default function JobTimeline({ pinnedJobs = [], groups = [] }) {
  const hasPinned = pinnedJobs && pinnedJobs.length > 0;
  const hasGroups = groups && groups.length > 0;

  if (!hasPinned && !hasGroups) {
    return (
      <section className="w-full">
        <div className="dashed-border-anim rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center bg-white dark:bg-[#141414] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="w-12 h-12 rounded-2xl bg-[#fce7ec] dark:bg-[#2a1b22] text-[#c2185b] dark:text-[#f3b9c8] flex items-center justify-center mx-auto mb-4">
            <Sparkles size={22} />
          </div>
          
          <h2 className="font-instrument text-2xl sm:text-3xl text-gray-900 dark:text-white font-medium mb-2">
            No active job entries found.
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed mb-6">
            New opportunities personally applied for will appear here automatically in chronological order.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-xs text-gray-600 dark:text-gray-400 font-mono">
            <span>Edit</span>
            <code className="text-[#c2185b] dark:text-[#f3b9c8] font-bold">src/data/jobs.json</code>
            <span>to log opportunities</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col gap-10 sm:gap-12" aria-label="Job entries chronological feed">
      {/* Pinned / Highlighted Drives Section (Stays on top till date passes) */}
      {hasPinned && (
        <div className="flex flex-col gap-5">
          {pinnedJobs.map((pinnedJob) => (
            <FeaturedWalkinCard key={pinnedJob.id} job={pinnedJob} />
          ))}
        </div>
      )}

      {/* Chronological Date Groups Feed */}
      {groups.map((group) => (
        <div key={group.date} className="relative flex flex-col gap-4">
          {/* Date Heading Header */}
          <div className="flex items-center justify-between pb-3 border-b border-black/[0.08] dark:border-white/[0.1]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-gray-800 dark:text-gray-200">
                {group.formattedDate}
              </span>

              {group.isToday && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fce7ec] dark:bg-[#2a1b22] text-[#c2185b] dark:text-[#f3b9c8] font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-[#f3b9c8]/60 dark:border-[#c2185b]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c2185b] dark:bg-[#f3b9c8] animate-pulse" />
                  TODAY
                </span>
              )}
            </div>

            <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
              {group.jobs.length} {group.jobs.length === 1 ? "entry" : "entries"}
            </span>
          </div>

          {/* Jobs List for this date */}
          <div className="flex flex-col gap-3">
            {group.jobs.map((job, jobIndex) => (
              <JobCard
                key={job.id || `${group.date}-${jobIndex}`}
                job={job}
                index={jobIndex}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

