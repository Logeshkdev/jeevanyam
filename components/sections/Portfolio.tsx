"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsappUrl } from "@/lib/constants";
import { SectionTitle } from "../ui/SectionTitle";

export function Portfolio() {
  const { en, t } = useLanguage();
  const whatsappUrl = getWhatsappUrl();

  const labels = [
    t("காதல்", "Love"),
    t("குடும்பம்", "Family"),
    t("திருமணம்", "Wedding"),
    t("வாழ்க்கை", "Life"),
  ];

  return (
    <section id="portfolio" className="bg-[#1e0810] py-14 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            light
            eyebrow="A GLIMPSE INSIDE"
            title={t("கைகளில் பிடிக்கக்கூடிய நினைவுகள்", "Memories made tangible")}
          />
          <div className="flex flex-wrap gap-2">
            {labels.map((l) => (
              <span key={l} className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/50">
                {l}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Portfolio Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex overflow-hidden rounded-2xl bg-[#2c1019] ring-1 ring-gold/20 shadow-xl"
          >
            <div className="relative w-32 shrink-0 overflow-hidden sm:w-36">
              <Image
                src="/images/kalai-joathi-book.jpg"
                alt={t("கலைஜோதி இல்லம்", "Kalaijoathi Illam")}
                width={300}
                height={400}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-[#2c1019] to-transparent" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold" style={{ fontFamily: 'var(--font-sans-tamil)' }}>
                  {t("வீட்டின் பயணம்", "House Journey")}
                </span>
                <h3 className="mt-1 font-serif text-sm text-white sm:text-base" style={{ fontFamily: 'var(--font-serif-tamil)', lineHeight: 1.4 }}>
                  {t("கலைஜோதி இல்லம்", "Kalaijoathi Illam")}
                </h3>
                <p className="mt-1 text-[11px] text-white/40" style={{ fontFamily: 'var(--font-sans-tamil)' }}>
                  {t("எழுத்து — ராம்", "Written by Ram")}
                </p>
                <div className="my-2 h-px w-5 bg-gold/30" />
                <p className="text-[11px] leading-6 text-white/50" style={{ fontFamily: 'var(--font-sans-tamil)' }}>
                  {t("ஒரு குடும்பக் கனவும் உழைப்பும் புத்தகமானது.", "A family's dream, now a book.")}
                </p>
              </div>
              <div className="mt-3 flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-gold" fill="currentColor" />
                ))}
                <span className="ml-2 text-[9px] text-white/30" style={{ fontFamily: 'var(--font-sans-tamil)' }}>
                  {t("வெளியிடப்பட்டது", "Published")}
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Portfolio Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/5"
          >
            <div className="flex flex-col items-center gap-3 p-6 text-center">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/40">
                <BookOpen size={18} />
              </div>
              <p className="font-serif text-[15px] text-white/50" style={{ fontFamily: 'var(--font-serif-tamil)' }}>
                {t("அடுத்த கதை விரைவில்…", "Next story coming soon…")}
              </p>
              <p className="text-[12px] text-white/30" style={{ fontFamily: 'var(--font-sans-tamil)' }}>
                {t("உங்கள் கதை இங்கே இருக்கலாம்", "Your story could be here")}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-5 py-2 text-[12px] font-bold text-gold transition hover:bg-gold/10"
                style={{ fontFamily: 'var(--font-sans-tamil)' }}
              >
                {t("தொடங்குங்கள்", "Begin yours")}
                <ArrowRight size={11} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
