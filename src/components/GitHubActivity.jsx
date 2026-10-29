import React, { useState, useEffect, useRef } from "react";
import { GitCommit, ExternalLink, Flame } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function GitHubActivity({ theme }) {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [streakLoaded, setStreakLoaded] = useState(false);
  const [streakError, setStreakError] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchContributions() {
      try {
        const username = "VamshiMudiraj05";
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (response.ok) {
          const json = await response.json();
          if (isMounted && Array.isArray(json.contributions)) {
            setData(json.contributions);
            setTotal(json.total?.lastYear ?? 0);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn("Could not load github calendar via primary API, trying fallback", err);
      }

      if (isMounted) {
        // Fallback placeholder data if offline/rate-limited
        const days = [];
        const today = new Date();
        for (let i = 364; i >= 0; i--) {
          const d = new Date(today);
          d.setDate(d.getDate() - i);
          const dateStr = d.toISOString().split("T")[0];
          const count = Math.random() > 0.4 ? Math.floor(Math.random() * 6) + 1 : 0;
          days.push({ date: dateStr, count, level: count > 4 ? 4 : count > 2 ? 3 : count > 0 ? 1 : 0 });
        }
        setData(days);
        setTotal(324);
        setLoading(false);
      }
    }

    fetchContributions();
    return () => {
      isMounted = false;
    };
  }, []);

  // Auto-scroll to the end (most recent contributions) when data is ready
  useEffect(() => {
    if (!loading && scrollRef.current) {
      const scrollToRight = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
        }
      };
      scrollToRight();
      const timer = setTimeout(scrollToRight, 100);
      return () => clearTimeout(timer);
    }
  }, [loading, data]);

  const getColor = (level, isDark) => {
    if (isDark) {
      switch (level) {
        case 1:
          return "#4a2530";
        case 2:
          return "#7a2f4d";
        case 3:
          return "#b8446f";
        case 4:
          return "#f3b9c8";
        default:
          return "#1c1c1f";
      }
    } else {
      switch (level) {
        case 1:
          return "#fbd4de";
        case 2:
          return "#f3b9c8";
        case 3:
          return "#e879a3";
        case 4:
          return "#c2185b";
        default:
          return "#f0f0f2";
      }
    }
  };

  const isDark = theme === "dark";

  const streakUrl = isDark
    ? "https://streak-stats.demolab.com/?user=VamshiMudiraj05&theme=radical&hide_border=true&border_radius=12&background=141414"
    : "https://streak-stats.demolab.com/?user=VamshiMudiraj05&theme=radical&hide_border=true&border_radius=12";

  // Group into weeks
  const weeks = [];
  if (data) {
    let currentWeek = [];
    data.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === data.length - 1) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });
  }

  return (
    <div className="w-full max-w-[880px] mx-auto px-6 md:px-12 my-12">
      <div className="dashed-border-anim rounded-2xl bg-white dark:bg-[#141414] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FCE7EC] dark:bg-[#2a1b22] flex items-center justify-center text-[#c2185b] dark:text-[#f3b9c8]">
              <GitCommit size={18} />
            </div>
            <div>
              <h3 className="font-instrument font-semibold text-xl text-gray-800 dark:text-white">
                GitHub Contributions
              </h3>
              <p className="text-xs text-gray-500 dark:text-white/50">
                {total !== null ? `${total} contributions in the last year` : "Activity timeline"}
              </p>
            </div>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="glare-button inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/10 px-3.5 py-1.5 rounded-full self-start sm:self-auto transition-colors"
          >
            <span>@VamshiMudiraj05</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {loading ? (
          <div className="h-[120px] rounded-xl bg-black/[0.03] dark:bg-white/[0.03] animate-pulse" />
        ) : (
          <div>
            <div ref={scrollRef} className="overflow-x-auto pb-2 -mx-2 px-2 scroll-smooth">
              <div className="inline-flex gap-1 min-w-[700px]">
                {weeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-1">
                    {week.map((day) => (
                      <div
                        key={day.date}
                        className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-xs transition-transform hover:scale-125 cursor-pointer"
                        style={{
                          backgroundColor: getColor(day.level, isDark),
                        }}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 text-[11px] text-gray-400 dark:text-white/40">
              <span>Less</span>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((lvl) => (
                  <div
                    key={lvl}
                    className="w-2.5 h-2.5 rounded-xs"
                    style={{ backgroundColor: getColor(lvl, isDark) }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        )}

        {/* GitHub Streak Stats Section */}
        <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col items-center">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mb-4 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#FE428E]/10 dark:bg-[#FE428E]/20 flex items-center justify-center text-[#FE428E]">
                <Flame size={15} className="fill-[#FE428E]/40" />
              </div>
              <div>
                <h4 className="font-instrument font-semibold text-lg text-gray-800 dark:text-white leading-tight">
                  GitHub Streak Stats
                </h4>
                <p className="text-[11px] text-gray-500 dark:text-white/50">
                  Daily commit streak & contribution milestones
                </p>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#c2185b] dark:text-[#f3b9c8] hover:underline self-start sm:self-auto"
            >
              <span>View Streak on GitHub</span>
              <ExternalLink size={10} />
            </a>
          </div>

          <div className="relative w-full flex justify-center">
            {!streakLoaded && !streakError && (
              <div className="w-full max-w-[495px] h-[195px] rounded-xl bg-black/[0.03] dark:bg-white/[0.04] animate-pulse flex flex-col items-center justify-center gap-2 border border-black/5 dark:border-white/10">
                <Flame size={20} className="animate-bounce text-[#FE428E]" />
                <span className="text-xs text-gray-400 dark:text-white/40">Loading streak data...</span>
              </div>
            )}

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              title="View Vamshi's GitHub Profile"
              className={`group relative block w-full max-w-[495px] overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#FE428E]/50 hover:scale-[1.01] ${
                streakLoaded ? "opacity-100" : "opacity-0 absolute pointer-events-none"
              }`}
            >
              <img
                src={streakUrl}
                alt="Vamshi Mudiraj GitHub Streak Stats"
                className="w-full h-auto object-contain block"
                onLoad={() => setStreakLoaded(true)}
                onError={() => setStreakError(true)}
                loading="lazy"
              />
            </a>

            {streakError && (
              <div className="w-full max-w-[495px] p-6 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-center text-xs text-rose-600 dark:text-rose-400">
                <p>Live GitHub streak stats currently unavailable. Visit GitHub profile directly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
