"use client";

import Image from "next/image";

export function AboutHero() {
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
          <h1 className="max-w-3xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Mission
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 sm:mt-6 sm:text-lg sm:text-xl">
            We exist to help organisations make better decisions by using data
            responsibly and effectively. The mission is to combine strong data
            engineering, analytics, business intelligence, and research
            capabilities so that every project delivers clear, measurable
            business value.
          </p>
        </div>
      </div>
    </section>
  );
}
