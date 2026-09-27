"use client";

import { useLead } from "@/components/leads/lead-provider";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { PlayIcon } from "@animateicons/react/lucide/play-icon";
import { AnimatedIcon, AnimatedArrowRight } from "@/components/ui/animated-icon";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO_CONTENT } from "@/lib/data/hero";
import { Hero3DCoder } from "./hero-3d-coder";
import { HeroGridAccents } from "./hero-grid-accents";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function WorkbenchHero() {
  const { openLead } = useLead();
  const heroRef = useRef<HTMLElement>(null);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("capabilities") || document.getElementById("what-we-build");
    if (nextSection) {
      const offset = 80;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
    }
  };

  useGSAP(() => {
    const root = heroRef.current;
    if (!root) return;

    const line1 = root.querySelector<HTMLElement>(".hero-line-1");
    const line2 = root.querySelector<HTMLElement>(".hero-line-2");
    const desc = root.querySelector<HTMLElement>(".hero-desc");
    const cta = root.querySelector<HTMLElement>(".hero-cta");
    const artwork = root.querySelector<HTMLElement>(".hero-artwork");
    const scroll = root.querySelector<HTMLElement>(".hero-scroll");

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        gsap.set([line1, line2, desc, cta, artwork, scroll].filter(Boolean), {
          clearProps: "transform,opacity,scale",
        });
      },
    });

    if (line1) tl.fromTo(line1, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, 0.05);
    if (line2) tl.fromTo(line2, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, 0.18);
    if (desc) tl.fromTo(desc, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.3);
    if (cta) tl.fromTo(cta, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.42);
    if (artwork) tl.fromTo(artwork, { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.0 }, 0.15);
    if (scroll) tl.fromTo(scroll, { y: -8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 1.0);
  }, { scope: heroRef });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-0 lg:min-h-screen pt-24 sm:pt-28 lg:pt-36 pb-8 sm:pb-12 flex flex-col items-center justify-between overflow-hidden"
    >
      {/* Background Elements */}
      <HeroGridAccents />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
          
          {/* LEFT: Text Content */}
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col items-start text-left max-w-xl z-10 gap-6 sm:gap-10">
            <div className="flex flex-col gap-4 sm:gap-6">

            {/* Pill Tag */}
            

            {/* Headline */}
            <h1 
              className="font-satoshi font-extrabold tracking-tighter text-[#121114] leading-[1.08] sm:leading-none text-4xl xs:text-5xl sm:text-6xl lg:text-7xl flex flex-col gap-1.5 sm:gap-2"
            >
              <span className="block hero-line-1">{HERO_CONTENT.headlineLine1}</span>
              <span className="block relative inline-block hero-line-2">
                {HERO_CONTENT.headlineLine2Prefix}
                <span className="relative inline-block brand-gradient-text">
                  {HERO_CONTENT.headlineHighlight}
                  {/* Hand-drawn style SVG underline stroke */}
                  <svg 
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-3.5 text-[#922F55] overflow-visible pointer-events-none" 
                    viewBox="0 0 240 24" 
                    fill="none" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M4 14 C60 4, 150 6, 230 12" 
                      stroke="currentColor" 
                      strokeWidth="4.5" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M40 18 C105 13, 175 14, 215 17" 
                      stroke="#D23D78" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeOpacity="0.85" 
                    />
                    <path 
                      d="M224 8 L234 12 L227 18" 
                      stroke="#6C2BB8" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Paragraph */}
            <p
              className="hero-desc type-lead text-muted-foreground max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              {HERO_CONTENT.description}
            </p>
            </div>

            <div className="flex flex-col gap-8 sm:gap-14 w-full">
            {/* CTA Buttons */}
            <div
              className="hero-cta flex flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto font-satoshi"
            >
              <Button
                id="hero-start-project"
                onClick={() => openLead({ source: "cta" })}
                size="lg"
                className="group rounded-full shadow-[0_6px_20px_rgba(146,47,85,0.25)] h-12 sm:h-12 w-auto justify-center px-5 sm:px-8"
              >
                <span className="text-sm sm:text-base whitespace-nowrap">Start a project</span>
                <AnimatedArrowRight size={16} className="text-white ml-1 shrink-0" />
              </Button>
              
              <button
                type="button"
                className="group flex items-center justify-start gap-2.5 sm:gap-3.5 hover:opacity-85 transition-opacity py-1 w-auto"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-sm border border-[rgba(30,24,30,0.08)] text-[#121114] group-hover:scale-105 transition-transform pl-0.5 shrink-0">
                  <AnimatedIcon icon={PlayIcon} size={13} className="fill-current" />
                </div>
                <div className="flex flex-col text-left shrink-0">
                  <span className="text-[13px] sm:text-base font-bold text-[#121114] leading-tight tracking-tight whitespace-nowrap">See our work</span>
                  <span className="text-[10px] sm:text-xs font-medium text-[#68666C] mt-0.5 whitespace-nowrap">2 min overview</span>
                </div>
              </button>
            </div>

            </div>
          </div>

          {/* RIGHT: 3D Character & Floating UI Cards */}
          <div
            className="hero-artwork lg:col-span-7 xl:col-span-6 flex justify-center items-center w-full relative min-h-64 sm:min-h-96"
          >
            <Hero3DCoder />
          </div>
          
        </div>
      </div>
      
      {/* Interactive scroll indicator button */}
      <button
        type="button"
        id="hero-scroll-indicator"
        aria-label="Scroll down to explore capabilities"
        onClick={handleScrollDown}
        className="hero-scroll group relative mt-6 lg:mt-0 lg:absolute lg:bottom-4 left-auto lg:left-1/2 lg:-translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-slate-400 hover:text-foreground cursor-pointer focus:outline-none transition-all select-none"
      >
        <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
          scroll
        </span>
        <div
          className="w-4 h-4 rounded-full border-[1.5px] border-slate-300 group-hover:border-primary/50 flex items-center justify-center transition-colors animate-bounce"
        >
          <AnimatedIcon icon={ChevronDownIcon} size={12} className="h-2.5 w-2.5 text-slate-400 group-hover:text-primary transition-colors" />
        </div>
      </button>
    </section>
  );
}

