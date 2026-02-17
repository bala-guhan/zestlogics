"use client";

import {
  TrendingUp,
  BarChart2,
  Eye,
  Brain,
} from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";

const services = [
  {
    title: "Data Analytics",
    description:
      "End-to-end data processing, dashboards, and reports that give a unified, accurate view of your business performance.",
    icon: TrendingUp,
  },
  {
    title: "Business Intelligence",
    description:
      "Interactive BI solutions that connect multiple data sources and deliver real-time insights to decision makers across the organisation.",
    icon: BarChart2,
  },
  {
    title: "Business Analytics",
    description:
      "Analyse trends, drivers, and customer behaviour to support planning, forecasting, and continuous improvement across your business.",
    icon: Eye,
  },
  {
    title: "AI/ML Solutions",
    description:
      "Design and deploy machine learning models as a secondary layer on top of your data to automate decisions and uncover new opportunities.",
    icon: Brain,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen w-full overflow-hidden bg-[#0f0f1a]"
    >
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-24">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 0% 50%, rgba(99, 102, 241, 0.15), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              <TextAnimate as="span" by="word" once startOnView animation="blurInUp" className="inline">
                {`Let Your Data Take Your Business to `}
              </TextAnimate>
              <TextAnimate
                as="span"
                by="word"
                once
                startOnView
                animation="blurInUp"
                className="inline font-extrabold"
              >
                Higher Grounds
              </TextAnimate>
            </h2>
            <TextAnimate
              as="p"
              by="word"
              once
              startOnView
              animation="fadeIn"
              className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg"
            >
              Whether you are starting your analytics journey or scaling existing
              solutions, our team focuses on practical, maintainable
              implementations that deliver measurable improvements in performance
              and transparency.
            </TextAnimate>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 px-4 py-12 sm:px-6 sm:py-16 lg:gap-5 lg:px-12 lg:py-24">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.08] lg:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 lg:h-14 lg:w-14">
                  <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-white lg:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 lg:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
