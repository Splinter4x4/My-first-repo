#!/usr/bin/env python3
"""
Renders docs/dashboard/template.html into a publishable dashboard.html by
substituting the {{TOKEN}} placeholders with fresh data.

Usage: fill in the `data` dict below with the latest numbers (from
inbox-triage / finance-watch sub-agents), then run:

    python3 docs/dashboard/render.py > /tmp/dashboard-out.html

...and publish the output path with the Artifact tool, redeploying to the
SAME artifact URL each time (pass the same file_path used previously).

Fonts are already baked into template.html as data URIs — no internet
access needed to regenerate. Only the content tokens below need updating.
"""
import sys
from pathlib import Path

TEMPLATE_PATH = Path(__file__).parent / "template.html"


def item(name, detail, pill_text, pill_class, day_n, day_u):
    return f'''<div class="item">
        <div class="item-main">
          <div class="item-name">{name}</div>
          <div class="item-detail">{detail}</div>
          <span class="pill {pill_class}" style="margin-top:6px; display:inline-block;">{pill_text}</span>
        </div>
        <div class="item-days"><span class="n">{day_n}</span><span class="u">{day_u}</span></div>
      </div>'''


def cold_row(name, vehicle, days):
    cls = "cold-days aging-high" if days >= 21 else "cold-days"
    return f'''<div class="cold-row">
        <div><span class="cold-name">{name}</span> <span class="cold-vehicle">— {vehicle}</span></div>
        <div class="{cls}">{days}d, no reply</div>
      </div>'''


def followup(text, sub):
    return f'''<div class="followup">
        <div class="box"></div>
        <div><b>{text}</b><div class="sub">{sub}</div></div>
      </div>'''


def money_block_pending(stale_note):
    return f'''<div class="pending-card">
      <div class="pending-icon">&#33;</div>
      <div>
        <div class="pending-title">Live figures pending — Xero needs one approval</div>
        <div class="pending-text">The last automatic pull was blocked by a permission prompt. Approve the Xero tool-call prompt next time it appears and this section will fill in automatically.</div>
        <div class="stale-note">{stale_note}</div>
      </div>
    </div>'''


def money_block_live(cash, owed_total, overdue_count, top_lines):
    rows = "\n".join(
        item(name, detail, "OVERDUE", "pill-critical", days, "days")
        for name, detail, days in top_lines
    )
    return f'''<div class="stat" style="margin-bottom:10px;">
      <div class="stripe" style="background:var(--accent);"></div>
      <div class="stat-label">Cash (cash basis)</div>
      <div class="stat-value">{cash}</div>
    </div>
    <div class="stat" style="margin-bottom:10px;">
      <div class="stripe" style="background:var(--critical);"></div>
      <div class="stat-label">Owed to us — {overdue_count} overdue</div>
      <div class="stat-value">{owed_total}</div>
    </div>
    <div class="card-list">{rows}</div>'''


# ---------------------------------------------------------------------------
# EDIT THIS BLOCK each run with fresh data from inbox-triage / finance-watch.
# ---------------------------------------------------------------------------
data = {
    "GENERATED_AT": "REPLACE ME — e.g. Mon 6 Jul 2026, 7:03am AWST",
    "NEXT_UPDATE": "7:00am &amp; 4:00pm AWST",
    "STAT_NEEDS_REPLY": "0",
    "STAT_NEEDS_REPLY_SUB": "",
    "STAT_OLDEST_WAIT": "0d",
    "STAT_OLDEST_WAIT_SUB": "",
    "STAT_COLD": "0",
    "STAT_COLD_SUB": "",
    "STAT_CASH": "PENDING",
    "STAT_CASH_SUB": "",
    "NEEDS_REPLY_COUNT": "0",
    "NEEDS_REPLY_ROWS": "<p style='color:var(--text-muted); font-size:13px;'>Nothing needs a reply right now.</p>",
    "COLD_COUNT": "0",
    "COLD_ROWS": "<p style='color:var(--text-muted); font-size:13px; padding:8px 4px;'>No cold leads.</p>",
    "MONEY_BLOCK": money_block_pending("Fill in stale-figure note or replace with money_block_live(...)."),
    "FOLLOWUP_ROWS": "<p style='color:var(--text-muted); font-size:13px;'>See docs/BUSINESS-NOTES.md</p>",
}

if __name__ == "__main__":
    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    for k, v in data.items():
        template = template.replace("{{" + k + "}}", v)
    remaining = [t for t in template.split("{{")[1:] if "}}" in t]
    if remaining:
        print(f"WARNING: unfilled tokens remain: {[t.split('}}')[0] for t in remaining]}", file=sys.stderr)
    sys.stdout.write(template)
