"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, Copy, Check, Star, BookOpen, ScrollText, Feather } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ── Ornate rule ──────────────────────────────────────────────────────────────
const OrnateRule = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.45))" }} />
    <Star className="w-2 h-2 shrink-0" fill="#C9A84C" fillOpacity={0.5} style={{ color: "#C9A84C", opacity: 0.7 }} />
    <div className="w-4 h-px" style={{ background: "rgba(201,168,76,0.25)" }} />
    <Star className="w-1.5 h-1.5 shrink-0" style={{ color: "#C9A84C", opacity: 0.3 }} />
    <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.45))" }} />
  </div>
);

const Brackets = ({ size = 14 }: { size?: number }) => (
  <>
    <div className="absolute top-0 left-0" style={{ width: size, height: size, borderTop: "1px solid rgba(201,168,76,0.4)", borderLeft: "1px solid rgba(201,168,76,0.4)" }} />
    <div className="absolute top-0 right-0" style={{ width: size, height: size, borderTop: "1px solid rgba(201,168,76,0.4)", borderRight: "1px solid rgba(201,168,76,0.4)" }} />
    <div className="absolute bottom-0 left-0" style={{ width: size, height: size, borderBottom: "1px solid rgba(201,168,76,0.4)", borderLeft: "1px solid rgba(201,168,76,0.4)" }} />
    <div className="absolute bottom-0 right-0" style={{ width: size, height: size, borderBottom: "1px solid rgba(201,168,76,0.4)", borderRight: "1px solid rgba(201,168,76,0.4)" }} />
  </>
);

