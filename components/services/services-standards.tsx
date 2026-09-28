"use client";

import { ENGINEERING_STANDARDS } from "@/lib/data/services-faq";

export function ServicesStandards() {
  return (
    <div className="mt-14 pt-10 border-t border-[#EFE5EC]">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[11px] font-mono font-bold tracking-widest text-[#922F55] uppercase block mb-1.5">
          Technical Rigor
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-[#121114] tracking-tight">
          The SimpleThink Engineering Standard
        </h3>
        <p className="text-xs sm:text-sm text-[#64606D] mt-2">
          Every project, regardless of tier, is delivered with production-ready benchmarks built in.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ENGINEERING_STANDARDS.map((standard, index) => {
          const Icon = standard.icon;
          return (
            <div
              key={index}
              className="p-5 rounded-2xl border border-[#EFE5EC] bg-white/70 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF0F6] text-[#922F55] flex items-center justify-center mb-3">
                <Icon size={20} />
              </div>
              <h4 className="text-sm font-bold text-[#121114] mb-1">
                {standard.title}
              </h4>
              <p className="text-xs text-[#64606D] leading-relaxed">
                {standard.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
