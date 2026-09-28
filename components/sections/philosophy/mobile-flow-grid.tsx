"use client";

import { FLOW_NODES } from "@/lib/data/philosophy";
import { Box, LayoutGrid, Lightbulb, TrendingUp, Users } from "lucide-react";
import { CldImage } from "next-cloudinary";

export function MobileFlowGrid() {
  return (
    <div className="flex md:hidden flex-col items-center gap-4 w-full py-2">
      {/* Centered Brand Medallion */}
      <div className="relative flex flex-col items-center justify-center my-1">
        <div className="w-24 h-24 xs:w-28 xs:h-28 rounded-full bg-white shadow-[0_12px_36px_rgba(210,61,120,0.16)] border border-rose-100 flex flex-col items-center justify-center p-3">
          <CldImage
            src="simpluxe/logo/logo"
            alt="SimpleThink Logo"
            width={140}
            height={32}
            className="w-[90%] h-auto object-contain drop-shadow-sm select-none"
          />
        </div>
      </div>

      {/* 4 Feature Nodes in a clean responsive grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 w-full">
        {/* 1. Direct access */}
        <div className="bg-white rounded-2xl border border-neutral-100/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-3 flex flex-col gap-2 relative">
          <div className="flex items-center justify-between">
            <div className="w-7 h-7 flex items-center justify-center text-[#D23D78] bg-rose-50/70 rounded-full">
              <Lightbulb className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>
            <span className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-md border bg-rose-50 text-[#D23D78] border-rose-200/60 uppercase tracking-widest leading-none">
              <LayoutGrid className="w-2.5 h-2.5" strokeWidth={2.5} /> {FLOW_NODES.topLeft.badge}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
              {FLOW_NODES.topLeft.title}
            </p>
            <p className="text-[11px] text-neutral-500 leading-snug">
              {FLOW_NODES.topLeft.desc}
            </p>
          </div>
        </div>

        {/* 2. Weekly progress */}
        <div className="bg-white rounded-2xl border border-neutral-100/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-3 flex flex-col gap-2 relative">
          <div className="flex items-center justify-between">
            <div className="w-7 h-7 flex items-center justify-center text-[#7C3AED] bg-purple-50/70 rounded-full">
              <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>
            <span className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-md border bg-purple-50 text-[#7C3AED] border-purple-200/60 uppercase tracking-widest leading-none">
              <LayoutGrid className="w-2.5 h-2.5" strokeWidth={2.5} /> {FLOW_NODES.topRight.badge}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
              {FLOW_NODES.topRight.title}
            </p>
            <p className="text-[11px] text-neutral-500 leading-snug">
              {FLOW_NODES.topRight.desc}
            </p>
          </div>
        </div>

        {/* 3. Production quality */}
        <div className="bg-white rounded-2xl border border-neutral-100/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-3 flex flex-col gap-2 relative">
          <div className="flex items-center justify-between">
            <div className="w-7 h-7 flex items-center justify-center text-[#D23D78] bg-rose-50/70 rounded-full">
              <Box className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>
            <span className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-md border bg-rose-50 text-[#D23D78] border-rose-200/60 uppercase tracking-widest leading-none">
              <LayoutGrid className="w-2.5 h-2.5" strokeWidth={2.5} /> {FLOW_NODES.bottomLeft.badge}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
              {FLOW_NODES.bottomLeft.title}
            </p>
            <p className="text-[11px] text-neutral-500 leading-snug">
              {FLOW_NODES.bottomLeft.desc}
            </p>
          </div>
        </div>

        {/* 4. Clear ownership */}
        <div className="bg-white rounded-2xl border border-neutral-100/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-3 flex flex-col gap-2 relative">
          <div className="flex items-center justify-between">
            <div className="w-7 h-7 flex items-center justify-center text-[#7C3AED] bg-purple-50/70 rounded-full">
              <Users className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>
            <span className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-md border bg-purple-50 text-[#7C3AED] border-purple-200/60 uppercase tracking-widest leading-none">
              <LayoutGrid className="w-2.5 h-2.5" strokeWidth={2.5} /> {FLOW_NODES.bottomRight.badge}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
              {FLOW_NODES.bottomRight.title}
            </p>
            <p className="text-[11px] text-neutral-500 leading-snug">
              {FLOW_NODES.bottomRight.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
