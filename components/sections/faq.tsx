"use client";

import { FAQS } from "@/lib/data/faq";

import { SharedFaqSection } from "@/components/shared/faq-section";

export function FAQ() {
  return (
    <SharedFaqSection
      id="faq"
      className="py-8 sm:py-8 lg:py-16"
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

