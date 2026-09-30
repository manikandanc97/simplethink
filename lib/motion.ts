import { Variants } from "motion/react";

// ==========================================
// MOTION TIMING & EASING SYSTEM
// ==========================================
export const ease = {
  // Premium smooth ease-out (fast out, slow in)
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Smooth symmetric ease (slow out, slow in)
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  // For dramatic large visual transitions
  smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

/**
 * Check if the user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const timing = {
  micro: 0.2, // 0.15s - 0.2s
  small: 0.3, // 0.2s - 0.3s
  reveal: 0.6, // 0.45s - 0.7s
  section: 0.8, // 0.6s - 0.9s
  large: 1.0, // 0.8s - 1.2s
};

export const spring = {
  // Physical UI interactions, layout transitions
  snappy: { type: "spring" as const, stiffness: 400, damping: 30 },
  // Smooth continuous UI motion
  smooth: { type: "spring" as const, stiffness: 100, damping: 20 },
  // Slow spring for floating / deep spatial elements
  float: { type: "spring" as const, stiffness: 50, damping: 20 },
};

// ==========================================
// VIEWPORT SETTINGS
// ==========================================
export const viewport = {
  once: true,
  amount: 0.15, // trigger when 15% in view
  margin: "0px 0px -50px 0px", // slight buffer
};

export const viewportReveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport,
};

// ==========================================
// REUSABLE VARIANTS
// ==========================================

export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: timing.reveal,
      ease: ease.out,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: timing.reveal,
      ease: ease.out,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: timing.reveal,
      ease: ease.out,
    },
  },
};

export const slideIn = (direction: "up" | "down" | "left" | "right", distance = 40): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: timing.reveal,
        ease: ease.out,
      },
    },
  };
};

// ==========================================
// INTERACTION (HOVER & TAP)
// ==========================================

export const hoverLift = {
  y: -4,
  transition: spring.snappy,
};

export const hoverScale = {
  scale: 1.02,
  transition: spring.snappy,
};

export const tapScale = {
  scale: 0.97,
  transition: spring.snappy,
};
