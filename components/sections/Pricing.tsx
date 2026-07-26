"use client";

import React from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsappUrl, PRICING_TIERS } from "@/lib/constants";
import { SectionTitle } from "../ui/SectionTitle";

export function Pricing() {
  const { en, t } = useLanguage();
  const whatsappUrl = getWhatsappUrl();

  return (
    <section id="pricing" className="bg-cream py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <SectionTitle
            eyebrow="CHOOSE YOUR LEGACY"
            title={t("உங்கள் கதைக்கான சிறந்த வடிவம்", "The right form for your story")}
          />
        </div>
        
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-xl p-8 text-left ${
                tier.featured ? "bg-wine text-white shadow-xl ring-2 ring-gold/40" : "bg-white border border-wine/10 shadow-sm"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-0.5 text-[10px] font-bold text-wine">
                  MOST LOVED
                </span>
              )}
              <p className="text-[10px] uppercase tracking-widest text-gold">{tier.id}</p>
              <h3 className={`mt-2 font-serif text-xl sm:text-2xl ${tier.featured ? "text-white" : "text-wine"}`}>
                {en ? tier.enName : tier.taName}
              </h3>
              <div className={`my-4 h-px ${tier.featured ? "bg-white/15" : "bg-wine/10"}`} />
              
              <ul className="space-y-2 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={14} className="text-gold shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-block text-sm font-bold ${tier.featured ? "text-gold" : "text-wine"}`}
              >
                {t("விலை கேளுங்கள் →", "Ask for pricing →")}
              </a>
            </div>
          ))}
        </div>
        
        <p className="mt-5 text-center text-xs text-stone-400">
          {t("உங்கள் கனவுக்கு ஏற்ப தனிப்பயன் விலையும் உண்டு.", "Custom pricing available for your unique story.")}
        </p>
      </div>
    </section>
  );
}
