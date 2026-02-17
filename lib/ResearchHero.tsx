"use client";

import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";

export function ResearchHero() {
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

      <div className="relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <TextAnimate
            as="h1"
            by="word"
            once
            startOnView
            animation="blurInUp"
            className="text-2xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Our Vision
          </TextAnimate>
          <TextAnimate
            as="p"
            by="word"
            once
            startOnView
            animation="fadeIn"
            className="mt-4 text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base sm:text-lg"
          >
            To create a sustainable innovation ecosystem where ideas evolve into
            impactful technologies, empowering industries, institutions, and
            entrepreneurs through knowledge, data, and design, while ensuring
            that these innovations are protected under IP laws through efficient
            patent registration by our team.
          </TextAnimate>

          <TextAnimate
            as="h2"
            by="word"
            once
            startOnView
            animation="blurInUp"
            className="mt-10 text-2xl font-bold leading-tight text-white sm:mt-16 sm:text-5xl lg:text-6xl"
          >
            Zestlogics R&D
          </TextAnimate>
          <TextAnimate
            as="p"
            by="word"
            once
            startOnView
            animation="fadeIn"
            className="mt-3 text-lg font-medium text-white sm:mt-4 sm:text-xl sm:text-2xl"
          >
            At Zestlogics, we see research as an investment in the future.
          </TextAnimate>
          <TextAnimate
            as="p"
            by="word"
            once
            startOnView
            animation="fadeIn"
            className="mt-4 text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base sm:text-lg"
          >
            Our Research & Development division drives innovation at the
            intersection of technology, intellectual property, and data
            intelligence, building solutions that shape tomorrow&apos;s
            innovation landscape.
          </TextAnimate>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-30"
        style={{
          background:
            "linear-gradient(to top, rgba(38, 38, 38, 0.9) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z' fill='%23262626' opacity='0.6'/%3E%3C/svg%3E") no-repeat bottom center`,
          backgroundSize: "cover",
        }}
      />
    </section>
  );
}
