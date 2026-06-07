export default function Footer() {
  return (
    <footer className="bg-[#102240] text-white py-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-bold text-lg mb-3">Wir schreiben dein Gutachten</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            DGD Direkt ist das digitale Gutachtersystem für Kfz-Werkstätten.
            Schadens- und Wertgutachten, bundesweit, ohne Abo.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-4 text-[#d4a843]">Rechtliches</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://dgd-direkt.de/recht/datenschutz/"
                className="text-gray-400 hover:text-[#d4a843] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutz
              </a>
            </li>
            <li>
              <a
                href="https://dgd-direkt.de/recht/impressum/"
                className="text-gray-400 hover:text-[#d4a843] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Impressum
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-4 text-[#d4a843]">Kontakt</p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a
                href="tel:0800009500"
                className="hover:text-[#d4a843] transition-colors"
              >
                0800 009 5000
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/491713527852"
                className="hover:text-[#d4a843] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                +49 171 3527852 (WhatsApp)
              </a>
            </li>
            <li>Mo-Fr 07:00-17:00 Uhr</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} DGD Direkt. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
