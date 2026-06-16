# Accessibility

Accessibility is part of the design, not a pass at the end. The target is **WCAG
2.2 AA**. Designing for it makes the product better for everyone, not just users
with disabilities.

## POUR — the four principles

- **Perceivable** — people can perceive the content (text alternatives,
  contrast, captions, not relying on colour alone).
- **Operable** — people can operate it (keyboard, enough time, no seizure
  triggers, clear focus).
- **Understandable** — predictable, readable, with helpful errors.
- **Robust** — works with assistive tech via correct semantics.

## The checklist that catches most issues

- **Semantics**: real landmarks (`header/nav/main/footer`), headings in order
  with one `h1`, lists for lists, `button` for actions and `a` for navigation.
- **Keyboard**: everything operable without a mouse; logical tab order; no traps;
  visible, non-default `:focus-visible`; skip-to-content link.
- **Contrast**: text ≥ 4.5:1 (3:1 for large/bold); UI components & focus
  indicators ≥ 3:1. Measure it.
- **Don't rely on colour alone** — pair with text, icon, pattern, or weight.
- **Targets**: interactive targets ≥ 24×24px (2.2) — bigger for primary touch.
- **Text**: resizable to 200% without breaking; sensible line length and
  spacing; real text, not images of text.
- **Images/media**: meaningful `alt` (empty `alt` for decorative); captions and
  transcripts for media.
- **Forms**: programmatic labels, errors announced and tied to fields, clear
  instructions, no input-only-by-mouse.
- **Motion**: honour `prefers-reduced-motion`; nothing that flashes > 3×/sec.
- **Names/roles/states** (for custom components): correct ARIA only where native
  HTML can't do it — and test it. **No ARIA is better than wrong ARIA.**
- **Live regions** for async updates (toasts, validation, loading) so screen
  readers announce them.
- **Language** set on the document; reading order matches visual order.

## How to verify

- **Keyboard-only** pass: unplug the mouse and complete every top task.
- **Screen reader** spot check (VoiceOver/NVDA): are labels, states, and errors
  announced?
- **Automated** (axe / Lighthouse) catches ~30–50% — necessary but not
  sufficient; the rest is manual.
- **Zoom to 200% and 400%**; check reflow with no horizontal scroll at 320px CSS
  width.

## Mindset

Native HTML semantics give you most accessibility for free. Reach for custom
widgets and ARIA only when you must, and then test them with the keyboard and a
screen reader — an inaccessible custom control is worse than a plain native one.
