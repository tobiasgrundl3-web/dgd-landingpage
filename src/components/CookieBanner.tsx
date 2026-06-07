"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  const accept = (type: "essential" | "all") => {
    localStorage.setItem("cookie-consent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#102240] text-white p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-300 max-w-2xl">
          Wir nutzen Cookies und Google Tag Manager, um die Nutzung dieser
          Seite anonymisiert auszuwerten.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => accept("essential")}
            className="border border-gray-400 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-white hover:text-white transition-colors"
          >
            Nur essenzielle
          </button>
          <button
            onClick={() => accept("all")}
            className="bg-[#d4a843] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#b8902e] transition-colors"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
