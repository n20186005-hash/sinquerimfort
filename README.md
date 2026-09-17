# Sinquerim Fort / Goa

A single-page Astro + Tailwind CSS + TypeScript visitor guide for Sinquerim Fort (Sinquerim Beach Bastion), Candolim, Goa.

Production domain: `https://sinquerimfort.com` (default `site` in `astro.config.mjs`; override with `PUBLIC_SITE_URL` if needed).

## Commands

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm exec wrangler deploy      # deploy the static build to Cloudflare Workers assets
```

`astro build` writes the site to `dist/client`; `wrangler.jsonc` publishes that directory as static assets, and the sitemap is generated only when `site` is set.

## SEO / entity notes

- JSON-LD ships `TouristAttraction` (with `@id`, `image`, `hasMap`, `sameAs`), `WebSite`, `BreadcrumbList` and `FAQPage` graphs.
- The Google Maps rating and review count (4.5 / 20,252, synced September 2026) are shown **only in the page body** — they are deliberately kept out of the JSON-LD, and every mention carries a source and copyright line.
- All Google links stay external: Maps listing, Plus Code search and the embedded map.

## PWA

`public/manifest.webmanifest` + `public/sw.js` provide an installable app with an offline shell (`/offline.html`). The service worker is registered only in production builds. Bump `CACHE_NAME` in `sw.js` when cached assets must be refreshed.

The hero photograph is by iMahesh, “Sinquerim Fort view point, Aguada”, licensed CC BY-SA 4.0 via Wikimedia Commons.
