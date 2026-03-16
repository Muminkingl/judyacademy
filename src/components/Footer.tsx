"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, ArrowUp, BookOpen, Star, ScrollText, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ─── Icons ───────────────────────────────────────────────────────────────────
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// ─── Reusable pieces ─────────────────────────────────────────────────────────
const IslamicTile = ({ opacity = 0.04 }: { opacity?: number }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice" style={{ opacity }}>
    <defs>
      <pattern id="footer-tile" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
        <polygon points="32,4 40,20 58,20 44,32 50,50 32,40 14,50 20,32 6,20 24,20"
          fill="none" stroke="#C9A84C" strokeWidth="0.6" />
        <circle cx="32" cy="32" r="7" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#footer-tile)" />
  </svg>
);

const OrnateRule = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4))" }} />
    <Star className="w-2 h-2 shrink-0" style={{ color: "#C9A84C", opacity: 0.6 }} fill="#C9A84C" fillOpacity={0.4} />
    <div className="w-5 h-px" style={{ background: "rgba(201,168,76,0.25)" }} />
    <Star className="w-1.5 h-1.5 shrink-0" style={{ color: "#C9A84C", opacity: 0.3 }} />
    <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.4))" }} />
  </div>
);

const AcademySeal = ({ size = 56 }: { size?: number }) => (
  <div className="overflow-hidden rounded-full" style={{ width: size, height: size, border: "1px solid rgba(201,168,76,0.3)" }}>
    <img src="/judy.png" alt="Judy Academy Logo" className="w-full h-full object-cover" />
  </div>
);

// ─── Column heading ───────────────────────────────────────────────────────────
const ColHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-6">
    <h3
      className="text-[10px] font-black tracking-[0.28em] uppercase mb-2"
      style={{ color: "rgba(201,168,76,0.55)", fontStyle: "italic" }}
    >
      {children}
    </h3>
    <div className="flex items-center gap-1.5">
      <div className="h-px w-6" style={{ background: "#C9A84C", opacity: 0.6 }} />
      <div className="h-px w-3" style={{ background: "#C9A84C", opacity: 0.25 }} />
    </div>
  </div>
);

