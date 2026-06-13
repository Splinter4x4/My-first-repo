# Color

The generated look leans on the framework's default ramp — usually an
indigo→purple→pink gradient over pure white. The fix is a palette with a
**source** and a lot of **restraint**.

## Source the palette

Pull color from something concrete rather than inventing it:

- The product or brand itself.
- A photograph central to the page (sample 3–5 colors from it).
- A real-world reference — a material, a place, a piece of packaging, an era.
- A constrained system (e.g. one hue + its tints/shades, or a classic pairing
  like ink + a single red).

## Structure

Most good palettes are smaller than people expect:

- **One background neutral** (tinted — see below).
- **One foreground/ink** (also tinted, rarely pure black).
- **One accent** that does the signaling — links, primary actions, highlights.
- **One or two support tones** for surfaces, borders, muted text.

That's enough. A confident page with one accent beats a timid page with three
gradients.

## Tint your neutrals

Pure `#ffffff` and `#000000` are a tell. Shift them slightly toward a hue so the
whole page feels intentional:

- Warm paper: `#FBF9F4` background, `#1A1714` ink.
- Cool slate: `#F4F6F8` background, `#10151B` ink.
- Near-black UI: `#0B0C0E` background, `#E8E6E1` text.

Derive surfaces and borders as small steps off the background, not as separate
random greys. Borders are often just the ink at low opacity.

## Accent, used sparingly

- One accent, applied where it means something (primary action, links, key
  data) — not sprinkled everywhere.
- If you must use a gradient, give it a reason and keep it to one place.
- Avoid the default indigo/violet entirely unless the brand genuinely is that
  color; it's the most over-used hue in generated work.

## Contrast and accessibility

- Body text vs background: meet **WCAG AA** (4.5:1; 3:1 for large text). Check
  it, don't eyeball it.
- Don't rely on color alone to convey state — pair with text, icon, or weight.
- Test the accent on its real background for contrast, especially for links and
  buttons.
- Provide a considered **dark mode** if the project needs one — re-tint, don't
  just invert. Re-check contrast in both modes.

## Quick gut check

If the standout visual is a purple gradient on pure white, replace it: tint the
neutrals, pick one sourced accent, and let type and layout carry the rest.
