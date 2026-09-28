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
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#922F55] font-satoshi mb-1.5 block">
            5 USE CASES
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#121114] tracking-tight font-satoshi">
            Built business need
          </h3>
          <p className="text-xs sm:text-sm text-[#706B78] mt-1 font-normal max-w-xl">
            <span className="font-semibold text-[#121114]">Built around the problem, not the technology.</span>{" "}
            Different businesses, Different goals, The same capable partner.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const el = document.getElementById("services-tabs-container");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#FAF7FC] border border-[#ECE5EB] text-xs font-bold text-[#121114] shadow-xs active:scale-95 transition-all self-start sm:self-auto cursor-pointer"
        >
          <span>View all services</span>
          <AnimatedArrowRight size={13} className="text-[#922F55]" />
        </button>
      </div>

      {/* ── 5 Cards in a Responsive Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {BUILT_BUSINESS_NEEDS.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSelect(item.targetTab)}
            className="group p-4 sm:p-5 rounded-2xl bg-white border border-[#EFE5EC] hover:border-[#D8287A]/30 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(146,47,85,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left cursor-pointer"
          >
            {/* Top Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#FAF7FC] border border-[#EFE5EC] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
              {idx === 0 && <Rocket size={18} className="text-[#DB2777]" />}
              {idx === 1 && <Sliders size={18} className="text-[#2563EB]" />}
              {idx === 2 && <ShoppingCart size={18} className="text-[#EA580C]" />}
              {idx === 3 && <BarChart3 size={18} className="text-[#7C3AED]" />}
              {idx === 4 && <Sparkles size={18} className="text-[#E11D48]" />}
            </div>

            {/* Title */}
            <h4 className="text-sm sm:text-base font-extrabold text-[#121114] group-hover:text-[#922F55] transition-colors">
              {item.title}
            </h4>

            {/* Subtitle / Need */}
            <p className="text-[11px] sm:text-xs text-[#706B78] mt-1 mb-3.5 leading-tight font-medium">
              {item.subtitle}
            </p>

            {/* Service Pills */}
            <div className="flex flex-col gap-1 w-full mt-auto pt-2 border-t border-[#F0E8EE]">
              {item.services.map((srv, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[10px] sm:text-[11px] font-semibold text-[#524E59] group-hover:text-[#121114]"
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
