"use client";

import { type ServiceData } from "@/lib/data/services";
import { Layout, Users, Sliders, Database } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesWhatWeBuildProps {
  service: ServiceData;
}

export function ServicesWhatWeBuild({ service }: ServicesWhatWeBuildProps) {
  return (
    <div className="w-full relative z-20 mb-16 sm:mb-20">
      {/* ── Section Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex flex-col gap-4 items-start text-left">
          <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-border shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <span className="type-label font-extrabold tracking-wide text-foreground/90 uppercase">
              {service.whatWeBuild.length} Capabilities
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight font-satoshi">
              What we build
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-normal">
              {service.whatWeBuildSubtitle}
            </p>
          </div>
        </div>
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
              className="group p-6 sm:p-6 rounded-2xl bg-white border border-[var(--surface-elevated)] hover:border-[var(--primary)]/30 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 items-start text-left"
            >
              {/* Icon Container with soft pastel tint */}
              <div
                className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
              >
                <div className={item.iconColor}>
                  {idx === 0 && <Layout size={22} />}
                  {idx === 1 && <Users size={22} />}
                  {idx === 2 && <Sliders size={22} />}
                  {idx === 3 && <Database size={22} />}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {/* Title */}
                <h4 className="text-base sm:text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
