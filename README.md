# Praryo – FiveM Portfolio

A modern portfolio site built with **React**, **TypeScript**, and **Vite**. Converted from the original static HTML/CSS/JS version.

## Stack

- **React 18** – UI
- **TypeScript** – Type safety
- **Vite** – Build tool and dev server
- **React Router 6** – Client-side routing

## Quick start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm preview
```

## Project structure

```
├── public/           # Static assets (favicon, main/logo.svg)
├── src/
│   ├── components/    # Header, Footer, Hero, Products, etc.
│   ├── pages/         # Route pages (Home, Store, Skills, …)
│   ├── types/         # Shared types and data (NAV_LINKS, TOP_PRODUCTS, …)
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css     # Global styles (from original)
├── index.html         # Vite entry
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Logo

Place your real logo at `public/main/logo.svg`. The repo includes a simple placeholder if that file is missing.

## Original static site

The original static `index.html` is backed up as `index-static-backup.html`. The full static markup is now implemented as React components and routes.
