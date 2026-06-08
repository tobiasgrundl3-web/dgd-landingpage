const benefits = [
  {
    num: "01",
    title: "Schadenaufnahme in 23 Minuten",
    desc: "Digitale Schadenaufnahme bei dir vor Ort. Kein Papier, keine doppelte Erfassung.",
  },
  {
    num: "02",
    title: "Gutachten in 24 Stunden",
    desc: "I.d.R. innerhalb 2 Werktagen, bei Haftpflicht in 24 Stunden kalkuliert. Bewertung durch Sachverständige nach DGD-Standard.",
  },
  {
    num: "03",
    title: "0 Euro Werkstatt-Anteil bei Haftpflicht",
    desc: "Bei Haftpflichtschäden rechnen wir direkt mit der gegnerischen Versicherung ab. Kein Abo, keine versteckten Plattformgebühren.",
  },
  {
    num: "04",
    title: "DGD übernimmt die Versicherungskommunikation",
    desc: "Kommunikation mit der Versicherung, Rückfragen, Versand und Abrechnung. Wir nehmen den Bürokratie-Anteil aus dem Prozess.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#102240] text-center mb-12">
          23 Minuten Aufnahme. 24h Gutachten. 0 € Kosten.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div
              key={b.num}
              className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <p className="text-5xl font-bold text-[#d4a843]/30 mb-4 leading-none">{b.num}</p>
              <h3 className="text-xl font-bold text-[#102240] mb-3">{b.title}</h3>
              <p className="text-[#555555] leading-relaxed">{b.desc}</p>
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
