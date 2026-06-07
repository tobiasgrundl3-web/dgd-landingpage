const testimonials = [
  {
    name: "Tom Schwarz",
    role: "Kfz-Meister",
    quote: "Ein riesiger Vorteil ist die extrem schnelle Abwicklung.",
    image: "/img/testimonials/tom-schwarz.jpg",
    initials: null,
  },
  {
    name: "Markus Wahl",
    role: "Kfz-Meister",
    quote: "Die App für die digitale Schadenaufnahme ist kinderleicht.",
    image: "/img/testimonials/markus-wahl.png",
    initials: null,
  },
  {
    name: "Florian Mader",
    role: "Kfz-Meister",
    quote: "Es läuft alles immer unkompliziert ab.",
    image: null,
    initials: "FM",
  },
  {
    name: "Toni Michel",
    role: "Lackiererei Michel",
    quote: "Unkompliziert, schnell, reibungslos. Gutachten meist am nächsten Tag.",
    image: "/img/testimonials/lackiererei-michel.png",
    initials: null,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#102240] text-center mb-12">
          Stimmen aus dem DGD-Netzwerk.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col"
            >
              <p className="text-[#d4a843] text-3xl leading-none mb-3">"</p>
              <p className="text-[#1A1A1A] text-base leading-relaxed mb-6 flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                {t.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#102240] text-white font-bold flex items-center justify-center text-sm shrink-0">
                    {t.initials}
                  </div>
                )}
                <div>
                  <p className="font-bold text-[#102240] text-sm">{t.name}</p>
                  <p className="text-[#555555] text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
