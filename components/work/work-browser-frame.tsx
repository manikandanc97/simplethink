"use client";

import { useEffect, useState } from "react";
import { LockIcon } from "@animateicons/react/lucide/lock-icon";
import { Maximize2, Image as ImageIcon } from "lucide-react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatePresence, motion } from "motion/react";
import { type Project } from "@/types/project";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface WorkBrowserFrameProps {
  project: Project;
  onOpenFullscreen: () => void;
}

export function WorkBrowserFrame({ project, onOpenFullscreen }: WorkBrowserFrameProps) {
  const isWebsite = project.serviceType === "Websites" && Boolean(project.url);
  const [viewMode, setViewMode] = useState<"live" | "screenshot">("live");

  // Keep viewMode synced: live for websites, screenshot for others
  useEffect(() => {
    setViewMode(isWebsite ? "live" : "screenshot");
  }, [project.id, isWebsite]);

  return (
    <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-surface-elevated bg-white shadow-card flex flex-col">
      {/* ── Browser Header Bar ── */}
      <div className="h-12 sm:h-14 bg-[#F8F9FA] dark:bg-background border-b border-surface-elevated px-3.5 sm:px-4 flex items-center justify-between select-none gap-2 relative">
        {/* Left: Mac 3 dots & Lock Icon */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 w-[80px] sm:w-[120px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-black/10 shadow-xs" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-black/10 shadow-xs" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-black/10 shadow-xs" />
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.domain || project.name}`}
            className="hidden xs:flex items-center justify-center bg-white border border-border shadow-sm rounded-md w-9 h-7 hover:bg-gray-50 transition-colors"
            title={`Visit ${project.domain || project.name}`}
          >
            <AnimatedIcon icon={LockIcon} size={14} className="text-emerald-500" />
          </a>
        </div>

        {/* Center: Live / Screenshot Toggle */}
        <div className="flex-1 flex justify-center min-w-0">
          {isWebsite ? (
            <div className="flex items-center bg-[var(--surface-elevated)] p-1 rounded-full text-xs sm:text-sm font-semibold shadow-inner">
              <button
                type="button"
                onClick={() => setViewMode("live")}
                className={cn(
                  "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full transition-all cursor-pointer",
                  viewMode === "live"
                    ? "bg-white text-emerald-700 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
                title="Live interactive website"
              >
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500" />
                </span>
                <span>Live Site</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("screenshot")}
                className={cn(
                  "flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full transition-all cursor-pointer",
                  viewMode === "screenshot"
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
                title="View high-res screenshot"
              >
                <ImageIcon size={14} />
                <span>Screenshot</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-xs sm:text-sm font-bold text-purple-700">
              <ImageIcon size={14} className="text-purple-600 shrink-0" />
              <span>Screenshot</span>
            </div>
          )}
        </div>

        {/* Right Controls: Fullscreen */}
        <div className="flex items-center justify-end shrink-0 w-[80px] sm:w-[120px]">
          <button
            type="button"
            onClick={onOpenFullscreen}
            aria-label="Expand Preview"
            title="Expand Fullscreen"
            className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-md hover:bg-[var(--surface-elevated)] cursor-pointer"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>

      {/* ── Browser Viewport: Live Preview or Screenshot ── */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[var(--foreground)]">
        <AnimatePresence mode="wait">
          {viewMode === "live" && isWebsite ? (
            <motion.div
              key={`${project.id}-live`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-white"
            >
              <div className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50">
                <iframe
                  src={project.url}
                  title={project.name}
                  className="w-full h-full border-none pointer-events-auto"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`${project.id}-screenshot`}
              initial={{ opacity: 0, scale: 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              onClick={onOpenFullscreen}
              className="group/viewport absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer select-none bg-[var(--foreground)] overflow-hidden"
            >
              {/* Ambient Glow Backdrop from image */}
              {project.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 blur-2xl scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              )}

              {/* Main Screenshot Image */}
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.name} Screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="relative z-10 object-cover transition-transform duration-500 ease-out group-hover/viewport:scale-[1.02]"
                />
              ) : (
                <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center text-white/70">
                  <ImageIcon size={32} className="mb-2 opacity-50" />
                  <p className="text-sm font-medium">Screenshot preview available soon</p>
                </div>
              )}

              {/* Subtle Dark Vignette on Edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none z-10" />

              {/* Bottom Tag: Service Tag & Fullscreen prompt */}
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-xs text-white/90 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="font-medium">{project.serviceType} Screenshot</span>
              </div>

              <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 hover:bg-white text-foreground text-xs font-bold shadow-md backdrop-blur-sm transition-all hover:scale-105 active:scale-95">
                <Maximize2 size={11} />
                <span>View Full Size</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
