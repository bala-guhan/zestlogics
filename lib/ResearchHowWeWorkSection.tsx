"use client";

import { Handshake, Cog, Shield, Puzzle } from "lucide-react";

const steps = [
  {
    title: "Collaborate",
    description:
      "Partnering with institutions, startups, and innovation councils.",
    icon: Handshake,
  },
  {
    title: "Prototype",
    description:
      "Turning research outcomes into functional tech-driven tools.",
    icon: Cog,
  },
  {
    title: "Protect",
    description:
      "Integrating IP strategy in every project we innovate and design.",
    icon: Shield,
  },
  {
    title: "Innovative Solutions",
    description:
      "Transforming lab innovations into deployable enterprise solutions.",
    icon: Puzzle,
  },
];

export function ResearchHowWeWorkSection() {
  return (
    <section className="w-full bg-[#111111] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-24">
      <h2 className="mx-auto max-w-7xl text-center text-2xl font-bold text-white sm:text-4xl">
        How We Work
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="flex flex-col items-center border-l border-dashed border-white/20 px-4 text-center first:border-l-0 lg:px-6"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-transparent text-blue-500 lg:h-24 lg:w-24">
                <Icon className="h-9 w-9 lg:h-11 lg:w-11" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white lg:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80 lg:text-base">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
