# QA checklist

Run before calling a UX/UI deliverable done. Any "no" needs a reason or a fix.

## Structure & flow
- [ ] Top tasks identified and ranked; the design optimises for them.
- [ ] IA/labels use the user's words; navigation has a clear "you are here".
- [ ] Each top task has a mapped flow; step count is minimised.
- [ ] No dead ends — every state offers a next action.
- [ ] Work is preserved on error, back, and refresh.

## States (for every screen/component)
- [ ] Empty state teaches and offers the first action.
- [ ] Loading is stable (skeletons, no layout shift).
- [ ] Error states say what/why/what-next and keep the user's input.
- [ ] Success is confirmed with an obvious next step.
- [ ] Edge cases handled: long content, zero results, no permission, offline.

## Interaction
- [ ] Every action gives feedback; system status is visible.
- [ ] One primary action per view; destructive actions are distinct and reversible.
- [ ] Forms ask the minimum; labels visible; forgiving validation with inline errors.
- [ ] Sensible defaults; right control for each input.

## UI system
- [ ] Built from tokens (spacing, type, semantic colour) and reused components.
- [ ] Visual hierarchy matches task priority.
- [ ] Consistent patterns, words, and placement throughout.
- [ ] Responsive as its own composition; touch targets adequate.
- [ ] Passes the `web-design` anti-patterns gate (doesn't look generated).

## Accessibility (WCAG 2.2 AA)
- [ ] Semantic HTML, heading order, one h1, real landmarks.
- [ ] Fully keyboard operable; visible focus; logical order; skip link.
- [ ] Contrast measured (4.5:1 text, 3:1 UI/focus); not colour-alone.
- [ ] Targets ≥ 24px; text resizes to 200%; reflow at 320px.
- [ ] Meaningful alt; labelled forms; errors announced; reduced-motion respected.
- [ ] Custom widgets tested with keyboard + screen reader.

## Content
- [ ] Copy is final, specific, consistent terms, user's language.
- [ ] Buttons name the action + object; errors are helpful; empty states onboard.

## Validation & handoff
- [ ] Risky assumptions tested (prototype or user walkthrough).
- [ ] Success metrics chosen and instrumented.
- [ ] Spec complete: states, tokens, behaviour, a11y notes, acceptance criteria.

## Final pass
- [ ] Walk every top task as a first-time user, then as a returning expert.
- [ ] Read every screen's words alone — is it clear what to do and what happened?
