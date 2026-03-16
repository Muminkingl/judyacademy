"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const images = [
  "/work/1.jpg",
  "/work/2.jpg",
  "/work/3.jpg",
  "/work/4.jpg",
  "/work/5.jpg",
];

// Masonry layout config
const layouts = [
  { col: "lg:col-span-2 lg:row-span-2" },
  { col: "lg:col-span-1 lg:row-span-1" },
  { col: "lg:col-span-1 lg:row-span-1" },
  { col: "lg:col-span-1 lg:row-span-1" },
  { col: "lg:col-span-1 lg:row-span-1" },
];

// ── Illustrated SVG icons ────────────────────────────────────────────────────
const BookIllustration = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="12" y="14" width="28" height="38" rx="2" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="1.2"/>
    <rect x="40" y="14" width="28" height="38" rx="2" fill="rgba(201,168,76,0.08)" stroke="#C9A84C" strokeWidth="1.2"/>
    <line x1="12" y1="20" x2="40" y2="20" stroke="#C9A84C" strokeWidth="0.7" opacity="0.5"/>
    <line x1="12" y1="26" x2="40" y2="26" stroke="#C9A84C" strokeWidth="0.7" opacity="0.4"/>
    <line x1="12" y1="32" x2="36" y2="32" stroke="#C9A84C" strokeWidth="0.7" opacity="0.3"/>
    <line x1="40" y1="20" x2="68" y2="20" stroke="#C9A84C" strokeWidth="0.7" opacity="0.5"/>
    <line x1="40" y1="26" x2="68" y2="26" stroke="#C9A84C" strokeWidth="0.7" opacity="0.4"/>
    <line x1="40" y1="32" x2="64" y2="32" stroke="#C9A84C" strokeWidth="0.7" opacity="0.3"/>
    <path d="M40 14 L40 52" stroke="#C9A84C" strokeWidth="1.5" opacity="0.8"/>
    <path d="M40 52 Q30 54 12 52" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
    <path d="M40 52 Q50 54 68 52" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
    {/* Bookmark ribbon */}
    <path d="M58 14 L58 28 L54 24 L50 28 L50 14" fill="rgba(201,168,76,0.3)" stroke="#C9A84C" strokeWidth="0.8"/>
    {/* Stars */}
    <polygon points="26,42 27.5,46.5 32,46.5 28.5,49 30,53.5 26,51 22,53.5 23.5,49 20,46.5 24.5,46.5"
      fill="rgba(201,168,76,0.2)" stroke="#C9A84C" strokeWidth="0.6"/>
  </svg>
);

const ScrollIllustration = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="18" y="20" width="44" height="40" rx="2" fill="rgba(201,168,76,0.08)" stroke="#C9A84C" strokeWidth="1.2"/>
    {/* Scroll rolls */}
    <ellipse cx="18" cy="40" rx="6" ry="20" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1"/>
    <ellipse cx="62" cy="40" rx="6" ry="20" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1"/>
    {/* Text lines */}
    <line x1="26" y1="31" x2="54" y2="31" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6"/>
    <line x1="26" y1="36" x2="54" y2="36" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
    <line x1="26" y1="41" x2="50" y2="41" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4"/>
    <line x1="26" y1="46" x2="54" y2="46" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
    <line x1="26" y1="51" x2="48" y2="51" stroke="#C9A84C" strokeWidth="0.8" opacity="0.3"/>
    {/* Decorative pen nib */}
    <path d="M50 25 L58 17 L62 21 L54 29 Z" fill="rgba(201,168,76,0.2)" stroke="#C9A84C" strokeWidth="0.8"/>
    <line x1="54" y1="29" x2="52" y2="33" stroke="#C9A84C" strokeWidth="0.8"/>
    {/* Drop */}
    <ellipse cx="51" cy="35" rx="1.5" ry="2" fill="#C9A84C" opacity="0.4"/>
  </svg>
);

