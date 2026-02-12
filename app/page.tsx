import { Hero } from "@/lib/Hero";
import { ServicesSection } from "@/lib/ServicesSection";
import { AboutSection } from "@/lib/AboutSection";
import { StatsSection } from "@/lib/StatsSection";
import { ContactSection } from "@/lib/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ContactSection />
    </>
  );
}
