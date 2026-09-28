"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { ServicesHero } from "@/components/services/services-hero";
import { useServicesConfigurator } from "@/hooks/use-services-configurator";
import { ServicesFilterBar } from "@/components/services/services-filter-bar";
import { ServicesCapabilitiesList } from "@/components/services/services-capabilities-list";
import { ServicesBlueprintPanel } from "@/components/services/services-blueprint-panel";
import { ServicesStandards } from "@/components/services/services-standards";
import { ServicesFaq } from "@/components/services/services-faq";

export function ServicesView() {
  const { openLead } = useLead();
  const {
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
    estimatedSprints,
    handleStartProject,
  } = useServicesConfigurator();

  return (
    <div className="relative min-h-screen w-full bg-[#FAF7FC] text-[#121114] overflow-hidden pt-28 sm:pt-36 pb-28">
      {/* ── Background Atmospheric Elements (Screen-Specific) ── */}
      <AmbientBackground screen="services" />
      <div className="absolute inset-0 bg-[radial-gradient(#d3ccd8_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* ── Hero Section (Badges, Title, Floating Stickers) ── */}
      <ServicesHero />

      {/* ── Main Showcase Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] sm:rounded-[40px] border border-[#EFE5EC] shadow-[0_24px_64px_-16px_rgba(146,47,85,0.08),0_4px_24px_rgba(0,0,0,0.02)] p-5 sm:p-7 lg:p-9">
          
          {/* ── Top Controls: Category Tabs & Search ── */}
          <ServicesFilterBar
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCount={selected.size}
          />

          {/* ── Split Pane: Left Capabilities List (5) & Right Interactive Blueprint (7) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-start pt-6 sm:pt-8">
            <ServicesCapabilitiesList
              services={filteredServices}
              selected={selected}
              onToggleService={toggleService}
              onClearAll={clearSelection}
              onResetFilters={resetFilters}
            />

            <ServicesBlueprintPanel
              selectedServices={selectedServices}
              selectedCount={selected.size}
              estimatedSprints={estimatedSprints}
              onClearSelection={clearSelection}
              onStartProject={() => handleStartProject(openLead)}
            />
          </div>

          {/* ── Middle Section: Engineering Standards & Guarantees ── */}
          <ServicesStandards />

          {/* ── Bottom Section: Scoping FAQ Accordion ── */}
          <ServicesFaq />

        </div>
      </div>
    </div>
  );
}
