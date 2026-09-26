"use client";

import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="tel:+919876543210"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={cn(
            "fixed bottom-[88px] right-4 z-50 md:hidden",
            "flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-full",
            "bg-[#922F55] text-white shadow-[0_8px_30px_rgba(146,47,85,0.4)]",
            "border border-white/20 backdrop-blur-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
          aria-label="Call Us"
        >
          {/* Pulse effect for attention */}
          <span
            className="absolute inline-flex h-full w-full rounded-full bg-[#922F55] opacity-40 animate-ping"
            style={{ animationDuration: "3s" }}
          />
          <Phone size={22} className="relative z-10" strokeWidth={2.5} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
