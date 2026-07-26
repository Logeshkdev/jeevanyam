"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsappUrl, SERVICES } from "@/lib/constants";
import { SectionTitle } from "../ui/SectionTitle";

export function Services() {
  const { en, t } = useLanguage();
  const whatsappUrl = getWhatsappUrl();

  return (
    <section id="services" className="bg-[#f0e6d3] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="STORIES WE HOLD"
          title={t("ஒவ்வொரு வாழ்க்கைக்கும் ஒரு புத்தகம்", "A book for every life")}
          text={t("காதல், குடும்பம், கனவுகள் — எந்த நினைவும் சிறியது அல்ல.", "Love, family, milestones — no memory is too small.")}
        />
        
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <motion.article key={service.id} whileHover={{ y: -3 }} className="group relative overflow-hidden rounded-xl bg-white p-5 shadow-sm">
              <div className="absolute right-3 top-3 text-3xl opacity-15 transition group-hover:scale-125 group-hover:opacity-25">
                {service.emoji}
              </div>
              <h3
                className="relative font-serif text-base sm:text-lg text-wine"
                style={{ fontFamily: 'var(--font-serif-tamil)', lineHeight: 1.4 }}
              >
                {en ? service.enName : service.taName}
              </h3>
              <p
                className="relative mt-2 text-xs sm:text-[13px] leading-6 sm:leading-7 text-stone-500"
                style={{ fontFamily: 'var(--font-sans-tamil)' }}
              >
                {en ? service.enDesc : service.taDesc}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-wine"
                style={{ fontFamily: 'var(--font-sans-tamil)' }}
              >
                {t("விசாரிக்கவும்", "Enquire")}
                <ArrowRight size={12} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
