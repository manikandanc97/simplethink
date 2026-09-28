"use client";

import { useState, useMemo, useCallback } from "react";
import { SERVICES_LIST } from "@/lib/data/services";
import { type LeadInput } from "@/lib/leads/schema";

export function useServicesConfigurator() {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(["websites", "web-apps"])
  );
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleService = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const clearSelection = useCallback(() => {
    setSelected(new Set());
  }, []);

  const resetFilters = useCallback(() => {
    setActiveCategory("all");
    setSearchQuery("");
  }, []);

  // Filter services by category and search
  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((service) => {
      const matchesCategory =
        activeCategory === "all" || service.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.outcome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.pillars.some((p) =>
          p.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const selectedServices = useMemo(
    () => SERVICES_LIST.filter((s) => selected.has(s.id)),
    [selected]
  );

  const selectedNames = useMemo(
    () => selectedServices.map((s) => s.name),
    [selectedServices]
  );

  // Estimate sprints based on selection
  const estimatedSprints = useMemo(() => {
    if (selected.size === 0) return "0 sprints";
    if (selected.size <= 2) return "2 – 3 sprints";
    if (selected.size <= 4) return "4 – 6 sprints";
    return "6 – 8+ sprints";
  }, [selected.size]);

  const handleStartProject = useCallback(
    (openLead: (payload?: Partial<LeadInput>) => void) => {
      if (selected.size === 0) return;
      openLead({
        source: "services-configurator",
        description: `Configured Architecture Modules: ${selectedNames.join(
          ", "
        )}. Estimated build scale: ${estimatedSprints}.`,
      });
    },
    [selected.size, selectedNames, estimatedSprints]
  );

  return {
    selected,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    toggleService,
    clearSelection,
    resetFilters,
    filteredServices,
    selectedServices,
    selectedNames,
    estimatedSprints,
    handleStartProject,
  };
}
