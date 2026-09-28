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
            {selectedCount > 0 && (
              <button
                type="button"
                onClick={onClearSelection}
                className="text-[11px] font-mono text-[#706B78] hover:text-[#922F55] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <AnimatedRotateCcw size={12} />
                <span>RESET</span>
              </button>
            )}
            <span className="text-[11px] font-mono bg-[#FAF0F6] border border-[#F3DBE9] text-[#922F55] px-2.5 py-0.5 rounded-full font-bold">
              {selectedCount} MODULE{selectedCount !== 1 && "S"}
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
            onClick={onStartProject}
            disabled={selectedCount === 0}
            className={cn(
              "w-full sm:w-auto group/button font-bold text-xs sm:text-sm h-11 sm:h-12 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer",
              selectedCount > 0
                ? "bg-[#922F55] hover:bg-[#7e2547] text-white shadow-[0_8px_20px_rgba(146,47,85,0.25)] hover:-translate-y-0.5"
                : "opacity-45 cursor-not-allowed bg-[#706B78] text-white"
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
