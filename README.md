# SereniDrip · IV Hydration

Marketing site for **SereniDrip**, a licensed IV hydration studio in Edinburg, Texas. Built with Next.js (App Router), Tailwind CSS, and Framer Motion.

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

## Booking

Every **"Book now"** CTA links to the on-site `/book` page ([app/book/page.tsx](app/book/page.tsx)), which embeds the **Vagaro** booking widget in an iframe.

The widget URL is configured in [lib/site.ts](lib/site.ts) as `BOOKING_WIDGET_URL`:

```
https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVAiD4iDwBzH2Navn8m7MBH0JOwc5fiOAet3SVA66YW+Og3fmuJIh4iNf2O1azmtGlMLU6er31IXxT7euxIgKZyJTAxI2JWmUaf6xl6cDGXbj7Z+YW5amrlyvIbATyXyInAyDtRUeT6cv4DyaGZ85rLOD2gpvaZxy994gy37LKkOJt+poPcWS0OZXXFak65wWNOn9464gJO1RCPXnNhOchglClX4Fal+ns/aKyx43RNXS0lq/JUvNkz/io+ob65rIlxjveJKhLH79W00Qyi4mAhcd58PI4Ubq30kHwxxSaOhAHxasvLMvcL1gE+mSLDCY6+O6JiVrSS2ks1FvNQWYpHCrKj+/suV8MAvmThCknBjEOXtu6HuAiX8bn/iOxcO9X/K39DR+Ea5hb0Qn2lTSOlSrgn5yTTPigZ9qd24OhvZMc5fW/oOsY1mWvBdwjpy2HA==
```

To swap in a new Vagaro widget, replace `BOOKING_WIDGET_URL` in `lib/site.ts`.

## Editing site content

- **Contact details** (address, phone, email, hours) — `contactItems` in [app/page.tsx](app/page.tsx).
- **Phone constant** — `PHONE` / `PHONE_HREF` in [lib/site.ts](lib/site.ts).
- **Services** — [lib/services.ts](lib/services.ts); each service has a detail page at `/services/[slug]`.
- **Team** — [lib/team.ts](lib/team.ts); each member has a bio page at `/team/[slug]`.
- **SEO metadata** — per-page `metadata` exports; site defaults in [app/layout.tsx](app/layout.tsx).

## Tech

- [Next.js 16](https://nextjs.org) — App Router
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — reveal/transition animations
- [Phosphor Icons](https://phosphoricons.com)

> Note: this project pins a customized build of Next.js. Check `node_modules/next/dist/docs/` before relying on conventions from upstream Next.js docs.
