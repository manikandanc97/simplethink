"use client";

import { cn } from "@/lib/utils";
import { useRef, useId } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

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
  // Unique ID per instance — prevents GSAP from selecting elements
  // from OTHER SectionHeaders that share the same class names on the page
  const uid = useId().replace(/:/g, "-");

  useGSAP(() => {
    const root = headerRef.current;
    if (!root) return;

    const eyebrowEl = root.querySelector<HTMLElement>(`[data-sh-id="${uid}-eyebrow"]`);
    const titleEl = root.querySelector<HTMLElement>(`[data-sh-id="${uid}-title"]`);
    const descEl = root.querySelector<HTMLElement>(`[data-sh-id="${uid}-desc"]`);

    if (!titleEl) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 88%",
        once: true,
      },
      onComplete: () => {
        gsap.set([eyebrowEl, titleEl, descEl].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    if (eyebrowEl) {
      tl.fromTo(eyebrowEl, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 0);
    }

    tl.fromTo(titleEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" }, eyebrowEl ? 0.1 : 0);

    if (descEl) {
      tl.fromTo(descEl, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, eyebrowEl ? 0.28 : 0.18);
    }
  }, { scope: headerRef, dependencies: [] });

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

      <h2
        data-sh-id={`${uid}-title`}
        className="type-h2 text-foreground"
      >
        {title}
        {highlightedText && (
          <>
            {" "}
            <span className="relative inline-block brand-gradient-text pb-1">
              {highlightedText}
              <svg
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
