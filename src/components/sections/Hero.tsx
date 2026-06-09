const avatars = [
  { initials: "TS", bg: "bg-[#d4a843]" },
  { initials: "MW", bg: "bg-[#FF8C00]" },
  { initials: "FM", bg: "bg-[#1a3a60]" },
];

const riskItems = ["Kein Abo", "0 € bei Haftpflicht", "Kostenloses Test-Gutachten"];

export default function Hero() {
  return (
    <section className="bg-[#102240] text-white py-20 lg:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#d4a843] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-5">
              Für Kfz-Betriebe mit regelmäßigem Unfallschaden-Aufkommen
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Haftpflichtgutachten in 24h.
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Kein Hof voller wartender Autos.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Dein Team nimmt den Schaden in 23 Minuten auf. Unsere
              Sachverständigen erstellen das Gutachten. Wir übernehmen die
              Versicherung. Du reparierst.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <a
                href="#anfrage"
                className="bg-[#d4a843] text-white px-6 py-3.5 rounded-lg font-semibold text-center hover:bg-[#b8902e] transition-colors text-sm sm:text-base sm:flex-1"
              >
                Jetzt kostenlos Partnergespräch anfragen
              </a>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-8">
              {riskItems.map((item) => (
                <span
                  key={item}
                  className="text-[13px] text-[#999] flex items-center gap-1"
                >
                  <span className="text-[#2D9B5A] font-bold">✓</span>
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((a) => (
                  <div
                    key={a.initials}
                    className={`w-8 h-8 rounded-full ${a.bg} text-white text-xs font-bold flex items-center justify-center ring-2 ring-[#102240]`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <span className="text-[#d4a843] text-xl tracking-tighter">★★★★★</span>
              <p className="text-white text-base font-medium">
                Über 500 Kfz-Betriebe vertrauen DGD Direkt
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/handyheader.webp"
              alt="DGD Direkt App auf dem Smartphone"
              className="max-w-xs lg:max-w-sm w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
