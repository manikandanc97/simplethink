import { METRICS } from "@/lib/data/about";

export function AboutMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
      {METRICS.map((metric, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl border border-[#EFE5EC] bg-white/70 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
        >
          <div className="text-3xl sm:text-4xl font-black text-[#922F55] tracking-tight mb-2">
            {metric.value}
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#121114]">
              {metric.label}
            </h3>
            <p className="text-xs text-[#706B78] mt-1 leading-snug">
              {metric.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
