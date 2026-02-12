"use client";

import Image from "next/image";

export function IndustriesHero() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/men-discussing.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl rounded-lg bg-black/40 px-4 py-6 backdrop-blur-sm sm:px-10 sm:py-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl sm:text-5xl lg:text-6xl">
              Industries We Serve
            </h1>
            <p className="mt-4 text-base text-white/90 sm:mt-6 sm:text-lg sm:text-xl">
              Zestlogic Systems applies data analytics, business intelligence,
              and technology solutions across key industries to deliver
              measurable performance improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
