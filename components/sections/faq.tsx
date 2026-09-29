"use client";

import { FAQS } from "@/lib/data/faq";

import { SharedFaqSection } from "@/components/shared/faq-section";

export function FAQ() {
  return (
    <SharedFaqSection
      id="faq"
      className="py-12 sm:py-16 lg:py-24"
      faqs={FAQS}
      defaultOpenId="faq-pricing"
      eyebrow="FAQ"
      title={<>Frequently Asked <br/></>}
      highlightedText="Questions."
      description="Honest answers to common questions founders and teams ask before building with us."
      withAmbientDecor
    />
  );
}

