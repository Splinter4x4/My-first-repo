# Preview the Splinter theme without going live

This loads the whole redesign into your store as an **unpublished theme** you can
preview privately. Your current live theme stays exactly as it is until *you*
hit publish.

## 1. Upload it (stays unpublished)

1. Shopify admin → **Online Store → Themes**.
2. Scroll to **Theme library** → **Add theme → Upload zip file**.
3. Choose `ride-splinter-theme.zip`. It lands in your library **as a draft — not
   published.**
4. On the new theme tile → **⋯ → Preview**. The **home page** shows the new
   design straight away.

## 2. Create the pages so you can preview them too

Uploading a theme brings the *page templates*, but Shopify pages are content, so
you create each page once and point it at its template. For each row below:
**Online Store → Pages → Add page** → set the **Title**, then under **Theme
template** pick the template, then **Save**.

| Page title | Theme template | Previews at |
| --- | --- | --- |
| Drawer Systems | `drawer-systems` | /pages/drawer-systems |
| False Floors | `false-floors` | /pages/false-floors |
| 12V Packages | `12v` | /pages/12v |
| About | `about` | /pages/about |
| Build Your System | `build` | /pages/build |
| Custom Quote | `custom-quote` | /pages/custom-quote |

> If you already have a **Custom Quote** page, just open it and switch its
> **Theme template** to `custom-quote`.

To view a page in the unpublished theme, open the theme **Preview**, then add the
path (e.g. `/pages/custom-quote`) — or use the page's **Preview** action and
pick the draft theme.

## 3. Upload the builder file (one asset)

The 3D builder loads from a theme asset:

1. Themes → your draft theme → **⋯ → Edit code**.
2. **Assets → Add a new asset → Upload file** → choose `splinter-builder.html`
   (it's inside the zip under `assets/`, so if you uploaded the zip it's already
   there — only do this if the builder frame is blank).

## 4. Pick collections (so products show)

In **Customize** (on the draft theme), open each product group / category page
and choose a collection:

- **Drawer systems** → `storage-solutions` (exists)
- **False floors** → create a `false-floors` collection and select it
- **12V** → your Voltek / 12V collection

Empty groups show a tidy "pick a collection" note instead of breaking.

## 5. When you're happy

Only then: Themes → your draft theme → **Publish**. Nothing goes live before
that.

---

Everything's pre-wired in the zip (home page, all page templates, the builder
asset, sections). The only manual steps are creating the page records (step 2)
and choosing collections (step 4) — both are store data Shopify won't let a
theme create for you.
