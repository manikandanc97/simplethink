"use client";

import { useLead } from "@/components/leads/lead-provider";
import { useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { SERVICES_LIST } from "@/lib/data/services";
import { WhatWeBuildCard } from "./what-we-build/what-we-build-card";
import { WhatWeBuildNav } from "./what-we-build/what-we-build-nav";

export function WhatWeBuild() {
  const { openLead } = useLead();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const displayServices = SERVICES_LIST.slice(0, 8);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % displayServices.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + displayServices.length) % displayServices.length);
  };

  const handleOpenLead = (serviceName: string) => {
    openLead({
      source: "what-we-build",
      description: `Interested in: ${serviceName}.`,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative w-full py-12 sm:py-16 lg:py-24 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8">
        <SectionHeader
          eyebrow="WHAT WE BUILD"
          centered
          title={
            <>
              From Ideas to{" "}
              <span className="relative inline-block brand-gradient-text">
                Impact.
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 text-primary overflow-visible pointer-events-none"
                  viewBox="0 0 200 20"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 12 C50 4, 130 5, 195 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M30 15 C90 11, 150 12, 185 14"
                    stroke="#D23D78"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeOpacity="0.8"
                  />
                </svg>
              </span>
            </>
          }
          description="We engineer custom software, scalable web applications, and mobile platforms — with enterprise-grade reliability and zero unnecessary overhead."
        />

        <div ref={parallaxWrapperRef} className="w-full">
          <div ref={containerRef} className="wwb-outer-card relative w-full py-2 perspective-[1400px] overflow-hidden sm:overflow-visible">
            <div className="flex items-center justify-center min-h-[520px] xs:min-h-[500px] sm:min-h-[460px] md:min-h-[420px] lg:min-h-[380px] xl:min-h-[380px] relative w-full">
              {displayServices.map((service, index) => (
                <WhatWeBuildCard
                  key={service.id}
                  service={service}
                  index={index}
                  activeIndex={activeIndex}
                  totalCount={displayServices.length}
                  onSelect={() => setActiveIndex(index)}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  onOpenLead={handleOpenLead}
                />
              ))}
            </div>
          </div>
        </div>

        <WhatWeBuildNav
          services={displayServices}
          activeIndex={activeIndex}
          onSelectIndex={setActiveIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}
