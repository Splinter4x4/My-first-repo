---
name: ux-ui-pro-max
description: End-to-end UX/UI product design — research, information architecture, user flows, interaction design, UI systems, accessibility, usability evaluation, and developer handoff. Use when the user wants to design an app, product, dashboard, or feature (not just a marketing page); when they ask for wireframes, user flows, IA, a design system, usability/heuristic review, or accessibility work; or when a UI needs to be made genuinely usable, not just good-looking. Pairs with the `web-design` skill, which covers visual/front-end craft for web pages.
---

# UX/UI Pro Max

A full product-design workflow: make something **usable, accessible, and
coherent**, not just attractive. Where the `web-design` skill is about visual
craft on a page, this is about the whole experience — what the user is trying to
do, how they move through it, and whether they succeed without friction.

Core principle: **design the job, then the screens.** Most bad UI is a symptom
of unclear flows, weak information architecture, or unstated user goals. Fix
those first and the screens get simpler on their own.

## Workflow

Work the stages in order. Each points to a reference — read it when you reach
that stage, not all at once.

1. **Frame.** Who is the user, what job are they hiring this to do, and what does
   success look like? Capture the top tasks and the constraints. If the user
   hasn't said, infer and state your read in one line.
2. **Research & model** → `references/research.md`. Even lightweight research:
   jobs-to-be-done, the task list, and the mental model the design must match.
3. **Structure** → `references/ia-and-flows.md`. Information architecture,
   navigation, and the user flows for the top tasks — before any UI.
4. **Interaction** → `references/interaction-design.md`. States, inputs,
   feedback, error prevention/recovery, defaults, and progressive disclosure.
5. **UI system** → `references/ui-systems.md`. Components, layout, hierarchy, and
   tokens — composed from a system, reusing the `web-design` skill for the
   visual layer.
6. **Make it usable & accessible** → `references/usability-heuristics.md` and
   `references/accessibility.md`. Evaluate against heuristics; meet WCAG.
7. **Words** → `references/ux-writing.md`. Labels, microcopy, empty/error states
   — content is interface.
8. **Validate & hand off** → `references/validation-and-handoff.md`. Usability
   checks, success metrics, and a clean spec for engineering.

Run `references/qa-checklist.md` before calling anything done.

## Principles that hold throughout

- **Match the user's mental model**, not the org chart or the database schema.
- **Reduce cognitive load**: fewer choices per step, clear hierarchy, sensible
  defaults, recognition over recall.
- **Prevent errors before handling them**; when they happen, recover gracefully
  with plain-language guidance.
- **Design every state** — empty, loading, partial, error, success, and the
  long-content and zero-permissions edge cases — not just the happy path.
- **Consistency** in patterns, words, and behavior lowers the learning cost of
  every new screen.
- **Accessibility is design, not a retrofit** — keyboard, screen reader,
  contrast, motion, and target size from the start.
- **Show the work**: explain the trade-off behind each non-obvious decision so it
  can be reviewed, not just accepted.

## Output modes

- **Flows / wireframes**: describe screen-by-screen with the states and
  transitions; low fidelity is fine and faster to iterate.
- **Build**: when producing real UI, compose from the system and hand the visual
  layer to the `web-design` skill so it doesn't look generated.
- **Review**: when auditing an existing UI, work
  `references/usability-heuristics.md` + `references/accessibility.md` and report
  findings by severity with concrete fixes.
