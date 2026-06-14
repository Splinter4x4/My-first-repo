# Setup & Connections

This adjutant runs on **Claude Code on the web**. Most of it works today using
connections already attached to your session. This doc covers what's connected
and what to add next.

## Already connected

- **Microsoft 365 / Outlook** — email, calendar, Teams chat, SharePoint, meeting
  availability. Powers the `inbox-triage` sub-agent.
- **Accounting (Xero-style)** — cash position, receivables, profit & loss, top
  customers, financial position. Powers the `finance-watch` sub-agent.

These are connected as MCP integrations on the session. Nothing to do here.

## To add: Meta (Facebook/Instagram) Ads

Until this is connected, `meta-ads` runs in **planning mode** (it can write copy
and plans but can't see real spend/results). To get live ad data you need a Meta
Marketing API connection. Two common paths:

1. **Via an automation hub (easiest, no code):** connect Meta Ads inside
   **n8n** or **Activepieces** (both free/self-hostable) and have the adjutant
   read results from there. Good if you also want scheduled automations.
2. **Direct Meta Marketing API:** create a Meta app + access token with
   `ads_read` (and `ads_management` if you want to make changes), then expose it
   to the agent as an MCP tool.

Ask me ("help me connect Meta ads") and I'll walk you through whichever path you
pick, step by step.

## Adding more areas later

Each specialist is just a file in `.claude/agents/`. To add one (e.g. "orders &
quotes" or "supplier ordering"), copy an existing file, change the `name`,
`description`, and instructions, and add the data source it should use. Ask me to
do it for you.

## If you outgrow this

If you later want scheduled/automatic workflows (e.g. auto-chase overdue
invoices, auto-post content), the natural next step is **n8n** (deepest AI +
integrations) or **Activepieces** (simpler, MIT-licensed). The adjutant here can
sit on top and coordinate them.
