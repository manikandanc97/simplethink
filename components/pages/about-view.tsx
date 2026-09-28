"use client";

import { SITE } from "@/config/site";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { AboutHero } from "@/components/about/about-hero";
import { AboutMetrics } from "@/components/about/about-metrics";
import { AboutPrinciples } from "@/components/about/about-principles";
import { AboutComparison } from "@/components/about/about-comparison";
import { AboutCta } from "@/components/about/about-cta";
import { MapPin } from "lucide-react";

export function AboutView() {
  return (
    <div className="relative min-h-screen w-full bg-[#FAF7FC] text-[#121114] overflow-hidden pt-28 sm:pt-36 pb-28">
      {/* ── Background Atmospheric Elements (Screen-Specific) ── */}
      <AmbientBackground screen="about" />
      <div className="absolute inset-0 bg-[radial-gradient(#d3ccd8_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* ── Hero Section (Badges, Title, Floating Stickers) ── */}
      <AboutHero />

      {/* ── Main Showcase Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] sm:rounded-[40px] border border-[#EFE5EC] shadow-[0_24px_64px_-16px_rgba(146,47,85,0.08),0_4px_24px_rgba(0,0,0,0.02)] p-5 sm:p-7 lg:p-9 space-y-16">
          
          {/* ── Section 1: Who We Are & Story ── */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#922F55] block mb-2">
                  Our Ethos & Origin
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#121114] leading-tight">
                  Who We{" "}
                  <span className="relative inline-block text-[#922F55]">
                    Are
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full h-2 text-[#D8287A] overflow-visible pointer-events-none"
                      viewBox="0 0 100 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.5C28 2 68 2 98 5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
                
                {/* Location indicator */}
                {SITE.location && (
                  <div className="mt-6 p-4 rounded-2xl bg-[#FAF7FC] border border-[#EAE3E9] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FAF0F6] text-[#922F55] flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#706B78] uppercase">Studio Base</div>
                      <div className="text-xs font-bold text-[#121114]">
                        {SITE.location} &bull; Serving Clients Globally
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-8 space-y-5 text-sm sm:text-base text-[#64606D] leading-relaxed">
                <p className="text-lg sm:text-xl font-bold text-[#121114] leading-relaxed">
                  We are a dedicated software development company working directly with founders, business owners, and engineering leaders who value architectural precision over bureaucratic overhead.
                </p>
                <p>
                  When you collaborate with SimpleThink, you don&apos;t get handed off through account managers, junior coordinators, or outsourced layers. You work directly with the senior software engineers crafting your system.
                </p>
                <p>
                  Our methodology combines deep brand taste with modern fullstack engineering — ensuring that every website, web application, mobile app, and SaaS system we launch looks world-class and performs under pressure.
                </p>
              </div>
            </div>

            {/* 4 Metric Cards */}
            <AboutMetrics />
          </div>

          {/* ── Section 2: Guiding Philosophy (Interactive Principle Cards) ── */}
          <AboutPrinciples />

          {/* ── Section 3: The SimpleThink Advantage vs Traditional Agencies ── */}
          <AboutComparison />

          {/* ── Section 4: Direct Engineering Line / CTA ── */}
          <AboutCta />

        </div>
      </div>
    </div>
  );
}
