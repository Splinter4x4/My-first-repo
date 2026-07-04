# A web designer, in a repo

This repo turns Claude Code into a **professional web designer** — one that
builds sites which look hand-made, not machine-made. Open it, describe what you
need, and you get a designer with taste and standards instead of the generic
template every AI reaches for by default (purple gradients, centered heroes,
emoji feature cards, Inter everywhere).

## Quick start

1. Open this repo in [Claude Code](https://claude.com/claude-code) (CLI, IDE, or
   web).
2. Ask for what you want, e.g.:
   - *"Design a landing page for a small-batch coffee roaster."*
   - *"Build me a portfolio that doesn't look AI-generated."*
   - *"Here's my product list — make a homepage from it."*
3. Claude works as a senior designer: it pins down a brief, commits to a design
   direction, builds a type/color/spacing system, then writes the page — and
   runs an accessibility/performance/"does-this-look-generated" check before
   handing it over.

The behaviour is driven by [`CLAUDE.md`](./CLAUDE.md) (the studio's operating
manual) and the `web-design` skill.

## What's inside

```
.
├── CLAUDE.md                       # makes Claude act as a senior web designer
├── .claude/skills/web-design/      # the design methodology (the "how")
│   ├── SKILL.md                    #   5-stage workflow: brief→direction→system→build→QA
│   ├── references/                 #   direction, typography, color, layout, copy,
│   │                               #   anti-patterns, and a QA checklist
│   └── assets/example/             #   an editorial worked example
├── templates/
│   └── starter/                    # framework-free starting point
│       ├── tokens.css              #   design tokens: type scale, tinted neutrals, spacing
│       ├── base.css                #   reset + accessible base styles
│       └── index.html              #   semantic, accessible page skeleton
└── demo/                           # worked examples built with the skill
```

## The method in one line

> If the page could belong to any company in any industry, it's wrong.

Good design here means a **point of view** (a committed direction), **typography
that carries the page**, **color with a real source**, **intentional spacing and
asymmetry**, and **copy that says something specific** — all of it accessible and
fast by default. The full playbook lives in `.claude/skills/web-design/`.

## Using the starter yourself

`templates/starter/` is a clean, framework-free base you (or Claude) can build
on. It ships with a token system, an accessible reset, and a semantic skeleton —
no design direction baked in, so you choose one and run. See
[`templates/README.md`](./templates/README.md).
