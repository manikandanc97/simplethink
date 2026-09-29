"use client";

import { type Project } from "@/types/project";
import { Lock, Maximize2 } from "lucide-react";
import { LockIcon } from "@animateicons/react/lucide/lock-icon";
import { ExternalLinkIcon } from "@animateicons/react/lucide/external-link-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatePresence, motion } from "motion/react";

export function BrowserMockup({ activeProject }: { activeProject: Project }) {
  return (
    <div className="relative w-full rounded-2xl shadow-card border border-slate-200/90 bg-white overflow-hidden flex flex-col z-20">
      {/* Browser Window Header Chrome */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[var(--background)] rounded-t-2xl border-b border-slate-200/80 select-none">
        {/* 3 Traffic Dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-black/10 shadow-xs" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-black/10 shadow-xs" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-black/10 shadow-xs" />
        </div>
        
        {/* Centered Address Pill with Green Lock */}
        <div className="flex-1 flex justify-center px-2 min-w-0">
          <a
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-1.5 bg-white border border-slate-200 shadow-xs rounded-md px-2.5 sm:px-3.5 py-1 text-xs sm:text-xs font-medium text-slate-600 min-w-0 max-w-[150px] xs:max-w-[200px] sm:max-w-sm truncate hover:border-slate-300 hover:text-slate-900 transition-colors cursor-pointer group"
            title={`Visit ${activeProject.domain}`}
          >
            <AnimatedIcon icon={LockIcon} size={12} className="text-emerald-500 shrink-0" />
            <span className="truncate">{activeProject.domain}</span>
            <AnimatedIcon icon={ExternalLinkIcon} size={10} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5 shrink-0" />
          </a>
        </div>
        
        {/* Right Maximize Icon */}
        <div className="w-8 sm:w-10 flex justify-end shrink-0">
          <a 
            href={activeProject.url} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-slate-400 hover:text-slate-700 transition-colors p-1"
          >
            <Maximize2 size={13} />
          </a>
        </div>
      </div>
        
      {/* Browser Viewport Area (Render Authentic High-End Mockup Hero) */}
      <div className="sw-viewport relative w-full aspect-square sm:aspect-[16/10] overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="sw-mockup-content absolute inset-0 w-full h-full bg-white will-change-transform"
          >
            {activeProject.serviceType === "Websites" && activeProject.url ? (
              <div className="absolute inset-0 w-full h-full sm:w-[200%] sm:h-[200%] origin-top-left sm:scale-50">
                <iframe 
                  src={activeProject.url}
                  title={activeProject.name}
                  className="w-full h-full border-none pointer-events-auto"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            ) : activeProject.image ? (
              <div className="relative w-full h-full bg-[var(--foreground)] flex items-center justify-center overflow-hidden group/thumb">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 blur-2xl scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${activeProject.image})` }}
                />
                <img
                  src={activeProject.image}
                  alt={`${activeProject.name} Screenshot`}
                  className="relative z-10 w-full h-full object-cover transition-transform duration-500 ease-out group-hover/thumb:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none z-10" />
                <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white/90 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-medium">{activeProject.serviceType} Screenshot</span>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 w-full h-full bg-slate-50 flex flex-col items-center justify-center p-6 text-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-slate-300" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                    Building in Stealth
                  </h3>
                  <p className="text-sm sm:text-sm text-slate-500 max-w-72 sm:max-w-xs leading-relaxed">
                    This {activeProject.serviceType.toLowerCase().replace('s', '')} is currently under active development in our lab.
                  </p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200 text-xs font-bold tracking-wide uppercase shadow-sm">
                  Preview Coming Soon
                </span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
