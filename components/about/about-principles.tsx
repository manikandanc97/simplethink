"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRINCIPLES } from "@/lib/data/about";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutPrinciples() {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  return (
    <div className="w-full pt-16 md:pt-20 border-t border-border">
      {/* ── Section Header ── */}
      <SectionHeader
        eyebrow="Guiding Philosophy"
        title="The Three Core"
        highlightedText="Principles."
        description="The core tenets that guide every architectural decision, interface, and line of code we ship."
        centered
        maxWidth="max-w-2xl"
        className="mb-10 sm:mb-14 mx-auto"
      />

      {/* ── 3 Principles Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {PRINCIPLES.map((principle, index) => {
          const isActive = activePrinciple === index;

          return (
            <div
              key={principle.number}
              onClick={() => setActivePrinciple(index)}
              className={cn(
                "p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left relative overflow-hidden",
                isActive
                  ? "bg-card border-primary shadow-elevated ring-1 ring-primary/20 -translate-y-1"
                  : "bg-card/80 border-border hover:border-primary/30 hover:bg-card hover:shadow-card hover:-translate-y-0.5"
              )}
            >
              {/* Active top subtle accent line */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-hover" />
              )}

              <div>
                {/* Number and Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={cn(
                      "text-3xl sm:text-4xl font-black font-mono tracking-tight transition-colors",
                      isActive ? "text-primary" : "text-muted group-hover:text-primary/70"
                    )}
                  >
                    {principle.number}
                  </span>
                  <span
                    className={cn(
                      "type-label uppercase px-3 py-1 rounded-full border transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary border-primary/20"
                        : "bg-secondary text-muted-foreground border-border"
                    )}
                  >
                    {principle.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="type-h3 text-foreground mb-2">
                  {principle.title}
                </h3>

                {/* Summary */}
                <p className="text-sm font-semibold text-primary mb-3">
                  {principle.summary}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Deliverable footnote */}
              <div className="mt-8 pt-4 border-t border-border flex items-center gap-2 type-label text-muted-foreground">
                <CheckCircle2 size={15} className="text-primary shrink-0" />
                <span>{principle.deliverable}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
