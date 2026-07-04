# Layout, components, and motion

Generated pages share a skeleton: centered hero with two pill buttons, then a
stack of equal, evenly-spaced, centered sections, one of them a three-card grid.
The fix is structure with intent — a real grid, deliberate asymmetry, and
varied rhythm.

## Spacing scale

Space on a scale, not by feel. Pick a base (4 or 8px) and a small set of steps,
then reuse them. The hallmark of craft is *uneven* spacing used deliberately —
tight where things relate, generous where sections break — not the same gap
everywhere.

Workable scale: `4 8 12 16 24 32 48 64 96 128`. Use the big jumps to separate
sections so the page has rhythm instead of a metronome beat.

## Grid

- Use a real grid (CSS Grid). A 12-column grid gives you room for asymmetry; a
  modular grid suits swiss/editorial directions.
- **Asymmetry reads as human.** Offset columns, a wide content column beside a
  narrow rail, content that starts at column 2. Perfect centering everywhere
  reads as a template.
- Don't trap everything in one 1200px centered container. Mix: full-bleed
  moments, edge-anchored elements, content that uses the margins.
- Align to a baseline where it matters (editorial/swiss). Things lining up is
  most of what makes a layout feel designed.

## Rhythm

- Vary section density on purpose: a dense, detail-rich section can sit against
  a spare, breathing one.
- Avoid the endless equal-section stack. Give the page a shape — a strong open,
  a varied middle, a deliberate close.
- The hero doesn't have to be a centered headline + subhead + two buttons. Let
  the content and the one action determine its form.

## Components with character

- **Navigation:** doesn't have to be centered logo + links + a pill CTA. Try a
  left-anchored wordmark with a sparse right-aligned menu, or a thin top rule.
- **Buttons:** square or subtly-rounded with a real border and considered hover
  state often beats the default full-pill. Make the primary action obvious
  through hierarchy, not just color.
- **Cards:** if you use them, vary their size and weight; hairline borders and
  flat surfaces often beat heavy drop shadows. A three-equal-card grid with
  emoji is the canonical tell — break it.
- **Forms:** generous targets, clear labels (not placeholder-only), visible
  focus states, real validation messaging.
- **Icons:** pick one consistent set with a point of view (e.g. Lucide,
  Phosphor, Radix) — or skip icons and let type do the work. Never use emoji as
  section icons.
- **Imagery:** one well-chosen, well-treated photo or illustration beats three
  stock images. Treat it (duotone, grain, consistent crop) so it belongs.

## Motion

- Motion should add meaning, not decorate. Reserve it for transitions, feedback,
  and revealing structure.
- Tune it: short durations (~150–250ms), eased, often a touch of overshoot for
  personality. Default linear/half-second fades feel generic.
- Don't float every element in on scroll. Pick a few moments.
- Respect `prefers-reduced-motion` and provide a calm fallback.

## Responsive

- Design the small screen as its own composition, not a squashed desktop.
- Let the grid genuinely reflow; collapse asymmetric layouts thoughtfully.
- Keep type readable: scale headlines down, hold body around 16–18px, keep the
  measure in check with padding.

## Quick gut check

Centered hero + two pill buttons + a stack of equal centered sections including
a three-card emoji grid = generated. Introduce a grid, break the symmetry, vary
the rhythm.
