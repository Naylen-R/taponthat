# TapOnThat

A storefront for TapOnThat, a Canadian NFC tap-card company. Built with React, Vite, and Tailwind CSS.

The site walks a visitor through the product story — card, tap, result — with a homepage hero, an interactive CSS 3D card, a live tap-to-open demo, a shop and product detail flow with a persistent cart, and a custom order request form for businesses that want their own branded cards.

## Stack

- **React 19** + **Vite** — app shell and build tooling
- **React Router** — client-side routing
- **Tailwind CSS** — design system (spacing, type scale, colors)
- **Framer Motion** — scroll reveals and reduced-motion-aware transitions
- **@stripe/stripe-js** — checkout client (see note below)

## Running locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. `npm run build` produces a production bundle in `dist/`.

## Project structure

```
src/
  components/
    ui/        shared primitives (buttons, sections, accordion, icons)
    layout/     header, mobile nav, footer, cart drawer
    home/       homepage-only sections (hero, tap demo, use cases, etc.)
    product/    shop/product page pieces (gallery, quantity selector)
    forms/      custom order request form
  pages/        one file per route
  context/      cart state (persisted to localStorage)
  data/         product catalog and site config (nav links, footer, etc.)
  lib/          formatting helpers, Stripe client
  hooks/        small reusable hooks (reduced motion, scroll position, page meta)
```

## Known placeholders

This is a frontend build with no live backend wired up yet:

- **Pricing** in `src/data/products.js` is a placeholder value, not a real price.
- **Checkout** (`src/lib/stripe.js`) calls a `/api/create-checkout-session` endpoint that doesn't exist yet — creating a real Stripe Checkout Session requires a small server holding the secret key, which can't live in the browser.
- **Custom order and contact forms** submit locally (no email/backend connected).
- **Logo and product photography** are placeholder graphics — the 3D card component keeps the real card's proportions (86.4mm × 54mm) so real photography can drop in later.
