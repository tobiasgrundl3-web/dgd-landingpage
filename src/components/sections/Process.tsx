const steps = [
  {
    title: "Du nimmst den Schaden auf",
    desc: "23 Minuten. Fahrzeugdaten, Fotos, Schadeninfos. Direkt in der DGD-Direkt-App vor Ort.",
  },
  {
    title: "DGD erstellt das Gutachten",
    desc: "Innerhalb von 24h. Fachliche Bewertung durch Sachverständige nach DGD-Standard. 4-Augen-Check inklusive.",
  },
  {
    title: "DGD regelt die Versicherung. Du reparierst.",
    desc: "Kommunikation, Rückfragen, Abrechnung. Alles übernommen. Dein Team konzentriert sich auf die Reparatur.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#102240] text-center mb-16">
          In 3 Schritten startklar. Ohne Setup, ohne Schulung.
        </h2>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-0 relative">
          <div className="absolute top-6 left-[16.7%] right-[16.7%] h-0.5 bg-[#d4a843]/30" />
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6 relative">
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
