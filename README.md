# Splinter 4x4 — Build Board

A live build tracker for Splinter 4x4 Solutions.

- **`index.html`** — your private admin board (kanban: Booked → In progress → Needs attention → Delayed → Ready → Completed). Add jobs, advance stages, draft customer emails, copy customer tracking links.
- **`track.html`** — the customer-facing page. Anyone with their unique link sees a clean, branded progress view that **updates by itself** when you advance a stage.

## Two ways to run it

### 1. Right now, no setup (local mode)
Open `index.html` in a browser. Jobs save to that browser only — great for a quick try. Customer links won't work across devices yet.

### 2. Live mode (true live tracking, ~15 min)
This shares data across devices and makes customer links update in real time.

1. Create a free project at [supabase.com](https://supabase.com).
2. In Supabase → **SQL Editor**, paste the contents of [`schema.sql`](schema.sql) and click **Run**.
3. In Supabase → **Project Settings → API**, copy the **Project URL** and the **anon public** key.
4. Open [`config.js`](config.js) and paste them into `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
5. Deploy the folder (see below). The board's banner will show **● Live** when it's connected.

## Deploy (hosting)

Any static host works — no server needed.

- **Netlify** (easiest): go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag this folder in. You'll get a URL instantly.
- **splinter4x4.com.au**: upload these files to a subfolder/page on your site.

After deploying, set `PUBLIC_BASE_URL` in `config.js` to your live address (or leave it blank to auto-detect) so customer links point to the right place.

## How customer tracking works

Each job gets a private random token, e.g. `track.html?t=AB12CD34EF`. Paste that link into the Outlook calendar event or email it. The customer opens it and sees live progress — no login. Advance a stage on your board and their page refreshes on its own.

## ⚠️ Security note (read before going public)

In live mode the app uses Supabase's public **anon key**, which is embedded in the website. The starter `schema.sql` lets that key read *and write* jobs — simple, and fine while your admin page URL stays private. **Before you advertise the admin URL,** switch to the hardened policy at the bottom of `schema.sql` (Supabase Auth — only your email can edit; customers can still view their build by link).

## Roadmap / next steps
- Lock down writes with Supabase Auth (one account: ethan@splinter4x4.com.au).
- Build photos on the customer page (Supabase Storage).
- Send the email drafts straight from Outlook instead of copy-paste.
