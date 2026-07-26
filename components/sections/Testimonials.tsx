"use client";

import React from "react";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionTitle } from "../ui/SectionTitle";

export function Testimonials() {
  const { en, t } = useLanguage();

  return (
    <section className="bg-cream py-14 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="WORDS OF LOVE"
          title={t("படித்தவர்களின் இதயங்களிலிருந்து", "From those who trusted us")}
        />
        
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {TESTIMONIALS.map((review, i) => (
            <div
              key={i}
              className="w-[85vw] sm:w-[350px] shrink-0 snap-start rounded-xl bg-white p-6 shadow-sm border border-wine/5"
            >
              <Quote size={20} className="text-gold/40 mb-4" />
              <p
                className="text-[13px] leading-[1.8] text-stone-600 min-h-[80px]"
                style={{ fontFamily: 'var(--font-sans-tamil)' }}
              >
                {en ? review.en : review.ta}
              </p>
              <p
                className="mt-4 text-[11px] font-bold text-wine"
                style={{ fontFamily: 'var(--font-sans-tamil)' }}
              >
                — {en ? review.authorEn : review.authorTa}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
