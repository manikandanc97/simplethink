import { useLead } from "@/components/leads/lead-provider";
import { type LeadInput } from "@/lib/leads/schema";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { Button } from "@/components/ui/button";
import { type LucideIcon } from "lucide-react";
import React from "react";

interface CtaBannerProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  icon: LucideIcon;
  primaryButton: {
    label: string;
    actionDescription: string;
    source: string;
  };
  secondaryButton: {
    label: string;
    actionDescription: string;
    source: string;
  };
}

export function CtaBanner({
  eyebrow,
  title,
  description,
  icon: Icon,
  primaryButton,
  secondaryButton,
}: CtaBannerProps) {
  const { openLead } = useLead();

  return (
    <div className="w-full relative z-20 mb-12 sm:mb-16 mt-8 sm:mt-12">
      <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-card text-foreground border border-border shadow-card hover:shadow-elevated transition-shadow duration-300 flex flex-col xl:flex-row xl:items-center justify-between gap-6 sm:gap-8 overflow-hidden text-left">
        {/* ── Brand Ambient Warm Glows & Top Highlight ── */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-primary/15 via-[#6C2BB8]/10 to-transparent blur-3xl opacity-70" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/10 via-[#6C2BB8]/8 to-transparent blur-3xl opacity-60" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* ── Subtle Theme Dot Pattern ── */}
        <div className="absolute inset-0 hero-dots opacity-40 pointer-events-none" />

        {/* ── Left Side: Icon + Headline + Subtitle ── */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 max-w-xl relative z-10">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-[#7D2748] flex items-center justify-center shrink-0 shadow-elevated ring-1 ring-white/20">
            <Icon size={24} className="text-white rotate-[-15deg] translate-x-0.5" />
          </div>

          <div className="flex flex-col items-start pt-0 sm:pt-1">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary font-satoshi mb-1.5 sm:mb-2 block">
              {eyebrow}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground tracking-tight font-satoshi leading-tight mb-2 sm:mb-3">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-normal max-w-md">
              {description}
            </p>
          </div>
        </div>

        {/* ── Right Side: Dual Action Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 relative z-10 shrink-0 w-full xl:w-auto mt-4 xl:mt-0">
          <Button
            onClick={() =>
              openLead({
                source: primaryButton.source as LeadInput["source"],
                description: primaryButton.actionDescription,
              })
            }
            className="w-full sm:w-auto"
          >
            <span>{primaryButton.label}</span>
            <AnimatedArrowRight size={14} />
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              openLead({
                source: secondaryButton.source as LeadInput["source"],
                description: secondaryButton.actionDescription,
              })
            }
            className="w-full sm:w-auto"
          >
            <span>{secondaryButton.label}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
