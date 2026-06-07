import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Benefits />
      <Process />
      <Testimonials />
      <ContactForm />
      <Contact />
      <FAQ />
    </main>
  );
}
