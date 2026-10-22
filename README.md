# CityLights Estate Landing

Single-page landing site for a real estate agency, built from a Figma design.
Responsive layout for mobile through 1920px desktop, with scroll-based animations.

**Live demo:** https://kuchinsk1y.github.io/citylights-estate-landing/

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router, static export)
- React 19 and TypeScript
- Tailwind CSS 4, with design tokens defined in `src/app/globals.css`
- [Motion](https://motion.dev/) for animations
- ESLint, Prettier

## Features

- Sections: hero with search form, about, statistics, advantages, slogan, apartment gallery, news, newsletter, footer
- Animated counters, parallax hero, reveal-on-scroll, hover states
- Mobile navigation with scroll lock and `Escape` to close
- Apartment gallery with a switchable featured card
- Respects `prefers-reduced-motion`
- Semantic markup, labelled form controls, keyboard-visible focus styles
- Images pre-optimized to WebP; fluid typography between mobile and the 1920px design

## Project structure

```
src/
  app/                 Root layout, global styles, page composition
  components/
    layout/            Header, Footer
    sections/          One component per page section
    ui/                Reusable primitives (Button, Container, Reveal, Counter, ...)
  data/content.ts      All page copy and lists in one place
  lib/                 Helpers (class names, image loader)
public/
  images/, icons/      Static assets
```

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Scripts

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the development server                      |
| `npm run build`        | Create the static export in `out/`                |
| `npm run lint`         | Run ESLint                                        |
| `npm run typecheck`    | Generate route types and run the TypeScript check |
| `npm run format`       | Format the code with Prettier                     |
| `npm run format:check` | Verify formatting                                 |

## Deployment

The site is deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.
The workflow runs lint, type check and format check, builds the static export and publishes `out/`.

The site is served from a sub-path, so the build reads the base path from `NEXT_PUBLIC_BASE_PATH`
(set automatically in the workflow). To reproduce the production build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/citylights-estate-landing npm run build
```

Because a static export has no image optimizer, `src/lib/image-loader.ts` only prefixes image paths
with the base path, and images are committed already optimized.

## Notes

- Headings use Cormorant Garamond as a stand-in for the commercial _Analogue_ typeface used in the design.
- Photos are sourced from [Unsplash](https://unsplash.com/) under the Unsplash License.
  Decorative shapes and the logo come from the original design file.
- Form handlers (search, newsletter) are client-side only and are not connected to a backend.
