# Interaction design

The behaviour of the interface — what responds, how, and what happens when things
go wrong. This is where usable and frustrating diverge.

## Design every state

For every component and screen, design the full set, not just the happy path:

- **Empty** — first run / no data. Teach and offer the first action; never a
  blank void.
- **Loading** — skeletons over spinners for content; optimistic UI where safe;
  keep layout stable to avoid shift.
- **Partial** — some data, some pending; paginated or streaming content.
- **Error** — what failed, why in plain words, and how to fix or retry. Preserve
  the user's input.
- **Success** — confirm clearly; make the next step obvious.
- **Edge** — very long content, zero permissions, offline, slow network, huge
  lists, tiny screens.

## Feedback & system status

- **Acknowledge every action** within ~100ms (visual press), show progress for
  anything over ~1s, and confirm completion.
- Make the system's state visible: what's selected, saved, syncing, or failed.
- Prefer **inline, contextual** feedback over modal interruptions.

## Input & forms

- **Ask for the least.** Every field must justify itself. Combine, infer, or
  defer what you can.
- **Labels above fields**, always visible (not placeholder-only). Mark optional,
  not required, when most are required.
- **Validate forgivingly**: accept varied formats, validate on blur/submit not
  every keystroke, and put the error message at the field with guidance.
- **Sensible defaults** and smart autofill reduce work and errors.
- **Right control for the job**: don't make people type what they could pick;
  don't make them pick from 40 when they could type.

## Error prevention & recovery

- Prevent first: constraints, good defaults, confirmation only for destructive or
  irreversible actions.
- Make actions **reversible** (undo) instead of nagging with confirmations.
- Destructive actions: clearly marked, never the default, and recoverable where
  possible.

## Progressive disclosure

Show what's needed now; reveal complexity on demand. Defaults for the many,
advanced options for the few. Don't put every control on one screen because it's
"flexible" — that's the designer offloading decisions onto the user.

## Affordances & signifiers

Make interactive things look interactive and static things look static. Clickable
affordances, clear focus, obvious hit targets. Don't make people hunt for what's
a button.

## Motion

Motion should explain — where something came from, what changed, what's loading.
Keep it fast (~150–250ms), purposeful, and honour `prefers-reduced-motion`.
