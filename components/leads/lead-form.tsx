"use client";

import {
  AnimatedMail,
  AnimatedMessageSquare,
  AnimatedSend,
} from "@/components/ui/animated-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { submitLead } from "@/lib/leads/actions";
import { type LeadInput, type LeadState, PROJECT_TYPES } from "@/lib/leads/schema";
import { SITE } from "@/config/site";
import { CheckCircle2, Lock, ShieldCheck, ChevronDown, Check } from "lucide-react";
import { useActionState, useState } from "react";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  prefill?: Partial<LeadInput>;
  onSuccess?: () => void;
}

const initialState: LeadState = {
  ok: false,
};

export function LeadForm({ prefill, onSuccess }: LeadFormProps) {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);
  const [selectedProjectType, setSelectedProjectType] = useState<string>(
    prefill?.projectType || "Website"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mountTime] = useState(() => Date.now());

  if (state.ok) {
    onSuccess?.();
    return (
      <div className="py-12 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-foreground font-satoshi">Thanks — we&apos;ve got it.</h3>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          {SITE.responseTime
            ? `We'll review your project and get back to you ${SITE.responseTime}.`
            : "We'll review your project details and get back to you shortly."}
        </p>
      </div>
    );
  }

  const encodedSummary = encodeURIComponent(
    prefill?.description
      ? `Hi SimpleThink, I'm interested in discussing this project: ${prefill.description.slice(0, 100)}...`
      : "Hi SimpleThink, I'd like to discuss a project."
  );

  return (
    <form action={formAction} className="flex flex-col gap-4 text-left font-satoshi">
      {/* Hidden honeypot and anti-spam fields */}
      <div aria-hidden="true" style={{ display: "none" }}>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
        <input type="hidden" name="t" value={mountTime} />
        <input type="hidden" name="source" value={prefill?.source || "contact"} />
        <input type="hidden" name="consent" value="true" />
        {prefill?.blueprintSummary && (
          <input type="hidden" name="blueprintSummary" value={prefill.blueprintSummary} />
        )}
        {prefill?.goal && <input type="hidden" name="goal" value={prefill.goal} />}
        {prefill?.stage && <input type="hidden" name="stage" value={prefill.stage} />}
      </div>

      {/* Global Error Summary */}
      {state.message && !state.ok && (
        <div
          role="alert"
          className="p-3 text-xs sm:text-sm rounded-xl bg-destructive/10 text-destructive border border-destructive/20"
        >
          <p className="font-semibold">{state.message}</p>
          {(SITE.email || SITE.whatsapp) && (
            <div className="mt-2 flex gap-3 text-xs font-semibold">
              {SITE.email && (
                <a href={`mailto:${SITE.email}`} className="underline hover:opacity-80">
                  Email us ({SITE.email})
                </a>
              )}
              {SITE.whatsapp && (
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodedSummary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  WhatsApp
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {/* Project Category Dropdown */}
      <FormField className="relative">
        <FormLabel required>Project Category</FormLabel>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className={cn(
              "w-full h-10 sm:h-10.5 px-3.5 py-2 rounded-xl bg-card border border-border text-xs sm:text-sm font-medium flex items-center justify-between transition-all duration-150 cursor-pointer shadow-2xs hover:border-primary/40 outline-none",
              isDropdownOpen && "border-primary ring-2 ring-primary/15"
            )}
          >
            <div className="flex items-center gap-2.5 truncate">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-foreground font-semibold truncate">
                {selectedProjectType}
              </span>
            </div>
            <ChevronDown
              size={16}
              className={cn(
                "text-muted-foreground transition-transform duration-200 shrink-0",
                isDropdownOpen && "rotate-180 text-primary"
              )}
            />
          </button>

          <input type="hidden" name="projectType" value={selectedProjectType} />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute left-0 right-0 top-full mt-2 bg-card rounded-2xl shadow-elevated border border-border py-1.5 z-40 animate-in fade-in zoom-in-95 duration-150 max-h-64 overflow-y-auto">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedProjectType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setSelectedProjectType(type);
                        setIsDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3.5 py-2.5 text-xs sm:text-sm font-medium flex items-center justify-between hover:bg-muted/60 transition-colors cursor-pointer",
                        isSelected
                          ? "text-primary font-bold bg-primary/5"
                          : "text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={cn(
                            "w-1.5 h-1.5 rounded-full transition-colors",
                            isSelected ? "bg-primary" : "bg-transparent"
                          )}
                        />
                        <span>{type}</span>
                      </div>
                      {isSelected && <Check size={14} className="text-primary" />}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </FormField>

      {/* Name */}
      <FormField>
        <FormLabel htmlFor="lead-name" required>
          Name
        </FormLabel>
        <Input
          id="lead-name"
          name="name"
          required
          defaultValue={prefill?.name || ""}
          placeholder="Enter your full name"
          aria-required="true"
          aria-invalid={Boolean(state.fieldErrors?.name)}
          aria-describedby={state.fieldErrors?.name ? "lead-name-error" : undefined}
        />
        <FormMessage id="lead-name-error">{state.fieldErrors?.name?.[0]}</FormMessage>
      </FormField>

      {/* Email */}
      <FormField>
        <FormLabel htmlFor="lead-email" required>
          Email
        </FormLabel>
        <Input
          id="lead-email"
          name="email"
          type="email"
          required
          defaultValue={prefill?.email || ""}
          placeholder="Enter your email address"
          aria-required="true"
          aria-invalid={Boolean(state.fieldErrors?.email)}
          aria-describedby={state.fieldErrors?.email ? "lead-email-error" : undefined}
        />
        <FormMessage id="lead-email-error">{state.fieldErrors?.email?.[0]}</FormMessage>
      </FormField>

      {/* Phone / WhatsApp & Company (2-col grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField>
          <FormLabel htmlFor="lead-phone">
            WhatsApp / Phone (optional)
          </FormLabel>
          <Input
            id="lead-phone"
            name="phone"
            type="tel"
            defaultValue={prefill?.phone || ""}
            placeholder="WhatsApp or phone"
            aria-invalid={Boolean(state.fieldErrors?.phone)}
            aria-describedby={state.fieldErrors?.phone ? "lead-phone-error" : undefined}
          />
          <FormMessage id="lead-phone-error">{state.fieldErrors?.phone?.[0]}</FormMessage>
        </FormField>

        <FormField>
          <FormLabel htmlFor="lead-company">
            Company (optional)
          </FormLabel>
          <Input
            id="lead-company"
            name="company"
            defaultValue={prefill?.company || ""}
            placeholder="Company name"
            aria-invalid={Boolean(state.fieldErrors?.company)}
            aria-describedby={state.fieldErrors?.company ? "lead-company-error" : undefined}
          />
          <FormMessage id="lead-company-error">{state.fieldErrors?.company?.[0]}</FormMessage>
        </FormField>
      </div>

      {/* Description */}
      <FormField>
        <FormLabel htmlFor="lead-description" required>
          Project description
        </FormLabel>
        <Textarea
          id="lead-description"
          name="description"
          required
          rows={4}
          defaultValue={prefill?.description || ""}
          placeholder="Describe your product goals, architectural challenges, or target timeline..."
          aria-required="true"
          aria-invalid={Boolean(state.fieldErrors?.description)}
          aria-describedby={state.fieldErrors?.description ? "lead-description-error" : undefined}
        />
        <FormMessage id="lead-description-error">{state.fieldErrors?.description?.[0]}</FormMessage>
      </FormField>

      <div className="pt-2 flex flex-col gap-3">
        <Button
          type="submit"
          disabled={isPending}
          className="w-full h-11 text-sm font-bold shadow-elevated gap-2"
        >
          {isPending ? (
            "Sending scoping request..."
          ) : (
            <>
              <span>Send Project Scoping Request</span>
              <AnimatedSend size={16} />
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground text-center font-normal">
          We will review your requirements and provide a structured technical assessment within 24 hours.
        </p>
      </div>

      {/* Enterprise Trust & Security Badges */}
      <div className="pt-4 border-t border-border flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-muted-foreground font-mono">
        <div className="flex items-center gap-1.5">
          <Lock size={13} className="text-emerald-600" />
          <span>256-Bit SSL Encrypted</span>
        </div>
        <span>&bull;</span>
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={13} className="text-primary" />
          <span>Mutual NDA Protected</span>
        </div>
        <span>&bull;</span>
        <span>Zero Spam Guarantee</span>
      </div>

      {/* Alternative direct contacts */}
      {(SITE.whatsapp || SITE.email) && (
        <div className="pt-3 border-t border-border flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>Prefer direct messaging?</span>
          {SITE.whatsapp && (
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodedSummary}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-primary hover:underline font-semibold"
            >
              <AnimatedMessageSquare size={13} className="text-primary" />
              <span>WhatsApp</span>
            </a>
          )}
          {SITE.email && (
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center gap-1.5 text-primary hover:underline font-semibold"
            >
              <AnimatedMail size={13} className="text-primary" />
              <span>Direct Email</span>
            </a>
          )}
        </div>
      )}
    </form>
  );
}
