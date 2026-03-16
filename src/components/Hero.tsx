"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { BookOpen, GraduationCap, ArrowRight, ScrollText, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ─── Color palette ──────────────────────────────────────────────────────────
// Primary dark:   #1E0F08  (deep espresso/leather)
// Surface:        #2C1A0E  (rich brown)
// Accent gold:    #C9A84C  (antique gold)
// Light gold:     #E8C97A  (warm highlight)
// Parchment:      #F5EDD0  (aged paper)
// Muted parchment:#BFA882  (subdued text)

// ─── Geometric Islamic star pattern SVG ────────────────────────────────────
const IslamicPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.045 }}
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="islamic-star" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        {/* 8-pointed star */}
        <polygon
          points="40,8 48,28 68,28 53,42 59,62 40,50 21,62 27,42 12,28 32,28"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.8"
        />
        {/* Inner octagon */}
        <polygon
          points="40,18 46,24 52,22 54,28 60,30 58,36 62,42 56,44 56,50 50,50 46,56 40,54 34,56 30,50 24,50 24,44 18,42 22,36 20,30 26,28 28,22 34,24"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.4"
        />
        {/* Corner diamonds */}
        <polygon points="0,0 6,8 0,16 -6,8" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
        <polygon points="80,0 86,8 80,16 74,8" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
        <polygon points="0,80 6,88 0,96 -6,88" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
        <polygon points="80,80 86,88 80,96 74,88" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
        {/* Connecting lines */}
        <line x1="0" y1="40" x2="12" y2="28" stroke="#C9A84C" strokeWidth="0.4" />
        <line x1="80" y1="40" x2="68" y2="28" stroke="#C9A84C" strokeWidth="0.4" />
        <line x1="40" y1="0" x2="28" y2="22" stroke="#C9A84C" strokeWidth="0.4" />
        <line x1="40" y1="80" x2="28" y2="58" stroke="#C9A84C" strokeWidth="0.4" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#islamic-star)" />
  </svg>
);

// ─── Animated parchment counter ─────────────────────────────────────────────
const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const { toLocalNum } = useLanguage();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 55, damping: 18 });
  useEffect(() => { if (inView) spring.set(to); }, [inView, to, spring]);
  useEffect(() => spring.on("change", (v) => { if (ref.current) ref.current.textContent = toLocalNum(Math.round(v)) + suffix; }), [spring, suffix, toLocalNum]);
  return <span ref={ref}>{toLocalNum(0)}{suffix}</span>;
};

// ─── Ornate arch frame (SVG) ─────────────────────────────────────────────────
const ArchFrame = () => (
  <svg viewBox="0 0 420 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none z-20">
    {/* Outer arch */}
    <path
      d="M30 560 L30 220 Q30 40 210 40 Q390 40 390 220 L390 560"
      stroke="#C9A84C"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="6 4"
      opacity="0.5"
    />
    {/* Inner arch */}
    <path
      d="M55 560 L55 230 Q55 75 210 75 Q365 75 365 230 L365 560"
      stroke="#C9A84C"
      strokeWidth="0.8"
      fill="none"
      opacity="0.35"
    />
    {/* Crown keystone */}
    <polygon points="210,28 228,50 210,62 192,50" stroke="#C9A84C" strokeWidth="1" fill="rgba(201,168,76,0.15)" />
    {/* Top ornament star */}
    <polygon points="210,10 214,20 225,20 216,26 219,37 210,31 201,37 204,26 195,20 206,20"
      stroke="#C9A84C" strokeWidth="0.8" fill="rgba(201,168,76,0.2)" />
    {/* Corner rosettes */}
    <circle cx="30" cy="560" r="8" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
    <circle cx="390" cy="560" r="8" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
    <circle cx="30" cy="560" r="3" fill="#C9A84C" opacity="0.4" />
    <circle cx="390" cy="560" r="3" fill="#C9A84C" opacity="0.4" />
    {/* Horizontal band */}
    <line x1="30" y1="460" x2="390" y2="460" stroke="#C9A84C" strokeWidth="0.6" strokeDasharray="4 6" opacity="0.3" />
    {/* Side calligraphy panels (decorative lines) */}
    {[0, 1, 2, 3, 4].map(i => (
      <line key={i} x1="42" y1={300 + i * 22} x2="58" y2={300 + i * 22} stroke="#C9A84C" strokeWidth="0.8" opacity="0.3" />
    ))}
    {[0, 1, 2, 3, 4].map(i => (
      <line key={i} x1="362" y1={300 + i * 22} x2="378" y2={300 + i * 22} stroke="#C9A84C" strokeWidth="0.8" opacity="0.3" />
    ))}
  </svg>
);

