"use client";

import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import { ChevronLeftIcon } from "@animateicons/react/lucide/chevron-left-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { motion } from "motion/react";
import { PROJECTS } from "@/lib/data/projects";

export const FILTER_TABS = ["Websites", "Web Apps", "Mobile Apps"] as const;
export type FilterTabType = typeof FILTER_TABS[number];

interface FilterTabsListProps {
  activeFilter: string;
  onSelectFilter: (tab: string) => void;
  layoutIdPrefix: string;
}

export function FilterTabsList({
  activeFilter,
  onSelectFilter,
  layoutIdPrefix,
}: FilterTabsListProps) {
  return (
    <div className="flex items-center gap-1 p-1 bg-slate-100/70 backdrop-blur-xl rounded-full border border-slate-200/60 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-max max-w-full shadow-inner">
      {FILTER_TABS.map((tab) => {
        const isActiveTab = activeFilter === tab;
        const count = PROJECTS.filter((p) => p.kind === "client" && p.serviceType === tab).length;

        return (
          <button 
            key={tab}
            onClick={() => onSelectFilter(tab)}
            className={cn(
              "relative px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-colors duration-300 cursor-pointer outline-none select-none",
              isActiveTab ? "text-white" : "text-slate-600 hover:text-primary"
            )}
          >
            {isActiveTab && (
              <motion.div 
                layoutId={`activeFilterTab-${layoutIdPrefix}`}
                className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--chart-2)] rounded-full shadow-md z-0"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
            <span 
              className={cn(
                "relative z-10 px-1.5 py-0.2 rounded-full text-xs sm:text-xs font-bold flex items-center justify-center min-w-[20px] transition-all duration-300",
                isActiveTab ? "bg-white/20 text-white shadow-sm" : "bg-white text-slate-500 shadow-sm border border-slate-200/60"
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

interface NavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function NavButtons({ onPrev, onNext }: NavButtonsProps) {
  return (
    <div className="flex items-center gap-0.5 p-1 bg-white/90 backdrop-blur-xl rounded-full border border-slate-200/80 shadow-sm shrink-0">
      <button 
        onClick={onPrev} 
        aria-label="Previous Project"
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-foreground hover:bg-slate-100 hover:text-primary transition-colors cursor-pointer active:scale-95 outline-none"
      >
        <AnimatedIcon icon={ChevronLeftIcon} size={15} />
      </button>
      <div className="w-[1px] h-4 bg-slate-200/80 mx-0.5" />
      <button 
        onClick={onNext} 
        aria-label="Next Project"
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-foreground hover:bg-slate-100 hover:text-primary transition-colors cursor-pointer active:scale-95 outline-none"
      >
        <AnimatedIcon icon={ChevronRightIcon} size={15} />
      </button>
    </div>
  );
}
