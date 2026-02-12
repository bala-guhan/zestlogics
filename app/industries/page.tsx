import { Navbar } from "@/components/Navbar";
import { IndustriesHero } from "@/lib/IndustriesHero";
import { IndustriesSection } from "@/lib/IndustriesSection";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <IndustriesHero />
      <IndustriesSection />
    </>
  );
}