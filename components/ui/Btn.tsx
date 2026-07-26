import React from "react";
import { ArrowRight } from "lucide-react";
import { getWhatsappUrl } from "@/lib/constants";

interface BtnProps {
  children: React.ReactNode;
  ghost?: boolean;
  href?: string;
  internal?: boolean;
}

export function Btn({ children, ghost = false, href, internal = false }: BtnProps) {
  const targetHref = href || getWhatsappUrl();
  return (
    <a
      href={targetHref}
      {...(!internal && { target: "_blank", rel: "noopener noreferrer" })}
      className={
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition active:scale-95 " +
        (ghost
          ? "border border-white/30 text-white hover:bg-white/10"
          : "bg-wine text-white shadow-md shadow-wine/20")
      }
    >
      {children}
      <ArrowRight size={15} />
    </a>
  );
}
