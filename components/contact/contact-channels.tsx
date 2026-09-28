"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import {
  AnimatedMail,
  AnimatedMessageSquare,
} from "@/components/ui/animated-icon";
import { ArrowRight, Check, Copy } from "lucide-react";

export function ContactChannels() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (SITE.email) {
      navigator.clipboard.writeText(SITE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl border border-[#EFE5EC] bg-[#FAF7FC] space-y-4">
      <div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#922F55]">
          Direct Engineering Channels
        </span>
        <h3 className="text-xl font-bold text-[#121114] tracking-tight mt-0.5">
          Fast Communication
        </h3>
        <p className="text-xs text-[#706B78] mt-1">
          {SITE.responseTime
            ? `Typical reply window: ${SITE.responseTime}`
            : "We respond to all verified inquiries within 24 hours."}
        </p>
      </div>

      <div className="space-y-2.5 pt-1">
        {SITE.email && (
          <div className="flex items-center justify-between p-3.5 rounded-2xl border border-[#EAE3E9] bg-white hover:border-[#922F55]/40 transition-all group">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 flex-1 min-w-0"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF0F6] text-[#922F55] flex items-center justify-center shrink-0">
                <AnimatedMail size={18} />
              </div>
              <div className="truncate">
                <div className="text-[11px] font-mono text-[#706B78]">Direct Email</div>
                <div className="text-xs sm:text-sm font-bold text-[#121114] group-hover:text-[#922F55] transition-colors truncate">
                  {SITE.email}
                </div>
              </div>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              className="p-2 rounded-lg text-[#706B78] hover:text-[#922F55] hover:bg-[#FAF0F6] transition-colors cursor-pointer"
            >
              {copiedEmail ? <Check size={16} className="text-[#922F55]" /> : <Copy size={16} />}
            </button>
          </div>
        )}

        {SITE.whatsapp && (
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl border border-[#EAE3E9] bg-white hover:border-[#25D366]/50 hover:bg-[#FAFDFB] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8F8EE] text-[#25D366] flex items-center justify-center shrink-0">
                <AnimatedMessageSquare size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#706B78]">Instant Messenger</div>
                <div className="text-xs sm:text-sm font-bold text-[#121114] group-hover:text-[#25D366] transition-colors">
                  WhatsApp Consultation
                </div>
              </div>
            </div>
            <ArrowRight size={16} className="text-[#706B78] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" />
          </a>
        )}
      </div>

      {/* Operating Status indicator */}
      <div className="pt-3 border-t border-[#EAE3E9] flex items-center gap-2 text-xs text-[#706B78] font-mono">
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
        <span>{SITE.availability || "Currently accepting select new projects"}</span>
      </div>
    </div>
  );
}
