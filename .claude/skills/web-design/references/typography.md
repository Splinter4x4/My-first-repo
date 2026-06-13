# Typography

Type is where a page is won. A distinctive, well-set typeface with real
hierarchy carries a design further than any gradient or effect. The default move
— Inter (or Roboto/Open Sans) at one or two sizes for everything — is the single
biggest reason pages read as generated.

## Pair two faces with different jobs

Use a **display/headline face** with character and a **text face** built for
reading. The contrast between them is what creates hierarchy and personality.

Pairings that don't look generated (all available on Google Fonts / Fontsource
unless noted):

- **Editorial:** Fraunces or Playfair Display (display) + Source Serif / Newsreader (text)
- **Swiss / clean:** Space Grotesk or Archivo (display) + Inter *only* for body, kept minimal
- **Technical:** Söhne / Geist (display) + IBM Plex Mono or JetBrains Mono (data/labels)
- **Warm:** Fraunces (soft serif) + a humanist sans like Figtree or Hanken Grotesk
- **Brutalist:** a grotesque like Archivo Expanded, or system monospace, used alone at extremes
- **Distinctive single-face:** Instrument Serif, Bricolage Grotesque, or Redaction can carry a whole page

Prefer faces with real weight and optical-size range. Variable fonts (Fraunces,
Inter, Bricolage) give you fine control over weight and contrast.

## Build a type scale

Don't size by feel. Use a modular scale (ratio ~1.2 for dense UI, ~1.25–1.333
for marketing) from a base of 16–18px. Pick a small set of sizes and reuse them.
Hierarchy comes from **decisive jumps**, not from many similar sizes.

A workable set: `0.875 / 1 / 1.25 / 1.563 / 2.441 / 3.815 rem` (1.25 ratio).

## Set it properly — the details that read as craft

- **Leading (line-height):** ~1.5–1.7 for body text; tighten headlines to
  1.0–1.15. Large type needs *less* line-height, not the same as body.
- **Measure (line length):** keep body copy to ~60–75 characters
  (`max-width: 65ch`). Full-width paragraphs are a tell.
- **Tracking:** slightly negative on large display type
  (`letter-spacing: -0.02em`); slightly positive on small caps / labels.
- **Alignment:** left-aligned, ragged right is the default for reading. Reserve
  centering for short, deliberate moments.
- **Weights:** establish contrast — e.g. a heavy display weight against a
  regular text weight. Don't set a whole page in one weight.
- **OpenType:** turn on the good stuff — ligatures, and for the right faces,
  `font-feature-settings` for old-style numerals, small caps, or stylistic sets.
- **Hanging punctuation / hyphenation:** enable hyphenation on justified text;
  consider `text-wrap: balance` for headlines and `pretty` for body.

## Loading fonts

- Self-host or use Fontsource/Google Fonts with `font-display: swap`.
- Subset to the weights you actually use; don't ship eight weights.
- Set a sensible system-font fallback stack so layout doesn't lurch.

## Quick gut check

If the page is set entirely in Inter/Roboto at one or two sizes with default
line-height and full-width paragraphs, it will look generated no matter what
else you do. Fix type first.
