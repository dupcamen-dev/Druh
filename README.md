# DRUH — Café & Kitchen

Landing page for **DRUH**, a café-kitchen in Ternopil, Ukraine.

Built with [Next.js](https://nextjs.org) (App Router) + [Tailwind CSS](https://tailwindcss.com) v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command            | Description                                             |
| ------------------ | ------------------------------------------------------- |
| `npm run dev`      | Start the dev server                                    |
| `npm run build`    | Production build (server mode)                          |
| `npm run start`    | Serve the production build                              |
| `npm run lint`     | Run ESLint                                              |

## Static export (GitHub Pages)

The site deploys to GitHub Pages via `.github/workflows/deploy.yml`.
For a static export with the `/Druh` basePath:

```bash
$env:GH_PAGES = "true"
$env:NEXT_PUBLIC_BASE_PATH = "/Druh"
npm run build
```

Output goes to `out/`. In server mode (`GH_PAGES` unset) the app runs as a normal
Next.js server without a basePath.

## Structure

- `src/app` — routes (`/` home, `/menu`)
- `src/components` — UI components (Header, Kramnychka shop, Gallery, …)
- `src/data` — brand and shop data (menu items)
- `public/images` — photography and shop cut-outs
- `public/menu/druh-menu-en.pdf` — the menu PDF
- `scripts/generate-pdf.js` — regenerates the menu PDF (requires a configured font)