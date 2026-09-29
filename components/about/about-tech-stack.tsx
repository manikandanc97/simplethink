"use client";

import { Code2, Layers, Cpu, Smartphone } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const STACK_CATEGORIES = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    badge: "Sub-Second UX",
    technologies: [
      { name: "Next.js 15", desc: "App Router & Server Components" },
      { name: "React 19", desc: "Concurrent rendering & Actions" },
      { name: "TypeScript Strict", desc: "Type-safe robust logic" },
      { name: "Tailwind CSS", desc: "Zero-runtime utility styling" },
      { name: "Motion React", desc: "Fluid 60fps micro-animations" },
    ],
  },
  {
    title: "Backend & Cloud Edge",
    icon: Cpu,
    badge: "Low Latency",
    technologies: [
      { name: "FastAPI / Python", desc: "High-throughput asynchronous APIs" },
      { name: "Node.js & Bun", desc: "Modern JavaScript backend runtimes" },
      { name: "Cloudflare Edge", desc: "Global CDN caching & Workers" },
      { name: "Serverless Compute", desc: "Elastic autoscaling architecture" },
    ],
  },
  {
    title: "Data & Security",
    icon: Layers,
    badge: "Enterprise Grade",
    technologies: [
      { name: "PostgreSQL", desc: "Relational database reliability" },
      { name: "Supabase", desc: "Realtime data, auth & storage" },
      { name: "Prisma ORM", desc: "Type-safe schema migrations" },
      { name: "Redis", desc: "Sub-millisecond memory caching" },
    ],
  },
  {
    title: "Mobile Products",
    icon: Smartphone,
    badge: "iOS & Android",
    technologies: [
      { name: "React Native", desc: "Cross-platform native performance" },
      { name: "Expo EAS", desc: "Automated cloud builds & OTA updates" },
      { name: "Offline Sync", desc: "Local database caching" },
      { name: "Native Biometrics", desc: "FaceID & fingerprint security" },
    ],
  },
];

export function AboutTechStack() {
  return (
    <div className="w-full pt-16 sm:pt-20 border-t border-surface-elevated flex flex-col gap-12 sm:gap-16">
      {/* ── Section Header ── */}
      <SectionHeader
        eyebrow="Engineering Stack"
        title={<>Modern technologies. <br className="hidden sm:block" /></>}
        highlightedText="Zero legacy baggage."
        description="We intentionally curate our stack to maximize runtime velocity, developer joy, and long-term codebase maintainability."
        centered
        maxWidth="max-w-2xl"
        className="mx-auto"
      />

      {/* ── 4 Category Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STACK_CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white/90 border border-surface-elevated shadow-card hover:border-primary/30 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-primary">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-background text-primary border border-surface-elevated">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                  {cat.title}
                </h3>

                <div className="flex flex-col gap-2.5">
                  {cat.technologies.map((t, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-background border border-surface-elevated hover:border-primary/30 hover:bg-white transition-colors flex flex-col gap-0.5"
                    >
                      <div className="text-xs font-bold text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
