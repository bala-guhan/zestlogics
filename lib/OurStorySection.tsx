"use client";

import Image from "next/image";

export function OurStorySection() {
  return (
    <section className="grid w-full grid-cols-1 bg-[#0a0a0a] lg:grid-cols-2">
      <div className="relative flex min-h-[260px] items-center justify-center px-4 py-10 sm:min-h-[320px] sm:px-6 sm:py-12 lg:min-h-[480px]">
        <Image
          src="/sandclock.png"
          alt=""
          fill
          className="object-contain object-center py-8"
          sizes="50vw"
          priority={false}
        />
        <h2 className="absolute inset-0 z-10 flex items-center justify-center text-2xl font-bold text-white sm:text-5xl lg:text-6xl">
          Our Story
        </h2>
      </div>
      <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        <p className="max-w-lg text-sm leading-relaxed text-white/90 sm:text-base sm:text-lg">
          Zestlogic Systems was founded by data and technology professionals who
          enjoy transforming scattered data into meaningful insight. Drawing on
          experience across analytics, BI, and software development, the team
          focuses on building practical solutions that are simple to adopt and
          maintain.
        </p>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base sm:text-lg">
          From early pilots to full-scale platforms, projects are delivered in
          close collaboration with business and IT stakeholders, ensuring that
          solutions align with established processes and support forward-looking
          technology directions.
        </p>
      </div>
    </section>
  );
}
