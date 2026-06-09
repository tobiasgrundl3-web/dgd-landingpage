import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: { icon: [{ url: "/favicon.webp", type: "image/webp" }] },
  title: "DGD Direkt — Haftpflichtgutachten digital für Kfz-Werkstätten",
  description:
    "Schadens- und Wertgutachten direkt für deine Werkstatt. Digitale Schadenaufnahme, Gutachten in 24 Stunden, 0 Euro Werkstatt-Anteil bei Haftpflicht. Bundesweit, ohne Abo.",
  metadataBase: new URL("https://wirschreibendeingutachten.de"),
  openGraph: {
    title: "DGD Direkt — Haftpflichtgutachten digital für Kfz-Werkstätten",
    description:
      "Schadens- und Wertgutachten direkt für deine Werkstatt. Bundesweit, ohne Abo.",
    url: "https://wirschreibendeingutachten.de",
    siteName: "DGD Direkt",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased text-[#1A1A1A]`}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
