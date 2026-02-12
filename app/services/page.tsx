import { Navbar } from "@/components/Navbar";
import { IntegrateSection } from "@/lib/IntegrateSection";
import { ServicesHero } from "@/lib/ServicesHero";
import { ServicesPageSection } from "@/lib/ServicesPageSection";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <ServicesPageSection />
      <IntegrateSection />
    </>
  );
}
