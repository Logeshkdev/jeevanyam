"use client";

import React, { FormEvent, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Btn } from "../ui/Btn";
import { SectionTitle } from "../ui/SectionTitle";

export function Contact() {
  const { en, t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const f = new FormData(e.currentTarget);
    const num = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "916383393155";
    
    // Slight delay for UI feedback
    setTimeout(() => {
      window.open(
        `https://wa.me/${num}?text=Hello!%0AName: ${f.get("name")}%0APhone: ${f.get("phone")}%0AStory: ${f.get("story")}%0AMessage: ${f.get("message")}`,
        "_blank"
      );
      setLoading(false);
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setSuccess(false), 6000);
    }, 500);
  };

  const inputClass = "w-full rounded-lg border border-wine/20 bg-white/50 px-4 py-3 text-sm text-wine focus:border-gold focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold";

  return (
    <section id="contact" className="bg-[#1e0810] py-14 text-white sm:py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <div className="flex justify-center">
          <SectionTitle
            light
            eyebrow="BEGIN HERE"
            title={t("உங்கள் கதையை எங்களிடம் கூறுங்கள்", "Tell us your story")}
            text={t("நாங்கள் உங்களைத் தொடர்புகொள்கிறோம்", "We'll reach out to discuss the details.")}
          />
        </div>
        
        <form onSubmit={submit} className="mt-8 space-y-4 text-left">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input name="name" required placeholder={t("உங்கள் பெயர்", "Your Name")} className={inputClass} />
            <input name="phone" type="tel" required placeholder={t("தொலைபேசி எண்", "Phone Number")} className={inputClass} />
          </div>
          
          <select name="story" required defaultValue="" className={inputClass} style={{ fontFamily: 'var(--font-sans-tamil)' }}>
            <option value="" disabled>{t("எந்த வகையான கதை?", "What type of story?")}</option>
            <option value="Love Story">{t("காதல் கதை", "Love Story")}</option>
            <option value="Family Story">{t("குடும்ப நினைவுகள்", "Family Story")}</option>
            <option value="Parents Story">{t("பெற்றோர் வரலாறு", "Parents Story")}</option>
            <option value="Other">{t("மற்றவை", "Other")}</option>
          </select>
          
          <textarea
            name="message"
            required
            placeholder={t("சிறிது சுருக்கமாக கூறுங்கள்...", "Tell us a bit about it...")}
            className={`${inputClass} min-h-[120px] resize-y`}
          />
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gold py-3.5 text-sm font-bold text-wine transition hover:bg-white active:scale-[.98] disabled:opacity-70"
            >
              {loading ? "..." : t("செய்தி அனுப்புங்கள்", "Send Message")}
            </button>
            {success && (
              <p className="mt-3 text-center text-sm text-gold" style={{ fontFamily: 'var(--font-sans-tamil)' }}>
                {t("நன்றி! நாங்கள் விரைவில் உங்களை தொடர்புகொள்வோம்.", "Thank you! We'll get back to you shortly.")}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
