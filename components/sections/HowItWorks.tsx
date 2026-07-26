"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, MessageCircle, PenLine, Sparkles, LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";

type Step = [string, string, LucideIcon];

export function HowItWorks() {
  const { t } = useLanguage();

  const steps: Step[] = [
    ["01", t("பகிருங்கள்", "Share"), MessageCircle],
    ["02", t("எழுதுகிறோம்", "We Write"), PenLine],
    ["03", t("வடிவமைக்கிறோம்", "We Design"), Sparkles],
    ["04", t("உங்களிடம்", "Delivered"), BookOpen],
  ];

  return (
    <section id="how" className="bg-cream py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="OUR PROCESS" title={t("நான்கு எளிய படிகள்", "Four simple steps")} />
        
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {steps.map(([num, name, Icon]) => (
            <motion.div key={num as string} whileHover={{ y: -4 }} className="rounded-xl border border-wine/8 bg-white p-4 sm:p-5 shadow-sm">
              <span className="text-xs font-bold text-gold">{num as string}</span>
              <Icon className="my-3 text-wine" size={20} />
              <h3
                className="font-serif text-sm text-wine sm:text-base md:text-lg"
                style={{ fontFamily: 'var(--font-serif-tamil)', lineHeight: 1.4 }}
              >
                {name as string}
              </h3>
              <p
                className="mt-1 text-xs leading-6 text-stone-500"
                style={{ fontFamily: 'var(--font-sans-tamil)' }}
              >
                {t("அன்புடன், உங்கள் வசதிக்கு ஏற்றபடி.", "At your pace, with gentle guidance.")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
