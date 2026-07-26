# ஜீவனயம் (Jeevanyam) — Personalized Tamil Story Books

> **"Every family has a book waiting to be written."**

A beautifully crafted marketing & lead-generation landing page for **Jeevanyam**, a service that transforms personal memories into professionally written and designed Tamil story books.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Available Scripts](#available-scripts)
6. [Feature Reference](#feature-reference)
7. [Design System](#design-system)
8. [Sections & Pages](#sections--pages)
9. [Internationalization (i18n)](#internationalization-i18n)
10. [Contact & Lead Flow](#contact--lead-flow)
11. [Environment & Configuration](#environment--configuration)
12. [Deployment](#deployment)

---

## Project Overview

**Jeevanyam** is a single-page application (SPA) built with Next.js (App Router). It serves as a marketing website to:

- Showcase the service offerings (Love Story, Family Story, House Journey, etc.)
- Display a portfolio of completed books
- Present pricing tiers (Starter, Premium, Luxury)
- Collect leads via a WhatsApp-powered contact form

The site is fully bilingual — **Tamil (default)** and **English** — with a toggle in the navigation bar.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | ^16.2.10 |
| Language | TypeScript | ^5 |
| UI | React | ^19.2.7 |
| Styling | Tailwind CSS | ^3.4.17 |
| Animation | Framer Motion | ^12.0.0 |
| Icons | Lucide React | ^0.468.0 |
| Fonts | Google Fonts (Noto Serif Tamil, Noto Sans Tamil, Cormorant Garamond) | via CDN |
| Package Manager | npm | — |

---

## Project Structure

```
story_writing/
├── app/
│   ├── globals.css          # Global styles, design tokens, Tamil typography utilities
│   ├── layout.tsx           # Root layout: metadata, fonts, viewport, preloads
│   └── page.tsx             # Single-page app (all sections in one file — 472 lines)
├── public/
│   └── images/
│       ├── hero-memory-1.jpg   # Hero photo mosaic images
│       ├── hero-memory-2.jpg
│       ├── hero-memory-3.jpg
│       ├── hero-memory-4.jpg
│       ├── hero-memory-5.jpg
│       ├── hero-memory-6.jpg
│       ├── instagram.png       # Instagram icon (PNG — 2.6 MB, oversized)
│       ├── instagram.svg       # Instagram icon (SVG — 10.9 MB, extremely oversized)
│       ├── jeevanyam-logo-dark.png  # Primary logo (dark variant)
│       ├── jeevanyam-logo.jpg  # Logo alternative
│       ├── jeevanyam-logo.webp # Logo alternative (WebP)
│       └── kalai-joathi-book.jpg    # Portfolio book cover
├── .gitignore
├── next.config.ts           # Next.js config (remote image patterns)
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts       # Tailwind theme: colors, fonts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
# 1. Clone or download the project
cd story_writing

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server (hot reload) |
| `npm run build` | Create the production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## Feature Reference

### Core Features

| Feature | Description | Location in Code |
|---|---|---|
| Bilingual Toggle | Switch between Tamil (default) and English | `page.tsx` — `useState(en)`, `t()` helper |
| Smooth Navigation | Programmatic scroll with fixed nav offset | `page.tsx` — `navigateTo()` |
| Mobile Hamburger Menu | Animated open/close drawer | `page.tsx` — NAV section |
| Testimonials Carousel | Auto-rotates every 5s; manual dot navigation | `page.tsx` — TESTIMONIALS section |
| WhatsApp Lead Form | Form data serialized into a wa.me deep link | `page.tsx` — `submit()`, CONTACT section |
| Floating WhatsApp Button | Always-visible CTA for quick contact | `page.tsx` — bottom of `<main>` |
| Photo Mosaic (Hero) | 6-image grid on desktop; scroll strip on mobile | `page.tsx` — HERO section |
| Framer Motion Animations | Entrance animations, hover lifts, icon transitions | Throughout `page.tsx` |

### Service Offerings

| Tamil Name | English Name | Emoji |
|---|---|---|
| காதல் கதை | Love Story | ❤️ |
| குடும்ப நினைவுகள் | Family Story | 👨‍👩‍👧 |
| வீட்டின் பயணம் | House Journey | 🏠 |
| பெற்றோர் வரலாறு | Parents Memoir | 👵 |
| திருமண நினைவுகள் | Wedding Story | 💍 |
| தொழில் பயணம் | Business Journey | 💼 |

### Pricing Tiers

| Tier | Includes |
|---|---|
| Starter (தொடக்கம்) | Story writing, PDF delivery |
| Premium (அழகு) — Most Loved | Story writing, Premium design, PDF delivery |
| Luxury (பாரம்பரியம்) | Story writing, Premium design, Print support, Gift-ready finish |

---

## Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--wine` / `wine` | `#641f2b` | Primary brand, headings, CTAs |
| `--gold` / `gold` | `#c89b4b` | Accents, highlights, icons |
| `--cream` / `cream` | `#fbf6ed` | Page background, light sections |
| `--ink` / `ink` | `#322d2c` | Body text |
| `#1e0810` | Dark maroon | Dark sections (Hero, Portfolio, Testimonials) |
| `#f0e6d3` | Warm sand | Alt sections (Services, About, Footer) |

### Typography

| Font | Usage | CSS Variable |
|---|---|---|
| Noto Sans Tamil | Body text, UI elements | `--font-sans-tamil` |
| Noto Serif Tamil | Tamil headings | `--font-serif-tamil` |
| Cormorant Garamond | English headings | `--font-serif-latin` |

### Custom CSS Utilities (globals.css)

| Class | Purpose |
|---|---|
| `.texture` | Subtle dot-grid background pattern |
| `.gold-line` | 56px decorative gold divider |
| `.cover` | Book cover shadow effect with inset border |
| `.text-tamil-body` | Tamil body text optimization |
| `.text-tamil-heading` | Tamil heading optimization |
| `.tamil-text` | Zero letter-spacing for Tamil glyphs |

---

## Sections & Pages

The entire website is a single scrollable page `/` with anchor-linked sections:

| Section ID | Display Name | Background Color |
|---|---|---|
| `#home` | Hero | Dark maroon `#1e0810` |
| `#how` | How It Works | Cream `#fbf6ed` |
| `#services` | Services | Warm sand `#f0e6d3` |
| `#portfolio` | Portfolio / Glimpse | Dark maroon `#1e0810` |
| `#pricing` | Pricing | Cream `#fbf6ed` |
| `#about` | About / Why We Exist | Warm sand `#f0e6d3` |
| *(no id)* | Testimonials | Dark maroon `#1e0810` |
| `#contact` | Contact Form | Cream `#fbf6ed` |
| *(footer)* | Footer | Warm sand `#f0e6d3` |

---

## Internationalization (i18n)

A lightweight, zero-dependency bilingual system:

```tsx
const [en, setEn] = useState(false);            // false = Tamil (default)
const t = (ta: string, en2: string) => en ? en2 : ta;  // inline translation
```

- No i18n library is used — all strings are hardcoded in Tamil/English pairs
- Language preference is **not persisted** across page reloads
- The `<html lang="ta">` attribute remains Tamil regardless of toggle state

---

## Contact & Lead Flow

All contact is routed through **WhatsApp** (`+91 63833 93155`):

1. User fills in name, phone, story type, message in the contact form
2. On submit, data is URL-encoded into a `wa.me` deep link
3. WhatsApp opens in a new tab with a pre-filled message

```
https://wa.me/916383393155?text=Hello!%0AName: {name}%0APhone: {phone}%0AStory: {story}%0AMessage: {message}
```

The same WhatsApp number is also used for all CTA buttons throughout the page.

---

## Environment & Configuration

### next.config.ts

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }]
  }
};
```

> Note: The `next/image` component is not currently used. All images use standard `<img>` tags.

### tailwind.config.ts

- **Content scan**: `./app/**/*.{ts,tsx}`, `./components/**/*.{ts,tsx}`
- **Custom colors**: wine, gold, cream, ink
- **Custom fonts**: serif extended to Georgia (actual fonts loaded via Google Fonts CDN)

---

## Deployment

This is a standard Next.js App Router application. Recommended platforms:

| Platform | Notes |
|---|---|
| **Vercel** | Zero-config; recommended for Next.js |
| **Netlify** | Requires `@netlify/plugin-nextjs` |
| **Self-hosted** | `npm run build && npm run start` |

No environment variables are required for the current feature set.
