import Image from "next/image";
import Hero from "@/components/Hero";
import Services from "@/components/Servicios";
import WorkProcess from "@/components/Workprocess";
import Technologies from "@/components/Tecnologias";
import Testimonials from "@/components/Testimonios";
import FAQ from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WorkProcess />
      <Technologies />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
