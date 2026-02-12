"use client";

import Image from "next/image";

export function ContactSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/minmini.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-16 sm:gap-12 sm:px-6 sm:py-20 lg:flex-row lg:gap-16 lg:px-12">
        <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
          <div className="relative flex w-full max-w-sm items-center justify-center opacity-60 sm:max-w-md lg:max-w-lg">
            <Image
              src="/urundai.png"
              alt=""
              width={480}
              height={480}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 80vw, 45vw"
              priority={false}
            />
          </div>
        </div>

        <div className="flex max-w-md flex-1 flex-col lg:max-w-lg lg:items-start">
          <p className="text-center text-base leading-relaxed text-white sm:text-lg lg:text-left">
            If you are exploring data analytics, BI, or AI/ML solutions, we can
            help you scope, design, and implement the right approach for your
            organisation.
          </p>
          <p className="mt-8 text-center text-base leading-relaxed text-white sm:text-lg lg:mt-12 lg:text-left">
            Email us at{" "}
            <a
              href="mailto:info@zestlogics.com"
              className="font-bold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
            >
              info@zestlogics.com
            </a>{" "}
            to schedule a conversation with our team.
          </p>
          <h2 className="mt-8 max-w-md text-center text-xl font-bold leading-tight text-white sm:mt-10 sm:text-3xl lg:mt-12 lg:text-left lg:text-4xl">
            Are You Ready to Accelerate Your Business?
          </h2>
        </div>
      </div>
    </section>
  );
}
