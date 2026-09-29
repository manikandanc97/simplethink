import React from "react";
import { type AnimatedIconName } from "./types";

/* ─────────────────────────────────────────────────────────────
   Solid Icon Components (For active state in navigation menus)
───────────────────────────────────────────────────────────── */

function SolidHomeIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.291 3.472a1 1 0 0 1 1.418 0l7.291 6.25A1 1 0 0 1 20.35 11H20v8a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-8h-.35a1 1 0 0 1-.65-1.278l7.291-6.25z" />
    </svg>
  );
}

function SolidBriefcaseIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 2a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2h-4zm4 4V4h-4v2h4z" />
    </svg>
  );
}

function SolidLayersIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
      <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.738a.75.75 0 0 1 0 1.322l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.322l1.372-.737Z" />
      <path d="M3.265 15.602l7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.738a.75.75 0 0 1 0 1.322l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.322l1.372-.737Z" />
    </svg>
  );
}

function SolidLightbulbIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.123 1.135 1.915V19.5a2.25 2.25 0 0 0 2.25 2.25h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.445c.02-.792.449-1.517 1.135-1.915A8.25 8.25 0 0 0 12 .75Zm-2.25 22.5a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75Z" />
    </svg>
  );
}

function SolidInfoIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.8 5.5a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0zM10.8 11a1 1 0 0 1 1-1H12a1 1 0 0 1 1 1v4.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75V12h-.2a1 1 0 0 1-1-1z" />
    </svg>
  );
}

function SolidMailIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );
}

function SolidContactCardIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm8 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-4.5 9a4.5 4.5 0 0 1 9 0H7.5zM7 2a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1zm10 0a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1z" />
    </svg>
  );
}

export const SOLID_ICON_MAP: Partial<Record<AnimatedIconName, React.ComponentType<{ size?: number; className?: string }>>> = {
  home: SolidHomeIcon,
  briefcase: SolidBriefcaseIcon,
  layers: SolidLayersIcon,
  lightbulb: SolidLightbulbIcon,
  info: SolidInfoIcon,
  contact: SolidContactCardIcon,
  mail: SolidMailIcon,
};

export const solidVariants = {
  normal: { scale: 1, rotate: 0 },
  animate: {
    scale: [1, 1.25, 0.92, 1.1, 1],
    rotate: [0, -6, 6, -2, 0],
    transition: { duration: 0.65, ease: "easeInOut" as const },
  },
};
