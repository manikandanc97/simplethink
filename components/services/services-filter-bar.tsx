"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORY_ORDER, SERVICES_LIST } from "@/lib/data/services";

interface ServicesFilterBarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCount: number;
}

export function ServicesFilterBar({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedCount,
}: ServicesFilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#EFE5EC]">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
        <button
          type="button"
          onClick={() => onSelectCategory("all")}
          className={cn(
            "px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer",
            activeCategory === "all"
              ? "bg-[#922F55] text-white shadow-sm"
              : "bg-[#FAF7FC] text-[#524E59] hover:bg-[#F3EBF9] border border-[#EAE3E9]"
          )}
        >
          All Modules ({SERVICES_LIST.length})
        </button>
        {CATEGORY_ORDER.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer",
              activeCategory === cat
                ? "bg-[#922F55] text-white shadow-sm"
                : "bg-[#FAF7FC] text-[#524E59] hover:bg-[#F3EBF9] border border-[#EAE3E9]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Input & Selected Count */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 md:w-56">
          <Search
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#706B78]"
          />
          <input
            type="text"
            placeholder="Filter capabilities..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-[#FAF7FC] rounded-full border border-[#EAE3E9] focus:outline-none focus:border-[#922F55] focus:ring-1 focus:ring-[#922F55] text-[#121114] placeholder:text-[#706B78]"
          />
        </div>

        {selectedCount > 0 && (
          <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF0F6] border border-[#F3DBE9] text-[11px] font-mono font-bold text-[#922F55]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8287A] animate-pulse" />
            {selectedCount} active
          </span>
        )}
      </div>
    </div>
  );
}
