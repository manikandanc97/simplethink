# PHASE 2 DUPLICATION AUDIT

## 1. CTA Banner Components

**File A:** `components/about/about-cta.tsx`
**File B:** `components/services/services-cta-banner.tsx`, `components/work/work-cta-banner.tsx`
**What is duplicated:** The entire UI wrapper, gradients, layout structure, and icon containers.
**What differs:** Text (eyebrow, title, subtitle), button text, lead form source payloads.
**Should it be shared?** Yes.
**Recommended Abstraction:** `components/shared/cta-banner.tsx` with typed variants and text props.
**Risk level:** Low.

## 2. FAQ Sections

**File A:** `components/sections/faq.tsx`
**File B:** `components/about/about-faq-section.tsx`, `components/contact/contact-faq.tsx`, `components/services/services-faq-section.tsx`, `components/work/work-faq-section.tsx`
**What is duplicated:** The two-column grid layout, sticky left-column containing `SectionHeader` and `FaqContactCard`, and the mapping over an array of `FAQItem` objects using `FaqAccordionItem`.
**What differs:** The array of FAQ items, the texts provided to `SectionHeader`, and slight background ambient decor (in `faq.tsx` and `services-faq-section.tsx`).
**Should it be shared?** Yes.
**Recommended Abstraction:** `components/shared/faq-section.tsx` that accepts `faqs`, `headerProps`, and an optional `withAmbientDecor` boolean.
**Risk level:** Low.

## 3. Form Duplication

**Result:** No duplication found.
The codebase appears to centralize all form logic inside `components/leads/lead-form.tsx`. There are no standalone `contact-form.tsx` or `project-inquiry-form.tsx` files. The lead form handles dynamic dropdowns and sources internally.
**Risk level:** N/A.

## 4. Section Header Duplication

**Result:** No manually implemented section headers found.
All major sections across the repository properly import and use `components/ui/section-header.tsx` with standard props (`eyebrow`, `title`, `highlightedText`, `description`).
**Risk level:** N/A.

## Summary

The focus of Phase 2 will be consolidating the **CTA Banners** and the **FAQ Sections**. All other mentioned UI patterns (Forms, Section Headers) are already correctly centralized.
