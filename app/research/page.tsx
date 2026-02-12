import { Navbar } from "@/components/Navbar";
import { ResearchHero } from "@/lib/ResearchHero";
import { ResearchCoreSection } from "@/lib/ResearchCoreSection";
import { ResearchHowWeWorkSection } from "@/lib/ResearchHowWeWorkSection";

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <ResearchHero />
      <ResearchCoreSection />
      <ResearchHowWeWorkSection />
    </>
  );
}