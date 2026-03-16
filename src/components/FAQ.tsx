"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Star, ScrollText, Feather } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ── Ornate rule ──────────────────────────────────────────────────────────────
const OrnateRule = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.45))" }} />
    <Star className="w-2 h-2 shrink-0" style={{ color: "#C9A84C", opacity: 0.6 }} fill="#C9A84C" fillOpacity={0.4} />
    <div className="w-5 h-px" style={{ background: "rgba(201,168,76,0.25)" }} />
    <Star className="w-1.5 h-1.5 shrink-0" style={{ color: "#C9A84C", opacity: 0.3 }} />
    <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.45))" }} />
  </div>
);

// ── Corner brackets ──────────────────────────────────────────────────────────
const Brackets = ({ size = 14 }: { size?: number }) => (
  <>
    <div className="absolute top-0 left-0" style={{ width: size, height: size, borderTop: "1px solid rgba(201,168,76,0.45)", borderLeft: "1px solid rgba(201,168,76,0.45)" }} />
    <div className="absolute top-0 right-0" style={{ width: size, height: size, borderTop: "1px solid rgba(201,168,76,0.45)", borderRight: "1px solid rgba(201,168,76,0.45)" }} />
    <div className="absolute bottom-0 left-0" style={{ width: size, height: size, borderBottom: "1px solid rgba(201,168,76,0.45)", borderLeft: "1px solid rgba(201,168,76,0.45)" }} />
    <div className="absolute bottom-0 right-0" style={{ width: size, height: size, borderBottom: "1px solid rgba(201,168,76,0.45)", borderRight: "1px solid rgba(201,168,76,0.45)" }} />
  </>
);

// ── Animated manuscript open/close icon ─────────────────────────────────────
const ManuscriptToggle = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
    <motion.line x1="12" y1="4" x2="12" y2="20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"
      animate={{ opacity: open ? 0 : 1, scaleY: open ? 0 : 1 }}
      transition={{ duration: 0.25 }}
      style={{ transformOrigin: "center" }}
    />
    <motion.line x1="4" y1="12" x2="20" y2="12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"
      animate={{ rotate: open ? 45 : 0, x: open ? 0 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ transformOrigin: "center" }}
    />
    {/* Decorative dots at tips when closed */}
    {!open && (
      <>
        <circle cx="12" cy="4" r="1" fill="#C9A84C" opacity={0.5} />
        <circle cx="12" cy="20" r="1" fill="#C9A84C" opacity={0.5} />
        <circle cx="4" cy="12" r="1" fill="#C9A84C" opacity={0.5} />
        <circle cx="20" cy="12" r="1" fill="#C9A84C" opacity={0.5} />
      </>
    )}
  </svg>
);

// ── Per-question illustrated icon ────────────────────────────────────────────
const icons = [
  // Quill
  () => (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
      <path d="M30 5 Q10 10 8 32" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5"/>
      <path d="M30 5 Q38 15 32 25 Q26 32 8 32" fill="rgba(201,168,76,0.1)" stroke="#C9A84C" strokeWidth="0.9"/>
      <path d="M8 32 L6 36 L12 34 Z" fill="#C9A84C" opacity="0.5"/>
      <path d="M25 10 Q32 18 28 24" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4"/>
      <path d="M22 13 Q30 20 25 27" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3"/>
    </svg>
  ),
  // Star-compass
  () => (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
      <polygon points="20,4 22,15 30,8 23,17 34,20 23,23 30,32 22,25 20,36 18,25 10,32 17,23 6,20 17,17 10,8 18,15"
        fill="rgba(201,168,76,0.1)" stroke="#C9A84C" strokeWidth="0.9"/>
      <circle cx="20" cy="20" r="4" fill="rgba(201,168,76,0.18)" stroke="#C9A84C" strokeWidth="0.7"/>
    </svg>
  ),
  // Open book
  () => (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
      <rect x="4" y="10" width="14" height="20" rx="1" fill="rgba(201,168,76,0.1)" stroke="#C9A84C" strokeWidth="0.9"/>
      <rect x="22" y="10" width="14" height="20" rx="1" fill="rgba(201,168,76,0.08)" stroke="#C9A84C" strokeWidth="0.9"/>
      <path d="M18 10 L18 30" stroke="#C9A84C" strokeWidth="1.2" opacity="0.7"/>
      <line x1="6" y1="15" x2="16" y2="15" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5"/>
      <line x1="6" y1="19" x2="16" y2="19" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4"/>
      <line x1="6" y1="23" x2="14" y2="23" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3"/>
      <line x1="24" y1="15" x2="34" y2="15" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5"/>
      <line x1="24" y1="19" x2="34" y2="19" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4"/>
      <line x1="24" y1="23" x2="32" y2="23" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3"/>
    </svg>
  ),
  // Scroll
  () => (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
      <rect x="8" y="10" width="24" height="20" rx="1" fill="rgba(201,168,76,0.08)" stroke="#C9A84C" strokeWidth="0.9"/>
      <ellipse cx="8" cy="20" rx="4" ry="10" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="0.8"/>
      <ellipse cx="32" cy="20" rx="4" ry="10" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="0.8"/>
      <line x1="12" y1="15" x2="28" y2="15" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5"/>
      <line x1="12" y1="19" x2="28" y2="19" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4"/>
      <line x1="12" y1="23" x2="24" y2="23" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3"/>
    </svg>
  ),
];

