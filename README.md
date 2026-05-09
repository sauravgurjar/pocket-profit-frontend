# PocketProfit (Frontend)

Premium, SEO-ready fintech website (frontend-only) built with:

- React + Vite
- Tailwind CSS (dark theme + green accents)
- React Router (lazy-loaded pages)
- Framer Motion (smooth animations)
- Recharts (calculator charts)

## Quickstart

```bash
npm install
npm run dev
```

## Notes

- Update `public/sitemap.xml` and the canonical domain inside SEO (`src/components/Seo.jsx`) before production.
- Replace AdSense placeholders (`src/components/monetize/AdSlot.jsx`) with real ad units/scripts.
- Blog content is static JSON (`src/data/blogs.js`) and supports category filtering + search.

