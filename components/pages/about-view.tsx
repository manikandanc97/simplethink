"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SITE } from "@/config/site";
import { useLead } from "@/components/leads/lead-provider";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { AboutHero } from "@/components/about/about-hero";
import {
  AnimatedArrowRight,
  AnimatedMail,
  AnimatedMessageSquare,
} from "@/components/ui/animated-icon";
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const METRICS = [
  {
    value: "100%",
    label: "Senior Engineering",
    sub: "Direct collaboration with builders, zero junior outsourcing",
  },
  {
    value: "< 1.2s",
    label: "Sub-Second Speeds",
    sub: "Lighthouse 95+ performance on production networks",
  },
  {
    value: "0",
    label: "Vendor Lock-in",
    sub: "You own 100% of all code, assets, and infrastructure",
  },
  {
    value: "24h",
    label: "Guaranteed Response",
    sub: "Direct communication with engineers who know your codebase",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    tag: "CLARITY",
    title: "Clarity over cleverness",
    summary:
      "Code should be easy to read. Interfaces should be effortless to use.",
    description:
      "We don't build things to show off technical trivia; we build them to solve real customer and business problems efficiently. If a concept cannot be explained plainly, it is too complex. Simplicity creates resilience.",
    deliverable: "Readable, well-documented architecture that any senior engineer can step into.",
  },
  {
    number: "02",
    tag: "PURPOSE",
    title: "Purpose-driven scope",
    summary:
      "Every single feature must earn its place in the production build.",
    description:
      "If a proposed feature doesn't serve the primary reason someone uses the product, it gets cut. This discipline prevents scope bloat, accelerates time-to-market, and protects you from endless maintenance debt.",
    deliverable: "Laser-focused releases that solve customer needs and drive immediate ROI.",
  },
  {
    number: "03",
    tag: "DETAIL",
    title: "Difference is in the details",
    summary:
      "Simplicity never means generic, uninspired, or boring.",
    description:
      "By stripping away visual clutter and extraneous controls, we create space for refined typography, fluid motion physics, sub-second performance, and a distinctive brand presence that commands respect.",
    deliverable: "Bespoke digital experiences that stand out clearly from generic templates.",
  },
];

const COMPARISONS = [
  {
    aspect: "Engineering Team",
    traditional: "Layers of account managers, junior temps, and outsourced developers.",
    simplethink: "Direct daily collaboration with the senior software engineers crafting your system.",
  },
  {
    aspect: "Technology Foundation",
    traditional: "Bloated off-the-shelf WordPress themes, brittle plugins, and slow templates.",
    simplethink: "Custom Next.js, TypeScript, React Native, and high-performance cloud backends.",
  },
  {
    aspect: "Delivery Velocity",
    traditional: "Months of bureaucratic 'discovery' decks before touching working code.",
    simplethink: "Rapid 1-2 week release sprints with live staging previews and continuous feedback.",
  },
  {
    aspect: "Code Ownership & IP",
    traditional: "Proprietary lock-in, licensing dependencies, and captive hosting fees.",
    simplethink: "100% intellectual property ownership transferred to your GitHub repository.",
  },
];

export function AboutView() {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);
  const { openLead } = useLead();

  return (
    <div className="relative min-h-screen w-full bg-[#FAF7FC] text-[#121114] overflow-hidden pt-28 sm:pt-36 pb-28">
      {/* ── Background Atmospheric Elements (Screen-Specific) ── */}
      <AmbientBackground screen="about" />
      <div className="absolute inset-0 bg-[radial-gradient(#d3ccd8_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* ── Hero Section (Badges, Title, Floating Stickers) ── */}
      <AboutHero />

      {/* ── Main Showcase Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] sm:rounded-[40px] border border-[#EFE5EC] shadow-[0_24px_64px_-16px_rgba(146,47,85,0.08),0_4px_24px_rgba(0,0,0,0.02)] p-5 sm:p-7 lg:p-9 space-y-16">
          
          {/* ── Section 1: Who We Are & Story ── */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#922F55] block mb-2">
                  Our Ethos & Origin
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#121114] leading-tight">
                  Who We{" "}
                  <span className="relative inline-block text-[#922F55]">
                    Are
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full h-2 text-[#D8287A] overflow-visible pointer-events-none"
                      viewBox="0 0 100 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.5C28 2 68 2 98 5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
                
                {/* Location indicator */}
                {SITE.location && (
                  <div className="mt-6 p-4 rounded-2xl bg-[#FAF7FC] border border-[#EAE3E9] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FAF0F6] text-[#922F55] flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#706B78] uppercase">Studio Base</div>
                      <div className="text-xs font-bold text-[#121114]">
                        {SITE.location} &bull; Serving Clients Globally
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-8 space-y-5 text-sm sm:text-base text-[#64606D] leading-relaxed">
                <p className="text-lg sm:text-xl font-bold text-[#121114] leading-relaxed">
                  We are a dedicated software development company working directly with founders, business owners, and engineering leaders who value architectural precision over bureaucratic overhead.
                </p>
                <p>
                  When you collaborate with SimpleThink, you don&apos;t get handed off through account managers, junior coordinators, or outsourced layers. You work directly with the senior software engineers crafting your system.
                </p>
                <p>
                  Our methodology combines deep brand taste with modern fullstack engineering — ensuring that every website, web application, mobile app, and SaaS system we launch looks world-class and performs under pressure.
                </p>
              </div>
            </div>

            {/* 4 Metric Cards */}
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
          </div>

          {/* ── Section 2: Guiding Philosophy (Interactive Principle Cards) ── */}
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
                    "p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between group",
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

          {/* ── Section 3: The SimpleThink Advantage vs Traditional Agencies ── */}
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

          {/* ── Section 4: Direct Engineering Line / CTA ── */}
          <div className="pt-6">
            <div className="rounded-3xl border border-[#EFE5EC] bg-[#FAF7FC] p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-[#FFD2E5]/40 to-transparent blur-3xl pointer-events-none" />

              <div className="max-w-2xl relative z-10 space-y-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#922F55] block">
                  Direct Engineering Line
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#121114] tracking-tight">
                  Let&apos;s build something exceptional{" "}
                  <span className="text-[#922F55]">together.</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#64606D] leading-relaxed">
                  Have an upcoming project, a product to revamp, or a concept to validate? We are available for select client engagements.
                </p>

                {SITE.responseTime && (
                  <p className="text-xs font-mono text-[#706B78]">
                    Typical response time: {SITE.responseTime}
                  </p>
                )}

                <div className="flex flex-wrap gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => openLead({ source: "about" })}
                    className="px-5 py-2.5 rounded-xl bg-[#922F55] hover:bg-[#7e2547] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Start a Project</span>
                    <AnimatedArrowRight size={15} />
                  </button>

                  {SITE.email && (
                    <a
                      href={`mailto:${SITE.email}`}
                      className="px-5 py-2.5 rounded-xl border border-[#EAE3E9] bg-white hover:border-[#922F55]/50 text-[#121114] text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <AnimatedMail size={15} className="text-[#922F55]" />
                      <span>Email {SITE.email}</span>
                    </a>
                  )}

                  {SITE.whatsapp && (
                    <a
                      href={`https://wa.me/${SITE.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl border border-[#EAE3E9] bg-white hover:border-[#25D366]/50 text-[#121114] text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <AnimatedMessageSquare size={15} className="text-[#25D366]" />
                      <span>WhatsApp Us</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
