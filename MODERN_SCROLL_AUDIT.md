# Modern Scroll Animation System - Audit

## 1. Current Scroll Animations
- **Section Reveals**: A foundational reveal system exists in `lib/motion.ts` (`viewportReveal`, `fadeUp`, `staggerContainer`). `SectionHeader` uses this well with `whileInView="visible"` and `viewport={{ once: true, amount: 0.15 }}`.
- **Hero Sections**: Current hero components (`workbench-hero.tsx`, `work-hero.tsx`) rely primarily on load-time animations (`initial` -> `animate`) rather than scroll-linked animations (`useScroll`). 
- **Mouse Parallax**: `hero-3d-coder.tsx` implements heavy mouse-movement parallax using `useMotionValue` and `onPointerMove`, but lacks scroll-based parallax.
- **Interactive Sections**: `how-we-work.tsx` and `selected-work.tsx` use `AnimatePresence` for state changes (tab clicks/filtering), but they lack robust scroll-triggered or scroll-linked progressions. 

## 2. Duplicate Patterns
- Many components manually declare `initial={{ opacity: 0, y: ... }}` and `whileInView={{ opacity: 1, y: 0 }}` inline rather than relying on the shared variants from `lib/motion.ts`.
- Repeated inline viewport settings (`viewport={{ once: true }}`) instead of using the standardized `viewportReveal.viewport`.

## 3. Weak / Basic Animations
- **Static Content Blocks**: Below the `SectionHeader`, many content grids and cards (like in `selected-work.tsx`) appear immediately without a subtle stagger or scroll-triggered reveal.
- **Lack of Depth (Parallax)**: There is virtually no scroll-linked depth. Backgrounds and foregrounds scroll at the exact same rate.
- **Missing Scroll-Linked Motion**: There is no use of `useScroll` to tie visual changes (opacity, scale, y-translation) directly to the user's scroll progress in key marketing sections.

## 4. Animations That Can Be Improved
- **Section Headers**: The highlighted SVG underline animation is a bit long (1s). It can be refined for a snappier, premium feel.
- **Project Cards (`selected-work.tsx`)**: Currently use basic filtering animations. Need staggered entry as they scroll into view, and refined hover states (subtle y-shift and image scale).
- **Hero Sections**: Should incorporate `useScroll` and `useTransform` so that as the user scrolls down, the hero text/visuals subtly parallax or fade out, creating a continuous visual flow into the next section.
- **Images/Visuals**: Large visuals lack the subtle `scale: 1.02` scroll-linked movement requested in the new design language.

## 5. Sections That Need Scroll Interaction
- **Hero Sections (`work-hero.tsx`, `about-hero.tsx`, `services-hero.tsx`)**: Implement scroll-linked parallax (scale, opacity, and y-transform).
- **How We Work (`how-we-work.tsx`)**: Prime candidate for **Sticky Storytelling**. The current click-through steps can be transformed or augmented by scroll progress, locking the visual on one side while narrative scrolls on the other.
- **Selected Work (`selected-work.tsx`)**: Implement staggered scroll reveals for project cards, and depth-based hover effects.
- **Services (`services-active-showcase.tsx`, `services-hero.tsx`)**: Add staggered reveals for service items and subtle parallax to large visuals.

## 6. Sections That Should Remain Static
- Standard text paragraphs, legal pages, footer links, small labels, and dense data/form sections should remain static to ensure readability and accessibility.
- Navigation should only have subtle scroll-state changes (e.g., transparent to frosted glass), without jumping or hiding completely.

## 7. Performance Concerns
- **Scroll Listeners**: Ensure we are strictly using Motion's `useScroll` and `useTransform` instead of native `window.addEventListener("scroll")` which can cause layout thrashing.
- **GPU Acceleration**: We must ensure scroll animations only target `opacity` and `transform` (`y`, `scale`). Avoid animating `height`, `margin`, etc. during scroll.
- **Reduced Motion**: We must strictly respect `prefers-reduced-motion`. `hero-3d-coder.tsx` has logic for this, but the global scroll-linked animations (`useScroll`) must also gracefully degrade or be disabled when reduced motion is preferred.
- **Mobile Considerations**: Mobile devices should use significantly reduced parallax and disable sticky sections if they cause overflow or poor UX.
