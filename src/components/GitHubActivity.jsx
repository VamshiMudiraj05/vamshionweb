import React, { useState, useEffect, useRef } from "react";
import { GitCommit, ExternalLink } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function GitHubActivity({ theme }) {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
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
      </div>
    </div>
  );
}
