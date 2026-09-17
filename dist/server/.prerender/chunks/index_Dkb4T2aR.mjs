globalThis.process ??= {};
globalThis.process.env ??= {};
import { b as createAstro, d as renderHead, f as addAttribute, l as renderTemplate, v as unescapeHTML } from "./server_Cpzd0e8w.mjs";
import { t as createComponent } from "./compiler_CfUxvJO8.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://sinquerimfort.com");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Index;
	const siteUrl = Astro2.site?.toString().replace(/\/$/, "");
	const canonical = siteUrl ? `${siteUrl}${Astro2.url.pathname}` : Astro2.url.pathname;
	const abs = (path) => siteUrl ? `${siteUrl}${path}` : path;
	const FULL = "Sinquerim Fort";
	const SHORT = "Sinquerim Fort";
	const CITY = "Candolim";
	const STATE = "Goa";
	const COUNTRY = "India";
	const POSTAL = "403515";
	const LAT = 15.498447;
	const LNG = 73.766356;
	const MAPS_SHARE_URL = "https://maps.app.goo.gl/FjmgmJePsTwafjCB8";
	const MAPS_PLUS_URL = "https://www.google.com/maps/search/?api=1&query=FQX8%2B9HJ%2C%20Candolim%2C%20Goa%2C%20India";
	const MAPS_EMBED_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.917!2d73.766356!3d15.498447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5m1!1e2!6m1!1e1!7m1!1e1!8m1!1m3!1e2!2szh-CN!3sIN";
	const GOVT_TOURISM_URL = "https://www.goatourism.gov.in/";
	const NEARBY_1 = "Aguada Fort & Lighthouse";
	const NEARBY_2 = "Candolim Beach";
	const RATING_VALUE = "4.5";
	const RATING_COUNT_LABEL = "20,252";
	const RATING_SYNCED = "September 2026";
	const hero = "/images/fort-view.jpg";
	const heroAlt = `${FULL} - Main view in ${CITY}, ${COUNTRY}`;
	const title = `${FULL} (${CITY}, ${STATE}) - Visitor Guide & Location`;
	const description = `Discover ${FULL}, the sea-facing laterite bastion in ${CITY}, ${STATE}, ${COUNTRY}. View the location map, opening details, nearby ${NEARBY_1} and ${NEARBY_2}, and travel tips.`;
	const ogTitle = `${FULL} - ${CITY} Travel Guide`;
	const ogDescription = `Official visitor guide to ${FULL} in ${CITY}, ${STATE}, ${COUNTRY}.`;
	const schemaDescription = `Comprehensive visitor guide to ${FULL} in ${CITY}, ${STATE}, ${COUNTRY}.`;
	const faqs = [
		{
			name: `Where is ${FULL} located?`,
			text: `${FULL} is located in ${CITY}, ${STATE}, ${COUNTRY}, at Plus Code FQX8+9HJ on the shoreline below Aguada Fort (${LAT}, ${LNG}).`
		},
		{
			name: `Is ${SHORT} free to visit?`,
			text: "Yes, the sea-facing bastion is a public space and is generally free to view in daylight. Any paid access nearby belongs to other parts of the Aguada complex and may change."
		},
		{
			name: `What are the opening hours of ${FULL}?`,
			text: "The bastion is an open-air site usually visited between roughly 09:30 and 18:00. Hours are not formally ticketed, so confirm locally before an early or late visit."
		},
		{
			name: "How long should I spend here?",
			text: "Allow 45–90 minutes for the bastion, beach walk and photographs. Add more time if pairing it with Aguada Fort."
		},
		{
			name: "What is the best time to arrive?",
			text: "Early morning is cooler and quieter; late afternoon gives softer light over the laterite walls and the Arabian Sea."
		},
		{
			name: `What is there to see near ${FULL}?`,
			text: `Within a short drive you can reach ${NEARBY_1}, ${NEARBY_2} and, across the Mandovi estuary, Reis Magos Fort.`
		},
		{
			name: `How do I get to ${FULL} from Panaji?`,
			text: "Head north on NH 66 toward Candolim, then follow signs for Sinquerim Beach / Aguada Fort. Taxis, rented scooters and ride-hailing all work; scooters are easier to park in peak season."
		}
	];
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "TouristAttraction",
				"@id": abs("/#attraction"),
				name: FULL,
				alternateName: ["Sinquerim Beach Bastion", `${CITY} ${FULL}`],
				description: schemaDescription,
				url: canonical,
				image: [abs(hero)],
				isAccessibleForFree: true,
				address: {
					"@type": "PostalAddress",
					streetAddress: "FQX8+9HJ",
					addressLocality: CITY,
					addressRegion: STATE,
					postalCode: POSTAL,
					addressCountry: "IN"
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: LAT,
					longitude: LNG
				},
				hasMap: MAPS_SHARE_URL,
				openingHoursSpecification: {
					"@type": "OpeningHoursSpecification",
					dayOfWeek: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday"
					],
					opens: "09:30",
					closes: "18:00"
				},
				sameAs: [MAPS_SHARE_URL, GOVT_TOURISM_URL]
			},
			{
				"@type": "WebSite",
				"@id": abs("/#website"),
				url: canonical,
				name: `${FULL} Visitor Guide`,
				inLanguage: "en"
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: canonical
				}, {
					"@type": "ListItem",
					position: 2,
					name: FULL
				}]
			},
			{
				"@type": "FAQPage",
				mainEntity: faqs.map((faq) => ({
					"@type": "Question",
					name: faq.name,
					acceptedAnswer: {
						"@type": "Answer",
						text: faq.text
					}
				}))
			}
		]
	};
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.svg"><link rel="canonical"${addAttribute(canonical, "href")}><meta property="og:title"${addAttribute(ogTitle, "content")}><meta property="og:description"${addAttribute(ogDescription, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:site_name"${addAttribute(`${FULL} Visitor Guide`, "content")}><meta property="og:locale" content="en_IN"><meta property="og:image"${addAttribute(abs(hero), "content")}><meta property="og:image:alt"${addAttribute(`${FULL} in ${CITY}`, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(ogTitle, "content")}><meta name="twitter:description"${addAttribute(ogDescription, "content")}><meta name="twitter:image"${addAttribute(abs(hero), "content")}><meta name="theme-color" content="#143d4a"><link rel="manifest" href="/manifest.webmanifest"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="Sinquerim"><script type="application/ld+json">${unescapeHTML(JSON.stringify(jsonLd))}<\/script><script async src="https://www.googletagmanager.com/gtag/js?id=G-HXM22WWPKP"><\/script><script>window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HXM22WWPKP');<\/script>${renderTemplate`<script>if ('serviceWorker' in navigator) { window.addEventListener('load', function () { navigator.serviceWorker.register('/sw.js').catch(function () {}); }); }<\/script>`}${renderHead($$result)}</head><body><header class="fixed top-0 z-20 w-full mix-blend-multiply"><div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10"><a href="#top" class="flex items-center gap-3" aria-label="Sinquerim Fort home"><img src="/favicon.svg" alt="" width="38" height="38"><span class="display text-lg font-bold tracking-tight">sinquerim<span class="text-[#a75238]">/</span>fort</span></a><nav class="hidden gap-7 text-xs font-semibold uppercase tracking-[.15em] md:flex"><a href="#story">The story</a><a href="#reviews">Reviews</a><a href="#visit">Plan a visit</a><a href="#nearby">Nearby</a></nav><a href="#map" class="rounded-full bg-[#143d4a] px-5 py-3 text-xs font-bold uppercase tracking-[.14em] text-[#f8f4ec] transition hover:bg-[#a75238]">Find the fort ↗</a></div></header><main id="top"><section class="paper-grid relative min-h-[88vh] overflow-hidden px-5 pb-16 pt-36 lg:px-10"><div class="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[.9fr_1.1fr]"><div class="relative z-10 reveal"><nav aria-label="Breadcrumb" class="mono mb-6 text-[10px] uppercase tracking-[.15em] text-[#657174]">${FULL} → ${CITY} → ${STATE} → ${COUNTRY}</nav><h1 class="display max-w-3xl text-[clamp(3.2rem,7.6vw,7.5rem)] font-bold leading-[.85]">Sinquerim<br><em class="font-normal text-[#a75238]">Fort</em><br><span class="text-[.26em] font-normal tracking-tight text-[#46565a]">(${CITY}, ${STATE} · ${COUNTRY})</span></h1><p class="display mt-5 text-xl italic text-[#46565a]">Where laterite stone meets the Arabian Sea tide.</p><p class="mt-8 max-w-md text-base leading-7 text-[#46565a]">Welcome to <strong>${FULL}</strong>, widely recognized as the <strong>Sinquerim Beach Bastion</strong>. Located on the shoreline of <strong>${CITY}</strong>, <strong>${STATE}</strong>, <strong>${COUNTRY}</strong>, this sea-facing bastion is a primary stop for travellers reading the North Goa coast.</p><div class="mt-8 flex flex-wrap gap-3"><a href="#visit" class="rounded-full bg-[#a75238] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#143d4a]">Plan your pause ↓</a><span class="rounded-full border border-[#172126]/20 px-5 py-3 text-sm">Free to explore · daylight</span></div><div class="mt-7"><p class="text-sm"><strong class="display text-2xl">${RATING_VALUE}</strong><span class="text-[#657174]"> / 5</span> · <span class="text-[#a75238]" aria-hidden="true">★★★★☆</span> · <strong>${RATING_COUNT_LABEL}</strong> Google Maps reviews</p><p class="mt-2 max-w-md text-[11px] leading-5 text-[#657174]">Rating &amp; review count synced from Google Maps user reviews · ${RATING_SYNCED} · <a class="text-[#a75238] underline decoration-[#a75238]/40"${addAttribute(MAPS_SHARE_URL, "href")} target="_blank" rel="noopener noreferrer">View all reviews on Google Maps ↗</a></p></div></div><figure class="relative lg:-mr-20 reveal" style="animation-delay:.12s"><div class="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-[#a75238]/40"></div><img${addAttribute(hero, "src")}${addAttribute(heroAlt, "alt")} class="relative aspect-[1.2] w-full object-cover shadow-2xl grayscale-[.1]"><figcaption class="mt-3 flex justify-between text-[10px] uppercase tracking-[.15em] text-[#657174]"><span>Lower Aguada Fort / Sinquerim Beach</span><span>01 / 04</span></figcaption></figure></div></section><section id="story" class="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10"><div><p class="eyebrow">A small bastion, a wide horizon</p><h2 class="display mt-4 text-5xl leading-none lg:text-6xl">About ${FULL}<br><span class="text-[#a75238]">read the coast in layers.</span></h2></div><div class="max-w-2xl text-lg leading-8 text-[#46565a]"><p>Welcome to <strong>${FULL}</strong>, widely recognized as the <strong>Sinquerim Beach Bastion</strong>. Located in ${CITY}, ${STATE}, ${COUNTRY}, this destination serves as a quiet hub for travellers visiting the region — the place where the Aguada defence line meets the open sea.</p><p class="mt-6">Built by the Portuguese in 1612 as part of the Aguada defensive complex, the lower fort once watched the mouth of the Mandovi River. Today its curved wall and causeway make a quiet lookout over Sinquerim, Candolim, Calangute and Baga.</p><p class="mt-6">Come for the architecture, stay for the changing light: warm laterite after rain, bright fishing boats at noon, and a horizon that turns copper before dusk.</p><div class="mt-10 grid grid-cols-2 gap-6 border-t border-[#172126]/15 pt-6 text-sm"><div><span class="eyebrow">Built</span><strong class="mt-2 block text-2xl">1612</strong></div><div><span class="eyebrow">Material</span><strong class="mt-2 block text-2xl">Laterite</strong></div><div><span class="eyebrow">Rating</span><strong class="mt-2 block text-2xl">${RATING_VALUE} / 5</strong><span class="mt-1 block text-[11px] text-[#657174]">${RATING_COUNT_LABEL} Google Maps reviews · ${RATING_SYNCED}</span></div><div><span class="eyebrow">Stay</span><strong class="mt-2 block text-2xl">45–90 min</strong></div></div></div></section><section id="reviews" class="border-y border-[#172126]/10 bg-white/60 px-5 py-24 lg:px-10"><div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p class="eyebrow">Visitor sentiment</p><h2 class="display mt-4 text-5xl leading-none lg:text-6xl">${FULL} reviews<br><span class="text-[#a75238]">&amp; rating</span></h2><p class="mt-6 max-w-md text-base leading-7 text-[#46565a]">This is an unofficial guide. The score and review total are quoted from the Google Maps listing for ${FULL}; the reviews themselves stay on Google and are not reproduced here.</p></div><div class="rounded-2xl bg-white/85 p-8 shadow-sm"><div class="flex flex-wrap items-end gap-6"><p class="display text-6xl font-bold leading-none">${RATING_VALUE}<span class="text-2xl font-normal text-[#657174]"> / 5</span></p><div><p class="text-xl text-[#a75238]" aria-hidden="true">★★★★☆</p><p class="mt-1 text-sm text-[#46565a]"><strong>${RATING_COUNT_LABEL}</strong> Google Maps reviews</p></div></div><p class="mt-6 text-xs leading-6 text-[#657174]">Synced from Google Maps user reviews, last synced ${RATING_SYNCED}; copyright belongs to the original authors and Google Maps. Shown on this page for reference only — the rating is not published in this site’s structured data.</p><a class="mt-6 inline-block rounded-full bg-[#143d4a] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#a75238]"${addAttribute(MAPS_SHARE_URL, "href")} target="_blank" rel="noopener noreferrer">View all reviews on Google Maps ↗</a></div></div></section><section class="bg-[#143d4a] px-5 py-20 text-[#f8f4ec] lg:px-10"><div class="mx-auto grid max-w-7xl gap-5 md:grid-cols-3"><figure class="md:col-span-2"><img${addAttribute(hero, "src")}${addAttribute(`${FULL} rampart above the Arabian Sea in ${CITY}, ${COUNTRY}`, "alt")} class="h-[28rem] w-full object-cover" loading="lazy"><figcaption class="mt-3 text-xs text-[#b4c5c3]">The view from the fort’s edge — CC BY-SA 4.0, iMahesh / Wikimedia Commons.</figcaption></figure><div class="flex flex-col justify-end border-l border-[#b4c5c3]/30 pl-6"><p class="eyebrow text-[#d28f69]">The quiet rule</p><p class="display mt-4 text-4xl leading-tight">Let the wall stay between you and the sea.</p><p class="mt-5 text-sm leading-6 text-[#b4c5c3]">The masonry is unguarded in places. Stay on the causeway, keep back from edges and leave the beach as you found it.</p></div></div></section><section id="history" class="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10"><div><p class="eyebrow">1612 → today</p><h2 class="display mt-4 text-5xl leading-none lg:text-6xl">History &amp; significance<br><span class="text-[#a75238]">of ${FULL}</span></h2></div><div class="max-w-2xl space-y-6 text-lg leading-8 text-[#46565a]"><p>${FULL} was raised by the Portuguese in 1612 as the lower, sea-facing work of the Aguada defensive complex. Standing at the mouth of the Mandovi River, it watched the anchorage and the shore road that supplied the settlements of northern Goa.</p><p>Its significance is in the setting rather than the scale: a short laterite curtain wall, a causeway and a bastion that put cannon within range of the sea lane. Together with the upper fort and the lighthouse it forms the clearest surviving reading of how Goa’s coastline was defended.</p><p>Today the site is valued as public open space — an unhurried viewpoint where military architecture, fishing boats and the Arabian Sea share the same horizon.</p></div></section><section id="visit" class="paper-grid px-5 py-24 lg:px-10"><div class="mx-auto max-w-7xl"><p class="eyebrow">Make it a good visit</p><h2 class="display mt-3 max-w-3xl text-5xl leading-none lg:text-6xl">Location &amp; how to visit ${SHORT} in ${CITY}<br><span class="text-[#a75238]">practical notes for the tide line.</span></h2><div class="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"><article class="rounded-2xl bg-white/70 p-7"><span class="eyebrow">01 / Access</span><h3 class="mt-5 text-xl font-bold">Getting here</h3><p class="mt-3 text-sm leading-6 text-[#526064]">From Panaji, take a taxi or rental scooter north on NH 66 toward Candolim, then follow signs for Sinquerim Beach / Aguada Fort. The nearest useful landmark is the lower Aguada complex.</p></article><article class="rounded-2xl bg-white/70 p-7"><span class="eyebrow">02 / Timing</span><h3 class="mt-5 text-xl font-bold">Light over crowds</h3><p class="mt-3 text-sm leading-6 text-[#526064]">Aim for early morning or the last two hours before sunset. Plan around 45–90 minutes; add time for the beach and upper Aguada Fort. The fort area is generally visited in daylight.</p></article><article class="rounded-2xl bg-white/70 p-7"><span class="eyebrow">03 / Cost</span><h3 class="mt-5 text-xl font-bold">Tickets &amp; fees</h3><p class="mt-3 text-sm leading-6 text-[#526064]">The bastion is commonly treated as a free outdoor viewpoint. Fees and access rules for the wider Aguada complex can vary, so check on arrival before planning a paid visit.</p></article><article class="rounded-2xl bg-white/70 p-7"><span class="eyebrow">04 / Parking</span><h3 class="mt-5 text-xl font-bold">Leave the keys nearby</h3><p class="mt-3 text-sm leading-6 text-[#526064]">Use marked parking near the Aguada / Sinquerim approach where available. Do not block beach access, residential lanes or the fort causeway; scooters are easier than large cars in peak hours.</p></article><article class="rounded-2xl bg-white/70 p-7"><span class="eyebrow">05 / Food</span><h3 class="mt-5 text-xl font-bold">Eat around Candolim</h3><p class="mt-3 text-sm leading-6 text-[#526064]">Pair the walk with Goan fish curry, poi bread, prawn balchão or a chilled kokum drink at the beach shacks and Candolim restaurants. Ask for the catch of the day rather than choosing by menu alone.</p></article><article class="rounded-2xl bg-white/70 p-7"><span class="eyebrow">06 / Carry</span><h3 class="mt-5 text-xl font-bold">Small kit, better view</h3><p class="mt-3 text-sm leading-6 text-[#526064]">Bring water, sun protection, shoes with grip and a light layer for the sea breeze. Avoid climbing the walls; the stone is beautiful because it has survived the weather.</p></article></div></div></section><section id="nearby" class="mx-auto max-w-7xl px-5 py-24 lg:px-10"><div class="grid gap-14 lg:grid-cols-[.75fr_1.25fr]"><div><p class="eyebrow">Build a half-day</p><h2 class="display mt-3 text-5xl leading-none lg:text-6xl">Landmarks &amp; attractions<br><span class="text-[#a75238]">around ${SHORT}</span></h2><p class="mt-6 max-w-md text-sm leading-6 text-[#657174]">When visiting <strong>${FULL}</strong>, visitors can easily explore surrounding historical landmarks and points of interest, including <strong>${NEARBY_1}</strong> and <strong>${NEARBY_2}</strong>.</p></div><div class="space-y-0"><div class="section-rule flex items-start justify-between gap-6 py-6"><div><h3 class="font-bold">${NEARBY_1}</h3><p class="mt-2 max-w-md text-sm leading-6 text-[#657174]">The upper chapter of the same coastal defense story, with wide Mandovi views and a distinct lighthouse silhouette.</p></div><span class="mono text-xs text-[#a75238]">01</span></div><div class="section-rule flex items-start justify-between gap-6 py-6"><div><h3 class="font-bold">${NEARBY_2}</h3><p class="mt-2 max-w-md text-sm leading-6 text-[#657174]">Follow the sand north for a softer, busier stretch of coast with sunset shacks, water sports and seafood.</p></div><span class="mono text-xs text-[#a75238]">02</span></div><div class="section-rule flex items-start justify-between gap-6 py-6"><div><h3 class="font-bold">Reis Magos Fort</h3><p class="mt-2 max-w-md text-sm leading-6 text-[#657174]">Across the river, another restored fort adds a quieter counterpoint to the Aguada shoreline.</p></div><span class="mono text-xs text-[#a75238]">03</span></div></div></div></section><section id="map" class="bg-[#e7dbc7] px-5 py-20 lg:px-10"><div class="mx-auto max-w-7xl"><div class="flex flex-wrap items-end justify-between gap-6"><div><p class="eyebrow">Coordinates, not guesswork</p><h2 class="display mt-3 text-5xl">Find ${FULL}.</h2><p class="mt-3 text-sm text-[#526064]">FQX8+9HJ, ${CITY}, ${STATE} ${POSTAL}, ${COUNTRY} · ${LAT}, ${LNG}</p><p class="mt-2 text-xs text-[#657174]">Map data © Google. <a class="text-[#a75238] underline decoration-[#a75238]/40"${addAttribute(MAPS_PLUS_URL, "href")} target="_blank" rel="noopener noreferrer">Search FQX8+9HJ, ${CITY} on Google Maps ↗</a></p></div><a class="rounded-full bg-[#143d4a] px-6 py-3 text-sm font-bold text-white"${addAttribute(MAPS_SHARE_URL, "href")} target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a></div><div class="mt-8 overflow-hidden rounded-2xl bg-[#143d4a] shadow-xl"><iframe${addAttribute(`Google Maps location for ${FULL}`, "title")}${addAttribute(MAPS_EMBED_SRC, "src")} width="100%" height="450" style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div></div></section><section class="mx-auto max-w-4xl px-5 py-24 lg:px-10"><p class="eyebrow">A few clear answers</p><h2 class="display mt-3 text-5xl">${FULL} FAQ</h2><div class="mt-10 divide-y divide-[#172126]/15">${faqs.map((item) => renderTemplate`<details class="group py-5"><summary class="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">${item.name}<span class="text-2xl font-normal text-[#a75238] transition group-open:rotate-45">+</span></summary><p class="mt-4 max-w-2xl text-sm leading-7 text-[#657174]">${item.text}</p></details>`)}</div></section><section id="sources" class="border-t border-[#172126]/15 bg-white/60 px-5 py-20 lg:px-10"><div class="mx-auto max-w-5xl"><p class="eyebrow">Sources &amp; attribution</p><h2 class="display mt-3 text-4xl leading-tight lg:text-5xl">Where this information comes from</h2><ul class="mt-8 divide-y divide-[#172126]/15"><li class="py-5"><p class="font-bold">Ratings &amp; reviews · synced ${RATING_SYNCED}</p><p class="mt-2 text-sm leading-6 text-[#526064]">Synced from Google Maps user reviews, last synced ${RATING_SYNCED}; copyright belongs to the original authors and Google Maps. Displayed on this page for reference only and not included in this site’s structured data.</p><a class="mono mt-3 inline-block text-xs text-[#a75238]"${addAttribute(MAPS_SHARE_URL, "href")} target="_blank" rel="noopener noreferrer">View all reviews on Google Maps ↗</a></li><li class="py-5"><p class="font-bold">Location &amp; map data</p><p class="mt-2 text-sm leading-6 text-[#526064]">Google Maps listing and Plus Code FQX8+9HJ, ${CITY}, ${STATE} ${POSTAL}, ${COUNTRY} (${LAT}, ${LNG}). Map data © Google.</p><div class="mt-3 flex flex-wrap gap-4"><a class="mono text-xs text-[#a75238]"${addAttribute(MAPS_SHARE_URL, "href")} target="_blank" rel="noopener noreferrer">Google Maps listing ↗</a><a class="mono text-xs text-[#a75238]"${addAttribute(MAPS_PLUS_URL, "href")} target="_blank" rel="noopener noreferrer">Search by Plus Code ↗</a></div></li><li class="py-5"><p class="font-bold">Official tourism information</p><p class="mt-2 text-sm leading-6 text-[#526064]">For official updates and regional tourism information, visit the Goa state tourism portal.</p><a class="mono mt-3 inline-block text-xs text-[#a75238]"${addAttribute(GOVT_TOURISM_URL, "href")} target="_blank" rel="noopener noreferrer">${COUNTRY} / ${STATE} Official Tourism Portal ↗</a></li><li class="py-5"><p class="font-bold">Photography</p><p class="mt-2 text-sm leading-6 text-[#526064]">Hero photograph: iMahesh, “Sinquerim Fort view point, Aguada”, CC BY-SA 4.0 via Wikimedia Commons.</p></li></ul></div></section></main><footer class="bg-[#172126] px-5 py-10 text-[#dbe1da] lg:px-10"><div class="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-xs md:flex-row"><p>© Sinquerim / Fort field guide</p><p class="max-w-md text-[#9aa9a7]">Unofficial visitor guide. Conditions, access and local fees may change; confirm on the ground before travelling.</p><p class="mono text-[#d28f69]">GOA / INDIA</p></div><div class="mx-auto mt-6 flex max-w-7xl flex-wrap gap-5 text-xs"><a class="text-[#d28f69]"${addAttribute(MAPS_SHARE_URL, "href")} target="_blank" rel="noopener noreferrer">Google Maps ↗</a><a class="text-[#d28f69]"${addAttribute(GOVT_TOURISM_URL, "href")} target="_blank" rel="noopener noreferrer">Goa Tourism Portal ↗</a><a class="text-[#d28f69]" href="#sources">Sources &amp; attribution</a><a class="text-[#d28f69]" href="#reviews">Reviews &amp; rating</a></div><p class="mx-auto mt-8 max-w-7xl text-[10px] leading-5 text-[#72817f]">Photo: iMahesh, “Sinquerim Fort view point, Aguada”, CC BY-SA 4.0 via Wikimedia Commons. Rating and review count synced from Google Maps user reviews (${RATING_SYNCED}); copyright belongs to the original authors and Google Maps. Additional visual references are credited to their respective photographers where used.</p></footer></body></html>`;
}, "H:/GitHub/sinquerimfort/src/pages/index.astro", void 0);
var $$file = "H:/GitHub/sinquerimfort/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
