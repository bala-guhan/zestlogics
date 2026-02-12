"use client";

import Image from "next/image";

export function LeadershipSection() {
  return (
    <section className="grid w-full grid-cols-1 bg-[#0a0a0a] lg:grid-cols-2">
      <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        <p className="max-w-lg text-sm leading-relaxed text-white/90 sm:text-base sm:text-lg">
          Zestlogic&apos;s leadership combines experience in data platforms,
          analytics consulting, and product engineering. This mix helps align
          long-term data strategy with day-to-day delivery, keeping projects
          grounded in business outcomes while following robust engineering and
          governance practices.
        </p>
      </div>
      <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[480px]">
        <Image
          src="/ennamo.png"
          alt=""
          fill
          className="object-contain object-center p-8"
          sizes="50vw"
          priority={false}
        />
        <h2 className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-2xl font-bold text-white sm:left-6 sm:text-5xl lg:left-12 lg:text-6xl">
          Experienced Leadership
        </h2>
      </div>
    </section>
  );
}
