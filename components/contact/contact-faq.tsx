"use client";

import { useMemo } from "react";
import { CONTACT_FAQS } from "@/lib/data/contact";
import { type FAQItem } from "@/types/faq";
import {
  Clock,
  ShieldCheck,
  CreditCard,
  Code2,
  RefreshCw,
  Sparkles,
} from "lucide-react";

import { SharedFaqSection } from "@/components/shared/faq-section";

export function ContactFaq() {
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
    <SharedFaqSection
      id="contact-faq"
      className="pt-16 sm:pt-20 pb-8 sm:pb-12 border-t border-surface-elevated"
      faqs={formattedFaqs}
      eyebrow="SCOPING FAQ"
      title={<>Engagement & <br /></>}
      highlightedText="Contract Details."
    />
  );
}

