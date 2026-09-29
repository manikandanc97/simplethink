"use client";

import { BUILT_BUSINESS_NEEDS } from "@/lib/data/services-page-data";
import { AnimatedArrowRight } from "@/components/ui/animated-icon";
import { Rocket, Sliders, ShoppingCart, BarChart3, Sparkles } from "lucide-react";

interface ServicesBusinessNeedsProps {
  onSelectServiceTab: (tabId: string) => void;
}

export function ServicesBusinessNeeds({ onSelectServiceTab }: ServicesBusinessNeedsProps) {
  const handleSelect = (targetTab: string) => {
    onSelectServiceTab(targetTab);
    const el = document.getElementById("services-tabs-container");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full relative z-20 mb-16 sm:mb-20">
      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex flex-col items-start text-left">
          <span className="text-xs sm:text-xs font-extrabold uppercase tracking-[0.2em] text-primary font-satoshi mb-1.5 block">
            5 USE CASES
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight font-satoshi">
            Built business need
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-normal max-w-xl">
            <span className="font-semibold text-foreground">Built around the problem, not the technology.</span>{" "}
            Different businesses, Different goals, The same capable partner.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const el = document.getElementById("services-tabs-container");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[var(--background)] border border-[var(--surface-elevated)] text-xs font-bold text-foreground shadow-xs active:scale-95 transition-all self-start sm:self-auto cursor-pointer"
        >
          <span>View all services</span>
          <AnimatedArrowRight size={13} className="text-primary" />
        </button>
      </div>

      {/* ── 5 Cards in a Responsive Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4.5 sm:gap-4">
        {BUILT_BUSINESS_NEEDS.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSelect(item.targetTab)}
            className="group p-4 sm:p-6 rounded-2xl bg-white border border-[var(--surface-elevated)] hover:border-[var(--primary)]/30 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left cursor-pointer"
          >
            {/* Top Icon */}
            <div className="w-10 h-10 rounded-xl bg-[var(--background)] border border-[var(--surface-elevated)] flex items-center justify-center mb-4.5 group-hover:scale-110 transition-transform">
              {idx === 0 && <Rocket size={18} className="text-[var(--primary)]" />}
              {idx === 1 && <Sliders size={18} className="text-[var(--chart-1)]" />}
              {idx === 2 && <ShoppingCart size={18} className="text-[var(--chart-4)]" />}
              {idx === 3 && <BarChart3 size={18} className="text-[var(--chart-2)]" />}
              {idx === 4 && <Sparkles size={18} className="text-[var(--primary)]" />}
            </div>

            {/* Title */}
            <h4 className="text-sm sm:text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h4>

            {/* Subtitle / Need */}
            <p className="text-xs sm:text-xs text-muted-foreground mt-1 mb-4.5 leading-tight font-medium">
              {item.subtitle}
            </p>

            {/* Service Pills */}
            <div className="flex flex-col gap-1 w-full mt-auto pt-2 border-t border-[var(--surface-elevated)]">
              {item.services.map((srv, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs sm:text-xs font-semibold text-muted-foreground group-hover:text-foreground"
                >
                  {srv}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
