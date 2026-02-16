"use client";

import {
  Cloud,
  Layers,
  LayoutGrid,
  Brain,
  Network,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    title: "Data Analytics",
    description:
      "Design and build data pipelines, models, and dashboards that consolidate information from multiple systems and provide a single source of truth for reporting and operations.",
    icon: Cloud,
  },
  {
    title: "Business Intelligence",
    description:
      "Implement BI platforms, interactive reports, and self-service analytics so business users can explore data, monitor KPIs, and answer day-to-day questions in real time.",
    icon: Layers,
  },
  {
    title: "Business Analytics",
    description:
      "Apply statistical and advanced analytics techniques to understand trends, drivers, and customer behaviour, supporting forecasting, planning, and performance improvement.",
    icon: LayoutGrid,
  },
  {
    title: "AI / ML Solutions",
    description:
      "Design, train, and deploy machine learning models as a secondary layer on top of your analytics platform to predict outcomes, detect anomalies, and automate decisions where it creates measurable value.",
    icon: Brain,
  },
  {
    title: "R&D and Technology Services",
    description:
      "Run focused R&D engagements to evaluate new data platforms, tools, and architectures, delivering prototypes and technical recommendations before large-scale investment.",
    icon: Network,
  },
  {
    title: "Data-driven Software Solutions",
    description:
      "Develop custom applications, APIs, and integrations that embed analytics and insights directly into business workflows and existing systems for smoother, data-driven operations.",
    icon: TrendingUp,
  },
];

export function ServicesPageSection() {
  return (
    <section className="w-full bg-[#0a0a0a] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-24">
      <h2 className="mx-auto max-w-7xl text-center text-2xl font-bold text-white sm:text-4xl">
        Our Services
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 lg:grid-cols-2">
        <div className="border-b border-white/10 lg:border-b-0">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex gap-3 border-b border-white/10 py-5 first:pt-8 sm:gap-4 sm:py-6 sm:first:pt-10 lg:first:pt-12"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-blue-400/20 text-blue-300 lg:h-14 lg:w-14">
                  <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-white lg:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 lg:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
