---
name: web-design
description: Design and build websites that look hand-made instead of machine-made. Use when the user wants a site, landing page, portfolio, or marketing page that avoids the generic AI-generated look — no default purple gradients, centered-everything heroes, emoji section headers, or stock Tailwind layouts. Triggers on "build me a site", "design a landing page", "make it not look AI-generated", "make it look custom/hand-built".
---

# Web design that doesn't look generated

The default output of most code assistants converges on the same handful of
moves: an indigo-to-purple gradient, a centered hero with two pill buttons, a
three-card feature grid with emoji, Inter everywhere, and a lot of empty
vertical space. People recognize it on sight now. The point of this skill is to
deliberately walk away from that template and produce something that reads as a
considered, human design choice.

The rule of thumb: if the page could belong to any company in any industry,
it's wrong. A good site looks like it was made for *this* thing and nothing
else.

## Workflow

1. **Get the brief first.** Before writing a line of markup, know three things:
   who it's for, what one action matters most, and the tone (e.g. "serious
   B2B", "playful indie", "editorial/long-read", "brutalist portfolio"). If the
   user hasn't said, infer from the content and state your read in one line so
   they can correct it. Don't ask a wall of questions.

2. **Pick a point of view, then commit.** Choose one organizing idea — a
   typographic system, a color story, a layout rhythm — and let it drive every
   decision. Eclectic-but-coherent beats safe-but-generic.

3. **Build the type and color system before the layout.** Most of the
   "generated" feeling comes from defaults. Decide fonts and palette up front
   (see `references/anti-patterns.md`) and the rest follows.

4. **Lay out with intent, not symmetry.** Asymmetry, deliberate density, and
   real content hierarchy read as human. Perfectly centered, evenly spaced
   everything reads as a template.

5. **Use real or realistic content.** Generic copy ("Lorem ipsum", "Welcome to
   our platform", "Empower your workflow") is the loudest tell. Write copy that
   sounds like a person who knows the subject wrote it.

6. **Pass the tells checklist** in `references/anti-patterns.md` before you call
   it done. If you hit any item, you have a reason or you change it.

## Core principles

- **Typography is the design.** A distinctive, well-set typeface with real
  hierarchy carries a page further than any effect. Pair a characterful display
  face with a clean text face. Avoid defaulting to Inter/Roboto/Open Sans for
  everything.
- **Color with a source.** Pull a palette from something concrete — the
  product, a photograph, a brand, a mood — not from the framework's default
  ramp. One confident accent beats three timid gradients.
- **Spacing tells the truth.** Generous but *uneven* spacing, tied to a real
  scale, signals craft. Mechanical even gaps signal a generator.
- **Texture and detail.** Borders, rules, grain, a hand-picked photo, a
  considered icon set, micro-interactions with personality. These small choices
  are what "hand-built" actually means.
- **Restraint with effects.** Glassmorphism, blurred blobs, and heavy drop
  shadows are fine in small, intentional doses and ruinous as a default coat of
  paint.

## When you finish

Do a final read as a skeptical visitor: "Does this look like every other AI
site?" If yes, find the one change with the most leverage — usually type or
copy — and make it. Then check the anti-patterns list one more time.
