"use client";

import * as React from "react";
import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string | React.ReactNode;
  el?: React.ElementType;
  className?: string;
  once?: boolean;
  staggerDelay?: number;
  asTypewriter?: boolean;
}

const defaultItemVariants: Variants = {
  hidden: {
    y: "40%",
    opacity: 0,
    filter: "blur(8px)",
  },
  visible: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Premium Apple-style easing
    },
  },
};

export function AnimatedText({
  text,
  el: Wrapper = "span",
  className,
  once = true,
  staggerDelay = 0.03,
  asTypewriter = false,
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: asTypewriter ? 0.08 : staggerDelay,
        delayChildren: asTypewriter ? 0.3 : 0.1,
      },
    },
  };

  if (typeof text !== "string") {
    // If it's a node, just animate it as a block with a spring
    return (
      <Wrapper className={cn("inline-block overflow-hidden", className)}>
        <motion.span
          ref={ref}
          variants={defaultItemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block"
        >
          {text}
        </motion.span>
      </Wrapper>
    );
  }

  return (
    <Wrapper className={cn("inline-block", className)}>
      <motion.span
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-block"
      >
        {asTypewriter ? (
          text.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={{
                hidden: { opacity: 0, display: "none" },
                visible: { opacity: 1, display: "inline-block", transition: { duration: 0.01 } }
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))
        ) : (
          text.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden whitespace-nowrap">
              <motion.span variants={defaultItemVariants} className="inline-block">
                {word}
              </motion.span>
              <span className="inline-block">&nbsp;</span>
            </span>
          ))
        )}
      </motion.span>
    </Wrapper>
  );
}
