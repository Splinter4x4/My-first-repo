# Installing the Splinter Homepage section (Ride theme)

This is a proper **Online Store 2.0 section** for your **Ride** theme. Unlike the
static HTML version, it renders your **real products from collections** — so
prices, photos, product links and sold-out states stay in sync with Shopify
automatically. You keep the custom dark/red Splinter look; Shopify keeps the data
accurate.

## 1. Add the section file

1. Shopify admin → **Online Store → Themes**.
2. On your Ride theme → **⋯ → Edit code**.
3. Under **Sections**, click **Add a new section**, name it
   **`splinter-homepage`** (Shopify creates `sections/splinter-homepage.liquid`).
4. Delete the boilerplate it generates, paste in the contents of
   `splinter-homepage.liquid` from this folder, and **Save**.

## 2. Put it on the home page

1. Back to **Themes → Customize** → make sure you're editing the **Home page**.
2. **Add section** → choose **Splinter Homepage**. Its preset drops in a hero, a
   proof strip, three product groups (Drawer systems / False floors / 12V) and a
   custom-quote CTA.
3. Drag it to the top. You can keep your **Google Reviews** and **Instafeed** app
   sections below it; remove the old **"BUILT TO YOUR NEEDS!"** image banner and
   the default featured-collection/collection-list if you want this to be the
   whole page.

## 3. Configure it

In the section's settings:

- **Hero**: pick a hero image (your bush/drawers shot), tweak the heading,
  subheading and the two buttons.
  - Button 1 → `/collections/storage-solutions`
  - Button 2 → `/pages/custom-quote` (your existing page)
- **Each product group block** → choose a **Collection** and a layout:
  - **Drawer systems** → your drawers collection (e.g. `storage-solutions`), layout **Photo cards**
  - **False floors** → your false-floors collection, layout **Spec rows**
  - **12V packages** → your 12V / Voltek collection, layout **Photo cards**
- **Custom quote CTA** → set the email/quote links.

### If a group shows "Pick a collection…"

That block has no collection selected, or the collection is empty. Two fixes:
- Select an existing collection in the dropdown, **or**
- Create the collection first: **Products → Collections → Create collection**
  (e.g. *False Floors*, *12V Packages*), add the products, then pick it here.

> Heads up: your export didn't include a **12V/Voltek collection** — if you don't
> have one yet, create it and add your Core/Frontier/Apex products, then select
> it in the 12V block. The **Prado 150** product is currently a **draft**; publish
> it to make it appear.

## 4. Done

Prices, "From" labels, images and sold-out states now come straight from your
products. Edit a price in Shopify and the homepage updates itself — no code
changes.

## 5. Custom Quote page

The theme also includes a **Splinter Custom Quote** section (`splinter-custom-quote.liquid`)
— an on-brand enquiry form that uses Shopify's native contact form, so submissions
arrive in your store notifications (no app needed).

In the repackaged zip it's already wired to a `page.custom-quote` template. To use it:

1. Admin → **Online Store → Pages** → open (or create) the **Custom Quote** page.
2. In **Theme template**, choose **custom-quote**. Save.
3. Optional: tweak the heading, sidebar and contact details in
   **Customize → (the Custom Quote page) → Splinter Custom Quote**.

Form submissions go to the email under **Settings → Notifications / Store details**.
The extra fields (vehicle, supply/install, timeframe, what they're after) come
through as labelled lines in the enquiry.

---

### Want a one-click install instead?

I can hand you the **whole Ride theme repackaged as a `.zip`** with this section
and a preset home page already wired in, so you just **Upload theme** and
preview. Say the word and tell me the collection handles for false floors and
12V, and I'll set them as defaults.
