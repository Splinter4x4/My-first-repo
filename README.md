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

## Security / login

In live mode the board is **locked down**:

- **You sign in** to the admin board with a one-time email link (no password). Only `ADMIN_EMAIL` (in `config.js`) can create, edit, or delete jobs — enforced by the database rules in `schema.sql`, not just the screen.
- **Customers never log in.** Their tracking link is public and read-only; they only see their own build.

To set it up: running `schema.sql` already applies the locked-down rules. Email sign-in is on by default in Supabase. Optionally, in Supabase → **Authentication → Providers → Email**, turn **off** "Allow new users to sign up" so only your existing account can ever authenticate. If you change `ADMIN_EMAIL`, update the matching email in `schema.sql` too.

> Local mode (no Supabase keys) has no login — it's just your own browser.

## Roadmap / next steps
- Build photos on the customer page (Supabase Storage).
- Send the email drafts straight from Outlook instead of copy-paste.
