"use client";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { LOCALES, translate, type Locale } from "@/i18n/dictionary";

type LangContextValue = {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: (key: string) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "druh-lang";

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Locale>("ua");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }
    if (saved === "ua" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate-safe read of persisted language; first client render must match the SSR default
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, t: (key: string) => translate(lang, key) }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLanguage(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

export { LOCALES };