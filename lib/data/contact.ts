export interface ContactStep {
  number: string;
  title: string;
  time: string;
  description: string;
}

interface ContactFaq {
  question: string;
  answer: string;
}

export const CONTACT_STEPS: ContactStep[] = [
  {
    number: "01",
    title: "Scoping & Review",
    time: "24 Hours",
    description: "We review your requirements to evaluate feasibility.",
  },
  {
    number: "02",
    title: "Roadmap Session",
    time: "30-Min Call",
    description: "Direct alignment on milestones with an architect.",
  },
  {
    number: "03",
    title: "Proposal",
    time: "48 Hours",
    description: "Receive a statement of work with exact deliverables.",
  },
];

const CONTACT_FAQS: ContactFaq[] = [
  {
    question: "How fast can we kick off a build?",
    answer: "Most projects begin within 3-7 days after architectural sign-off.",
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer: "Yes, we regularly sign mutual NDAs before reviewing requirements.",
  },
  {
    question: "How do you handle pricing and contracts?",
    answer: "We operate on milestone-based fixed scope contracts.",
  },
  {
    question: "What core tech stack do you work with?",
    answer: "TypeScript, Next.js, React Native, FastAPI, PostgreSQL, and AWS.",
  },
  {
    question: "Can you modernize or rebuild an existing product?",
    answer: "Yes, we refactor legacy apps and migrate to modern cloud microservices.",
  },
];
