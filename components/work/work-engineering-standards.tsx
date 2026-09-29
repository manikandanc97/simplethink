"use client";

import { Gauge, ShieldCheck, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const STANDARDS = [
  {
    icon: Gauge,
    iconColor: "text-primary",
    iconBg: "bg-rose-50 border-rose-100",
    title: "Sub-Second Performance",
    metric: "< 0.8s TTFB",
    description:
      "We build with zero unnecessary JavaScript bloat. Every asset is optimized, compressed, and served globally through low-latency edge networks.",
    deliverables: ["99+ Google Lighthouse score", "Core Web Vitals certified", "Sub-second edge caching"],
  },
  {
    icon: Code2,
    iconColor: "text-[var(--chart-2)]",
    iconBg: "bg-purple-50 border-purple-100",
    title: "Bespoke Architecture",
    metric: "100% Tailored",
    description:
      "No generic WordPress themes, no off-the-shelf site builder wrappers. Custom-engineered codebases designed specifically for your business workflow.",
    deliverables: ["Next.js 15 & React 19", "Strict TypeScript typing", "Clean modular directory architecture"],
  },
  {
    icon: ShieldCheck,
    iconColor: "text-primary",
    iconBg: "bg-pink-50 border-pink-100",
    title: "Enterprise Security",
    metric: "Bank-Grade",
    description:
      "Zero-trust security practices, encrypted authentication, robust database schema validations, and continuous vulnerability scanning.",
    deliverables: ["Role-based access controls", "End-to-end SSL/TLS enforcement", "Automated database backups"],
  },
  {
    icon: Sparkles,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-100",
    title: "Full Code Ownership",
    metric: "0% Lock-in",
    description:
      "You retain complete intellectual property rights. On launch day, full GitHub repository ownership and deployment credentials transfer directly to you.",
    deliverables: ["Full Git repository transfer", "Comprehensive architecture documentation", "Zero recurring licensing fees"],
  },
];

export function WorkEngineeringStandards() {
  return (
    <div className="w-full pt-16 sm:pt-20 border-t border-surface-elevated">
      {/* ── Section Header ── */}
      <SectionHeader
        eyebrow="Engineering Standards"
        title="How We Ensure"
        highlightedText="Every Project Succeeds."
        description="Every website, web app, and platform we ship adheres to rigorous engineering benchmarks before touching a production domain."
        centered
        maxWidth="max-w-2xl"
        className="mb-12 sm:mb-16 mx-auto"
      />

      {/* ── 4 Standards Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STANDARDS.map((std, i) => {
          const Icon = std.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white/90 border border-surface-elevated shadow-card hover:border-primary/30 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon + Metric badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl ${std.iconBg} border flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    <Icon size={22} className={std.iconColor} />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-background text-foreground border border-surface-elevated">
                    {std.metric}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight mb-2">
                  {std.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {std.description}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="pt-4 border-t border-[var(--background)] space-y-2">
                {std.deliverables.map((d, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 size={13} className="text-primary shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
