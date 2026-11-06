import type { Topic } from './topic-types';

/* Batch 1 / Group A: before-you-go decisions (P0). */
export const TOPICS_A: Topic[] = [
  {
    slug: 'timings',
    group: 'visit',
    batch: 1,
    priority: 'P0',
    schema: 'article',
    featured: true,
    title: 'Sinquerim Fort Timings: What Is Confirmed and What Is Not',
    description:
      'Sinquerim Fort opening hours are not manager-confirmed. Compare the dated Google Maps 24-hour listing, the separate hilltop Fort Aguada timetable and how to verify access before you go.',
    h1: 'Sinquerim Fort timings',
    kicker: 'Before you go · Timings',
    lead:
      'Travellers often search for a simple opening time for Sinquerim Fort. The honest answer is that no manager-confirmed timetable for the lower shore-side fortification has been established. This page separates the dated third-party listing from published official information, and explains what to check on the day.',
    sections: [
      {
        heading: 'What can be confirmed today',
        paragraphs: [
          'This guide covers the lower sea-level Aguada works near Sinquerim Beach, not the hilltop Fort Aguada. The Archaeological Survey of India lists the lower fortification wall at Candolim under its own name, which is why the two sites should not share a single timetable.',
          'A Google Maps snapshot checked on 29 October 2026 listed 24-hour access for the Sinquerim Fort listing. That is a third-party listing observation from that date, not a manager-confirmed rule, and it does not establish that every wall, path or sea edge is open, safe or lawful to use after dark.'
        ],
        note:
          'This guide does not treat a Maps listing as an official opening-hours statement, and it does not publish a timetable it cannot verify.'
      },
      {
        heading: 'The 09:30–18:00 timetable belongs to the hilltop fort',
        paragraphs: [
          'Goa Tourism publishes 09:30–18:00 for Fort Aguada on the hill. That schedule is widely copied onto pages about the shore-side walls, but the publisher describes the citadel and the sea-level works separately. Applying the hilltop gate hours to the lower site would be misleading.',
          'The lighthouse, the former prison and the Aguad Port & Jail Complex are separate destinations again. Each has its own entry arrangements, and none of their published times can be transferred to the lower fortification.'
        ]
      },
      {
        heading: 'Why an exact time is hard to publish',
        bullets: [
          'The lower site is a stretch of historic coastal wall rather than a single ticketed gate with a published schedule.',
          'Access can depend on current signs, staff instructions, barriers, sea conditions and maintenance work.',
          'Beach-side routes, wet laterite stone and surf can be hazardous even when the surrounding area is busy.',
          'A historical photograph showing people on the wall does not prove that the same route is permitted now.'
        ]
      },
      {
        heading: 'How to check before travelling',
        paragraphs: [
          'Use the Google Maps listing to confirm you are looking at the lower Candolim site, then verify the current entrance and the day’s access on arrival. Ask the site manager or the attending staff about permitted areas and closing times; do not rely on a driver, a hotel desk or an old blog post as the authoritative answer.',
          'Check the actual forecast and marine warnings as well. Rough seas, heavy rain and unstable stone can close or simply make a visit inadvisable even where no formal gate exists. If you cannot confirm safe access, treat the visit as a view from a permitted public route rather than an entry into the structure.'
        ],
        note:
          'Practical order: confirm the correct site → confirm the entrance → confirm the day’s access → check sea and weather → keep a flexible plan.'
      },
      {
        heading: 'Night visits and seasonal limits',
        paragraphs: [
          'Light, sunset and photography are not permission to remain after dark. Even where a map listing suggests 24-hour access, lighting, barriers, tides and local instructions decide what is safe. This guide does not recommend night access to the walls or the sea edge.',
          'During the monsoon, surf and wet stone create additional risk. Seasonal conditions may also change which approaches are usable, so a time that worked in one month is not a promise for the next.'
        ]
      },
      {
        heading: 'A workable plan for the day',
        paragraphs: [
          'Arrive with a window of flexible time rather than a fixed slot, and keep an alternative nearby stop in case the lower site cannot be visited safely. Combine a permitted view of the fortification with a separate, independently checked visit to the hilltop fort if you want a timed itinerary.',
          'Keep this page, the entry-fee guide and the location guide open on your phone: they cover the three questions that usually decide whether a visit goes ahead.'
        ]
      }
    ],
    faqs: [
      {
        q: 'What are the opening hours of Sinquerim Fort?',
        a: 'No manager-confirmed timetable for the lower shore-side fortification has been established. A Google Maps snapshot checked on 29 October 2026 listed 24-hour access, but that is a dated third-party listing rather than an official rule. Confirm the current entrance and the day’s access on arrival.'
      },
      {
        q: 'Is Sinquerim Fort open 24 hours?',
        a: 'A 2026 Maps listing showed 24-hour access, but this guide cannot confirm that the whole site is open, safe or permitted at all hours. Current signs, staff instructions and sea conditions take priority. Do not assume night access.'
      },
      {
        q: 'Does the 09:30–18:00 Fort Aguada timetable apply here?',
        a: 'No. Goa Tourism publishes that timetable for the hilltop Fort Aguada. The lower shore-side works are a separate listed site, and their access has not been confirmed by a manager.'
      },
      {
        q: 'Can I visit Sinquerim Fort at sunset or after dark?',
        a: 'Sunset light can be pleasant from a permitted safe route, but it does not grant permission to stay after dark or to climb the walls. Check closing instructions, barriers and sea conditions on the day.'
      },
      {
        q: 'Are the timings different during the monsoon?',
        a: 'Seasonal sea conditions and wet stone can restrict or prevent access. There is no confirmed seasonal timetable for the lower site, so check local instructions and the forecast instead of relying on a fixed schedule.'
      },
      {
        q: 'Where should I verify the timings?',
        a: 'Start with the current signage and staff at the lower Candolim site. Goa Tourism is useful for the separate hilltop fort, and Google Maps helps identify the correct location, but neither substitutes for on-site confirmation of the lower site.'
      },
      {
        q: 'Is the lighthouse or the jail complex open at the same time?',
        a: 'No shared timetable should be assumed. The lighthouse, the former prison and the Aguad Port & Jail Complex are independent destinations; check each operator’s own hours, booking rules and charges.'
      }
    ],
    related: ['entry-fee', 'location', 'visitor-guide', 'lower-vs-upper-aguada', 'best-time-to-visit'],
    sources: ['maps', 'gt', 'asi', 'ii']
  },
  {
    slug: 'entry-fee',
    group: 'visit',
    batch: 1,
    priority: 'P0',
    schema: 'article',
    featured: true,
    title: 'Sinquerim Fort Entry Fee: Is There a Ticket?',
    description:
      'Is there an entry fee for Sinquerim Fort? Learn what is and is not confirmed for the lower shore-side site, why hilltop Fort Aguada and the jail complex have separate charges, and how to verify current costs.',
    h1: 'Sinquerim Fort entry fee',
    kicker: 'Before you go · Entry fee',
    lead:
      'Search results often mix up several neighbouring attractions. This page deals only with the lower shore-side Sinquerim fortification: no current official tariff for it has been established, and this guide cannot promise free admission.',
    sections: [
      {
        heading: 'What we can say about the lower site',
        paragraphs: [
          'No current official price list for the lower Sinquerim site was found while checking publicly available tourism and heritage sources. That is a statement about the limits of our verification, not a claim that entry is free.',
          'Because the lower fortification is an open coastal structure rather than a single staffed ticket gate, there may be no published tariff at all. Equally, a managed area, a guided walk or a temporary restriction could introduce a charge. Only the site manager can confirm the position on the day.'
        ],
        note: 'This guide does not publish an invented fee, a discounted category or a "free entry" guarantee.'
      },
      {
        heading: 'Separate places, separate charges',
        bullets: [
          'Hilltop Fort Aguada: its own published visiting information and any applicable ticket or parking arrangements.',
          'Aguad Port & Jail Complex: an independent heritage venue with its own exhibitions, walks and booking conditions.',
          'Lighthouse and former prison: separate access arrangements, not included with a visit to the lower walls.',
          'Sinquerim Beach water sports and beach facilities: private or operator-run activities with their own prices.',
          'Restaurants, shacks and stays in Candolim: ordinary commercial services, unrelated to the fortification.'
        ]
      },
      {
        heading: 'Why copying another site’s price is misleading',
        paragraphs: [
          'The ASI protected-monument list records the lower fortification wall at Candolim separately from the upper fortress. A ticket price quoted for the hilltop citadel, a heritage walk inside the jail complex or a water-sports package therefore says nothing about the cost of viewing the lower sea-level walls.',
          'Travel forums and older articles sometimes flatten all of these into one "Fort Aguada ticket". Read the scope of any price before using it: which gate, which building, which activity, and which date.'
        ]
      },
      {
        heading: 'How to verify the current cost',
        paragraphs: [
          'Ask the site manager or attending staff at the lower Candolim site whether any ticket or permission is required. If you are booking a guided walk, a heritage experience or a water-sports activity, ask the operator for the full price, what it includes, and whether the lower fortification is actually part of it.',
          'Keep the amount, the date and the name of the person or office that confirmed it. Prices and operating arrangements change, and this guide does not update automatically.'
        ]
      },
      {
        heading: 'Budget for the whole outing, not just the gate',
        paragraphs: [
          'Even where the fortification itself has no charge, a typical visit can involve transport, parking, food, a separately ticketed hilltop fort or a paid heritage experience. Plan those as independent decisions and confirm each one locally.',
          'Do not assume a combined pass exists. The nearby sites are separate destinations with separate routes, entrances and operators.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is Sinquerim Fort free to visit?',
        a: 'This guide cannot promise free admission. No current official tariff for the lower shore-side site was established, so ask the site manager whether any ticket or permission applies before you go.'
      },
      {
        q: 'How much is the entry fee for Sinquerim Fort?',
        a: 'No verified price can be published here. Prices quoted online often belong to the hilltop Fort Aguada, the jail complex or a private activity, not to the lower fortification.'
      },
      {
        q: 'Does the Fort Aguada ticket cover the lower walls?',
        a: 'Do not assume so. The lower fortification is listed separately and is a distinct site; check the scope of any ticket with the issuer.'
      },
      {
        q: 'Do children, students or seniors get a concession?',
        a: 'No concession categories for the lower site have been confirmed. Any discount belongs to a specific operator or venue and should be verified with that operator.'
      },
      {
        q: 'Do I need to pay for parking?',
        a: 'Parking charges, where they exist, are separate from entry. Use only currently permitted parking and confirm any fee on site.'
      },
      {
        q: 'Is a guide or a guided walk required?',
        a: 'No requirement has been confirmed. If you choose a guided experience, ask the operator for its scope, price and whether it includes the lower sea-level walls.'
      }
    ],
    related: ['timings', 'lower-vs-upper-aguada', 'visitor-guide', 'nearby/aguad-jail-museum', 'activities/water-sports-near-sinquerim'],
    sources: ['asi', 'gt', 'jail', 'maps']
  },
  {
    slug: 'location',
    group: 'visit',
    batch: 1,
    priority: 'P0',
    schema: 'article',
    featured: true,
    title: 'Sinquerim Fort Location & Map: FQX8+9HJ, Candolim, Goa',
    description:
      'Find the lower shore-side Sinquerim Fort at FQX8+9HJ, Candolim, Goa. Compare map pins for Lower Aguada, hilltop Fort Aguada and Sinquerim Beach, and check the drop-off and final approach.',
    h1: 'Sinquerim Fort location & map',
    kicker: 'Before you go · Location',
    lead:
      'The name "Sinquerim Fort" is used for the lower shore-side Aguada works at Candolim, Goa. Use the Plus Code FQX8+9HJ and the map link below to reach the right coastline, then confirm the currently permitted entrance on arrival.',
    sections: [
      {
        heading: 'The coordinates and the Plus Code',
        paragraphs: [
          'The location used throughout this guide is FQX8+9HJ, Candolim, Goa, India, at approximately 15.498447, 73.766356. A Plus Code is more useful than a vague neighbourhood name when several forts, beaches and heritage venues share the same stretch of coast.',
          'Copy the Plus Code into Google Maps, or use the listing link, before you set off. Show it to your driver rather than saying "Fort Aguada", which usually sends visitors up the hill to a different site.'
        ],
        note:
          'A map pin identifies a place. It does not confirm a currently open entrance, a lawful drop-off point or a parking space.'
      },
      {
        heading: 'Map pins that are easy to confuse',
        bullets: [
          'Lower Aguada / Sinquerim Fort: the shore-side fortification covered by this guide.',
          'Hilltop Fort Aguada: the citadel above, with its own approach and published timetable.',
          'Aguada lighthouse and former prison: separate landmarks on the hill.',
          'Sinquerim Beach: the adjacent beach, often used as a starting point for the final walk.',
          'Aguad Port & Jail Complex: an independent heritage venue with its own entrance and booking rules.',
          'Candolim Beach: a longer beach further along the coast, not the fortification itself.'
        ]
      },
      {
        heading: 'Getting from the road to the shore',
        paragraphs: [
          'Plan for a final approach on foot from a permitted drop-off point. This guide has not measured a fixed walking route or duration, and it cannot promise that a particular beach path, gate or wall is open. Ask locally which approach is currently allowed.',
          'The last stretch can involve sand, uneven stone, wet surfaces and exposed edges. In rough seas or heavy rain, turn back rather than pushing on to a pin that looks close on a screen.'
        ]
      },
      {
        heading: 'A navigation checklist before you leave',
        bullets: [
          'Confirm the pin is the lower Candolim site, not the hilltop citadel.',
          'Agree the drop-off and return meeting point with your driver.',
          'Check whether the entrance and the day’s access are confirmed.',
          'Check the sea state, tide and weather for the time of your visit.',
          'Keep the Plus Code, not just a screenshot, available offline if possible.'
        ]
      },
      {
        heading: 'If the pin and the site do not match',
        paragraphs: [
          'Third-party map data can place a label on a beach, a road or a neighbouring structure. If what you see does not match the sea-level walls, do not cross barriers to "reach" the pin. Use the Plus Code search, ask staff or a local business for the permitted approach, and treat the map as an aid rather than an instruction.',
          'The distinction between the lower fortification and the upper fort is maintained across every guide on this site. If a route description mentions a ticket gate, a lighthouse or a 09:30–18:00 schedule, it is almost certainly describing the hilltop site.'
        ]
      },
      {
        heading: 'Nearby bases for orientation',
        paragraphs: [
          'Candolim is the closest useful base for the lower site; Calangute, Baga and Panaji are common starting points for a longer North Goa day. Each has its own route considerations, which are covered in the separate transport guides.',
          'Goa has two airports: Goa International Airport at Dabolim (GOI) and Manohar International Airport at Mopa (GOX). They are not interchangeable, so check which one your flight uses before planning an airport-to-fort transfer.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Where exactly is Sinquerim Fort?',
        a: 'This guide covers the lower shore-side Aguada fortification at Candolim, Goa, India. Use the Plus Code FQX8+9HJ and the approximate coordinates 15.498447, 73.766356 to identify the right coastal site.'
      },
      {
        q: 'What is the Plus Code for Sinquerim Fort?',
        a: 'FQX8+9HJ, Candolim, Goa, India. Searching the Plus Code is more reliable than searching a generic fort name, which may return the hilltop citadel.'
      },
      {
        q: 'Is Sinquerim Fort the same as Fort Aguada?',
        a: 'Not in this guide. Fort Aguada usually refers to the hilltop citadel; the lower sea-level walls are listed separately. They have different approaches and should not share one timetable or ticket.'
      },
      {
        q: 'Can I drive right up to the fort?',
        a: 'No vehicle access to the walls is guaranteed. Use only a currently permitted drop-off or parking area and expect a final walk; confirm the approach locally.'
      },
      {
        q: 'Which airport is closest?',
        a: 'Goa has two airports, GOI at Dabolim and GOX at Mopa. Confirm which one applies to your flight, and see the airport guide for how to plan the onward journey without relying on unverified travel times.'
      },
      {
        q: 'Does the map pin prove the entrance is open?',
        a: 'No. A pin identifies a location. Current signs, staff instructions, barriers and sea conditions decide which approach is permitted.'
      }
    ],
    related: ['how-to-reach', 'parking', 'walking-access', 'lower-vs-upper-aguada', 'nearby/sinquerim-beach'],
    sources: ['maps', 'asi', 'goa', 'gt']
  },
  {
    slug: 'how-to-reach',
    group: 'visit',
    batch: 1,
    priority: 'P0',
    schema: 'article',
    title: 'How to Reach Sinquerim Fort: Routes and the Final Approach',
    description:
      'How to reach the lower shore-side Sinquerim Fort in Candolim by taxi, self-drive or public transport, plus what to check about the last stretch on foot and the currently permitted entrance.',
    h1: 'How to reach Sinquerim Fort',
    kicker: 'Before you go · Getting here',
    lead:
      'Most routes to Sinquerim Fort end the same way: a permitted drop-off, then a short but unverified final approach on foot. This page compares the transport choices without inventing fixed distances, bus numbers or journey times.',
    sections: [
      {
        heading: 'Start by naming the right destination',
        paragraphs: [
          'Ask for the lower shore-side Sinquerim fortification at Candolim, and show the Plus Code FQX8+9HJ. "Fort Aguada" on its own commonly leads to the hilltop citadel, which has a different entrance and a different timetable.',
          'Agree the return meeting point with your driver before you walk down. Mobile reception, one-way beach access and busy seasonal traffic can make an improvised pick-up difficult.'
        ]
      },
      {
        heading: 'Taxi or app-based cab',
        paragraphs: [
          'A pre-paid taxi, hotel-arranged car or app-based cab is the simplest option for most visitors. Confirm the fare and waiting arrangements before starting, and make sure the driver understands that the destination is the lower Candolim site.',
          'Availability of app-based services varies by area and season. Do not assume a return cab can be summoned from the shoreline; arrange the return in advance where possible.'
        ]
      },
      {
        heading: 'Self-drive, scooter or rental car',
        paragraphs: [
          'Driving yourself gives flexibility but shifts the parking question to you. Use only currently permitted parking, keep beach and residential access clear, and never treat a map pin as permission to drive onto sand or a restricted track.',
          'Licence, helmet, insurance and rental conditions are your responsibility and should be checked with the rental operator. See the taxi-and-scooter guide for a fuller checklist.'
        ]
      },
      {
        heading: 'Public transport plus a walk',
        paragraphs: [
          'Bus and other shared transport options in North Goa change and are not verified by this guide. Before relying on one, confirm that a service actually stops within a practical distance of the Candolim / Sinquerim area, and ask about the remaining walk at the current time of day.',
          'Plan a fallback: if the last leg is not walkable in the heat, rain or dark, use a taxi for that section. This guide does not publish a route number or a timetable it has not confirmed.'
        ]
      },
      {
        heading: 'The last stretch and the entrance',
        bullets: [
          'Expect an approach on foot from a permitted drop-off point; no fixed walking time is promised here.',
          'Check current signs, barriers and staff instructions before entering any part of the structure.',
          'Wet laterite stone, surf and exposed sea edges are hazards, especially in the monsoon.',
          'If safe access cannot be confirmed, view the walls from a permitted public route and keep the visit flexible.'
        ]
      }
    ],
    faqs: [
      {
        q: 'What is the easiest way to reach Sinquerim Fort?',
        a: 'For most visitors, a taxi or app-based cab to the lower Candolim site is simplest, followed by a short walk from a permitted drop-off. Confirm the fare, the return pick-up and the correct destination first.'
      },
      {
        q: 'Is there a direct bus to Sinquerim Fort?',
        a: 'This guide has not verified a specific bus service or timetable. Check locally whether a service reaches the Candolim / Sinquerim area and how far the remaining walk is.'
      },
      {
        q: 'How long is the walk from the road?',
        a: 'No fixed walking time is published here. The permitted approach changes with current access rules and sea conditions, so confirm it on arrival.'
      },
      {
        q: 'Can I drive to the fort entrance?',
        a: 'No vehicle access to the walls is guaranteed. Park only where it is currently permitted and keep beach and residential access clear.'
      },
      {
        q: 'How do I avoid ending up at the hilltop fort?',
        a: 'Show the Plus Code FQX8+9HJ and specify the lower shore-side site. The hilltop Fort Aguada has a separate approach, timetable and entry arrangements.'
      }
    ],
    related: ['location', 'parking', 'walking-access', 'taxi-and-scooter', 'from-goa-airport'],
    sources: ['maps', 'goa', 'gt']
  },
  {
    slug: 'parking',
    group: 'visit',
    batch: 1,
    priority: 'P0',
    schema: 'article',
    title: 'Parking Near Sinquerim Fort: What to Check Before You Drive',
    description:
      'Parking near the lower shore-side Sinquerim Fort is not guaranteed. Learn how to choose a permitted spot, plan the walk to the coast and avoid blocking beach or residential access.',
    h1: 'Parking near Sinquerim Fort',
    kicker: 'Before you go · Parking',
    lead:
      'Visitors often ask where to park for Sinquerim Fort. This guide does not confirm a specific car park, capacity or fee: use only currently permitted parking and plan the walk from there.',
    sections: [
      {
        heading: 'Why there is no single parking answer',
        paragraphs: [
          'The lower fortification sits on a stretch of coast used by beachgoers, residents, hotels and activity operators. What is permitted can change with season, events, road works and local instructions. A space shown on a photograph or a map is not a current permission.',
          'This is also why the hilltop Fort Aguada’s parking arrangements should not be assumed for the lower site. They are different destinations with different approaches.'
        ]
      },
      {
        heading: 'A practical parking checklist',
        bullets: [
          'Ask the site staff, your hotel or the attending operator where parking is currently allowed.',
          'Use only signed, permitted areas; do not park on sand, dunes, footpaths or restricted tracks.',
          'Keep beach access, emergency access and residential driveways clear.',
          'Confirm whether a fee applies and keep proof of payment.',
          'Do not leave valuables visible, and agree a return time with your driver if using a drop-off.',
          'Allow extra time in peak season and during the monsoon, when approaches can be slower or closed.'
        ]
      },
      {
        heading: 'From the car to the coast',
        paragraphs: [
          'Assume a final walk over uneven or sandy ground. This guide has not measured a fixed distance or duration, and no particular path is guaranteed to be open. Check signs and staff instructions before setting off.',
          'Wear shoes with grip, carry water and sun protection, and turn back if the route becomes wet, exposed to surf or blocked by barriers.'
        ]
      },
      {
        heading: 'If you cannot find permitted parking',
        paragraphs: [
          'Use a taxi or a drop-off instead of parking informally. Ask the driver to wait or agree a clearly identifiable pick-up point away from the shore. The small extra cost is preferable to blocking an access route or returning to a vehicle that has been moved.',
          'Keep the location guide open with the Plus Code so the driver can return to exactly the same spot.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is there parking at Sinquerim Fort?',
        a: 'No specific car park, capacity or fee is confirmed by this guide. Use only currently permitted parking and check local signs and instructions.'
      },
      {
        q: 'Is parking free?',
        a: 'Charges, where they apply, are set by the relevant operator or authority. Confirm on site; this guide does not publish a price.'
      },
      {
        q: 'How far is the walk from the parking area?',
        a: 'No fixed distance or time is promised. The permitted approach and the final path can change, so allow flexible time and check on arrival.'
      },
      {
        q: 'Can I park near the beach instead?',
        a: 'Only where it is explicitly permitted. Do not park on sand or block beach, emergency or residential access.'
      },
      {
        q: 'Does hilltop Fort Aguada parking work for the lower site?',
        a: 'Do not assume so. The two sites have separate approaches; plan parking for the lower Candolim coastline specifically.'
      }
    ],
    related: ['location', 'how-to-reach', 'walking-access', 'taxi-and-scooter', 'visitor-guide'],
    sources: ['maps', 'goa', 'gt']
  },
  {
    slug: 'best-time-to-visit',
    group: 'visit',
    batch: 1,
    priority: 'P0',
    schema: 'article',
    title: 'Best Time to Visit Sinquerim Fort: Season, Light and Sea Conditions',
    description:
      'When is the best time to visit the lower Sinquerim Fort? Compare dry-season and monsoon conditions, morning and late-afternoon light, and the sea-state checks that matter more than a fixed hour.',
    h1: 'Best time to visit Sinquerim Fort',
    kicker: 'Before you go · Timing your visit',
    lead:
      'For an exposed coastal fortification, the best time to visit is decided less by a clock than by sea state, weather and confirmed access. Use the seasonal and light notes below as planning principles, not as a schedule.',
    sections: [
      {
        heading: 'Season: dry months and monsoon',
        paragraphs: [
          'Outside the monsoon, the coast is generally easier to approach and the stone is more likely to be dry, but this guide does not promise that any month is safe or that the site is open. Crowds, heat and local events can change the experience from week to week.',
          'During the monsoon, rough seas, heavy rain, strong wind and slippery laterite stone are the main concerns. Even where no formal closure exists, conditions can make a shore-side visit inadvisable. Check the actual forecast and marine warnings on the day.'
        ]
      },
      {
        heading: 'Light: morning and late afternoon',
        paragraphs: [
          'Early light tends to be softer and cooler for walking; late-afternoon light gives warmer colour on the laterite walls and long views over the Arabian Sea. Neither is a reason to remain after dark or to enter a closed area.',
          'Bring sun protection at any hour. Shade is not guaranteed on an exposed sea wall, and glare off water and sand can be strong.'
        ]
      },
      {
        heading: 'Checks that matter more than the hour',
        bullets: [
          'Is the correct lower Candolim site identified, not the hilltop fort?',
          'Is the current entrance and the day’s access confirmed?',
          'Are sea conditions, surf and tide within safe limits for the approach you plan to use?',
          'Are there barriers, signs or staff instructions that change the route?',
          'Is there enough daylight left to return by a permitted path?'
        ]
      },
      {
        heading: 'Matching the visit to your plans',
        paragraphs: [
          'If you want a timed, ticketed visit, the hilltop Fort Aguada or the Aguad Port & Jail Complex may fit better, but each has its own hours and charges. Keep them as separate stops with independently checked information.',
          'For photography, combine this page with the sunset and photography guides. For a family or a short stop, prefer a flexible window with an easy alternative nearby.'
        ]
      }
    ],
    faqs: [
      {
        q: 'What is the best month to visit Sinquerim Fort?',
        a: 'Dryer months are generally easier for a coastal walk, but no month is guaranteed safe or open. Check the forecast, sea state and local access instructions for the day of your visit.'
      },
      {
        q: 'Is sunrise or sunset better?',
        a: 'Both can give softer light on the sea-facing walls. Sunset is not permission to stay after dark; confirm access and leave enough daylight for the return.'
      },
      {
        q: 'Can I visit during the monsoon?',
        a: 'Conditions can make it inadvisable: rough surf, wet stone and strong wind. No monsoon opening is promised by this guide, so verify locally and be prepared to change plans.'
      },
      {
        q: 'Is the site less crowded in the morning?',
        a: 'Crowd levels vary with season, holidays and local events and are not tracked here. Morning is usually cooler, but that is a comfort consideration rather than a confirmed fact about visitor numbers.'
      },
      {
        q: 'Does the best time depend on the tide?',
        a: 'Sea state and tide can affect the safety of a shore-side approach. Check conditions on the day and keep back from exposed edges rather than relying on a fixed hour.'
      }
    ],
    related: ['timings', 'monsoon-guide', 'sunset-guide', 'visitor-guide', 'photos'],
    sources: ['goa', 'maps', 'gt']
  },
  {
    slug: 'photos',
    group: 'visit',
    batch: 1,
    priority: 'P0',
    schema: 'photos',
    featured: true,
    title: 'Sinquerim Fort Photos & Viewpoints: What the Existing Image Shows',
    description:
      'A guide to the existing Sinquerim Fort photograph: the sea-facing laterite wall, viewpoint directions, architectural details and light, with clear notes that a historic image does not prove current access.',
    h1: 'Sinquerim Fort photos & viewpoints',
    kicker: 'Before you go · Photos',
    lead:
      'This guide keeps one existing photograph of the lower shore-side fortification. Rather than adding new or generated images, this page explains what that photograph shows, how to read the view, and how to photograph the site safely today.',
    sections: [
      {
        heading: 'What the published photograph shows',
        paragraphs: [
          'The image shows the sea-facing wall of the lower Aguada / Sinquerim fortification, built from the reddish laterite stone typical of this coast. The composition puts the masonry against the Arabian Sea, which is the simplest way to understand why the lower works exist at all: they face the water, not the hill.',
          'It is a historic photograph, not a live status report. Where people stand, which barriers are visible and which paths look open in an older image cannot establish what is permitted, safe or accessible now.'
        ],
        note: 'The photograph, its original caption and its attribution are retained from the main guide. No image has been removed, renamed or replaced.'
      },
      {
        heading: 'Reading the view: directions and layers',
        bullets: [
          'Foreground: the laterite wall and its weathered, uneven surface.',
          'Middle ground: the immediate shoreline and the waterline, which changes with tide and season.',
          'Background: the open Arabian Sea horizon, useful for scale in wide shots.',
          'Above and behind: the hilltop Aguada area, a different site that should not be read as part of the lower wall.',
          'Light: low sun from the west warms the stone; midday light flattens relief and increases glare off the water.'
        ]
      },
      {
        heading: 'Subjects worth photographing',
        paragraphs: [
          'Concentrate on texture and context: the coursing of the laterite blocks, the line of the wall against the sea, the contrast between stone and water, and the wider coastal setting. A wider frame that includes the shoreline usually communicates the site better than a close crop of a single block.',
          'Avoid framing people without asking, and avoid compositions that encourage climbing barriers or walls to "get the shot". A permitted public viewpoint is enough.'
        ]
      },
      {
        heading: 'Light, weather and safety',
        paragraphs: [
          'Late-afternoon light is generally kinder to the warm stone, while overcast or post-monsoon conditions can give softer contrast. Rough seas, wet stone and strong wind are reasons to keep further back, not reasons to move closer for drama.',
          'Check the forecast and sea state before setting up. Keep equipment away from spray, wear shoes with grip, and leave enough daylight to return by the same permitted route.'
        ]
      },
      {
        heading: 'Photography etiquette and permissions',
        bullets: [
          'Ask before photographing people, staff or private property.',
          'Follow current signs, barriers and staff instructions about restricted areas.',
          'Do not use drones or commercial equipment without checking the applicable permissions.',
          'Do not present a historic image as proof of today’s access, opening hours or safety.'
        ]
      },
      {
        heading: 'Using this page with the rest of the guide',
        paragraphs: [
          'For timing, see the best-time and sunset guides; for the approach, see the location and walking-access guides; for the difference between the lower walls and the hilltop citadel, see the comparison guide. Each covers one part of a photographic visit without repeating the others.',
          'If conditions do not allow the shot you planned, treat the outing as a scouting walk. The walls will still be there on a safer day.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Are these current photos of Sinquerim Fort?',
        a: 'The photograph used across this guide is a historic image. Its original caption states that it is not confirmation of current access. Do not read it as a live view of the site.'
      },
      {
        q: 'Where is the best viewpoint for photographs?',
        a: 'A permitted public viewpoint that includes the sea-facing wall and the shoreline works well. No specific standing position, wall or platform is confirmed as open by this guide.'
      },
      {
        q: 'Can I climb the walls for a better angle?',
        a: 'No. Do not climb walls or cross barriers. Wet stone and exposed sea edges are hazardous, and current signs and staff instructions take priority.'
      },
      {
        q: 'Is drone photography allowed?',
        a: 'Permissions for drones and commercial equipment are not confirmed here. Check with the relevant authority and the site staff before flying or setting up.'
      },
      {
        q: 'What is the best light for the laterite walls?',
        a: 'Low, warm light tends to bring out the colour and texture of the stone; harsh midday sun can flatten detail. Always prioritise safe conditions and confirmed access over the light.'
      },
      {
        q: 'Will new photos be added?',
        a: 'This guide keeps its existing published image rather than adding generated or unverified pictures. Any future image would need its own accurate caption and context.'
      }
    ],
    related: ['sunset-guide', 'best-time-to-visit', 'things-to-do', 'lower-vs-upper-aguada', 'monsoon-guide'],
    sources: ['maps', 'asi', 'goa']
  },
  {
    slug: 'things-to-do',
    group: 'visit',
    batch: 1,
    priority: 'P0',
    schema: 'article',
    title: 'Things to Do at Sinquerim Fort: Views, Stonework and Safe Walking',
    description:
      'What to do at the lower Sinquerim Fort: observe the sea-facing laterite walls, read the coastal setting, take photographs from permitted viewpoints and combine the stop with nearby beaches.',
    h1: 'Things to do at Sinquerim Fort',
    kicker: 'Before you go · On site',
    lead:
      'The lower Sinquerim fortification is best treated as a short, observant coastal stop rather than a ticketed attraction with a fixed circuit. Here are the activities that fit the site without assuming an entrance, a route or a fee.',
    sections: [
      {
        heading: 'Read the sea-facing wall',
        paragraphs: [
          'Start with the masonry. The lower works use reddish laterite stone, and their position at the waterline explains their defensive role more clearly than any plaque. Look at how the wall meets the shore, how the stone has weathered, and where the sea has shaped the view.',
          'Keep the whole Aguada complex in mind but do not merge it: the hilltop citadel, lighthouse and former prison are separate places with their own histories and access arrangements.'
        ]
      },
      {
        heading: 'Enjoy the coastal view from a permitted route',
        paragraphs: [
          'The Arabian Sea horizon, the adjacent beach and the changing light are the main reward of a visit. A permitted public viewpoint is enough; there is no need to cross barriers or climb onto the structure for a better angle.',
          'Allow time simply to stand and look. This is an exposed coast, so bring water, sun protection and shoes with grip, and keep well back from wet edges and surf.'
        ]
      },
      {
        heading: 'Photograph with context, not risk',
        bullets: [
          'Include the shoreline or horizon so the wall’s setting is clear.',
          'Use low light for texture, but never let the light decide where it is safe to stand.',
          'Ask before photographing people; follow signs and staff instructions.',
          'See the photos and sunset guides for detailed framing and light notes.'
        ]
      },
      {
        heading: 'Combine the stop with nearby places',
        paragraphs: [
          'Sinquerim Beach, Candolim Beach, the hilltop Fort Aguada and the Aguad Port & Jail Complex are all nearby, but each is an independent destination. Check each entrance, timetable and charge before adding it to your day; do not assume a short walk or a combined ticket.',
          'For a longer plan, the half-day and one-day itinerary guides show how to sequence these stops without inventing fixed travel times.'
        ]
      },
      {
        heading: 'What not to do',
        bullets: [
          'Do not climb the walls, cross barriers or ignore staff instructions.',
          'Do not treat a historic photograph as evidence that a route is open or safe.',
          'Do not assume the hilltop fort’s 09:30–18:00 timetable or any ticket covers this site.',
          'Do not visit exposed edges in rough seas, heavy rain or fading light.'
        ]
      }
    ],
    faqs: [
      {
        q: 'What can you actually do at Sinquerim Fort?',
        a: 'Observe the sea-facing laterite walls, enjoy the coastal view, photograph from permitted viewpoints and study the defensive setting. No guided circuit, ticketed interior or fixed route is confirmed.'
      },
      {
        q: 'Can you go inside the fort?',
        a: 'Access to the structure is not confirmed. Follow current signs, barriers and staff instructions, and view the walls from a permitted public route where entry is not clearly allowed.'
      },
      {
        q: 'Is it good for photography?',
        a: 'Yes, for stone texture and sea views, provided you use a permitted viewpoint and safe conditions. See the dedicated photos guide for framing and light notes.'
      },
      {
        q: 'How long should I spend here?',
        a: 'Keep it flexible. This guide has not measured a fixed route or duration; sea conditions, access and your wider North Goa plan should decide.'
      },
      {
        q: 'Are there activities or water sports at the fort?',
        a: 'Water sports belong to the adjacent beach and are run by separate operators. Check current operation, authorisation and pricing independently; see the water-sports guide.'
      }
    ],
    related: ['visitor-guide', 'photos', 'best-time-to-visit', 'nearby/sinquerim-beach', 'itinerary/half-day'],
    sources: ['goa', 'asi', 'maps']
  },
  {
    slug: 'visitor-guide',
    group: 'visit',
    batch: 1,
    priority: 'P0',
    schema: 'article',
    title: 'Sinquerim Fort Visitor Guide: Checklist Before You Go',
    description:
      'A practical checklist for visiting the lower Sinquerim Fort: what to confirm, what to carry, how to behave on an exposed coast and which nearby arrangements need separate checks.',
    h1: 'Sinquerim Fort visitor guide',
    kicker: 'Before you go · Checklist',
    lead:
      'This page turns the main guide into a short, mobile-friendly checklist. It deliberately confirms nothing that the site manager has not confirmed: use it to prepare, then verify on the day.',
    sections: [
      {
        heading: 'Confirm before you leave',
        bullets: [
          'The correct destination: the lower shore-side site at FQX8+9HJ, Candolim, not hilltop Fort Aguada.',
          'The current entrance and the day’s access; no manager-confirmed timetable is published here.',
          'Whether any ticket or permission applies; no official tariff has been established.',
          'Where you may park or be dropped off, and where your driver will wait.',
          'The forecast, marine warnings, surf and tide for the time of your visit.'
        ]
      },
      {
        heading: 'What to carry',
        bullets: [
          'Water and sun protection; shade on the exposed wall is not guaranteed.',
          'Shoes with grip for sand, uneven ground and wet laterite stone.',
          'A charged phone with the Plus Code and the map link saved.',
          'A small kit rather than a large bag; keep hands free on uneven ground.',
          'Any personal medication or items your group needs; nearby facilities are not verified.'
        ]
      },
      {
        heading: 'On site',
        paragraphs: [
          'Follow current signs, barriers and staff instructions. Keep back from wet edges, surf and unstable stone; do not climb the walls or cross barriers. Ask before photographing people or private property.',
          'A historic photograph showing visitors on the wall is not evidence that a route is open now. If safe access cannot be confirmed, view the fortification from a permitted public route and adjust the plan.'
        ]
      },
      {
        heading: 'Keep neighbouring places separate',
        paragraphs: [
          'The hilltop Fort Aguada, lighthouse, former prison, Aguad Port & Jail Complex, beaches, restaurants and water-sports operators are all independent destinations or services. Check each entrance, timetable, price and booking condition separately.',
          'In particular, Goa Tourism’s 09:30–18:00 schedule belongs to the hilltop fort. It is not the lower site’s timetable.'
        ]
      },
      {
        heading: 'If plans change',
        paragraphs: [
          'Have an alternative stop nearby and a flexible return arrangement. Rough seas, heavy rain, a blocked approach or a simple lack of confirmed access are all valid reasons to shorten the visit.',
          'The timings, entry-fee, location and walking-access guides cover the four questions that most often decide a change of plan.'
        ]
      }
    ],
    faqs: [
      {
        q: 'What should I check before visiting Sinquerim Fort?',
        a: 'Confirm the correct lower Candolim site, the current entrance and access, whether any charge applies, permitted parking or drop-off, and the day’s sea and weather conditions.'
      },
      {
        q: 'What should I bring?',
        a: 'Water, sun protection, shoes with grip, a charged phone with the Plus Code, and any personal items your group needs. Facilities nearby are not verified.'
      },
      {
        q: 'Is the site suitable for children or older visitors?',
        a: 'Uneven ground, wet stone and exposed sea edges require care. This guide does not confirm accessibility features, so assess conditions and ask locally; see the family-trip guide.'
      },
      {
        q: 'Are there toilets, shops or drinking water on site?',
        a: 'No on-site facilities are confirmed here. Plan for nearby services as separate stops and check their current availability.'
      },
      {
        q: 'Can I combine this with the hilltop fort on one ticket?',
        a: 'No combined ticket is confirmed. Treat the hilltop fort, the jail complex and the beaches as separate destinations with their own charges and hours.'
      }
    ],
    related: ['timings', 'entry-fee', 'location', 'walking-access', 'itinerary/family-trip'],
    sources: ['maps', 'gt', 'asi', 'goa']
  },
  {
    slug: 'lower-vs-upper-aguada',
    group: 'visit',
    batch: 1,
    priority: 'P0',
    schema: 'article',
    featured: true,
    title: 'Sinquerim Fort vs Fort Aguada: Lower Walls and Hilltop Citadel Compared',
    description:
      'A detailed comparison of the lower shore-side Sinquerim fortification and hilltop Fort Aguada: listed names, location, architecture, entrances, timetables and why their tickets and hours must not be mixed.',
    h1: 'Sinquerim Fort vs Fort Aguada',
    kicker: 'Before you go · Site comparison',
    lead:
      'The single most common mistake in North Goa fort guides is to treat the lower sea-level walls and the hilltop Fort Aguada as one ticketed attraction. This page sets out the differences and explains why they matter for navigation, timings and costs.',
    sections: [
      {
        heading: 'Two names in the records',
        paragraphs: [
          'The Archaeological Survey of India’s protected-monument list for Goa records the "Fortification Wall of Auguda Fortress (Lower)" at Candolim separately from the upper fortress. That separate listing is the clearest documentary reason not to merge the two sites.',
          'Goa Tourism describes Aguada as a defensive complex with a hilltop citadel and sea-level works, and discusses the lighthouse and the former prison separately. The history of the whole complex is not an independent construction date or an access rule for every surviving wall.'
        ]
      },
      {
        heading: 'Side-by-side comparison',
        bullets: [
          'Position: lower works at the Candolim shoreline; citadel on the hill above.',
          'What this guide covers: the lower sea-facing wall and its coastal setting, not the hilltop interior.',
          'Navigation: Plus Code FQX8+9HJ for the lower site; hilltop approaches are different and often appear under "Fort Aguada".',
          'Timetable: Goa Tourism publishes 09:30–18:00 for the hilltop fort; no manager-confirmed timetable exists for the lower site.',
          'Charges: no official tariff established for the lower site; hilltop and jail-complex arrangements are separate.',
          'Access: neither a shared gate nor a combined ticket is confirmed; current signs and staff instructions decide the lower approach.',
          'Risk profile: the lower site is an exposed sea edge with wet stone and surf; the hilltop site is a built visitor destination.'
        ]
      },
      {
        heading: 'Why the confusion persists',
        paragraphs: [
          'Both places belong to the same Portuguese defensive system, and many maps, tour descriptions and photographs use "Aguada" loosely. A single search result can show the lighthouse, the jail, the hilltop walls and the shore-side fortification at once.',
          'That loose naming is harmless until it becomes practical information: a ticket price, a closing time or a driving route copied from the wrong site. Read the scope of every claim before using it.'
        ]
      },
      {
        heading: 'Different roles within one defensive system',
        paragraphs: [
          'Official tourism descriptions present Aguada as a coastal defence complex associated with controlling the Mandovi estuary, guarding against seaborne threats and supplying fresh water to ships. Those functions describe the wider system and its hilltop structures.',
          'The lower walls are part of that coastal story, but the whole complex’s history should not be assigned wholesale to the surviving shore-side masonry. Keep "history of Aguada" and "history of this lower wall" as separate statements.'
        ]
      },
      {
        heading: 'Planning a visit to both',
        paragraphs: [
          'Treat them as two independent stops. Check the hilltop fort’s own hours and any ticket with its operator, then check the lower site’s entrance and the day’s access separately. Allow for the change in elevation, the different approaches and the possibility that one is available while the other is not.',
          'Do not assume a short walk between them or a shared parking area. The one-day itinerary guide shows how to sequence both without publishing unverified travel times.'
        ]
      },
      {
        heading: 'A quick way to tell which page you need',
        paragraphs: [
          'If the question is about a published timetable, a ticket, a lighthouse, a museum or a jail heritage walk, you are dealing with the hilltop or the jail complex. If it is about a sea-facing laterite wall, a Plus Code at Candolim, wet stone and surf, you are dealing with the lower site covered by this guide.',
          'The ASI listing, the Goa Tourism page and the jail complex’s own site are the appropriate places to verify those separate identities.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is Sinquerim Fort the same as Fort Aguada?',
        a: 'No. This guide uses Sinquerim Fort for the lower shore-side fortification at Candolim, which is listed separately in the ASI protected-monument list. Fort Aguada usually refers to the hilltop citadel.'
      },
      {
        q: 'Which one has the 09:30–18:00 timetable?',
        a: 'Goa Tourism publishes that timetable for the hilltop Fort Aguada. It does not apply to the lower shore-side walls.'
      },
      {
        q: 'Does one ticket cover both sites?',
        a: 'No combined ticket is confirmed. Check each venue’s own charges and do not transfer a price from one to the other.'
      },
      {
        q: 'Is the lighthouse part of the lower fort?',
        a: 'No. The lighthouse and the former prison are separate hilltop landmarks with their own access arrangements.'
      },
      {
        q: 'Can I walk easily between the lower walls and the hilltop fort?',
        a: 'Do not assume a short or permitted route. They have different approaches and elevations; confirm routes, access and transport separately.'
      },
      {
        q: 'Why do photos online look so different?',
        a: 'Because they show different parts of the Aguada complex: the hilltop citadel, the lighthouse, the jail complex and the lower sea-level walls. Use the Plus Code and the listed names to identify which is which.'
      },
      {
        q: 'Which site should I visit first?',
        a: 'Decide based on confirmed hours and conditions. A timed hilltop visit and a flexible lower coastal stop work well as separate items in a North Goa day.'
      }
    ],
    related: ['timings', 'entry-fee', 'location', 'nearby/fort-aguada', 'history'],
    sources: ['asi', 'gt', 'ii', 'jail', 'maps']
  }
];
