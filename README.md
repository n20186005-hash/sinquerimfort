# Sinquerim Fort / lower Aguada guide

Hindi at `/` and English at `/en/`, preserving Astro static output, Cloudflare adapter compile-time image processing, Tailwind, TypeScript and the existing dependency lock. The target is the lower shore-side fortification at Candolim, not the hilltop Fort Aguada, lighthouse or former prison.

The successful historical Cloudflare environment uses Node22.13.0 and pnpm10.11.1: normal frozen install, `pnpm run build`, then `npx wrangler deploy`. Package/lock/Node versions are unchanged. The existing postbuild cleanup of generated deployment pointers is retained so the root Wrangler static-asset configuration remains the default route. Only reviewed esbuild/workerd native installers are permitted against the locked graph.

A small native Worker handles established HTTP/www and index aliases before ASSETS and supplies a genuine bilingual404/noindex response. Static pages remain static; no forecast or external booking service has been introduced. The configured Worker name matches the actual `sinquerimfort` project rather than relying on a historical CI name override.

Current lower-site manager-confirmed hours and tariff are not established. The dated Maps24-hour snapshot is clearly qualified. GTDC's09:30–18:00 schedule is explicitly identified as the hilltop fort's, and is not encoded as the lower site's hours. Maps4.5/20,444 is a dated29October2026 third-party snapshot, not an automatic sync or own-site rating/schema.

The unchanged original photograph is retained in source and delivered through existing Astro image processing as responsive WebP; exact source/licence/changes are visible beside each display and documented in CREDITS.md. This does not establish model or venue clearance. Historical images do not prove current safety/access.

The retired service worker deletes only `sinquerim-fort-` caches, unregisters and performs no interception. The old bilingual offline page is noindex and does not claim current access. Privacy names automatic Google Analytics, fonts/map and hosting Web Analytics beacon measurement with official documentation and no invented page switch.

Use normal check/build and the default deployment dry-run before release; native HTML must link to actual Tailwind CSS and all referenced images. Real mobile/desktop browser, exact Cloudflare build, final domain/redirects/404 and injection verification remain separate acceptance gates. Private exports and implementation evidence stay outside this repository.