const MosqueIllustration = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Base platform */}
    <rect x="8" y="56" width="64" height="6" rx="1" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="0.8"/>
    {/* Main dome body */}
    <rect x="22" y="38" width="36" height="20" fill="rgba(201,168,76,0.1)" stroke="#C9A84C" strokeWidth="1"/>
    {/* Main dome arch */}
    <path d="M22 38 Q22 20 40 20 Q58 20 58 38" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="1.2"/>
    {/* Central finial */}
    <line x1="40" y1="12" x2="40" y2="20" stroke="#C9A84C" strokeWidth="1" />
    <polygon points="40,8 42,12 40,14 38,12" fill="#C9A84C" opacity="0.7"/>
    <circle cx="40" cy="16" r="1.5" fill="#C9A84C" opacity="0.5"/>
    {/* Side minarets */}
    <rect x="14" y="42" width="8" height="16" rx="1" fill="rgba(201,168,76,0.1)" stroke="#C9A84C" strokeWidth="0.8"/>
    <path d="M14 42 Q14 36 18 36 Q22 36 22 42" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="0.8"/>
    <line x1="18" y1="30" x2="18" y2="36" stroke="#C9A84C" strokeWidth="0.8"/>
    <polygon points="18,28 19.5,31 18,32 16.5,31" fill="#C9A84C" opacity="0.6"/>
    <rect x="58" y="42" width="8" height="16" rx="1" fill="rgba(201,168,76,0.1)" stroke="#C9A84C" strokeWidth="0.8"/>
    <path d="M58 42 Q58 36 62 36 Q66 36 66 42" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="0.8"/>
    <line x1="62" y1="30" x2="62" y2="36" stroke="#C9A84C" strokeWidth="0.8"/>
    <polygon points="62,28 63.5,31 62,32 60.5,31" fill="#C9A84C" opacity="0.6"/>
    {/* Door arch */}
    <path d="M34 58 L34 48 Q34 44 40 44 Q46 44 46 48 L46 58" fill="rgba(201,168,76,0.08)" stroke="#C9A84C" strokeWidth="0.8"/>
    {/* Window */}
    <circle cx="40" cy="32" r="4" fill="rgba(201,168,76,0.1)" stroke="#C9A84C" strokeWidth="0.7"/>
    <line x1="40" y1="28" x2="40" y2="36" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5"/>
    <line x1="36" y1="32" x2="44" y2="32" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5"/>
  </svg>
);

const StarIllustration = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Large 8-pointed star */}
    <path d="M40 8 L44 28 L60 20 L52 36 L72 40 L52 44 L60 60 L44 52 L40 72 L36 52 L20 60 L28 44 L8 40 L28 36 L20 20 L36 28 Z"
      fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="1.2"/>
    {/* Inner octagon */}
    <polygon points="40,22 48,26 54,22 58,30 54,38 58,46 54,54 46,50 40,54 34,50 26,54 22,46 26,38 22,30 26,22 32,26"
      fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4"/>
    {/* Center circle */}
    <circle cx="40" cy="40" r="8" fill="rgba(201,168,76,0.18)" stroke="#C9A84C" strokeWidth="0.8"/>
    <circle cx="40" cy="40" r="3" fill="#C9A84C" opacity="0.4"/>
  </svg>
);

const PenIllustration = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Quill feather */}
    <path d="M60 10 Q20 20 15 65" stroke="#C9A84C" strokeWidth="1" fill="none"/>
    <path d="M60 10 Q75 30 65 50 Q55 65 15 65" fill="rgba(201,168,76,0.08)" stroke="#C9A84C" strokeWidth="1"/>
    {/* Feather barbs left */}
    <path d="M50 18 Q35 22 25 35" stroke="#C9A84C" strokeWidth="0.6" opacity="0.5"/>
    <path d="M45 22 Q30 28 22 40" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4"/>
    <path d="M40 27 Q27 33 20 46" stroke="#C9A84C" strokeWidth="0.6" opacity="0.35"/>
    <path d="M35 32 Q24 38 18 52" stroke="#C9A84C" strokeWidth="0.6" opacity="0.3"/>
    <path d="M30 38 Q22 44 17 56" stroke="#C9A84C" strokeWidth="0.6" opacity="0.25"/>
    {/* Feather barbs right */}
    <path d="M55 22 Q62 35 62 46" stroke="#C9A84C" strokeWidth="0.6" opacity="0.5"/>
    <path d="M52 28 Q62 40 60 52" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4"/>
    <path d="M48 34 Q58 44 54 56" stroke="#C9A84C" strokeWidth="0.6" opacity="0.35"/>
    {/* Nib */}
    <path d="M15 65 L12 70 L20 68 Z" fill="#C9A84C" opacity="0.6"/>
    {/* Ink swirl */}
    <path d="M14 68 Q8 72 10 76 Q12 78 16 76" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4"/>
  </svg>
);

