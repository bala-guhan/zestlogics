"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full flex-col bg-[#1a1a2a] lg:flex-row"
    >
      <div className="relative flex min-h-[40vh] w-full items-center justify-center lg:min-h-screen lg:w-[60%]">
        <Image
          src="/swirl.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-4 py-10 text-center sm:px-6 sm:py-12 lg:py-0">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Reliable Analytics.
            <br />
            Measurable Outcomes.
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:w-[40%] lg:px-12 lg:py-24">
        <p className="text-sm leading-relaxed text-white/90 sm:text-base sm:text-lg">
          Zestlogic Systems Private Limited is a data-focused technology company
          helping organisations turn fragmented information into clear, reliable
          insights. Our teams combine data engineering, analytics, business
          intelligence, and research & development to address diverse business
          needs.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-white/90 sm:text-base sm:text-lg">
          We design secure, scalable architectures, build intuitive dashboards,
          and apply advanced analytics or AI/ML where they create measurable
          value. By working closely with business stakeholders, we ensure that
          every solution is understandable, maintainable, and aligned with
          strategic goals.
        </p>
      </div>
    </section>
  );
}
