import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Globe,
  ExternalLink,
  Sparkles,
  Pin,
} from "lucide-react";
import { isValidUrl } from "../utils/jobUtils";

export default function FeaturedWalkinCard({ job }) {
  if (!job) return null;

  const hasValidLink = isValidUrl(job.applicationUrl);
  const targetUrl = hasValidLink ? job.applicationUrl.trim() : null;
  const drive = job.driveDetails || {};

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#c2185b]/80 dark:border-[#f3b9c8]/80 bg-gradient-to-br from-[#fff7f9] via-white to-[#fef2f6] dark:from-[#1a0f15] dark:via-[#131316] dark:to-[#170e14] p-5 sm:p-7 shadow-[0_8px_30px_rgba(194,24,91,0.10)] dark:shadow-[0_8px_30px_rgba(194,24,91,0.20)] transition-all">
      {/* Top Header Row: Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c2185b] text-white text-[11px] font-bold tracking-wider uppercase shadow-xs">
            <Sparkles size={12} className="animate-spin" style={{ animationDuration: "3s" }} />
            {job.badge || "WALK-IN DRIVE"}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#fce7ec] dark:bg-[#2a1720] text-[#c2185b] dark:text-[#f3b9c8] text-[11px] font-semibold tracking-wide border border-[#f3b9c8]/60 dark:border-[#c2185b]/50">
            <Pin size={11} className="rotate-45" />
            <span>Pinned on Top</span>
          </span>
        </div>

        {job.pinnedUntil && (
          <span className="text-xs font-mono font-medium text-gray-500 dark:text-gray-400">
            Active till: <strong className="text-gray-800 dark:text-gray-200">{job.pinnedUntil}</strong>
          </span>
        )}
      </div>

      {/* Main Title & Organizer */}
      <div className="mb-4">
        <h2 className="font-instrument text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white tracking-tight leading-snug">
          {job.title}
        </h2>
        {job.company && (
          <p className="text-xs sm:text-sm text-[#c2185b] dark:text-[#f3b9c8] font-medium mt-1">
            Organized by {job.company}
          </p>
        )}
      </div>

      {/* Description / Note */}
      {job.note && (
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
          {job.note}
        </p>
      )}

      {/* Key Walk-in Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-white/70 dark:bg-white/[0.03] p-3.5 sm:p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.08]">
        {drive.eventDate && (
          <div className="flex items-start gap-2.5 text-xs sm:text-sm">
            <div className="w-7 h-7 rounded-lg bg-[#fce7ec] dark:bg-[#2a1720] text-[#c2185b] dark:text-[#f3b9c8] flex items-center justify-center shrink-0 mt-0.5">
              <Calendar size={14} />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold">
                Drive Date
              </div>
              <div className="font-semibold text-gray-800 dark:text-gray-200">
                {drive.eventDate}
              </div>
            </div>
          </div>
        )}

        {drive.time && (
          <div className="flex items-start gap-2.5 text-xs sm:text-sm">
            <div className="w-7 h-7 rounded-lg bg-[#fce7ec] dark:bg-[#2a1720] text-[#c2185b] dark:text-[#f3b9c8] flex items-center justify-center shrink-0 mt-0.5">
              <Clock size={14} />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold">
                Timing
              </div>
              <div className="font-semibold text-gray-800 dark:text-gray-200">
                {drive.time}
              </div>
            </div>
          </div>
        )}

        {drive.venue && (
          <div className="flex items-start gap-2.5 text-xs sm:text-sm sm:col-span-2">
            <div className="w-7 h-7 rounded-lg bg-[#fce7ec] dark:bg-[#2a1720] text-[#c2185b] dark:text-[#f3b9c8] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin size={14} />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold">
                Venue
              </div>
              <div className="font-medium text-gray-700 dark:text-gray-300 leading-snug">
                {drive.venue}
              </div>
            </div>
          </div>
        )}

        {(drive.contact || drive.website) && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:col-span-2 pt-1 border-t border-black/[0.04] dark:border-white/[0.04] text-xs text-gray-600 dark:text-gray-400">
            {drive.contact && (
              <span className="inline-flex items-center gap-1.5">
                <Phone size={12} className="text-[#c2185b] dark:text-[#f3b9c8]" />
                <span>Contact: <strong className="text-gray-800 dark:text-gray-200">{drive.contact}</strong></span>
              </span>
            )}
            {drive.website && (
              <span className="inline-flex items-center gap-1.5">
                <Globe size={12} className="text-[#c2185b] dark:text-[#f3b9c8]" />
                <a
                  href={drive.website.startsWith("http") ? drive.website : `https://${drive.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-800 dark:text-gray-200"
                >
                  {drive.website.replace(/^https?:\/\//, "")}
                </a>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Action Button: Register for Drive */}
      {targetUrl && (
        <div className="flex items-center justify-between flex-wrap gap-3">
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glare-button w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#c2185b] hover:bg-[#a0134b] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40 cursor-pointer"
          >
            <span>Register for Walk-in Drive</span>
            <ExternalLink size={15} />
          </a>

          <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
            ⚡ Direct Google Forms registration
          </span>
        </div>
      )}
    </div>
  );
}
