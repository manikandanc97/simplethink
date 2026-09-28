"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedArrowRight } from "@/components/ui/animated-icon";
import { STEPS } from "@/lib/data/how-we-work";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { StepVisual } from "./how-we-work/step-visuals";
import { SectionHeader } from "@/components/ui/section-header";

export function HowWeWork() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [stepProgress, setStepProgress] = useState(0); // 0 to 1 within active step
  const { openLead } = useLead();

  const sectionRef = useRef<HTMLElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Update active step when user clicks a step tab or the Next button
  const scrollToStep = useCallback((targetIndex: number) => {
    const clampedIndex = Math.max(0, Math.min(targetIndex, STEPS.length - 1));
    setActiveStepIndex(clampedIndex);
    setStepProgress(0.2); // Just to visually indicate progress if they click
  }, []);

  useEffect(() => {
    if (navContainerRef.current) {
      const container = navContainerRef.current;
      const activeBtn = container.querySelector(`[data-step="${activeStepIndex}"]`) as HTMLElement;
      if (activeBtn) {
        container.scrollTo({ left: Math.max(0, activeBtn.offsetLeft - 16), behavior: "smooth" });
      }
    }
  }, [activeStepIndex]);

  const currentStep = STEPS[activeStepIndex];

  const handleNextStep = () => {
    if (activeStepIndex < STEPS.length - 1) {
      scrollToStep(activeStepIndex + 1);
    } else {
      openLead({ source: "how-we-work" });
    }
  };

  return (
    <section
      id="how-we-work"
      ref={sectionRef}
      className="relative w-full select-none"
    >
      <div className="relative w-full">
        <div className="w-full flex flex-col justify-center items-center py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          {/* Decorative Dotted Grid Accents */}
          <div className="hidden lg:block pointer-events-none absolute top-16 left-8 w-28 h-28 hero-dots hww-dots opacity-40" />
          <div className="hidden lg:block pointer-events-none absolute top-1/2 left-3 w-20 h-28 hero-dots hww-dots opacity-35" />
          <div className="hidden lg:block pointer-events-none absolute top-28 right-10 w-24 h-24 hero-dots hww-dots opacity-35" />

          {/* Main Content Box */}
          <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col gap-8 sm:gap-10 lg:gap-12 justify-center">
            
            {/* ========================================================================= */}
            {/* SECTION HEADER (Center Aligned, sleek vertical footprint) */}
            {/* ========================================================================= */}
            <SectionHeader
              eyebrow="OUR PROCESS"
              centered
              title="How We"
              highlightedText="Work."
              className="gap-1.5 sm:gap-2 max-w-2xl"
              description={
                <>
                  A clear 4-step delivery process to turn your ideas into real, scalable digital products.
                  <br className="hidden sm:inline" /> No confusion. No black boxes. Just results.
                </>
              }
            />

            {/* ========================================================================= */}
            {/* STEPPER NAVIGATION BAR (Interactive pills with active progress indicators) */}
            {/* ========================================================================= */}
            <div
              ref={navContainerRef}
              className="relative flex items-center justify-start md:justify-center gap-2 sm:gap-3 md:gap-3.5 overflow-x-auto py-1 sm:py-1.5 w-full scrollbar-none [mask-image:linear-gradient(to_right,black_85%,transparent_100%)] lg:[mask-image:none] pr-12 lg:pr-0"
            >
              {STEPS.map((step, index) => {
                const isActive = activeStepIndex === index;
                const isCompleted = activeStepIndex > index;
                const StepIcon = step.icon;

                return (
                  <div key={step.id} className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {/* Step Button Card */}
                    <button
                      type="button"
                      data-step={index}
                      onClick={() => scrollToStep(index)}
                      className={cn(
                        "relative group flex items-center gap-2.5 sm:gap-3 transition-all duration-300 cursor-pointer text-left rounded-2xl select-none overflow-hidden",
                        isActive
                          ? "bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-lg shadow-pink-500/10 border border-pink-200/90 ring-1 ring-pink-100"
                          : isCompleted
                          ? "px-3 py-2 bg-white/60 hover:bg-white rounded-2xl border border-neutral-200/70"
                          : "px-3 py-2 hover:bg-white/80 rounded-2xl border border-transparent hover:border-neutral-200/80"
                      )}
                    >
                      {/* Step Number Circle */}
                      <div
                        className={cn(
                          "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-black transition-colors shrink-0",
                          isActive
                            ? "bg-[#831843] text-white shadow-xs"
                            : isCompleted
                            ? "bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/60"
                            : "bg-purple-50 text-purple-700 font-bold group-hover:bg-purple-100"
                        )}
                      >
                        {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : step.number}
                      </div>

                      {/* Step Icon */}
                      <div
                        className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors",
                          isActive
                            ? "bg-rose-50 text-rose-500"
                            : isCompleted
                            ? "bg-neutral-100 text-neutral-600"
                            : "bg-neutral-100 text-neutral-500 group-hover:text-neutral-700"
                        )}
                      >
                        <StepIcon className="w-3.5 h-3.5" />
                      </div>

                      {/* Step Titles */}
                      <div className="flex flex-col">
                        <span
                          className={cn(
                            "text-xs sm:text-sm font-bold leading-tight transition-colors",
                            isActive ? "text-neutral-900" : "text-neutral-700 group-hover:text-neutral-900"
                          )}
                        >
                          {step.title}
                        </span>
                        <span className="text-[11px] sm:text-xs text-neutral-400 font-medium leading-tight whitespace-nowrap mt-0.5">
                          {step.subtitle}
                        </span>
                      </div>

                      {/* Active Step Real-time Scroll Fill Line */}
                      {isActive && (
                        <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-pink-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-600 via-rose-500 to-pink-600 rounded-full transition-all duration-100 ease-out"
                            style={{ width: `${Math.min(100, Math.max(8, stepProgress * 100))}%` }}
                          />
                        </div>
                      )}
                    </button>

                    {/* Dotted Curved Arrow to Next Step */}
                    {index < STEPS.length - 1 && (
                      <div className="hidden md:flex items-center justify-center px-0.5">
                        {index === 0 && (
                          <svg
                            className={cn(
                              "w-8 lg:w-12 h-5 shrink-0 transition-colors duration-500",
                              activeStepIndex > index ? "text-[#E11D48] drop-shadow-sm" : "text-pink-300/80"
                            )}
                            viewBox="0 0 56 24"
                            fill="none"
                          >
                            <path
                              d="M 4 8 C 20 20, 36 20, 50 8"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeDasharray="3 3"
                            />
                            <path
                              d="M 43 9 L 50 8 L 48 15"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg
                            className={cn(
                              "w-8 lg:w-12 h-6 shrink-0 transition-colors duration-500",
                              activeStepIndex > index ? "text-[#E11D48] drop-shadow-sm" : "text-pink-300/80"
                            )}
                            viewBox="0 0 56 32"
                            fill="none"
                          >
                            <path
                              d="M 4 14 C 16 14, 22 26, 14 26 C 6 26, 6 14, 22 10 C 36 6, 46 14, 52 22"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeDasharray="3 3"
                            />
                            <path
                              d="M 51 15 L 52 22 L 46 19"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg
                            className={cn(
                              "w-8 lg:w-12 h-5 shrink-0 transition-colors duration-500",
                              activeStepIndex > index ? "text-[#E11D48] drop-shadow-sm" : "text-pink-300/80"
                            )}
                            viewBox="0 0 56 24"
                            fill="none"
                          >
                            <path
                              d="M 4 18 C 20 6, 36 6, 50 18"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeDasharray="3 3"
                            />
                            <path
                              d="M 48 11 L 50 18 L 43 17"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ========================================================================= */}
            {/* MAIN BENTO CARD (Left Narrative + Right 3D Visual Scene) */}
            {/* ========================================================================= */}
            <div
              className="w-full bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] p-4 xs:p-5 sm:p-6 lg:p-7 relative overflow-hidden min-h-[400px] lg:h-auto lg:flex-1 lg:max-h-[500px] flex items-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center"
                >
                  {/* ------------------------------------------------------------- */}
                  {/* LEFT COLUMN: Narrative & 2x2 Features Grid */}
                  {/* ------------------------------------------------------------- */}
                  <div className="hww-narrative lg:col-span-6 flex flex-col gap-4 sm:gap-6 z-10">
                    <div className="flex flex-col gap-2.5 sm:gap-3">
                      {/* Step Kicker */}
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-[11px] sm:text-xs font-black tracking-widest text-[#E11D48] uppercase">
                          {currentStep.stepKicker}
                        </span>
                        <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400">
                          {activeStepIndex + 1} / {STEPS.length}
                        </span>
                      </div>

                      {/* Big Headline */}
                      <h3 className="font-satoshi font-black text-2xl xs:text-3xl sm:text-3xl lg:text-3xl xl:text-4xl text-neutral-900 tracking-tight leading-[1.15]">
                        {currentStep.headlineFirst}{" "}
                        <span className="bg-gradient-to-r from-purple-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                          {currentStep.headlineAccent}
                        </span>
                      </h3>

                      {/* Description Paragraph */}
                      <p className="text-neutral-500 text-xs sm:text-sm lg:text-sm font-normal leading-relaxed max-w-lg">
                        {currentStep.summary}
                      </p>
                    </div>

                    {/* 2x2 Feature Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {currentStep.features.map((feature, idx) => {
                        const FeatIcon = feature.icon;
                        return (
                          <div
                            key={idx}
                            className="bg-neutral-50/70 rounded-2xl border border-neutral-200/70 p-2 sm:p-2.5 hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-purple-200/80 transition-all flex items-start gap-2.5 group"
                          >
                            <div
                              className={cn(
                                "w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105",
                                feature.iconBg,
                                feature.iconColor
                              )}
                            >
                              <FeatIcon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-xs sm:text-xs text-neutral-900 leading-tight">
                                {feature.title}
                              </span>
                              <span className="text-[11px] text-neutral-500 leading-snug line-clamp-2">
                                {feature.desc}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom Action Row: Primary Next Step Button */}
                    <div className="flex items-center gap-3 sm:gap-4 flex-wrap pt-1">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="bg-[#831843] hover:bg-[#6e1336] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg shadow-[#831843]/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 group w-full sm:w-auto"
                      >
                        <span>
                          {activeStepIndex === STEPS.length - 1
                            ? "Start Your Project"
                            : `Next Step: ${currentStep.nextStepName}`}
                        </span>
                        <AnimatedArrowRight size={15} className="text-white" />
                      </button>

                      {activeStepIndex < STEPS.length - 1 && (
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                          <span>or scroll down</span>
                          <ChevronDown className="w-3.5 h-3.5 text-rose-500 animate-bounce" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* ------------------------------------------------------------- */}
                  {/* RIGHT COLUMN: 3D Visual Scene Composition */}
                  {/* ------------------------------------------------------------- */}
                  <StepVisual activeStepIndex={activeStepIndex} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ========================================================================= */}
            {/* Bottom Trust & Scroll Navigation Affordance Bar */}
            {/* ========================================================================= */}
            <div className="pt-3 border-t border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left text-xs font-mono text-neutral-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[11px] sm:text-xs">Dedicated senior engineers · Direct communication · Production warranty.</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                {activeStepIndex === STEPS.length - 1 ? (
                  <span className="text-rose-600 font-bold">Step 04 / 04 · Scroll down to continue</span>
                ) : (
                  <span>Step 0{activeStepIndex + 1} / 04 · Scroll to explore</span>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
