# Connect Meta (Facebook/Instagram) Ads

This gives the adjutant **live** ad data — real spend, reach, clicks, leads, ROAS
— and (optionally) the ability to make changes. Until it's connected, the
`meta-ads` agent still helps in *planning mode* (campaign plans + ad copy).

There are two ways to connect. **Option A (official Meta MCP) is recommended** —
it's the simplest and needs no server or script. Option B is a fallback.

---

## What you need either way (one-time)

- A **Meta Business Manager / Business Portfolio** with **admin** access.
- An **active ad account** linked to it (the one you run ads from).
- A **Facebook Page** (and Instagram account if you advertise there).

If you already run ads, you have all of this.

---

## Option A — Official Meta Ads MCP  ✅ recommended

Meta released an official AI connector (an MCP server at `mcp.facebook.com/ads`)
in 2026. You authorise it once with your Meta login; no tokens to copy, nothing
to host.

**Steps (about 5 minutes):**

1. In your **Claude Code (web)** environment settings, open **Connectors / MCP
   servers** and choose **Add a remote MCP server / connector**.
2. Enter the Meta Ads server address: `https://mcp.facebook.com/ads`
3. When it prompts, **Log in with your Meta/Facebook business account** and
   approve access. Grant **read** access to ads & insights (and "manage" only if
   you want the adjutant to create/pause campaigns for you).
4. Pick the **ad account** to connect.
5. Tell me **"Meta is connected"** and I'll run a quick test (last 7 days'
   results) to confirm it's live.

> If you don't see a Connectors/MCP option or the Meta server is unavailable in
> your region/beta, use Option B below.

Docs on adding connectors: https://code.claude.com/docs/en/claude-code-on-the-web

---

## Option B — Token-based (fallback, no beta needed)

Use this if the official connector isn't available to you. It uses a long-lived
**System User token** plus a small connection on our side.

1. Go to **developers.facebook.com** → **Create App** → type **Business**.
2. In the app, **Add Product → Marketing API**.
3. In **Business Settings → Users → System Users**, create a system user and
   **Generate New Token**: choose your app and tick **`ads_read`** and
   **`read_insights`** (add **`ads_management`** only if you want changes, not
   just reports).
4. Under **Assets**, assign your **ad account** to that system user.
5. Copy the token and your **ad account ID** (looks like `act_1234567890`).
6. In your **Claude Code environment settings**, add them as **secrets / env
   vars** (never put them in the code):
   - `META_ACCESS_TOKEN` = your token
   - `META_AD_ACCOUNT_ID` = `act_...`
7. Tell me **"token added"** and I'll wire up a small read-only insights
   connection and test it.

⚠️ **Treat the token like a password.** Never paste it into chat, a file, or
commit it to GitHub. Only put it in the environment's secret/env-var settings.

---

## After connecting

Ask things like:
- "How did the ads go this week?"
- "Which campaign has the best cost-per-lead this month?"
- "We're spending too much — where should I cut?"

The agent pulls only the numbers you ask for (with a date range) to keep costs
low, reports the headlines, and recommends the next move.
