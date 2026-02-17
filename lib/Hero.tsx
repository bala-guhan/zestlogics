"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { TextAnimate } from "@/components/ui/text-animate";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/welcome.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" />
      </div>

      <Navbar />

      <div className="relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <TextAnimate
            as="h1"
            by="line"
            once
            startOnView
            animation="blurInUp"
            className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {`Data Driven Decisions.\nReal Business Impact.`}
          </TextAnimate>
          <TextAnimate
            as="p"
            by="word"
            once
            startOnView
            animation="fadeIn"
            className="mt-4 max-w-2xl text-base text-white/90 sm:mt-6 sm:text-lg sm:text-xl"
          >
            We help organisations use data analytics, business intelligence, and
            research-driven solutions to improve performance.
          </TextAnimate>
        </div>
      </div>
    </section>
  );
}
