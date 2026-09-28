"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedIcon, AnimatedArrowRight } from "@/components/ui/animated-icon";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquare, Zap } from "lucide-react";
import { CalendarIcon } from "@animateicons/react/lucide/calendar-icon";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/section-header";

import { prefersReducedMotion, SCROLL_EASE } from "@/lib/motion-system";

interface CTAProps {
  onStartProject?: () => void;
}

export function CTA({ onStartProject }: CTAProps) {
  const { openLead } = useLead();
  const ref = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    if (onStartProject) onStartProject();
    else openLead({ source: "cta" });
  };

  const handleSchedule = () => {
    openLead({ source: "cta-schedule", description: "Interested in scheduling a discovery call." });
  };

  return (
    <section
      id="cta"
      ref={ref}
      className="relative w-full py-12 sm:py-16 lg:py-24 select-none overflow-hidden"
    >
      {/* ── Soft Ambient Glows & Dot Patterns Matching SimpleThink Theme ── */}


      {/* Decorative Dot Matrix on corners */}
      <div className="hidden lg:block pointer-events-none absolute top-12 left-8 w-28 h-28 hero-dots cta-dots opacity-40" />
      <div className="hidden lg:block pointer-events-none absolute bottom-12 right-10 w-28 h-28 hero-dots cta-dots opacity-35" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column: 3D Illustration ── */}
          <div
            ref={illustrationRef}
            className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-center items-center relative"
          >
            {/* Subtle glow backdrop for the 3D illustration */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[#922F55]/12 via-[#6C2BB8]/10 to-transparent blur-2xl pointer-events-none" />

            <div className="cta-parallax relative w-64 h-64 xs:w-72 xs:h-72 sm:w-96 sm:h-96 lg:w-96 lg:h-96">
              {/* Gentle floating motion */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src="/assets/simplemind.png"
                  alt="Turn your idea into a premium digital product"
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 380px, 400px"
                  className="object-contain drop-shadow-[0_20px_35px_rgba(146,47,85,0.12)]"
                />
              </motion.div>

              {/* READY TO BUILD? Floating Pill */}
              <div
                className="absolute right-[2%] bottom-[16%] xs:right-[4%] xs:bottom-[20%] sm:right-[8%] sm:bottom-[22%] z-20 inline-flex items-center gap-1.5 xs:gap-2 px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-4 sm:py-2 rounded-full bg-white/95 backdrop-blur-md shadow-[0_8px_24px_rgba(30,24,30,0.10)] border border-[rgba(30,24,30,0.08)] hover:scale-105 transition-transform duration-300"
              >
                <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[#922F55] font-extrabold text-[10px] xs:text-xs tracking-wider sm:tracking-widest uppercase font-satoshi whitespace-nowrap">
                  READY TO BUILD?
                </span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Content & Actions ── */}
          <div
            ref={contentRef}
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left font-satoshi gap-6 sm:gap-8 lg:gap-10 w-full"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 sm:gap-6 w-full">
              {/* Top Info Header */}
              <SectionHeader
                eyebrow="FROM IDEA TO IMPACT"
                title="Let's turn your idea into a"
                highlightedText="premium digital product."
                description="High craft, sub-second performance, and zero bloat. We partner with ambitious founders to build products people actually love using."
                className="lg:items-start lg:text-left mx-0"
                maxWidth="max-w-md"
              />

              {/* 3 Pillars as sleek pills */}
              <div className="cta-content flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
              {[
                { label: "Simple process.", icon: Zap },
                { label: "Clear communication.", icon: MessageSquare },
                { label: "Real results.", icon: CheckCircle2 },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-[rgba(30,24,30,0.08)] shadow-[0_2px_6px_rgba(0,0,0,0.03)] text-xs sm:text-sm font-semibold text-[#121114]"
                  >
                    <Icon size={13} className="text-[#922F55] shrink-0" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
              </div>
            </div>

            <div className="cta-content flex flex-col items-center lg:items-start gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Action Buttons & Fast Response Note */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  size="lg"
                  onClick={handleStart}
                  className="group h-11 sm:h-14 px-6 sm:px-8 rounded-full bg-[#922F55] text-white text-sm sm:text-base font-bold tracking-tight hover:bg-[#7D2748] active:scale-95 transition-all duration-200 shadow-[0_8px_24px_rgba(146,47,85,0.25)] hover:shadow-[0_10px_28px_rgba(146,47,85,0.35)] hover:-translate-y-0.5 cursor-pointer border-0 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <span>Start a project</span>
                  <AnimatedArrowRight size={15} className="text-white" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleSchedule}
                  className="h-11 sm:h-14 px-6 sm:px-7 rounded-full bg-white text-[#121114] border border-[rgba(30,24,30,0.12)] hover:border-[rgba(30,24,30,0.25)] hover:bg-[#FAF9F7] text-sm sm:text-base font-bold tracking-tight active:scale-95 transition-all duration-200 shadow-xs hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <AnimatedIcon icon={CalendarIcon} size={15} className="text-[#68666C]" />
                  <span>Schedule a call</span>
                </Button>
              </div>

              {/* Subtle Trust / Response Note */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs font-medium text-[#68666C] text-center lg:text-left">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Response within 2 hours • Free 30-min discovery session</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
