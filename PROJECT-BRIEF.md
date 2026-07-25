# Portfolio project brief — Fatemeh Jalali

## Who this is for
Fatemeh Jalali, Product Designer, 6+ years experience, data-driven / user-centered design.
Deep background in e-commerce and Shopify. Actively job hunting, wants a professional multi-page portfolio.

## Structure decided
Multi-page site:
- `index.html` — homepage (built, attached)
- Case study 1 — "Improving bundle discovery through add-on features"
- Case study 2 — "Rebuilding a declining bundle feature through a scalable template system"
- About page (full version — homepage only has a snapshot)

Only 2 case studies exist, both deep/detailed — decided NOT to pad with more shallow projects.
No testimonials for now (can be added later).
Contact: email + LinkedIn only (no phone number — decided against listing it publicly).

## Visual direction (already established — keep consistent across new pages)
Style: "light & editorial" — chosen specifically over minimal/dark and bold/colorful, and explicitly
NOT meant to resemble Robin Noguier's site (too many-project-oriented for a 2-project portfolio).

Design tokens (from index.html, reuse exactly):
- Background: `#F7F7F3` (paper off-white — NOT the generic AI cream #F4F1EA)
- Ink: `#16181C` / soft ink: `#55585F` / faint: `#9A9C98`
- Accent: `#2F5D50` (deep pine green) + accent-soft `#E4EBE7`
- Lines: `#DCDAD1` / `#B9B6AA`
- Fonts: Fraunces (display serif) / Inter (body) / IBM Plex Mono (data, labels, tags)
- Signature element: section dividers styled as data-axis lines with tick marks (`.axis` / `.axis-ticks`),
  reflecting the data-driven design identity. Reuse this motif on case study pages (e.g. as a way to
  mark timeline steps, metrics, or process stages).

## Content already written for the homepage
See index.html for final hero/about/skills/contact copy. Hero copy is a placeholder Fatemeh said
she wants to revise later — flag this before considering the site "done."

## Case study raw content (needs full write-up in the established case study structure:
problem → role → process → key decisions → result)

### Case study 1 — Addon feature
"implement new feature called addon and improve buy x get y in bundling app.
We understand what feature users need and implement it according to their needs,
and after that recognize that one of the existing features has a new channel for
using, and these changes affect the product metric a lot."
(Needs follow-up questions to Fatemeh: what tool/product, what team, what exact metric moved,
what was the "new channel" discovery — currently under-specified.)

### Case study 2 — Bundle template system
"Volume Discount's creation rate dropped from ~37% to ~12% over seven months. I led research
across a merchant-journey audit, screen recordings, competitor benchmarking, and internal team
input — then designed a templating system that solved both a UX problem (abstract, low-visibility
bundle types) and a technical one (backward compatibility for existing merchants).
Result: creation rate rose to 27%, and trial cancellation dropped 4%."
This one is well-detailed and ready to structure into a full case study.

## Resume reference
Full resume content (companies, skills, tools, education) is available — was uploaded once as PDF.
Key facts: Rooberah (Jul 2021–Jul 2026), Superz (Sep 2019–Nov 2020), freelance work in between.
Company names were deliberately left OUT of the homepage/about copy per Fatemeh's request —
keep this decision unless she says otherwise.

## Next steps (in order)
1. Build case-study-1.html and case-study-2.html using the established visual system
2. Build a full About page
3. Revisit/finalize the hero copy on the homepage (Fatemeh wasn't fully happy with it)
4. Replace placeholder images with real project screenshots (Fatemeh will provide)
5. Deploy to Netlify or Cloudflare Pages (chosen over Vercel because Vercel's free tier
   technically restricts commercial/job-seeking use)
