import React from "react";
import { ExternalLink, MapPin, Building2, MessageSquareText } from "lucide-react";
import { isValidUrl } from "../utils/jobUtils";

export default function JobCard({ job, index }) {
  const sequenceNumber = String(index + 1).padStart(2, "0");
  const hasValidLink = isValidUrl(job?.applicationUrl);
  const targetUrl = hasValidLink ? job.applicationUrl.trim() : null;

  return (
    <article className="dashed-border-anim group relative rounded-xl sm:rounded-2xl bg-white dark:bg-[#141414] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
        {/* Left side: Sequential Number + Job Info */}
        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
          {/* Sequential Number in Mono */}
          <span className="font-mono text-xs sm:text-sm font-semibold text-[#c2185b] dark:text-[#f3b9c8] bg-[#fdf0f4] dark:bg-[#25181f] px-2 py-0.5 rounded-md shrink-0 mt-0.5 select-none">
            {sequenceNumber}
          </span>

          <div className="flex-1 min-w-0">
            {/* Optional Category / Type Badge */}
            {job.badge && (
              <div className="mb-1.5">
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#c2185b] dark:text-[#f3b9c8] bg-[#fce7ec] dark:bg-[#2a1720] px-2 py-0.5 rounded border border-[#f3b9c8]/50 dark:border-[#c2185b]/40 uppercase tracking-wider">
                  {job.badge}
                </span>
              </div>
            )}

            {/* Job Title */}
            <h3 className="font-sans font-semibold text-base sm:text-lg text-gray-900 dark:text-white leading-snug tracking-tight">
              {targetUrl ? (
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c2185b] dark:hover:text-[#f3b9c8] transition-colors focus:outline-none focus:underline"
                >
                  {job.title || "Untitled Position"}
                </a>
              ) : (
                <span>{job.title || "Untitled Position"}</span>
              )}
            </h3>

            {/* Company & Location Metadata */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {job.company && (
                <span className="inline-flex items-center gap-1.5 font-medium text-gray-800 dark:text-gray-200">
                  <Building2 size={13} className="text-gray-400 dark:text-gray-500 shrink-0" />
                  <span>{job.company}</span>
                </span>
              )}

              {job.company && job.location && (
                <span className="text-gray-300 dark:text-gray-600 select-none">•</span>
              )}

              {job.location && (
                <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <MapPin size={13} className="text-gray-400 dark:text-gray-500 shrink-0" />
                  <span>{job.location}</span>
                </span>
              )}
            </div>

            {/* Optional Note */}
            {job.note && job.note.trim() && (
              <div className="mt-3 inline-flex items-start gap-1.5 text-xs text-gray-600 dark:text-gray-300 bg-black/[0.03] dark:bg-white/[0.04] px-2.5 py-1.5 rounded-lg border border-black/[0.04] dark:border-white/[0.06]">
                <MessageSquareText size={12} className="text-gray-400 shrink-0 mt-0.5" />
                <span className="italic leading-relaxed">{job.note.trim()}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right side: Apply / View Job Action Link */}
        {targetUrl && (
          <div className="sm:self-center shrink-0 pt-1 sm:pt-0 pl-9 sm:pl-0">
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glare-button inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-[#c2185b] dark:hover:bg-[#f3b9c8] text-gray-800 dark:text-white hover:text-white dark:hover:text-black text-xs sm:text-sm font-medium shadow-xs transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40 cursor-pointer"
              aria-label={`View job opening for ${job.title || "position"} at ${job.company || "company"}`}
            >
              <span>View Job</span>
              <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

