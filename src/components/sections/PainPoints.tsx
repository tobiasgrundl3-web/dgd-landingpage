const items = [
  {
    icon: "🔧",
    text: "Dein Team hat regelmäßig Haftpflichtschäden in der Annahme.",
  },
  {
    icon: "❓",
    text: "Deine Kunden fragen: Brauche ich ein Gutachten oder reicht ein Kostenvoranschlag?",
  },
  {
    icon: "⏱️",
    text: "Versicherungen, Rückfragen und Dokumentation kosten Zeit.",
  },
  {
    icon: "📈",
    text: "Du willst Schäden professioneller abwickeln, ohne ein eigenes Gutachterbüro aufzubauen.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#102240] mb-12">
          Kommt dir das bekannt vor?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-[#F5F5F5] rounded-xl p-6 text-left"
            >
              <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
              <p className="text-[#555555] text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <a
          href="#anfrage"
          className="inline-block bg-[#d4a843] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#b8902e] transition-colors"
        >
          Ja, ich will den Ablauf kennenlernen
        </a>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3">
          {["Kein Abo", "0 € bei Haftpflicht", "Kostenloses Test-Gutachten"].map((item) => (
            <span key={item} className="text-[13px] text-[#666] flex items-center gap-1">
              <span className="text-[#2D9B5A] font-bold">✓</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
