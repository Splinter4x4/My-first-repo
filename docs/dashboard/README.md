# Daily Brief dashboard

A private, app-style status page (a Claude Artifact) that gives Ethan a
one-glance view of the business: who needs a reply, cold leads, money, and
open follow-ups. Built to be bookmarked on the iPad home screen like an app.

**Live URL:** https://claude.ai/code/artifact/26f07910-18f0-4b50-8e3b-91380eeec436

Bookmark it: open the link in Safari → Share → **Add to Home Screen**.

## How it's built

- `template.html` — the full page: CSS, fonts (Oswald / IBM Plex Sans / IBM
  Plex Mono, embedded as woff2 data URIs — no internet needed to rerun this),
  and `{{TOKEN}}` placeholders for the parts that change day to day.
- `render.py` — fills the placeholders with fresh data and prints the final
  HTML. Edit the `data` dict at the bottom with the day's numbers, then run it.

## How to refresh it (manually, or from a scheduled run)

1. Get fresh data:
   - `inbox-triage` sub-agent → who needs a reply, cold leads (check Sent
     Items before calling anything "replied to" — see that agent's notes on
     auto-acknowledgement emails).
   - `finance-watch` sub-agent → cash position + receivables, **cash basis**.
     If the Xero call errors with "requires approval", tell Ethan directly —
     don't silently show stale numbers as current.
2. Edit the `data` dict in `render.py` with the new content (use the helper
   functions `item()`, `cold_row()`, `followup()`, `money_block_live()` /
   `money_block_pending()` already defined in that file).
3. Run it and write the output to a file:
   ```
   python3 docs/dashboard/render.py > /path/to/scratchpad/dashboard.html
   ```
4. Publish with the **Artifact** tool using:
   - `file_path`: the file from step 3
   - `url`: the live URL above (this redeploys to the SAME page instead of
     minting a new one)

## Automating the twice-daily refresh (7am & 4pm AWST)

A session-only `CronCreate` job is a stopgap at best — it dies when the
session ends and auto-expires after 7 days regardless. For a refresh that
survives independently of any one chat session, set up a **Trigger** in
Claude Code on the web:

1. Go to the environment/session settings → **Triggers** → **Add trigger**.
2. Schedule: cron `3 7 * * *` (7:03am) and a second trigger `7 16 * * *`
   (4:07pm) — Australia/Perth (AWST, UTC+8, no daylight saving).
3. Prompt for each trigger:
   > Refresh the Daily Brief dashboard: run inbox-triage and finance-watch,
   > update docs/dashboard/render.py's data with the fresh results, run it,
   > and publish the output to the dashboard's existing Artifact URL (see
   > docs/dashboard/README.md for the URL and steps). Update
   > docs/BUSINESS-NOTES.md if anything material changed.
4. Save. This keeps running even when no chat session is open.

See https://code.claude.com/docs/en/claude-code-on-the-web for how
Triggers/environments work.
