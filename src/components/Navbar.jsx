import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, FolderGit2, Sparkles, Briefcase, MessageSquare, Send } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "../data/portfolioData";

export default function Navbar({ currentView, onViewChange, theme, onToggleTheme }) {
  const desktopNavItems = [
    { name: "Home", view: "home" },
    { name: "Projects", view: "projects" },
    { name: "Content", view: "content" },
    { name: "Jobs", view: "jobs" },
  ];

  const mobileNavItems = [
    { name: "Home", view: "home", icon: Home },
    { name: "Projects", view: "projects", icon: FolderGit2 },
    { name: "Content", view: "content", icon: Sparkles },
    { name: "Jobs", view: "jobs", icon: Briefcase },
    { name: "Talk", view: "contact", icon: MessageSquare },
  ];

  const handleNavClick = (view) => {
    onViewChange(view);
  };

  const handleLogoClick = () => {
    onViewChange("home");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  return (
    <>
      {/* Brand Logo - Top Left */}
      <button
        onClick={handleLogoClick}
        className="fixed top-3 left-6 md:top-4 md:left-10 z-50 hover:opacity-75 transition-opacity duration-150 cursor-pointer focus:outline-none"
        aria-label="Home"
      >
        <span className="font-signature text-2xl md:text-3xl text-black dark:text-white tracking-wide">
          {personalInfo.brandName}
        </span>
      </button>

      {/* Mobile Top-Right Theme Toggle */}
      <div className="md:hidden fixed top-3 right-6 z-50">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} size="sm" />
      </div>

      {/* Desktop Top-Right Nav */}
      <nav className="hidden md:flex fixed top-4 right-10 md:right-12 z-50 items-center gap-8 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md px-6 py-2.5 rounded-full border border-black/5 dark:border-white/10 shadow-sm">
        {desktopNavItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.view)}
              className={`group relative font-medium text-sm transition-colors duration-150 cursor-pointer focus:outline-none ${
                isActive
                  ? "text-black dark:text-white"
                  : "text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#F3B9C8] dark:bg-[#c2185b] transition-all duration-200 ease-out ${
                  isActive
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              />
            </button>
          );
        })}

        {/* Let's Talk CTA button */}
        <button
          onClick={() => handleNavClick("contact")}
          className={`group relative font-medium text-sm transition-colors duration-150 cursor-pointer flex items-center gap-1.5 ${
            currentView === "contact"
              ? "text-black dark:text-white font-semibold"
              : "text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white"
          }`}
        >
          <span>let's talk</span>
          <Send size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span
            className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#F3B9C8] dark:bg-[#c2185b] transition-all duration-200 ease-out ${
              currentView === "contact"
                ? "w-full opacity-100"
                : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
            }`}
          />
        </button>

        {/* Theme toggle */}
        <ThemeToggle theme={theme} onToggle={onToggleTheme} size="md" />
      </nav>

      {/* Mobile Bottom Floating Dock Bar */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[360px] max-w-[94vw]">
        <div className="flex items-center justify-between bg-white/85 dark:bg-[#1a1a1a]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-black/5 dark:border-white/10 rounded-[32px] p-1.5 w-full transition-colors duration-200">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.view;

            return (
              <motion.button
                layout
                key={item.name}
                aria-label={item.name}
                onClick={() => handleNavClick(item.view)}
                className={`group relative flex items-center justify-center h-11 rounded-[24px] transition-colors duration-150 overflow-hidden cursor-pointer focus:outline-none ${
                  isActive
                    ? "px-3 sm:px-3.5 bg-black/10 dark:bg-white/15 gap-1.5"
                    : "w-10 sm:w-11 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <motion.div layout className="shrink-0 flex items-center justify-center">
                  <Icon
                    size={18}
                    strokeWidth={isActive ? 2.2 : 1.75}
                    className={`transition-colors duration-150 ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-black/45 dark:text-white/50 group-hover:text-black/80 dark:group-hover:text-white/90"
                    }`}
                  />
                </motion.div>

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, width: 0, scale: 0.8 }}
                      animate={{ opacity: 1, width: "auto", scale: 1 }}
                      exit={{ opacity: 0, width: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="font-medium text-xs whitespace-nowrap text-black dark:text-white origin-left"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
}
