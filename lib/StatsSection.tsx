"use client";

import Image from "next/image";

const stats = [
  { value: "15", label: "Years Of Experience" },
  { value: "150+", label: "Projects Deployed" },
  { value: "65+", label: "Customers" },
];

export function StatsSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/needles.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-xl font-semibold text-white sm:text-3xl lg:text-4xl">
          We Take Pride in Our Numbers
        </h2>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-8 sm:gap-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center border-0 border-white/30 px-4 sm:border-l sm:border-dashed first:sm:border-l-0"
            >
              <span className="text-4xl font-bold text-blue-500 sm:text-6xl lg:text-7xl">
                {stat.value}
              </span>
              <p className="mt-3 text-center text-base text-white sm:text-lg">
                {stat.label}
              </p>
              <div className="mt-4 h-px w-16 bg-white/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
