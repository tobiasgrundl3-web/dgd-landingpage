import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Danke für deine Anfrage – DGD Direkt",
  robots: { index: false },
};

const contacts = [
  {
    emoji: "📞",
    label: "Telefon",
    value: "0800 009 5000",
    sub: "Mo-Fr 07:00-17:00 Uhr",
    href: "tel:0800009500",
  },
  {
    emoji: "💬",
    label: "WhatsApp",
    value: "+49 171 3527852",
    sub: "Schnelle Antwort garantiert",
    href: "https://wa.me/491713527852",
  },
];

export default function DankePage() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-white">
      <div className="max-w-2xl w-full text-center">
        <div className="w-20 h-20 rounded-full bg-[#d4a843] flex items-center justify-center mx-auto mb-8">
          <span className="text-white text-4xl font-bold leading-none">✓</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#102240] mb-4">
          Danke für deine Anfrage!
        </h1>
        <p className="text-[#555555] text-lg leading-relaxed mb-4">
          Jonas meldet sich innerhalb von 24 Stunden persönlich bei dir.
        </p>
        <p className="text-[#555555] text-base leading-relaxed mb-12">
          Du möchtest nicht warten? Ruf uns direkt an oder schreib uns auf
          WhatsApp.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-lg mx-auto w-full">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex flex-col items-center gap-2 bg-[#F5F5F5] rounded-xl p-6 hover:bg-[#ececec] transition-colors group"
            >
              <span className="text-3xl">{c.emoji}</span>
              <span className="text-xs font-semibold text-[#d4a843] uppercase tracking-widest">
                {c.label}
              </span>
              <span className="font-bold text-[#102240] text-base">{c.value}</span>
              <span className="text-[#777] text-xs">{c.sub}</span>
            </a>
          ))}
        </div>

        <Link
          href="/"
          className="text-sm text-[#555555] hover:text-[#102240] underline transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
