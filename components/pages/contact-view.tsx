import { AmbientBackground } from "@/components/ui/ambient-background";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactChannels } from "@/components/contact/contact-channels";
import { ContactProcess } from "@/components/contact/contact-process";
import { ContactFaq } from "@/components/contact/contact-faq";
import { LeadForm } from "@/components/leads/lead-form";

export function ContactView() {
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
              <ContactChannels />
              <ContactProcess />
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
          <ContactFaq />

        </div>
      </div>
    </div>
  );
}
