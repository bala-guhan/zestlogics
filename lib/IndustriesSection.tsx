"use client";

import {
  Building2,
  Truck,
  Factory,
  ShoppingBag,
  HeartPulse,
  Zap,
} from "lucide-react";

const industries = [
  {
    title: "Government & Public Sector",
    description:
      "Zestlogic partners with government programmes to deliver data analytics and technology solutions. The company supports monitoring, geospatial insights, and impact measurement initiatives.",
    icon: Building2,
  },
  {
    title: "Logistics",
    description:
      "Zestlogic delivers supply chain visibility, route optimisation, and fleet analytics solutions. Data platforms track assets, forecast demand, and improve operational efficiency.",
    icon: Truck,
  },
  {
    title: "Manufacturing",
    description:
      "Zestlogic enables smart manufacturing with IoT analytics and production dashboards. Solutions integrate operational technology for optimised asset utilisation and processes.",
    icon: Factory,
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Zestlogic delivers sales analytics, customer segmentation, and inventory forecasting. BI platforms measure campaigns and provide real-time insights for growth.",
    icon: ShoppingBag,
  },
  {
    title: "Healthcare & Life science",
    description:
      "Zestlogic delivers healthcare analytics, patient insights, and operational dashboards. Data platforms support claims processing and regulatory compliance reporting.",
    icon: HeartPulse,
  },
  {
    title: "Energy, Utilities & Sustainability",
    description:
      "Zestlogics enables data-driven energy optimisation, asset monitoring, demand forecasting, and sustainability insights to improve efficiency and regulatory compliance.",
    icon: Zap,
  },
];

export function IndustriesSection() {
  return (
    <section className="w-full bg-[#0a0a0a] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="flex gap-4 rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                    {industry.description}
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
