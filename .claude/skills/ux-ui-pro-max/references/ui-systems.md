# UI systems

Compose interfaces from a system, not screen by screen. A system makes the
product consistent, faster to build, and easier to change. For the *visual* layer
(type, colour, anti-generic craft), defer to the `web-design` skill — this covers
the structural/component side.

## Tokens first

Define the primitives once and reference them everywhere:

- **Spacing scale** (e.g. 4/8-based) — consistent rhythm and density.
- **Type scale** — a small set of sizes/weights with clear roles.
- **Colour roles** — semantic, not raw: `surface`, `text`, `muted`, `border`,
  `primary`, `success`, `warning`, `danger`. Map to tints; meet contrast.
- **Radius, elevation, motion** — a few steps each, used consistently.

## Components

Build a small kit and reuse it: button (with variants + states), input, select,
checkbox/radio, toggle, card, table/list, tabs, modal/sheet, toast, menu, badge,
tooltip, pagination, empty/error blocks.

Each component is defined by its **states**, not just its look:
`default · hover · focus-visible · active · disabled · loading · error · selected`.
A component that only specifies "default" isn't done.

## Hierarchy & layout

- **Visual hierarchy maps to task priority**: the primary action is the most
  prominent thing; secondary actions recede; destructive actions are distinct.
- **One primary action per view.** More than one "primary" button means none is.
- **Density to fit the user**: dense for power/data tools, generous for
  consumer/first-time. Be deliberate, not accidental.
- **Alignment and a grid** do most of the work of looking "designed."
- **Group related controls**; separate unrelated ones with space, not just lines.

## Consistency

- Same pattern for the same job everywhere (one way to edit, one way to confirm).
- Same words for the same thing (don't mix "remove/delete/clear").
- Predictable placement (primary action always in the same spot).

Consistency is a feature: it lets users transfer what they learned on one screen
to every other screen.

## Responsive & adaptive

Design the small screen as its own composition, not a squeezed desktop. Reflow,
re-prioritise, and collapse navigation thoughtfully. Respect touch target sizes
(~44px) and thumb reach on mobile.

## Don't look generated

When it's time to render real UI, run it through the `web-design` skill's
anti-patterns gate so the result has a point of view instead of the default
template look.
