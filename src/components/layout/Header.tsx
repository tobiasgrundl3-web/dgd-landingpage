"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dgd-logo.webp"
              alt="DGD Direkt"
              className="h-6 sm:h-8 w-auto"
            />
          </a>
          <a
            href="#anfrage"
            className="bg-[#d4a843] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm hover:bg-[#b8902e] transition-colors whitespace-nowrap"
          >
            Partnergespräch anfragen
          </a>
        </div>
      </div>
    </header>
  );
}
