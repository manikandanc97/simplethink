"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedArrowRight } from "@/components/ui/animated-icon";
import { Send } from "lucide-react";

export function ServicesCtaBanner() {
  const { openLead } = useLead();

  return (
    <div className="w-full relative z-20 mb-12 sm:mb-16 mt-8 sm:mt-12">
      <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-card text-foreground border border-border shadow-card hover:shadow-elevated transition-shadow duration-300 flex flex-col xl:flex-row xl:items-center justify-between gap-6 sm:gap-8 overflow-hidden text-left">
        
        {/* ── Brand Ambient Warm Glows & Top Highlight ── */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-primary/15 via-[#6C2BB8]/10 to-transparent blur-3xl opacity-70" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/10 via-[#6C2BB8]/8 to-transparent blur-3xl opacity-60" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* ── Subtle Theme Dot Pattern ── */}
        <div className="absolute inset-0 hero-dots opacity-40 pointer-events-none" />

        {/* ── Left Side: Icon + Headline + Subtitle ── */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 max-w-xl relative z-10">
          {/* Paper Airplane Icon in glowing shape */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-[#7D2748] flex items-center justify-center shrink-0 shadow-elevated ring-1 ring-white/20">
            <Send size={24} className="text-white rotate-[-15deg] translate-x-0.5" />
          </div>

          <div className="flex flex-col items-start pt-0 sm:pt-1">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary font-satoshi mb-1.5 sm:mb-2 block">
              Ready to build?
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground tracking-tight font-satoshi leading-tight mb-2 sm:mb-3">
              Know what you need? <br className="hidden lg:block"/> Let&apos;s scope it properly.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-normal max-w-md">
              Tell us what you&apos;re trying to build, improve or automate. We&apos;ll help define the right direction.
            </p>
          </div>
        </div>

        {/* ── Right Side: Dual Action Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 relative z-10 shrink-0 w-full xl:w-auto mt-4 xl:mt-0">
          <button
            type="button"
            onClick={() =>
              openLead({
                source: "services-configurator",
                description: "Ready to build: Scope definition requested.",
              })
            }
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-bold shadow-elevated hover:shadow-elevated hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Start a project</span>
            <AnimatedArrowRight size={14} className="text-white" />
          </button>

          <button
            type="button"
            onClick={() =>
              openLead({
                source: "services-configurator",
                description: "Tell us what you need custom request.",
              })
            }
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-card hover:bg-muted text-foreground border border-border shadow-2xs hover:shadow-card hover:-translate-y-0.5 transition-all text-sm font-medium cursor-pointer"
          >
            <span>Tell us what you need</span>
          </button>
        </div>
      </div>
    </div>
  );
}
