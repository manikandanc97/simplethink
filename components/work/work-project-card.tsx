"use client";

import { AnimatedChevronRight } from "@/components/ui/animated-icons/convenience-icons";
import { cn } from "@/lib/utils";
import { type Project } from "@/types/project";
import { motion } from "motion/react";
import { hoverLift, tapScale } from "@/lib/motion";
import Image from "next/image";

interface WorkProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

export function WorkProjectCard({ project, isActive, onClick }: WorkProjectCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={hoverLift}
      whileTap={tapScale}
      className={cn(
        "group w-full text-left p-4.5 sm:p-4 rounded-2xl transition-all duration-300 flex items-center gap-4.5 sm:gap-4 border cursor-pointer",
        isActive
          ? "bg-white border-primary shadow-elevated ring-1 ring-[var(--primary)]/20"
          : "bg-transparent border-surface-elevated hover:bg-white/60 hover:border-primary/30 hover:shadow-2xs"
      )}
    >
      {/* ── Number (01, 02, etc.) ── */}
      <span
        className={cn(
          "font-mono font-bold text-sm sm:text-base w-7 shrink-0 transition-colors",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
      >
        {project.number}
      </span>

      {/* ── Project Brand Logo ── */}
      <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shrink-0 border border-surface-elevated bg-white shadow-xs flex items-center justify-center p-2.5 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-sm">
        <Image
          src={project.logo || "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/logo/logo"}
          alt={`${project.name} Logo`}
          width={72}
          height={72}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).srcset = "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/logo/logo";
          }}
        />
      </div>

      {/* ── Project Meta ── */}
      <div className="flex-1 min-w-0 flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="text-xs font-medium text-muted-foreground">
            {project.year}
          </div>
          <h3 className="text-sm sm:text-base font-bold text-foreground truncate tracking-tight">
            {project.name}
          </h3>
          <p className="text-xs text-muted-foreground truncate">
            {project.category}
          </p>
        </div>

        {/* ── Tech Tag Pills ── */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-background text-muted-foreground text-xs sm:text-xs font-medium border border-surface-elevated"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Arrow Button ── */}
      <div
        className={cn(
          "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ml-1",
          isActive
            ? "bg-white border-[var(--accent-soft)] text-primary shadow-sm translate-x-0.5"
            : "bg-white border-surface-elevated text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:translate-x-0.5"
        )}
      >
        <AnimatedChevronRight size={16} />
      </div>
    </motion.button>
  );
}
