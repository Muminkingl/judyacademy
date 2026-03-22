"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import allTranslations from "@/translations";

export type Lang = "en" | "ku" | "ar";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dir: "ltr" | "rtl";
  t: (section: string, key: string) => string;
  registerTranslations: (section: string, translations: Record<Lang, Record<string, string>>) => void;
  toLocalNum: (num: number | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Pre-populated with all translations at load time
const translationRegistry: Record<string, Record<Lang, Record<string, string>>> = {
  ...allTranslations,
};

// Arabic-Indic digits mapping
const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ku");

  const dir = lang === "en" ? "ltr" : "rtl";

  // Update the html element's dir and lang attributes
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
  }, []);

  const registerTranslations = useCallback(
    (section: string, translations: Record<Lang, Record<string, string>>) => {
      translationRegistry[section] = translations;
    },
    []
  );

  const t = useCallback(
    (section: string, key: string): string => {
      return translationRegistry[section]?.[lang]?.[key] ?? translationRegistry[section]?.["en"]?.[key] ?? key;
    },
    [lang]
  );

  // Convert Western digits to Arabic-Indic digits for ku/ar
  const toLocalNum = useCallback(
    (num: number | string): string => {
      const str = String(num);
      if (lang === "en") return str;
      return str.replace(/[0-9]/g, (d) => arabicDigits[parseInt(d)]);
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, t, registerTranslations, toLocalNum }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
