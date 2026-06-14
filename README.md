# Business Manager Adjutant

An AI "chief of staff" for the business, built on Claude Code. You talk to it in
plain English; it coordinates your day and hands specific jobs to specialist
**sub-agents** so each task stays small, fast, and cheap.

## What it helps with

- **Inbox & enquiries** — finds new emails, enquiries, quotes and orders; drafts
  replies for you to approve. *(sub-agent: `inbox-triage`)*
- **Meta ads & media** — plans Facebook/Instagram campaigns, writes ad copy and
  post ideas; reports ad results once Meta is connected. *(sub-agent: `meta-ads`)*
- **Money** — who owes you, what's overdue, bills due, cash position.
  *(sub-agent: `finance-watch`)*

## How to use it

Just ask, for example:
- "Give me my morning brief."
- "Any new enquiries I need to reply to?"
- "Draft a reply to the customer asking about a bull bar fitout."
- "Plan a $300 Meta campaign for our winch special."
- "Who owes us money and what's overdue?"

The main agent decides which specialist to use. You don't need to name them.

## What's connected

| Area              | Status                                                    |
|-------------------|-----------------------------------------------------------|
| Outlook / M365    | ✅ Connected (email, calendar, Teams, SharePoint)         |
| Accounting (Xero) | ✅ Connected (cash, receivables, P&L)                     |
| Meta Ads          | ⚠️ Not yet — works in planning mode (see `docs/SETUP.md`) |

## Keeping costs (tokens) low

The setup is built to be frugal: specialists only pull the data they need, report
short summaries instead of raw data, and reuse what's already been fetched. The
rules live in `CLAUDE.md`. The morning brief is one combined check, not many.

## Files

- `CLAUDE.md` — the coordinator's brief and the money-saving rules.
- `.claude/agents/` — the specialist sub-agents.
- `docs/SETUP.md` — how to add Meta ads and other connections.
