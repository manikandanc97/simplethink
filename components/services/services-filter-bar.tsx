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
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[var(--surface-elevated)]">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
        <button
          type="button"
          onClick={() => onSelectCategory("all")}
          className={cn(
            "px-4.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer",
            activeCategory === "all"
              ? "bg-primary text-white shadow-sm"
              : "bg-[var(--background)] text-muted-foreground hover:bg-[var(--background)] border border-[var(--surface-elevated)]"
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
              "px-4.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer",
              activeCategory === cat
                ? "bg-primary text-white shadow-sm"
                : "bg-[var(--background)] text-muted-foreground hover:bg-[var(--background)] border border-[var(--surface-elevated)]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Input & Selected Count */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 md:w-56">
          <Search
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Filter capabilities..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-[var(--background)] rounded-full border border-[var(--surface-elevated)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-[var(--primary)] text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {selectedCount > 0 && (
          <span className="hidden sm:inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[var(--background)] border border-[var(--surface-elevated)] text-xs font-mono font-bold text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
            {selectedCount} active
          </span>
        )}
      </div>
    </div>
  );
}
