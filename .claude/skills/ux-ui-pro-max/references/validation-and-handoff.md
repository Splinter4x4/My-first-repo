# Validation & handoff

A design isn't done when it looks right — it's done when it works and engineering
can build it without guessing.

## Validate before you build big

- **Walk the flow** as the user for each top task; note every hesitation.
- **Five-user testing** catches most usability issues — watch real people attempt
  the top tasks, don't ask their opinion. Note where they get stuck, not what
  they say they like.
- **Prototype the risky parts** (the assumptions you flagged in research), not the
  whole thing.
- **Instrument** the design with the metrics below so you learn after launch too.

## Success metrics

Tie the design to outcomes, not vanity numbers:

- **Task success rate** — can people complete the top tasks?
- **Time on task / steps** — is it getting faster/simpler over iterations?
- **Error rate** — how often do people hit errors or dead ends?
- **Drop-off** — where in the flow do people abandon?
- **Adoption / retention** of the feature, not just clicks.
- **SUS / satisfaction** for a quick perceived-usability read.

Pick the 1–2 that map to the job; don't drown in dashboards.

## Developer handoff

Give engineering what they need to build it right the first time:

- **Flows and states** — every state of every screen, including empty/loading/
  error/edge, not just the happy path.
- **Specs** — spacing, type, colour tokens (semantic names), breakpoints,
  component variants and their states.
- **Behaviour** — interaction details: what's clickable, focus order, validation
  rules, transitions, optimistic vs pessimistic updates.
- **Content** — final copy, including error and empty-state text, in the design
  (no "lorem", no "TBD" shipped).
- **Accessibility notes** — semantics, labels, keyboard order, ARIA where needed,
  reduced-motion behaviour.
- **Edge cases & rules** — what happens with no permission, no network, huge data,
  zero results, long strings, RTL/localisation if relevant.
- **Acceptance criteria** — what "correct" means, so it can be checked.

## Definition of done

The flow works end to end for every top task, every state is designed, it meets
WCAG AA, the copy is final, the metrics are instrumented, and the spec is complete
enough that two engineers would build the same thing.
