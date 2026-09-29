"use client";

import { motion } from "motion/react";
import { type ServiceData } from "@/lib/data/services";

export function BlueprintNode({ service }: { service: ServiceData }) {
  const Icon = service.icon;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -15 }}
      className="relative flex-1 min-w-[140px] sm:min-w-[170px] p-4.5 sm:p-4 rounded-2xl border border-primary/25 bg-white/95 backdrop-blur-md shadow-elevated flex flex-col items-center text-center gap-2 overflow-hidden group hover:border-primary/50 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--background)] border border-[var(--surface-elevated)] flex items-center justify-center text-primary relative z-10">
        <Icon size={18} />
      </div>
      <div className="relative z-10 w-full">
        <h4 className="text-xs sm:text-sm font-bold text-foreground leading-tight mb-0.5 truncate">
          {service.name}
        </h4>
        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Module Active
        </div>
      </div>
    </motion.div>
  );
}
