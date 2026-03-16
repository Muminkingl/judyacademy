"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, BookOpen, Star, ScrollText, ArrowDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

// ─── Palette ────────────────────────────────────────────────────────────────
// bg:      #120800  /  #1E0F08
// gold:    #C9A84C  /  #E8C97A
// parch:   #F5EDD0  /  #BFA882

// ─── Islamic tile pattern ───────────────────────────────────────────────────
const IslamicTile = ({ opacity = 0.045 }: { opacity?: number }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice" style={{ opacity }}>
    <defs>
      <pattern id={`tile-${opacity}`} x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
        <polygon points="36,4 44,24 64,24 48,38 54,58 36,46 18,58 24,38 8,24 28,24"
          fill="none" stroke="#C9A84C" strokeWidth="0.7" />
        <circle cx="36" cy="36" r="8" fill="none" stroke="#C9A84C" strokeWidth="0.35" />
        <line x1="0" y1="36" x2="8" y2="24" stroke="#C9A84C" strokeWidth="0.3" />
        <line x1="72" y1="36" x2="64" y2="24" stroke="#C9A84C" strokeWidth="0.3" />
        <line x1="36" y1="0" x2="28" y2="24" stroke="#C9A84C" strokeWidth="0.3" />
        <line x1="36" y1="72" x2="28" y2="48" stroke="#C9A84C" strokeWidth="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#tile-${opacity})`} />
  </svg>
);

