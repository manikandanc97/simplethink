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
            "py-8 md:py-12 lg:py-16": padding === "standard",
            "py-4 md:py-8 lg:py-12": padding === "tight",
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
