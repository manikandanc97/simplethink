# PHASE 3 — DEAD CODE AUDIT

Performed by: full reference analysis across `app/`, `components/`, `lib/`, `hooks/`, `config/`, `types/`.

---

## CANDIDATE 1 — `components/services/services-faq.tsx`

**FILE:** `components/services/services-faq.tsx`
**REASON:** Exports `ServicesFaq` component. Zero import found anywhere outside its own file.
The services page (`services-view.tsx`) uses `ServicesFaqSection` (via `components/services/services-faq-section.tsx`), not `ServicesFaq`.
**REFERENCES:**
- Only defines `ServicesFaq` but is never imported in `pages/services-view.tsx`, `app/`, or any other component.
- `lib/data/services-faq.ts` → imported by this file and `services-standards.tsx`. Neither is used by `services-view.tsx`.
**SAFE TO DELETE:** YES
**CONFIDENCE:** HIGH
**DEPENDENCIES:** `lib/data/services-faq.ts` (partially, see Candidate 2)

---

## CANDIDATE 2 — `components/services/services-standards.tsx`

**FILE:** `components/services/services-standards.tsx`
**REASON:** Exports `ServicesStandards`. Zero import found anywhere.
**REFERENCES:** Defined only in its own file. Not imported in `services-view.tsx`, `pages/`, or `app/`.
**SAFE TO DELETE:** YES
**CONFIDENCE:** HIGH
**DEPENDENCIES:** `lib/data/services-faq.ts` (partially)

---

## CANDIDATE 3 — `components/services/services-capabilities-list.tsx`

**FILE:** `components/services/services-capabilities-list.tsx`
**REASON:** Exports `ServicesCapabilitiesList`. No import found anywhere in `pages/`, `app/`, or other components.
**REFERENCES:** Defined only in its own file.
**SAFE TO DELETE:** YES
**CONFIDENCE:** HIGH
**DEPENDENCIES:** `lib/data/services.ts`

---

## CANDIDATE 4 — `components/services/services-filter-bar.tsx`

**FILE:** `components/services/services-filter-bar.tsx`
**REASON:** Exports `ServicesFilterBar`. Not used by `services-view.tsx` or any page.
**REFERENCES:** Defined only in its own file.
**SAFE TO DELETE:** YES
**CONFIDENCE:** HIGH
**DEPENDENCIES:** `lib/data/services.ts`

---

## CANDIDATE 5 — `components/services/services-blueprint-panel.tsx`

**FILE:** `components/services/services-blueprint-panel.tsx`
**REASON:** Exports `ServicesBlueprintPanel`. Not used by `services-view.tsx`, `app/`, or any consumer.
**REFERENCES:** Defined only in its own file. Imports `blueprint-canvas.tsx` which is also potentially orphaned.
**SAFE TO DELETE:** YES
**CONFIDENCE:** HIGH
**DEPENDENCIES:** `blueprint-canvas.tsx`, `blueprint-node.tsx`

---

## CANDIDATE 6 — `components/services/blueprint-canvas.tsx`

**FILE:** `components/services/blueprint-canvas.tsx`
**REASON:** Imported only by `services-blueprint-panel.tsx` (Candidate 5). If the panel is removed, this becomes orphaned.
**REFERENCES:** Only `services-blueprint-panel.tsx`.
**SAFE TO DELETE:** YES (contingent on Candidate 5 deletion)
**CONFIDENCE:** HIGH
**DEPENDENCIES:** `blueprint-node.tsx`

---

## CANDIDATE 7 — `components/services/blueprint-node.tsx`

**FILE:** `components/services/blueprint-node.tsx`
**REASON:** Imported only by `blueprint-canvas.tsx` (Candidate 6). Transitively orphaned.
**REFERENCES:** Only `blueprint-canvas.tsx`.
**SAFE TO DELETE:** YES (contingent on Candidate 6 deletion)
**CONFIDENCE:** HIGH
**DEPENDENCIES:** None

---

## CANDIDATE 8 — `components/services/services-business-needs.tsx`

**FILE:** `components/services/services-business-needs.tsx`
**REASON:** Exports `ServicesBusinessNeeds`. Not used by `services-view.tsx`, `app/`, or any consumer.
**REFERENCES:** Defined only in its own file.
**SAFE TO DELETE:** YES
**CONFIDENCE:** HIGH
**DEPENDENCIES:** `lib/data/services.ts` (BUILT_BUSINESS_NEEDS)

---

## CANDIDATE 9 — `lib/data/services-faq.ts`

**FILE:** `lib/data/services-faq.ts`
**REASON:** Exports `SERVICES_FAQS` (used by dead `services-faq.tsx`) and `ENGINEERING_STANDARDS` (used by dead `services-standards.tsx`). If all consumers are deleted, this file becomes dead.
**REFERENCES:** Consumed only by Candidates 1 and 2.
**SAFE TO DELETE:** YES (contingent on Candidates 1 and 2 deletion)
**CONFIDENCE:** HIGH
**DEPENDENCIES:** None

---

## CANDIDATE 10 — Unused imports in live files (lint warnings)

**FILE:** `components/services/services-hero.tsx`
**REASON:** Imports `AnimatedArrowRight` and uses `openLead` + `handleScrollToTabs` but they are defined and never called in JSX.
**SAFE TO DELETE:** PARTIAL — remove unused imports only (not the file)
**CONFIDENCE:** HIGH

**FILE:** `components/workbench/workbench-hero.tsx`
**REASON:** `prefersReducedMotion` and `SCROLL_EASE` imported but not called.
**SAFE TO DELETE:** PARTIAL — remove unused imports only
**CONFIDENCE:** HIGH

**FILE:** `components/workbench/hero-3d-coder.tsx`
**REASON:** `SCROLL_EASE` imported but not called (only `prefersReducedMotion` is used at line 55).
**SAFE TO DELETE:** PARTIAL — remove unused `SCROLL_EASE` import only
**CONFIDENCE:** HIGH

**FILE:** `components/sections/cta.tsx`
**REASON:** `prefersReducedMotion` and `SCROLL_EASE` imported but not called.
**SAFE TO DELETE:** PARTIAL — remove unused imports only
**CONFIDENCE:** HIGH

**FILE:** `components/services/services-what-we-build.tsx`
**REASON:** `currentIndex` is assigned but never used.
**SAFE TO DELETE:** PARTIAL — remove unused variable
**CONFIDENCE:** HIGH

---

## KEPT FILES AND WHY

| File | Kept Because |
|---|---|
| `lib/data/services.ts` | Core data — heavily used by live services page |
| `components/services/services-hero.tsx` | Used by `services-view.tsx` |
| `components/services/services-active-showcase.tsx` | Used by `services-view.tsx` |
| `components/services/services-tabs-bar.tsx` | Used by `services-view.tsx` |
| `components/services/services-what-we-build.tsx` | Used by `services-view.tsx` |
| `components/services/services-deliverables-audience.tsx` | Used by `services-view.tsx` |
| `components/services/services-tech-stack.tsx` | Used by `services-view.tsx` |
| `components/services/services-faq-section.tsx` | Used — delegates to `SharedFaqSection` |
| `components/services/services-cta-banner.tsx` | Used via page composition |

---

## UNCERTAIN CANDIDATES

None. All candidates above were verified with reference analysis.