// ─── Floating ornament ───────────────────────────────────────────────────────
const FloatingStar = ({ x, y, delay, size }: { x: string; y: string; delay: number; size: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    animate={{ y: [0, -12, 0], opacity: [0.2, 0.6, 0.2], rotate: [0, 15, 0] }}
    transition={{ duration: 5 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <Star style={{ width: size, height: size, color: "#C9A84C" }} strokeWidth={1} />
  </motion.div>
);

export default function HeroJudy() {
  const { dir, t } = useLanguage();
  const isRTL = dir === "rtl";
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } } };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #120800 0%, #1E0F08 40%, #1A0C07 100%)" }}
      dir={dir}
    >
      {/* ── Grain ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "160px" }}
      />

      {/* ── Islamic star tile pattern ──────────────────────────────── */}
      <IslamicPattern />

      {/* ── Radial glow ───────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 55% 40%, rgba(201,168,76,0.09) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(18,8,0,0.9) 0%, transparent 100%)" }} />

      {/* ── Horizontal rule lines ─────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />

      {/* ── Floating ornaments ─────────────────────────────────────── */}
      <FloatingStar x="6%" y="18%" delay={0} size={14} />
      <FloatingStar x="91%" y="12%" delay={1.5} size={10} />
      <FloatingStar x="4%" y="72%" delay={2.8} size={8} />
      <FloatingStar x="93%" y="70%" delay={0.8} size={12} />
      <FloatingStar x="50%" y="6%" delay={1.9} size={7} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isRTL ? "lg:flex-row-reverse" : ""}`}>

          {/* ════════════════ LEFT / TEXT ════════════════ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ y: textY }}
            className={`flex flex-col items-center lg:items-start text-center lg:text-start order-2 lg:order-${isRTL ? "2" : "1"}`}
          >
            {/* ── Institution badge ──────────────────────────────── */}
            <motion.div variants={fadeUp} className="mb-6">
              <div
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-sm text-xs font-bold tracking-[0.25em] uppercase"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: "#C9A84C",
                  letterSpacing: "0.22em",
                }}
              >
                <ScrollText className="w-3.5 h-3.5" />
                {t("hero", "badge")}
              </div>
            </motion.div>

            {/* ── Name & title ───────────────────────────────────── */}
            <motion.div variants={fadeUp} className="mb-2">
              <p
                className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ color: "#BFA882" }}
              >
                {t("hero", "welcomeTo")}
              </p>
              {/* Ornate rule above title */}
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <div className="h-px flex-1 max-w-[48px]" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
                <Star className="w-3 h-3" style={{ color: "#C9A84C" }} />
                <div className="h-px flex-1 max-w-[48px]" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: "#F5EDD0" }}
              >
                {t("hero", "titleLine1")}
                <br />
                <span className="relative inline-block">
                  <span style={{ color: "#C9A84C" }}>{t("hero", "titleLine2")}</span>
                  {/* Underline ornament */}
                  <motion.svg
                    viewBox="0 0 300 14"
                    className="absolute -bottom-2 left-0 w-full"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.9, ease: "easeOut" }}
                  >
                    <motion.path
                      d="M4 10 Q75 2 150 8 Q225 14 296 6"
                      stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.0, duration: 0.9, ease: "easeOut" }}
                    />
                    {/* Decorative dots on underline */}
                    <motion.circle cx="4" cy="10" r="2.5" fill="#C9A84C"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}
                    />
                    <motion.circle cx="296" cy="6" r="2.5" fill="#C9A84C"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}
                    />
                  </motion.svg>
                </span>
              </h1>

              <p
                className="text-sm sm:text-base mt-4 font-medium tracking-[0.12em]"
                style={{ color: "#BFA882", fontStyle: "italic" }}
              >
                {t("hero", "subtitle")}
              </p>
            </motion.div>

            {/* ── Description ────────────────────────────────────── */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm sm:text-base leading-[1.9] max-w-[500px]"
              style={{ color: "rgba(191,168,130,0.75)" }}
            >
              {t("hero", "description")}
            </motion.p>

            {/* ── Ornate quote ───────────────────────────────────── */}
            <motion.div
              variants={fadeUp}
              className={`relative mt-7 mb-9 max-w-[500px] w-full`}
            >
              {/* Quote container with ornate border */}
              <div
                className="relative px-6 py-5 rounded-sm"
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                {/* Corner ornaments */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l" style={{ borderColor: "#C9A84C" }} />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r" style={{ borderColor: "#C9A84C" }} />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l" style={{ borderColor: "#C9A84C" }} />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r" style={{ borderColor: "#C9A84C" }} />
                {/* Large quote glyph */}
                <span
                  className="absolute -top-4 left-4 text-4xl font-black leading-none select-none"
                  style={{ color: "#C9A84C", fontFamily: "Georgia, serif" }}
                >
                  "
                </span>
                <p
                  className="text-sm sm:text-base font-semibold leading-relaxed text-center"
                  style={{ color: "#E8C97A", fontStyle: "italic", fontFamily: "Georgia, serif" }}
                >
                  {t("hero", "quote")}
                </p>
              </div>
            </motion.div>

            {/* ── Stats ──────────────────────────────────────────── */}
            <motion.div variants={fadeUp} className="flex gap-8 sm:gap-10 mb-10 w-full max-w-[500px]">
              {[
                { value: 4, suffix: "+", label: t("hero", "statGovernorates") },
                { value: 50, suffix: "+", label: t("hero", "statResearchers") },
                { value: 100, suffix: "%", label: t("hero", "statAcademic") },
              ].map(({ value, suffix, label }) => (
                <div key={label} className={`flex flex-col gap-1 ${isRTL ? "items-end" : "items-start"}`}>
                  <div
                    className="text-3xl sm:text-4xl font-black leading-none"
                    style={{ color: "#C9A84C", fontFamily: "Georgia, serif" }}
                  >
                    <Counter to={value} suffix={suffix} />
                  </div>
                  <div
                    className="text-[10px] font-bold tracking-[0.2em] uppercase"
                    style={{ color: "rgba(191,168,130,0.55)" }}
                  >
                    {label}
                  </div>
                  <div className="w-full h-px mt-1" style={{ background: "linear-gradient(to right, #C9A84C40, transparent)" }} />
                </div>
              ))}
            </motion.div>

            {/* ── Feature tiles ──────────────────────────────────── */}
            <motion.div variants={stagger} className="w-full max-w-[500px] grid grid-cols-2 gap-3 mb-10">
              {[
                { icon: BookOpen, title: t("hero", "feature1Title"), desc: t("hero", "feature1Desc") },
                { icon: GraduationCap, title: t("hero", "feature2Title"), desc: t("hero", "feature2Desc") },
              ].map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative flex flex-col gap-3 p-4 sm:p-5 cursor-default overflow-hidden rounded-sm"
                  style={{
                    background: "rgba(201,168,76,0.06)",
                    border: "1px solid rgba(201,168,76,0.18)",
                    boxShadow: "0 4px 24px -6px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Corner ornament */}
                  <div className="absolute top-0 right-0 w-8 h-8" style={{ borderTop: "1px solid rgba(201,168,76,0.35)", borderRight: "1px solid rgba(201,168,76,0.35)" }} />
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
                    <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black mb-0.5" style={{ color: "#F5EDD0", fontFamily: "Georgia, serif" }}>{title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(191,168,130,0.6)" }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ── CTAs ───────────────────────────────────────────── */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative group inline-flex items-center gap-2.5 font-black text-sm tracking-widest uppercase px-8 py-4 rounded-sm overflow-hidden"
                style={{ background: "#C9A84C", color: "#1E0F08" }}
              >
                <span className="relative z-10">{t("hero", "exploreBtn")}</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: isRTL ? [0, -4, 0] : [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                </motion.span>
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.8 }}
                />
              </motion.a>

              <motion.a
                href="/news"
                whileHover={{ scale: 1.03, background: "rgba(201,168,76,0.12)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 font-black text-sm tracking-widest uppercase px-8 py-4 rounded-sm transition-all"
                style={{ border: "1px solid rgba(201,168,76,0.45)", color: "#C9A84C" }}
              >
                <ScrollText className="w-4 h-4" />
                {t("hero", "newsBtn")}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ════════════════ RIGHT / IMAGE ════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imageY }}
            className={`relative lg:h-[620px] h-[420px] w-full flex items-center justify-center order-1 lg:order-${isRTL ? "1" : "2"}`}
          >
            {/* Outer glow */}
            <div
              className="absolute inset-0 pointer-events-none rounded-full"
              style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 65%)" }}
            />

            {/* Slow pulsing ring */}
            <motion.div
              className="absolute inset-8 rounded-full pointer-events-none"
              style={{ border: "1px solid rgba(201,168,76,0.12)" }}
              animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-16 rounded-full pointer-events-none"
              style={{ border: "1px solid rgba(201,168,76,0.08)" }}
              animate={{ scale: [1.04, 1, 1.04], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Image container — arch shape via clip-path */}
            <motion.div
              className="relative z-10"
              style={{ width: "88%", height: "95%" }}
            >
              {/* Arch clip */}
              <div
                className="relative w-full h-full overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 8%, 100% 100%, 0% 100%, 0% 8%)",
                  borderRadius: "0 0 24px 24px",
                }}
              >
                <img
                  src="/heroooooo.jpeg"
                  alt="Judy Academy — Qur'anic Research and Studies"
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for atmosphere */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(30,15,8,0.3) 0%, rgba(30,15,8,0.05) 40%, rgba(30,15,8,0.45) 100%)" }}
                />
              </div>

              {/* Arch ornate frame overlay */}
              <ArchFrame />

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-max"
                style={{
                  background: "rgba(18,8,0,0.9)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "2px",
                  padding: "10px 20px",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center" style={{ borderRight: "1px solid rgba(201,168,76,0.2)", paddingRight: "12px" }}>
                    <BookOpen className="w-4 h-4 mb-1" style={{ color: "#C9A84C" }} />
                    <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#C9A84C" }}>{t("hero", "researchLabel")}</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold" style={{ color: "#F5EDD0" }}>{t("hero", "estKurdistan")}</div>
                    <div className="text-[10px]" style={{ color: "rgba(191,168,130,0.5)" }}>{t("hero", "academicExcellence")}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Academy seal / logo badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.0, type: "spring", stiffness: 180, damping: 16 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="absolute bottom-16 z-30"
              style={{ [isRTL ? "right" : "left"]: "-1.5rem" }}
            >
              <div
                className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center relative"
                style={{
                  background: "radial-gradient(circle at 40% 40%, #2C1A0E 60%, #1A0C07 100%)",
                  border: "2px solid #C9A84C",
                  outline: "1px solid rgba(201,168,76,0.2)",
                  outlineOffset: "4px",
                  borderRadius: "50%",
                  boxShadow: "0 12px 40px -8px rgba(0,0,0,0.6)",
                }}
              >
                {/* Geometric seal inside badge */}
                <img src="/judy.png" alt="Judy Academy Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
              </div>
            </motion.div>

            {/* Floating decorative verse dots */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute z-30 pointer-events-none"
                style={{
                  right: `${14 + i * 9}%`,
                  top: `${6 + i * 6}%`,
                  width: 6 + i * 2,
                  height: 6 + i * 2,
                  borderRadius: "50%",
                  background: "#C9A84C",
                  opacity: 0.4,
                }}
                animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3.5 + i, repeat: Infinity, delay: i * 1.2, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}