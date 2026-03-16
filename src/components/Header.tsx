"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Menu, Mail, Phone, MapPin, ChevronDown, X, Globe, BookOpen, Star, ScrollText } from "lucide-react";
import { useLanguage, Lang } from "@/context/LanguageContext";

const languages = [
  { code: "en" as Lang, name: "English", nativeName: "English", flag: "/language/english.svg" },
  { code: "ar" as Lang, name: "Arabic", nativeName: "العربية", flag: "/language/arabic.svg" },
  { code: "ku" as Lang, name: "Kurdish", nativeName: "کوردی", flag: "/language/kurdish.svg" },
];


// ─── Ornate divider ───────────────────────────────────────────────────────────
const GoldRule = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4))" }} />
    <Star className="w-2 h-2 shrink-0" style={{ color: "#C9A84C", opacity: 0.6 }} />
    <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.4))" }} />
  </div>
);

export default function HeaderJudy() {
  const { lang, setLang, dir, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const isRTL = dir === "rtl";
  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  const navLinks = [
    { label: t("header", "home"), href: "/" },

    { label: t("header", "gallery"), href: "/#gallery" },
    { label: t("header", "faq"), href: "/#faq" },
    { label: t("header", "contact"), href: "/contact" },
    { label: t("header", "news"), href: "/news" },
  ];

  const [activeSection, setActiveSection] = useState(pathname || "/");

  useEffect(() => {
    if (pathname !== "/") { setActiveSection(pathname); return; }
    const handler = () => {
      const sections = navLinks.map((l) => l.href.replace("/#", "")).filter(s => s !== "/" && !s.startsWith("/"));
      let current = "/";
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) { current = `/#${id}`; break; }
      }
      setActiveSection(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" dir={dir}>

      {/* ══════════════════════════════════════════════════════════
          TOP BAND — contact strip
      ══════════════════════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden hidden sm:block"
        style={{ background: "#120800", borderBottom: "1px solid rgba(201,168,76,0.15)" }}
      >
        {/* Islamic tile micro-pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hdr-tile" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <polygon points="16,2 20,12 30,12 22,18 25,28 16,22 7,28 10,18 2,12 12,12"
                  fill="none" stroke="#C9A84C" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hdr-tile)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between relative z-10">
          {/* Contact items */}
          <div className={`flex items-center gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
            {[
              { icon: MapPin, value: t("header", "address"), link: "https://maps.app.goo.gl/7FJXtf7g8oDHj5aA6" },
              { icon: Mail, value: t("header", "email") },
              { icon: Phone, value: t("header", "phone"), dir: "ltr" as const },
            ].map(({ icon: Icon, value, dir: itemDir, link }) => {
              const inner = (
                <div className="flex items-center gap-1.5 group">
                  <Icon className="w-3 h-3 shrink-0" style={{ color: "rgba(201,168,76,0.55)" }} />
                  <span className="text-[11px] font-medium group-hover:text-[#E8C97A] transition-colors"
                    style={{ color: "rgba(191,168,130,0.5)" }} dir={itemDir}>
                    {value}
                  </span>
                </div>
              );
              return link
                ? <a key={value} href={link} target="_blank" rel="noopener noreferrer">{inner}</a>
                : <div key={value}>{inner}</div>;
            })}
          </div>

          {/* Right: lang + tagline */}
          <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="text-[10px] tracking-[0.2em] uppercase hidden lg:block"
              style={{ color: "rgba(201,168,76,0.35)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              {t("header", "tagline")}
            </span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MAIN NAV — architectural centered layout
      ══════════════════════════════════════════════════════════ */}
      <motion.div
        animate={{
          background: scrolled
            ? "rgba(18,8,0,0.97)"
            : "rgba(22,10,2,1)",
          boxShadow: scrolled ? "0 4px 40px -4px rgba(0,0,0,0.5)" : "none",
        }}
        transition={{ duration: 0.4 }}
        style={{ backdropFilter: scrolled ? "blur(20px)" : "none" }}
        className="relative"
      >
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px]"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        />
        {/* Gold bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          animate={{ opacity: scrolled ? 0.5 : 0.2 }}
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── DESKTOP nav — three-column: logo | links | actions ── */}
          <div className="hidden lg:grid grid-cols-[auto_1fr_auto] items-center h-[68px] gap-8">

            {/* LEFT: Seal + Academy name */}
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 shrink-0"
              whileHover={{ opacity: 0.85 }}
            >
              <img src="/judy.png" alt="Judy Academy Logo" className="w-10 h-10 object-contain" />
              <div className="flex flex-col justify-center leading-tight">
                <span className="text-[9px] font-bold tracking-[0.22em] uppercase"
                  style={{ color: "rgba(201,168,76,0.6)", fontStyle: "italic" }}>
                  {t("header", "academicTag")}
                </span>
                <span className="font-black text-lg leading-none"
                  style={{ color: "#F5EDD0", fontFamily: "Georgia, serif" }}>
                  {t("header", "foundationName")}
                </span>
              </div>
            </motion.a>

            {/* CENTER: Nav links with ornate separators */}
            <nav className={`flex items-center justify-center gap-0 ${isRTL ? "flex-row-reverse" : ""}`}>
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href ||
                  (activeSection.startsWith(link.href) && link.href !== "/");
                return (
                  <React.Fragment key={link.href}>
                    {i > 0 && (
                      <span className="w-px h-3 mx-1 shrink-0"
                        style={{ background: "rgba(201,168,76,0.15)" }} />
                    )}
                    <motion.a
                      href={link.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.45 }}
                      className="relative px-3.5 py-1.5 text-[13px] font-bold tracking-wide transition-colors group rounded-sm"
                      style={{ color: isActive ? "#C9A84C" : "rgba(191,168,130,0.65)" }}
                    >
                      {link.label}
                      {/* Active indicator — ornate dot + line */}
                      {isActive && (
                        <motion.div
                          layoutId="nav-active"
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5"
                          transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        >
                          <div className="w-1 h-1 rounded-full" style={{ background: "#C9A84C" }} />
                          <div className="w-8 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }} />
                        </motion.div>
                      )}
                      {/* Hover bg */}
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-sm"
                        style={{ background: "rgba(201,168,76,0.07)" }} />
                    </motion.a>
                  </React.Fragment>
                );
              })}
            </nav>

            {/* RIGHT: Research portal + lang (desktop lang moved here on scroll) */}
            <div className={`flex items-center gap-4 shrink-0 ${isRTL ? "flex-row-reverse" : ""}`}>
              {/* Research CTA */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, filter: "brightness(1.08)" }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 font-black text-[12px] tracking-[0.15em] uppercase px-5 py-2 overflow-hidden rounded-sm"
                style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}
              >
                <Mail className="w-3.5 h-3.5" />
                {t("header", "contactUs")}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2.5 }}
                />
              </motion.a>

              {/* Vertical divider */}
              <div className="w-px h-5" style={{ background: "rgba(201,168,76,0.18)" }} />

              {/* Language selector — visible when scrolled (top bar hides) */}
              <div ref={langRef} className="relative hidden lg:block">
                <button
                  onClick={() => setLangOpen(v => !v)}
                  className="flex items-center gap-1.5 text-[12px] font-bold transition-colors"
                  style={{ color: "rgba(191,168,130,0.65)" }}
                >
                  <Globe className="w-3.5 h-3.5" style={{ color: "rgba(201,168,76,0.5)" }} />
                  {currentLang.nativeName}
                  <motion.div animate={{ rotate: langOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-3 h-3 opacity-40" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute ${isRTL ? "left-0" : "right-0"} top-full mt-2 w-36 overflow-hidden z-50 rounded-sm`}
                      style={{ background: "#1E0F08", border: "1px solid rgba(201,168,76,0.25)", boxShadow: "0 16px 48px -8px rgba(0,0,0,0.7)" }}
                    >
                      {languages.map((l, i) => (
                        <motion.button
                          key={l.code}
                          initial={{ opacity: 0, x: isRTL ? 6 : -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold transition-colors"
                          style={{
                            color: l.code === lang ? "#C9A84C" : "rgba(191,168,130,0.6)",
                            background: l.code === lang ? "rgba(201,168,76,0.08)" : "transparent",
                            borderBottom: i < languages.length - 1 ? "1px solid rgba(201,168,76,0.1)" : "none",
                          }}
                        >
                          {l.nativeName}
                          <img src={l.flag} alt={l.name} className="w-4 h-4 rounded-sm opacity-70" />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ── MOBILE nav ───────────────────────────────────────── */}
          <div className="lg:hidden flex items-center justify-between h-[60px]">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5">
              <img src="/judy.png" alt="Judy Academy Logo" className="w-8 h-8 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-[8px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: "rgba(201,168,76,0.55)", fontStyle: "italic" }}>
                  {t("header", "academicTag")}
                </span>
                <span className="font-black text-sm" style={{ color: "#F5EDD0", fontFamily: "Georgia, serif" }}>
                  {t("header", "foundationName")}
                </span>
              </div>
            </a>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center rounded-sm"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C" }}
                >
                  <Menu className="w-4.5 h-4.5" />
                </motion.button>
              </SheetTrigger>

              {/* ── Mobile drawer ─────────────────────────────────── */}
              <SheetContent
                side={isRTL ? "right" : "left"}
                className="w-[300px] p-0 border-0"
                style={{ background: "#120800" }}
              >
                <div className="flex flex-col h-full" dir={dir}>
                  {/* Drawer header */}
                  <div
                    className="relative px-5 py-5 overflow-hidden"
                    style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}
                  >
                    {/* Micro pattern bg */}
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                      <svg width="100%" height="100%">
                        <defs>
                          <pattern id="mob-tile" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                            <polygon points="14,2 18,10 26,10 20,16 22,24 14,20 6,24 8,16 2,10 10,10"
                              fill="none" stroke="#C9A84C" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#mob-tile)" />
                      </svg>
                    </div>

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src="/judy.png" alt="Judy Academy Logo" className="w-10 h-10 object-contain" />
                        <div>
                          <div className="text-[9px] font-bold tracking-[0.2em] uppercase italic"
                            style={{ color: "rgba(201,168,76,0.6)" }}>
                            {t("header", "estKurdistan")}
                          </div>
                          <div className="font-black text-base leading-tight"
                            style={{ color: "#F5EDD0", fontFamily: "Georgia, serif" }}>
                            {t("header", "foundationName")}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setMobileOpen(false)}
                        className="w-8 h-8 rounded-sm flex items-center justify-center"
                        style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "rgba(191,168,130,0.7)" }}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <GoldRule className="mt-4" />
                  </div>

                  {/* Drawer links */}
                  <nav className="flex-1 px-4 py-5 space-y-1 overflow-y-auto">
                    {navLinks.map((link, i) => {
                      const isActive = activeSection === link.href;
                      return (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          initial={{ opacity: 0, x: isRTL ? 16 : -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          onClick={() => setMobileOpen(false)}
                          className="relative flex items-center justify-between px-4 py-3 rounded-sm font-bold text-sm transition-all overflow-hidden"
                          style={{
                            background: isActive ? "rgba(201,168,76,0.1)" : "transparent",
                            color: isActive ? "#C9A84C" : "rgba(191,168,130,0.6)",
                            border: isActive ? "1px solid rgba(201,168,76,0.25)" : "1px solid transparent",
                          }}
                        >
                          {/* Left bar if active */}
                          {isActive && (
                            <span
                              className={`absolute ${isRTL ? "right-0" : "left-0"} top-2 bottom-2 w-[2px] rounded-full`}
                              style={{ background: "#C9A84C" }}
                            />
                          )}
                          {link.label}
                          {isActive && (
                            <Star className="w-3 h-3 shrink-0" style={{ color: "#C9A84C", opacity: 0.7 }} />
                          )}
                        </motion.a>
                      );
                    })}
                  </nav>

                  {/* Drawer footer */}
                  <div className="px-4 pb-6 space-y-4" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
                    <GoldRule className="pt-4" />

                    {/* Language buttons */}
                    <div className="flex gap-2">
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => { setLang(l.code); }}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-sm text-xs font-bold transition-all"
                          style={{
                            background: l.code === lang ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.03)",
                            color: l.code === lang ? "#C9A84C" : "rgba(191,168,130,0.45)",
                            border: l.code === lang ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(201,168,76,0.08)",
                          }}
                        >
                          <img src={l.flag} alt={l.name} className="w-3.5 h-3.5 rounded-sm opacity-80" />
                          {l.code.toUpperCase()}
                        </button>
                      ))}
                    </div>

                    {/* Research portal CTA */}
                    <motion.a
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      whileTap={{ scale: 0.97 }}
                      className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-sm font-black text-sm tracking-widest uppercase overflow-hidden"
                      style={{ background: "#C9A84C", color: "#120800" }}
                    >
                      <Mail className="w-4 h-4" />
                      {t("header", "contactUs")}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                      />
                    </motion.a>

                    {/* Academy tagline */}
                    <p
                      className="text-center text-[10px] italic"
                      style={{ color: "rgba(201,168,76,0.3)", fontFamily: "Georgia, serif" }}
                    >
                      {t("header", "tagline")}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  );
}