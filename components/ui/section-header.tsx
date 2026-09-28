"use client";

import { cn } from "@/lib/utils";
import { useRef, useId } from "react";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  highlightedText?: string;
  description?: React.ReactNode;
  className?: string;
  maxWidth?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  highlightedText,
  description,
  className,
  maxWidth = "max-w-3xl",
  centered = false,
}: SectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  // Unique ID per instance
  const uid = useId().replace(/:/g, "-");

  return (
    <div
      ref={headerRef}
      className={cn(
        maxWidth,
        "flex flex-col gap-4 font-satoshi",
        centered ? "mx-auto text-center items-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <div
          data-sh-id={`${uid}-eyebrow`}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-border shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary inline-block" />
          <span className="type-label font-extrabold tracking-wide text-foreground/90 uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      <div className="overflow-hidden pb-1 -mb-1 w-full">
        <h2
          data-sh-id={`${uid}-title`}
          className="type-h2 text-foreground will-change-transform"
        >
          {title}
          {highlightedText && (
            <>
              {" "}
              <span className="relative inline-block brand-gradient-text pb-1">
                {highlightedText}
                <svg
                  data-sh-id={`${uid}-svg`}
                  className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-3 text-primary overflow-visible pointer-events-none"
                  viewBox="0 0 200 20"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M4 12 C50 4, 130 5, 195 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  <path d="M30 15 C90 11, 150 12, 185 14" stroke="#D23D78" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />
                </svg>
              </span>
            </>
          )}
        </h2>
      </div>

      {description && (
        <p
          data-sh-id={`${uid}-desc`}
          className="type-lead text-muted-foreground"
        >
          {description}
        </p>
      )}
    </div>
  );
}
