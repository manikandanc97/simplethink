export interface ContactStep {
  number: string;
  title: string;
  time: string;
  description: string;
}

export interface ContactFaq {
  question: string;
  answer: string;
}

export const CONTACT_STEPS: ContactStep[] = [
  {
    number: "01",
    title: "Technical Scoping & Review",
    time: "Within 24 Hours",
    description:
      "We review your product requirements, target audience, and architecture constraints to evaluate technical feasibility.",
  },
  {
    number: "02",
    title: "Architecture & Roadmap Session",
    time: "30-Min Call",
    description:
      "A direct conversation with a lead software architect. No salespeople. We align on database schemas, APIs, and sprint milestones.",
  },
  {
    number: "03",
    title: "Fixed Milestone Proposal",
    time: "48-Hour Delivery",
    description:
      "You receive a comprehensive statement of work with exact sprint deliverables, timeline, and transparent fixed milestone pricing.",
  },
];

export const CONTACT_FAQS: ContactFaq[] = [
  {
    question: "How fast can we kick off a build?",
    answer:
      "Most projects can begin within 3 to 7 business days following our initial technical scoping session and architectural sign-off.",
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer:
      "Yes, absolutely. We regularly sign mutual NDAs before reviewing proprietary requirements, codebases, or patent-pending architectures.",
  },
  {
    question: "How do you handle pricing and contracts?",
    answer:
      "We operate primarily on clear milestone-based fixed scope contracts or dedicated weekly engineering sprints, ensuring full transparency with zero hidden fees.",
  },
  {
    question: "What core tech stack do you work with?",
    answer:
      "We specialize in modern fullstack TypeScript (Next.js, React, React Native / Expo), scalable backend services (FastAPI, Node.js, Python), and battle-tested databases (PostgreSQL, Supabase, Redis, AWS).",
  },
  {
    question: "Can you modernize or rebuild an existing product?",
    answer:
      "Yes. We frequently help companies refactor sluggish legacy apps, migrate monolithic backends to modern cloud microservices, and overhaul outdated UX/UI with sub-second performance.",
  },
];
