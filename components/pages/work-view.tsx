"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { PROJECTS } from "@/lib/data/projects";
import { PROJECT_ENHANCEMENTS } from "@/components/work/work-data";
import { WorkHero } from "@/components/work/work-hero";
import { WorkControls } from "@/components/work/work-controls";
import { WorkProjectCard } from "@/components/work/work-project-card";
import { WorkBrowserFrame } from "@/components/work/work-browser-frame";
import { WorkProjectDetails } from "@/components/work/work-project-details";
import { WorkFullscreenModal } from "@/components/work/work-fullscreen-modal";
import { WorkEngineeringStandards } from "@/components/work/work-engineering-standards";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { Container } from "@/components/ui/container";

function WorkViewContent() {
  const searchParams = useSearchParams();
  const rawServiceParam = searchParams.get("service")?.toLowerCase();

  const [activeFilter, setActiveFilter] = useState<string>(() => {
    if (rawServiceParam === "websites") return "websites";
    if (rawServiceParam === "web-apps") return "web-apps";
    if (rawServiceParam === "mobile-apps") return "mobile-apps";
    return "all";
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<"latest" | "oldest" | "name">("latest");
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS[0]?.id || "proj-valparai");
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState(false);

  // Filter & Sort logic
  const filteredProjects = useMemo(() => {
    let result = [...PROJECTS];

    // Filter by Service Type
    if (activeFilter === "websites") {
      result = result.filter((p) => p.serviceType === "Websites");
    } else if (activeFilter === "web-apps") {
      result = result.filter((p) => p.serviceType === "Web Apps");
    } else if (activeFilter === "mobile-apps") {
      result = result.filter((p) => p.serviceType === "Mobile Apps");
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortOption === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "oldest") {
      result.sort((a, b) => a.number.localeCompare(b.number));
    } else {
      result.sort((a, b) => a.number.localeCompare(b.number));
    }

    return result;
  }, [activeFilter, searchQuery, sortOption]);

  // Active Project & Enhancement Data
  const activeProject =
    filteredProjects.find((p) => p.id === activeProjectId) ||
    PROJECTS.find((p) => p.id === activeProjectId) ||
    filteredProjects[0] ||
    PROJECTS[0];

  const activeEnhancement =
    PROJECT_ENHANCEMENTS[activeProject?.id] || PROJECT_ENHANCEMENTS["proj-valparai"];

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      {/* ── Background Atmospheric Elements ── */}
      <AmbientBackground screen="work" />
      <div className="absolute inset-0 bg-[radial-gradient(#d3ccd8_1px,transparent_1px)] opacity-35 pointer-events-none" />

      {/* ── 1. Hero Section (Breadcrumb, Title, CTAs, Highlights & Interactive Mockup) ── */}
      <WorkHero />

      {/* ── Main Structured Showcase Area ── */}
      <Container
        id="work-projects-container"
        className="relative z-20 pb-16 md:pb-20 lg:pb-24 flex flex-col gap-16 sm:gap-18"
      >
        {/* ── 2. Showcase Controls and Split View (Clean transparent layout without white box or inner side padding) ── */}
        <div className="w-full">
          {/* Top Control Bar: Filters, Search & Sort */}
          <WorkControls
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortOption={sortOption}
            onSortChange={setSortOption}
            allProjects={PROJECTS}
          />

          {/* Split Pane: Left Project List & Right Interactive Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start pt-6 sm:pt-8">
            {/* ── LEFT COLUMN: Project Selector List ── */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-16 px-4 bg-background rounded-2xl border border-dashed border-surface-elevated">
                  <p className="text-sm text-muted-foreground font-medium">
                    No projects found matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setActiveFilter("all");
                      setSearchQuery("");
                    }}
                    className="mt-4 text-xs font-bold text-primary hover:underline cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <WorkProjectCard
                    key={project.id}
                    project={project}
                    isActive={project.id === activeProject?.id}
                    onClick={() => setActiveProjectId(project.id)}
                  />
                ))
              )}
            </div>

            {/* ── RIGHT COLUMN: Active Project Showcase & Details ── */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:sticky lg:top-24">
              {activeProject && (
                <>
                  <WorkBrowserFrame
                    project={activeProject}
                    onOpenFullscreen={() => setIsFullscreenModalOpen(true)}
                  />
                  <WorkProjectDetails
                    project={activeProject}
                    enhancement={activeEnhancement}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── 3. Engineering Quality Standards (4 Pillars) ── */}
        <WorkEngineeringStandards />
      </Container>

      {/* ── Fullscreen Live Iframe Preview Modal ── */}
      <WorkFullscreenModal
        isOpen={isFullscreenModalOpen}
        onClose={() => setIsFullscreenModalOpen(false)}
        project={activeProject}
      />
    </div>
  );
}

export function WorkView() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="w-9 h-9 border-3 border-primary/30 border-t-[var(--primary)] rounded-full animate-spin" />
        </div>
      }
    >
      <WorkViewContent />
    </Suspense>
  );
}
