import { cn } from "@/lib/utils";
import * as React from "react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex w-full min-h-24 sm:min-h-28 rounded-xl border border-border bg-card px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 shadow-2xs transition-all duration-150 outline-none hover:border-primary/40 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 font-satoshi resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
