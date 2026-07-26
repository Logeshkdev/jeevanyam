"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getNavLinks } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export function Nav() {
  const { en, toggleLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = getNavLinks(t);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (href: string) => {
    scrollToSection(href, () => setMenuOpen(false));
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-wine/10 bg-cream/95 backdrop-blur-md" style={{ fontFamily: 'var(--font-sans-tamil)' }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("#home");
          }}
          className="group relative flex h-14 w-20 shrink-0 items-center justify-center transition-transform active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-wine/50 rounded-lg sm:h-16 sm:w-24"
          aria-label="Jeevanyam Home"
        >
          <Image 
            src="/images/jeevanyam-logo-dark.png" 
            alt="ஜீவனயம்" 
            width={500} 
            height={500} 
            priority 
            className="h-full w-full object-contain transition-opacity group-hover:opacity-80" 
          />
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-ink/70 md:flex">
          {links.map((link) => (
            <button key={link.href} onClick={() => handleNavigate(link.href)} className="transition hover:text-wine">
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label={en ? "Switch to Tamil" : "Switch to English"}
            className="rounded-full border border-gold/50 px-3 py-1.5 text-xs font-bold text-wine hover:bg-gold/10 transition active:scale-95"
          >
            {en ? "தமிழ்" : "EN"}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-wine/20 text-wine transition hover:bg-wine/8 active:scale-95 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span key="x" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span key="m" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-wine/8 bg-cream/98 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto max-w-7xl space-y-0.5 px-4 py-3">
              {links.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04, duration: 0.18 }}>
                  <button
                    onClick={() => handleNavigate(link.href)}
                    style={{ fontFamily: 'var(--font-sans-tamil)' }}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-[15px] font-semibold text-ink/80 transition hover:bg-wine/6 hover:text-wine active:bg-wine/10 active:scale-[.98]"
                  >
                    {link.label}
                    <ArrowRight size={15} className="text-wine/30" />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
