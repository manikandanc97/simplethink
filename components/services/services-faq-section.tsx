"use client";

import { useState, useEffect, useMemo } from "react";
import { type ServiceDetailItem } from "@/lib/data/services-page-data";
import { type FAQItem } from "@/types/faq";
import { SectionHeader } from "@/components/ui/section-header";
import { FaqContactCard } from "@/components/sections/faq/faq-contact-card";
import { FaqAccordionItem } from "@/components/sections/faq/faq-accordion-item";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Activity,
  Award,
  RefreshCw,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesFaqSectionProps {
  service: ServiceDetailItem;
}

export function ServicesFaqSection({ service }: ServicesFaqSectionProps) {
  // Open the first question by default for the active service
  const [openId, setOpenId] = useState<string | null>(() => `${service.id}-faq-0`);

  useEffect(() => {
    setOpenId(`${service.id}-faq-0`);
  }, [service.id]);

  const toggle = (id: string) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  // Convert service.faqs into full FAQItem format matching Home Page FAQ design
  const formattedFaqs: FAQItem[] = useMemo(() => {
    const highlightSets = [
      [
        { text: "Agile Sprints", icon: Activity },
        { text: "Clear Milestones", icon: CheckCircle2 },
      ],
      [
        { text: "Zero Lock-in", icon: ShieldCheck },
        { text: "Seamless APIs", icon: Zap },
      ],
      [
        { text: "Full Access Control", icon: ShieldCheck },
        { text: "Enterprise Ready", icon: Award },
      ],
      [
        { text: "30-Day Warranty", icon: Award },
        { text: "Continuous DevOps", icon: RefreshCw },
      ],
    ];

    return service.faqs.map((faq, idx) => ({
      id: `${service.id}-faq-${idx}`,
      num: String(idx + 1).padStart(2, "0"),
      category: service.name.toUpperCase(),
      icon: service.icon,
      question: faq.question,
      answer: faq.answer,
      highlights: highlightSets[idx % highlightSets.length],
    }));
  }, [service]);

  return (
    <section id="faq" className="relative scroll-mt-24 py-12 sm:py-16 lg:py-18 mb-8 sm:mb-12">
      {/* ── Ambient Background Accents Matching Home Page FAQ ── */}
      <div className="faq-accent-decor absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
        {/* Top-left dot grid */}
        <div className="absolute top-10 left-4 sm:left-8 grid grid-cols-4 gap-2 opacity-25">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
          ))}
        </div>

        {/* Right edge dot grid */}
        <div className="absolute top-1/3 right-2 sm:right-6 grid grid-cols-4 gap-2 opacity-20">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
          ))}
        </div>

        {/* Top-right diagonal accent lines */}
        <div className="absolute top-8 right-12 flex gap-1.5 rotate-[35deg] opacity-60">
          <div className="w-0.5 h-3.5 bg-[var(--primary)] rounded-full" />
          <div className="w-0.5 h-4.5 bg-[var(--primary)] rounded-full -translate-y-1" />
          <div className="w-0.5 h-3.5 bg-[var(--primary)] rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
        {/* ── Left Column (5 Cols) — Sticky on lg ── */}
        <div className="lg:col-span-5 flex flex-col justify-start gap-6 sm:gap-6 lg:sticky lg:top-32">
          {/* Top Info Header */}
          <SectionHeader
            eyebrow="FAQ"
            title={<>Frequently Asked <br /></>}
            highlightedText="Questions."
            className="items-start text-left mx-0"
            maxWidth="max-w-md"
          />

          {/* Bottom Composite Card Component (Single Unified Card containing CTA, 3D Character & Stats) */}
          <FaqContactCard />
        </div>

        {/* ── Right Column (7 Cols) — FAQ Accordion List (Dynamic per Service) ── */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-4 pt-0 lg:pt-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="flex flex-col gap-4 sm:gap-4 w-full"
            >
              {formattedFaqs.map((faq) => (
                <FaqAccordionItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => toggle(faq.id)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
