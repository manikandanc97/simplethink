"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES_FAQS } from "@/lib/data/services-faq";

function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-[var(--surface-elevated)] rounded-2xl bg-white/70 overflow-hidden transition-all">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--background)] transition-colors"
      >
        <span className="text-sm sm:text-base font-bold text-foreground">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-muted-foreground transition-transform duration-300 shrink-0",
            isOpen && "rotate-180 text-primary"
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
            <div className="p-5 pt-0 text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed border-t border-[var(--background)]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServicesFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="mt-14 pt-10 border-t border-[var(--surface-elevated)]">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
          Frequently Asked Questions
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
          Clear Answers on Scoping & Delivery
        </h3>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {SERVICES_FAQS.map((faq, index) => (
          <FaqAccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFaqIndex === index}
            onToggle={() =>
              setOpenFaqIndex(openFaqIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
}
