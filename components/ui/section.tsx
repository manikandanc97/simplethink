import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  padding?: "standard" | "tight" | "none";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, padding = "standard", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full",
          {
            "py-16 md:py-20 lg:py-24": padding === "standard",
            "py-12 md:py-16": padding === "tight",
            "py-0": padding === "none",
          },
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";
