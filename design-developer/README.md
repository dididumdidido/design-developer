# Design Developer — design-developer.com

Next.js 16 · React 19 · Tailwind CSS v4 · shadcn/ui · Framer Motion · Manrope (self-hosted)

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Deploys to Vercel as-is (static page).

## Edit copy
All text lives in `lib/content.ts`.

## Swap the image placeholders
1. Drop a transparent PNG in `public/images/` (e.g. `clock.png`).
2. In `lib/content.ts`, add `src: "/images/clock.png"` to that slot.
The placeholder disappears and your PNG gets the float animation and violet glow.

| Slot | Where |
|---|---|
| Hero object | `hero.image` |
| Levels 01–07 | `levels[n].image` |
| Agency cards | `services[n].image` |
| Case study | `caseStudy.image` (also edit client, headline, metrics) |
| Founder photo | `about.image` |

## Booking calendar
Paste your Calendly or GoHighLevel embed URL into `site.calendarEmbedUrl` in `lib/content.ts`.

## Structure
- `app/globals.css` – brand tokens, `.glass`, `.glow`, `.eyebrow`, float animation
- `components/ui/` – shadcn Button, Card, Badge (restyled)
- `components/site/` – one file per section + shared primitives (Reveal, SlideDashes, OnlineDot)
