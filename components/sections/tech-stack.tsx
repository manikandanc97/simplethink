"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TECH_STACK, type Category } from "@/lib/data/tech-stack";
import { SectionHeader } from "@/components/ui/section-header";
import { TechCard } from "./tech-stack-card";
import { TechPerformancePill } from "./tech-stack/tech-performance-pill";
import { TechCategoryTabs } from "./tech-stack/tech-category-tabs";
import { TechValueStrip } from "./tech-stack/tech-value-strip";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<Category>("Frontend & Web");
  const containerRef = useRef<HTMLDivElement>(null);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const tech of TECH_STACK) {
      counts[tech.category] = (counts[tech.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filtered list by active category
  const filtered = useMemo(() => {
    return TECH_STACK.filter((tech) => tech.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section id="tech-stack">
      {/* Decorative dot matrix in corners */}
      <div className="pointer-events-none absolute top-8 left-8 w-32 h-32 hero-dots opacity-40 dark:opacity-20" />
      <div className="pointer-events-none absolute bottom-8 left-8 w-36 h-36 hero-dots opacity-40 dark:opacity-20" />
      <div className="pointer-events-none absolute bottom-8 right-8 w-36 h-36 hero-dots opacity-40 dark:opacity-20" />

      <Container ref={containerRef} className="relative z-10 flex flex-col gap-6 sm:gap-10 lg:gap-12">
        {/* ── Top Header with Floating Performance Pill ──────────────────────── */}
        <div className="relative text-center">
          <TechPerformancePill />

          <SectionHeader
            eyebrow="OUR TECH STACK"
            centered
            title="Modern tools."
            highlightedText="Real results."
            description={
              <>
                Battle-tested tools chosen for reliability, performance, and long-term maintainability —
                <br className="hidden sm:inline" /> not just trends.
              </>
            }
          />
        </div>

        {/* ── Categories + Cards wrapper ────────────────────────────────────── */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* ── Category Pill Tabs with "Tools we love" Handwritten Annotation ──── */}
          <TechCategoryTabs
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            categoryCounts={categoryCounts}
          />

          {/* ── Tech Cards Grid ─────────────────────────────────────────────────── */}
          <div
            role="tabpanel"
            aria-label={`${activeCategory} technologies`}
            className="relative min-h-[260px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ${
                  filtered.length <= 5
                    ? "lg:grid-cols-5"
                    : filtered.length === 6
                    ? "lg:grid-cols-6"
                    : "lg:grid-cols-6"
                } gap-3.5 sm:gap-4`}
              >
                {filtered.map((tech, i) => (
                  <TechCard key={tech.slug} tech={tech} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Bottom Value Proposition Strip (White Floating Island) ──────────── */}
        <TechValueStrip />

        {/* ── Bottom Divider & Editorial Note ─────────────────────────────────── */}
        <div
          className="ts-footer flex items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto w-full px-2"
        >
          <div className="hidden sm:block h-px bg-slate-200/80 dark:bg-border/60 flex-1" />
          <p className="text-xs sm:text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-muted-foreground/60 text-center leading-relaxed">
            We choose tools that fit your project — not the other way around.
          </p>
          <div className="hidden sm:block h-px bg-slate-200/80 dark:bg-border/60 flex-1" />
        </div>
      </Container>
    </Section>
  );
}
