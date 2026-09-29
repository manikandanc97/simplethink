import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "@/lib/utils";
import * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-10 sm:h-10.5 w-full min-w-0 rounded-xl border border-border bg-card px-3.5 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 shadow-2xs transition-all duration-150 outline-none hover:border-primary/40 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 font-satoshi",
        className
      )}
      {...props}
    />
  );
}

export { Input };
