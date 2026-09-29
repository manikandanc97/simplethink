# PHASE 3 — LARGE COMPONENT AUDIT

Threshold: 250+ lines OR multiple unrelated responsibilities.

---

## 1. `lib/data/services.ts` — 1,462 lines

**Current responsibility:** Single massive data file containing all service definitions — descriptions, stats, mockup badges, tech stacks, deliverables, FAQs, whatWeBuild lists, audit lists.
**Should remain:** All data content. This is pure data with no UI mixing.
**Should be extracted:** Nothing. The file is large because the domain data is genuinely large. It is already correctly in `lib/data/` with no UI logic.
**Risk level:** N/A — data file, no decomposition needed.
**Verdict:** KEEP AS-IS. Large ≠ bad when it's pure, domain-specific data.

---

## 2. `components/services/services-hero.tsx` — 337 lines (now ~326 after cleanup)

**Current responsibility:**
- Responsive two-column layout (breadcrumb, title, description, value props)
- 8+ floating animated decoration badges (motion.div elements)
- CldImage 3D illustration with gradient masking
- Ambient glow backgrounds

**Should remain in `services-hero.tsx`:**
- The overall hero section layout and column structure
- Breadcrumb nav
- Title/description/value props (LEFT column)

**Could be extracted:**
- `HeroFloatingBadges` — the right column's 8 floating `motion.div` badge elements
- These are self-contained, animation-bearing presentational elements

**Risk level:** MEDIUM — animations are tightly coupled to parent layout (positioning uses absolute inside relative container). Extracting risks breaking layout/positioning.
**Verdict:** KEEP AS-IS. The motion elements must know their parent dimensions for absolute positioning. Extracting would require threading container refs or using a render-prop pattern — unnecessary complexity for marginal decomposition.

---

## 3. `components/services/services-active-showcase.tsx` — 337 lines

**Current responsibility:**
- Two-column layout accepting a `ServiceData` prop
- LEFT: `AnimatePresence`-wrapped service content (number, headline, description, CTA buttons, stats grid)
- RIGHT: Full mock app UI (window header, sidebar nav, KPI cards, SVG chart, activity list)

**Responsibilities that should remain:**
- Outer layout grid
- Accepting `service` prop

**Responsibilities that could be extracted:**
- `ServiceShowcaseContent` (the LEFT column: headline, CTAs, stats) — a purely presentational leaf
- `ServiceMockupWindow` (the RIGHT column: the simulated dashboard window) — entirely self-contained UI

**Proposed structure:**
```
components/services/
  services-active-showcase.tsx   ← orchestrator (keeps layout, wires props)
  showcase/
    services-showcase-content.tsx  ← left column
    services-mockup-window.tsx      ← right column (mock dashboard)
```

**Risk level:** LOW. The LEFT column data flows cleanly from the `service` prop. The RIGHT column is a purely static UI element.
**Verdict:** EXTRACT `services-mockup-window.tsx`. This is a 150-line purely presentational section.

---

## 4. `components/leads/lead-form.tsx` — 312 lines

**Current responsibility:**
- Honeypot/anti-spam hidden fields
- Global error banner with alternate contact links
- Project type custom dropdown (state, animation, keyboard nav)
- Name/Email/Phone/Company/Description form fields
- Submit button with pending state
- Trust badges
- Alternate direct contact links

**Responsibilities that should remain in `lead-form.tsx`:**
- Form state management (`useActionState`)
- Field error binding
- Submission (`submitLead` server action)
- Success state redirect

**Could be extracted:**
- `LeadFormTrustFooter` — the bottom trust badges + alternate contacts (~40 lines). However, this is genuinely tied to the form footer and would not be reused.
- **No meaningful extraction** — this 312-line form is cohesive and single-purpose. Splitting would create artificial fragmentation.

**Verdict:** KEEP AS-IS. No extraction. 312 lines is acceptable for a feature-complete form with multiple responsibilities that are genuinely inseparable (field errors bound to state, success state gates the whole form).

---

## 5. `components/work/work-hero.tsx` — 292 lines

**Similar assessment to `services-hero.tsx`:**
- Two-column layout with animated floating badges (right column)
- Hero content (left column)
- Badge elements are absolutely positioned inside relative container

**Verdict:** KEEP AS-IS. Same reasoning as `services-hero.tsx`.

---

## 6. `components/workbench/hero-3d-coder.tsx` — 286 lines

**Current responsibility:**
- Mouse-tracking parallax tilt effect (motion hooks)
- 3D coder illustration via `CldImage`
- Several floating decorative badges
- Inline floating code elements

**Should remain:** All. This is a single self-contained animation component with zero business logic.
**Verdict:** KEEP AS-IS. The entire file is a single visual component.

---

## 7. `components/contact/contact-hero.tsx` — 258 lines

**Current responsibility:**
- Two-column hero with left content (breadcrumb, title, value props) and right-side `LeadForm`
- Complex form integration with right column

**Verdict:** KEEP AS-IS. The form integration is domain-specific to this hero and not reusable.

---

## Summary — Actionable Extractions

| Component | Lines Before | Lines After | Status |
|---|---|---|---|
| `services-active-showcase.tsx` | 337 | ~180 | EXTRACT mockup to `showcase/services-mockup-window.tsx` |
| `services-hero.tsx` | 326 | 326 | KEEP |
| `lead-form.tsx` | 312 | 312 | KEEP |
| `work-hero.tsx` | 292 | 292 | KEEP |
| `hero-3d-coder.tsx` | 286 | 286 | KEEP |
| `contact-hero.tsx` | 258 | 258 | KEEP |
| `app/loading.tsx` | 253 | 253 | KEEP (complex animation, single-purpose) |
| `about-hero.tsx` | 247 | 247 | KEEP |

---

## Phase D — Content / UI / Logic Separation Audit

| Layer | Status |
|---|---|
| `lib/data/` | ✅ Correct. All domain data lives here. |
| `components/` | ✅ Correct. Presentation only. |
| `hooks/` | ✅ Only behavioral hooks (`useLead`, etc.) |
| `lib/` | ✅ Server actions in `lib/leads/`, utilities in `lib/utils.ts` |
| `types/` | ✅ Shared types properly in `types/faq.ts` etc. |

No architecture violations found. The content/UI/logic separation is already correct.
