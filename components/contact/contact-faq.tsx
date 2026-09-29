"use client";

import { useState, useMemo } from "react";
import { CONTACT_FAQS } from "@/lib/data/contact";
import { type FAQItem } from "@/types/faq";
import { SectionHeader } from "@/components/ui/section-header";
import { FaqContactCard } from "@/components/sections/faq/faq-contact-card";
import { FaqAccordionItem } from "@/components/sections/faq/faq-accordion-item";
import {
  Clock,
  ShieldCheck,
  CreditCard,
  Code2,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export function ContactFaq() {
  const [openId, setOpenId] = useState<string | null>("contact-faq-0");

  const toggle = (id: string) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  const formattedFaqs: FAQItem[] = useMemo(() => {
    const icons = [Clock, ShieldCheck, CreditCard, Code2, RefreshCw];
    const highlightSets = [
      [
        { text: "3-7 Days Kickoff", icon: Clock },
        { text: "Rapid Onboarding", icon: Sparkles },
      ],
      [
        { text: "Mutual NDA Signed", icon: ShieldCheck },
        { text: "100% Confidential", icon: ShieldCheck },
      ],
      [
        { text: "Fixed Milestones", icon: CreditCard },
        { text: "Zero Hidden Fees", icon: Sparkles },
      ],
      [
        { text: "TypeScript & Next.js", icon: Code2 },
        { text: "Supabase & Cloud", icon: Sparkles },
      ],
      [
        { text: "Full Code Audit", icon: RefreshCw },
        { text: "Modern Migration", icon: Sparkles },
      ],
    ];

    return CONTACT_FAQS.map((faq, idx) => ({
      id: `contact-faq-${idx}`,
      num: String(idx + 1).padStart(2, "0"),
      category: "SCOPING & ENGAGEMENT",
      icon: icons[idx % icons.length],
      question: faq.question,
      answer: faq.answer,
      highlights: highlightSets[idx % highlightSets.length],
    }));
  }, []);

  return (
    <section id="contact-faq" className="relative scroll-mt-24 pt-14 sm:pt-20 pb-8 sm:pb-12 border-t border-[var(--surface-elevated)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
        {/* ── Left Column (5 Cols) — Sticky on lg ── */}
        <div className="lg:col-span-5 flex flex-col justify-start gap-5 sm:gap-6 lg:sticky lg:top-32">
          <SectionHeader
            eyebrow="SCOPING FAQ"
            title={<>Engagement & <br /></>}
            highlightedText="Contract Details."
            className="items-start text-left mx-0"
            maxWidth="max-w-md"
          />

          <FaqContactCard />
        </div>

        {/* ── Right Column (7 Cols) — FAQ Accordion List ── */}
        <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4 pt-0 lg:pt-1">
          {formattedFaqs.map((faq) => (
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
