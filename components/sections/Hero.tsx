"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { scrollToSection } from "@/lib/utils";
import { Btn } from "../ui/Btn";

export function Hero() {
  const { en, t } = useLanguage();

  return (
    <section id="home" className="relative bg-[#1e0810] pt-16 text-white overflow-hidden sm:pt-[72px]">
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(200,155,75,.12),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(100,31,43,.4),transparent_70%)]" />
      
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-20">
        
        {/* copy */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col">
          <div
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gold"
            style={{ fontFamily: 'var(--font-sans-tamil)' }}
          >
            <Sparkles size={10} />
            {t("உங்கள் நினைவுகள், எங்கள் கலை", "YOUR MEMORIES, OUR CRAFT")}
          </div>
          
          <h1
            className="font-serif text-[2rem] leading-[1.25] sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: en ? 'var(--font-serif-latin)' : 'var(--font-serif-tamil)', lineHeight: en ? '1.12' : '1.4' }}
          >
            {en ? (
              <>Turn Your Life<br /><span className="text-gold">Into A Beautiful</span><br />Book</>
            ) : (
              <>உங்கள் வாழ்க்கை<br /><span className="text-gold">ஒரு அழகான</span><br />புத்தகமாக</>
            )}
          </h1>
          
          <div className="my-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gold/50" />
            <Heart size={12} className="text-gold/70" fill="currentColor" />
            <span className="h-px flex-1 bg-white/10" />
          </div>
          
          <p className="max-w-sm text-sm sm:text-[15px] text-white/60" style={{ fontFamily: 'var(--font-sans-tamil)', lineHeight: 1.9 }}>
            {en
              ? "Preserve the moments that made you — thoughtfully written, beautifully designed, forever yours."
              : "நினைவுகளை தலைமுறைகள் கடந்து பாதுகாப்போம். உங்கள் கதை, உங்கள் குரலில், என்றும் வாழும் ஒரு புத்தகமாக."}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <Btn>{t("கதையைத் தொடங்குங்கள்", "Begin Your Story")}</Btn>
            <button
              onClick={() => scrollToSection("#how")}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 active:scale-95"
            >
              {t("எப்படி செய்கிறோம்", "How it works")}
              <ArrowRight size={15} />
            </button>
          </div>
          
          <div className="mt-7 flex gap-6 border-t border-white/10 pt-6">
            {[
              ["500+", t("கதைகள்", "Stories")],
              ["4.9/5", t("மதிப்பீடு", "Rating")],
              ["3+", t("ஆண்டுகள்", "Years")]
            ].map(([n, l]) => (
              <div key={l as string}>
                <b className="block font-serif text-xl text-gold sm:text-2xl">{n}</b>
                <span className="text-white/45 text-[11px]">{l}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* photo mosaic — desktop only */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85, delay: 0.2 }} className="relative hidden md:block">
          <div className="grid grid-cols-12 grid-rows-[150px_140px_160px] gap-2">
            <div className="col-span-5 row-span-2 overflow-hidden rounded-xl relative">
              <Image src="/images/hero-memory-1.jpg" alt="குடும்ப நினைவு" priority fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-4 row-span-1 overflow-hidden rounded-xl relative">
              <Image src="/images/hero-memory-2.jpg" alt="விளக்கு" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-3 row-span-2 overflow-hidden rounded-xl relative">
              <Image src="/images/hero-memory-4.jpg" alt="வாசல்" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-4 row-span-1 overflow-hidden rounded-xl relative">
              <Image src="/images/hero-memory-3.jpg" alt="பொங்கல்" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-3 row-span-1 overflow-hidden rounded-xl relative">
              <Image src="/images/hero-memory-5.jpg" alt="இல்லம்" fill sizes="(max-width: 768px) 100vw, 14vw" className="object-cover object-center transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-4 row-span-1 overflow-hidden rounded-xl relative">
              <Image src="/images/hero-memory-6.jpg" alt="கலைஜோதி இல்லம்" fill sizes="(max-width: 768px) 100vw, 18vw" className="object-cover object-center transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-5 row-span-1 overflow-hidden rounded-xl relative">
              <Image src="/images/kalai-kothi-illam.jpg" alt="Kalai Kothi Illam" fill sizes="(max-width: 768px) 100vw, 22vw" className="object-cover object-center transition duration-700 hover:scale-105" />
            </div>
          </div>
          <div className="absolute -bottom-3 -left-3 flex items-center gap-2 rounded-xl border border-gold/20 bg-[#1e0810]/90 px-3 py-2.5 backdrop-blur-sm shadow-lg">
            <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/20">
              <Heart size={11} className="text-gold" fill="currentColor" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-white">{t("ஒவ்வொரு நினைவும் சிறப்பானது", "Every memory is precious")}</p>
              <p className="text-[9px] text-white/40">Jeevanyam</p>
            </div>
          </div>
        </motion.div>

        {/* mobile-only image strip */}
        <div className="flex gap-2 overflow-x-auto pb-1 md:hidden" style={{ scrollSnapType: "x mandatory" }}>
          {[
            { src: "/images/hero-memory-1.jpg", alt: t("குடும்ப நினைவு புகைப்படம்", "Family memory photo") },
            { src: "/images/hero-memory-2.jpg", alt: t("குடும்ப நினைவு புகைப்படம்", "Family memory photo") },
            { src: "/images/hero-memory-4.jpg", alt: t("குடும்ப நினைவு புகைப்படம்", "Family memory photo") },
            { src: "/images/hero-memory-3.jpg", alt: t("குடும்ப நினைவு புகைப்படம்", "Family memory photo") },
            { src: "/images/hero-memory-6.jpg", alt: "Kalai Joathi Illam" },
            { src: "/images/kalai-kothi-illam.jpg", alt: "Kalai Kothi Illam" },
          ].map((img) => (
            <div key={img.src} className="h-44 w-36 shrink-0 overflow-hidden rounded-xl relative" style={{ scrollSnapAlign: "start" }}>
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill
                sizes="144px"
                className="object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
