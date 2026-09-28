/**
 * Standardized Motion System for SimpleThink
 * Editorial, Cinematic, Premium, Smooth, Spatial, Connected, Intentional
 * Single Scroll Motion Language:
 * - Primary scrub: 0.6
 * - Slower cinematic sections: 0.8
 * - Ambient background movement: 1.0
 */

export const SCROLL_EASE = {
  primary: 0.6,
  cinematic: 0.8,
  ambient: 1.0,
} as const;

export const MOTION_EASE = {
  // Ultra-smooth deceleration for entrances & masked reveals
  expoOut: "power4.out",
  smoothOut: "power3.out",
  gentleOut: "power2.out",
  editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
  none: "none",
  inOut: "power2.inOut",
} as const;

export const MOTION_DURATION = {
  micro: 0.25,
  fast: 0.45,
  standard: 0.65,
  card: 0.75,
  editorial: 0.85,
  hero: 1.0,
} as const;

/**
 * Check if the user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Check if screen is mobile (< 768px)
 */
export function isMobileScreen(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

/**
 * Safely reset elements so they are permanently visible
 */
export function ensureVisible(elements: (Element | null | undefined)[]) {
  const valid = elements.filter(Boolean);
  if (valid.length > 0) {
    valid.forEach((el) => {
      if (el && el instanceof HTMLElement) {
        el.style.opacity = "";
        el.style.transform = "";
        el.style.scale = "";
        el.style.clipPath = "";
        el.style.visibility = "";
      }
    });
  }
}

