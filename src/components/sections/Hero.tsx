const badges = [
  "Keine Abos",
  "Schadenaufnahme bei dir vor Ort",
  "Haftpflicht direkt mit der Versicherung",
];

export default function Hero() {
  return (
    <section className="bg-[#102240] text-white py-20 lg:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#d4a843] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-5">
              Für Kfz-Betriebe mit regelmäßigem Unfallschaden-Aufkommen
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Haftpflichtgutachten abwickeln, ohne dein Team mit Papierkram zu
              blockieren.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Schadens- und Wertgutachten direkt für deine Werkstatt. Digitale
              Schadenaufnahme durch deinen Betrieb als verifizierter DGD-Partner
              direkt vor Ort, fachliche Bewertung durch Sachverständige nach
              DGD-Standard. Bundesweit, ohne Abo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#anfrage"
                className="bg-[#d4a843] text-white px-6 py-3.5 rounded-lg font-semibold text-center hover:bg-[#b8902e] transition-colors text-sm sm:text-base"
              >
                Partnergespräch mit Jonas anfragen
              </a>
              <a
                href="#ablauf"
                className="border-2 border-white text-white px-6 py-3.5 rounded-lg font-semibold text-center hover:bg-white hover:text-[#102240] transition-colors text-sm sm:text-base"
              >
                Ablauf in 60 Sekunden
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-2 bg-white/10 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full"
                >
                  <span className="text-[#d4a843] font-bold">✓</span>
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#d4a843] text-xl tracking-tighter">★★★★★</span>
              <p className="text-gray-300 text-sm">
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
