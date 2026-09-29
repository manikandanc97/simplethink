"use client";

import { useMemo } from "react";
import { type ServiceData } from "@/lib/data/services";
import { type FAQItem } from "@/types/faq";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Activity,
  Award,
  RefreshCw,
} from "lucide-react";

import { SharedFaqSection } from "@/components/shared/faq-section";

interface ServicesFaqSectionProps {
  service: ServiceData;
}

export function ServicesFaqSection({ service }: ServicesFaqSectionProps) {
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
    <SharedFaqSection
      id="faq"
      className="py-12 sm:py-16 lg:py-18 mb-8 sm:mb-12"
      faqs={formattedFaqs}
      defaultOpenId={`${service.id}-faq-0`}
      eyebrow="FAQ"
      title={<>Frequently Asked <br /></>}
      highlightedText="Questions."
      withAmbientDecor
    />
  );
}
