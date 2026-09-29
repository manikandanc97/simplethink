"use client";

import { useState } from "react";
import { type ServiceDetailItem } from "@/lib/data/services-page-data";
import { ChevronLeft, ChevronRight, Layout, Users, Sliders, Database } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesWhatWeBuildProps {
  service: ServiceDetailItem;
}

export function ServicesWhatWeBuild({ service }: ServicesWhatWeBuildProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? service.whatWeBuild.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === service.whatWeBuild.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full relative z-20 mb-16 sm:mb-20">
      {/* ── Section Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-border shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <span className="type-label font-extrabold tracking-wide text-foreground/90 uppercase">
              {service.whatWeBuild.length} Capabilities
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight font-satoshi">
            What we build
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-normal">
            {service.whatWeBuildSubtitle}
          </p>
        </div>

        {/* Carousel / Prev Next Buttons */}
        {service.whatWeBuild.length > 4 && (
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous capability"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[var(--background)] border border-[var(--surface-elevated)] flex items-center justify-center text-muted-foreground hover:text-foreground shadow-xs active:scale-90 transition-all cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next capability"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[var(--background)] border border-[var(--surface-elevated)] flex items-center justify-center text-muted-foreground hover:text-foreground shadow-xs active:scale-90 transition-all cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* ── 4 Feature Cards ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {service.whatWeBuild.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-6 rounded-2xl bg-white border border-[var(--surface-elevated)] hover:border-[var(--primary)]/30 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left"
            >
              {/* Icon Container with soft pastel tint */}
              <div
                className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}
              >
                <div className={item.iconColor}>
                  {idx === 0 && <Layout size={22} />}
                  {idx === 1 && <Users size={22} />}
                  {idx === 2 && <Sliders size={22} />}
                  {idx === 3 && <Database size={22} />}
                </div>
              </div>

              {/* Title */}
              <h4 className="text-base sm:text-lg font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
