import React from "react";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-2 text-[11px] font-bold uppercase tracking-[.22em] text-gold"
      style={{ fontFamily: 'var(--font-sans-tamil)' }}
    >
      {children}
    </p>
  );
}
