"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SITE } from "@/config/site";
import { LeadForm } from "@/components/leads/lead-form";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { ContactHero } from "@/components/contact/contact-hero";
import {
  AnimatedMail,
  AnimatedMessageSquare,
} from "@/components/ui/animated-icon";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronDown,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    number: "01",
    title: "Technical Scoping & Review",
    time: "Within 24 Hours",
    description:
      "We review your product requirements, target audience, and architecture constraints to evaluate technical feasibility.",
  },
  {
    number: "02",
    title: "Architecture & Roadmap Session",
    time: "30-Min Call",
    description:
      "A direct conversation with a lead software architect. No salespeople. We align on database schemas, APIs, and sprint milestones.",
  },
  {
    number: "03",
    title: "Fixed Milestone Proposal",
    time: "48-Hour Delivery",
    description:
      "You receive a comprehensive statement of work with exact sprint deliverables, timeline, and transparent fixed milestone pricing.",
  },
];

const FAQS = [
  {
    question: "How fast can we kick off a build?",
    answer:
      "Most projects can begin within 3 to 7 business days following our initial technical scoping session and architectural sign-off.",
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer:
      "Yes, absolutely. We regularly sign mutual NDAs before reviewing proprietary requirements, codebases, or patent-pending architectures.",
  },
  {
    question: "How do you handle pricing and contracts?",
    answer:
      "We operate primarily on clear milestone-based fixed scope contracts or dedicated weekly engineering sprints, ensuring full transparency with zero hidden fees.",
  },
  {
    question: "What core tech stack do you work with?",
    answer:
      "We specialize in modern fullstack TypeScript (Next.js, React, React Native / Expo), scalable backend services (FastAPI, Node.js, Python), and battle-tested databases (PostgreSQL, Supabase, Redis, AWS).",
  },
  {
    question: "Can you modernize or rebuild an existing product?",
    answer:
      "Yes. We frequently help companies refactor sluggish legacy apps, migrate monolithic backends to modern cloud microservices, and overhaul outdated UX/UI with sub-second performance.",
  },
];

export function ContactView() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCopyEmail = () => {
    if (SITE.email) {
      navigator.clipboard.writeText(SITE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FAF7FC] text-[#121114] overflow-hidden pt-28 sm:pt-36 pb-28">
      {/* ── Background Atmospheric Elements (Screen-Specific) ── */}
      <AmbientBackground screen="contact" />
      <div className="absolute inset-0 bg-[radial-gradient(#d3ccd8_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* ── Contact Hero ── */}
      <ContactHero />

      {/* ── Main Showcase Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] sm:rounded-[40px] border border-[#EFE5EC] shadow-[0_24px_64px_-16px_rgba(146,47,85,0.08),0_4px_24px_rgba(0,0,0,0.02)] p-5 sm:p-7 lg:p-9 space-y-14">
          
          {/* ── Main Split Grid: Direct Channels & Scoping Stepper (5) + Form (7) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ── LEFT COLUMN: Channels & Stepper ── */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Communication Channels */}
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

              {/* What Happens Next? 3-Step Process */}
              <div className="p-6 sm:p-7 rounded-3xl border border-[#EFE5EC] bg-white space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#922F55]">
                    Roadmap & Expectations
                  </span>
                  <h3 className="text-lg font-bold text-[#121114] tracking-tight mt-0.5">
                    What Happens Next?
                  </h3>
                </div>

                <div className="space-y-4 pt-1">
                  {STEPS.map((step) => (
                    <div key={step.number} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#FAF0F6] border border-[#F3DBE9] text-[#922F55] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-[#121114]">
                            {step.title}
                          </h4>
                          <span className="text-[10px] font-mono font-bold text-[#922F55] shrink-0">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-xs text-[#64606D] mt-0.5 leading-snug">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#F5EDF3] flex items-center gap-2 text-xs text-[#706B78]">
                  <ShieldCheck size={16} className="text-[#922F55] shrink-0" />
                  <span>Mutual NDA signed prior to code audits or proprietary disclosures.</span>
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN: Interactive Lead Form ── */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#EFE5EC] bg-white p-6 sm:p-8 lg:p-9 shadow-[0_12px_32px_rgba(0,0,0,0.02)]">
                <div className="mb-6 space-y-1.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#922F55] block">
                    Inquiry Form
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#121114]">
                    Start a Technical{" "}
                    <span className="relative inline-block text-[#922F55]">
                      Conversation
                      <svg
                        className="absolute -bottom-1 left-0 w-full h-2 text-[#D8287A] overflow-visible pointer-events-none"
                        viewBox="0 0 160 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.5C50 2 110 2 158 5"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#64606D] leading-relaxed">
                    Tell us about your product goals, desired timeline, or architectural requirements. We will review and provide a structured technical assessment.
                  </p>
                </div>

                <LeadForm />
              </div>
            </div>

          </div>

          {/* ── Frequently Asked Scoping Questions ── */}
          <div className="pt-10 border-t border-[#EFE5EC]">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#922F55] uppercase block mb-1">
                Scoping & Engagement FAQ
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#121114] tracking-tight">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-[#EFE5EC] rounded-2xl bg-white/70 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaqIndex(isOpen ? null : index)
                      }
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7FC] transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#121114]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={cn(
                          "text-[#706B78] transition-transform duration-300 shrink-0",
                          isOpen && "rotate-180 text-[#922F55]"
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 text-xs sm:text-sm text-[#64606D] leading-relaxed border-t border-[#F5EDF3]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
