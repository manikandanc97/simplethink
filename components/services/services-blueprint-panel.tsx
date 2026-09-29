"use client";

import { AnimatedRotateCcw, AnimatedArrowRight } from "@/components/ui/animated-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type ServiceItem } from "@/types/service";
import { BlueprintCanvas } from "./blueprint-canvas";

interface ServicesBlueprintPanelProps {
  selectedServices: ServiceItem[];
  selectedCount: number;
  estimatedSprints: string;
  onClearSelection: () => void;
  onStartProject: () => void;
}

export function ServicesBlueprintPanel({
  selectedServices,
  selectedCount,
  estimatedSprints,
  onClearSelection,
  onStartProject,
}: ServicesBlueprintPanelProps) {
  return (
    <div className="lg:col-span-7 flex flex-col gap-6 lg:sticky lg:top-24">
      <div className="rounded-3xl border border-[var(--surface-elevated)] bg-white overflow-hidden flex flex-col shadow-card">
        {/* Canvas Header / Browser Frame Bar */}
        <div className="p-4 sm:p-5 border-b border-[var(--surface-elevated)] flex items-center justify-between bg-[var(--background)]">
          <div className="flex items-center gap-3">
            {/* Frame Dots */}
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="h-4 w-px bg-[var(--surface-elevated)] mx-1" />
            <span className="font-mono text-xs font-bold text-foreground">
              System Architecture Canvas
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {selectedCount > 0 && (
              <button
                type="button"
                onClick={onClearSelection}
                className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
              >
                <AnimatedRotateCcw size={12} />
                <span>RESET</span>
              </button>
            )}
            <span className="text-xs font-mono bg-[var(--background)] border border-[var(--surface-elevated)] text-primary px-2.5 py-0.5 rounded-full font-bold">
              {selectedCount} MODULE{selectedCount !== 1 && "S"}
            </span>
          </div>
        </div>

        {/* Dynamic Blueprint Area */}
        <div
          className="flex-1 relative overflow-y-auto min-h-[340px] sm:min-h-[400px] bg-[var(--background)]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #922F55 0.75px, transparent 0.75px)",
            backgroundSize: "20px 20px",
          }}
        >
          {/* Subtle vignette mask */}
          <div className="absolute inset-0 bg-[var(--background)] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] pointer-events-none opacity-40" />

          <div className="relative z-10 w-full h-full">
            <BlueprintCanvas selectedServices={selectedServices} />
          </div>
        </div>

        {/* Scope & Sprint Estimation Bar */}
        <div className="p-4 sm:p-5 border-t border-[var(--surface-elevated)] bg-[var(--background)]/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div>
              <div className="text-xs font-mono uppercase text-muted-foreground font-bold">
                Estimated Sprint Scale
              </div>
              <div className="text-sm font-bold text-foreground">
                {estimatedSprints}
              </div>
            </div>
            <div className="h-6 w-px bg-[var(--surface-elevated)]" />
            <div>
              <div className="text-xs font-mono uppercase text-muted-foreground font-bold">
                Lead Architect
              </div>
              <div className="text-sm font-bold text-primary">
                Direct In-House
              </div>
            </div>
          </div>

          <Button
            onClick={onStartProject}
            disabled={selectedCount === 0}
            className={cn(
              "w-full sm:w-auto group/button font-bold text-xs sm:text-sm h-11 sm:h-12 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer",
              selectedCount > 0
                ? "bg-primary hover:bg-[var(--primary-hover)] text-white shadow-elevated hover:-translate-y-0.5"
                : "opacity-45 cursor-not-allowed bg-[var(--muted-foreground)] text-white"
            )}
          >
            <span>Initialize Project Scope</span>
            {selectedCount > 0 && <AnimatedArrowRight size={15} />}
          </Button>
        </div>
      </div>
    </div>
  );
}
