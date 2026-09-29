"use client";

import { AnimatePresence } from "motion/react";
import { Terminal } from "lucide-react";
import { CATEGORY_ORDER } from "@/lib/data/services";
import { type ServiceData } from "@/lib/data/services";
import { BlueprintNode } from "./blueprint-node";

export function BlueprintCanvas({ selectedServices }: { selectedServices: ServiceData[] }) {
  const grouped = selectedServices.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceData[]>);

  if (selectedServices.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
        <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--surface-elevated)] flex items-center justify-center mb-4 text-primary">
          <Terminal className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-base font-bold text-foreground mb-1.5">
          Awaiting Module Selection
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-xs leading-relaxed">
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
            <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-primary/30" />
              {category} Layer
              <span className="w-6 h-px bg-primary/30" />
            </div>

            {/* Nodes */}
            <div className="flex flex-wrap justify-center gap-3 w-full">
              <AnimatePresence mode="popLayout">
                {servicesInCategory.map((service: ServiceData) => (
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