export default function FooterJudy() {
  const { dir, t } = useLanguage();
  const isRTL = dir === "rtl";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const quickLinks = [
    { label: t("footer", "linkHome") || "Home", href: "/" },

    { label: t("footer", "linkGallery") || "Gallery", href: "/#gallery" },
    { label: t("footer", "linkFaq") || "FAQ", href: "/#faq" },
    { label: t("footer", "linkContact") || "Contact", href: "/contact" },
    { label: t("footer", "linkNews") || "News", href: "/news" },
  ];

  const programs = [
    t("footer", "prog1") || "Qur'anic Exegesis",
    t("footer", "prog2") || "Islamic Sciences",
    t("footer", "prog3") || "Research Fellowship",
    t("footer", "prog4") || "Academic Dialogue",
  ];

  const socials = [
    { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100080358165818&rdid=XqLUGGbXIPUn2JxT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1G939J2nGX#", label: "Facebook" },
    { Icon: Instagram, href: "https://www.instagram.com/judy.academy/", label: "Instagram" },
    { Icon: YoutubeIcon, href: "https://www.youtube.com/channel/UCg6wC_h_wGzG2_QZHGljFYA", label: "YouTube" },
    { Icon: TiktokIcon, href: "https://www.tiktok.com/@judyacademy1", label: "TikTok" },
  ];

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
  };

  return (
    <footer
      id="contact"
      dir={dir}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #120800 0%, #0E0600 100%)" }}
    >
      {/* ── Islamic tile bg ──────────────────────────────────────── */}
      <IslamicTile opacity={0.04} />

      {/* ── Grain ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "160px" }}
      />

      {/* ── Top gold rule ────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, rgba(201,168,76,0.3), transparent)" }} />

      {/* ── Radial glow ──────────────────────────────────────────── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)" }} />

      {/* ── Top ornate band ──────────────────────────────────────── */}
      <div className="relative z-10 border-b" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className={`flex flex-col lg:flex-row items-center gap-6 ${isRTL ? "lg:flex-row-reverse" : ""}`}>
            {/* Seal + name */}
            <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <AcademySeal size={52} />
              <div className={isRTL ? "text-right" : ""}>
                <p className="text-[9px] font-bold tracking-[0.25em] uppercase italic mb-0.5"
                  style={{ color: "rgba(201,168,76,0.5)" }}>
                  {t("footer", "academyLabel") || "for Qur'anic Research & Studies"}
                </p>
                <span className="text-xl font-black leading-none"
                  style={{ color: "#F5EDD0", fontFamily: "Georgia, serif" }}>
                  {t("footer", "brandName") || "Judy Academy"}
                </span>
              </div>
            </div>

            <OrnateRule className="flex-1 hidden lg:flex" />

            {/* Tagline */}
            <p className="text-xs text-center lg:text-right italic max-w-xs"
              style={{ color: "rgba(191,168,130,0.4)", fontFamily: "Georgia, serif" }}>
              {t("footer", "brandDesc") || "Advancing scholarly research in Qur'anic studies and Islamic sciences since our founding in Kurdistan."}
            </p>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ─────────────────────────────────────── */}
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ── Col 1: About + Social ────────────────────────────── */}
          <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-1">
            <ColHeading>{t("footer", "aboutTitle") || "About"}</ColHeading>

            <p className="text-xs leading-[1.9] mb-7"
              style={{ color: "rgba(191,168,130,0.5)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              {t("footer", "brandDesc") || "An academic institution dedicated to advancing scholarly research through a rigorous scientific approach."}
            </p>

            {/* Social icons */}
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, borderColor: "#C9A84C", color: "#C9A84C" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center transition-colors"
                  style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)", color: "rgba(191,168,130,0.5)" }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Col 2: Quick Links ───────────────────────────────── */}
          <motion.div variants={fadeUp}>
            <ColHeading>{t("footer", "quickLinksTitle") || "Navigation"}</ColHeading>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-xs transition-colors"
                    style={{ color: "rgba(191,168,130,0.45)" }}
                  >
                    <motion.span
                      className="w-3 h-px shrink-0 transition-all group-hover:w-5"
                      style={{ background: "#C9A84C", opacity: 0.5 }}
                    />
                    <span className="group-hover:text-[#E8C97A] transition-colors"
                      style={{ fontFamily: "Georgia, serif" }}>
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 3: Programs ─────────────────────────────────── */}
          <motion.div variants={fadeUp}>
            <ColHeading>{t("footer", "programsTitle") || "Programs"}</ColHeading>
            <ul className="space-y-2.5">
              {programs.map((prog, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-xs transition-colors"
                    style={{ color: "rgba(191,168,130,0.45)" }}
                  >
                    <Star className="w-2 h-2 shrink-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "#C9A84C", opacity: 0.35 }} />
                    <span className="group-hover:text-[#E8C97A] transition-colors"
                      style={{ fontFamily: "Georgia, serif" }}>
                      {prog}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Small academic badge */}
            <div className="mt-7 p-3 relative"
              style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.12)" }}>
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l" style={{ borderColor: "rgba(201,168,76,0.3)" }} />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r" style={{ borderColor: "rgba(201,168,76,0.3)" }} />
              <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <BookOpen className="w-3.5 h-3.5 shrink-0" style={{ color: "rgba(201,168,76,0.5)" }} />
                <p className="text-[10px] italic leading-snug"
                  style={{ color: "rgba(191,168,130,0.4)", fontFamily: "Georgia, serif" }}>
                  {t("footer", "registeredLabel") || "Registered Academic Institution"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Col 4: Contact ──────────────────────────────────── */}
          <motion.div variants={fadeUp}>
            <ColHeading>{t("footer", "contactTitle") || "Contact"}</ColHeading>
            <ul className="space-y-4">
              {[
                { icon: MapPin, value: t("footer", "address") || "Erbil, Kurdistan Region, Iraq", href: "https://maps.app.goo.gl/7FJXtf7g8oDHj5aA6", ltr: false },
                { icon: Mail, value: t("footer", "email") || "info@judyacademy.org", href: `mailto:${t("footer", "email")}`, ltr: true },
                { icon: Phone, value: t("footer", "phone") || "+964 750 000 0000", href: `tel:${t("footer", "phone")}`, ltr: true },
              ].map(({ icon: Icon, value, href, ltr }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`group flex items-start gap-3 transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                    style={{ color: "rgba(191,168,130,0.45)" }}
                  >
                    <div className="w-7 h-7 flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                      style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}>
                      <Icon className="w-3 h-3" style={{ color: "rgba(201,168,76,0.55)" }} strokeWidth={1.5} />
                    </div>
                    <span
                      className="text-xs leading-snug group-hover:text-[#E8C97A] transition-colors"
                      style={{ fontFamily: "Georgia, serif" }}
                      dir={ltr ? "ltr" : undefined}
                    >
                      {value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Research portal link */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02, filter: "brightness(1.08)" }}
              whileTap={{ scale: 0.97 }}
              className={`mt-7 relative flex items-center gap-2.5 font-black text-[11px] tracking-[0.15em] uppercase px-4 py-3 overflow-hidden ${isRTL ? "flex-row-reverse" : ""}`}
              style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C" }}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t("footer", "contactUs")}</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2.5 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom ornate bar ────────────────────────────────────── */}
      <div className="relative z-10" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <OrnateRule className="mb-4" />
          <div className={`flex flex-col sm:flex-row items-center gap-3 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            {/* Copyright */}
            <p className="text-[11px] text-center sm:text-left flex-1"
              style={{ color: "rgba(191,168,130,0.3)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              © {new Date().getFullYear()} {t("footer", "copyright") || "Judy Academy for Qur'anic Research and Studies. All rights reserved."}
            </p>

            {/* Center seal */}
            <div className="hidden sm:flex items-center gap-2 opacity-30">
              <div className="w-1 h-1 rounded-full" style={{ background: "#C9A84C" }} />
              <Star className="w-2.5 h-2.5" style={{ color: "#C9A84C" }} />
              <div className="w-1 h-1 rounded-full" style={{ background: "#C9A84C" }} />
            </div>

            {/* Lang note */}
            <p className="text-[10px]" style={{ color: "rgba(191,168,130,0.2)", fontFamily: "Georgia, serif" }}>
              Kurdistan Region — Iraq
            </p>
          </div>
        </div>
      </div>

      {/* ── Scroll to top ────────────────────────────────────────── */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 ${isRTL ? "left-6" : "right-6"} z-50 w-11 h-11 flex items-center justify-center`}
        style={{
          background: "#C9A84C",
          color: "#120800",
          boxShadow: "0 8px 24px -6px rgba(201,168,76,0.4)",
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4.5 h-4.5" strokeWidth={2.5} />
      </motion.a>
    </footer>
  );
}