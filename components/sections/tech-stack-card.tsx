"use client";


import { type TechItem } from "@/types/tech";
import { motion } from "motion/react";
import { CldImage } from "next-cloudinary";

const SPRING = { type: "spring" as const, stiffness: 340, damping: 28 };

export function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.94 }}
      transition={{ ...SPRING, delay: Math.min(index * 0.03, 0.25) }}
      className="group relative flex flex-col items-center text-center gap-4 p-5 rounded-2xl border border-border bg-card/95 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1.5 overflow-hidden h-full"
    >
      {/* Official Brand Logo Squircle Container */}
      <div className="relative w-15 h-15 rounded-2xl bg-muted/40 border border-border/60 flex items-center justify-center p-3 shadow-sm group-hover:scale-105 transition-transform duration-300">
        <CldImage
          src={`simpluxe/tech/${tech.slug}`}
          alt={`${tech.name} logo`}
          width={38}
          height={38}
          className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 ${
            tech.invertInDark ? "dark:invert dark:brightness-125" : ""
          }`}
        />
      </div>

      <div className="flex flex-col items-center gap-1.5 flex-1 justify-center">
        <h3 className="type-h3 !text-base text-foreground group-hover:text-primary transition-colors">
          {tech.name}
        </h3>

        {/* 2-line Description */}
        <p className="type-small text-muted-foreground text-center min-h-9 flex items-center justify-center">
          {tech.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5 mt-auto">
        <span className="px-2.5 py-0.5 rounded-md type-label font-medium bg-muted/50 text-muted-foreground border border-border/50">
          {tech.badge}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────


