# Fatemeh Jalali — portfolio

A static portfolio site. No build step, no dependencies: plain HTML, one
stylesheet, one small script. Edit a file, refresh the browser, done.

## Structure

```
index.html              Homepage — hero, selected work, about snapshot, contact
404.html                Not-found page
docs/page-template.html Starting point for new pages (not deployed)
assets/
  css/styles.css        All styling, shared by every page
  js/main.js            Scroll reveal + axis tick marks
  favicon.svg
_headers                Cache + security headers (Netlify / Cloudflare Pages)
robots.txt
PROJECT-BRIEF.md        Content decisions, visual direction, open questions
```

Still to build: `case-study-1.html`, `case-study-2.html`, `about.html`.
The homepage already links to the two case studies, so those links 404 until
the pages exist.

## Working on it locally

Open `index.html` in a browser, or serve the folder so root-relative paths in
`404.html` resolve the way they will in production:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Adding a page

1. Copy `docs/page-template.html` to the project root and rename it.
2. Replace every `TODO`.
3. Add `aria-current="page"` to the matching nav link.
4. Link to it from `index.html`.

Header, footer and the axis dividers are duplicated across pages on purpose —
that is the cost of having no build step. When you change one, change them all.

## Design system

Defined as CSS custom properties at the top of `assets/css/styles.css`. Use the
tokens rather than raw values, so a change propagates everywhere.

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#F7F7F3` | Page background (paper off-white) |
| `--bg-card` | `#FFFFFF` | Raised surfaces |
| `--ink` | `#16181C` | Body text, headings |
| `--ink-soft` | `#55585F` | Secondary text |
| `--ink-faint` | `#9A9C98` | Labels, captions |
| `--accent` | `#2F5D50` | Deep pine green — links, emphasis |
| `--accent-soft` | `#E4EBE7` | Accent backgrounds |
| `--line` / `--line-strong` | `#DCDAD1` / `#B9B6AA` | Rules and borders |

Type: **Fraunces** (display serif), **Inter** (body), **IBM Plex Mono** (data,
labels, tags). Loaded from Google Fonts.

The signature motif is the section divider drawn as a data axis — a rule with
end ticks (`.axis`) above a row of measurement ticks (`.axis-ticks`, drawn by
`main.js`). It reflects the data-driven identity; reuse it on case study pages
to mark timeline steps, metrics or process stages.

## Deploying

Netlify or Cloudflare Pages (chosen over Vercel, whose free tier restricts
commercial use). Both serve this repo as-is:

- **Build command:** none
- **Publish directory:** `/` (the repo root)

Before launch:

- Add `<link rel="canonical">`, `og:url` and `og:image` to each page — they are
  marked TODO in the HTML, pending the domain.
- Add a `sitemap.xml` and uncomment the `Sitemap:` line in `robots.txt`.
- Once asset filenames are fingerprinted, raise `Cache-Control` in `_headers`.
