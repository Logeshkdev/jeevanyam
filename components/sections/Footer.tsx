"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-wine/10 bg-cream py-6 text-center">
      <div className="mx-auto flex flex-col items-center justify-center gap-2">
        <p className="text-xs text-stone-500">
          &copy; {new Date().getFullYear()} Jeevanyam. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5 text-[10px] text-stone-400">
          Made with <Heart size={10} className="text-gold" fill="currentColor" /> in Tamil Nadu
        </p>
        <div className="mt-2 flex justify-center gap-4 opacity-50">
          <a href="https://instagram.com/jeevanyam" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition">
            <Image src="/images/instagram.svg" alt="Instagram" width={20} height={20} className="w-5 h-5 text-wine"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
