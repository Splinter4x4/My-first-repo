# QA checklist

Run this before declaring a page done. It has three parts: the
doesn't-look-generated gate, fundamentals (accessibility, performance,
responsiveness), and a final skeptical read.

## 1. The generated-look gate

(The full catalog with alternatives is in `anti-patterns.md`. This is the fast
gate.) Any "yes" needs a deliberate reason or a change:

- [ ] Centered headline + subhead + two pill buttons hero?
- [ ] Purple/indigo gradient doing the heavy lifting?
- [ ] Emoji as section icons?
- [ ] Whole page in Inter/Roboto at one or two sizes, default line-height?
- [ ] A stack of equal, evenly-spaced, centered sections?
- [ ] Three-equal-card feature grid (icon + title + one sentence)?
- [ ] Copy using empower / unlock / supercharge / seamless / elevate?
- [ ] Could this exact layout belong to any company in any industry?

## 2. Accessibility

- [ ] Semantic HTML: real landmarks (`header`, `nav`, `main`, `footer`),
      headings in order, one `h1`.
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 large) — measured, not eyeballed.
- [ ] Visible, non-default focus states on every interactive element.
- [ ] All images have meaningful `alt` (or empty `alt` if decorative).
- [ ] Keyboard-navigable; logical tab order; no traps.
- [ ] Forms have real labels, not placeholder-only.
- [ ] `prefers-reduced-motion` respected.
- [ ] Tested with a screen reader or at least an a11y linter / Lighthouse.

## 3. Performance

- [ ] Fonts subset and `font-display: swap`; not shipping eight weights.
- [ ] Images sized, compressed, modern format (AVIF/WebP), lazy-loaded below the fold.
- [ ] No layout shift on load (reserve space for media/fonts); good CLS.
- [ ] CSS/JS kept lean; no giant unused framework payload for a static page.
- [ ] Lighthouse performance is healthy on mobile, not just desktop.

## 4. Responsive

- [ ] Designed for small screens as its own composition, not a squashed desktop.
- [ ] No horizontal overflow at common widths (360, 390, 768, 1024, 1440).
- [ ] Type stays readable; measure controlled with padding.
- [ ] Touch targets ≥ ~44px; hover-only affordances have a tap equivalent.

## 5. Final skeptical read

Look at it as a first-time visitor with no context:

- Does it look like it was built for *this* thing specifically?
- Is the one important action obvious?
- Does anything read as a default you reached for instead of a decision?

If the answer to the last question is yes, fix the highest-leverage item —
usually type or copy — and run the gate once more.
