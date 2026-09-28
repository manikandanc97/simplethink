"use client";

import { useLead } from "@/components/leads/lead-provider";
import { SITE } from "@/config/site";
import {
  AnimatedArrowRight,
  AnimatedMail,
  AnimatedMessageSquare,
} from "@/components/ui/animated-icon";

export function AboutCta() {
  const { openLead } = useLead();

  return (
    <div className="pt-6">
      <div className="rounded-3xl border border-[#EFE5EC] bg-[#FAF7FC] p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-[#FFD2E5]/40 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-2xl relative z-10 space-y-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#922F55] block">
            Direct Engineering Line
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#121114] tracking-tight">
            Let&apos;s build something exceptional{" "}
            <span className="text-[#922F55]">together.</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#64606D] leading-relaxed">
            Have an upcoming project, a product to revamp, or a concept to validate? We are available for select client engagements.
          </p>

          {SITE.responseTime && (
            <p className="text-xs font-mono text-[#706B78]">
              Typical response time: {SITE.responseTime}
            </p>
          )}

          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={() => openLead({ source: "about" })}
              className="px-5 py-2.5 rounded-xl bg-[#922F55] hover:bg-[#7e2547] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <span>Start a Project</span>
              <AnimatedArrowRight size={15} />
            </button>

            {SITE.email && (
              <a
                href={`mailto:${SITE.email}`}
                className="px-5 py-2.5 rounded-xl border border-[#EAE3E9] bg-white hover:border-[#922F55]/50 text-[#121114] text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <AnimatedMail size={15} className="text-[#922F55]" />
                <span>Email {SITE.email}</span>
              </a>
            )}

            {SITE.whatsapp && (
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl border border-[#EAE3E9] bg-white hover:border-[#25D366]/50 text-[#121114] text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <AnimatedMessageSquare size={15} className="text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