const illustrations = [BookIllustration, ScrollIllustration, MosqueIllustration, StarIllustration, PenIllustration];

// ── Ornamental elements ──────────────────────────────────────────────────────
const OrnateRule = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <div className={`flex items-center gap-2 ${className}`} style={style}>
    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
    <Star className="w-2.5 h-2.5 shrink-0" style={{ color: "#C9A84C", opacity: 0.7 }} fill="#C9A84C" fillOpacity={0.4} />
    <div className="w-4 h-px" style={{ background: "rgba(201,168,76,0.25)" }} />
    <Star className="w-1.5 h-1.5 shrink-0" style={{ color: "#C9A84C", opacity: 0.35 }} />
    <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.5))" }} />
  </div>
);

const CornerBrackets = ({ size = 16 }: { size?: number }) => (
  <>
    <div className="absolute top-0 left-0" style={{ width: size, height: size, borderTop: "1px solid rgba(201,168,76,0.5)", borderLeft: "1px solid rgba(201,168,76,0.5)" }} />
    <div className="absolute top-0 right-0" style={{ width: size, height: size, borderTop: "1px solid rgba(201,168,76,0.5)", borderRight: "1px solid rgba(201,168,76,0.5)" }} />
    <div className="absolute bottom-0 left-0" style={{ width: size, height: size, borderBottom: "1px solid rgba(201,168,76,0.5)", borderLeft: "1px solid rgba(201,168,76,0.5)" }} />
    <div className="absolute bottom-0 right-0" style={{ width: size, height: size, borderBottom: "1px solid rgba(201,168,76,0.5)", borderRight: "1px solid rgba(201,168,76,0.5)" }} />
  </>
);

