"use client";

import { type FAQItem } from "@/types/faq";
import {
  Code2,
  ShieldCheck,
  Clock,
  Rocket,
  Sparkles,
  Award,
} from "lucide-react";

const WORK_FAQS: FAQItem[] = [
  {
    id: "work-faq-1",
    num: "01",
    category: "PORTFOLIO & WORK",
    icon: ShieldCheck,
    question: "Who owns the code and intellectual property once a project is finished?",
    answer:
      "You own 100% of the code, designs, and intellectual property. On completion, we transfer the full GitHub repository, assets, and deployment accounts directly to your organization. There are zero licensing lock-ins or recurring proprietary fees.",
    highlights: [
      { text: "100% Code Transfer", icon: ShieldCheck },
      { text: "Zero Licensing Fees", icon: Award },
    ],
  },
  {
    id: "work-faq-2",
    num: "02",
    category: "DELIVERY & TIMELINE",
    icon: Clock,
    question: "How long does a typical custom website or web app project take?",
    answer:
      "Most bespoke websites launch in 2 to 4 weeks. Fullstack web applications and SaaS platforms typically take 4 to 8 weeks depending on the complexity of API integrations, database structures, and workflow automation. Every project follows milestone-based sprint delivery.",
    highlights: [
      { text: "2-4 Week Websites", icon: Clock },
      { text: "Milestone Sprints", icon: Rocket },
    ],
  },
  {
    id: "work-faq-3",
    num: "03",
    category: "TRANSPARENCY",
    icon: Sparkles,
    question: "Can we test and preview the application during development?",
    answer:
      "Yes. Every project has a dedicated staging environment with live branch previews. You can interact with your website or app on desktop and mobile as each feature is built, ensuring feedback is incorporated immediately.",
    highlights: [
      { text: "Live Staging URLs", icon: Sparkles },
      { text: "Real-time Testing", icon: Code2 },
    ],
  },
  {
    id: "work-faq-4",
    num: "04",
    category: "DEVOPS & CLOUD",
    icon: Rocket,
    question: "Do you handle domain configuration, cloud hosting, and SSL setup?",
    answer:
      "Yes, end-to-end. We configure DNS, custom domain routing, SSL certificates, edge CDN caching (Vercel / Cloudflare), and automated CI/CD deployment pipelines so everything runs with zero configuration headache on your side.",
    highlights: [
      { text: "Automated CI/CD", icon: Rocket },
      { text: "Zero Setup Hassle", icon: ShieldCheck },
    ],
  },
  {
    id: "work-faq-5",
    num: "05",
    category: "SUPPORT & WARRENTY",
    icon: Award,
    question: "What happens after launch? Do you provide maintenance and warranty?",
    answer:
      "Every project includes a 30-day post-launch warranty with zero-cost bug fixes and performance checks. Afterwards, we offer flexible retainers for ongoing feature additions, security audits, and technical advisory.",
    highlights: [
      { text: "30-Day Guarantee", icon: Award },
      { text: "Flexible Retainers", icon: Clock },
    ],
  },
];

import { SharedFaqSection } from "@/components/shared/faq-section";

export function WorkFaqSection() {
  return (
    <SharedFaqSection
      id="work-faq"
      className="pt-16 sm:pt-20 pb-8 sm:pb-12 border-t border-surface-elevated"
      faqs={WORK_FAQS}
      eyebrow="CLIENT FAQ"
      title={<>Project & Delivery <br /></>}
      highlightedText="Questions."
    />
  );
}

