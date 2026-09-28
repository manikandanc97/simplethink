"use client";

import { MotionConfig } from "motion/react";
import { useEffect } from "react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
