# Usability heuristics & evaluation

Use these to **review** a design (yours or an existing one) and to catch problems
before users do. For each, look for violations and rate severity.

## Nielsen's 10 heuristics

1. **Visibility of system status** — always show what's happening (state,
   progress, results).
2. **Match between system and the real world** — user's language and concepts,
   logical order.
3. **User control and freedom** — clear exits, undo/redo, no traps.
4. **Consistency and standards** — within the product and with platform
   conventions.
5. **Error prevention** — design out mistakes before relying on messages.
6. **Recognition rather than recall** — show options; don't make people remember.
7. **Flexibility and efficiency** — shortcuts and accelerators for experts,
   simplicity for novices.
8. **Aesthetic and minimalist design** — every extra element competes with the
   relevant ones.
9. **Help users recognise, diagnose, recover from errors** — plain language,
   precise cause, a way out.
10. **Help and documentation** — available, searchable, task-focused, in context.

## Severity rating (for findings)

- **0 — Not a problem.**
- **1 — Cosmetic**: fix if time allows.
- **2 — Minor**: low priority; users work around it.
- **3 — Major**: important to fix; frequent or blocking for some.
- **4 — Catastrophe**: must fix before release; blocks task completion.

Report findings as: *location · heuristic violated · what happens to the user ·
severity · recommended fix.* Sort by severity, not by screen order.

## Cognitive-load checks

- **Hick's law** — more choices = slower decisions. Reduce or group options.
- **Miller's ~7±2** — chunk information; don't dump long unstructured lists.
- **Fitts's law** — make frequent/important targets bigger and closer; put them
  at edges/corners where they're easy to hit.
- **Jakob's law** — users expect your product to work like the others they know.
- **Postel/robustness** — be liberal in what you accept (input), strict in what
  you present.
- **Peak-end rule** — people judge an experience by its hardest moment and its
  ending; invest in error moments and confirmations.

## A fast heuristic pass

1. Walk each top task end to end as a first-time user.
2. At every step ask: *Do I know where I am? What can I do? What just happened?
   How do I undo? What if this fails?*
3. Log every hesitation or dead end as a finding with a severity.
4. Re-walk as a returning expert: are there accelerators, or is it slow every
   time?
