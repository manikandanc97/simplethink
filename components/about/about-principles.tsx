"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRINCIPLES } from "@/lib/data/about";

export function AboutPrinciples() {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  return (
    <div className="pt-10 border-t border-[#EFE5EC]">
      <div className="max-w-2xl mb-10">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#922F55] block mb-2">
          Guiding Philosophy
        </span>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#121114]">
          The Three Core{" "}
          <span className="relative inline-block text-[#922F55]">
            Principles
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-2 text-[#D8287A] overflow-visible pointer-events-none"
              viewBox="0 0 140 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5.5C40 2 100 2 138 5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-[#64606D] mt-2">
          The core tenets that guide every architectural decision, interface, and line of code we ship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PRINCIPLES.map((principle, index) => (
          <div
            key={principle.number}
            className={cn(
              "p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between group cursor-pointer",
              activePrinciple === index
                ? "bg-white border-[#922F55] shadow-[0_12px_32px_rgba(146,47,85,0.08)] ring-1 ring-[#922F55]/20"
                : "bg-white/70 border-[#EFE5EC] hover:border-[#922F55]/40 hover:bg-white"
            )}
            onClick={() => setActivePrinciple(index)}
          >
            <div>
              {/* Number and Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black font-mono text-[#D6CAD2] group-hover:text-[#922F55] transition-colors">
                  {principle.number}
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-[#FAF0F6] text-[#922F55] border border-[#F3DBE9]">
                  {principle.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#121114] tracking-tight mb-2">
                {principle.title}
              </h3>
              
              {/* Summary */}
              <p className="text-xs font-semibold text-[#922F55] mb-3">
                {principle.summary}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#64606D] leading-relaxed">
                {principle.description}
              </p>
            </div>

            {/* Deliverable footnote */}
            <div className="mt-6 pt-4 border-t border-[#F5EDF3] flex items-start gap-2 text-xs text-[#706B78]">
              <Sparkles size={14} className="text-[#922F55] shrink-0 mt-0.5" />
              <span>{principle.deliverable}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
