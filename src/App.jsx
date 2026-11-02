import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import IntroAnimation from "./components/IntroAnimation";
import Hero from "./components/Hero";
import MarqueeSkills from "./components/MarqueeSkills";
import GitHubActivity from "./components/GitHubActivity";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContentCreation from "./components/ContentCreation";
import VamshiVerse from "./components/VamshiVerse";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get("view");
      if (viewParam && ["home", "projects", "content", "jobs", "contact"].includes(viewParam)) {
        return viewParam;
      }
      const hash = window.location.hash.replace("#", "");
      if (hash && ["home", "projects", "content", "jobs", "contact"].includes(hash)) {
        return hash;
      }
    }
    return "home";
  });
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("vamshi_theme");
    return saved === "dark" || saved === "light" ? saved : "light";
  });

  // Toggle Theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("vamshi_theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Listen to custom navigate-to events
  useEffect(() => {
    const handleCustomNav = (e) => {
      if (e.detail) {
        handleViewChange(e.detail);
      }
    };
    window.addEventListener("navigate-to", handleCustomNav);
    return () => window.removeEventListener("navigate-to", handleCustomNav);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#fffefd] text-[#3a3a3a] dark:bg-[#0b0b0d] dark:text-[#ededed] overflow-x-hidden font-sans transition-colors duration-300">
      {/* Opening Signature Intro Animation */}
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}

      {/* Global Background Glow & Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-2] bg-[#fffefd] dark:bg-[#0b0b0d] transition-colors duration-300" />
      <div className="fixed top-0 right-0 w-[80vw] h-[80vh] pointer-events-none z-[-1] bg-radial-blush" />

      {/* Top Navbar Blur Guard */}
      <div className="fixed top-0 left-0 w-full h-14 md:h-16 backdrop-blur-md bg-white/20 dark:bg-black/20 z-40 pointer-events-none transition-colors duration-200" />

      {/* Navigation (Desktop Header & Mobile Floating Dock) */}
      <Navbar
        currentView={currentView}
        onViewChange={handleViewChange}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main View Router */}
      <main className="relative z-10 w-full flex flex-col items-center min-h-screen">
        <div className="flex-1 w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            {currentView === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col items-center"
              >
                <Hero onViewChange={handleViewChange} />
                <MarqueeSkills />
                <GitHubActivity theme={theme} />
                <Experience />
                <Projects />
              </motion.div>
            )}

            {currentView === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col items-center"
              >
                <Projects />
              </motion.div>
            )}

            {(currentView === "content" || currentView === "content-creation") && (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col items-center"
              >
                <ContentCreation onViewChange={handleViewChange} />
              </motion.div>
            )}

            {(currentView === "jobs" || currentView === "vamshiverse") && (
              <motion.div
                key="jobs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col items-center"
              >
                <VamshiVerse onViewChange={handleViewChange} />
              </motion.div>
            )}

            {currentView === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col items-center"
              >
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Global Footer */}
        <Footer onViewChange={handleViewChange} />
      </main>
    </div>
  );
}
