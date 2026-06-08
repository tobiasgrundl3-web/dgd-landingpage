"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ENDPOINT = "https://hooks.zapier.com/hooks/catch/26752793/4bvwtqt/";

const nextSteps = [
  "Jonas ruft dich innerhalb von 24 Stunden zurück.",
  "Ihr prüft gemeinsam, ob DGD Direkt zu deinem Betrieb passt.",
  "Du erhältst deine persönlichen Zugangsdaten zur DGD-Direkt-App.",
  "Erste Schadenaufnahme mit kostenlosem Test-Gutachten.",
];

const mitarbeiterOptionen = ["Nur ich", "1 bis 5", "6 bis 20", "20+"];
const schadenOptionen = ["Unter 6", "6 bis 10", "10+"];

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <label
            key={opt}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm cursor-pointer transition-colors ${
              selected
                ? "border-[#d4a843] bg-[#d4a843]/10 text-[#102240] font-semibold"
                : "border-gray-200 text-[#555555] hover:border-[#d4a843]"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={selected}
              onChange={() => onChange(opt)}
              required
              className="sr-only"
            />
            <span
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                selected ? "border-[#d4a843]" : "border-gray-300"
              }`}
            >
              {selected && (
                <span className="w-2 h-2 rounded-full bg-[#d4a843] block" />
              )}
            </span>
            {opt}
          </label>
        );
      })}
    </div>
  );
}

export default function ContactForm() {
  const [utm, setUtm] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });
  const [form, setForm] = useState({
    mitarbeiter: "",
    schaeden: "",
    name: "",
    firma: "",
    telefon: "",
    plz: "",
    datenschutz: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setUtm({
      utm_source: p.get("utm_source") ?? "",
      utm_medium: p.get("utm_medium") ?? "",
      utm_campaign: p.get("utm_campaign") ?? "",
      utm_term: p.get("utm_term") ?? "",
      utm_content: p.get("utm_content") ?? "",
    });
  }, []);

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.datenschutz) {
      setError("Bitte stimme der Datenschutzerklärung zu.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...utm }),
      });
      router.push("/danke");
    } catch {
      setError(
        "Etwas ist schiefgelaufen. Bitte ruf uns direkt an: 0800 009 5000"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="anfrage" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102240] mb-4">
            Kostenloses Partnergespräch mit Jonas anfragen
          </h2>
          <p className="text-[#555555] text-lg max-w-xl mx-auto">
            In 2 Minuten ausfüllen. Jonas prüft mit dir, ob DGD Direkt zu
            deinem Betrieb passt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <p className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Wie viele Mitarbeiter sind in deinem Betrieb beschäftigt? *
                </p>
                <RadioGroup
                  name="mitarbeiter"
                  options={mitarbeiterOptionen}
                  value={form.mitarbeiter}
                  onChange={(v) => update("mitarbeiter", v)}
                />
              </div>
              <div>
                <p className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Um wie viele Schadensfälle handelt es sich ca. pro Monat? *
                </p>
                <RadioGroup
                  name="schaeden"
                  options={schadenOptionen}
                  value={form.schaeden}
                  onChange={(v) => update("schaeden", v)}
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#1A1A1A] mb-1.5"
                >
                  Dein Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Max Mustermann"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="firma"
                  className="block text-sm font-semibold text-[#1A1A1A] mb-1.5"
                >
                  Deine Werkstatt / Firma *
                </label>
                <input
                  id="firma"
                  type="text"
                  required
                  value={form.firma}
                  onChange={(e) => update("firma", e.target.value)}
                  placeholder="Mustermann Kfz-Werkstatt GmbH"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="telefon"
                  className="block text-sm font-semibold text-[#1A1A1A] mb-1.5"
                >
                  Deine Telefonnummer *
                </label>
                <input
                  id="telefon"
                  type="tel"
                  required
                  value={form.telefon}
                  onChange={(e) => update("telefon", e.target.value)}
                  placeholder="+49 123 456789"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="plz"
                  className="block text-sm font-semibold text-[#1A1A1A] mb-1.5"
                >
                  Deine PLZ *
                </label>
                <input
                  id="plz"
                  type="text"
                  required
                  value={form.plz}
                  onChange={(e) => update("plz", e.target.value)}
                  placeholder="12345"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-colors"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="datenschutz"
                  checked={form.datenschutz}
                  onChange={(e) => update("datenschutz", e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#d4a843] shrink-0 cursor-pointer"
                />
                <label
                  htmlFor="datenschutz"
                  className="text-sm text-[#555555] leading-relaxed cursor-pointer"
                >
                  Ich bin einverstanden, dass DGD meine Angaben verarbeitet, um
                  mich zu kontaktieren.{" "}
                  <a
                    href="https://dgd-direkt.de/recht/datenschutz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d4a843] underline hover:no-underline"
                  >
                    Datenschutzerklärung
                  </a>
                </label>
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d4a843] text-white py-4 rounded-lg font-bold text-base hover:bg-[#b8902e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading
                  ? "Wird gesendet..."
                  : "Jetzt kostenlos Partnergespräch anfragen"}
              </button>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3">
                {["Unverbindlich", "Jonas meldet sich persönlich", "In 15 Min. weißt du ob es passt"].map((item) => (
                  <span key={item} className="text-[13px] text-[#666] flex items-center gap-1">
                    <span className="text-[#2D9B5A] font-bold">✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </form>

            <div className="bg-[#F5F5F5] rounded-2xl p-8">
              <h3 className="font-bold text-[#102240] text-lg mb-6">
                Das passiert nach deiner Anfrage:
              </h3>
              <ol className="space-y-5">
                {nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#d4a843] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-[#555555] text-sm leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
      </div>
    </section>
  );
}
