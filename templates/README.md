# Templates

A clean, framework-free starting point for new pages. It gives you a token
system, an accessible base, and a semantic skeleton — and deliberately *no*
design direction, so you choose one and build it.

## `starter/`

| File | What it is |
| --- | --- |
| `tokens.css` | Design tokens — type families and scale, tinted neutrals, one accent, spacing scale. **Set these first.** |
| `base.css` | A small modern reset plus accessible element defaults (focus states, skip link, readable measure) wired to the tokens. |
| `index.html` | A semantic, accessible page skeleton with `REPLACE` markers. |

### How to use it

1. Copy `starter/` to a new folder.
2. **Pick a direction** (see `.claude/skills/web-design/references/design-direction.md`)
   and name it.
3. Edit `tokens.css` first — real fonts, a sourced palette, a scale you'll keep
   to. This is where most of the "designed vs. generated" difference is won.
4. Build the page in `index.html`, replacing every `REPLACE` marker with real
   content. Vary the layout between sections; don't leave it plain.
5. Run the QA gate in `.claude/skills/web-design/references/qa-checklist.md`
   before you call it done.

The starter is intentionally plain. If you ship it looking like this, you've
skipped the actual design work — that's the point of leaving it neutral.
