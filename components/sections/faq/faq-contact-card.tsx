"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedArrowRight } from "@/components/ui/animated-icon";
import { CldImage } from "next-cloudinary";

export function FaqContactCard() {
  const { openLead } = useLead();

  return (
    <div className="relative mt-2 sm:mt-6 pt-8 lg:pt-10">
      {/* 1. "Still have a question?" Handwritten note & curved arrow */}
      <div className="absolute -top-5 left-1 sm:left-2 z-20 flex items-start gap-1 pointer-events-none select-none">
        <span className="font-['Caveat',cursive] italic text-xl sm:text-2xl text-slate-700 dark:text-zinc-300 font-bold rotate-[-8deg] leading-tight block">
          Still have a<br />question?
        </span>
        <svg 
          width="44" 
          height="38" 
          viewBox="0 0 54 46" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="text-[#db2777] -mt-1 -ml-1"
        >
          <path 
            d="M6 14C16 3 32 2 40 14C45 22 44 32 41 40" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
          />
          <path 
            d="M34 33L41 41L48 34" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      {/* 2. Main Outer White Card */}
      <div className="faq-card relative z-10 w-full max-w-[22rem] sm:max-w-md bg-white dark:bg-zinc-900 rounded-[1.5rem] sm:rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(244,63,94,0.06),_0_0_1px_1px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-rose-50/60 dark:border-white/10 overflow-visible">
        
        {/* Upper Content Area: Left CTA + Right 3D Character */}
        <div className="relative min-h-[10rem] sm:min-h-[12rem]">
          
          {/* Left: Text & CTA Button */}
          <div className="relative z-10 max-w-[60%] sm:max-w-56 lg:max-w-[55%] flex flex-col items-start gap-2.5 sm:gap-3">
            <div className="flex flex-col items-start gap-1.5 sm:gap-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:py-1 rounded-full bg-rose-50/80 dark:bg-rose-950/40 border border-rose-100/80 dark:border-rose-900/40">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#db2777]">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  <circle cx="9" cy="12" r="1" fill="currentColor"/>
                  <circle cx="12" cy="12" r="1" fill="currentColor"/>
                  <circle cx="15" cy="12" r="1" fill="currentColor"/>
                </svg>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#db2777]">We&apos;re here to help</span>
              </div>

              <div className="flex flex-col gap-1">
                {/* Heading */}
                <h3 className="text-sm xs:text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Can&apos;t find your answer?
                </h3>

                {/* Subtitle */}
                <p className="text-[10px] xs:text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 leading-relaxed pr-1 sm:pr-2">
                  Talk to our team and get a clear answer for your requirement.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => openLead({ description: "FAQ - Technical Consultation" })}
              className="inline-flex mt-0.5 sm:mt-1 items-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-[#922F55] hover:bg-[#7D2748] text-white text-[11px] sm:text-sm font-bold shadow-[0_4px_14px_rgba(146,47,85,0.25)] hover:shadow-[0_6px_20px_rgba(146,47,85,0.35)] active:scale-95 transition-all duration-200 cursor-pointer group shrink-0"
            >
              <span>Talk to our team</span>
              <AnimatedArrowRight size={13} className="ml-0.5 text-white" />
            </button>
          </div>

          {/* Right: 3D Character Sitting with Laptop */}
          <div className="absolute -right-2 sm:-right-6 lg:-right-4 -top-8 sm:-top-10 lg:-top-10 w-32 xs:w-36 sm:w-[13.5rem] lg:w-[45%] pointer-events-none select-none z-10">
            {/* 3 accent lines radiating from hair */}
            <div className="absolute -top-1 sm:-top-2 right-4 flex gap-1.5 rotate-[35deg]">
              <div className="w-0.5 h-2.5 sm:h-3 bg-[#f43f5e] rounded-full" />
              <div className="w-0.5 h-3 sm:h-4 bg-[#f43f5e] rounded-full -translate-y-1" />
              <div className="w-0.5 h-2.5 sm:h-3 bg-[#f43f5e] rounded-full" />
            </div>

            <CldImage
              src="simpluxe/faq/simplefaq"
              alt="Technical Lead with laptop"
              width={400}
              height={480}
              sizes="(max-width: 640px) 150px, 220px"
              className="w-full h-auto object-contain drop-shadow-[0_12px_25px_rgba(244,63,94,0.12)]"
            />
          </div>

        </div>

        {/* Bottom: Stats Panel (Full-width rounded card with dividers) */}
        <div className="relative z-20 mt-3 sm:mt-4 bg-white/95 dark:bg-zinc-800/80 backdrop-blur-sm rounded-[0.8rem] p-2 border border-zinc-100 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] grid grid-cols-3 divide-x divide-zinc-100 dark:divide-zinc-700/60 text-center sm:text-left">
          <div className="px-1.5 sm:px-2">
            <div className="text-xs sm:text-sm font-extrabold text-[#be123c] dark:text-rose-400">100%</div>
            <div className="text-[9px] xs:text-[10px] font-medium text-slate-500 dark:text-zinc-400 mt-0.5">
              Honest Answers
            </div>
          </div>
          <div className="px-1.5 sm:px-2">
            <div className="text-xs sm:text-sm font-extrabold text-[#be123c] dark:text-rose-400">Usually</div>
            <div className="text-[9px] xs:text-[10px] font-medium text-slate-500 dark:text-zinc-400 mt-0.5">
              Within a Few Hours
            </div>
          </div>
          <div className="px-1.5 sm:px-2">
            <div className="text-xs sm:text-sm font-extrabold text-[#be123c] dark:text-rose-400">Zero</div>
            <div className="text-[9px] xs:text-[10px] font-medium text-slate-500 dark:text-zinc-400 mt-0.5">
              Sales Pressure
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
