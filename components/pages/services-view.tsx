"use client";

import { useState, useMemo } from "react";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesTabsBar } from "@/components/services/services-tabs-bar";
import { ServicesActiveShowcase } from "@/components/services/services-active-showcase";
import { ServicesWhatWeBuild } from "@/components/services/services-what-we-build";
import { ServicesDeliverablesAudience } from "@/components/services/services-deliverables-audience";
import { ServicesTechStack } from "@/components/services/services-tech-stack";
import { ServicesFaqSection } from "@/components/services/services-faq-section";
import { ServicesCtaBanner } from "@/components/services/services-cta-banner";
import { SERVICES_PAGE_DATA } from "@/lib/data/services-page-data";

export function ServicesView() {
  // Default to "websites" as requested by user
  const [activeServiceId, setActiveServiceId] = useState<string>("websites");

  const activeService = useMemo(() => {
    return (
      SERVICES_PAGE_DATA.find((s) => s.id === activeServiceId) ||
      SERVICES_PAGE_DATA[1]
    );
  }, [activeServiceId]);

  return (
    <div className="relative min-h-screen w-full bg-[#FAF7FC] text-[#121114] overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-24">
      {/* ── Background Atmospheric Elements ── */}
      <AmbientBackground screen="services" />
      <div className="absolute inset-0 bg-[radial-gradient(#d3ccd8_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      {/* ── 1. Hero Section (Title, CTAs, Highlights & Cloudinary 3D Section Banner) ── */}
      <ServicesHero />

      {/* ── Main Structured Showcase Area ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-6 sm:-mt-10">
        {/* ── 2. The 9 Service Category Tabs Bar ── */}
        <ServicesTabsBar
          activeId={activeServiceId}
          onSelect={setActiveServiceId}
        />

        {/* ── 3. Active Service Showcase (Metrics, Description & Interactive Mockup) ── */}
        <ServicesActiveShowcase service={activeService} />

        {/* ── 4. What We Build (4 Capabilities with Prev/Next Controls) ── */}
        <ServicesWhatWeBuild service={activeService} />

        {/* ── 5. Everything Included & Perfect For ── */}
        <ServicesDeliverablesAudience service={activeService} />

        {/* ── 6. Technology by Service (Cloudinary Tech Stack Icons) ── */}
        <ServicesTechStack service={activeService} />

        {/* ── 8. Frequently Asked Questions & Still Have Questions Card ── */}
        <ServicesFaqSection service={activeService} />

        {/* ── 9. Bottom CTA Section Banner (Ready to build?) ── */}
        <ServicesCtaBanner />
      </div>
    </div>
  );
}
