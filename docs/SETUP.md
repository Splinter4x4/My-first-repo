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
and plans but can't see real spend/results).

➡️ **Full step-by-step instructions are in [`META-ADS-SETUP.md`](META-ADS-SETUP.md).**

Short version: the recommended path is the **official Meta Ads MCP connector**
(`https://mcp.facebook.com/ads`) — add it in your Claude Code web Connectors
settings and log in with your Meta business account. A token-based fallback is
documented if the official connector isn't available to you.

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
