"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CATEGORY_ORDER,
  SERVICES_LIST,
} from "@/lib/data/services";
import { type ServiceItem, type ServiceCategory } from "@/types/service";
import { useLead } from "@/components/leads/lead-provider";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { ServicesHero } from "@/components/services/services-hero";
import { Button } from "@/components/ui/button";
import {
  AnimatedArrowRight,
  AnimatedRotateCcw,
} from "@/components/ui/animated-icon";
import {
  Check,
  Plus,
  Terminal,
  Search,
  Sparkles,
  Zap,
  ShieldCheck,
  Code2,
  Users,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Node on the live blueprint canvas
function BlueprintNode({ service }: { service: ServiceItem }) {
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

// Architecture blueprint canvas
function BlueprintCanvas({ selectedServices }: { selectedServices: ServiceItem[] }) {
  const grouped = selectedServices.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceItem[]>);

  if (selectedServices.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
        <div className="w-14 h-14 rounded-2xl bg-[#FAF0F6] border border-[#F3DBE9] flex items-center justify-center mb-4 text-[#922F55]">
          <Terminal className="w-6 h-6 text-[#922F55]" />
        </div>
        <h3 className="text-base font-bold text-[#121114] mb-1.5">
          Awaiting Module Selection
        </h3>
        <p className="text-xs sm:text-sm text-[#706B78] max-w-xs leading-relaxed">
          Select capabilities from the left library to dynamically visualize your project architecture.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 py-6 px-3">
      {CATEGORY_ORDER.map((category) => {
        const servicesInCategory = grouped[category];
        if (!servicesInCategory || servicesInCategory.length === 0) return null;

        return (
          <div key={category} className="w-full max-w-md flex flex-col items-center">
            {/* Category Ribbon */}
            <div className="text-[11px] font-mono font-bold text-[#922F55] uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-[#922F55]/30" />
              {category} Layer
              <span className="w-6 h-px bg-[#922F55]/30" />
            </div>

            {/* Nodes */}
            <div className="flex flex-wrap justify-center gap-3 w-full">
              <AnimatePresence mode="popLayout">
                {servicesInCategory.map((service: ServiceItem) => (
                  <BlueprintNode key={service.id} service={service} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Scoping FAQ item component
function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-[#EFE5EC] rounded-2xl bg-white/70 overflow-hidden transition-all">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7FC] transition-colors"
      >
        <span className="text-sm sm:text-base font-bold text-[#121114]">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-[#706B78] transition-transform duration-300 shrink-0",
            isOpen && "rotate-180 text-[#922F55]"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-xs sm:text-sm text-[#64606D] leading-relaxed border-t border-[#F5EDF3]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServicesView() {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(["websites", "web-apps"])
  );
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openLead } = useLead();

  const toggleService = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelected(next);
  };

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

  const selectedServices = SERVICES_LIST.filter((s) => selected.has(s.id));
  const selectedNames = selectedServices.map((s) => s.name);

  // Estimate sprints based on selection
  const estimatedSprints = useMemo(() => {
    if (selected.size === 0) return "0 sprints";
    if (selected.size <= 2) return "2 – 3 sprints";
    if (selected.size <= 4) return "4 – 6 sprints";
    return "6 – 8+ sprints";
  }, [selected.size]);

  const handleStartProject = () => {
    if (selected.size === 0) return;
    openLead({
      source: "services-configurator",
      description: `Configured Architecture Modules: ${selectedNames.join(
        ", "
      )}. Estimated build scale: ${estimatedSprints}.`,
    });
  };

  const FAQS = [
    {
      question: "How do you scope and price custom projects?",
      answer:
        "We operate on fixed-milestone sprint pricing. After reviewing your requirements and architecture diagram, we provide a crystal-clear statement of work detailing timeline, deliverables, and cost with zero hidden fees.",
    },
    {
      question: "Can I start with one module and scale later?",
      answer:
        "Yes, our modular architecture is built specifically for incremental scaling. You can start with a Core Web Interface, then add SaaS multi-tenancy, mobile applications, or AI automations seamlessly.",
    },
    {
      question: "Who owns the code and intellectual property?",
      answer:
        "You do. You receive 100% full ownership of all source code, design systems, repository commits, and infrastructure configurations upon project completion.",
    },
    {
      question: "What does post-launch support look like?",
      answer:
        "Every build includes a 30-day post-launch warranty with bug fixes and telemetry monitoring. Afterward, we offer dedicated monthly engineering retainers or on-demand sprint reserves.",
    },
  ];

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
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#EFE5EC]">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
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
                  onClick={() => setActiveCategory(cat)}
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
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-[#FAF7FC] rounded-full border border-[#EAE3E9] focus:outline-none focus:border-[#922F55] focus:ring-1 focus:ring-[#922F55] text-[#121114] placeholder:text-[#706B78]"
                />
              </div>

              {selected.size > 0 && (
                <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF0F6] border border-[#F3DBE9] text-[11px] font-mono font-bold text-[#922F55]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8287A] animate-pulse" />
                  {selected.size} active
                </span>
              )}
            </div>
          </div>

          {/* ── Split Pane: Left Capabilities List (5) & Right Interactive Blueprint (7) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-start pt-6 sm:pt-8">
            
            {/* ── LEFT COLUMN: Capabilities Library ── */}
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
                    onClick={() => setSelected(new Set())}
                    className="text-xs font-bold text-[#922F55] hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {filteredServices.length === 0 ? (
                <div className="text-center py-14 px-4 bg-[#FBF9FB] rounded-2xl border border-dashed border-[#EAE3E9]">
                  <p className="text-sm text-[#706B78] font-medium">
                    No capabilities match your search.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setSearchQuery("");
                    }}
                    className="mt-3 text-xs font-bold text-[#922F55] hover:underline cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                filteredServices.map((service) => {
                  const isSelected = selected.has(service.id);
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.id}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isSelected}
                      onClick={() => toggleService(service.id)}
                      onKeyDown={(e) => {
                        if (e.key === " " || e.key === "Enter") {
                          e.preventDefault();
                          toggleService(service.id);
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

            {/* ── RIGHT COLUMN: Interactive Architecture Blueprint Canvas ── */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-[#EFE5EC] bg-white overflow-hidden flex flex-col shadow-[0_12px_32px_rgba(0,0,0,0.03)]">
                
                {/* Canvas Header / Browser Frame Bar */}
                <div className="p-4 sm:p-5 border-b border-[#EFE5EC] flex items-center justify-between bg-[#FAF7FC]">
                  <div className="flex items-center gap-3">
                    {/* Frame Dots */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="h-4 w-px bg-[#EAE3E9] mx-1" />
                    <span className="font-mono text-xs font-bold text-[#121114]">
                      System Architecture Canvas
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {selected.size > 0 && (
                      <button
                        type="button"
                        onClick={() => setSelected(new Set())}
                        className="text-[11px] font-mono text-[#706B78] hover:text-[#922F55] transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <AnimatedRotateCcw size={12} />
                        <span>RESET</span>
                      </button>
                    )}
                    <span className="text-[11px] font-mono bg-[#FAF0F6] border border-[#F3DBE9] text-[#922F55] px-2.5 py-0.5 rounded-full font-bold">
                      {selected.size} MODULE{selected.size !== 1 && "S"}
                    </span>
                  </div>
                </div>

                {/* Dynamic Blueprint Area */}
                <div
                  className="flex-1 relative overflow-y-auto min-h-[340px] sm:min-h-[400px] bg-[#FAF8FB]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, #922F55 0.75px, transparent 0.75px)",
                    backgroundSize: "20px 20px",
                  }}
                >
                  {/* Subtle vignette mask */}
                  <div className="absolute inset-0 bg-[#FAF8FB] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] pointer-events-none opacity-40" />

                  <div className="relative z-10 w-full h-full">
                    <BlueprintCanvas selectedServices={selectedServices} />
                  </div>
                </div>

                {/* Scope & Sprint Estimation Bar */}
                <div className="p-4 sm:p-5 border-t border-[#EFE5EC] bg-[#FAF7FC]/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#706B78] font-bold">
                        Estimated Sprint Scale
                      </div>
                      <div className="text-sm font-bold text-[#121114]">
                        {estimatedSprints}
                      </div>
                    </div>
                    <div className="h-6 w-px bg-[#EAE3E9]" />
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#706B78] font-bold">
                        Lead Architect
                      </div>
                      <div className="text-sm font-bold text-[#922F55]">
                        Direct In-House
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleStartProject}
                    disabled={selected.size === 0}
                    className={cn(
                      "w-full sm:w-auto group/button font-bold text-xs sm:text-sm h-11 sm:h-12 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer",
                      selected.size > 0
                        ? "bg-[#922F55] hover:bg-[#7e2547] text-white shadow-[0_8px_20px_rgba(146,47,85,0.25)] hover:-translate-y-0.5"
                        : "opacity-45 cursor-not-allowed bg-[#706B78] text-white"
                    )}
                  >
                    <span>Initialize Project Scope</span>
                    {selected.size > 0 && <AnimatedArrowRight size={15} />}
                  </Button>
                </div>
              </div>
            </div>

          </div>

          {/* ── Middle Section: Engineering Standards & Guarantees ── */}
          <div className="mt-14 pt-10 border-t border-[#EFE5EC]">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#922F55] uppercase block mb-1.5">
                Technical Rigor
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#121114] tracking-tight">
                The SimpleThink Engineering Standard
              </h3>
              <p className="text-xs sm:text-sm text-[#64606D] mt-2">
                Every project, regardless of tier, is delivered with production-ready benchmarks built in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl border border-[#EFE5EC] bg-white/70 hover:bg-white hover:shadow-xs transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F6] text-[#922F55] flex items-center justify-center mb-3">
                  <Zap size={20} />
                </div>
                <h4 className="text-sm font-bold text-[#121114] mb-1">
                  Sub-Second Speed
                </h4>
                <p className="text-xs text-[#64606D] leading-relaxed">
                  Lighthouse 95+ scores, edge caching, zero layout shifts, and rapid hydration on every build.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-[#EFE5EC] bg-white/70 hover:bg-white hover:shadow-xs transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F6] text-[#922F55] flex items-center justify-center mb-3">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-sm font-bold text-[#121114] mb-1">
                  Enterprise Security
                </h4>
                <p className="text-xs text-[#64606D] leading-relaxed">
                  OWASP Top 10 mitigation, strict CSP, secure auth sessions, and encrypted database connections.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-[#EFE5EC] bg-white/70 hover:bg-white hover:shadow-xs transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F6] text-[#922F55] flex items-center justify-center mb-3">
                  <Code2 size={20} />
                </div>
                <h4 className="text-sm font-bold text-[#121114] mb-1">
                  100% IP Ownership
                </h4>
                <p className="text-xs text-[#64606D] leading-relaxed">
                  Zero vendor lock-in. Full access to repositories, documentation, and cloud infrastructure you own.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-[#EFE5EC] bg-white/70 hover:bg-white hover:shadow-xs transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F6] text-[#922F55] flex items-center justify-center mb-3">
                  <Users size={20} />
                </div>
                <h4 className="text-sm font-bold text-[#121114] mb-1">
                  Direct Senior Access
                </h4>
                <p className="text-xs text-[#64606D] leading-relaxed">
                  Direct Slack/WhatsApp line with the principal developers building your codebase. No juniors.
                </p>
              </div>
            </div>
          </div>

          {/* ── Bottom Section: Scoping FAQ Accordion ── */}
          <div className="mt-14 pt-10 border-t border-[#EFE5EC]">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#922F55] uppercase block mb-1">
                Frequently Asked Questions
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#121114] tracking-tight">
                Clear Answers on Scoping & Delivery
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {FAQS.map((faq, index) => (
                <FaqAccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onToggle={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
