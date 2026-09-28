"use client";

import { useRef, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { SERVICES_PAGE_DATA } from "@/lib/data/services-page-data";
import { motion, AnimatePresence } from "motion/react";

interface ServicesTabsBarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export function ServicesTabsBar({ activeId, onSelect }: ServicesTabsBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  // Reorder tabs: Rotate array so active tab is first (looping effect)
  const sortedServices = useMemo(() => {
    const activeIndex = SERVICES_PAGE_DATA.findIndex((s) => s.id === activeId);
    if (activeIndex <= 0) return SERVICES_PAGE_DATA;

    const tail = SERVICES_PAGE_DATA.slice(activeIndex);
    const head = SERVICES_PAGE_DATA.slice(0, activeIndex);
    return [...tail, ...head];
  }, [activeId]);

  // Drag to scroll logic
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDown.current = true;
    isDragging.current = false;
    containerRef.current.classList.add("cursor-grabbing");
    containerRef.current.style.scrollBehavior = "auto"; // Disable smooth scroll during drag
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (containerRef.current) {
      containerRef.current.classList.remove("cursor-grabbing");
      containerRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (containerRef.current) {
      containerRef.current.classList.remove("cursor-grabbing");
      containerRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll speed multiplier
    
    if (Math.abs(walk) > 5) {
      isDragging.current = true;
    }
    
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Instantly reset scroll to 0 when active tab changes (due to array rotation, it's always at index 0)
  // This prevents the active item from being hidden behind the left overflow boundary.
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "auto";
      containerRef.current.scrollLeft = 0;
      
      // Re-enable smooth scroll after layout update
      setTimeout(() => {
        if (containerRef.current) containerRef.current.style.scrollBehavior = "smooth";
      }, 50);
    }
  }, [activeId]);

  return (
    <div id="services-tabs-container" className="w-full relative z-20 mb-8 sm:mb-12 border-b border-[#EFE5EC]">
      <div
        ref={containerRef}
        className="flex items-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar scroll-smooth w-full cursor-grab pb-[1px]"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence mode="popLayout">
          {sortedServices.map((service) => {
            const isActive = service.id === activeId;
            const Icon = service.icon;

            return (
              <motion.button
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                key={service.id}
                ref={isActive ? activeBtnRef : undefined}
                type="button"
                onClick={() => {
                  if (isDragging.current) return;
                  // Reset scroll instantly before state update so Framer Motion animates correctly
                  if (containerRef.current) {
                    containerRef.current.style.scrollBehavior = "auto";
                    containerRef.current.scrollLeft = 0;
                  }
                  onSelect(service.id);
                }}
                className={cn(
                  "group relative flex items-center gap-2.5 py-3 sm:py-4 transition-all duration-200 cursor-pointer shrink-0 select-none",
                  isActive
                    ? "text-[#121114]"
                    : "text-[#706B78] hover:text-[#121114]"
                )}
              >
                <Icon
                  size={16}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={cn(
                    "shrink-0 transition-colors",
                    isActive ? "text-[#922F55]" : "text-[#8C8494] group-hover:text-[#121114]"
                  )}
                />
                <span className={cn("text-xs sm:text-sm transition-all", isActive ? "font-bold" : "font-medium")}>
                  {service.tabLabel}
                </span>

                {/* Active Tab Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeServiceTabLine"
                    className="absolute left-0 right-0 bottom-0 h-[2px] sm:h-[3px] bg-[#922F55]"
                    transition={{ type: "spring", stiffness: 450, damping: 40 }}
                  />
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
