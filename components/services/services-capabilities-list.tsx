"use client";

import { motion, AnimatePresence } from "motion/react";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { type ServiceItem } from "@/types/service";

interface ServicesCapabilitiesListProps {
  services: ServiceItem[];
  selected: Set<string>;
  onToggleService: (id: string) => void;
  onClearAll: () => void;
  onResetFilters: () => void;
}

export function ServicesCapabilitiesList({
  services,
  selected,
  onToggleService,
  onClearAll,
  onResetFilters,
}: ServicesCapabilitiesListProps) {
  return (
    <div className="lg:col-span-5 flex flex-col gap-3.5">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h2 className="text-xl font-black text-[#121114] tracking-tight">
            Capabilities Library
          </h2>
          <p className="text-xs text-[#706B78] mt-0.5">
            Click any module to toggle it in your blueprint.
          </p>
        </div>
        {selected.size > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-xs font-bold text-[#922F55] hover:underline cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>

      {services.length === 0 ? (
        <div className="text-center py-14 px-4 bg-[#FBF9FB] rounded-2xl border border-dashed border-[#EAE3E9]">
          <p className="text-sm text-[#706B78] font-medium">
            No capabilities match your search.
          </p>
          <button
            onClick={onResetFilters}
            className="mt-3 text-xs font-bold text-[#922F55] hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        services.map((service) => {
          const isSelected = selected.has(service.id);
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              onClick={() => onToggleService(service.id)}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  onToggleService(service.id);
                }
              }}
              whileHover={{ x: 3 }}
              className={cn(
                "group relative p-4 sm:p-5 rounded-2xl border text-left cursor-pointer transition-all duration-200 flex flex-col overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#922F55]",
                isSelected
                  ? "bg-white border-[#922F55] shadow-[0_8px_24px_rgba(146,47,85,0.08)] ring-1 ring-[#922F55]/30"
                  : "bg-white/70 border-[#EFE5EC] hover:border-[#D8287A]/50 hover:bg-white hover:shadow-xs"
              )}
            >
              {/* Left Accent Color Line */}
              <div
                className={cn(
                  "absolute left-0 top-0 bottom-0 w-1 transition-all duration-200",
                  isSelected
                    ? "bg-[#922F55]"
                    : "bg-transparent group-hover:bg-[#922F55]/30"
                )}
              />

              <div className="flex items-start justify-between gap-3.5">
                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                  {/* Module Icon */}
                  <div
                    className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center transition-all shrink-0 mt-0.5",
                      isSelected
                        ? "bg-[#922F55] text-white shadow-xs"
                        : "bg-[#FAF0F6] text-[#922F55] group-hover:bg-[#F3DBE9]"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-mono text-[11px] font-bold text-[#922F55]">
                        {service.number}
                      </span>
                      <span className="text-[10px] font-mono text-[#706B78] uppercase px-1.5 py-0.5 rounded-md bg-[#FAF7FC] border border-[#EAE3E9]">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold tracking-tight text-[#121114]">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#64606D] mt-1 leading-snug">
                      {service.outcome}
                    </p>
                  </div>
                </div>

                {/* Toggle Check / Plus Button */}
                <div
                  className={cn(
                    "w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all",
                    isSelected
                      ? "bg-[#922F55] border-[#922F55] text-white shadow-xs"
                      : "border-[#D6CAD2] bg-white text-[#706B78] group-hover:border-[#922F55] group-hover:text-[#922F55]"
                  )}
                >
                  {isSelected ? (
                    <Check size={14} className="stroke-[3]" />
                  ) : (
                    <Plus size={14} />
                  )}
                </div>
              </div>

              {/* Expandable Details when selected */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-3.5 border-t border-[#F5EDF3]">
                      {/* Pillars */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {service.pillars.map((pillar) => (
                          <span
                            key={pillar}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#FAF0F6] text-[#922F55] border border-[#F3DBE9]"
                          >
                            {pillar}
                          </span>
                        ))}
                      </div>

                      {/* Deliverables list */}
                      <ul className="space-y-1.5">
                        {service.includes.map((item, i) => (
                          <li
                            key={i}
                            className="text-xs text-[#64606D] flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D8287A] shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })
      )}
    </div>
  );
}
