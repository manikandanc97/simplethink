"use client";

import { useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { FAQS } from "@/lib/data/faq";
import { FaqContactCard } from "./faq/faq-contact-card";
import { FaqAccordionItem } from "./faq/faq-accordion-item";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-pricing");
  const containerRef = useRef<HTMLElement>(null);

  const toggle = (id: string) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  return (
    <section id="faq" ref={containerRef} className="relative scroll-mt-24 py-12 sm:py-16 lg:py-24">
      {/* Ambient background glows */}
      <div className="faq-accent-decor absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Top-left dot grid */}
        <div className="absolute top-12 left-6 sm:left-12 grid grid-cols-4 gap-2.5 opacity-35">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]" />
          ))}
        </div>

        {/* Right edge dot grid */}
        <div className="absolute top-1/3 right-4 sm:right-10 grid grid-cols-4 gap-2.5 opacity-30">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]" />
          ))}
        </div>

        {/* Top-right diagonal accent lines */}
        <div className="absolute top-10 right-16 flex gap-1.5 rotate-[35deg] opacity-75">
          <div className="w-0.5 h-4 bg-[#f43f5e] rounded-full" />
          <div className="w-0.5 h-5 bg-[#f43f5e] rounded-full -translate-y-1" />
          <div className="w-0.5 h-4 bg-[#f43f5e] rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
        {/* Left Column (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-start gap-5 sm:gap-6 lg:sticky lg:top-32">
          {/* Top Info */}
          <SectionHeader
            eyebrow="FAQ"
            title={<>Frequently Asked <br/></>}
            highlightedText="Questions."
            description="Honest answers to common questions founders and teams ask before building with us."
            className="items-start text-left mx-0"
            maxWidth="max-w-md"
          />

          {/* Bottom Composite Card Component (Single Unified Card containing CTA, Character & Stats) */}
          <FaqContactCard />
        </div>

        {/* Right Column (7 Cols) - FAQ Accordion List */}
        <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4 pt-0 lg:pt-1">
          {FAQS.map((faq) => (
            <FaqAccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
