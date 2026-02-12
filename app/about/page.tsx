import { Navbar } from "@/components/Navbar";
import { AboutHero } from "@/lib/AboutHero";
import { OurStorySection } from "@/lib/OurStorySection";
import { LeadershipSection } from "@/lib/LeadershipSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurStorySection />
      <LeadershipSection />
    </>
  );
}