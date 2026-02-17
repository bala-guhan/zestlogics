"use client";

import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";

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
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-md flex-col items-center text-center sm:max-w-lg">
          <TextAnimate
            as="p"
            by="word"
            once
            startOnView
            animation="fadeIn"
            className="text-base leading-relaxed text-white sm:text-lg"
          >
            If you are exploring data analytics, BI, or AI/ML solutions, we can
            help you scope, design, and implement the right approach for your
            organisation.
          </TextAnimate>
          <TextAnimate
            as="h2"
            by="word"
            once
            startOnView
            animation="blurInUp"
            className="mt-8 text-xl font-bold leading-tight text-white sm:mt-10 sm:text-3xl sm:text-4xl"
          >
            Are You Ready to Accelerate Your Business?
          </TextAnimate>
          <p className="mt-8 text-base leading-relaxed text-white sm:mt-12 sm:text-lg">
            <TextAnimate as="span" by="word" once startOnView animation="fadeIn" className="inline">
              {`Email us at `}
            </TextAnimate>
            <a
              href="mailto:info@zestlogics.com"
              className="font-bold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
            >
              info@zestlogics.com
            </a>
            <TextAnimate as="span" by="word" once startOnView animation="fadeIn" className="inline">
              {` to schedule a conversation with our team.`}
            </TextAnimate>
          </p>
        </div>
      </div>
    </section>
  );
}
