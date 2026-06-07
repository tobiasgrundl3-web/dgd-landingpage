const steps = [
  {
    title: "Du nimmst den Schaden digital auf",
    desc: "Fahrzeugdaten, Fotos, Schadeninfos, Unterschrift. Direkt in der DGD-Direkt-App vor Ort.",
  },
  {
    title: "DGD prüft und erstellt das Gutachten",
    desc: "Fachliche Bewertung durch qualifizierte Sachverständige nach DGD-Standard. 4-Augen-Check inklusive.",
  },
  {
    title: "DGD unterstützt die Abwicklung",
    desc: "Kommunikation mit der Versicherung, Rückfragen, Versand und Abrechnung.",
  },
  {
    title: "Dein Betrieb bleibt beim Kunden sichtbar",
    desc: "Du führst den Kunden, DGD arbeitet im Hintergrund.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#102240] text-center mb-16">
          Vom Schaden zum fertigen Gutachten. Ohne Bürokratie für dein Team.
        </h2>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
          <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-[#d4a843]/30" />
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 relative">
              <div className="w-12 h-12 rounded-full bg-[#d4a843] text-white font-bold text-lg flex items-center justify-center mb-5 shadow-md relative z-10">
                {i + 1}
              </div>
              <h3 className="font-bold text-[#102240] text-base mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-[#d4a843] text-white font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-[#102240] text-base mb-2">{step.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
