"use client";
import { useEffect, useState } from "react";

export function ViewportDebugger() {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const update = () => {
      setData({
        innerWidth: window.innerWidth,
        docScrollWidth: document.documentElement.scrollWidth,
        overflowing: Array.from(document.querySelectorAll('*'))
          .filter(el => el.getBoundingClientRect().right > window.innerWidth)
          .map(el => ({ tag: el.tagName, className: el.className, right: el.getBoundingClientRect().right }))
          .slice(0, 5) // Just first 5
      });
    };
    
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 z-50 bg-black/80 text-white p-4 text-[10px] max-h-64 overflow-auto pointer-events-none whitespace-pre font-mono">
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
