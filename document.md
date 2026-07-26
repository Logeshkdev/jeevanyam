# Jeevanyam — Technical Documentation

> Full technical reference for developers, maintainers, and contributors.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Component Reference](#component-reference)
3. [State Management](#state-management)
4. [Routing & Navigation](#routing--navigation)
5. [Animation System](#animation-system)
6. [Image Assets](#image-assets)
7. [Font System](#font-system)
8. [SEO Implementation](#seo-implementation)
9. [Performance Considerations](#performance-considerations)
10. [Known Issues & Tech Debt](#known-issues--tech-debt)
11. [Audit Findings Summary](#audit-findings-summary)

---

## Architecture Overview

```
Next.js App Router (Single Route: /)
│
├── app/layout.tsx          Root layout (metadata, fonts, preloads)
│   └── <html lang="ta">   Always Tamil lang attribute
│       └── <body>
│           └── {children}
│
└── app/page.tsx            "use client" — all UI in one file
    ├── Constants           (whatsapp URL, services[], testimonials[], navLinks())
    ├── Sub-components      (Tag, SectionTitle, Btn — defined inside page.tsx)
    └── Home()              Default export — main page component
        ├── State           (en, activeTesti, menuOpen)
        ├── Effects         (title sync, testimonial timer, resize handler)
        └── Sections        (Nav, Hero, How, Services, Portfolio, Pricing, About,
                             Testimonials, Contact, Footer, Floating WhatsApp)
```

---

## Component Reference

All components are defined in `app/page.tsx`. No separate `components/` directory exists.

### `Tag`

```tsx
function Tag({ children }: { children: React.ReactNode })
```

Renders a small uppercase label (eyebrow text) in gold.

**Usage:** Inside `SectionTitle`.

---

### `SectionTitle`

```tsx
function SectionTitle({
  eyebrow: string,
  title: string,
  text?: string,
  light?: boolean   // default: false
})
```

Renders a section header block with eyebrow tag, h2, and optional body text.

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `eyebrow` | string | required | Small uppercase label above the title |
| `title` | string | required | Main heading text (h2) |
| `text` | string | optional | Subtitle / description paragraph |
| `light` | boolean | `false` | White text mode for dark backgrounds |

---

### `Btn`

```tsx
function Btn({
  children: React.ReactNode,
  ghost?: boolean,      // default: false
  href?: string,        // default: whatsapp URL
  internal?: boolean    // default: false
})
```

Renders a pill-shaped CTA anchor element.

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | ReactNode | required | Button label content |
| `ghost` | boolean | `false` | Transparent/bordered style vs solid wine |
| `href` | string | whatsapp URL | Link destination |
| `internal` | boolean | `false` | If true, omits `target="_blank"` and `rel` |

---

### `Home` (Default Export)

The main page component. All section JSX lives here.

**State:**

| State | Type | Default | Purpose |
|---|---|---|---|
| `en` | boolean | `false` | Language toggle (false = Tamil, true = English) |
| `activeTesti` | number | `0` | Index of currently shown testimonial |
| `menuOpen` | boolean | `false` | Mobile hamburger menu open state |

**Key Functions:**

| Function | Signature | Purpose |
|---|---|---|
| `t()` | `(ta: string, en: string) => string` | Returns Tamil or English string based on `en` state |
| `navigateTo()` | `(href: string) => void` | Programmatic scroll with nav height offset + 50ms delay |
| `submit()` | `(e: FormEvent<HTMLFormElement>) => void` | Encodes form data into WhatsApp URL and opens in new tab |

---

## State Management

No external state library is used. State is managed via React's `useState` hook, local to the `Home` component.

### Language State

```tsx
const [en, setEn] = useState(false);
const t = (ta: string, en2: string) => en ? en2 : ta;
```

The `t()` function is the translation mechanism — it returns one of two hardcoded strings based on the `en` boolean.

**Limitation:** Language selection is not persisted. On reload, defaults to Tamil.

### Testimonials Auto-Carousel

```tsx
useEffect(() => {
  const id = window.setInterval(
    () => setActiveTesti(c => (c + 1) % testimonials.length),
    5000
  );
  return () => window.clearInterval(id);
}, []);
```

Cycles through 3 testimonials every 5 seconds. The interval is properly cleaned up on unmount.

### Menu Close on Resize

```tsx
useEffect(() => {
  const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
  window.addEventListener("resize", fn);
  return () => window.removeEventListener("resize", fn);
}, []);
```

Closes the mobile menu automatically when the viewport reaches the `md` breakpoint (768px).

---

## Routing & Navigation

### Anchor-Based Navigation

All navigation is scroll-based (SPA pattern, single route `/`):

```tsx
const navigateTo = (href: string) => {
  setMenuOpen(false);
  if (!href.startsWith("#")) return;
  const id = href.slice(1);
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      const navH = document.querySelector("nav")?.offsetHeight ?? 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, 50);
};
```

- Gets the nav element's actual runtime height (falls back to 80px)
- Applies a 50ms delay to let the mobile drawer close animation finish
- CSS `scroll-margin-top: var(--nav-h)` is also set on all sections as a fallback

### External Links

- **WhatsApp**: All CTA buttons open `wa.me/916383393155` in a new tab
- **Instagram**: Footer link opens the brand's Instagram profile in a new tab
- All external links use `rel="noopener noreferrer"` for security

---

## Animation System

Powered by **Framer Motion v12**.

### Entrance Animations

```tsx
// Hero copy
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>

// Photo mosaic
<motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .85, delay: .2 }}>

// Portfolio cards (on scroll)
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .5 }}>
```

### Hover Effects

```tsx
// How-it-works & Service cards
<motion.div whileHover={{ y: -4 }}>     // How steps
<motion.article whileHover={{ y: -3 }}>  // Service cards
```

### Testimonial Carousel

```tsx
<AnimatePresence mode="wait">
  <motion.article
    key={activeTesti}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: .35 }}>
```

### Hamburger Icon Transition

```tsx
<AnimatePresence mode="wait" initial={false}>
  {menuOpen
    ? <motion.span key="x" initial={{ rotate: -45, opacity: 0 }} ... ><X /></motion.span>
    : <motion.span key="m" initial={{ rotate: 45, opacity: 0 }} ...><Menu /></motion.span>
  }
</AnimatePresence>
```

---

## Image Assets

All images are in `public/images/`. They are served as static files with standard `<img>` tags (not `next/image`).

| File | Size | Type | Usage | Loading Strategy |
|---|---|---|---|---|
| `jeevanyam-logo-dark.png` | 92 KB | PNG | Nav & Footer logo | `preload`, `fetchPriority="high"` |
| `hero-memory-1.jpg` | 217 KB | JPG | Hero mosaic (top-left) | `preload`, `loading="eager"` |
| `hero-memory-2.jpg` | 177 KB | JPG | Hero mosaic | `loading="lazy"` |
| `hero-memory-3.jpg` | 374 KB | JPG | Hero mosaic | `loading="lazy"` |
| `hero-memory-4.jpg` | 415 KB | JPG | Hero mosaic | `loading="lazy"` |
| `hero-memory-5.jpg` | 229 KB | JPG | Hero mosaic | `loading="lazy"` |
| `hero-memory-6.jpg` | 325 KB | JPG | Hero mosaic | `loading="lazy"` |
| `kalai-joathi-book.jpg` | 55 KB | JPG | Portfolio section | `loading="lazy"` |
| `jeevanyam-logo.jpg` | 139 KB | JPG | Unused logo variant | — |
| `jeevanyam-logo.webp` | 152 KB | WEBP | Unused logo variant | — |
| `instagram.png` | **2,648 KB** | PNG | Footer Instagram icon | `loading="lazy"` |
| `instagram.svg` | **10,896 KB** | SVG | Footer Instagram icon | `loading="lazy"` |

**Critical Issue:** The `instagram.svg` file is 10.9 MB and `instagram.png` is 2.6 MB — both are extremely oversized for a simple icon. Only the SVG is referenced in code; the PNG is unused.

---

## Font System

Fonts are loaded via Google Fonts CDN in `layout.tsx`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@400;500;600;700
  &family=Noto+Sans+Tamil:wght@300;400;500;600;700
  &family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600
  &display=swap" rel="stylesheet"/>
```

**Font stacks defined in `globals.css`:**

```css
--font-sans-tamil:  "Noto Sans Tamil", "Noto Sans", system-ui, sans-serif;
--font-serif-tamil: "Noto Serif Tamil", "Noto Serif", Georgia, serif;
--font-serif-latin: "Cormorant Garamond", Georgia, "Times New Roman", serif;
```

---

## SEO Implementation

### Static Metadata (layout.tsx)

```tsx
export const metadata: Metadata = {
  title: "ஜீவனயம் | தனிப்பயன் கதை புத்தகங்கள்",
  description: "உங்கள் நினைவுகளை அழகான தமிழ் கதை புத்தகமாக மாற்றுங்கள்...",
  keywords: ["Tamil Story Book", "Personalized Book Tamil", ...]
};
```

### Dynamic Title (page.tsx)

```tsx
useEffect(() => {
  document.title = en
    ? "Jeevanyam | Personalized Story Books"
    : "ஜீவனயம் | தனிப்பயன் கதை புத்தகங்கள்";
}, [en]);
```

**Issues:**
- Missing: `og:image`, `og:type`, `og:url`, `twitter:card` Open Graph meta tags
- Missing: canonical URL
- Missing: `robots` meta tag
- Missing: `sitemap.xml` and `robots.txt`
- The dynamic title via `useEffect` overrides the static metadata title — inconsistency

---

## Performance Considerations

### What's Optimized

- Preloads for logo and first hero image in `<head>`
- `fetchPriority="high"` on the above-fold logo and first hero image
- `loading="lazy"` on all below-fold images
- `display=swap` on Google Fonts to avoid FOIT
- `scroll-margin-top` for anchor offsets avoids layout shifts
- Framer Motion `viewport={{ once: true }}` prevents re-triggering scroll animations

### What Needs Improvement

- Instagram SVG icon is 10.9 MB (should be < 5 KB as a proper SVG icon)
- All images use `<img>` instead of `next/image` — missing automatic WebP conversion, responsive srcsets, and built-in lazy loading optimization
- No image `width`/`height` attributes on most `<img>` tags — causes layout shift (CLS)
- Google Fonts loaded from CDN — no self-hosting for GDPR compliance or performance
- No `<link rel="preload">` for the Google Fonts CSS itself
- No resource hints for the WhatsApp domain

---

## Known Issues & Tech Debt

| # | Category | Issue | Severity |
|---|---|---|---|
| 1 | Performance | `instagram.svg` is 10.9 MB — catastrophic page weight | Critical |
| 2 | Performance | `instagram.png` (2.6 MB) is in public/ but unused | High |
| 3 | Performance | No `next/image` usage — missing WebP conversion & srcset | High |
| 4 | Maintainability | All code in a single 472-line `page.tsx` — no component split | High |
| 5 | SEO | Missing Open Graph / Twitter Card meta tags | High |
| 6 | SEO | `<html lang="ta">` never updates when English is selected | Medium |
| 7 | Security | Phone number `916383393155` hardcoded in source (publicly visible) | Medium |
| 8 | Accessibility | Several `<img>` tags have empty `alt=""` attributes | Medium |
| 9 | Accessibility | Language toggle button has no `aria-label` | Medium |
| 10 | Accessibility | Testimonial section has no `id` — cannot be linked via nav | Medium |
| 11 | UX | Language preference not persisted (resets on reload) | Medium |
| 12 | UX | No actual prices shown — relies entirely on WhatsApp enquiry | Medium |
| 13 | SEO | Missing `sitemap.xml` and `robots.txt` | Medium |
| 14 | SEO | Missing canonical URL meta tag | Medium |
| 15 | Performance | Images missing `width` / `height` attributes (CLS risk) | Medium |
| 16 | Maintainability | `tailwind.config.ts` content path includes `./components/**` (no such directory) | Low |
| 17 | Maintainability | `tsconfig.json` has Windows line endings (CRLF) mixed with LF | Low |
| 18 | DX | No ESLint config file (`.eslintrc`) defined | Low |
| 19 | UX | Unused logo variants (`jeevanyam-logo.jpg`, `.webp`) add repo weight | Low |
| 20 | Accessibility | Min touch target (`44px`) on `button` and `a` overrides icon-only buttons | Low |
| 21 | Security | No Content Security Policy (CSP) headers configured | Medium |
| 22 | Performance | Google Fonts loaded via CDN (no self-hosting for GDPR/perf) | Low |
| 23 | Code Quality | `as any` type cast used for icon types in HOW section array | Low |
| 24 | UX | Contact form has no success/error feedback to user after submission | Medium |
| 25 | Performance | `next.config.ts` allows `images.unsplash.com` but `next/image` is not used | Low |

---

## Audit Findings Summary

### Critical (Fix Immediately)

1. **10.9 MB Instagram SVG** — Replace with a standard simple SVG icon (< 2 KB)

### High Priority

2. **Migrate to `next/image`** — Automatic WebP, srcset, lazy load, no CLS
3. **Split `page.tsx`** into proper components in a `components/` directory
4. **Add Open Graph & Twitter Card meta tags** for social sharing previews

### Medium Priority

5. **Add `sitemap.xml` and `robots.txt`** for search engine indexing
6. **Persist language preference** using `localStorage`
7. **Fix `<html lang>` to update** dynamically when English is selected
8. **Add form feedback** (success message or error handling) after contact form submit
9. **Add CSP and security headers** via `next.config.ts` or a CDN/reverse proxy
10. **Add `aria-label`** to language toggle button

### Low Priority

11. Remove unused logo variants from `public/`
12. Remove unused `instagram.png`
13. Fix `tailwind.config.ts` content path (remove non-existent `components/` path)
14. Replace `as any` with proper TypeScript types for Lucide icon arrays
15. Add `width` and `height` to all `<img>` tags to prevent CLS
