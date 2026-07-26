"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#f0e6d3] py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <SectionTitle
            eyebrow="WHY WE EXIST"
            title={t("நினைவுகள் மறக்கப்படக் கூடாது", "Memories deserve to outlive the moment")}
            text={t(
              "ஒரு வீட்டில் சொல்லப்படும் கதைகள், நாளை ஒரு குடும்பத்தின் வேர்களாக மாறுகின்றன. அவற்றை அன்புடன் எழுதிப் பாதுகாப்பதே எங்கள் பணி.",
              "The stories told in a home become a family's roots. We give them a lasting, beautiful place to live."
            )}
          />
          <div className="mt-6 flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-wine text-sm font-bold text-gold">
              A
            </div>
            <div>
              <b className="text-sm text-wine">Ananya Raman</b>
              <p className="text-xs text-stone-500">Founder &amp; Story Keeper</p>
            </div>
          </div>
        </div>
        
        <blockquote className="border-l-2 border-gold pl-6 font-serif text-xl leading-relaxed text-wine sm:text-2xl">
          "{t("ஒவ்வொரு குடும்பத்திலும் எழுதப்படக் காத்திருக்கும் ஒரு நூல் இருக்கிறது.", "Every family has a book waiting to be written.")}"
        </blockquote>
      </div>
    </section>
  );
}
