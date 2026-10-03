"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button font-satoshi inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-bold tracking-tight whitespace-nowrap outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-out hover:[&_svg]:scale-110 active:[&_svg]:scale-90",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-elevated hover:shadow-elevated",
        outline:
          "bg-white text-foreground border border-black/10 hover:border-black/25 hover:bg-neutral-50 shadow-xs",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 sm:h-11 px-6 sm:px-6 text-sm gap-2",
        xs: "h-7 sm:h-8 px-4 text-xs gap-1.5",
        sm: "h-9 sm:h-10 px-4 text-sm gap-2",
        lg: "h-11 sm:h-14 px-6 sm:px-8 text-sm sm:text-base gap-2",
        xl: "h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg gap-2",
        icon: "size-10",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

import React from "react";
import { motion } from "motion/react";
import { hoverLift, tapScale, fadeUp, viewport } from "@/lib/motion";

const MotionButton = motion.create(ButtonPrimitive);

export interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof MotionButton>, "className">,
    VariantProps<typeof buttonVariants> {
  className?: string;
  disableScrollAnimation?: boolean;
}

export function StaggeredRollingContent({ children, isDuplicate }: { children: React.ReactNode, isDuplicate?: boolean }) {
  let charIndex = 0;
  const getDelay = () => charIndex++ * 0.015;

  const renderNode = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string" || typeof node === "number") {
      return (
        <span className="flex">
          {node.toString().split("").map((char, j) => (
            <span
              key={j}
              style={{ transitionDelay: `${getDelay()}s` }}
              className={cn(
                "inline-block transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] whitespace-pre",
                isDuplicate 
                  ? "translate-y-[110%] group-hover/button:translate-y-0"
                  : "group-hover/button:-translate-y-[110%]"
              )}
            >
              {char}
            </span>
          ))}
        </span>
      );
    }
    
    if (React.isValidElement(node) && typeof node.type === "string" && node.type !== "svg" && node.type !== "img") {
      const element = node as React.ReactElement<unknown>;
      return React.cloneElement(
        element,
        undefined,
        React.Children.map(element.props.children, renderNode)
      );
    }

    if (React.isValidElement(node) && node.type === React.Fragment) {
       const element = node as React.ReactElement<unknown>;
       return React.Children.map(element.props.children, renderNode);
    }

    return (
      <span
        style={{ transitionDelay: `${getDelay()}s` }}
        className={cn(
          "inline-block transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
          isDuplicate 
            ? "translate-y-[110%] group-hover/button:translate-y-0"
            : "group-hover/button:-translate-y-[110%]"
        )}
      >
        {node}
      </span>
    );
  };

  return <>{React.Children.map(children, renderNode)}</>;
}

function Button({
  className,
  variant = "default",
  size = "default",
  disableScrollAnimation = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <MotionButton
      data-slot="button"
      whileHover={hoverLift}
      whileTap={tapScale}
      initial={disableScrollAnimation ? undefined : "hidden"}
      whileInView={disableScrollAnimation ? undefined : "visible"}
      viewport={disableScrollAnimation ? undefined : viewport}
      variants={disableScrollAnimation ? undefined : fadeUp}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </MotionButton>
  )
}

export { Button, buttonVariants }
