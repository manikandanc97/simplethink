"use client";

import { Send } from "lucide-react";
import { CtaBanner } from "@/components/shared/cta-banner";

export function AboutCta() {
  return (
    <CtaBanner
      eyebrow="Direct Engineering Access"
      title={
        <>
          Ready to build with <br className="hidden lg:block" /> senior engineers?
        </>
      }
      description="Skip the agency bloat. Connect directly with the developers who will ship your software."
      icon={Send}
      primaryButton={{
        label: "Start a project",
        actionDescription: "About page CTA: Start a project requested.",
        source: "about",
      }}
      secondaryButton={{
        label: "Talk to an engineer",
        actionDescription: "About page CTA: Engineering consultation requested.",
        source: "about",
      }}
    />
  );
}
