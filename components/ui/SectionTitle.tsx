import React from "react";
import { Tag } from "./Tag";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}

export function SectionTitle({ eyebrow, title, text, light = false }: SectionTitleProps) {
  return (
    <div className="max-w-xl">
      <Tag>{eyebrow}</Tag>
      <h2
        className={`font-serif text-2xl leading-snug sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-wine"
        }`}
        style={{ fontFamily: 'var(--font-serif-tamil)', lineHeight: 1.35 }}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-3 text-sm sm:text-base leading-[1.9] ${
            light ? "text-white/60" : "text-stone-500"
          }`}
          style={{ fontFamily: 'var(--font-sans-tamil)' }}
        >
          {text}
        </p>
      )}
    </div>
  );
}
