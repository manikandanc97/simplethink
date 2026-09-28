"use client";

import { motion } from "motion/react";
import { type ServiceItem } from "@/types/service";

export function BlueprintNode({ service }: { service: ServiceItem }) {
  const Icon = service.icon;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -15 }}
      className="relative flex-1 min-w-[140px] sm:min-w-[170px] p-3.5 sm:p-4 rounded-2xl border border-[#922F55]/25 bg-white/95 backdrop-blur-md shadow-[0_8px_24px_rgba(146,47,85,0.06)] flex flex-col items-center text-center gap-2.5 overflow-hidden group hover:border-[#922F55]/50 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#922F55]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF0F6] border border-[#F3DBE9] flex items-center justify-center text-[#922F55] relative z-10">
        <Icon size={18} />
      </div>
      <div className="relative z-10 w-full">
        <h4 className="text-xs sm:text-sm font-bold text-[#121114] leading-tight mb-0.5 truncate">
          {service.name}
        </h4>
        <div className="text-[10px] font-mono text-[#706B78] uppercase tracking-wider">
          Module Active
        </div>
      </div>
    </motion.div>
  );
}
