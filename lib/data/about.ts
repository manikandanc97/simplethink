export interface AboutMetric {
  value: string;
  label: string;
  sub: string;
}

export interface AboutPrinciple {
  number: string;
  tag: string;
  title: string;
  summary: string;
  description: string;
  deliverable: string;
}

export interface AboutComparison {
  aspect: string;
  traditional: string;
  simplethink: string;
}

export const METRICS: AboutMetric[] = [
  {
    value: "100%",
    label: "Senior Engineering",
    sub: "Direct collaboration with builders, zero junior outsourcing",
  },
  {
    value: "< 1.2s",
    label: "Sub-Second Speeds",
    sub: "Lighthouse 95+ performance on production networks",
  },
  {
    value: "0",
    label: "Vendor Lock-in",
    sub: "You own 100% of all code, assets, and infrastructure",
  },
  {
    value: "24h",
    label: "Guaranteed Response",
    sub: "Direct communication with engineers who know your codebase",
  },
];

export const PRINCIPLES: AboutPrinciple[] = [
  {
    number: "01",
    tag: "CLARITY",
    title: "Clarity over cleverness",
    summary: "Code should be easy to read. Interfaces should be effortless to use.",
    description:
      "We don't build things to show off technical trivia; we build them to solve real customer and business problems efficiently. If a concept cannot be explained plainly, it is too complex. Simplicity creates resilience.",
    deliverable: "Readable, well-documented architecture that any senior engineer can step into.",
  },
  {
    number: "02",
    tag: "PURPOSE",
    title: "Purpose-driven scope",
    summary: "Every single feature must earn its place in the production build.",
    description:
      "If a proposed feature doesn't serve the primary reason someone uses the product, it gets cut. This discipline prevents scope bloat, accelerates time-to-market, and protects you from endless maintenance debt.",
    deliverable: "Laser-focused releases that solve customer needs and drive immediate ROI.",
  },
  {
    number: "03",
    tag: "DETAIL",
    title: "Difference is in the details",
    summary: "Simplicity never means generic, uninspired, or boring.",
    description:
      "By stripping away visual clutter and extraneous controls, we create space for refined typography, fluid motion physics, sub-second performance, and a distinctive brand presence that commands respect.",
    deliverable: "Bespoke digital experiences that stand out clearly from generic templates.",
  },
];

export const COMPARISONS: AboutComparison[] = [
  {
    aspect: "Engineering Team",
    traditional: "Layers of account managers, junior temps, and outsourced developers.",
    simplethink: "Direct daily collaboration with the senior software engineers crafting your system.",
  },
  {
    aspect: "Technology Foundation",
    traditional: "Bloated off-the-shelf WordPress themes, brittle plugins, and slow templates.",
    simplethink: "Custom Next.js, TypeScript, React Native, and high-performance cloud backends.",
  },
  {
    aspect: "Delivery Velocity",
    traditional: "Months of bureaucratic 'discovery' decks before touching working code.",
    simplethink: "Rapid 1-2 week release sprints with live staging previews and continuous feedback.",
  },
  {
    aspect: "Code Ownership & IP",
    traditional: "Proprietary lock-in, licensing dependencies, and captive hosting fees.",
    simplethink: "100% intellectual property ownership transferred to your GitHub repository.",
  },
];
