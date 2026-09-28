"use client";

import { CldImage } from "next-cloudinary";
import { type ServiceDetailItem } from "@/lib/data/services-page-data";
import { motion, AnimatePresence } from "motion/react";

interface ServicesTechStackProps {
  service: ServiceDetailItem;
}

const TECH_DETAILS: Record<string, { name: string; category: string; invertDark?: boolean }> = {
  // Core Frameworks & Languages
  nextjs: { name: "Next.js", category: "core", invertDark: true },
  react: { name: "React", category: "core" },
  typescript: { name: "TypeScript", category: "core" },
  tailwindcss: { name: "Tailwind CSS", category: "core" },
  reactnative: { name: "React Native", category: "core" },
  flutter: { name: "Flutter", category: "core" },
  expo: { name: "Expo", category: "core", invertDark: true },
  swift: { name: "Swift", category: "core" },
  kotlin: { name: "Kotlin", category: "core" },
  
  // Backend & Infrastructure
  supabase: { name: "Supabase", category: "infrastructure" },
  vercel: { name: "Vercel", category: "infrastructure", invertDark: true },
  cloudflare: { name: "Cloudflare", category: "infrastructure" },
  nodejs: { name: "Node.js", category: "infrastructure" },
  postgresql: { name: "PostgreSQL", category: "infrastructure" },
  prisma: { name: "Prisma", category: "infrastructure", invertDark: true },
  docker: { name: "Docker", category: "infrastructure" },
  stripe: { name: "Stripe", category: "infrastructure" },
  razorpay: { name: "Razorpay", category: "infrastructure" },
  redis: { name: "Redis", category: "infrastructure" },
  firebase: { name: "Firebase", category: "infrastructure" },
  python: { name: "Python", category: "infrastructure" },
  fastapi: { name: "FastAPI", category: "infrastructure" },
  aws: { name: "AWS", category: "infrastructure" },
  
  // AI & Machine Learning
  openai: { name: "OpenAI", category: "ai", invertDark: true },
  anthropic: { name: "Anthropic", category: "ai" },
  langchain: { name: "LangChain", category: "ai" },

  // Design & Prototyping
  figma: { name: "Figma", category: "design" },
  illustrator: { name: "Illustrator", category: "design" },
  photoshop: { name: "Photoshop", category: "design" },
  canva: { name: "Canva", category: "design" },
};

const CATEGORY_TITLES: Record<string, string> = {
  core: "Core Frameworks & Languages",
  infrastructure: "Backend & Infrastructure",
  ai: "AI & Machine Learning",
  design: "Design & Prototyping",
};

const ColorMap: Record<string, { text: string; bg: string; hoverBorder: string; hoverText: string }> = {
  websites: { text: "text-[#922F55]", bg: "bg-[#922F55]", hoverBorder: "hover:border-[#922F55]/30", hoverText: "group-hover:text-[#922F55]" },
  "web-apps": { text: "text-[#7C3AED]", bg: "bg-[#7C3AED]", hoverBorder: "hover:border-[#7C3AED]/30", hoverText: "group-hover:text-[#7C3AED]" },
  ecommerce: { text: "text-[#0891B2]", bg: "bg-[#0891B2]", hoverBorder: "hover:border-[#0891B2]/30", hoverText: "group-hover:text-[#0891B2]" },
  "mobile-apps": { text: "text-[#DB2777]", bg: "bg-[#DB2777]", hoverBorder: "hover:border-[#DB2777]/30", hoverText: "group-hover:text-[#DB2777]" },
  saas: { text: "text-[#5B21B6]", bg: "bg-[#5B21B6]", hoverBorder: "hover:border-[#5B21B6]/30", hoverText: "group-hover:text-[#5B21B6]" },
  branding: { text: "text-[#EA580C]", bg: "bg-[#EA580C]", hoverBorder: "hover:border-[#EA580C]/30", hoverText: "group-hover:text-[#EA580C]" },
  "ui-ux": { text: "text-[#7C3AED]", bg: "bg-[#7C3AED]", hoverBorder: "hover:border-[#7C3AED]/30", hoverText: "group-hover:text-[#7C3AED]" },
  automation: { text: "text-[#059669]", bg: "bg-[#059669]", hoverBorder: "hover:border-[#059669]/30", hoverText: "group-hover:text-[#059669]" },
  "custom-software": { text: "text-[#2563EB]", bg: "bg-[#2563EB]", hoverBorder: "hover:border-[#2563EB]/30", hoverText: "group-hover:text-[#2563EB]" },
};

export function ServicesTechStack({ service }: ServicesTechStackProps) {
  const colors = ColorMap[service.id] || ColorMap.websites;

  // Group technologies by category
  const categorizedTech = service.techStack.reduce((acc, slug) => {
    const tech = TECH_DETAILS[slug];
    if (tech) {
      if (!acc[tech.category]) acc[tech.category] = [];
      acc[tech.category].push({ slug, ...tech });
    }
    return acc;
  }, {} as Record<string, (typeof TECH_DETAILS[string] & { slug: string })[]>);

  // Define order of categories to display
  const categoryOrder = ["core", "infrastructure", "ai", "design"];

  return (
    <div className="w-full relative z-20 mb-16 sm:mb-20">
      {/* ── Header ── */}
      <div className="flex flex-col items-start text-left mb-8 sm:mb-10">
        <span className={`text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] ${colors.text} font-satoshi mb-1.5 block transition-colors duration-300`}>
          TECH STACK
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-[#121114] tracking-tight font-satoshi">
          Technology we use
        </h3>
        <p className="text-xs sm:text-sm text-[#706B78] mt-1 font-normal">
          The right tools for the right solution, categorized by necessity.
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
          className="flex flex-col gap-8 sm:gap-10"
        >
          {categoryOrder.map((category) => {
            const techs = categorizedTech[category];
            if (!techs || techs.length === 0) return null;

            // First category gets fully opaque colors, subsequent ones get slightly muted styles
            const isFirst = category === categoryOrder.find((c) => categorizedTech[c]?.length > 0);

            return (
              <div key={category}>
                <h4 className="text-sm sm:text-base font-bold text-[#121114] mb-4 flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${isFirst ? colors.bg : "bg-[#706B78]"} transition-colors duration-300`} />
                  {CATEGORY_TITLES[category]}
                </h4>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                  {techs.map((tech) => (
                    <div
                      key={tech.slug}
                      className={`group flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full ${
                        isFirst ? "bg-white" : "bg-[#FAF7FC]/50"
                      } border border-[#EFE5EC] ${colors.hoverBorder} shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
                    >
                      <div className={`relative w-5 h-5 flex items-center justify-center shrink-0 ${!isFirst ? "opacity-80 group-hover:opacity-100" : ""} transition-opacity`}>
                        <CldImage
                          src={`simpluxe/tech/${tech.slug}`}
                          alt={tech.name}
                          width={20}
                          height={20}
                          className={`w-full h-full object-contain ${
                            !isFirst ? "grayscale group-hover:grayscale-0" : ""
                          } transition-all duration-300 ${tech.invertDark ? "dark:invert" : ""}`}
                        />
                      </div>
                      <span className={`text-xs sm:text-sm ${isFirst ? "font-bold text-[#121114]" : "font-semibold text-[#706B78]"} ${colors.hoverText} transition-colors duration-300`}>
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