// ── Copy phone button ────────────────────────────────────────────────────────
function PhoneEntry({ phone, label, isRTL }: { phone: string; label: string; isRTL: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(phone).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };
  return (
    <div>
      <p className="text-[9px] font-black tracking-[0.22em] uppercase mb-2 italic"
        style={{ color: "rgba(201,168,76,0.4)" }}>{label}</p>
      <motion.button
        onClick={copy}
        whileHover={{ background: "rgba(201,168,76,0.1)" }}
        whileTap={{ scale: 0.97 }}
        className={`flex items-center gap-3 w-full px-4 py-3 transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
        style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.18)" }}
      >
        <div className="w-8 h-8 flex items-center justify-center shrink-0"
          style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
          <Phone className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} strokeWidth={1.5} />
        </div>
        <span className={`font-black tracking-widest text-sm flex-1 ${isRTL ? "text-right" : "text-left"}`}
          style={{ color: "#F5EDD0", fontFamily: "Georgia, serif" }} dir="ltr">
          {phone}
        </span>
        <motion.div animate={{ scale: copied ? [1, 1.4, 1] : 1 }} transition={{ duration: 0.3 }} className="shrink-0">
          {copied
            ? <Check className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
            : <Copy className="w-3.5 h-3.5" style={{ color: "rgba(201,168,76,0.3)" }} />}
        </motion.div>
      </motion.button>
    </div>
  );
}

// ── Illustrated manuscript icons ─────────────────────────────────────────────
const FIBIllustration = () => (
  <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
    {/* Mosque silhouette */}
    <path d="M50 70 L50 40 Q50 28 60 28 Q70 28 70 40 L70 70" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="0.8"/>
    <path d="M40 70 L40 48 L50 48 L50 70" fill="rgba(201,168,76,0.08)" stroke="#C9A84C" strokeWidth="0.7"/>
    <path d="M70 70 L70 48 L80 48 L80 70" fill="rgba(201,168,76,0.08)" stroke="#C9A84C" strokeWidth="0.7"/>
    <line x1="45" y1="56" x2="49" y2="40" stroke="#C9A84C" strokeWidth="0.6" opacity="0.5"/>
    <line x1="75" y1="56" x2="71" y2="40" stroke="#C9A84C" strokeWidth="0.6" opacity="0.5"/>
    <line x1="60" y1="22" x2="60" y2="28" stroke="#C9A84C" strokeWidth="0.9"/>
    <polygon points="60,18 62,22 60,24 58,22" fill="#C9A84C" opacity="0.7"/>
    {/* Door */}
    <path d="M56 70 L56 58 Q56 54 60 54 Q64 54 64 58 L64 70" fill="rgba(201,168,76,0.07)" stroke="#C9A84C" strokeWidth="0.7"/>
    {/* Stars */}
    <polygon points="20,20 21.5,24.5 26,24.5 22.5,27 24,31.5 20,29 16,31.5 17.5,27 14,24.5 18.5,24.5"
      fill="rgba(201,168,76,0.2)" stroke="#C9A84C" strokeWidth="0.5" opacity="0.6"/>
    <polygon points="100,15 101,18 104,18 101.5,20 102.5,23 100,21.5 97.5,23 98.5,20 96,18 99,18"
      fill="rgba(201,168,76,0.2)" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4"/>
    {/* Ground line */}
    <line x1="20" y1="70" x2="100" y2="70" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4"/>
    {/* Crescent */}
    <path d="M88 30 Q95 25 95 35 Q88 32 88 30Z" fill="rgba(201,168,76,0.3)" stroke="#C9A84C" strokeWidth="0.6"/>
  </svg>
);

const FastPayIllustration = () => (
  <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
    {/* Phone device */}
    <rect x="42" y="10" width="36" height="60" rx="4" fill="rgba(201,168,76,0.08)" stroke="#C9A84C" strokeWidth="0.9"/>
    <rect x="46" y="16" width="28" height="38" rx="1" fill="rgba(201,168,76,0.06)" stroke="#C9A84C" strokeWidth="0.5"/>
    {/* Home button */}
    <circle cx="60" cy="60" r="3" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.5"/>
    {/* Screen content - coin/payment */}
    <circle cx="60" cy="32" r="10" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="0.8"/>
    <text x="60" y="35.5" textAnchor="middle" fill="#C9A84C" fontSize="8" fontFamily="Georgia,serif" fontWeight="bold" opacity="0.7">$</text>
    {/* Signal waves */}
    <path d="M20 35 Q15 30 20 25" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4"/>
    <path d="M16 38 Q8 28 16 20" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.3"/>
    <path d="M100 35 Q105 30 100 25" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4"/>
    <path d="M104 38 Q112 28 104 20" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.3"/>
    {/* Arrow */}
    <path d="M20 55 L40 55" stroke="#C9A84C" strokeWidth="0.8" markerEnd="url(#arr)" opacity="0.5"/>
    <polygon points="40,53 44,55 40,57" fill="#C9A84C" opacity="0.4"/>
    <path d="M80 55 L100 55" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
    <polygon points="100,53 104,55 100,57" fill="#C9A84C" opacity="0.4"/>
  </svg>
);

export default function DonationJudy() {
  const { dir, t } = useLanguage();
  const isRTL = dir === "rtl";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const methods = [
    {
      title: t("donation", "title1") || "Support via FIB",
      subtitle: t("donation", "subtitle1") || "First Islamic Bank of Iraq",
      description: t("donation", "desc1") || "Transfer your contribution through the First Islamic Bank of Iraq. Funds are received immediately and directed toward our academic programs and research fellowships.",
      phone: "07504477409",
      brandName: "FIB",
      brandColor: "#1a5276",
      tag: t("donation", "tag1") || "Bank Transfer",
      cta: t("donation", "cta1") || "Support via FIB",
      Illustration: FIBIllustration,
      headerImage: "/first-iraqi-bank.jpg",
    },
    {
      title: t("donation", "title2") || "Support via FastPay",
      subtitle: t("donation", "subtitle2") || "Mobile Wallet Transfer",
      description: t("donation", "desc2") || "Send your support through FastPay mobile wallet — instant, secure, and distributed directly to our scholarly programs across Kurdistan.",
      phone: "07504477409",
      brandName: "FastPay",
      brandColor: "#c9184a",
      tag: t("donation", "tag2") || "Mobile Wallet",
      cta: t("donation", "cta2") || "Support via FastPay",
      Illustration: FastPayIllustration,
      headerImage: "/fastpay.jpg",
    },
  ];

  return (
    <section
      id="donate"
      ref={ref}
      dir={dir}
      className="relative overflow-hidden py-24 lg:py-36"
      style={{ background: "linear-gradient(180deg, #1A0C07 0%, #230F08 50%, #1E0F08 100%)" }}
    >
      {/* ── Islamic tile pattern ─────────────────────────────────── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="don-tile" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
            <polygon points="36,4 44,24 64,24 48,38 54,58 36,46 18,58 24,38 8,24 28,24"
              fill="none" stroke="#C9A84C" strokeWidth="0.6" />
            <circle cx="36" cy="36" r="7" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#don-tile)" />
      </svg>

      {/* ── Grain ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "160px" }}
      />

      {/* ── Radial glows ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.09) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 15% 70%, rgba(201,168,76,0.05) 0%, transparent 50%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 70%, rgba(201,168,76,0.05) 0%, transparent 50%)" }} />

      {/* ── Top/bottom gold rules ────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ══════════════════════════════════════════════════════════
            HEADER
        ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Ornate arch above heading */}
          <div className="flex justify-center mb-5">
            <svg viewBox="0 0 240 42" className="w-52" fill="none">
              <path d="M8 40 Q8 8 120 8 Q232 8 232 40"
                stroke="#C9A84C" strokeWidth="0.7" fill="none" strokeDasharray="4 3.5" opacity="0.4" />
              <polygon points="120,3 124,12 120,15 116,12" stroke="#C9A84C" strokeWidth="0.7" fill="rgba(201,168,76,0.15)" />
              <polygon points="120,0 122,4 126,4 123,7 124,11 120,9 116,11 117,7 114,4 118,4"
                stroke="#C9A84C" strokeWidth="0.5" fill="rgba(201,168,76,0.2)" />
              <circle cx="8" cy="40" r="2.5" fill="#C9A84C" opacity="0.3" />
              <circle cx="232" cy="40" r="2.5" fill="#C9A84C" opacity="0.3" />
            </svg>
          </div>

          <p className="text-[10px] font-black tracking-[0.32em] uppercase italic mb-4"
            style={{ color: "rgba(201,168,76,0.5)" }}>
            {t("donation", "sectionLabel") || "Support the Academy"}
          </p>

          <h2 className="font-black leading-tight tracking-tight mb-3"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#F5EDD0", fontSize: "clamp(2rem,5vw,3.8rem)" }}>
            {t("donation", "headingPrefix") || "How to"}{" "}
            <span className="relative inline-block" style={{ color: "#C9A84C" }}>
              {t("donation", "headingAccent") || "Contribute"}
              <motion.svg viewBox="0 0 220 14" className="absolute -bottom-1 left-0 w-full"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ delay: 0.75, duration: 0.8 }}>
                <motion.path d="M4 10 Q55 2 110 8 Q165 14 216 7"
                  stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.75, duration: 0.8 }}
                />
                <motion.circle cx="4" cy="10" r="2" fill="#C9A84C" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.55 }} />
                <motion.circle cx="216" cy="7" r="2" fill="#C9A84C" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.55 }} />
              </motion.svg>
            </span>
          </h2>

          <OrnateRule className="max-w-xs mx-auto mt-5 mb-4" />

          <p className="text-sm italic max-w-lg mx-auto leading-[1.9]"
            style={{ color: "rgba(191,168,130,0.5)", fontFamily: "Georgia, serif" }}>
            {t("donation", "description") || "Your generosity sustains Qur'anic research, supports scholars, and preserves Islamic academic heritage for future generations."}
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════
            TWO CARDS
        ══════════════════════════════════════════════════════════ */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {methods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden group"
              style={{ background: "#1A0C06", border: "1px solid rgba(201,168,76,0.2)", boxShadow: "0 12px 40px -12px rgba(0,0,0,0.5)" }}
            >
              <Brackets size={16} />

              {/* ── Illustration panel (replaces photo) ──────────── */}
              <div className="relative h-40 sm:h-48 overflow-hidden flex items-center justify-center"
                style={{ background: "linear-gradient(160deg, #120700 0%, #1E0F08 100%)" }}>
                {/* Photo behind illustration at low opacity */}
                {method.headerImage && (
                  <img src={method.headerImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15"
                    style={{ filter: "sepia(80%) contrast(1.1)" }} />
                )}
                {/* Illustrated SVG */}
                <div className="relative z-10 w-full h-full p-4">
                  <method.Illustration />
                </div>
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0C06] via-transparent to-transparent z-20" />
                {/* Tag */}
                <div className={`absolute top-4 ${isRTL ? "right-4" : "left-4"} z-30`}>
                  <span className="text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1.5"
                    style={{ background: "rgba(10,4,0,0.7)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(4px)" }}>
                    {method.tag}
                  </span>
                </div>
                {/* Brand name */}
                <div className={`absolute bottom-5 ${isRTL ? "right-5" : "left-5"} z-30`}>
                  <span className="text-2xl font-black"
                    style={{ color: "#F5EDD0", fontFamily: "Georgia, serif", textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>
                    {method.brandName}
                  </span>
                </div>
              </div>

              {/* ── Gold gradient rule ────────────────────────────── */}
              <div className="h-[1.5px]" style={{ background: `linear-gradient(${isRTL ? "270deg" : "90deg"}, #C9A84C, transparent)` }} />

              {/* ── Card body ─────────────────────────────────────── */}
              <div className="px-7 pt-6 pb-7 relative">
                {/* Hover corner glow */}
                <div className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{ background: `radial-gradient(circle at ${isRTL ? "top left" : "top right"}, rgba(201,168,76,0.1), transparent 65%)` }} />

                <h3 className="text-xl font-black mb-0.5 leading-tight"
                  style={{ color: "#F5EDD0", fontFamily: "Georgia, serif" }}>
                  {method.title}
                </h3>
                <p className="text-sm font-bold mb-4 italic" style={{ color: "rgba(201,168,76,0.6)" }}>
                  {method.subtitle}
                </p>

                <OrnateRule className="mb-4" />

                <p className="text-sm leading-[1.85] mb-6 italic"
                  style={{ color: "rgba(191,168,130,0.55)", fontFamily: "Georgia, serif" }}>
                  {method.description}
                </p>

                {/* Phone entry */}
                <PhoneEntry phone={method.phone} isRTL={isRTL}
                  label={t("donation", "contactNumber") || "Contact Number"} />

                {/* CTA button */}
                <motion.a
                  href={`tel:${method.phone}`}
                  whileHover={{ scale: 1.02, filter: "brightness(1.07)" }}
                  whileTap={{ scale: 0.97 }}
                  className="relative mt-5 w-full flex items-center justify-center gap-2.5 font-black text-[12px] tracking-[0.16em] uppercase py-4 overflow-hidden"
                  style={{ background: "#C9A84C", color: "#120700" }}
                >
                  <BookOpen className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{method.cta}</span>
                  <motion.span className="relative z-10"
                    animate={{ x: isRTL ? [0, -4, 0] : [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                  </motion.span>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.8 }}
                  />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════
            BOTTOM TRUST STRIP
        ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <OrnateRule className="mb-7" />

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            {[
              { Icon: ScrollText, label: t("donation", "trust1") || "Registered Academic Institution" },
              { Icon: Feather, label: t("donation", "trust2") || "Advancing Qur'anic Scholarship" },
              { Icon: BookOpen, label: t("donation", "trust3") || "Kurdistan Region of Iraq" },
            ].map(({ Icon, label }, i) => (
              <React.Fragment key={i}>
                <div className={`flex items-center gap-2.5 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-7 h-7 flex items-center justify-center shrink-0"
                    style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: "rgba(201,168,76,0.6)" }} strokeWidth={1.4} />
                  </div>
                  <span className="text-xs italic" style={{ color: "rgba(191,168,130,0.4)", fontFamily: "Georgia, serif" }}>
                    {label}
                  </span>
                </div>
                {i < 2 && <div className="hidden sm:block w-1 h-1 rounded-full" style={{ background: "rgba(201,168,76,0.2)" }} />}
              </React.Fragment>
            ))}
          </div>

          <OrnateRule className="mt-7" />

          {/* Final Qur'anic verse */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-center mt-6"
          >
            <p className="text-xs italic" style={{ color: "rgba(201,168,76,0.3)", fontFamily: "Georgia, serif" }}>
              "If you loan Allah a goodly loan, He will multiply it for you and forgive you."
            </p>
            <p className="text-[9px] font-bold tracking-[0.2em] uppercase mt-1" style={{ color: "rgba(201,168,76,0.2)" }}>
              — Qur'an 64:17
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}