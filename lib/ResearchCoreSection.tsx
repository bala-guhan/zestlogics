"use client";

import { KeyRound, Brain, Box, GraduationCap } from "lucide-react";

const areas = [
  {
    title: "Intellectual Property & Innovation Systems",
    description:
      "Exploring patentable solutions with innovators and building frameworks for patent analytics, innovation management, and IP commercialization helping creators convert ideas into assets.",
    icon: KeyRound,
  },
  {
    title: "Artificial Intelligence, Data Analytics, IIOT & IOT",
    description:
      "Developing intelligent systems for Business Intelligence, Innovation Mapping, and Data driven decision making through connected devices.",
    icon: Brain,
  },
  {
    title: "Emerging Tech Exploration",
    description:
      "R&D in IoT, Cloud, and Smart Automation to enhance operational efficiency and technology integration.",
    icon: Box,
  },
  {
    title: "Policy, Education & Ecosystem Development",
    description:
      "Research partnerships with academic and government institutions to strengthen the innovation and IP ecosystem in India and beyond.",
    icon: GraduationCap,
  },
];

export function ResearchCoreSection() {
  return (
    <section className="w-full bg-[#0a0a0a] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-24">
      <div
        className="mx-auto h-8 w-full max-w-7xl rounded-full opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(80, 80, 80, 0.6) 20%, rgba(80, 80, 80, 0.6) 80%, transparent 100%)",
        }}
      />
      <h2 className="mx-auto mt-6 max-w-7xl text-center text-2xl font-bold text-white sm:text-4xl">
        Core Research Areas
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((area) => {
          const Icon = area.icon;
          return (
            <div
              key={area.title}
              className="flex flex-col items-center border-l border-dashed border-white/20 px-4 text-center first:border-l-0 lg:px-6"
            >
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/90 lg:h-28 lg:w-28">
                <Icon className="h-10 w-10 lg:h-12 lg:w-12" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white lg:text-xl">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80 lg:text-base">
                {area.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
