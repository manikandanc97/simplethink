"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedArrowRight } from "@/components/ui/animated-icon";
import { Send } from "lucide-react";

export function ServicesCtaBanner() {
  const { openLead } = useLead();

  return (
    <div className="w-full relative z-20">
      <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white via-[#FFF7FA] to-[#FAF5FF] border border-[#EFE5EC] shadow-[0_16px_40px_rgba(146,47,85,0.06)] flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 overflow-hidden text-left">
        {/* Subtle Ambient Glow inside */}
        <div
          className="pointer-events-none absolute -right-10 -bottom-10 w-60 h-60 rounded-full bg-gradient-to-tr from-[#922F55]/10 to-transparent blur-2xl"
          aria-hidden="true"
        />

        {/* Left Side: Icon + Headline + Subtitle */}
        <div className="flex items-start gap-4 sm:gap-5 max-w-2xl relative z-10">
          {/* Paper Airplane Icon in rounded square */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#922F55] to-[#DB2777] text-white flex items-center justify-center shrink-0 shadow-[0_6px_20px_rgba(146,47,85,0.25)]">
            <Send size={22} className="rotate-[-15deg] translate-x-0.5" />
          </div>

          <div className="flex flex-col items-start">
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#922F55] font-satoshi mb-1 block">
              READY TO BUILD?
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#121114] tracking-tight font-satoshi">
              Know what you need? Let&apos;s scope it properly.
            </h3>
            <p className="text-xs sm:text-sm text-[#706B78] mt-1.5 leading-relaxed font-normal">
              Tell us what you&apos;re trying to build, improve or automate. We&apos;ll help
              define the right service, scope and technical direction.
            </p>
          </div>
        </div>

        {/* Right Side: Dual Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 relative z-10 shrink-0">
          <button
            type="button"
            onClick={() =>
              openLead({
                source: "services-configurator",
                description: "Ready to build: Scope definition requested.",
              })
            }
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#922F55] hover:bg-[#7D2748] text-white text-xs sm:text-sm font-bold shadow-[0_6px_20px_rgba(146,47,85,0.28)] hover:shadow-[0_8px_24px_rgba(146,47,85,0.36)] hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
          >
            <span>Start a project</span>
            <AnimatedArrowRight size={13} className="text-white" />
          </button>

          <button
            type="button"
            onClick={() =>
              openLead({
                source: "services-configurator",
                description: "Tell us what you need custom request.",
              })
            }
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#FAF7FC] text-[#121114] border border-[#E5DEE6] shadow-xs text-xs sm:text-sm font-bold hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
          >
            <span>Tell us what you need</span>
          </button>
        </div>
      </div>
    </div>
  );
}
