"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";

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
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Data Driven Decisions.
            <br />
            Real Business Impact.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 sm:mt-6 sm:text-lg sm:text-xl">
            We help organisations use data analytics, business intelligence, and
            research-driven solutions to improve performance.
          </p>
        </div>
      </div>
    </section>
  );
}
