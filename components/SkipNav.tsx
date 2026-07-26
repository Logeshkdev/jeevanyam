import React from "react";

export function SkipNav() {
  return (
    <a
      href="#home"
      className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-wine focus:text-white focus:px-4 focus:py-2 focus:rounded-br-lg"
    >
      Skip to main content
    </a>
  );
}
