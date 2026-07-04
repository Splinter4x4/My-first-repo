# Putting this homepage live on Shopify

`index.html` is a complete, self-contained homepage built from your real product
export. Every product button links to your live Shopify product page, so the
cart and checkout still run on Shopify — this page is the storefront, your store
is the engine.

## Confirm before you launch

- [ ] **12V / Voltek packages** — the Core / Frontier / Apex specs and prices
      came from your earlier mockup, **not** the product export. Verify them, and
      point each at the real Shopify product (replace the `#voltek` section links).
- [ ] **Prado 150** is currently **unpublished (draft)** in your store — it's
      marked `draft` on the page. Publish it or remove that card.
- [ ] **Product handles** in the links assume your store is on
      `splinter4x4.com.au`. They are:
      `steep-point-drawer-system`, `sandycape-drawer-fridge-system`,
      `slimline-fridge-slide-system`, `yardie-creek-drawer-system`,
      `ultimate-standup-fridge-system`, `landcruiser-300-series-false-floor`,
      `y62falsefloor`, `next-gen-ford-everest-false-floor`,
      `250-prado-false-floor`, `toyota-prado-150-false-floor`.
- [ ] **"From" prices** are the lowest current variant for each product. If you
      change pricing in Shopify, update the figures here too (they're static text).

## Option A — fastest: Custom Liquid section (no theme coding)

Good for getting it live today on your existing theme.

1. Shopify admin → **Online Store → Themes → Customize**.
2. Pick the **Home page** template → **Add section** → **Custom Liquid**.
3. Open `index.html`, copy everything **between** `<body>` and `</body>`, **plus**
   the `<style>…</style>` block from the `<head>`, and paste it into the Custom
   Liquid box.
4. Remove the theme's default home sections (or move this to the top).
5. **Save**. The product links and cart work immediately.

Note: a Custom Liquid block sits inside the theme's normal header/footer. If you
want this page's own header/footer instead, use Option B.

## Option B — cleanest: a dedicated page template

Best if you want this as a standalone landing page with full control.

1. Shopify admin → **Online Store → Themes → ⋯ → Edit code**.
2. Under **Templates**, **Add a new template** → type `page` → name it e.g.
   `page.landing.liquid` (or `page.landing.json` on Online Store 2.0 themes with
   a matching section).
3. Paste the contents of `index.html` into a new **section** the template
   renders, or into the template directly for a non-OS2.0 theme.
4. Admin → **Online Store → Pages → Add page**, and assign the
   `page.landing` template. Set it as the homepage under
   **Online Store → Preferences** if you want it to be the front door.

## Option C — host the HTML elsewhere

You can host `index.html` on any static host (Netlify, Cloudflare Pages, GitHub
Pages) and point a domain/subdomain at it. The buttons still deep-link into your
Shopify store for checkout. Simplest to deploy, but it lives outside the Shopify
theme.

## Images

The drawer-system photos load straight from your Shopify CDN
(`cdn.shopify.com/...`), so they'll keep working. A few of your false-floor
photos in the export are `.heic` (browsers can't display those), so the false
floors are shown as a clean spec list instead. If you want photos there, export
those images as JPG/WebP and drop the URLs into the `.floor` rows.

## Recommended next step

Run **Option A** to see it live in your theme in a few minutes, confirm the 12V
data and Prado 150, then decide if you want me to convert it into a proper
Online Store 2.0 **Liquid section** (with real product objects so prices and
"sold out" states stay in sync automatically). Just ask.
