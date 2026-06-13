---
name: web-design
description: Design and build websites that look hand-made instead of machine-made. Use when the user wants a site, landing page, portfolio, marketing page, or web UI that avoids the generic AI-generated look — no default purple gradients, centered-everything heroes, emoji section headers, or stock Tailwind layouts. Triggers on "build me a site", "design a landing page", "make a portfolio", "make it not look AI-generated", "make it look custom / hand-built / high-end".
---

# Web design that doesn't look generated

Most code assistants converge on the same page: an indigo-to-purple gradient, a
centered hero with two pill buttons, a three-card feature grid with emoji, Inter
everywhere, and a lot of empty vertical space. People recognize it on sight. The
job of this skill is to deliberately leave that template behind and produce work
that reads as a considered, human design.

The test that governs everything: **if the page could belong to any company in
any industry, it's wrong.** A good site looks built for *this* thing and nothing
else.

## How to use this skill

Work through the five stages below in order. Each stage points to a reference
file — read it when you reach that stage rather than all at once. Don't skip
straight to markup; the generated look comes almost entirely from skipping the
direction and system stages and reaching for defaults.

### 1. Brief

Before any markup, pin down three things:

- **Who and what** — the audience and the single subject of the page.
- **The one action** — the most important thing a visitor should do.
- **Tone** — serious B2B, playful indie, editorial/long-read, brutalist
  portfolio, luxury/restrained, technical/precise, etc.

If the user hasn't said, infer from the content and state your read in one line
so they can correct it. Don't interrogate them with a wall of questions.

### 2. Direction

Pick one organizing idea and commit to it. See `references/design-direction.md`
for a set of distinct archetypes (editorial, swiss/grid, brutalist, technical,
warm/organic, maximalist, retro) — each with the type, color, and layout cues
that make it cohere. Eclectic-but-coherent beats safe-but-generic. Name the
direction out loud before building so it can drive every later decision.

### 3. System

Build the system before the page. This is where craft is won or lost.

- **Typography** → `references/typography.md` — pairings, scale, and the setting
  details (leading, measure, tracking, OpenType features) that separate
  hand-set type from defaults.
- **Color** → `references/color.md` — sourcing a palette, tinted neutrals,
  using one confident accent, and contrast/accessibility.
- **Space & grid** → `references/layout.md` — scales, asymmetry, rhythm, and
  responsive behavior.

### 4. Build

Compose the page from the system. Lay out with intent, not symmetry. Use real or
realistic copy — generic filler is the loudest tell (see
`references/copywriting.md`). For components (nav, buttons, cards, forms,
motion) with character rather than defaults, see `references/layout.md`.

There's a complete, self-contained worked example at
`assets/example/index.html` — an editorial-direction landing page that puts the
whole system together. Read it to see what "hand-built" looks like in practice;
adapt its techniques, don't copy it wholesale.

### 5. QA

Before declaring it done, run `references/anti-patterns.md` (the tells and the
ship gate) and `references/qa-checklist.md` (accessibility, performance,
responsiveness). Then do one skeptical read as a first-time visitor: "Does this
look like every other AI site?" If yes, find the highest-leverage change —
usually type or copy — and make it.

## Principles that hold across every direction

- **Typography is the design.** A distinctive, well-set typeface with real
  hierarchy carries a page further than any effect.
- **Color with a source.** Pull a palette from something concrete, not from a
  framework's default ramp. One confident accent beats three timid gradients.
- **Spacing tells the truth.** Generous but *uneven* spacing on a real scale
  signals craft; mechanical even gaps signal a generator.
- **Texture and detail.** Borders, rules, grain, a chosen photo, a considered
  icon set, micro-interactions with personality — this is what hand-built means.
- **Restraint with effects.** Glassmorphism, blurred blobs, and heavy shadows
  are fine in small intentional doses and ruinous as a default coat of paint.
- **Content leads form.** Design around the actual words and the one action,
  not around a layout you've decided on in advance.
