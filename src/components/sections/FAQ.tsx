"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Müssen wir ein Abo abschließen?",
    a: "Nein. Es gibt kein Abo und keine versteckten Plattformgebühren. Bei Haftpflichtschäden rechnen wir direkt mit der gegnerischen Versicherung ab. Dein Werkstatt-Anteil ist 0 Euro.",
  },
  {
    q: "Wer spricht mit dem Kunden?",
    a: "Du. Dein Betrieb bleibt der primäre Kontaktpunkt. DGD arbeitet im Hintergrund.",
  },
  {
    q: "Was passiert, wenn die Versicherung kürzt?",
    a: "Bei Kürzungen unterstützt DGD bei der Rückfrage gegenüber der Versicherung mit fachlichen Argumenten und Dokumentation.",
  },
  {
    q: "Was braucht mein Team für den Start?",
    a: "Ein Tablet oder Smartphone mit Kamera und Internet. Die DGD-Direkt-App führt das Team durch die Schadenaufnahme.",
  },
  {
    q: "Wie läuft das Test-Gutachten?",
    a: "Nach Registrierung und Verifizierung führst du eine Probe-Schadenaufnahme durch. DGD gibt Feedback und schaltet dich frei.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#102240] text-center mb-12">
          Was Werkstätten vor dem Start fragen.
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-[#102240] text-sm sm:text-base">
                  {faq.q}
                </span>
                <span
                  className={`text-[#d4a843] text-2xl font-light shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#555555] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#anfrage"
            className="inline-block bg-[#d4a843] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#b8902e] transition-colors"
          >
            Jetzt kostenlos Partnergespräch anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
