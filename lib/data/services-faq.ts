import { Zap, ShieldCheck, Code2, Users } from "lucide-react";
import React from "react";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface EngineeringStandard {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}

export const SERVICES_FAQS: ServiceFaq[] = [
  {
    question: "How do you scope and price custom projects?",
    answer:
      "We operate on fixed-milestone sprint pricing. After reviewing your requirements and architecture diagram, we provide a crystal-clear statement of work detailing timeline, deliverables, and cost with zero hidden fees.",
  },
  {
    question: "Can I start with one module and scale later?",
    answer:
      "Yes, our modular architecture is built specifically for incremental scaling. You can start with a Core Web Interface, then add SaaS multi-tenancy, mobile applications, or AI automations seamlessly.",
  },
  {
    question: "Who owns the code and intellectual property?",
    answer:
      "You do. You receive 100% full ownership of all source code, design systems, repository commits, and infrastructure configurations upon project completion.",
  },
  {
    question: "What does post-launch support look like?",
    answer:
      "Every build includes a 30-day post-launch warranty with bug fixes and telemetry monitoring. Afterward, we offer dedicated monthly engineering retainers or on-demand sprint reserves.",
  },
];

export const ENGINEERING_STANDARDS: EngineeringStandard[] = [
  {
    icon: Zap,
    title: "Sub-Second Speed",
    desc: "Lighthouse 95+ scores, edge caching, zero layout shifts, and rapid hydration on every build.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "OWASP Top 10 mitigation, strict CSP, secure auth sessions, and encrypted database connections.",
  },
  {
    icon: Code2,
    title: "100% IP Ownership",
    desc: "Zero vendor lock-in. Full access to repositories, documentation, and cloud infrastructure you own.",
  },
  {
    icon: Users,
    title: "Direct Senior Access",
    desc: "Direct Slack/WhatsApp line with the principal developers building your codebase. No juniors.",
  },
];
