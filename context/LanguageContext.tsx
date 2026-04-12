"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { es, en } from "@/lib/translations";
import type { Translation, Lang } from "@/lib/translations";

type LanguageContextValue = {
  lang: Lang;
  t: Translation;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

function detectPreferredLang(): Lang {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored === "es" || stored === "en") return stored;
  // Use browser locale as hint
  const browserLang = navigator.language?.slice(0, 2);
  return browserLang === "en" ? "en" : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const preferred = detectPreferredLang();
    setLangState(preferred);
    document.documentElement.lang = preferred;
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
    // Update html lang attribute
    document.documentElement.lang = next;
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "es" ? "en" : "es");
  }, [lang, setLang]);

  const t = lang === "en" ? en : es;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
