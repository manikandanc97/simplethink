# Motion System Audit

## Existing Animations
The codebase currently relies on `motion/react` across numerous files. 
There are around 50+ instances of files utilizing `import { motion } from "motion/react"`.

### Key Components Using Motion
- **Hero Sections** (`workbench-hero`, `services-hero`, `about-hero`, `contact-hero`, `work-hero`)
- **UI Elements** (`section-header.tsx`, `page-banner.tsx`, `animated-icon.tsx`, `animated-counter.tsx`, `navigation-progress.tsx`)
- **Sections** (`philosophy.tsx`, `what-we-build.tsx`, `tech-stack.tsx`, `how-we-work.tsx`, `faq-section.tsx`)
- **Mockups & Cards** (`services-mockup-window.tsx`, `experiment-card.tsx`, `what-we-build-card.tsx`, `tech-stack-card.tsx`)

### Used APIs
- **`AnimatePresence`**: Found in 17 files, typically for tab content (`services-what-we-build.tsx`, `tech-stack.tsx`), dropdowns/accordions (`faq-accordion-item.tsx`), and mockups.
- **`whileInView` & `viewport`**: Heavily used for scroll reveals (`workbench-hero.tsx` etc.).
- **`variants`**: Found in scratch/hero concepts and `section-header.tsx`.
- **`layoutId`**: Expected in tabs and navigation.
- **`useScroll` / `useTransform`**: Used for some scroll-linked animations.

## Observations
- **Inconsistent Easing & Timing**: There is duplication of raw `initial={{ opacity: 0 }}` and `animate={{ opacity: 1 }}` scattered across many files, with varying transitions (e.g. some use `duration: 0.8, type: "spring"`, some use `duration: 1`, others use `duration: 0.5`).
- **Repetitive Definitions**: Repeated variant declarations and `whileInView` configurations across components.
- **Performance Risks**: Overuse of `motion.div` for every small detail without a shared variants system.
- **Hero Overload**: Hero components contain many standalone animations that could be unified under a stagger system.

## Recommendations for Global Motion Language
We will define a centralized motion language (e.g. `lib/motion.ts` or `components/ui/motion-system.ts`) to provide consistent:
- `fadeUp`
- `fadeIn`
- `scaleIn`
- `staggerContainer` and `staggerItem`
- `hoverLift` and `hoverScale`
- `viewportReveal` (standardized `once: true`, `amount: 0.15`)
- `spring` transitions for interactive UI.

This will reduce code duplication and unify the timing and easing system across the entire site.
