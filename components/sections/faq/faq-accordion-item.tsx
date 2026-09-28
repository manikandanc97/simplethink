"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { type FAQItem } from "@/types/faq";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { AnimatePresence, motion } from "motion/react";

interface FaqAccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqAccordionItem({
  faq,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  const Icon = faq.icon;

  return (
    <div
      className={`faq-item group rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-white dark:bg-zinc-900 border-[1.5px] border-rose-300/80 dark:border-rose-500/50 shadow-[0_12px_35px_rgba(244,63,94,0.12)]"
          : "bg-white dark:bg-zinc-900 border border-transparent dark:border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.06)]"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-2.5 sm:gap-3 p-3.5 sm:p-4 text-left cursor-pointer outline-none"
      >
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          {/* Number Box */}
          <div
            className={`shrink-0 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-colors duration-300 ${
              isOpen
                ? "bg-rose-50 dark:bg-rose-950/50 text-[#e11d48] dark:text-rose-400"
                : "bg-[#f4f4f6] dark:bg-zinc-800/60 text-[#1e1b4b] dark:text-zinc-300 group-hover:bg-[#f0f0f4]"
            }`}
          >
            {faq.num}
          </div>

          {/* Tag + Question */}
          <div className="flex flex-col gap-0.5 sm:gap-1 flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <Icon className="w-3 h-3 text-[#db2777] dark:text-pink-500" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#db2777] dark:text-pink-500">
                {faq.category}
              </span>
            </div>
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-zinc-900 dark:text-white leading-snug">
              {faq.question}
            </h3>
          </div>
        </div>

        {/* Dropdown Chevron */}
        <div
          className={`shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all duration-300 shadow-sm ${
            isOpen
              ? "bg-white dark:bg-zinc-800 border-rose-200 dark:border-rose-900/50 text-[#e11d48] dark:text-rose-400 rotate-180 shadow-rose-100/50"
              : "bg-white dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 text-zinc-700 dark:text-zinc-400 shadow-zinc-100/50"
          }`}
        >
          <AnimatedIcon icon={ChevronDownIcon} size={16} className="w-4 h-4 stroke-[2.5]" />
        </div>
      </button>

      {/* Answer Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <motion.div 
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 px-4 pb-4 pt-0 sm:pl-16 lg:pl-20 sm:pr-6"
            >
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {faq.answer}
              </p>

              {faq.highlights && faq.highlights.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {faq.highlights.map((hl, i) => {
                    const HlIcon = hl.icon;
                    return (
                      <div
                        key={i}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-100/80 dark:border-rose-900/40 text-rose-950 dark:text-rose-200 text-[11px] sm:text-xs font-semibold"
                      >
                        <HlIcon className="w-3.5 h-3.5 text-[#e11d48] dark:text-rose-500" />
                        <span>{hl.text}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
