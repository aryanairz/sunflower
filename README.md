# Sunflower Ranch

Marketing site for **Sunflower Ranch**, a family-owned outdoor event venue in Edinburg, Texas. Built with Next.js (App Router), Tailwind CSS, and Framer Motion, and deployed on **Netlify**.

> A place to have fun and relax. 🌻

Repo: [aryanairz/sunflower](https://github.com/aryanairz/sunflower)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Scripts:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (`next dev --webpack`) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — split hero, welcome, event types, amenities, gallery teaser, CTA |
| `/about` | The venue's story plus amenities |
| `/gallery` | Photo grid with a click-to-open lightbox |
| `/contact` | Inquiry form (the booking flow) plus contact details |

## Booking — inquiry form

There is no calendar/slot system. Booking is a **quote/inquiry flow**: visitors send their event date and details and the owner reaches out to confirm.

The form ([components/InquiryForm.tsx](components/InquiryForm.tsx)) submits through **Netlify Forms**, so submissions land in the **Netlify dashboard** (Site → Forms) with no backend.

- The form is named `inquiry`. Netlify detects it from the static mirror in [public/__forms.html](public/__forms.html) at deploy time; keep the field `name` attributes in that file in sync with the React form.
- **Email notifications:** to get an email per inquiry, add one in Netlify → Site settings → Forms → Form notifications (point it at `sunflowerranch901@gmail.com`).

## Deploying on Netlify

[netlify.toml](netlify.toml) configures the build and the official Next.js runtime:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

`@netlify/plugin-nextjs` (in `devDependencies`) handles App Router SSR, image optimization, and routing. No Vercel-specific config is used.

## Editing site content

- **Contact info** (phone, email, address, tagline, WhatsApp) — [lib/site.ts](lib/site.ts).
- **Social links** — `SOCIAL` in [lib/site.ts](lib/site.ts) (live Facebook, Instagram, and TikTok profiles).
- **Event types, amenities, and gallery photos** — [lib/venue.ts](lib/venue.ts).
- **SEO + business schema** (name, address, phone, `EventVenue` JSON-LD) — [lib/seo.ts](lib/seo.ts); per-page `metadata` exports live in each page.
- **Photos** — `public/Images/`. Referenced with the exact `Images` capitalization (Netlify's Linux build is case-sensitive). The logo `sunflowerlogo.png` also drives the favicon via [app/icon.png](app/icon.png) / [app/apple-icon.png](app/apple-icon.png).

## Tech

- [Next.js 16](https://nextjs.org) — App Router
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — reveal/transition animations
- [Phosphor Icons](https://phosphoricons.com)
- [Netlify](https://www.netlify.com) — hosting + Forms

> Note: this project pins a customized build of Next.js. Check `node_modules/next/dist/docs/` before relying on conventions from upstream Next.js docs.
