"use client";

import { BarChart3, ShieldCheck, Star, Users } from "lucide-react";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";;
import { type Project } from "@/types/project";
import { type EnhancedProjectDetails } from "./work-data";

interface WorkProjectDetailsProps {
  project: Project;
  enhancement: EnhancedProjectDetails;
}

export function WorkProjectDetails({ project, enhancement }: WorkProjectDetailsProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* ── Stats Bar (4 Metric Cards in a Row) ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
        {enhancement.metrics.map((m, idx) => {
          let IconComponent = BarChart3;
          if (m.iconType === "users") IconComponent = Users;
          if (m.iconType === "star") IconComponent = Star;
          if (m.iconType === "shield") IconComponent = ShieldCheck;

          return (
            <div
              key={idx}
              className="p-4 sm:p-4.5 rounded-2xl bg-[var(--background)] border border-[var(--surface-elevated)] flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--primary)]/15 to-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shrink-0">
                <IconComponent size={16} />
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-extrabold text-foreground leading-tight truncate">
                  {m.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium truncate">
                  {m.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Project Overview ── */}
      <div className="pt-1 flex flex-col gap-1.5">
        <h4 className="text-sm sm:text-base font-bold text-foreground">
          Project Overview
        </h4>
        <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
          {enhancement.overview}
        </p>
      </div>

      {/* ── Tech Stack Row ── */}
      <div className="pt-1 flex flex-col gap-2.5">
        <div className="text-xs font-semibold text-foreground">
          Tech Stack
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {enhancement.techStack.map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--background)] border border-[var(--surface-elevated)] text-xs font-medium text-[var(--foreground)] shadow-sm hover:border-[var(--primary)]/30 transition-colors"
            >
              <tech.icon className="w-3.5 h-3.5" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Project Action Row ── */}
      <div className="pt-2 flex items-center justify-between border-t border-[var(--surface-elevated)]">
        {project.serviceType === "Websites" && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold shadow-md shadow-[var(--primary)]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Visit Live Website</span>
            <AnimatedArrowRight size={15} />
          </a>
        ) : project.serviceType === "Web Apps" && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--chart-2)] hover:bg-[var(--chart-2)] text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-900/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Launch Web App Portal</span>
            <AnimatedArrowRight size={15} />
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--surface-elevated)] text-xs font-semibold text-[var(--muted-foreground)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{project.serviceType} Project Showcase</span>
          </div>
        )}

        <span className="text-xs text-muted-foreground font-mono">
          {project.domain || project.serviceType}
        </span>
      </div>
    </div>
  );
}
