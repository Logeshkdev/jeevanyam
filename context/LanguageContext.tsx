"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface LanguageContextType {
  en: boolean;
  toggleLang: () => void;
  t: (ta: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [en, setEn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("jeevanyam_lang");
    const isEn = stored === "en";
    if (isEn) setEn(true);
    document.documentElement.lang = isEn ? "en" : "ta";
    setMounted(true);
  }, []);

  const toggleLang = () => {
    const next = !en;
    setEn(next);
    const langStr = next ? "en" : "ta";
    localStorage.setItem("jeevanyam_lang", langStr);
    document.documentElement.lang = langStr;
  };

  const t = (ta: string, enStr: string) => {
    if (!mounted) return ta; // Always return server-rendered default until hydrated
    return en ? enStr : ta;
  };

  return (
    <LanguageContext.Provider value={{ en, toggleLang, t }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden', opacity: mounted ? 1 : 0, transition: 'opacity 0.2s ease-in' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