export default function FAQJudy() {
  const { dir, t, toLocalNum } = useLanguage();
  const isRTL = dir === "rtl";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs = [
    { id: 1, question: t("faq", "q1") || "What is the academic focus of Judy Academy?", answer: t("faq", "a1") || "Judy Academy is dedicated to advancing scholarly research in Qur'anic studies and Islamic sciences through a rigorous academic methodology, supporting researchers and promoting dialogue.", tag: t("faq", "tag1") || "Academic Mission" },
    { id: 2, question: t("faq", "q2") || "How can I participate in research programs?", answer: t("faq", "a2") || "You may apply through our Research Portal or contact us directly. Our team will guide you through the fellowship application process and available academic tracks.", tag: t("faq", "tag2") || "Participation" },
    { id: 3, question: t("faq", "q3") || "Does the Academy offer published studies?", answer: t("faq", "a3") || "Yes. Judy Academy publishes peer-reviewed research and maintains an archive of Qur'anic studies accessible to registered scholars and the general academic community.", tag: t("faq", "tag3") || "Publications" },
    { id: 4, question: t("faq", "q4") || "Which governorates does the Academy serve?", answer: t("faq", "a4") || "The Academy currently operates across four governorates within the Kurdistan Region of Iraq, with ongoing expansion efforts to reach scholars across the wider region.", tag: t("faq", "tag4") || "Coverage" },
  ];

  const quickStats = [
    { value: t("faq", "statVal1") || "50+", label: t("faq", "statLabel1") || "Research Papers" },
    { value: t("faq", "statVal2") || "4", label: t("faq", "statLabel2") || "Governorates" },
    { value: t("faq", "statVal3") || "100+", label: t("faq", "statLabel3") || "Scholars" },
    { value: t("faq", "statVal4") || "20+", label: t("faq", "statLabel4") || "Events" },
  ];

  return (
    <section
      id="faq"
      ref={ref}
      dir={dir}
      className="relative overflow-hidden py-24 lg:py-36"
      style={{ background: "linear-gradient(180deg, #160900 0%, #1E0F08 45%, #160A04 100%)" }}
    >
      {/* ── Islamic tile pattern ─────────────────────────────────── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="faq-tile" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
            <polygon points="36,4 44,24 64,24 48,38 54,58 36,46 18,58 24,38 8,24 28,24"
              fill="none" stroke="#C9A84C" strokeWidth="0.6" />
            <circle cx="36" cy="36" r="7" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faq-tile)" />
      </svg>

      {/* ── Grain ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "160px" }}
      />

      {/* ── Radial glows ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 80%, rgba(201,168,76,0.05) 0%, transparent 55%)" }} />

      {/* ── Gold rules ───────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ══════════════════════════════════════════════════════════
            HEADER — centered with arch ornament
        ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Small arch ornament */}
          <div className="flex justify-center mb-5">
            <svg viewBox="0 0 200 36" className="w-48" fill="none">
              <path d="M6 34 Q6 6 100 6 Q194 6 194 34"
                stroke="#C9A84C" strokeWidth="0.7" fill="none" strokeDasharray="4 3.5" opacity="0.4" />
              <polygon points="100,2 104,10 100,13 96,10" stroke="#C9A84C" strokeWidth="0.7" fill="rgba(201,168,76,0.15)" />
              <circle cx="6" cy="34" r="2.5" fill="#C9A84C" opacity="0.3" />
              <circle cx="194" cy="34" r="2.5" fill="#C9A84C" opacity="0.3" />
            </svg>
          </div>

          <p className="text-[10px] font-black tracking-[0.32em] uppercase italic mb-4"
            style={{ color: "rgba(201,168,76,0.5)" }}>
            {t("faq", "sectionLabel") || "Scholarly Inquiries"}
          </p>

          <h2 className="font-black leading-tight tracking-tight mb-3"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#F5EDD0", fontSize: "clamp(2rem,5vw,3.8rem)" }}>
            {t("faq", "headingLine1") || "Questions about"}
            <br />
            <span className="relative inline-block" style={{ color: "#C9A84C" }}>
              {t("faq", "headingAccent") || "the Academy"}
              <motion.svg viewBox="0 0 260 14" className="absolute -bottom-1 left-0 w-full"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}>
                <motion.path d="M4 10 Q65 2 130 8 Q195 14 256 7"
                  stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />
                <motion.circle cx="4" cy="10" r="2" fill="#C9A84C" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.5 }} />
                <motion.circle cx="256" cy="7" r="2" fill="#C9A84C" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.5 }} />
              </motion.svg>
            </span>
          </h2>

          <OrnateRule className="max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* ══════════════════════════════════════════════════════════
            MAIN BODY — FAQ left + sidebar right
        ══════════════════════════════════════════════════════════ */}
        <div className={`flex flex-col lg:flex-row gap-10 lg:gap-14 items-start ${isRTL ? "lg:flex-row-reverse" : ""}`}>

          {/* ── FAQ accordion — manuscript style ─────────────────── */}
          <div className="w-full lg:w-[58%] space-y-0">
            {faqs.map((faq, i) => {
              const isOpen = openId === faq.id;
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Divider rule above each (except first) */}
                  {i > 0 && (
                    <div className="w-full h-px" style={{ background: "rgba(201,168,76,0.08)" }} />
                  )}

                  <motion.div
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="relative cursor-pointer overflow-hidden"
                    animate={{ background: isOpen ? "rgba(201,168,76,0.06)" : "transparent" }}
                    whileHover={{ background: isOpen ? "rgba(201,168,76,0.08)" : "rgba(201,168,76,0.03)" }}
                    transition={{ duration: 0.2 }}
                    style={{ border: isOpen ? "1px solid rgba(201,168,76,0.2)" : "1px solid transparent", marginTop: i > 0 ? "-1px" : 0 }}
                  >
                    {/* Active left bar */}
                    <motion.div
                      className={`absolute ${isRTL ? "right-0" : "left-0"} top-0 bottom-0 w-[2px]`}
                      animate={{
                        background: isOpen ? "linear-gradient(180deg, #C9A84C, rgba(201,168,76,0.2))" : "transparent",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Question row */}
                    <div className={`flex items-start gap-4 px-6 py-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                      {/* Illustration icon */}
                      <motion.div
                        className="shrink-0 mt-0.5"
                        animate={{ opacity: isOpen ? 1 : 0.35, scale: isOpen ? 1.08 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        {/* Tag */}
                        <motion.div
                          className="mb-2"
                          animate={{ opacity: isOpen ? 1 : 0.5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span
                            className="inline-flex items-center gap-1 text-[9px] font-black tracking-[0.2em] uppercase px-2.5 py-0.5"
                            style={{
                              background: isOpen ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.07)",
                              color: isOpen ? "#C9A84C" : "rgba(201,168,76,0.5)",
                              border: `1px solid ${isOpen ? "rgba(201,168,76,0.3)" : "rgba(201,168,76,0.1)"}`,
                            }}
                          >
                            <Star className="w-1.5 h-1.5" fill="currentColor" />
                            {faq.tag}
                          </span>
                        </motion.div>

                        {/* Large serif number + question */}
                        <div className={`flex items-baseline gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                          <motion.span
                            className="font-black leading-none select-none shrink-0"
                            animate={{ color: isOpen ? "#C9A84C" : "rgba(201,168,76,0.18)" }}
                            transition={{ duration: 0.3 }}
                            style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem" }}
                          >
                            {toLocalNum(String(i + 1).padStart(2, "0"))}
                          </motion.span>
                          <motion.h3
                            className="font-bold text-base sm:text-lg leading-snug"
                            animate={{ color: isOpen ? "#F5EDD0" : "rgba(191,168,130,0.55)" }}
                            transition={{ duration: 0.3 }}
                            style={{ fontFamily: "Georgia, serif" }}
                          >
                            {faq.question}
                          </motion.h3>
                        </div>
                      </div>

                      {/* Toggle icon */}
                      <div className="shrink-0 mt-1.5">
                        <ManuscriptToggle open={isOpen} />
                      </div>
                    </div>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className={`px-6 pb-7 ${isRTL ? "pr-[4.5rem]" : "pl-[4.5rem]"}`}>
                            {/* Ornate quote bar */}
                            <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                              <div className="w-[2px] shrink-0 mt-1 self-stretch rounded-full"
                                style={{ background: "linear-gradient(180deg, #C9A84C, transparent)" }} />
                              <motion.p
                                initial={{ y: -8, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -8, opacity: 0 }}
                                transition={{ duration: 0.35, delay: 0.07 }}
                                className="text-sm leading-[1.9] italic"
                                style={{ color: "rgba(191,168,130,0.65)", fontFamily: "Georgia, serif" }}
                              >
                                {faq.answer}
                              </motion.p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Bottom rule */}
            <div className="w-full h-px" style={{ background: "rgba(201,168,76,0.08)" }} />
          </div>

          {/* ── Right sidebar ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -36 : 36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[42%] lg:sticky lg:top-32 space-y-5"
          >

            {/* ── Academy info panel ───────────────────────────────── */}
            <div className="relative p-7 overflow-hidden"
              style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <Brackets size={16} />
              {/* Corner glow */}
              <div className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} w-36 h-36 pointer-events-none opacity-15`}
                style={{ background: `radial-gradient(circle at ${isRTL ? "top left" : "top right"}, #C9A84C, transparent 65%)` }} />

              <div className={`flex items-center gap-3 mb-5 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
                  <ScrollText className="w-5 h-5" style={{ color: "#C9A84C" }} />
                </div>
                <div className={isRTL ? "text-right" : ""}>
                  <h3 className="font-black text-lg leading-none"
                    style={{ color: "#F5EDD0", fontFamily: "Georgia, serif" }}>
                    {t("faq", "stillHaveQuestions") || "Still have questions?"}
                  </h3>
                  <p className="text-[11px] italic mt-0.5" style={{ color: "rgba(201,168,76,0.45)" }}>
                    {t("faq", "panelDescription") || "We welcome all scholarly inquiries"}
                  </p>
                </div>
              </div>

              <OrnateRule className="mb-5" />

              <p className="text-sm leading-[1.8] mb-6 italic"
                style={{ color: "rgba(191,168,130,0.55)", fontFamily: "Georgia, serif" }}>
                {t("faq", "panelBodyText") || "Our academic team is available to answer questions about programs, research fellowships, publications, and institutional collaboration."}
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03, filter: "brightness(1.08)" }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2.5 font-black text-[12px] tracking-[0.16em] uppercase px-7 py-3.5 overflow-hidden"
                style={{ background: "#C9A84C", color: "#120800" }}
              >
                <span className="relative z-10">{t("faq", "askQuestion") || "Submit Inquiry"}</span>
                <motion.span className="relative z-10"
                  animate={{ x: isRTL ? [0, -4, 0] : [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                </motion.span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2 }}
                />
              </motion.a>
            </div>

            {/* ── Stats — ornate grid ──────────────────────────────── */}
            <div className="relative" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
              <Brackets size={12} />
              <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
              <div className="grid grid-cols-2 gap-0">
                {quickStats.map(({ value, label }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                    whileHover={{ background: "rgba(201,168,76,0.07)" }}
                    className="relative flex flex-col items-center justify-center text-center py-7 px-4 cursor-default transition-colors"
                    style={{
                      borderRight: i % 2 === 0 ? "1px solid rgba(201,168,76,0.1)" : "none",
                      borderBottom: i < 2 ? "1px solid rgba(201,168,76,0.1)" : "none",
                    }}
                  >
                    <div className="font-black leading-none mb-1.5"
                      style={{ color: "#C9A84C", fontFamily: "Georgia, serif", fontSize: "1.9rem" }}>
                      {value}
                    </div>
                    <div className="text-[9px] font-bold tracking-[0.18em] uppercase"
                      style={{ color: "rgba(191,168,130,0.45)" }}>
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>
              <OrnateRule className="px-4 py-2.5" />
            </div>

            {/* ── Academic quote ───────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative px-6 py-5"
              style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}
            >
              <Feather className="w-4 h-4 mb-3" style={{ color: "rgba(201,168,76,0.4)" }} />
              <p className="text-xs leading-[1.85] italic"
                style={{ color: "rgba(191,168,130,0.4)", fontFamily: "Georgia, serif" }}>
                "And say: My Lord, increase me in knowledge."
              </p>
              <p className="text-[9px] font-bold tracking-[0.18em] uppercase mt-2"
                style={{ color: "rgba(201,168,76,0.3)" }}>
                — Qur'an 20:114
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}