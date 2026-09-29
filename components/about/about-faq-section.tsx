"use client";

import { type FAQItem } from "@/types/faq";
import {
  Users,
  MapPin,
  Sparkles,
  RefreshCw,
  Award,
  Layers,
} from "lucide-react";

const ABOUT_FAQS: FAQItem[] = [
  {
    id: "about-faq-1",
    num: "01",
    category: "ENGINEERING MODEL",
    icon: Users,
    question: "Why do you work directly with senior engineers instead of account managers?",
    answer:
      "Traditional agencies use account managers who act as communication bottlenecks between you and the developers. At Simpluxe, you communicate directly with the senior software engineers designing your system. This eliminates lost requirements, speeds up iterations, and guarantees architectural integrity.",
    highlights: [
      { text: "Zero Miscommunication", icon: Users },
      { text: "Direct Developer Line", icon: Sparkles },
    ],
  },
  {
    id: "about-faq-2",
    num: "02",
    category: "LOCATION & TIMEZONES",
    icon: MapPin,
    question: "Where is Simpluxe based and how do you work with remote clients?",
    answer:
      "Our physical studio base is in Udumalpet, Tamil Nadu, India, but we operate globally. We have streamlined asynchronous workflows with daily check-ins, sprint video walkthroughs, and guaranteed overlapping hours for clients across North America, Europe, Singapore, and India.",
    highlights: [
      { text: "Global Remote Delivery", icon: MapPin },
      { text: "Async Video Updates", icon: RefreshCw },
    ],
  },
  {
    id: "about-faq-3",
    num: "03",
    category: "CLIENT PROFILE",
    icon: Award,
    question: "What types of companies and founders do you partner with?",
    answer:
      "We partner with seed-to-Series A startups, visionary solo founders, and established businesses seeking bespoke, high-performance web applications, modern e-commerce experiences, or scalable SaaS platforms. If you appreciate clean craftsmanship over agency bloat, we are the right fit.",
    highlights: [
      { text: "Founders & Startups", icon: Award },
      { text: "Bespoke Scale", icon: Layers },
    ],
  },
  {
    id: "about-faq-4",
    num: "04",
    category: "SPRINT PROCESS",
    icon: Sparkles,
    question: "How do you structure project sprints and client communication?",
    answer:
      "Projects run in focused 1 to 2-week sprints. Every sprint begins with clear milestone goals and concludes with a working live preview deployment. You have access to our private Slack/WhatsApp channel, GitHub PR reviews, and transparent sprint trackers.",
    highlights: [
      { text: "1-2 Week Sprints", icon: Sparkles },
      { text: "Direct Slack/WhatsApp", icon: Users },
    ],
  },
  {
    id: "about-faq-5",
    num: "05",
    category: "LEGACY AUDITS",
    icon: RefreshCw,
    question: "Can you audit, refactor, or modernize an existing product?",
    answer:
      "Yes. We frequently conduct code audits, performance optimizations, and fullstack migrations from slow, legacy stacks (WordPress, jQuery, monolithic Rails) to modern Next.js, TypeScript, and edge-native architectures.",
    highlights: [
      { text: "Complete Code Audits", icon: RefreshCw },
      { text: "Edge Stack Migration", icon: Layers },
    ],
  },
];

import { SharedFaqSection } from "@/components/shared/faq-section";

export function AboutFaqSection() {
  return (
    <SharedFaqSection
      id="about-faq"
      className="pt-16 sm:pt-20 pb-8 sm:pb-12 border-t border-[var(--surface-elevated)]"
      faqs={ABOUT_FAQS}
      eyebrow="STUDIO FAQ"
      title={<>Working With <br /></>}
      highlightedText="Simpluxe."
    />
  );
}

