const contacts = [
  {
    emoji: "📞",
    title: "Anruf",
    primary: "0800 009 5000",
    secondary: "Mo-Fr 07:00-17:00 Uhr",
    href: "tel:0800009500",
    linkLabel: "Jetzt anrufen",
  },
  {
    emoji: "💬",
    title: "WhatsApp",
    primary: "+49 171 3527852",
    secondary: "Schnelle Antwort garantiert",
    href: "https://wa.me/491713527852",
    linkLabel: "Nachricht senden",
  },
  {
    emoji: "📅",
    title: "Termin buchen",
    primary: "15-Minuten-Slot",
    secondary: "Direkt in den Kalender",
    href: "https://calendly.com/j-kirse-dgd-direkt",
    linkLabel: "Termin auswählen",
  },
];

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-[#102240] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          So erreichst du uns sofort.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contacts.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-colors group text-center block"
            >
              <div className="text-4xl mb-4">{c.emoji}</div>
              <p className="text-[#d4a843] text-xs font-semibold uppercase tracking-widest mb-2">
                {c.title}
              </p>
              <p className="text-white font-bold text-lg mb-1">{c.primary}</p>
              <p className="text-gray-400 text-sm mb-4">{c.secondary}</p>
              <span className="text-[#d4a843] text-sm font-semibold group-hover:underline">
                {c.linkLabel} &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
