"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedArrowRight } from "@/components/ui/animated-icon";
import { Send } from "lucide-react";

export function WorkCtaBanner() {
  const { openLead } = useLead();

  return (
    <div className="w-full relative z-20 mb-16 sm:mb-24 mt-12 sm:mt-16">
      <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl sm:rounded-4xl bg-foreground text-white border border-[var(--foreground)] shadow-cta flex flex-col xl:flex-row xl:items-center justify-between gap-10 sm:gap-12 overflow-hidden text-left">
        {/* ── Abstract Glows ── */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[var(--primary)]/40 to-[var(--primary)]/40 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[var(--chart-2)]/30 to-[#3B82F6]/30 blur-3xl opacity-60" />

        {/* ── Subtle Dot Pattern Overlay ── */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* ── Left Side: Icon + Headline + Subtitle ── */}
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 max-w-2xl relative z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] flex items-center justify-center shrink-0 shadow-elevated ring-1 ring-white/15">
            <Send size={28} className="text-white rotate-[-15deg] translate-x-0.5" />
          </div>

          <div className="flex flex-col items-start pt-1 sm:pt-2">
            <span className="text-xs sm:text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)] font-satoshi mb-2 sm:mb-3 block">
              Start Your Project
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-satoshi leading-tight mb-3 sm:mb-4">
              Have an ambitious vision? <br className="hidden lg:block" /> Let&apos;s engineer it right.
            </h3>
            <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed font-normal max-w-lg">
              Whether you need a high-converting website, custom web application, or cross-platform mobile app, we are ready to discuss your goals and provide a structured scope.
            </p>
          </div>
        </div>

        {/* ── Right Side: Dual Action Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 relative z-10 shrink-0 w-full xl:w-auto mt-4 xl:mt-0">
          <button
            type="button"
            onClick={() =>
              openLead({
                source: "cta",
                description: "Work page CTA: Start a project requested.",
              })
            }
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary)] hover:from-[var(--primary-hover)] hover:to-[var(--primary)] text-white text-sm sm:text-base font-bold shadow-elevated hover:shadow-elevated hover:-translate-y-1 transition-all cursor-pointer"
          >
            <span>Start a project</span>
            <AnimatedArrowRight size={15} className="text-white" />
          </button>

          <button
            type="button"
            onClick={() =>
              openLead({
                source: "cta",
                description: "Work page CTA: Book scoping session requested.",
              })
            }
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-7 py-4 sm:py-4.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md text-sm sm:text-base font-medium hover:-translate-y-1 transition-all cursor-pointer"
          >
            <span>Book scoping session</span>
          </button>
        </div>
      </div>
    </div>
  );
}
