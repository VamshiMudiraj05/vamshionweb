import React, { useMemo } from "react";
import { Sparkles } from "lucide-react";
import JobTimeline from "./JobTimeline";
import rawJobs from "../data/jobs.json";
import { processJobs } from "../utils/jobUtils";

export default function VamshiVerse({ onViewChange }) {
  // Process and sort jobs data (including active pinned walk-in drives)
  const { pinnedJobs, groups, totalCount } = useMemo(() => {
    return processJobs(rawJobs);
  }, []);

  return (
    <section id="jobs" className="w-full relative z-20 pt-24 md:pt-32 pb-24">
      <div className="w-full max-w-[880px] mx-auto px-6 md:px-12">
        {/* Header Hero Section */}
        <div className="pt-4 sm:pt-6 pb-8 sm:pb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fce7ec] dark:bg-[#2a1b22] border border-[#f3b9c8]/50 dark:border-[#c2185b]/30 mb-4 sm:mb-5">
            <Sparkles size={13} className="text-[#c2185b] dark:text-[#f3b9c8]" />
            <span className="text-[11px] font-semibold tracking-wider text-[#c2185b] dark:text-[#f3b9c8] uppercase">
              Vamshi Verse · The Job Application Journal
            </span>
          </div>

          <h1 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white font-medium tracking-tight leading-[1.08] mb-4">
            Jobs & Drives I&apos;ve Applied For.
          </h1>

          <p className="font-sans text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-6">
            A curated personal log of verified fresher roles, walk-in drives, and tech opportunities I&apos;m actively applying to.
            Direct application links are shared so students, fresh graduates, and peers can discover and apply together.
          </p>

          {/* Live Status and Job Count Badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-gray-700 dark:text-gray-200">
              <span className="font-mono font-semibold text-gray-900 dark:text-white">
                {totalCount}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {totalCount === 1 ? "opportunity logged" : "opportunities logged"}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium text-[11px] sm:text-xs">
                Updated in real-time as I apply
              </span>
            </div>
          </div>
        </div>

        {/* Main Job Feed & Pinned Walk-in Drives */}
        <div className="mt-2 sm:mt-4 w-full">
          <JobTimeline pinnedJobs={pinnedJobs} groups={groups} />
        </div>
      </div>
    </section>
  );
}

