"use client";

import { StepVisualBlueprint } from "./visuals/step-visual-blueprint";
import { StepVisualDesign } from "./visuals/step-visual-design";
import { StepVisualEngineering } from "./visuals/step-visual-engineering";
import { StepVisualLaunch } from "./visuals/step-visual-launch";

export function StepVisual({ activeStepIndex }: { activeStepIndex: number }) {
  return (
    <div className="hww-visual lg:col-span-6 relative flex items-end justify-center w-full">
      {/* Soft Radial Ambient Behind Graphic */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-72 sm:h-80 bg-gradient-to-tr from-pink-300/25 via-purple-200/20 to-rose-300/25 rounded-full blur-3xl" />

      {activeStepIndex === 0 && <StepVisualBlueprint />}
      {activeStepIndex === 1 && <StepVisualDesign />}
      {activeStepIndex === 2 && <StepVisualEngineering />}
      {activeStepIndex === 3 && <StepVisualLaunch />}
    </div>
  );
}
