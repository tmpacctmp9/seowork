# Yaarwin Landing Page (Next.js)

This project was converted from static HTML to **Next.js App Router** while keeping the same design, pages, SEO metadata, and Bootstrap CDN assets.

## Pages

| Route | Original file |
|-------|----------------|
| `/` | `index.html` |
| `/about` | `about/index.html` |
| `/contact` | `contact/index.html` |
| `/privacy` | `privacy/index.html` |
| `/terms` | `terms/index.html` |
| `/yaarwin-gift-codes` | `yaarwin-gift-codes/index.html` |

`/gift-codes` redirects to `/yaarwin-gift-codes` (canonical URL used in the gift-codes page meta).

## Setup (when your internet is ready)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static assets

Copy these files from your old site root into the **`public/`** folder (if not already there):

- `logo.png`
- `proof1.jpg` … `proof5.jpg`
- `iphone-wingogame-loading-page-screenshot.webp`
- Any favicon / OG images you host locally

`robots.txt`, `sitemap.xml`, and `manifest.json` are already in `public/`.

## Project structure

```
app/                 # Routes and global layout
components/          # Topbar, Footer, ProofSlider, etc.
lib/                 # Site URLs and JSON-LD schemas
public/              # Static files served as-is
app/stylee.css       # Original stylesheet (same as stylee.css)
```

The original HTML/CSS files are left in the repo for reference. You can remove them after verifying the Next.js site.
