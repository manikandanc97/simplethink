"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedArrowRight } from "@/components/ui/animated-icon";
import { CldImage } from "next-cloudinary";
import { motion } from "motion/react";
import {
  Grid,
  Zap,
  TrendingUp,
  Sparkles,
  LineChart,
  Code2,
  Layers,
  CheckCircle2,
  Cpu,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export function ServicesHero() {
  const { openLead } = useLead();

  const handleScrollToTabs = () => {
    const el = document.getElementById("services-tabs-container");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-1 sm:pb-2">
      {/* ── Soft Ambient Glows ── */}
      <div
        className="pointer-events-none absolute -top-12 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-[#922F55]/12 via-[#DB2777]/8 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-[#6C2BB8]/10 via-[#3B82F6]/6 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
        {/* ── Left Column: Headline, CTAs, Highlights ── */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-2 sm:mb-2.5 text-[13px] sm:text-sm text-[#706B78] font-medium font-satoshi">
            <a href="/" className="hover:text-[#121114] transition-colors">Home</a>
            <span className="text-[#D3CCD8]">/</span>
            <span className="text-[#922F55] font-semibold">Services</span>
          </nav>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#121114] tracking-tight leading-[1.15] font-satoshi mb-2.5 sm:mb-3 max-w-2xl">
            Digital services, shaped around{" "}
            <span className="text-[#922F55]">your business.</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#524E59] max-w-xl leading-relaxed mb-4 sm:mb-5 font-normal">
            From websites and mobile products to AI-powered systems, we design
            and build the exact digital capabilities your business needs.
          </p>

          {/* 3 Core Value Props in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2.5 border-t border-[#ECE5EB]/80 w-full">
            {/* Value Prop 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100/80">
                <Grid size={18} className="text-[#922F55]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#121114] leading-tight">
                  9 capabilities
                </span>
                <span className="text-xs text-[#706B78] leading-tight mt-0.5">
                  End-to-end digital services
                </span>
              </div>
            </div>

            {/* Value Prop 2 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100/80">
                <Zap size={18} className="text-[#7C3AED]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#121114] leading-tight">
                  Design + Development
                </span>
                <span className="text-xs text-[#706B78] leading-tight mt-0.5">
                  Modern and scalable
                </span>
              </div>
            </div>

            {/* Value Prop 3 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100/80">
                <TrendingUp size={18} className="text-[#DB2777]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#121114] leading-tight">
                  Built for growth
                </span>
                <span className="text-xs text-[#706B78] leading-tight mt-0.5">
                  Real business outcomes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column: 3D Illustration, Gradient Fade Desk & Rich Floating Elements ── */}
        <div className="lg:col-span-5 relative flex justify-center items-center select-none pt-0 sm:pt-1 lg:pt-0">
          {/* Subtle Ambient Backing Glows */}
          <div className="pointer-events-none absolute -top-8 -left-6 w-32 h-32 rounded-full bg-purple-300/35 blur-2xl -z-10" />
          <div className="pointer-events-none absolute top-4 -right-4 w-36 h-36 rounded-full bg-pink-300/35 blur-2xl -z-10" />
          <div className="pointer-events-none absolute bottom-4 left-1/3 w-40 h-40 rounded-full bg-sky-200/35 blur-2xl -z-10" />

          {/* Outer Showcase Container with Dot Grid Pattern Backdrop */}
          <div className="relative w-full max-w-[500px] sm:max-w-[540px] aspect-[1.12/1] flex items-center justify-center">
            
            {/* ── Background Subtle Dot Pattern Card (Behind Character) ── */}
            <div className="absolute inset-1 sm:inset-3 rounded-[32px] bg-white/40 border border-[#EFE5EC]/80 [background-image:radial-gradient(#d3ccd8_1.2px,transparent_1.2px)] [background-size:22px_22px] -z-10 shadow-[0_10px_32px_rgba(0,0,0,0.02)]" />

            {/* ── Floating Element 1 (Top Left): Next.js & React ── */}
            <motion.div
              animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-3 sm:top-4 left-2 sm:left-4 z-20 flex items-center gap-2 sm:gap-2.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ECE5EB] shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#60A5FA] flex items-center justify-center text-white shadow-xs shrink-0">
                <Code2 size={13} />
              </div>
              <div className="text-left">
                <div className="text-[10px] sm:text-[11px] font-bold text-[#121114] leading-tight">
                  Next.js &amp; React
                </div>
                <div className="text-[8.5px] sm:text-[9px] font-semibold text-[#2563EB] leading-tight">
                  Clean Architecture
                </div>
              </div>
            </motion.div>

            {/* ── Floating Element 2 (Top Center): Strategy • Design • Launch Pill ── */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 z-[5] hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#ECE5EB] shadow-xs text-[9.5px] sm:text-[10px] font-bold text-[#524E59] whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Strategy</span>
              <span className="text-[#8C8494]">•</span>
              <span>Design</span>
              <span className="text-[#8C8494]">•</span>
              <span className="text-[#922F55]">Launch</span>
            </motion.div>

            {/* ── Micro Tech Tag: TypeScript (Lowered cleanly below Next.js) ── */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="pointer-events-none absolute top-20 sm:top-20 left-10 sm:left-14 text-[#2563EB] text-[9.5px] font-mono z-[15] hidden xs:flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50/80 border border-blue-100/70 shadow-2xs backdrop-blur-xs"
            >
              <span>&lt;TypeScript /&gt;</span>
            </motion.div>

            {/* ── Floating Element 3 (Top Right): Ideas to Real Products ── */}
            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute top-3 sm:top-4 right-2 sm:right-4 z-20 flex items-center gap-2 sm:gap-2.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_10px_28px_rgba(146,47,85,0.12)]"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-[#922F55] to-[#DB2777] flex items-center justify-center text-white shadow-xs shrink-0">
                <Sparkles size={15} className="text-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] sm:text-[11px] font-bold text-[#121114] leading-tight">
                  Ideas to
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-[#922F55] leading-tight">
                  Real Products
                </div>
              </div>
            </motion.div>

            {/* ── Floating Element 4 (Mid Left): Design Systems & Figma ── */}
            <motion.div
              animate={{ y: [0, 5, 0], x: [0, -2, 0] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-28 sm:top-32 -left-2 sm:-left-3 z-20 flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F3E8FF] shadow-[0_8px_24px_rgba(124,58,237,0.10)]"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-purple-50 text-[#7C3AED] flex items-center justify-center border border-purple-100 shrink-0">
                <Layers size={14} />
              </div>
              <div className="text-left">
                <div className="text-[10px] sm:text-[11px] font-bold text-[#121114] leading-tight">
                  Design Systems
                </div>
                <div className="text-[8.5px] sm:text-[9px] font-semibold text-[#7C3AED] leading-tight">
                  Figma to Code
                </div>
              </div>
            </motion.div>

            {/* ── Floating Element 4.5 (Lower Mid Left): Scalable Cloud Pill ── */}
            <motion.div
              animate={{ y: [0, 4, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-44 sm:top-48 -left-1 sm:left-2 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#EFE5EC] shadow-[0_6px_16px_rgba(0,0,0,0.03)]"
            >
              <Cpu size={11} className="text-[#6C2BB8]" />
              <span className="text-[9px] font-bold text-[#524E59]">
                Scalable Cloud
              </span>
            </motion.div>

            {/* ── Floating Element 5 (Mid Right): Mobile & Web Apps ── */}
            <motion.div
              animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-28 sm:top-32 -right-2 sm:-right-2 z-20 flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E0E7FF] shadow-[0_8px_24px_rgba(79,70,229,0.10)]"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center border border-indigo-100 shrink-0">
                <Smartphone size={14} />
              </div>
              <div className="text-left">
                <div className="text-[10px] sm:text-[11px] font-bold text-[#121114] leading-tight">
                  Mobile &amp; Web
                </div>
                <div className="text-[8.5px] sm:text-[9px] font-semibold text-[#4F46E5] leading-tight">
                  iOS • Android • React
                </div>
              </div>
            </motion.div>

            {/* ── Micro Tech Tag: FastAPI (Lowered under Mobile & Web) ── */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="pointer-events-none absolute top-40 sm:top-40 right-10 sm:right-14 text-[#922F55] text-[9.5px] font-mono z-[15] hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-50/80 border border-rose-100/70 shadow-2xs backdrop-blur-xs"
            >
              <span>&lt;FastAPI /&gt;</span>
            </motion.div>

            {/* ── Floating Element 6 (Lower Mid Right): Reports & Growth ── */}
            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, 1.2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              className="absolute top-44 sm:top-48 -right-2 sm:right-0 z-20 flex items-center gap-2 sm:gap-2.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ECE5EB] shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 shrink-0">
                <LineChart size={14} />
              </div>
              <div className="text-left">
                <div className="text-[10px] sm:text-[11px] font-bold text-[#121114] leading-tight">
                  Reports
                </div>
                <div className="text-[8.5px] sm:text-[9px] font-semibold text-emerald-600 leading-tight flex items-center gap-0.5">
                  <span>+28.4%</span> Growth
                </div>
              </div>
            </motion.div>

            {/* ── Floating Element 7 (Bottom Left): Performance Badge ── */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute bottom-3 sm:bottom-4 left-2 sm:left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#ECE5EB] shadow-xs"
            >
              <CheckCircle2 size={12} className="text-emerald-500" />
              <span className="text-[9.5px] sm:text-[10px] font-bold text-[#121114]">
                Sub-Second Speed
              </span>
            </motion.div>

            {/* ── Floating Element 8 (Bottom Right): Secure & Scalable Pill ── */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              className="absolute bottom-3 sm:bottom-4 right-2 sm:right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#ECE5EB] shadow-xs"
            >
              <ShieldCheck size={12} className="text-[#0284C7]" />
              <span className="text-[9.5px] sm:text-[10px] font-bold text-[#121114]">
                Secure &amp; Scalable
              </span>
            </motion.div>

            {/* ── Micro Decorators Floating in Air ── */}
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute top-16 right-20 text-[#DB2777] text-xs z-[5]"
            >
              ✦
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="pointer-events-none absolute top-14 left-24 text-[#7C3AED] text-sm z-[5]"
            >
              ✧
            </motion.span>

            {/* ── 3D Character Illustration with Smooth Bottom Gradient Fade (Static, Non-animated) ── */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <div
                className="relative w-full h-full"
                style={{
                  // Smooth vertical gradient mask: fades out the bottom table legs naturally
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 74%, rgba(0,0,0,0.65) 86%, rgba(0,0,0,0) 98%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 74%, rgba(0,0,0,0.65) 86%, rgba(0,0,0,0) 98%)",
                }}
              >
                <CldImage
                  src="simpluxe/section-banner/ChatGPT_Image_Sep_28_2026_07_25_40_PM_hjumpi"
                  alt="Digital services, shaped around your business"
                  width={768}
                  height={512}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                  className="w-full h-full object-contain drop-shadow-[0_16px_30px_rgba(146,47,85,0.12)] select-none"
                />
              </div>

              {/* Diffused ambient soft shadow underneath the table to ground it naturally */}
              <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-gradient-to-r from-transparent via-[#922F55]/12 to-transparent blur-xl -z-5" />

              {/* Bottom gradient blend with page background so there is zero abrupt edge */}
              <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF7FC] via-[#FAF7FC]/85 to-transparent z-15" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
