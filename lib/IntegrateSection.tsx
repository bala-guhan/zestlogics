"use client";

import Image from "next/image";

export function IntegrateSection() {
  return (
    <section className="grid w-full grid-cols-1 lg:grid-cols-2">
      <div className="relative flex min-h-[240px] items-center justify-center px-4 py-10 sm:min-h-[280px] sm:px-6 sm:py-12 lg:min-h-[320px]">
        <Image
          src="/summa.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="50vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/30" />
        <h2 className="relative z-10 text-center text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          We Integrate With
          <br />
          Your Ecosystem
        </h2>
      </div>
      <div className="flex items-center border-t border-white/10 bg-[#0a0a0a] px-4 py-10 sm:px-6 sm:py-12 lg:border-t-0 lg:border-l lg:border-white/10 lg:px-12 lg:py-16">
        <p className="max-w-lg text-sm leading-relaxed text-white/90 sm:text-base sm:text-lg">
          Our solutions are designed to fit into your current technology stack,
          not replace it. We connect to existing databases, applications, and
          cloud platforms so your teams can adopt new analytics capabilities
          with minimal disruption.
        </p>
      </div>
    </section>
  );
}
