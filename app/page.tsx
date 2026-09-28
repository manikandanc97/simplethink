import { WorkbenchHero } from "@/components/workbench/workbench-hero";
import { WhatWeBuild } from "@/components/sections/what-we-build";
import { SelectedWork } from "@/components/sections/selected-work";
import { HowWeWork } from "@/components/sections/how-we-work";
import { WhySimpleThink } from "@/components/sections/philosophy";
import { TechStack } from "@/components/sections/tech-stack";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { AmbientBackground } from "@/components/ui/ambient-background";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full relative">

      <AmbientBackground screen="home" />
      <div className="relative z-10 w-full flex flex-col">
        {/* 02 — HERO */}
        <WorkbenchHero />

        {/* 03 — WHAT WE BUILD */}
        <WhatWeBuild />

        {/* 05 — SELECTED WORK */}
        <SelectedWork />

        {/* 06 — HOW WE WORK */}
        <HowWeWork />

        {/* 07 — Why SimpleThink */}
        <WhySimpleThink />

        {/* 09 — TECHNOLOGY */}
        <TechStack />

        {/* 11 — FAQ */}
        <FAQ />

        {/* 12 — FINAL CTA */}
        <CTA />

        {/* 01 Navbar + 13 Footer are in layout.tsx */}
      </div>
    </div>
  );
}
