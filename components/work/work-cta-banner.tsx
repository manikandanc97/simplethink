"use client";

import { Send } from "lucide-react";
import { CtaBanner } from "@/components/shared/cta-banner";

export function WorkCtaBanner() {
  return (
    <CtaBanner
      eyebrow="Start Your Project"
      title={
        <>
          Have an ambitious vision? <br className="hidden lg:block" /> Let&apos;s build it right.
        </>
      }
      description="From high-converting websites to custom apps, we're ready to engineer your ideas into reality."
      icon={Send}
      primaryButton={{
        label: "Start a project",
        actionDescription: "Work page CTA: Start a project requested.",
        source: "cta",
      }}
      secondaryButton={{
        label: "Book scoping session",
        actionDescription: "Work page CTA: Book scoping session requested.",
        source: "cta",
      }}
    />
  );
}
