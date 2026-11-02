import React, { useMemo, useState } from "react";
import { Sparkles, ExternalLink, Globe } from "lucide-react";
import { FaYoutube, FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import JobTimeline from "./JobTimeline";
import rawJobs from "../data/jobs.json";
import { processJobs } from "../utils/jobUtils";
import { personalInfo } from "../data/portfolioData";

export default function VamshiVerse({ onViewChange }) {
  const [imgError, setImgError] = useState(false);

  // Process and sort jobs data (including active pinned walk-in drives)
  const { pinnedJobs, groups, totalCount } = useMemo(() => {
    return processJobs(rawJobs);
  }, []);

  const socials = [
    {
      label: "Instagram (5K)",
      icon: FaInstagram,
      color: "text-pink-500",
      url: personalInfo.instagram,
    },
    {
      label: "YouTube (15K)",
      icon: FaYoutube,
      color: "text-red-500",
      url: personalInfo.youtube,
    },
    {
      label: "GitHub",
      icon: FaGithub,
      color: "text-gray-800 dark:text-white",
      url: personalInfo.github,
    },
    {
      label: "LinkedIn",
      icon: FaLinkedin,
      color: "text-blue-500",
      url: personalInfo.linkedin,
    },
    {
      label: "Twitter / X",
      icon: FaTwitter,
      color: "text-sky-500",
      url: personalInfo.twitter,
    },
  ];

  return (
    <section id="jobs" className="w-full relative z-20 pt-24 md:pt-32 pb-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
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

        {/* Two-Column Layout (~68% Main Job Feed / ~32% Profile Card) */}
        <div className="mt-2 sm:mt-4 flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          {/* Main Column: Chronological Job Feed & Pinned Walk-in Drives */}
          <div className="w-full lg:w-[68%] flex-1">
            <JobTimeline pinnedJobs={pinnedJobs} groups={groups} />
          </div>

          {/* Sidebar Column: About Vamshi (~32%) */}
          <div className="w-full lg:w-[32%] lg:sticky lg:top-24">
            <aside
              aria-label="About Vamshi Mudiraj"
              className="dashed-border-anim w-full rounded-2xl sm:rounded-3xl bg-white dark:bg-[#141414] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              {/* Profile Header: Avatar + Identity */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-0.5 bg-white dark:bg-[#111113] ring-2 ring-[#F3B9C8] dark:ring-[#c2185b] overflow-hidden shadow-xs">
                    {!imgError ? (
                      <img
                        src="/profile-avatar.png"
                        alt={personalInfo.displayName}
                        onError={() => setImgError(true)}
                        className="w-full h-full rounded-full object-cover object-center bg-pink-50 dark:bg-zinc-800"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#c2185b] to-[#f3b9c8] flex items-center justify-center text-white font-bold text-lg select-none">
                        VM
                      </div>
                    )}
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-instrument text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
                      {personalInfo.displayName}
                    </h2>
                    <svg
                      className="w-4 h-4 text-[#1D9BF0] fill-current shrink-0"
                      viewBox="0 0 24 24"
                      title="Verified Creator"
                      aria-label="Verified"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <p className="text-xs text-[#c2185b] dark:text-[#f3b9c8] font-medium leading-tight mt-0.5">
                    {personalInfo.role}
                  </p>
                </div>
              </div>

              {/* Bio Description */}
              <div className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                <p>
                  I&apos;m sharing the jobs and hiring drives I personally apply for, along with verified off-campus links to help fellow students and freshers navigate tech recruitment.
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {personalInfo.shortBio}
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-white/40 mb-3">
                  Connect & Socials
                </div>
                <div className="flex flex-col gap-2">
                  {socials.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-medium text-gray-700 dark:text-white/80 transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <Icon className={`${item.color} text-sm`} />
                          <span>{item.label}</span>
                        </span>
                        <ExternalLink size={12} className="opacity-40 group-hover:opacity-100" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
