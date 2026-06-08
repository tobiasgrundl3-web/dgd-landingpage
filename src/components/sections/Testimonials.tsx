"use client";

const testimonials = [
  {
    name: "Tom Schwarz",
    role: "Kfz-Meister",
    quote:
      "Früher haben wir teilweise eine Woche auf den Gutachter gewartet. Mit DGD macht mein Geselle die Aufnahme morgens in 20 Minuten und am nächsten Tag liegt das Gutachten vor. Das spart uns locker 3 bis 4 Tage Standzeit pro Fall.",
    image: "/img/testimonials/tom-schwarz.jpg",
    initials: "TS",
  },
  {
    name: "Markus Wahl",
    role: "Kfz-Meister",
    quote:
      "Die App ist wirklich simpel. Mein Team hat nach dem ersten Schadensfall verstanden wie es läuft. Kein Schulungsaufwand, keine komplizierte Software. Einfach Fotos machen, Daten eingeben, fertig.",
    image: "/img/testimonials/markus-wahl.png",
    initials: "MW",
  },
  {
    name: "Florian Mader",
    role: "Kfz-Meister",
    quote:
      "Was mich am meisten überzeugt hat: Wir müssen uns nicht mehr mit der Versicherung rumschlagen. DGD übernimmt das komplett. Mein Team kann sich auf die Reparatur konzentrieren.",
    image: null,
    initials: "FM",
  },
  {
    name: "Toni Michel",
    role: "Lackiererei Michel",
    quote:
      "Unkompliziert, schnell, reibungslos. Gutachten kommt meist am nächsten Tag. Und das Beste: Bei Haftpflicht zahlen wir keinen Cent. Das hat sich vom ersten Fall an gelohnt.",
    image: "/img/testimonials/lackiererei-michel.png",
    initials: "TM",
  },
];

function Avatar({
  src,
  alt,
  initials,
}: {
  src: string | null;
  alt: string;
  initials: string;
}) {
  return (
    <div className="w-12 h-12 rounded-full bg-[#102240] text-white text-sm font-bold flex items-center justify-center shrink-0 relative overflow-hidden">
      <span className="select-none">{initials}</span>
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onLoad={(e) => { e.currentTarget.style.opacity = "1"; }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
          className="absolute inset-0 w-full h-full object-cover opacity-0"
        />
      )}
    </div>
  );
}


export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#102240] text-center mb-12">
          Über 500 Werkstätten arbeiten bereits mit DGD.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className="text-[#d4a843] text-lg leading-none">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-[15px] text-[#333] leading-relaxed flex-1">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-1 border-t border-gray-100">
                <Avatar src={t.image} alt={t.name} initials={t.initials} />
                <div>
                  <p className="font-semibold text-[#102240] text-sm">{t.name}</p>
                  <p className="text-[#777] text-xs">{t.role}</p>
                </div>
              </div>
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
