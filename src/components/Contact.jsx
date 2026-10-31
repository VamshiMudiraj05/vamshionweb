import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Copy, Check, Send, MapPin, Sparkles, ExternalLink } from "lucide-react";
import { FaYoutube, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'sent'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#F3B9C8", "#c2185b", "#ffffff", "#ffd1dc"],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending email / form submission
    setTimeout(() => {
      setStatus("sent");
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F3B9C8", "#c2185b", "#22c55e", "#ffffff"],
      });
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="w-full relative z-20 pt-28 md:pt-36 pb-28">
      <div className="w-full max-w-[880px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#c2185b] dark:text-[#f3b9c8] uppercase mb-3 block">
            Get In Touch
          </span>
          <h1 className="font-instrument font-semibold text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">
            Let's Talk & Collaborate
          </h1>
          <p className="font-sans text-gray-600 dark:text-white/60 text-sm sm:text-base max-w-lg leading-relaxed">
            Have a question, a full-stack engineering role, or a student content collaboration in mind? Drop me a message and I'll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Information & Copy Card (Left) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Direct Email Card */}
            <div className="dashed-border-anim rounded-2xl bg-white dark:bg-[#141414] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white/40 mb-2.5">
                  <Mail size={14} />
                  <span>Direct Email</span>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-sm text-gray-800 dark:text-white font-medium mb-3.5 block hover:text-[#c2185b] dark:hover:text-[#f3b9c8] transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <button
                onClick={handleCopyEmail}
                className="glare-button flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-xs font-medium text-gray-800 dark:text-white transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className="text-green-500" />
                    <span>Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Channel Links Card */}
            <div className="dashed-border-anim rounded-2xl bg-white dark:bg-[#141414] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white/40 mb-3">
                <Sparkles size={14} />
                <span>Channels & Socials</span>
              </div>
              <div className="flex flex-col gap-2.5">
                <a
                  href={personalInfo.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-black/[0.03] dark:bg-white/5 hover:bg-red-500/10 dark:hover:bg-red-500/10 text-xs font-medium text-gray-700 dark:text-white/80 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <FaYoutube className="text-red-500 text-sm" />
                    <span>@vamshi_verse (15K)</span>
                  </div>
                  <ExternalLink size={12} className="opacity-40 group-hover:opacity-100" />
                </a>

                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-black/[0.03] dark:bg-white/5 hover:bg-pink-500/10 dark:hover:bg-pink-500/10 text-xs font-medium text-gray-700 dark:text-white/80 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <FaInstagram className="text-pink-500 text-sm" />
                    <span>@vamshi__verse (5K)</span>
                  </div>
                  <ExternalLink size={12} className="opacity-40 group-hover:opacity-100" />
                </a>

                <a
                  href={personalInfo.memePage}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-black/[0.03] dark:bg-white/5 hover:bg-amber-500/10 dark:hover:bg-amber-500/10 text-xs font-medium text-gray-700 dark:text-white/80 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">😂</span>
                    <span>@mruh_meme_project_ (15K)</span>
                  </div>
                  <ExternalLink size={12} className="opacity-40 group-hover:opacity-100" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-black/[0.03] dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-medium text-gray-700 dark:text-white/80 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-gray-800 dark:text-white text-sm" />
                    <span>GitHub</span>
                  </div>
                  <ExternalLink size={12} className="opacity-40 group-hover:opacity-100" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-black/[0.03] dark:bg-white/5 hover:bg-blue-500/10 dark:hover:bg-blue-500/10 text-xs font-medium text-gray-700 dark:text-white/80 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <FaLinkedin className="text-blue-500 text-sm" />
                    <span>LinkedIn</span>
                  </div>
                  <ExternalLink size={12} className="opacity-40 group-hover:opacity-100" />
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="dashed-border-anim rounded-2xl bg-white dark:bg-[#141414] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white/40 mb-3">
                <MapPin size={14} />
                <span>Location & Status</span>
              </div>
              <p className="text-sm font-medium text-gray-800 dark:text-white mb-2">
                {personalInfo.location}
              </p>
              <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>{personalInfo.status}</span>
              </div>
            </div>
          </div>

          {/* Interactive Form Card (Right) */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="dashed-border-anim rounded-2xl bg-white dark:bg-[#141414] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col gap-4"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-white/70 mb-1.5 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:border-[#c2185b] dark:focus:border-[#f3b9c8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-white/70 mb-1.5 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:border-[#c2185b] dark:focus:border-[#f3b9c8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-white/70 mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Vamshi, I'd love to connect regarding..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:border-[#c2185b] dark:focus:border-[#f3b9c8] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="glare-button flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#c2185b] hover:bg-[#a0134a] text-white text-sm font-medium shadow-md transition-colors cursor-pointer disabled:opacity-50 mt-2"
              >
                {status === "sending" ? (
                  <span>Sending Message...</span>
                ) : status === "sent" ? (
                  <>
                    <Check size={16} />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
