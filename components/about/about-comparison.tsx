import { XCircle, CheckCircle2 } from "lucide-react";
import { COMPARISONS } from "@/lib/data/about";

export function AboutComparison() {
  return (
    <div className="pt-10 border-t border-[#EFE5EC]">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#922F55] block mb-2">
          Comparative Standards
        </span>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#121114]">
          Why Founders Choose SimpleThink
        </h2>
        <p className="text-xs sm:text-sm text-[#64606D] mt-2">
          A stark comparison between old-school agency bureaucracy and our streamlined senior model.
        </p>
      </div>

      <div className="border border-[#EFE5EC] rounded-3xl overflow-hidden bg-white shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#EFE5EC] bg-[#FAF7FC] p-4 sm:p-5 font-mono text-xs font-bold text-[#121114]">
          <div className="md:col-span-3 text-[#706B78] uppercase">Dimension</div>
          <div className="md:col-span-4 text-[#D8287A] hidden md:block">Traditional Agencies</div>
          <div className="md:col-span-5 text-[#922F55] hidden md:block">The SimpleThink Model</div>
        </div>

        <div className="divide-y divide-[#EFE5EC]">
          {COMPARISONS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-3 sm:gap-4 items-center hover:bg-[#FAF8FB] transition-colors"
            >
              <div className="md:col-span-3 font-bold text-sm text-[#121114]">
                {row.aspect}
              </div>

              <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-[#706B78]">
                <XCircle size={16} className="text-[#EF4444] shrink-0 mt-0.5" />
                <span>{row.traditional}</span>
              </div>

              <div className="md:col-span-5 flex items-start gap-2.5 text-xs sm:text-sm text-[#121114] font-medium bg-[#FAF0F6]/50 p-3 rounded-xl border border-[#F3DBE9]/60">
                <CheckCircle2 size={16} className="text-[#922F55] shrink-0 mt-0.5" />
                <span>{row.simplethink}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
