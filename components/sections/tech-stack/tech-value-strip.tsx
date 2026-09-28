import {
  BarChart2,
  Infinity as InfinityIcon,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function TechValueStrip() {
  return (
    <div className="ts-value-strip max-w-5xl mx-auto bg-white/95 dark:bg-card/90 backdrop-blur-md border border-slate-200/80 dark:border-border/70 rounded-2xl sm:rounded-full py-4 px-4 sm:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] w-full">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
        {/* 1. Reliable */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/40 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-rose-500" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-foreground">
              Reliable
            </span>
            <span className="text-xs text-slate-500 dark:text-muted-foreground leading-tight truncate xs:whitespace-normal">
              Battle-tested in real projects
            </span>
          </div>
        </div>

        {/* 2. Performant */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-purple-600 fill-purple-600/20" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-foreground">
              Performant
            </span>
            <span className="text-xs text-slate-500 dark:text-muted-foreground leading-tight">
              Optimized for speed
            </span>
          </div>
        </div>

        {/* 3. Scalable */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center shrink-0">
            <BarChart2 className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-foreground">
              Scalable
            </span>
            <span className="text-xs text-slate-500 dark:text-muted-foreground leading-tight">
              Grows with your business
            </span>
          </div>
        </div>

        {/* 4. Future-ready */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-full bg-pink-50 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/40 flex items-center justify-center shrink-0">
            <InfinityIcon className="w-5 h-5 text-pink-600" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-foreground">
              Future-ready
            </span>
            <span className="text-xs text-slate-500 dark:text-muted-foreground leading-tight">
              Always evolving with best tools
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
