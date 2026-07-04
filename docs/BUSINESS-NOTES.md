# Business Notes — standing facts & open follow-ups

Living memory for the adjutant. Agents: check this before finance/admin work;
update it (via the coordinator) when something changes. Dates are when noted.

## Daily Brief dashboard

App-style status page for Ethan — see `docs/dashboard/README.md` for how to
refresh/automate it.
**Live URL:** https://claude.ai/code/artifact/26f07910-18f0-4b50-8e3b-91380eeec436
- [ ] **Xero connection is throwing "MCP tool call requires approval"** on
      every call as of 4 Jul 2026 (both direct and via finance-watch
      sub-agent) — NOT a Xero login issue, a Claude Code permission gate.
      Ethan checking for a stuck approval prompt / re-adding the connector.
      Dashboard money section is showing "pending" with the last known
      (stale, 23 Jun) figures until this is resolved.
- [ ] **Set up a durable Trigger** (7:03am & 4:07pm AWST) so the dashboard
      refreshes without a chat session open — steps in
      `docs/dashboard/README.md`. Not done yet — currently manual only.

## Open follow-ups

- [ ] **ATO catch-up (URGENT — blocks home loan):** accountant to lodge
      2024–25 income tax return + overdue BAS (Jul–Sep 25, Oct–Dec 25,
      Jan–Mar 26) + sort $1,650 overdue ATO payment. Ask re penalty remission.
      Meeting held ~23 Jun 2026, went well — 2025 tax return sent 23 Jun —
      **confirm the 3 BAS have actually been lodged.**
- [ ] **Broker Brett — document pack:** needs 2025 personal tax return,
      current-FY P&L (cash), last 2 quarters BAS, driver's licence, savings
      bank statement. P&L done; returns/BAS wait on accountant. Gift letter
      from dad likely needed (gift, not loan — repaid informally via car work).
- [ ] **Dad's money:** record as personal contribution (equity), NOT income,
      no GST. Confirm account with accountant.
- [ ] **Edgebander purchase (<$20k, paying cash, no finance):** keep invoice;
      confirm instant asset write-off + add to asset register with accountant.
      Machinery purchases now complete — no more big capex planned.
- [ ] **Capricorn Card account:** created in Xero. Monthly lump sum must be
      split: McNaughtens stock → COGS, fuel → vehicle/fuel. Consider
      sub-accounts; confirm approach with accountant.
- [ ] **Forest One:** create COGS account, code 311 (Materials = 310).
- [ ] **Super catch-up:** in progress ($19k this FY vs $4k last) — confirm
      remaining shortfall with accountant.
- [ ] **Customer emails parked (as of 4 Jul 2026):** Trent Farnham ($3,800
      LC80 build — said GO 14 Jun, still no reply, 20 days), Adam Hancock
      (Prado 250, awaiting final price, 18 days), Paul Robinson (moved
      meeting to 29 Jun, never confirmed, date passed — needs "did we catch
      up?"), Jack Marley (new LC100 lead), Scott Howard/Inpex (Quote QU-0835,
      hatch question, 2 days). Maddi Johnston — **resolved**, quoted
      (QU-0846) via Xero 1 Jul. 8 cold build-form leads (20–26 days, auto-ack
      only): Simon Hibble, Drew Harper, Ewan Harding, Derick Korff, Sean
      Cosgriff, Jack Wellington, Martin Dolinschek, Heath Grant.
- [ ] **Receivables:** ~$78k overdue across ~23 invoices — Ethan said to park
      this for now; don't push unless he raises it.
- [ ] **Meta Ads connection:** not connected (network policy now allows
      xero.com domains; facebook domains may still need adding). See
      `docs/META-ADS-SETUP.md`.
- [ ] **Xero quotes:** not visible via current connection — Ethan checks
      Xero → Business → Quotes manually. Revisit a quotes-capable connector
      later.

## Decisions / preferences learned

- Cash basis, always. Sole trader. GST registered.
- Draft emails only — Ethan approves before anything sends.
- Plain English, no jargon; short answers over essays.
- Ethan often works from iPad — prefer steps that work in a browser.
- Unregistered suppliers seen so far: Coffron, Temu (no GST on those buys).
- Year-on-year story (FY25→FY26): Matt full-time (Voltek up), new bigger
  workshop (rent doubled), less travel (vehicle costs down), fuel now via
  Capricorn, tools spend ~$0 this year (all machinery owned), 12V income
  folded into draw systems.
