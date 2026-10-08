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

- [x] **ATO catch-up — largely resolved:** accountant (Sheena, Wealth
      Creation) sent the completed 2026 tax return 15 Aug. No unanswered
      accountant/ATO mail as of the 8 Oct sweep. Residual: confirm the
      overdue BAS are all lodged if it ever comes up.
- [x] **Home loan SETTLED (~6 Oct 2026)** — Brett sent congratulations.
      Document-pack follow-up closed. Brett has a soft ask for a
      referral/review if Ethan's happy with the service.
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
- [ ] **Customer emails backlog (full sweep 8 Oct 2026, covering 1 Jul–8 Oct):**
      Reply drafts created in Outlook Drafts 8 Oct for: Craig Tompsitt
      (booking Mon–Wed), Tom Coulembier (accepted QU-0922 $3,320 — **invoice
      still needs to be sent from Xero**), Caitlin van Haght (2-car quote
      owed), Trent Farnham ($3,800 LC80, go-ahead 14 Jun, 116 days!), Jack
      Marley (LC100), Ryan O'Callaghan (Y62, chased twice). Drafts have
      [ETHAN: ...] placeholders for prices/dates — review before sending.
      Also open: Adam Hancock (QU-0844 sent 1 Jul, no answer — follow up),
      Brendyn Davis (Y62 pantry CAD status?), James Messervy (D-Max weight/fit
      answer), Ben McQuilkin (LC300-style setup, 41 days), Christopher Katis
      (false floor kit?), The 4x4 Mechanic (custom drawer quote from
      screenshots), Zane Edmonds (owed build dates), Scott Howard/Inpex
      (QU-0835 $4,550 — flagged complete 3 Sep, possibly handled by phone —
      confirm with Ethan). Paul Robinson outcome still unknown.
      **~35 cold web-form leads** got only the auto-ack (list in 8 Oct sweep);
      Solomona Fonoti (Triton, 4 Aug) got nothing at all — auto-ack bounced.
      **TNT/BigPost freight job 2779681 declared lost 7 Oct** — customer
      call-back + claim needed.
- [ ] **FB/Instagram DMs being missed:** Meta not connected and DMs aren't
      reachable via API anyway. Fix suggested to Ethan 8 Oct: Meta Business
      Suite → Settings → Notifications → email notifications ON (DMs then
      land in Outlook where triage catches them) + set an Instant Reply.
      Once flowing, teach inbox-triage to treat those notifications as
      enquiries.
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