// ─── Ornate corner bracket ───────────────────────────────────────────────────
const CornerBrackets = ({ color = "#C9A84C", size = 16 }: { color?: string; size?: number }) => (
  <>
    <div className="absolute top-0 left-0" style={{ width: size, height: size, borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
    <div className="absolute top-0 right-0" style={{ width: size, height: size, borderTop: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
    <div className="absolute bottom-0 left-0" style={{ width: size, height: size, borderBottom: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
    <div className="absolute bottom-0 right-0" style={{ width: size, height: size, borderBottom: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
  </>
);

// ─── Gold ornate rule ────────────────────────────────────────────────────────
const OrnateRule = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
    <Star className="w-2.5 h-2.5 shrink-0" style={{ color: "#C9A84C", opacity: 0.7 }} fill="#C9A84C" fillOpacity={0.5} />
    <div className="w-6 h-px" style={{ background: "rgba(201,168,76,0.3)" }} />
    <Star className="w-1.5 h-1.5 shrink-0" style={{ color: "#C9A84C", opacity: 0.4 }} />
    <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.5))" }} />
  </div>
);

// ─── Animated manuscript field ───────────────────────────────────────────────
function ManuscriptField({ type = "text", placeholder, rows, isRTL }: {
  type?: string; placeholder: string; rows?: number; isRTL?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const baseStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(201,168,76,0.04)",
    border: `1px solid ${focused ? "#C9A84C" : filled ? "rgba(201,168,76,0.3)" : "rgba(201,168,76,0.12)"}`,
    boxShadow: focused ? "0 0 0 3px rgba(201,168,76,0.08)" : "none",
    borderRadius: "2px",
    padding: "13px 16px",
    color: "#F5EDD0",
    fontSize: "14px",
    fontFamily: "Georgia, serif",
    outline: "none",
    resize: "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
  };
  const placeholderColor = "rgba(191,168,130,0.35)";
  const sharedProps = {
    placeholder,
    style: baseStyle,
    onFocus: () => setFocused(true),
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      setFilled(e.target.value.length > 0);
    },
    dir: isRTL ? "rtl" : undefined,
  };
  return rows
    ? <textarea rows={rows} {...(sharedProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        className={`placeholder-shown:opacity-50`}
        style={{ ...baseStyle, resize: "none" }} />
    : <input type={type} {...(sharedProps as React.InputHTMLAttributes<HTMLInputElement>)} />;
}

export default function ContactPageJudy() {
  const { dir, t } = useLanguage();
  const isRTL = dir === "rtl";
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-40px" });
  const formInView = useInView(formRef, { once: true, margin: "-60px" });
  const mapInView = useInView(mapRef, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactItems = [
    { icon: MapPin, label: t("contact", "addressTitle") || "Location", value: t("contact", "addressValue") || "Erbil, Kurdistan Region", color: "#C9A84C", link: "https://maps.app.goo.gl/7FJXtf7g8oDHj5aA6" },
    { icon: Mail, label: t("contact", "emailTitle") || "Email", value: t("contact", "emailValue") || "info@judyacademy.org", color: "#E8C97A", ltr: true },
    { icon: Phone, label: t("contact", "phoneTitle") || "Phone", value: t("contact", "phoneValue") || "+964 750 000 0000", color: "#BFA882", ltr: true },
  ];

  return (
    <>
      <Header />
      <div className="h-[110px]" />

      <main dir={dir} style={{ background: "#120800" }}>

        {/* ══════════════════════════════════════════════════════════
            HERO — full-dark, typographic, centered manuscript layout
        ══════════════════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative min-h-[80vh] flex flex-col items-center justify-center py-28 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #0A0400 0%, #1E0F08 50%, #160900 100%)" }}
        >
          <IslamicTile opacity={0.05} />
          {/* Radial center glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.11) 0%, transparent 65%)" }} />
          {/* Top + bottom gold lines */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.5),transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)" }} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            {/* Seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              animate={heroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-20 h-20 overflow-hidden rounded-full" style={{ border: "1px solid rgba(201,168,76,0.3)" }}>
                <img src="/judy.png" alt="Judy Academy Logo" className="w-full h-full object-cover scale-[1.1]" />
              </div>
            </motion.div>

            {/* Pre-label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <OrnateRule className="mb-6 max-w-xs mx-auto" />
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-5"
                style={{ color: "rgba(201,168,76,0.5)", fontStyle: "italic" }}>
                {t("contact", "sectionLabel") || "Reach Out to Us"}
              </p>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.22, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="font-black leading-[1.0] tracking-tight mb-3"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#F5EDD0", fontSize: "clamp(2.8rem,7vw,5.5rem)" }}
            >
              {t("contact", "heading") || "Contact"}
              <br />
              <span style={{ color: "#C9A84C", display: "inline-block", position: "relative" }}>
                {t("contact", "headingAccent") || "the Academy"}
                <motion.svg
                  viewBox="0 0 320 14"
                  style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%" }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={heroInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.95, duration: 0.8 }}
                >
                  <motion.path d="M4 10 Q80 2 160 8 Q240 14 316 7"
                    stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={heroInView ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.95, duration: 0.8 }}
                  />
                  <motion.circle cx="4" cy="10" r="2" fill="#C9A84C"
                    initial={{ opacity: 0 }} animate={heroInView ? { opacity: 1 } : {}} transition={{ delay: 1.75 }} />
                  <motion.circle cx="316" cy="7" r="2" fill="#C9A84C"
                    initial={{ opacity: 0 }} animate={heroInView ? { opacity: 1 } : {}} transition={{ delay: 1.75 }} />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-base sm:text-lg max-w-md mx-auto leading-[1.9] mt-6 mb-10"
              style={{ color: "rgba(191,168,130,0.6)", fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              {t("contact", "subheading") || "We welcome scholars, researchers, and learners to reach out regarding our programs and academic resources."}
            </motion.p>

            {/* Inline contact trio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
              className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              {contactItems.map(({ icon: Icon, label, value, color, ltr, link }, i) => (
                <div key={i} className={`flex items-center gap-2.5 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0"
                    style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <Icon className="w-3.5 h-3.5" style={{ color }} strokeWidth={1.5} />
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <p className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(201,168,76,0.4)" }}>{label}</p>
                    {link
                      ? <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs font-medium hover:text-[#E8C97A] transition-colors" style={{ color: "rgba(191,168,130,0.65)" }} dir={ltr ? "ltr" : undefined}>{value}</a>
                      : <p className="text-xs font-medium" style={{ color: "rgba(191,168,130,0.65)" }} dir={ltr ? "ltr" : undefined}>{value}</p>
                    }
                  </div>
                </div>
              ))}
            </motion.div>

            <OrnateRule className="max-w-sm mx-auto mb-8" />

            {/* Scroll cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-1.5"
              >
                <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(201,168,76,0.3)" }}>Scroll</span>
                <ArrowDown className="w-4 h-4" style={{ color: "rgba(201,168,76,0.35)" }} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FORM SECTION — parchment manuscript panel
        ══════════════════════════════════════════════════════════ */}
        <section
          ref={formRef}
          className="relative py-24 lg:py-32 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #F5EDD0 0%, #EDE0BE 55%, #F0E8CC 100%)" }}
        >
          {/* Subtle tile on parchment */}
          <IslamicTile opacity={0.03} />
          <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "160px" }}
          />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <OrnateRule className="max-w-xs mx-auto mb-5" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(100,70,20,0.45)", fontStyle: "italic" }}>
                Correspondence
              </span>
              <h2
                className="text-3xl sm:text-4xl font-black mt-2 leading-tight"
                style={{ color: "#2C1810", fontFamily: "Georgia, serif" }}
              >
                Send a Message
              </h2>
              <OrnateRule className="max-w-xs mx-auto mt-5" />
            </motion.div>

            {/* Two-column: form left, info right */}
            <div className={`grid lg:grid-cols-[1fr_280px] gap-8 ${isRTL ? "lg:flex-row-reverse" : ""}`}>

              {/* ── Form manuscript panel ────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
                style={{ background: "#1E0F08", border: "1px solid rgba(201,168,76,0.25)", boxShadow: "0 20px 60px -16px rgba(0,0,0,0.35)" }}
              >
                <CornerBrackets size={18} />
                {/* Gold top rule */}
                <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

                <div className="p-7 sm:p-10">
                  {/* Panel header */}
                  <div className={`flex items-center gap-3 mb-8 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 flex items-center justify-center"
                      style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
                      <ScrollText className="w-5 h-5" style={{ color: "#C9A84C" }} />
                    </div>
                    <div className={isRTL ? "text-right" : ""}>
                      <h3 className="font-black text-lg leading-none mb-0.5"
                        style={{ color: "#F5EDD0", fontFamily: "Georgia, serif" }}>
                        {t("contact", "formTitle") || "Academic Inquiry"}
                      </h3>
                      <p className="text-[11px]" style={{ color: "rgba(191,168,130,0.4)", fontStyle: "italic" }}>
                        {t("contact", "formSubtitle") || "We respond within 48 hours"}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
                        >
                          <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center"
                            style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}>
                            <CheckCircle className="w-8 h-8" style={{ color: "#C9A84C" }} />
                          </div>
                        </motion.div>
                        <h3 className="text-xl font-black mb-2" style={{ color: "#F5EDD0", fontFamily: "Georgia, serif" }}>
                          {t("contact", "successTitle") || "Message Received"}
                        </h3>
                        <p className="text-sm" style={{ color: "rgba(191,168,130,0.5)", fontStyle: "italic" }}>
                          {t("contact", "successDesc") || "Our team will correspond with you shortly."}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <div className="grid sm:grid-cols-2 gap-4">
                          <ManuscriptField placeholder={t("contact", "name") || "Full Name"} isRTL={isRTL} />
                          <ManuscriptField type="email" placeholder={t("contact", "email") || "Email Address"} />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <ManuscriptField type="tel" placeholder={t("contact", "phone") || "Phone Number"} />
                          <ManuscriptField placeholder={t("contact", "subject") || "Subject of Inquiry"} isRTL={isRTL} />
                        </div>
                        <ManuscriptField placeholder={t("contact", "message") || "Your message or inquiry…"} rows={5} isRTL={isRTL} />

                        <div className={`flex ${isRTL ? "justify-start" : "justify-end"} pt-2`}>
                          <motion.button
                            type="submit"
                            whileHover={{ scale: 1.03, filter: "brightness(1.08)" }}
                            whileTap={{ scale: 0.97 }}
                            className="relative inline-flex items-center gap-2.5 font-black text-[12px] tracking-[0.18em] uppercase px-8 py-3.5 overflow-hidden"
                            style={{ background: "#C9A84C", color: "#120800" }}
                          >
                            <span className="relative z-10">{t("contact", "send") || "Submit Inquiry"}</span>
                            <motion.span className="relative z-10"
                              animate={{ x: isRTL ? [0, -4, 0] : [0, 4, 0] }}
                              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                              <Send className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                            </motion.span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2 }}
                            />
                          </motion.button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* ── Info sidebar ─────────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4"
              >
                {/* Academy info card */}
                <div className="relative p-6"
                  style={{ background: "#1E0F08", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <CornerBrackets size={12} />
                  <div className="flex justify-center mb-4 pt-1">
                    <div className="w-16 h-16 overflow-hidden rounded-full" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
                      <img src="/judy.png" alt="Judy Academy Logo" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <OrnateRule className="mb-4" />
                    <p className="text-xs text-center leading-relaxed italic"
                      style={{ color: "rgba(191,168,130,0.5)", fontFamily: "Georgia, serif" }}>
                      "{t("header", "tagline")}"
                    </p>
                </div>

                {/* Contact details stack */}
                {[
                  { icon: MapPin, label: t("contact", "addressTitle") || "Location", value: t("contact", "addressValue") || "Erbil, Kurdistan", color: "#C9A84C" },
                  { icon: Mail, label: t("contact", "emailTitle") || "Email", value: t("contact", "emailValue") || "info@judyacademy.org", color: "#E8C97A", ltr: true },
                  { icon: Phone, label: t("contact", "phoneTitle") || "Phone", value: t("contact", "phoneValue") || "+964 750 000 0000", color: "#BFA882", ltr: true },
                ].map(({ icon: Icon, label, value, color, ltr }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                    className={`relative flex items-center gap-3 p-4 ${isRTL ? "flex-row-reverse" : ""}`}
                    style={{ background: "rgba(18,8,0,0.5)", border: "1px solid rgba(201,168,76,0.12)" }}
                  >
                    {/* Left color bar */}
                    <div className={`absolute ${isRTL ? "right-0" : "left-0"} top-3 bottom-3 w-[2px] rounded-full`}
                      style={{ background: color }} />
                    <div className="w-8 h-8 flex items-center justify-center shrink-0"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                      <Icon className="w-3.5 h-3.5" style={{ color }} strokeWidth={1.5} />
                    </div>
                    <div className={isRTL ? "text-right" : ""}>
                      <p className="text-[9px] font-bold tracking-[0.18em] uppercase mb-0.5" style={{ color: `${color}70` }}>{label}</p>
                      <p className="text-xs font-medium" style={{ color: "rgba(191,168,130,0.65)" }} dir={ltr ? "ltr" : undefined}>{value}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Hours note */}
                <div className="relative p-4 text-center"
                  style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.12)" }}>
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1" style={{ color: "rgba(201,168,76,0.4)" }}>Office Hours</p>
                  <p className="text-xs" style={{ color: "rgba(191,168,130,0.5)", fontStyle: "italic", fontFamily: "Georgia, serif" }}>
                    Sunday – Thursday<br />8:00 AM – 4:00 PM
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            MAP SECTION — dark with ornate frame
        ══════════════════════════════════════════════════════════ */}
        <section
          ref={mapRef}
          className="relative py-24 lg:py-32 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #160900 0%, #1E0F08 50%, #120600 100%)" }}
        >
          <IslamicTile opacity={0.04} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <OrnateRule className="max-w-xs mx-auto mb-5" />
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase mb-3"
                style={{ color: "rgba(201,168,76,0.45)", fontStyle: "italic" }}>
                <MapPin className="w-3 h-3" />
                {t("contact", "mapHeading") || "Find Us"}
              </span>
              <h2
                className="text-3xl sm:text-4xl font-black leading-tight"
                style={{ fontFamily: "Georgia, serif", color: "#F5EDD0" }}
              >
                {t("contact", "mapSubheading") || "Our Location"}
              </h2>
              <OrnateRule className="max-w-xs mx-auto mt-5" />
            </motion.div>

            {/* Map with ornate frame */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              style={{ border: "1px solid rgba(201,168,76,0.3)", boxShadow: "0 20px 60px -16px rgba(0,0,0,0.5)" }}
            >
              {/* Corner brackets */}
              <CornerBrackets size={24} />
              {/* Top/bottom gold rules */}
              <div className="absolute top-0 left-0 right-0 h-[2px] z-10"
                style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
              <div className="absolute bottom-0 left-0 right-0 h-px z-10"
                style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }} />

              {/* Top label strip */}
              <div className="relative z-10 flex items-center justify-center gap-3 py-3"
                style={{ background: "rgba(18,8,0,0.9)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
                <Star className="w-3 h-3" style={{ color: "#C9A84C", opacity: 0.5 }} />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase"
                  style={{ color: "rgba(201,168,76,0.5)", fontStyle: "italic" }}>
                  Erbil — Kurdistan Region — Iraq
                </span>
                <Star className="w-3 h-3" style={{ color: "#C9A84C", opacity: 0.5 }} />
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3221.7259169623046!2d43.987508!3d36.180486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sIQ!4v1710500000000!5m2!1sen!2sIQ"
                width="100%"
                height="440"
                style={{ border: 0, display: "block", filter: "sepia(40%) contrast(1.05) brightness(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Judy Academy Location"
              />
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}