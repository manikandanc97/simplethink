"use client";

import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleRefresh);
    window.addEventListener("resize", handleRefresh);

    if (document.fonts) {
      document.fonts.ready.then(handleRefresh).catch(() => {});
    }

    const timer = setTimeout(handleRefresh, 300);

    return () => {
      window.removeEventListener("load", handleRefresh);
      window.removeEventListener("resize", handleRefresh);
      clearTimeout(timer);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