export default function GalleryJudy() {
  const { dir, t, toLocalNum } = useLanguage();
  const isRTL = dir === "rtl";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { value: t("gallery", "stat1Value") || "50+", label: t("gallery", "stat1Label") || "Research Papers", Illustration: BookIllustration },
    { value: t("gallery", "stat2Value") || "30+", label: t("gallery", "stat2Label") || "Qur'anic Studies", Illustration: ScrollIllustration },
    { value: t("gallery", "stat3Value") || "4", label: t("gallery", "stat3Label") || "Governorates", Illustration: MosqueIllustration },
    { value: t("gallery", "stat4Value") || "100+", label: t("gallery", "stat4Label") || "Scholars Supported", Illustration: StarIllustration },
    { value: t("gallery", "stat5Value") || "20+", label: t("gallery", "stat5Label") || "Academic Events", Illustration: PenIllustration },
  ];

  return (
    <section
      id="gallery"
      ref={ref}
      dir={dir}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1E0F08 0%, #160900 50%, #1A0C07 100%)" }}
    >
      {/* ── Islamic tile pattern ─────────────────────────────────── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="gal-tile" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
            <polygon points="36,4 44,24 64,24 48,38 54,58 36,46 18,58 24,38 8,24 28,24"
              fill="none" stroke="#C9A84C" strokeWidth="0.6" />
            <circle cx="36" cy="36" r="7" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gal-tile)" />
      </svg>

      {/* ── Grain ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "160px" }}
      />

      {/* ── Top / bottom gold rules ──────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)" }} />

      {/* ── Radial glow ──────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />

      {/* ══════════════════════════════════════════════════════════
          SECTION HEADER
      ══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 pt-20 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* Decorative SVG arch over heading */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-6"
          >
            <svg viewBox="0 0 320 60" className="w-72 sm:w-96 h-auto" fill="none">
              {/* Outer arch */}
              <path d="M10 58 Q10 10 160 10 Q310 10 310 58"
                stroke="#C9A84C" strokeWidth="0.8" fill="none" strokeDasharray="5 4" opacity="0.4" />
              {/* Inner arch */}
              <path d="M30 58 Q30 25 160 25 Q290 25 290 58"
                stroke="#C9A84C" strokeWidth="0.5" fill="none" opacity="0.25" />
              {/* Keystone */}
              <polygon points="160,4 168,16 160,22 152,16" stroke="#C9A84C" strokeWidth="0.8" fill="rgba(201,168,76,0.15)" />
              {/* Crown star */}
              <polygon points="160,0 162,5 167,5 163,8 165,13 160,10 155,13 157,8 153,5 158,5"
                stroke="#C9A84C" strokeWidth="0.6" fill="rgba(201,168,76,0.2)" />
              {/* Side rosettes */}
              <circle cx="10" cy="58" r="4" stroke="#C9A84C" strokeWidth="0.6" fill="none" opacity="0.4" />
              <circle cx="310" cy="58" r="4" stroke="#C9A84C" strokeWidth="0.6" fill="none" opacity="0.4" />
              <circle cx="10" cy="58" r="1.5" fill="#C9A84C" opacity="0.4" />
              <circle cx="310" cy="58" r="1.5" fill="#C9A84C" opacity="0.4" />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="text-[10px] font-black tracking-[0.32em] uppercase italic mb-3"
            style={{ color: "rgba(201,168,76,0.5)" }}
          >
            {t("gallery", "sectionLabel") || "Visual Archive"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-tight tracking-tight mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#F5EDD0", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {t("gallery", "title") || "Gallery of Knowledge"}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <OrnateRule className="max-w-xs mx-auto my-4" />
            <p className="text-sm leading-relaxed italic"
              style={{ color: "rgba(191,168,130,0.55)", fontFamily: "Georgia, serif" }}>
              {t("gallery", "description") || "Moments captured from our academic programs, events, and scholarly pursuits across Kurdistan."}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MASONRY GALLERY
      ══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* Counter badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className={`flex ${isRTL ? "justify-end" : "justify-start"} mb-5`}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase italic"
            style={{ color: "rgba(201,168,76,0.35)", fontFamily: "Georgia, serif" }}>
            {toLocalNum(images.length)} {t("gallery", "photosLabel") || "photographs"}
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 auto-rows-[180px] lg:auto-rows-[210px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden cursor-pointer group ${layouts[i]?.col}`}
              style={{ border: "1px solid rgba(201,168,76,0.12)" }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img}
                alt={`${t("gallery", "title") || "Gallery"} ${toLocalNum(i + 1)}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                style={{ filter: "sepia(8%) contrast(1.05)" }}
              />

              {/* Dark vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Ornate corner brackets on hover */}
              <div className="absolute inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l" style={{ borderColor: "rgba(201,168,76,0.7)" }} />
                <div className="absolute top-0 right-0 w-5 h-5 border-t border-r" style={{ borderColor: "rgba(201,168,76,0.7)" }} />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l" style={{ borderColor: "rgba(201,168,76,0.7)" }} />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r" style={{ borderColor: "rgba(201,168,76,0.7)" }} />
              </div>

              {/* Zoom center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-11 h-11 flex items-center justify-center"
                  style={{ background: "rgba(18,8,0,0.6)", border: "1px solid rgba(201,168,76,0.5)", backdropFilter: "blur(4px)" }}>
                  <ZoomIn className="w-4 h-4" style={{ color: "#C9A84C" }} />
                </div>
              </div>

              {/* Number tag */}
              <div className={`absolute ${isRTL ? "top-2 right-2" : "top-2 left-2"} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                <span className="text-[10px] font-black px-2 py-0.5"
                  style={{ background: "rgba(18,8,0,0.7)", color: "#C9A84C", backdropFilter: "blur(4px)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  {toLocalNum(String(i + 1).padStart(2, "0"))}
                </span>
              </div>

              {/* Gold bottom sweep */}
              <motion.div
                className={`absolute bottom-0 ${isRTL ? "right-0" : "left-0"} right-0 h-[2px]`}
                style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", transformOrigin: isRTL ? "right" : "left" }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          ILLUSTRATED STATS BAR
      ══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Curved connector line */}
          <div className="flex justify-center mb-8">
            <svg viewBox="0 0 600 40" className="w-full max-w-2xl" fill="none">
              <path d="M0 38 Q150 5 300 18 Q450 30 600 38"
                stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.3" strokeDasharray="6 5" />
              <circle cx="0" cy="38" r="2.5" fill="#C9A84C" opacity="0.3" />
              <circle cx="300" cy="18" r="3" fill="#C9A84C" opacity="0.4" />
              <circle cx="600" cy="38" r="2.5" fill="#C9A84C" opacity="0.3" />
            </svg>
          </div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ border: "1px solid rgba(201,168,76,0.18)" }}
          >
            <CornerBrackets size={20} />
            {/* Top gold accent */}
            <div className="h-[1.5px] w-full" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
              {stats.map(({ value, label, Illustration }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.65 + i * 0.09, duration: 0.55 }}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="relative flex flex-col items-center justify-center text-center py-9 px-5 cursor-default group overflow-hidden"
                  style={{
                    borderRight: i < stats.length - 1 ? "1px solid rgba(201,168,76,0.1)" : "none",
                    background: hoveredStat === i ? "rgba(201,168,76,0.06)" : "transparent",
                    transition: "background 0.3s",
                  }}
                >
                  {/* Illustration */}
                  <motion.div
                    className="w-14 h-14 mb-4"
                    animate={{ scale: hoveredStat === i ? 1.12 : 1, rotate: hoveredStat === i ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Illustration />
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    className="font-black leading-none mb-1.5 tabular-nums"
                    animate={{ color: hoveredStat === i ? "#E8C97A" : "#F5EDD0" }}
                    transition={{ duration: 0.25 }}
                    style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                  >
                    {value}
                  </motion.div>

                  {/* Label */}
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase leading-tight"
                    style={{ color: "rgba(201,168,76,0.6)" }}>
                    {label}
                  </p>

                  {/* Hover bottom line */}
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-px"
                    style={{ background: "#C9A84C" }}
                    animate={{ opacity: hoveredStat === i ? 0.6 : 0, scaleX: hoveredStat === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom ornate rule */}
            <OrnateRule className="px-6 py-3" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" } as React.CSSProperties} />
          </motion.div>

          {/* Bottom curved line */}
          <div className="flex justify-center mt-8">
            <svg viewBox="0 0 600 40" className="w-full max-w-2xl" fill="none">
              <path d="M0 2 Q150 35 300 22 Q450 10 600 2"
                stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.2" strokeDasharray="6 5" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(10,4,0,0.95)", backdropFilter: "blur(12px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden"
              style={{ border: "1px solid rgba(201,168,76,0.3)", boxShadow: "0 24px 80px -16px rgba(0,0,0,0.8)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top gold rule */}
              <div className="absolute top-0 left-0 right-0 h-[2px] z-10"
                style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
              <CornerBrackets size={16} />

              <img src={images[lightbox]} alt="" className="w-full h-full object-contain"
                style={{ background: "#0A0400", filter: "sepia(5%) contrast(1.03)" }} />

              {/* Controls */}
              <button onClick={() => setLightbox(null)}
                className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} w-9 h-9 flex items-center justify-center transition-colors`}
                style={{ background: "rgba(10,4,0,0.7)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}>
                <X className="w-4 h-4" />
              </button>

              {lightbox > 0 && (
                <button onClick={() => setLightbox(lightbox - 1)}
                  className={`absolute ${isRTL ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center transition-colors`}
                  style={{ background: "rgba(10,4,0,0.7)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}
              {lightbox < images.length - 1 && (
                <button onClick={() => setLightbox(lightbox + 1)}
                  className={`absolute ${isRTL ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center transition-colors`}
                  style={{ background: "rgba(10,4,0,0.7)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              {/* Counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-bold italic"
                style={{ background: "rgba(10,4,0,0.75)", border: "1px solid rgba(201,168,76,0.25)", color: "rgba(201,168,76,0.8)", fontFamily: "Georgia, serif" }}>
                {toLocalNum(lightbox + 1)} / {toLocalNum(images.length)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}