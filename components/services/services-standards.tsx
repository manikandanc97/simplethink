"use client";

import { ENGINEERING_STANDARDS } from "@/lib/data/services-faq";

export function ServicesStandards() {
  return (
    <div className="mt-16 pt-12 border-t border-[var(--surface-elevated)]">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1.5">
          Technical Rigor
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          The Simpluxe Engineering Standard
        </h3>
        <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-2">
          Every project, regardless of tier, is delivered with production-ready benchmarks built in.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ENGINEERING_STANDARDS.map((standard, index) => {
          const Icon = standard.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-2xl border border-[var(--surface-elevated)] bg-white/70 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--background)] text-primary flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-1">
                {standard.title}
              </h4>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                {standard.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
