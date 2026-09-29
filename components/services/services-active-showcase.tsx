"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";;
import { type ServiceData } from "@/lib/data/services";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ServicesMockupWindow } from "./showcase/services-mockup-window";

interface ServicesActiveShowcaseProps {
  service: ServiceData;
}

export function ServicesActiveShowcase({ service }: ServicesActiveShowcaseProps) {
  const { openLead } = useLead();

  return (
    <div className="w-full relative z-20 mb-16 sm:mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ── Left Column: Content, Metrics, CTAs ── */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full flex flex-col gap-8 sm:gap-12"
            >
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex flex-col gap-4">
                  {/* Kicker with Number & Category */}
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-black text-base sm:text-lg tracking-tight font-satoshi">
                      {service.number}
                    </span>
                    <span className="text-primary font-black">•</span>
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-muted-foreground font-satoshi">
                      {service.name}
                    </span>
                  </div>

                  {/* Dynamic Headline */}
                  <h2 className="text-3xl sm:text-4xl lg:text-4xl sm:text-5xl font-black text-foreground tracking-tight leading-[1.12] font-satoshi">
                    {service.headline.normal}
                    <span className="text-primary">
                      {service.headline.highlight}
                    </span>
                  </h2>
                </div>

                {/* Dynamic Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-4">
                <button
                  type="button"
                  onClick={() =>
                    openLead({
                      source: "services-configurator",
                      description: `Interested in ${service.name} services.`,
                    })
                  }
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-elevated hover:shadow-elevated hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <span>Start a project</span>
                  <AnimatedArrowRight size={14} className="text-white" />
                </button>

                <Link
                  href={service.relatedWorkUrl}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-[var(--background)] text-foreground border border-[var(--border)] shadow-xs hover:border-[var(--border)] text-sm font-bold hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <span>View related work</span>
                </Link>
              </div>

              {/* 3 Large Key Metrics */}
              <div className="grid grid-cols-3 gap-4 sm:gap-4 pt-6 border-t border-[var(--surface-elevated)]">
                {service.stats.map((st, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground tracking-tight font-satoshi">
                      {st.value}
                    </span>
                    <span className="text-xs sm:text-xs text-muted-foreground font-medium leading-tight">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Right Column: Interactive Mockup Window ── */}
        <ServicesMockupWindow service={service} />
      </div>
    </div>
  );
}
