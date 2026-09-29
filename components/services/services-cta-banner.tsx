"use client";

import { Send } from "lucide-react";
import { CtaBanner } from "@/components/shared/cta-banner";

export function ServicesCtaBanner() {
  return (
    <CtaBanner
      eyebrow="Ready to build?"
      title={
        <>
          Know what you need? <br className="hidden lg:block"/> Let&apos;s scope it properly.
        </>
      }
      description="Tell us what you're trying to build, improve or automate. We'll help define the right direction."
      icon={Send}
      primaryButton={{
        label: "Start a project",
        actionDescription: "Ready to build: Scope definition requested.",
        source: "services-configurator",
      }}
      secondaryButton={{
        label: "Tell us what you need",
        actionDescription: "Tell us what you need custom request.",
        source: "services-configurator",
      }}
    />
  );
}
