"use client";

import { AnimatePresence } from "motion/react";
import { Terminal } from "lucide-react";
import { CATEGORY_ORDER } from "@/lib/data/services";
import { type ServiceItem } from "@/types/service";
import { BlueprintNode } from "./blueprint-node";

export function BlueprintCanvas({ selectedServices }: { selectedServices: ServiceItem[] }) {
  const grouped = selectedServices.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceItem[]>);

  if (selectedServices.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
        <div className="w-14 h-14 rounded-2xl bg-[#FAF0F6] border border-[#F3DBE9] flex items-center justify-center mb-4 text-[#922F55]">
          <Terminal className="w-6 h-6 text-[#922F55]" />
        </div>
        <h3 className="text-base font-bold text-[#121114] mb-1.5">
          Awaiting Module Selection
        </h3>
        <p className="text-xs sm:text-sm text-[#706B78] max-w-xs leading-relaxed">
          Select capabilities from the left library to dynamically visualize your project architecture.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 py-6 px-3">
      {CATEGORY_ORDER.map((category) => {
        const servicesInCategory = grouped[category];
        if (!servicesInCategory || servicesInCategory.length === 0) return null;

        return (
          <div key={category} className="w-full max-w-md flex flex-col items-center">
            {/* Category Ribbon */}
            <div className="text-[11px] font-mono font-bold text-[#922F55] uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-[#922F55]/30" />
              {category} Layer
              <span className="w-6 h-px bg-[#922F55]/30" />
            </div>

            {/* Nodes */}
            <div className="flex flex-wrap justify-center gap-3 w-full">
              <AnimatePresence mode="popLayout">
                {servicesInCategory.map((service: ServiceItem) => (
                  <BlueprintNode key={service.id} service={service} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}
