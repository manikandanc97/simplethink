"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";
import { FlowDiagram } from "./philosophy/flow-diagram";
import { PhilosophyProcessSteps } from "./philosophy/philosophy-process-steps";
import { PhilosophyOutcomes } from "./philosophy/philosophy-outcomes";

export function WhySimpleThink() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="why-SimpleThink"
      className="relative w-full py-12 sm:py-16 lg:py-24 overflow-hidden font-satoshi"
    >
      <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-6 sm:gap-10 lg:gap-12">
        <SectionHeader
          eyebrow="WHY SIMPLEPRIME"
          centered
          title="Built simple. Delivered"
          highlightedText="sharp."
          description="A focused team, a clear process, and production-ready work without unnecessary layers."
        />

        {/* ── Main 3-Column Layout ── */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_240px] xl:grid-cols-[250px_minmax(0,1fr)_250px] gap-6 xl:gap-8 items-center">
          {/* 1. LEFT COLUMN: PROCESS / 04 */}
          <PhilosophyProcessSteps inView={inView} />

          {/* 2. CENTER PANEL: SIGNAL / 01 & INTERACTIVE FLOW DIAGRAM */}
          <FlowDiagram inView={inView} />

          {/* 3. RIGHT COLUMN: REAL OUTCOMES */}
          <PhilosophyOutcomes inView={inView} />
        </div>
      </div>
    </section>
  );
}
