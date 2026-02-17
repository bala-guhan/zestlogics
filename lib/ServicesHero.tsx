"use client";

import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";

export function ServicesHero() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/services-hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <TextAnimate
            as="h1"
            by="word"
            once
            startOnView
            animation="blurInUp"
            className="max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Accelerating Insight with Intelligent Data Analytics
          </TextAnimate>
          <TextAnimate
            as="p"
            by="word"
            once
            startOnView
            animation="fadeIn"
            className="mt-4 max-w-2xl text-base text-white/90 sm:mt-6 sm:text-lg sm:text-xl"
          >
            Zestlogic Systems helps organisations turn complex data into clear,
            actionable decisions across analytics, BI, business analytics, AI/ML,
            and R&D-driven solutions.
          </TextAnimate>
        </div>
      </div>
    </section>
  );
}
