# Information architecture & user flows

Structure before screens. Most "make the UI nicer" requests are really "make the
structure make sense."

## Information architecture

- **Group by the user's model**, not internal teams or table names. Card-sorting
  logic: things people expect together, live together.
- **Label with the user's words.** Test labels by asking "what would I click to
  do X?" — if the answer isn't obvious, the label is wrong.
- **Keep navigation shallow and broad** over deep and narrow where you can; every
  extra level is a place to get lost. Aim for a clear "you are here."
- **One primary navigation scheme.** Mixing several (tabs + sidebar + breadcrumbs
  + mega-menu) without hierarchy creates noise. Pick the spine, support it.
- **Findability**: provide more than one path to important things (browse +
  search + recent) because people think differently.

## Navigation patterns (pick to fit)

- **Top tabs** — few, stable, peer sections.
- **Sidebar** — many sections, or app-like tools; good for deep feature sets.
- **Hub-and-spoke** — a home that launches into focused tasks (mobile, kiosks).
- **Breadcrumbs** — deep hierarchies where context matters.
- **Search-first** — large content/catalogues where browsing doesn't scale.

## User flows

For each top task, map the path from intent to done:

1. **Entry points** — how do users arrive at this task? (Often several.)
2. **Steps** — the minimum sequence to complete it. Count them; remove any that
   don't earn their place.
3. **Decisions & branches** — where the path forks, and the default branch.
4. **States** — empty, loading, error, partial, success at each step.
5. **Exit** — what "done" looks like, and where they go next.

### Flow heuristics

- **Minimise steps and inputs**; every field and click is a chance to drop off.
- **Front-load value, defer setup.** Let people get something done before asking
  for accounts, payment, or configuration.
- **Make the default path the best path** for the common case; keep the rare case
  reachable but out of the way.
- **No dead ends.** Every state offers a next action — including errors and empty
  states.
- **Preserve work**: never lose input on error, back-navigation, or refresh.

## Output of this stage

A sitemap/IA outline and a flow per top task (steps, branches, states). This is
what the screens get built from — wireframe to the flow, not the other way round.
