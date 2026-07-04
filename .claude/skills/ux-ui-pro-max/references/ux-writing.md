# UX writing

Words are interface. Most "confusing UI" is confusing *language*. Write the copy
as carefully as you design the layout.

## Principles

- **Clear over clever.** The user is trying to do something; help them, don't
  entertain them.
- **User's words**, present tense, active voice, second person ("you").
- **Front-load meaning.** Put the important word first ("Delete project",
  "Payment failed") so it scans.
- **Be specific.** "Something went wrong" tells the user nothing; "We couldn't
  save — you're offline" tells them what and what next.
- **Consistent terms.** Pick one word per concept and never swap it
  (delete vs remove vs clear).

## Buttons & actions

- Name the action and its object: **"Save changes"**, **"Send invite"**,
  **"Delete 3 files"** — not "OK" / "Submit" / "Yes".
- The button should answer the question the screen asks.
- Destructive buttons say what they destroy.

## Errors

A good error message has three parts: **what happened**, **why (plainly)**, and
**what to do next**. No blame, no jargon, no error codes as the only content.

- Bad: "Error 422: invalid input."
- Good: "That email's already in use. Try signing in, or use a different email."

## Empty states

The first thing a new user sees. Don't waste it: say what goes here, why it's
useful, and give the first action. Empty states are onboarding.

## Microcopy that earns its place

- **Labels**: short, unambiguous, scannable.
- **Helper text**: only when it prevents an error or answers a real question.
- **Placeholders**: examples, not labels (placeholders vanish and aren't
  accessible as labels).
- **Confirmations**: state what happened and the undo path.
- **Tooltips**: for nice-to-know, never for essential info.

## Tone

Match the product and the moment. Be calm and plain in errors and destructive
flows; you can have more personality in success and empty states. Never use hype
or filler ("seamlessly", "effortless", "magic") — it reads as marketing intruding
on a tool.

## Quick test

Read each screen's words aloud, ignoring the visuals. If you can't tell what to do
or what just happened from the words alone, rewrite them.
