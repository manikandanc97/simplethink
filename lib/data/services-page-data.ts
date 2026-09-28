import {
  Globe,
  LayoutDashboard,
  ShoppingBag,
  Smartphone,
  Package2,
  Palette,
  Layers,
  Sparkles,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetailItem {
  id: string;
  number: string;
  name: string;
  tabLabel: string;
  icon: LucideIcon;
  headline: {
    normal: string;
    highlight: string;
  };
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  whatWeBuildSubtitle: string;
  whatWeBuild: {
    title: string;
    description: string;
    iconType: string;
    bgColor: string;
    iconColor: string;
  }[];
  deliverables: string[];
  perfectFor: {
    title: string;
    desc: string;
    icon: string;
  }[];
  techStack: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedWorkUrl: string;
  mockup: {
    type: "dashboard" | "websites" | "ecommerce" | "mobile" | "saas" | "branding" | "design" | "ai" | "custom";
    title: string;
    badge: string;
    subtitle: string;
  };
}

export const SERVICES_PAGE_DATA: ServiceDetailItem[] = [
  {
    id: "websites",
    number: "01",
    name: "Websites",
    tabLabel: "Websites",
    icon: Globe,
    headline: {
      normal: "Digital experiences that turn ",
      highlight: "visitors into high-value clients.",
    },
    description:
      "We design and engineer bespoke, high-converting websites optimized for speed, visual authority, and seamless conversions. Built with zero bloat and sub-second performance.",
    stats: [
      { value: "80+", label: "Websites delivered" },
      { value: "<0.8s", label: "Average page load speed" },
      { value: "99.9%", label: "Uptime & reliability" },
    ],
    whatWeBuildSubtitle: "High-performance digital storefronts and marketing platforms for modern brands.",
    whatWeBuild: [
      {
        title: "Marketing Websites",
        description: "Bespoke digital flagships that communicate value clearly and convert visitors.",
        iconType: "globe",
        bgColor: "bg-blue-50 dark:bg-blue-950/40",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: "Landing Pages",
        description: "High-impact, conversion-focused campaign pages built for ad traffic and launches.",
        iconType: "rocket",
        bgColor: "bg-pink-50 dark:bg-pink-950/40",
        iconColor: "text-pink-600 dark:text-pink-400",
      },
      {
        title: "Interactive Portfolios",
        description: "Immersive narrative showcases for studios, architects, and premium creators.",
        iconType: "layout",
        bgColor: "bg-amber-50 dark:bg-amber-950/40",
        iconColor: "text-amber-600 dark:text-amber-400",
      },
      {
        title: "CMS & Editorial Hubs",
        description: "Effortless content publishing systems powered by modern headless architectures.",
        iconType: "file-text",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
        iconColor: "text-emerald-600 dark:text-emerald-400",
      },
    ],
    deliverables: [
      "Requirements & narrative architecture",
      "Bespoke visual identity & UI design",
      "Full responsive mobile-first engineering",
      "Headless CMS integration (Sanity / Supabase)",
      "Next.js Static & Server-side rendering",
      "Core Web Vitals & 100/100 Lighthouse score",
      "SEO schema metadata & social cards",
      "Interactive micro-animations (Framer Motion)",
      "Global edge CDN deployment & caching",
      "Form capture & CRM lead routing",
      "Analytics & user telemetry integration",
    ],
    perfectFor: [
      {
        title: "High-growth startups",
        desc: "Establishing immediate market credibility and investor appeal.",
        icon: "rocket",
      },
      {
        title: "Premium luxury brands",
        desc: "Requiring sophisticated art direction and bespoke typography.",
        icon: "crown",
      },
      {
        title: "B2B tech companies",
        desc: "Demanding clear product value communication and demo pipelines.",
        icon: "briefcase",
      },
      {
        title: "Agencies & studios",
        desc: "Seeking cutting-edge interactive web experiences that win awards.",
        icon: "award",
      },
    ],
    techStack: ["nextjs", "react", "typescript", "tailwindcss", "supabase", "vercel", "cloudflare", "figma"],
    faqs: [
      {
        question: "How long does a custom website build usually take?",
        answer:
          "A typical custom website takes between 2 to 5 weeks from initial wireframes and visual design to final testing and global domain launch.",
      },
      {
        question: "Can our team easily edit text, images, and blog posts?",
        answer:
          "Yes. We configure intuitive headless CMS solutions (or visual content blocks) so your non-technical marketing team can update content anytime without touching code.",
      },
      {
        question: "Will the website be fast and rank well on Google?",
        answer:
          "All our websites are engineered with Next.js edge caching and asset optimization, consistently achieving 95-100 on Google Lighthouse Core Web Vitals.",
      },
      {
        question: "Do you help with domain setup and SSL certificates?",
        answer:
          "Yes, we manage full production deployment, automatic HTTPS certificate provisioning, DNS routing, and global CDN caching.",
      },
    ],
    relatedWorkUrl: "/work?category=websites",
    mockup: {
      type: "websites",
      title: "Simpluxe Digital Flagship",
      badge: "Lighthouse 100",
      subtitle: "Sub-second Next.js edge experience",
    },
  },
  {
    id: "web-apps",
    number: "02",
    name: "Web applications",
    tabLabel: "Web Applications",
    icon: LayoutDashboard,
    headline: {
      normal: "Software built around how ",
      highlight: "your business actually works.",
    },
    description:
      "We build modern, scalable web applications tailored to your unique workflows — from internal tools to customer-facing platforms. Designed for performance, security and growth.",
    stats: [
      { value: "50+", label: "Projects delivered" },
      { value: "3+ years", label: "Average client partnership" },
      { value: "100%", label: "Scalable architecture" },
    ],
    whatWeBuildSubtitle: "Practical web application solutions for real business needs.",
    whatWeBuild: [
      {
        title: "Business Platforms",
        description: "Custom platforms for complex operations.",
        iconType: "platform",
        bgColor: "bg-[#F3E8FF] dark:bg-purple-950/40",
        iconColor: "text-[#7C3AED] dark:text-purple-400",
      },
      {
        title: "Customer Portals",
        description: "Secure and intuitive user experiences.",
        iconType: "portal",
        bgColor: "bg-[#FCE7F3] dark:bg-pink-950/40",
        iconColor: "text-[#DB2777] dark:text-pink-400",
      },
      {
        title: "Internal Tools",
        description: "Streamline your team's daily operations.",
        iconType: "tool",
        bgColor: "bg-[#FFEDD5] dark:bg-orange-950/40",
        iconColor: "text-[#EA580C] dark:text-orange-400",
      },
      {
        title: "CRM Systems",
        description: "Manage customers, sales and workflows.",
        iconType: "crm",
        bgColor: "bg-[#E0F2FE] dark:bg-sky-950/40",
        iconColor: "text-[#0284C7] dark:text-sky-400",
      },
    ],
    deliverables: [
      "Requirements analysis",
      "Information architecture",
      "UI/UX design",
      "Frontend development",
      "Backend & API development",
      "Database architecture",
      "Authentication & User roles",
      "Third-party integrations",
      "Performance optimization",
      "Testing & QA",
      "Deployment & DevOps",
    ],
    perfectFor: [
      {
        title: "Startups building a product",
        desc: "Getting from concept to a production-ready web application quickly.",
        icon: "rocket",
      },
      {
        title: "SMBs digitizing operations",
        desc: "Replacing fragile spreadsheets with automated operational web tools.",
        icon: "building",
      },
      {
        title: "Enterprises needing custom solutions",
        desc: "Tailored platforms that fit proprietary internal compliance and workflows.",
        icon: "shield",
      },
      {
        title: "Existing businesses upgrading systems",
        desc: "Modernizing legacy web systems with modern React & Next.js architectures.",
        icon: "refresh",
      },
    ],
    techStack: ["nextjs", "react", "nodejs", "postgresql", "prisma", "supabase", "typescript", "docker", "cloudflare"],
    faqs: [
      {
        question: "How long does a web application project take?",
        answer:
          "Typically between 4 to 12 weeks depending on scope, architecture complexity, and integrations. We break every project into iterative 2-week sprints with demoable increments.",
      },
      {
        question: "Can you integrate with our existing software?",
        answer:
          "Yes. We build robust API layers and secure webhooks to integrate seamlessly with your existing databases, legacy ERPs, payment gateways, and third-party SaaS tools.",
      },
      {
        question: "Can you build role-based dashboards?",
        answer:
          "Absolutely. We implement granular Role-Based Access Control (RBAC) with secure session handling, audit trails, and multi-tenant permission isolation.",
      },
      {
        question: "What happens after launch? Maintenance & support?",
        answer:
          "We provide a 30-day post-launch warranty, followed by flexible ongoing SLA maintenance packages including zero-downtime deployments, security patches, and performance monitoring.",
      },
    ],
    relatedWorkUrl: "/work?category=web-apps",
    mockup: {
      type: "dashboard",
      title: "SIMPLUXE Cloud Workspace",
      badge: "Live Dashboard",
      subtitle: "Enterprise RBAC & KPI analytics",
    },
  },
  {
    id: "ecommerce",
    number: "03",
    name: "E-commerce",
    tabLabel: "E-commerce",
    icon: ShoppingBag,
    headline: {
      normal: "High-converting storefronts built to ",
      highlight: "maximize speed & revenue.",
    },
    description:
      "Engineered online shopping experiences that eliminate checkout friction, load instantly on mobile, and turn first-time visitors into repeat brand advocates.",
    stats: [
      { value: "3.5x", label: "Average conversion increase" },
      { value: "₹10Cr+", label: "Client transactions handled" },
      { value: "0.4s", label: "Lightning checkout latency" },
    ],
    whatWeBuildSubtitle: "End-to-end commerce architectures designed for high volume sales.",
    whatWeBuild: [
      {
        title: "Custom DTC Storefronts",
        description: "Bespoke digital brand experiences with fluid micro-interactions and instant cart drawers.",
        iconType: "shopping-bag",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
        iconColor: "text-emerald-600 dark:text-emerald-400",
      },
      {
        title: "Multi-Vendor Marketplaces",
        description: "Scalable seller onboarding, automated commission splits, and vendor dashboards.",
        iconType: "store",
        bgColor: "bg-blue-50 dark:bg-blue-950/40",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: "B2B Wholesale Portals",
        description: "Tiered wholesale pricing, custom quotation pipelines, and bulk invoice ordering.",
        iconType: "briefcase",
        bgColor: "bg-purple-50 dark:bg-purple-950/40",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: "Subscription Commerce",
        description: "Automated recurring deliveries, membership perks, and self-serve customer management.",
        iconType: "refresh",
        bgColor: "bg-pink-50 dark:bg-pink-950/40",
        iconColor: "text-pink-600 dark:text-pink-400",
      },
    ],
    deliverables: [
      "Catalog modeling & inventory architecture",
      "Mobile-optimized checkout UX flow",
      "Stripe, Razorpay & UPI payment gateways",
      "Automated tax, invoice & shipping calculations",
      "Customer account hub & order history",
      "Abandoned cart recovery & SMS/Email flows",
      "Dynamic discount & coupon engine",
      "Search, filter & facet query optimization",
      "ERP & warehouse fulfillment webhooks",
      "PCI-DSS security compliance standards",
      "High-concurrency flash sale caching",
    ],
    perfectFor: [
      {
        title: "DTC consumer brands",
        desc: "Scaling beyond cookie-cutter templates to a custom high-retention shop.",
        icon: "shopping-bag",
      },
      {
        title: "B2B wholesale distributors",
        desc: "Automating high-ticket quotes, custom invoices, and repeat orders.",
        icon: "truck",
      },
      {
        title: "High-volume retailers",
        desc: "Needing resilience under flash sales and massive concurrent traffic.",
        icon: "zap",
      },
      {
        title: "Subscription businesses",
        desc: "Retaining members with seamless renewal and flexible pause options.",
        icon: "repeat",
      },
    ],
    techStack: ["nextjs", "react", "typescript", "stripe", "razorpay", "postgresql", "redis", "supabase"],
    faqs: [
      {
        question: "Can we connect Indian payment gateways like Razorpay, PhonePe & UPI?",
        answer:
          "Yes. We integrate native Indian gateways (Razorpay, Cashfree, UPI, NetBanking) as well as global payment rails like Stripe and PayPal with automated currency conversion.",
      },
      {
        question: "How do you handle inventory sync with our physical warehouse or ERP?",
        answer:
          "We engineer automated bi-directional webhooks and background workers that synchronize stock levels with your ERP or inventory software in real time.",
      },
      {
        question: "Can the checkout handle flash sale traffic spikes?",
        answer:
          "Yes. By isolating catalog views on edge CDN and queuing checkout submissions, our architectures comfortably handle thousands of concurrent checkout requests without crashing.",
      },
      {
        question: "Do you support custom subscription cycles?",
        answer:
          "Yes. We support custom weekly, monthly, and quarterly recurring billing with automated invoice generation and customer self-serve pause/skip controls.",
      },
    ],
    relatedWorkUrl: "/work?category=ecommerce",
    mockup: {
      type: "ecommerce",
      title: "Simpluxe Storefront Engine",
      badge: "Instant Checkout",
      subtitle: "Omnichannel checkout & inventory hub",
    },
  },
  {
    id: "mobile-apps",
    number: "04",
    name: "Mobile apps",
    tabLabel: "Mobile Apps",
    icon: Smartphone,
    headline: {
      normal: "Native-grade mobile applications built for ",
      highlight: "daily user engagement.",
    },
    description:
      "Crafted for iOS and Android with smooth 60 FPS transitions, offline-first reliability, and delightful tactile gestures that users love opening every day.",
    stats: [
      { value: "4.9★", label: "Average App Store rating" },
      { value: "500k+", label: "Active mobile users" },
      { value: "60 FPS", label: "Fluid native performance" },
    ],
    whatWeBuildSubtitle: "Cross-platform and native mobile apps engineered for production scale.",
    whatWeBuild: [
      {
        title: "iOS & Android Consumer Apps",
        description: "Feature-packed mobile apps with polished navigation, haptics, and social feeds.",
        iconType: "smartphone",
        bgColor: "bg-rose-50 dark:bg-rose-950/40",
        iconColor: "text-rose-600 dark:text-rose-400",
      },
      {
        title: "Enterprise Field Tools",
        description: "Offline-first inspection, logistics, and data collection apps for field teams.",
        iconType: "clipboard",
        bgColor: "bg-blue-50 dark:bg-blue-950/40",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: "On-Demand & Geolocation",
        description: "Live GPS tracking, real-time driver/customer coordination, and push alerts.",
        iconType: "map-pin",
        bgColor: "bg-amber-50 dark:bg-amber-950/40",
        iconColor: "text-amber-600 dark:text-amber-400",
      },
      {
        title: "Health & Habit Trackers",
        description: "Sensory feedback, device biometric security (Face ID), and localized notifications.",
        iconType: "activity",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
        iconColor: "text-emerald-600 dark:text-emerald-400",
      },
    ],
    deliverables: [
      "Cross-platform architecture (React Native / Flutter)",
      "Native iOS & Android compilation",
      "Offline local SQLite database sync",
      "Biometric auth (FaceID / Fingerprint)",
      "Push notification pipelines (APNs / FCM)",
      "In-App Purchases & store subscriptions",
      "Camera, GPS & hardware sensor access",
      "Dark / Light adaptive native theme",
      "Deep linking & universal routing",
      "Apple App Store & Google Play publishing",
      "Over-The-Air (OTA) continuous updates",
    ],
    perfectFor: [
      {
        title: "Founders launching a mobile MVP",
        desc: "Reaching both iPhone and Android users with a single, unified codebase.",
        icon: "smartphone",
      },
      {
        title: "Operations & Logistics teams",
        desc: "Equipping remote or on-field personnel with offline-capable tools.",
        icon: "truck",
      },
      {
        title: "Community & Social networks",
        desc: "Maximizing retention through instant push updates and reactive chat.",
        icon: "users",
      },
      {
        title: "FinTech & Secure services",
        desc: "Meeting strict mobile biometric, pin encryption, and telemetry standards.",
        icon: "shield",
      },
    ],
    techStack: ["reactnative", "flutter", "expo", "typescript", "supabase", "firebase", "swift", "kotlin"],
    faqs: [
      {
        question: "Do you build separate apps for iOS and Android or one codebase?",
        answer:
          "We use modern React Native and Flutter, which allows 90%+ code sharing across iOS and Android while preserving 100% native performance and gestures.",
      },
      {
        question: "Can the app work when the user has no internet connection?",
        answer:
          "Yes. We build offline-first architectures using local encrypted storage (SQLite / WatermelonDB) that automatically reconciles changes once back online.",
      },
      {
        question: "Do you handle the Apple App Store and Google Play approval process?",
        answer:
          "Yes. We handle end-to-end store provisioning, certificate signing, screenshot assets, privacy guidelines, and app submission through approval.",
      },
      {
        question: "How do updates work after the app is live in the stores?",
        answer:
          "With Expo and EAS Over-The-Air (OTA) updates, critical bug fixes and UI updates can be deployed directly to user devices instantly without waiting for app store re-review.",
      },
    ],
    relatedWorkUrl: "/work?category=mobile-apps",
    mockup: {
      type: "mobile",
      title: "Simpluxe Mobile Native Hub",
      badge: "iOS & Android",
      subtitle: "60 FPS offline-first mobile app",
    },
  },
  {
    id: "saas",
    number: "05",
    name: "SaaS products",
    tabLabel: "SaaS Products",
    icon: Package2,
    headline: {
      normal: "Multi-tenant software platforms engineered from ",
      highlight: "MVP to enterprise scale.",
    },
    description:
      "We build robust, subscription-driven software platforms featuring frictionless self-serve onboarding, tiered billing, workspace permissions, and audit-ready security.",
    stats: [
      { value: "99.99%", label: "Platform uptime SLA" },
      { value: "10x", label: "Faster user onboarding" },
      { value: "Multi-tenant", label: "Isolated data security" },
    ],
    whatWeBuildSubtitle: "Modern cloud software designed for recurring subscription growth.",
    whatWeBuild: [
      {
        title: "Multi-Tenant Workspaces",
        description: "Organization-level data isolation, custom domains, and granular role permissions.",
        iconType: "layers",
        bgColor: "bg-purple-50 dark:bg-purple-950/40",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: "Subscription & Metered Billing",
        description: "Stripe billing with seat pricing, usage thresholds, coupons, and tax automation.",
        iconType: "credit-card",
        bgColor: "bg-indigo-50 dark:bg-indigo-950/40",
        iconColor: "text-indigo-600 dark:text-indigo-400",
      },
      {
        title: "API-First Micro-SaaS",
        description: "Developer API keys, rate-limiting, documentation, and webhook delivery engines.",
        iconType: "code",
        bgColor: "bg-blue-50 dark:bg-blue-950/40",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: "Product Analytics & Audit Logs",
        description: "Track user events, feature usage, retention funnels, and enterprise compliance logs.",
        iconType: "bar-chart",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
        iconColor: "text-emerald-600 dark:text-emerald-400",
      },
    ],
    deliverables: [
      "Multi-tenant database schema architecture",
      "Stripe Subscriptions & customer portal",
      "Self-serve onboarding & invite flow",
      "Role-Based Access Control (Owner/Admin/Member)",
      "API key generation & rate-limiting middleware",
      "Webhook dispatcher & failure retry system",
      "Audit logging & enterprise compliance readiness",
      "Real-time team collaboration / websockets",
      "Automated transactional emails (Resend)",
      "Zero-downtime database migration tooling",
      "Health check monitoring & telemetry alerts",
    ],
    perfectFor: [
      {
        title: "B2B SaaS Founders",
        desc: "Launching subscription software without accumulating crippling early tech debt.",
        icon: "rocket",
      },
      {
        title: "Service agencies productizing",
        desc: "Transforming bespoke consulting workflows into recurring software revenue.",
        icon: "package",
      },
      {
        title: "Enterprise spin-offs",
        desc: "Commercializing internal proprietary tools into standalone commercial platforms.",
        icon: "building",
      },
      {
        title: "Bootstrapped builders",
        desc: "Iterating fast on product-market fit with rock-solid underlying engineering.",
        icon: "zap",
      },
    ],
    techStack: ["nextjs", "react", "typescript", "postgresql", "prisma", "stripe", "redis", "docker"],
    faqs: [
      {
        question: "How do you guarantee tenant data isolation in multi-tenant SaaS?",
        answer:
          "We implement PostgreSQL Row-Level Security (RLS) combined with organization schema namespaces, ensuring zero accidental cross-tenant data leaks at the database engine level.",
      },
      {
        question: "Can we charge per seat, per usage, or a flat monthly fee?",
        answer:
          "Yes. We support all common billing models in Stripe: per-seat licensing, tier-based feature gating, and metered usage with automated overage invoicing.",
      },
      {
        question: "How do team invites and member permissions work?",
        answer:
          "We build magic-link team invitation workflows where workspace administrators can assign granular roles (Admin, Editor, Viewer, Billing Only) with instant permission propagation.",
      },
      {
        question: "Can enterprise clients use Single Sign-On (SAML / Okta)?",
        answer:
          "Yes. We can architect enterprise SSO integration (SAML 2.0, Okta, Google Workspace, Azure AD) for frictionless corporate IT compliance.",
      },
    ],
    relatedWorkUrl: "/work?category=saas",
    mockup: {
      type: "saas",
      title: "Simpluxe Multi-Tenant Core",
      badge: "SaaS Scale",
      subtitle: "Stripe Billing & Workspace RBAC",
    },
  },
  {
    id: "branding",
    number: "06",
    name: "Branding & identity",
    tabLabel: "Branding",
    icon: Palette,
    headline: {
      normal: "Distinct visual identity systems that make ",
      highlight: "your company unforgettable.",
    },
    description:
      "We craft cohesive brand identities that communicate authority, evoke emotional resonance, and establish enduring market distinction across every physical and digital touchpoint.",
    stats: [
      { value: "100%", label: "Bespoke vector identity" },
      { value: "30+", label: "Brand systems crafted" },
      { value: "Full IP", label: "Complete asset ownership" },
    ],
    whatWeBuildSubtitle: "Comprehensive visual systems designed to stand the test of time.",
    whatWeBuild: [
      {
        title: "Logo Systems & Marks",
        description: "Primary, secondary, and responsive responsive responsive icon marks for all scales.",
        iconType: "palette",
        bgColor: "bg-amber-50 dark:bg-amber-950/40",
        iconColor: "text-amber-600 dark:text-amber-400",
      },
      {
        title: "Color & Typography Scales",
        description: "Curated harmonious palettes, WCAG contrast pairing, and editorial typographic hierarchy.",
        iconType: "type",
        bgColor: "bg-pink-50 dark:bg-pink-950/40",
        iconColor: "text-pink-600 dark:text-pink-400",
      },
      {
        title: "Brand Guidelines Manual",
        description: "Exhaustive documentation on clearspace, do's and don'ts, and consistent asset usage.",
        iconType: "book-open",
        bgColor: "bg-purple-50 dark:bg-purple-950/40",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: "Marketing & Social Collateral",
        description: "Stationery kits, pitch deck templates, social media assets, and vector icon libraries.",
        iconType: "image",
        bgColor: "bg-blue-50 dark:bg-blue-950/40",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
    ],
    deliverables: [
      "Brand positioning & competitor visual audit",
      "Primary & responsive vector logo suites",
      "App icon & favicon system at all resolutions",
      "Curated color palette with HEX, RGB & Pantone",
      "Typography pairing & commercial font licenses",
      "Design tokens for web & mobile developers",
      "Pitch deck & corporate presentation templates",
      "Social media templates & avatar kit",
      "Print-ready stationery & business cards",
      "Complete Brand Book & guideline PDF",
      "Full source files (AI, SVG, PNG, Figma)",
    ],
    perfectFor: [
      {
        title: "Early-stage founders",
        desc: "Establishing immediate prestige and authority before approaching investors.",
        icon: "sparkles",
      },
      {
        title: "Established firms rebranding",
        desc: "Shedding outdated legacy visuals in favor of a modern, premium aesthetic.",
        icon: "refresh",
      },
      {
        title: "Product-led companies",
        desc: "Requiring consistent design language across app interfaces and marketing.",
        icon: "layout",
      },
      {
        title: "Luxury & lifestyle creators",
        desc: "Craving bespoke typography and timeless editorial sophistication.",
        icon: "crown",
      },
    ],
    techStack: ["figma", "illustrator", "photoshop", "canva"],
    faqs: [
      {
        question: "How many logo concepts do you present?",
        answer:
          "We present 3 distinctly different creative directions with full real-world mockups (screens, stationery, apparel) before refining your chosen path to perfection.",
      },
      {
        question: "Do I get full copyright and ownership of the logos?",
        answer:
          "Yes. Upon project completion, 100% of the intellectual property, copyrights, and vector source assets transfer entirely to your business.",
      },
      {
        question: "Will the brand assets be ready for our web developers to use?",
        answer:
          "Yes. We supply web-ready SVG icons, CSS color tokens, and font pairing configurations ready for instant developer handoff.",
      },
      {
        question: "What files will I receive at the end?",
        answer:
          "You receive organized Figma libraries, vector AI/EPS files for print, SVG vectors for the web, high-res transparent PNGs, and a complete Brand Guidelines PDF.",
      },
    ],
    relatedWorkUrl: "/work?category=branding",
    mockup: {
      type: "branding",
      title: "Simpluxe Brand Identity Guide",
      badge: "Design Tokens",
      subtitle: "Bespoke typography & vector marks",
    },
  },
  {
    id: "ui-ux",
    number: "07",
    name: "UI/UX design",
    tabLabel: "UI/UX Design",
    icon: Layers,
    headline: {
      normal: "Human-centric digital interfaces engineered with ",
      highlight: "zero cognitive friction.",
    },
    description:
      "We design intuitive, research-driven user journeys and high-craft design systems that transform complex product workflows into clear, frictionless digital experiences.",
    stats: [
      { value: "0", label: "Cognitive user friction" },
      { value: "100+", label: "User journeys mapped" },
      { value: "Figma", label: "Production-ready token systems" },
    ],
    whatWeBuildSubtitle: "Design systems and interface prototypes tested for user clarity.",
    whatWeBuild: [
      {
        title: "User Journey & Flow Mapping",
        description: "Eliminate dead-ends and confusion with step-by-step psychological workflow maps.",
        iconType: "compass",
        bgColor: "bg-blue-50 dark:bg-blue-950/40",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: "Comprehensive Design Systems",
        description: "Standardized color, typography, input, modal, and button component tokens.",
        iconType: "layers",
        bgColor: "bg-purple-50 dark:bg-purple-950/40",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: "High-Fidelity Interactive Prototypes",
        description: "Clickable Figma prototypes with realistic animations for user testing and pitching.",
        iconType: "mouse-pointer",
        bgColor: "bg-pink-50 dark:bg-pink-950/40",
        iconColor: "text-pink-600 dark:text-pink-400",
      },
      {
        title: "Usability Testing & UX Audits",
        description: "Heuristic evaluation, accessibility checks (WCAG AA), and task completion analysis.",
        iconType: "check-circle",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
        iconColor: "text-emerald-600 dark:text-emerald-400",
      },
    ],
    deliverables: [
      "User persona & competitive UX benchmarking",
      "Information architecture & site wireframes",
      "Interactive Figma click-through prototype",
      "Full responsive screen designs (Desktop & Mobile)",
      "Dark mode & High-contrast variations",
      "Atomic design component library with auto-layout",
      "Micro-interaction & transition documentation",
      "Developer handoff specs with CSS tokens",
      "Micro-copy, empty states & error validations",
      "WCAG 2.1 AA accessibility compliance check",
      "Live Figma library link with continuous sync",
    ],
    perfectFor: [
      {
        title: "Complex technical products",
        desc: "Transforming dense data tables and multi-step forms into effortless UX.",
        icon: "layout",
      },
      {
        title: "Startups validating concepts",
        desc: "Presenting a polished clickable prototype to users before writing a line of code.",
        icon: "play",
      },
      {
        title: "Engineering teams lacking design",
        desc: "Receiving pixel-perfect design system tokens with zero guesswork.",
        icon: "code",
      },
      {
        title: "Apps suffering high churn",
        desc: "Identifying and resolving the exact onboarding friction points losing users.",
        icon: "trending-down",
      },
    ],
    techStack: ["figma", "photoshop", "illustrator", "tailwindcss"],
    faqs: [
      {
        question: "Can our engineering team easily build from your Figma files?",
        answer:
          "Yes. Every component uses strict Auto-Layout, standardized 8pt spacing grids, and named design tokens that map 1:1 to Tailwind CSS classes.",
      },
      {
        question: "Do you design both Desktop and Mobile responsive views?",
        answer:
          "Always. We design adaptive layouts for mobile viewports, tablets, and desktop resolutions, ensuring seamless usability across all screens.",
      },
      {
        question: "Can we test the design on real smartphones before coding?",
        answer:
          "Yes. We configure interactive prototypes in the Figma Mirror app, so you can tap through real buttons, modals, and gestures on your actual device.",
      },
      {
        question: "Do you include micro-animations and empty states?",
        answer:
          "Yes. We meticulously detail loading skeletons, error tooltips, empty states, and spring animations so developers don't have to guess.",
      },
    ],
    relatedWorkUrl: "/work?category=ui-ux",
    mockup: {
      type: "design",
      title: "Simpluxe Design Token Kit",
      badge: "Figma Library",
      subtitle: "8pt Grid & WCAG AA Accessible",
    },
  },
  {
    id: "automation",
    number: "08",
    name: "AI automation",
    tabLabel: "AI Automation",
    icon: Sparkles,
    headline: {
      normal: "Practical AI agents and workflows that ",
      highlight: "eliminate repetitive manual operations.",
    },
    description:
      "We engineer autonomous LLM-powered agents, intelligent document parsing pipelines, and deep API workflows that save hundreds of human hours every month.",
    stats: [
      { value: "85%", label: "Manual operations automated" },
      { value: "<250ms", label: "Average agent inference latency" },
      { value: "SOC2", label: "Data privacy & security safe" },
    ],
    whatWeBuildSubtitle: "Actionable AI infrastructure built for real operational efficiency.",
    whatWeBuild: [
      {
        title: "Custom LLM Agents",
        description: "Autonomous reasoning agents with access to your tools, databases, and APIs.",
        iconType: "bot",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
        iconColor: "text-emerald-600 dark:text-emerald-400",
      },
      {
        title: "Intelligent Document Extraction",
        description: "Automated OCR & extraction of invoices, contracts, and receipts into structured JSON.",
        iconType: "file-search",
        bgColor: "bg-purple-50 dark:bg-purple-950/40",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: "Support & Triage Bots",
        description: "24/7 intelligent ticketing, intent classification, and contextual CRM replies.",
        iconType: "message-square",
        bgColor: "bg-blue-50 dark:bg-blue-950/40",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: "Internal Knowledge RAG",
        description: "Search across company Notion, Google Drive, and PDFs with zero hallucination.",
        iconType: "database",
        bgColor: "bg-amber-50 dark:bg-amber-950/40",
        iconColor: "text-amber-600 dark:text-amber-400",
      },
    ],
    deliverables: [
      "Workflow discovery & automation feasibility audit",
      "Custom system prompt engineering & guardrails",
      "Vector embeddings & semantic retrieval (RAG)",
      "LLM tool-calling & webhook actions (Function calling)",
      "Automated document processing & validation pipeline",
      "Slack, WhatsApp & Email notification bots",
      "CRM & ERP automated record synchronizer",
      "Rate-limit & fall-back redundancy engineering",
      "PII data redaction & compliance safeguards",
      "Cost-per-token monitoring dashboard",
      "Continuous prompt evaluation & testing suite",
    ],
    perfectFor: [
      {
        title: "High-volume operational teams",
        desc: "Drowning in manual copy-pasting, invoice entry, and email triage.",
        icon: "zap",
      },
      {
        title: "Customer support departments",
        desc: "Answering 80% of tier-1 customer inquiries immediately 24/7.",
        icon: "headphones",
      },
      {
        title: "Finance & compliance firms",
        desc: "Extracting structured data from thousands of PDF contracts without errors.",
        icon: "file-text",
      },
      {
        title: "Fast-moving tech startups",
        desc: "Embedding native AI intelligence into their core software product.",
        icon: "sparkles",
      },
    ],
    techStack: ["openai", "anthropic", "langchain", "python", "fastapi", "postgresql", "supabase", "docker"],
    faqs: [
      {
        question: "Is our proprietary company data used to train public AI models?",
        answer:
          "No, absolutely not. We use enterprise API agreements (OpenAI, Anthropic) with strict zero-data retention policies where your data is never used for model training.",
      },
      {
        question: "How do you prevent the AI from making up facts (hallucinating)?",
        answer:
          "We use strict Retrieval-Augmented Generation (RAG) with ground-truth citation checks, system guardrails, and validation schemas that reject answers not verified by source documents.",
      },
      {
        question: "Can the AI trigger real actions like sending an email or updating a database?",
        answer:
          "Yes. Using LLM function calling and secure webhooks, the AI can query APIs, update status in your CRM, dispatch emails, or create records with human-in-the-loop approvals.",
      },
      {
        question: "How do you control AI API token costs?",
        answer:
          "We implement semantic caching, prompt token compression, and smart model routing (e.g. fast cheap models for triage, larger reasoning models only when necessary).",
      },
    ],
    relatedWorkUrl: "/work?category=automation",
    mockup: {
      type: "ai",
      title: "Simpluxe AI Agent Pipeline",
      badge: "Autonomous Ops",
      subtitle: "RAG Knowledge & Tool-calling Engine",
    },
  },
  {
    id: "custom-software",
    number: "09",
    name: "Custom software",
    tabLabel: "Custom Software",
    icon: Cpu,
    headline: {
      normal: "Bespoke software architecture engineered for ",
      highlight: "complex enterprise logic.",
    },
    description:
      "When off-the-shelf software falls short, we engineer custom backend systems, resilient microservices, and dedicated business engines built precisely for your organizational requirements.",
    stats: [
      { value: "Zero", label: "Vendor lock-in or bloat" },
      { value: "100%", label: "Custom API & data pipelines" },
      { value: "Enterprise", label: "Scalable cloud architecture" },
    ],
    whatWeBuildSubtitle: "Dedicated software engineering tailored to your proprietary operations.",
    whatWeBuild: [
      {
        title: "Enterprise Backoffices & ERPs",
        description: "Unified command centers integrating inventory, procurement, and team operations.",
        iconType: "cpu",
        bgColor: "bg-blue-50 dark:bg-blue-950/40",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: "High-Throughput API Bridges",
        description: "Low-latency REST & GraphQL microservices bridging disparate legacy systems.",
        iconType: "network",
        bgColor: "bg-purple-50 dark:bg-purple-950/40",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: "Legacy Modernization",
        description: "Gradual zero-downtime refactoring of monolithic legacy code into modern stacks.",
        iconType: "refresh",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
        iconColor: "text-emerald-600 dark:text-emerald-400",
      },
      {
        title: "Data Pipelines & ETL",
        description: "Automated aggregation, transformation, and warehousing of large datasets.",
        iconType: "database",
        bgColor: "bg-amber-50 dark:bg-amber-950/40",
        iconColor: "text-amber-600 dark:text-amber-400",
      },
    ],
    deliverables: [
      "Technical discovery & system architecture blueprint",
      "Normalized relational database modeling (PostgreSQL)",
      "High-performance REST & GraphQL API services",
      "Microservice containerization with Docker",
      "Role-based permissions & audit log trails",
      "Automated unit, integration & end-to-end test suites",
      "CI/CD deployment pipelines with rollback safety",
      "Asynchronous background worker queues (Redis/BullMQ)",
      "Cloud infrastructure provisioning (AWS / Cloudflare)",
      "Comprehensive Swagger / OpenAPI documentation",
      "Complete source code repository ownership",
    ],
    perfectFor: [
      {
        title: "Businesses outgrowing SaaS tools",
        desc: "Escaping prohibitive subscription fees and inflexible pre-made feature sets.",
        icon: "unlock",
      },
      {
        title: "Organizations with proprietary logic",
        desc: "Requiring exact calculation rules and workflows no off-the-shelf software offers.",
        icon: "cpu",
      },
      {
        title: "Companies with legacy systems",
        desc: "Modernizing outdated infrastructure without interrupting daily revenue operations.",
        icon: "refresh",
      },
      {
        title: "Security-critical enterprises",
        desc: "Demanding private on-prem or isolated private cloud deployments.",
        icon: "shield",
      },
    ],
    techStack: ["nodejs", "fastapi", "python", "postgresql", "docker", "redis", "aws", "typescript"],
    faqs: [
      {
        question: "Who owns the code and intellectual property of custom software?",
        answer:
          "You own 100% of the intellectual property, code repository, database schemas, and documentation upon final delivery with zero licensing lock-in.",
      },
      {
        question: "Can you modernize our existing old software without stopping business?",
        answer:
          "Yes. We use the Strangler Fig pattern to build modern micro-modules around your existing system, migrating traffic gradually with zero downtime.",
      },
      {
        question: "Can this software be hosted on our own private cloud or on-prem servers?",
        answer:
          "Yes. We package all solutions in Docker containers with infrastructure-as-code scripts, deployable to your AWS, Azure, GCP, or private servers.",
      },
      {
        question: "How do you ensure data integrity and prevent system crashes?",
        answer:
          "We implement atomic database transactions, rigorous automated regression testing, database connection pooling, and automated error tracking.",
      },
    ],
    relatedWorkUrl: "/work?category=custom-software",
    mockup: {
      type: "custom",
      title: "Simpluxe Enterprise System Core",
      badge: "Custom Engine",
      subtitle: "High-throughput API & database mesh",
    },
  },
];

export const BUILT_BUSINESS_NEEDS = [
  {
    id: "launch",
    title: "Launch",
    subtitle: "Need something live quickly?",
    services: ["Websites", "Landing Pages", "Brand Identity"],
    iconName: "rocket",
    targetTab: "websites",
    badgeColor: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-400 dark:border-pink-900",
    accentColor: "#DB2777",
  },
  {
    id: "operate",
    title: "Operate",
    subtitle: "Need to simplify your business?",
    services: ["Web Apps", "Custom Software", "AI Automation"],
    iconName: "sliders",
    targetTab: "web-apps",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900",
    accentColor: "#2563EB",
  },
  {
    id: "sell",
    title: "Sell",
    subtitle: "Need a better digital storefront?",
    services: ["E-commerce", "Customer Portals", "Payment Integration"],
    iconName: "shopping-cart",
    targetTab: "ecommerce",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900",
    accentColor: "#EA580C",
  },
  {
    id: "scale",
    title: "Scale",
    subtitle: "Building for thousands of users?",
    services: ["SaaS Products", "Web Applications", "Mobile Apps"],
    iconName: "bar-chart",
    targetTab: "saas",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-900",
    accentColor: "#7C3AED",
  },
  {
    id: "transform",
    title: "Transform",
    subtitle: "Need a new digital direction?",
    services: ["Brand Refresh", "Custom Development"],
    iconName: "sparkles",
    targetTab: "branding",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900",
    accentColor: "#E11D48",
  },
];
