# PHASE 4 — DESIGN SYSTEM AUDIT

Audit of the existing codebase for design system consistency and UI primitive usage.

## 1. COLORS
- **Hardcoded Colors:** Widespread use of hex codes (`#0891B2`, `#D23D78`, etc.) and `oklch` found across `mockups/` components, `hero-3d-coder`, and SVG inline styling. 
  - **Classification:** **INTENTIONAL**. These are required for brand artwork, specific gradients, illustrative mockups, and geometry. They do not belong in generic layout CSS.
- **Variable Wrappers:** Widespread usage of `bg-[var(--background)]`, `text-[var(--muted-foreground)]`, `border-[var(--surface-elevated)]` instead of native semantic Tailwind utility classes like `bg-background`, `text-muted-foreground`, `border-surface-elevated`.
  - **Classification:** **MEDIUM**. These should be normalized to standard semantic utility classes for cleaner, shorter code. Found in ~20 files (e.g. `work-controls.tsx`, `services-hero.tsx`, `work-project-details.tsx`).

## 2. TYPOGRAPHY
- **Typography Classes:** Global typography classes (`type-h1`, `type-h2`, `type-lead`, `type-body`, etc.) are established in `globals.css` and applied appropriately in shared primitives (like `section-header.tsx`).
  - **Classification:** **LOW / INTENTIONAL**.

## 3. SPACING & RESPONSIVE PATTERNS
- **Arbitrary Spacing:** Found instances of `w-[32rem]`, `h-[550px]`, `w-[85%]` in hero sections and ambient backgrounds.
  - **Classification:** **INTENTIONAL**. These govern absolute positioning for floating backgrounds, decorative elements, and specific grid layouts where semantic spacing scales do not apply.

## 4. CONTAINERS
- **Manual Container Classes:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` is manually written in a few places (`site-footer.tsx`, `faq-section.tsx`) instead of using the `Container` primitive.
  - **Classification:** **LOW**. Can be standardized safely where appropriate.

## 5. BUTTONS
- **Raw Button Classes:** Widespread manual implementation of the primary CTA button. Example: `inline-flex items-center gap-2 px-6 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-elevated...` is duplicated across `services-active-showcase.tsx`, `work-project-details.tsx`, `cta-banner.tsx`.
  - **Classification:** **HIGH**. These components should use the existing `<Button>` primitive (`<Button variant="default">`) to ensure consistency in hover states, accessibility, and scaling.

## 6. SECTION HEADERS & PILLS
- **Manual Section Headers:** The `<SectionHeader>` shared primitive exists, but several components manually recreate the exact layout (eyebrow pill with a dot, `H2`/`H3` title, description). Found in `services-what-we-build.tsx`, `services-tech-stack.tsx`, `services-deliverables-audience.tsx`.
  - **Classification:** **HIGH**. Repeated header sections should use the existing `<SectionHeader>` primitive to ensure typography and spacing consistency.

## 7. RADIUS & SHADOWS
- **Custom Shadows:** Shadows like `shadow-[0_4px_16px_rgba(...)]` exist in `mobile-bottom-nav.tsx` and `work-project-details.tsx`.
  - **Classification:** **INTENTIONAL**. These are specific visual treatments (e.g. glowing nav bar). General cards properly use `shadow-card` and `shadow-elevated`.

---

## IMPLEMENTATION PLAN

**HIGH Priority (Will implement):**
1. Refactor manual primary CTA button patterns to use `<Button>`.
2. Refactor duplicated section header structures to use `<SectionHeader>`.

**MEDIUM Priority (Will implement):**
3. Replace raw `var(--...)` Tailwind arbitrary values (e.g. `bg-[var(--background)]`) with their proper semantic class equivalents (`bg-background`).

**LOW Priority (Will implement):**
4. Standardize manual containers to use `<Container>`.

**INTENTIONAL (Will NOT modify):**
- Mockup SVGs, hardcoded colors in art/gradients, arbitrary spacing for absolute decorative elements, custom specific shadows.
