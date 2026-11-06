import type { Topic } from './topic-types';

/* Batch 2 / Group C: nearby places, food, stays and activities (P1). */
export const TOPICS_C: Topic[] = [
  {
    slug: 'nearby/sinquerim-beach',
    group: 'nearby',
    batch: 2,
    priority: 'P1',
    schema: 'attraction',
    title: 'Sinquerim Beach Guide: Coastline, Access and Safety',
    description:
      'A guide to Sinquerim Beach beside the lower Sinquerim fortification: shoreline access, sea views, seasonal conditions, coastal activities and the safety checks to make before you go.',
    h1: 'Sinquerim Beach guide',
    kicker: 'Around Sinquerim · Beach',
    lead:
      'Sinquerim Beach is the coastal setting for the lower shore-side fortification. It is a separate destination with its own access, conditions and activity operators, and it is not an extension of the fort’s entrance.',
    sections: [
      {
        heading: 'The beach and the fortification',
        paragraphs: [
          'The sea-facing laterite wall and the adjacent beach are often photographed together, which is why the two are easily treated as one place. The Government of Goa describes Sinquerim Beach as a coastal destination in its own right, while the ASI list records the lower fortification wall separately.',
          'Use the Plus Code FQX8+9HJ to identify the fortification, then decide separately which stretch of beach you want to visit. A permitted beach approach is not automatically a permitted entrance to the walls.'
        ]
      },
      {
        heading: 'Conditions that shape a visit',
        bullets: [
          'Sea state, surf and tide change through the day and across seasons.',
          'Monsoon conditions bring rough water, strong wind and wet, slippery approaches.',
          'Shade, facilities and the usability of a particular beach path are not guaranteed.',
          'Daylight matters: plan the return before the light fades.'
        ]
      },
      {
        heading: 'Coastal activities',
        paragraphs: [
          'Goa’s official tourism information identifies the Sinquerim Beach area with a range of coastal and water-based activities. That describes the area, not a confirmed operator, price, schedule or safety standard on any given day.',
          'Before booking anything, check who operates the activity, whether it is currently authorised and operating, what the price includes, what safety equipment is provided and whether weather conditions allow it. See the water-sports guide for the full checklist.'
        ]
      },
      {
        heading: 'Combining beach and fort',
        paragraphs: [
          'A short coastal stop works well as a flexible pair: view the walls from a permitted route, then use the beach as a separate stop if conditions allow. Keep food, parking and any activity booking as independent decisions.',
          'Do not assume a shared ticket, a shared entrance or a short walking link between Sinquerim Beach, the hilltop Fort Aguada and the jail complex.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is Sinquerim Beach the same as Sinquerim Fort?',
        a: 'No. The beach and the lower shore-side fortification are adjacent but separate destinations, with separate access considerations.'
      },
      {
        q: 'Are water sports available at Sinquerim Beach?',
        a: 'Official tourism information associates the area with coastal activities, but current operation, operator authorisation, prices and weather conditions must be checked on the day.'
      },
      {
        q: 'Is it safe to swim here?',
        a: 'No safety guarantee is given here. Check current warnings, surf, tide and local instructions, and keep back from exposed edges and walls.'
      },
      {
        q: 'Can I walk from the beach onto the fort walls?',
        a: 'Do not climb walls or cross barriers. Use only a currently permitted approach and follow signs and staff instructions.'
      },
      {
        q: 'Is the beach suitable during the monsoon?',
        a: 'Rough seas and strong wind can make a visit inadvisable. Check the forecast and marine warnings and be prepared to change plans.'
      }
    ],
    related: ['location', 'activities/water-sports-near-sinquerim', 'nearby/candolim-beach', 'itinerary/half-day', 'things-to-do'],
    sources: ['goa', 'maps', 'asi']
  },
  {
    slug: 'nearby/fort-aguada',
    group: 'nearby',
    batch: 2,
    priority: 'P1',
    schema: 'attraction',
    detail: {
      tagline: 'The hilltop citadel above Sinquerim, with its lighthouse and former prison — a separate destination from the lower shore-side walls.',
      hoursLabel: 'Hilltop Fort Aguada: Goa Tourism publishes 09:30–18:00. The lighthouse and jail complex are separate — confirm each.',
      ticketLabel: 'No single verified price — check the hilltop site and the separate lighthouse or jail venue.',
      highlights: [
        'A 17th-century Portuguese citadel guarding the Mandovi estuary approach.',
        'One of the largest and best-preserved forts in Goa.',
        'A still-active lighthouse and the separate Aguad jail complex nearby.',
        'Wide views over the Arabian Sea and the river mouth.'
      ],
      about: 'Fort Aguada sits on a hill above the lower Sinquerim fortification covered by the main guide. It is usually what people mean by “Fort Aguada”, but it is a distinct site with its own published timetable, and it should not be confused with the sea-level walls at Candolim.',
      tips: [
        'Treat the hilltop fort, the lighthouse and the jail complex as three separate stops.',
        'Confirm the current 09:30–18:00 timetable and any ticket with the operator before travelling.',
        'Allow for the change in elevation; the lower walls are a different drive, not a short walk.',
        'Keep coastal conditions in mind — rough seas can make the lower stop inadvisable.'
      ],
      transport: 'The hilltop approach starts from a different point than the Plus Code FQX8+9HJ used for the lower site. Plan it as its own drive.',
      transportBullets: [
        'From Candolim/Calangute: a short inland drive uphill — confirm the current approach.',
        'From Panaji: cross the bridge and follow the coastal road south.',
        'Use a taxi or scooter and agree the waiting time if you plan both the hilltop and the lower walls.'
      ],
      charms: {
        history: 'Built in the early 1600s by the Portuguese to defend the Mandovi river mouth, the citadel formed part of a wider coastal defence system that also included the lower Aguada works at Candolim.',
        architecture: 'Massive laterite ramparts, a moat, a freshwater spring (the name “Aguada” points to water), and a circular lighthouse that still marks the approach.',
        culture: 'Today the complex reads as layered heritage: a colonial fortress, a working lighthouse and a repurposed jail venue with exhibitions and heritage walks.',
        experience: 'Expect broad sea-and-river views, old masonry underfoot, and a slower pace than the beaches below.'
      },
      routeSteps: [
        'Confirm the current opening hours and any ticket for the hilltop fort.',
        'Drive or ride up from your base, keeping the river-and-sea view on your right.',
        'Walk the ramparts and the lighthouse area; note the separate jail-complex entrance.',
        'If you also want the lower walls, plan that as a second, independently checked stop.',
        'Return before dark; coastal light fades quickly.'
      ],
      photoSpots: [
        'The rampart edge with the Mandovi mouth and the Arabian Sea behind.',
        'The circular lighthouse against a clear Goa sky.',
        'The old moat and gatehouse masonry.',
        'Wide coastal panoramas toward Sinquerim and the beaches.'
      ],
      stayTips: 'Basing yourself in Sinquerim or Candolim keeps both the hilltop fort and the lower walls within easy reach; Calangute suits a busier beach base and Panaji a wider North Goa itinerary. Compare the four areas before booking.',
      goodToKnow: [
        'The hilltop fort is not the same as the lower shore-side Sinquerim fortification.',
        'The 09:30–18:00 schedule belongs to the hilltop site only.',
        'The lighthouse and jail complex have their own access and charges.',
        'No ticket, hour or route is shared between the hilltop and the lower walls.'
      ]
    },
    title: 'Fort Aguada & Lighthouse Guide: The Hilltop Site Explained',
    description:
      'Fort Aguada on the hill, its lighthouse and the former prison are separate from the lower Sinquerim fortification. Compare their approaches, published timetable and verification needs.',
    h1: 'Fort Aguada & lighthouse guide',
    kicker: 'Around Sinquerim · Hilltop fort',
    lead:
      'Fort Aguada usually means the hilltop citadel above Sinquerim. It is a different site from the lower sea-level walls covered by the main guide, and its published timetable should not be applied to the shore-side fortification.',
    sections: [
      {
        heading: 'What belongs to the hilltop site',
        paragraphs: [
          'Goa Tourism describes the Aguada complex with a hilltop citadel and separate sea-level works, and discusses the lighthouse and the former prison as distinct landmarks. Incredible India presents the fort as a heritage destination within the wider coastal defence system.',
          'This is why a single "Fort Aguada" search result can mix the citadel, lighthouse, jail complex and lower walls. Treat each name as a separate destination when checking hours, tickets and routes.'
        ]
      },
      {
        heading: 'Timetable and tickets',
        paragraphs: [
          'Goa Tourism publishes 09:30–18:00 for the hilltop Fort Aguada. That schedule is widely quoted, but it belongs to the hilltop site, not the lower Candolim fortification. Confirm the current timetable and any ticket with the relevant operator before travelling.',
          'The lighthouse and the former prison may have their own access rules. The Aguad Port & Jail Complex is an independent heritage venue with its own walks, exhibitions and booking conditions.'
        ]
      },
      {
        heading: 'Getting there versus getting to the lower walls',
        paragraphs: [
          'The hilltop approach is a different drive from the Plus Code FQX8+9HJ used for the lower shore-side site. Do not assume a short walk, a shared car park or a combined ticket between the two.',
          'If you plan both in one day, check each entrance separately and allow for the change in elevation and the possibility that coastal conditions prevent the lower stop.'
        ]
      },
      {
        heading: 'Where to verify',
        paragraphs: [
          'Use Goa Tourism for the hilltop fort’s published information, the jail complex’s own site for its heritage experiences, and current signs or staff at the lower site for the shore-side walls. Google Maps helps identify the correct location but is not an official timetable.',
          'The comparison guide on this site sets the two identities side by side, and the history guide explains the wider defensive system without assigning it all to one wall.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is Fort Aguada the same as Sinquerim Fort?',
        a: 'Not in this guide. Fort Aguada usually refers to the hilltop citadel; Sinquerim Fort here means the lower shore-side fortification listed separately at Candolim.'
      },
      {
        q: 'What are Fort Aguada timings?',
        a: 'Goa Tourism publishes 09:30–18:00 for the hilltop fort; confirm the current schedule with the operator. It does not apply to the lower shore-side walls.'
      },
      {
        q: 'Is there an entry fee for Fort Aguada?',
        a: 'No verified price is published here. Check the current ticket arrangements for the hilltop site and for the separate lighthouse or jail venue.'
      },
      {
        q: 'Can I visit the lighthouse?',
        a: 'Lighthouse access has its own arrangements and is not confirmed by this guide. Check with the relevant authority before planning it as a stop.'
      },
      {
        q: 'Can I walk from the hilltop fort down to the lower walls?',
        a: 'Do not assume a permitted connecting route. Plan them as separate stops with independently checked approaches.'
      }
    ],
    related: ['lower-vs-upper-aguada', 'nearby/aguad-jail-museum', 'timings', 'history', 'itinerary/one-day-north-goa'],
    sources: ['gt', 'ii', 'jail', 'maps']
  },
  {
    slug: 'nearby/candolim-beach',
    group: 'nearby',
    batch: 2,
    priority: 'P1',
    schema: 'attraction',
    detail: {
      tagline: 'A long North Goa beach beside the lower Sinquerim fortification — best treated as its own stop.',
      hoursLabel: 'Public beach — no fixed hours published here; verify access and sea conditions locally.',
      ticketLabel: 'No entry charge is published for the beach itself; activities and venues are separate.',
      highlights: [
        'A long, open stretch of North Goa coastline.',
        'Shares the shore with the lower Sinquerim fortification.',
        'Food, stays and transport services in the wider Candolim area.',
        'A flexible half-day pairing with the historic walls.'
      ],
      about: 'Candolim Beach is a separate recreational destination close to the lower Sinquerim fortification. A permitted beach approach does not confirm an entrance to the walls, and the two should be checked independently.',
      tips: [
        'Confirm the lower site’s entrance and the day’s sea conditions before pairing the two.',
        'Keep the beach stop flexible if surf, rain or heat make the shore unsuitable.',
        'Agree a single permitted drop-off or parking point with your driver.',
        'Treat any ticketed venue or activity as a separate booking.'
      ],
      transport: 'Candolim links to the rest of North Goa by the coastal road; the lower fortification is a separate approach, not a fixed walk away.',
      transportBullets: [
        'From Panaji: a coastal drive north via the main road.',
        'From Calangute: a short ride south along the beach road.',
        'From the airport (GOI or GOX): confirm which code before arranging a transfer.'
      ],
      charms: {
        history: 'The beach fronts the Candolim coastline where the lower Aguada defensive works were built; the shore and the fortification have shared the same stretch for centuries.',
        architecture: 'The sea-facing laterite wall of the lower fortification is the built landmark here; the beach itself is open sand and palms.',
        culture: 'Candolim is one of Goa’s longer-established coastal villages, with a mix of local life, food and seasonal tourism.',
        experience: 'Expect a wide horizon, a slower beach rhythm, and the fort walls visible from the sand.'
      },
      routeSteps: [
        'Decide which stretch of Candolim Beach you want and how it pairs with the lower walls.',
        'Confirm the permitted approach and parking with your driver or accommodation.',
        'Check the sea state and tide before any time on the shore.',
        'Keep food, a beach stop and any activity as independent, separately checked plans.',
        'Return by daylight along a permitted route.'
      ],
      photoSpots: [
        'The lower fortification wall meeting the sand at the water line.',
        'Palm-fringed open beach with the fort in the distance.',
        'Sunset over the Arabian Sea from the shore.',
        'Coastal road views toward Sinquerim.'
      ],
      stayTips: 'Sinquerim and Candolim are the most convenient coastal bases; Calangute suits a busier beach holiday and Panaji a wider itinerary. Compare the four areas and confirm exact locations before booking.',
      goodToKnow: [
        'The beach and the fortification are adjacent but separate destinations.',
        'Sea state, surf and tide change through the day and across seasons.',
        'Monsoon conditions bring rough water and wet, slippery approaches.',
        'Do not climb walls or cross barriers for a better view.'
      ]
    },
    title: 'Candolim Beach Guide: Combining the Coast with Sinquerim Fort',
    description:
      'Plan Candolim Beach alongside the lower Sinquerim fortification: coastal access, food and transport considerations, and why the two stops should be checked separately.',
    h1: 'Candolim Beach guide',
    kicker: 'Around Sinquerim · Beach',
    lead:
      'Candolim Beach is a long, separate beach destination close to the lower Sinquerim fortification. It works well in a half-day plan, but its access, services and conditions should be confirmed independently.',
    sections: [
      {
        heading: 'Two stops, not one',
        paragraphs: [
          'The beach and the sea-level fortification share a stretch of coast, yet they are different places: one is a recreational beach, the other a historic defensive wall. A permitted beach approach does not confirm an entrance to the walls.',
          'Use the Plus Code FQX8+9HJ for the fortification and decide separately which part of Candolim Beach you want to reach. Do not assume a shared parking area or a short fixed link.'
        ]
      },
      {
        heading: 'Along the beach road',
        paragraphs: [
          'The wider Candolim area has food, stays and transport services, but this guide does not verify individual businesses, their opening status or their prices. Check current availability and dietary requirements with each operator directly.',
          'For a meal plan organised by time of day, see the restaurants and beach-shack guides; for a place to base yourself, see the stay guide.'
        ]
      },
      {
        heading: 'A sensible combined route',
        bullets: [
          'Confirm the lower site’s entrance and the day’s sea conditions first.',
          'Keep the beach stop flexible if surf, rain or heat make the shoreline unsuitable.',
          'Agree a single permitted drop-off or parking point with your driver.',
          'Treat any ticketed venue or activity as a separate booking.',
          'Leave enough daylight to return by the same permitted route.'
        ]
      },
      {
        heading: 'Seasonal and safety notes',
        paragraphs: [
          'Monsoon seas, wet surfaces and strong wind affect both the beach and the fortification approach. Check the forecast and marine warnings rather than relying on a fixed idea of a "good season".',
          'Follow current signs and staff instructions, keep back from exposed edges and never climb the historic walls for a better beach view.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is Candolim Beach close to Sinquerim Fort?',
        a: 'They share the same coastal area, but this guide does not publish a fixed walking distance or route. Confirm the permitted approach for each on the day.'
      },
      {
        q: 'Can I combine both in a half day?',
        a: 'Yes, as two flexible stops. Check the fortification’s access and the sea conditions first, then decide how long to spend on the beach.'
      },
      {
        q: 'Are there restaurants on Candolim Beach?',
        a: 'The area has food services, but no individual business, menu or opening status is verified here. Check directly with the operator.'
      },
      {
        q: 'Is parking shared with the fort?',
        a: 'Do not assume so. Use only currently permitted parking for the stop you are making and keep beach and residential access clear.'
      }
    ],
    related: ['nearby/sinquerim-beach', 'food/beach-shacks-and-cafes', 'from-candolim', 'itinerary/half-day', 'stay/hotels-near-sinquerim-fort'],
    sources: ['goa', 'maps', 'gt']
  },
  {
    slug: 'nearby/reis-magos-fort',
    group: 'nearby',
    batch: 2,
    priority: 'P1',
    schema: 'attraction',
    detail: {
      tagline: 'Another North Goa fort — a separate heritage destination from Sinquerim, worth comparing on a multi-fort day.',
      hoursLabel: 'No fixed hours verified here — confirm the venue’s current opening with the operator.',
      ticketLabel: 'No verified price published — check the venue’s own current information.',
      highlights: [
        'A separate North Goa fort with its own setting and history.',
        'Commonly paired with Sinquerim and Fort Aguada on heritage days.',
        'Its own route, entrance and visiting arrangements.',
        'River-and-coast views distinct from the Candolim shore.'
      ],
      about: 'Reis Magos Fort is one of the other historic forts visitors consider when planning North Goa. It is a separate site with its own access, not an alternative name for Sinquerim Fort.',
      tips: [
        'Confirm the current opening and any ticket or booking for Reis Magos.',
        'Plan the route from your base and allow flexible transport time.',
        'If a heritage walk or exhibition needs booking, arrange it in advance.',
        'Keep the separate access for the lower Sinquerim walls in mind on the same day.'
      ],
      transport: 'Reis Magos sits on the north bank approach; reach it from Panaji or across the coastal road from Candolim and Calangute.',
      transportBullets: [
        'From Panaji: a short drive across the river approach.',
        'From Candolim/Calangute: plan a cross-coast transfer and agree the fare.',
        'From the airport (GOI or GOX): confirm which code before booking.'
      ],
      charms: {
        history: 'Reis Magos is among the historic forts of North Goa, often described as a 16th-century Portuguese structure later used for defence and then preservation — verify specific dates with the venue.',
        architecture: 'A compact hillfort with ramparts and a commanding position over the river-and-coast approach.',
        culture: 'It is frequently presented as a cultural-heritage stop, distinct from the working beaches and the Aguada complex.',
        experience: 'Expect a quieter, more contained fort experience with views toward the Mandovi and the sea.'
      },
      routeSteps: [
        'Confirm Reis Magos’ current opening and any booking requirement.',
        'Arrange transport from your base and agree the waiting time.',
        'Visit as one timed, independently confirmed stop.',
        'If adding the lower Sinquerim walls, check that entrance separately.',
        'Return by daylight with agreed transport.'
      ],
      photoSpots: [
        'The ramparts with the river-and-coast approach below.',
        'Compact laterite architecture against the sky.',
        'Views toward the Mandovi and the wider North Goa coast.',
        'Quiet courtyard and gateway details.'
      ],
      stayTips: 'Panaji is a natural base for a Reis Magos visit; Sinquerim and Candolim also work if you are combining forts and beaches. Compare the four areas before booking.',
      goodToKnow: [
        'Reis Magos is not Sinquerim Fort and not Fort Aguada.',
        'No verified ticket price or timetable is published here.',
        'A 09:30–18:00 schedule, if cited, refers to hilltop Fort Aguada.',
        'Keep the two forts as separate, independently checked stops.'
      ]
    },
    title: 'Reis Magos Fort Guide: Another North Goa Fort to Compare',
    description:
      'Reis Magos Fort is a separate North Goa fort destination. Compare its identity, approach and verification needs with the lower Sinquerim fortification before adding it to an itinerary.',
    h1: 'Reis Magos Fort guide',
    kicker: 'Around Sinquerim · Another fort',
    lead:
      'Reis Magos Fort is one of the other forts visitors consider when planning a North Goa day. It is a separate site with its own route, entrance and visiting arrangements, not an alternative name for Sinquerim Fort.',
    sections: [
      {
        heading: 'A different fort, a different setting',
        paragraphs: [
          'The lower Sinquerim fortification is a shore-side stretch of the Aguada defensive works at Candolim. Reis Magos sits elsewhere on North Goa’s river-and-coast landscape and is commonly treated as its own heritage destination.',
          'Because both are historic forts in the same region, search results and tour descriptions often group them. Keep their names, locations and access rules separate when planning.'
        ]
      },
      {
        heading: 'What to verify before adding it to a day',
        bullets: [
          'The current opening arrangements and any ticket or booking requirement for Reis Magos.',
          'The route from your base and the return transport; do not assume a fixed travel time.',
          'Whether any heritage walk, exhibition or guided visit needs advance booking.',
          'The separate access situation for the lower Sinquerim fortification on the same day.',
          'Daylight and sea conditions if your plan includes coastal stops.'
        ]
      },
      {
        heading: 'Sequencing two forts',
        paragraphs: [
          'A two-fort day works best with one timed, independently confirmed visit and one flexible coastal stop. Do not assume a combined ticket, a shared entrance or a short walking link between them.',
          'The one-day itinerary guide shows how to sequence North Goa forts and beaches without publishing unverified journey times.'
        ]
      },
      {
        heading: 'Keeping the facts clean',
        paragraphs: [
          'This guide does not publish unverified construction dates, ticket prices or opening hours for Reis Magos. Use the venue’s own information and current signage for those, and use the ASI listing and Goa Tourism material to keep the Aguada sites distinct.',
          'If a description mentions a 09:30–18:00 schedule, check whether it refers to hilltop Fort Aguada rather than either the lower walls or Reis Magos.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is Reis Magos Fort the same as Sinquerim Fort?',
        a: 'No. They are separate North Goa fort destinations with different locations and visiting arrangements.'
      },
      {
        q: 'Can I visit both in one day?',
        a: 'Yes as independent stops, but confirm each entrance, timetable and ticket separately and allow flexible transport time.'
      },
      {
        q: 'Is there an entry fee for Reis Magos Fort?',
        a: 'No verified price is published here. Check the venue’s own current information before travelling.'
      },
      {
        q: 'Which fort has the 09:30–18:00 timetable?',
        a: 'Goa Tourism publishes that timetable for the hilltop Fort Aguada. It should not be applied to Reis Magos or to the lower Sinquerim walls.'
      }
    ],
    related: ['lower-vs-upper-aguada', 'nearby/fort-aguada', 'itinerary/one-day-north-goa', 'history', 'from-panaji'],
    sources: ['gt', 'ii', 'asi', 'maps']
  },
  {
    slug: 'nearby/aguad-jail-museum',
    group: 'nearby',
    batch: 2,
    priority: 'P1',
    schema: 'attraction',
    title: 'Aguad Port & Jail Complex Guide: A Separate Heritage Venue',
    description:
      'The Aguad Port & Jail Complex is an independent heritage venue near Sinquerim Fort. Learn what to check about exhibitions, heritage walks, bookings, hours and entry charges.',
    h1: 'Aguad Port & Jail Complex guide',
    kicker: 'Around Sinquerim · Heritage venue',
    lead:
      'The Aguad Port & Jail Complex is a distinct heritage destination with its own programme and booking conditions. It should not be confused with the lower shore-side Sinquerim fortification or with the hilltop citadel.',
    sections: [
      {
        heading: 'Why it belongs in a separate plan',
        paragraphs: [
          'The former prison and the wider jail complex have been developed as a cultural and heritage venue with exhibitions and guided walks. That is a managed visitor experience, whereas the lower fortification is an exposed coastal structure whose access is not manager-confirmed.',
          'For this reason no timetable, ticket or booking rule from the jail complex can be used as information about the lower walls, and vice versa.'
        ]
      },
      {
        heading: 'What to confirm with the venue',
        bullets: [
          'Current opening days and hours, which may differ from the hilltop fort’s published schedule.',
          'Whether a heritage walk, exhibition or guided experience needs advance booking.',
          'The current entry charge and exactly what it includes.',
          'Photography rules, accessibility arrangements and group requirements.',
          'The venue’s own entrance and drop-off point, which are separate from the coastal approach.'
        ],
        note: 'Use the Aguad Port & Jail Complex’s own site for these details; this guide does not publish unverified prices or hours.'
      },
      {
        heading: 'Adding the venue to a North Goa day',
        paragraphs: [
          'A timed, booked heritage visit combines well with a flexible coastal stop, but keep them as separate items. Confirm the venue first, then check the lower site’s entrance and sea conditions before deciding the order.',
          'Do not assume a combined ticket with hilltop Fort Aguada, the lighthouse or the beaches. The one-day itinerary guide shows how to sequence these stops.'
        ]
      },
      {
        heading: 'Keeping the site identities clear',
        paragraphs: [
          'Three names often get collapsed into one: the hilltop Fort Aguada, the Aguad Port & Jail Complex, and the lower shore-side fortification at Candolim. Use the venue’s own site, Goa Tourism and the ASI listing to keep them distinct.',
          'If a description mentions a prison, a museum, an exhibition or a booked heritage walk, it is not describing the lower sea-level walls.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is the Aguad jail complex part of Sinquerim Fort?',
        a: 'No. It is an independent heritage venue with its own entrance, programme and booking conditions.'
      },
      {
        q: 'Do I need to book a heritage walk?',
        a: 'Booking requirements are set by the venue and are not confirmed here. Check the Aguad Port & Jail Complex’s own site before travelling.'
      },
      {
        q: 'What is the entry fee?',
        a: 'No verified price is published by this guide. Check the venue’s current charges and what any ticket includes.'
      },
      {
        q: 'Are the opening hours the same as Fort Aguada?',
        a: 'Do not assume so. The jail complex is a separate venue; confirm its own hours and days of operation.'
      },
      {
        q: 'Can I combine the jail visit with the lower walls?',
        a: 'Yes as separate stops. Confirm the booked venue first, then check the lower site’s access and sea conditions.'
      }
    ],
    related: ['nearby/fort-aguada', 'lower-vs-upper-aguada', 'entry-fee', 'itinerary/one-day-north-goa', 'history'],
    sources: ['jail', 'gt', 'ii', 'maps']
  },
  {
    slug: 'food/restaurants-near-sinquerim-fort',
    group: 'nearby',
    batch: 2,
    priority: 'P1',
    schema: 'article',
    title: 'Restaurants Near Sinquerim Fort: Planning Meals Around a Visit',
    description:
      'How to plan breakfast, lunch, afternoon breaks, dinner and drinks around a visit to the lower Sinquerim Fort, with dietary questions to ask and no unverified venue listings.',
    h1: 'Restaurants near Sinquerim Fort',
    kicker: 'Around Sinquerim · Food',
    lead:
      'This is a meal-planning guide, not a ranked list of venues. No individual restaurant, opening status, menu or price has been verified here, so each choice below is a question to ask locally rather than a recommendation.',
    sections: [
      {
        heading: 'Breakfast before the coastal stop',
        paragraphs: [
          'If you are starting from Candolim, Calangute or Panaji, an early meal at your base is usually simpler than searching near the shore. Confirm the opening time with the venue on the day, especially out of peak season.',
          'Carry water and a small snack regardless. Shade and services at the fortification itself are not verified, and an exposed coastal walk is more comfortable with a flexible start.'
        ]
      },
      {
        heading: 'Lunch after the walls',
        paragraphs: [
          'For lunch, look at the wider Candolim and Sinquerim area as separate commercial destinations. Ask about current opening hours, what is on the menu, whether Goan dishes or seafood are available that day, and whether the kitchen can handle your dietary needs.',
          'Do not assume a restaurant is open because it appears on a map or in an older review. Seasonal closures and changing hours are common in a beach area.'
        ]
      },
      {
        heading: 'Afternoon breaks, drinks and dinner',
        bullets: [
          'Afternoon: a café or a shaded stop back in the Candolim area; confirm it is currently operating.',
          'Drinks: fresh coconut water, juice, tea or coffee are common regional options; ask about ingredients and hygiene.',
          'Dinner: plan near your accommodation base rather than relying on a beachside venue staying open late.',
          'Evening: agree the return transport before the light fades; do not add an after-dark coastal walk to a dinner plan.'
        ]
      },
      {
        heading: 'Dietary requirements to raise in advance',
        paragraphs: [
          'Vegetarian, vegan, halal, gluten-free and allergy-aware requirements need a direct conversation with the kitchen. Menus and ingredient sourcing change, and a general "vegetarian options available" note online is not a guarantee.',
          'Ask about spice levels, seafood handling and cross-contamination where relevant. If your needs are strict, carry a safe fallback rather than improvising at the shore.'
        ]
      },
      {
        heading: 'How to verify a venue responsibly',
        paragraphs: [
          'Check the current listing, call ahead where possible, and confirm the name, location, opening status and menu on the day. This guide deliberately does not name businesses or publish a "best restaurants" ranking on unverified information.',
          'For local dishes and what they typically contain, see the Goan food guide; for seasonal beach shacks and cafés, see the shacks guide.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Are there restaurants right next to Sinquerim Fort?',
        a: 'The wider Candolim and Sinquerim area has food services, but no individual venue, opening status or menu is verified by this guide. Check locally on the day.'
      },
      {
        q: 'Where should I eat breakfast before visiting?',
        a: 'Eating near your accommodation base is usually simplest. Confirm the venue’s opening time and carry water for the coastal stop.'
      },
      {
        q: 'Can I find vegetarian or vegan food nearby?',
        a: 'Ask each venue directly about ingredients and preparation. No specific dietary-friendly business is confirmed here.'
      },
      {
        q: 'Do beach restaurants stay open in the monsoon?',
        a: 'Seasonal operation varies. Confirm with the venue rather than relying on a map listing or an older review.'
      },
      {
        q: 'Why are there no named restaurant recommendations?',
        a: 'Because this guide does not publish unverified business names, opening states or prices. A current, directly confirmed choice is more useful than an outdated ranking.'
      }
    ],
    related: ['food/beach-shacks-and-cafes', 'food/goan-food-guide', 'itinerary/half-day', 'stay/hotels-near-sinquerim-fort', 'nearby/candolim-beach'],
    sources: ['goa', 'maps']
  },
  {
    slug: 'food/beach-shacks-and-cafes',
    group: 'nearby',
    batch: 2,
    priority: 'P1',
    schema: 'article',
    title: 'Beach Shacks & Cafés Near Sinquerim: Seasonality and Checks',
    description:
      'A practical guide to beach shacks and cafés near Sinquerim: seasonal operation, how to confirm a venue is open, and what to ask about drinks, snacks and dietary needs.',
    h1: 'Beach shacks & cafés near Sinquerim',
    kicker: 'Around Sinquerim · Food',
    lead:
      'Beach shacks and cafés are among the most seasonal businesses on this coast. This guide explains how to plan around them without naming unverified venues or promising a particular shack will be operating.',
    sections: [
      {
        heading: 'Why seasonality matters',
        paragraphs: [
          'Beachside structures, staffing and menus can change with the monsoon, local permissions and the tourist season. A shack visible in a photograph may not exist in the same form, or at all, on the day you visit.',
          'Treat any beachside food stop as optional. Have a fallback in the Candolim area and do not build a tight itinerary around a single venue.'
        ]
      },
      {
        heading: 'A short checklist for any shack or café',
        bullets: [
          'Confirm with the operator that it is open today and until when.',
          'Ask what is actually available from the menu; printed or photographed menus may be out of date.',
          'Check prices before ordering, including service or seating charges.',
          'Ask about ingredients, spice and allergen handling for your group.',
          'Confirm whether shaded seating is available and whether it is accessible from a permitted route.',
          'Keep the beach clear: do not cross barriers or restricted areas to reach a venue.'
        ]
      },
      {
        heading: 'Drinks and light food',
        paragraphs: [
          'Fresh coconut water, juices, tea and coffee are common options in the region, alongside light snacks and Goan dishes. Availability depends on the operator and the season, so ask rather than assume.',
          'Carry your own water for the coastal walk. A café is a convenience, not a substitute for hydration on an exposed sea wall in the heat.'
        ]
      },
      {
        heading: 'Fitting a café into the visit',
        paragraphs: [
          'A café stop works best after the fortification, back along a permitted route and with enough daylight for the return. Combine it with a flexible half-day plan rather than an after-dark beach walk.',
          'For a full meal, see the restaurants guide; for regional dishes and ingredients, see the Goan food guide.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Are beach shacks near Sinquerim open all year?',
        a: 'No year-round operation is confirmed. Seasonal permissions, weather and demand affect openings, so check with the operator on the day.'
      },
      {
        q: 'Which shack should I visit?',
        a: 'This guide does not name or rank venues without current verification. Ask locally which ones are operating and confirm their menu and prices.'
      },
      {
        q: 'Do shacks serve vegetarian or vegan options?',
        a: 'Ask the kitchen directly about ingredients and preparation; no specific dietary offering is confirmed here.'
      },
      {
        q: 'Is it safe to walk along the beach to a café at night?',
        a: 'Plan café stops in daylight and return by a permitted route with agreed transport. Do not add an after-dark coastal walk to the plan.'
      }
    ],
    related: ['food/restaurants-near-sinquerim-fort', 'food/goan-food-guide', 'nearby/sinquerim-beach', 'itinerary/half-day', 'visitor-guide'],
    sources: ['goa', 'maps']
  },
  {
    slug: 'food/goan-food-guide',
    group: 'nearby',
    batch: 2,
    priority: 'P1',
    schema: 'article',
    title: 'What to Eat Near Sinquerim Fort: A Goan Food Guide',
    description:
      'A plain-language guide to Goan dishes you may encounter near Sinquerim, from fish curry and xacuti to bebinca, with questions to ask about ingredients, spice and dietary needs.',
    h1: 'What to eat near Sinquerim Fort',
    kicker: 'Around Sinquerim · Food',
    lead:
      'This page describes well-known Goan dishes and the questions worth asking before ordering. It does not recommend a venue, quote a price or claim that a particular dish is available at a particular place today.',
    sections: [
      {
        heading: 'Dishes commonly associated with Goa',
        bullets: [
          'Fish curry: a coconut-based curry usually served with rice; ask which fish is used that day.',
          'Xacuti: a richly spiced preparation often made with coconut and roasted spices; check whether it is meat, seafood or vegetable based.',
          'Seafood preparations: prawns, clams and fish appear in many forms; availability depends on the catch and the season.',
          'Bebinca: a layered coconut-based dessert often associated with Goan celebrations.',
          'Vegetable and lentil dishes: useful options for vegetarian diners, but preparation methods vary by kitchen.'
        ]
      },
      {
        heading: 'Questions that prevent an unpleasant surprise',
        paragraphs: [
          'Ask what is in a dish, how spicy it is, whether it contains seafood, meat, coconut, nuts or dairy, and how it is prepared. Menus rarely describe cross-contamination, so raise allergies explicitly.',
          'If you follow halal, vegan, gluten-free or allergy-aware diets, speak to the kitchen rather than relying on a menu symbol or a general online description.'
        ]
      },
      {
        heading: 'Drinks and lighter choices',
        paragraphs: [
          'Fresh coconut water, fruit juices, tea and coffee are widely encountered in the region. Ask about added sugar, ice and water quality if that matters for your group.',
          'Keep water with you for the coastal walk itself; a food guide is not a substitute for hydration and sun protection on an exposed wall.'
        ]
      },
      {
        heading: 'From dishes to an actual meal',
        paragraphs: [
          'Use the restaurants guide to plan breakfast, lunch, afternoon and dinner around your visit, and the shacks guide for seasonal beachside options. Neither lists unverified businesses.',
          'Confirm the current menu and opening status with the venue on the day. This guide describes regional food culture, not a live offering.'
        ]
      }
    ],
    faqs: [
      {
        q: 'What should I eat near Sinquerim Fort?',
        a: 'Goan fish curry, xacuti, seafood dishes and bebinca are well-known regional options. Ask each venue what is actually available and what the dish contains.'
      },
      {
        q: 'Is Goan food very spicy?',
        a: 'Spice levels vary by kitchen and dish. Ask for a milder preparation if needed rather than assuming a dish will be mild.'
      },
      {
        q: 'Are vegetarian or vegan options available?',
        a: 'Many kitchens offer vegetable-based dishes, but ingredients and preparation vary. Confirm directly with the kitchen, especially for vegan or allergy-aware diets.'
      },
      {
        q: 'Do you recommend a specific restaurant?',
        a: 'No. This guide does not name venues or publish rankings without current verification. Use the restaurants guide for a planning framework.'
      }
    ],
    related: ['food/restaurants-near-sinquerim-fort', 'food/beach-shacks-and-cafes', 'nearby/candolim-beach', 'itinerary/one-day-north-goa', 'visitor-guide'],
    sources: ['goa']
  },
  {
    slug: 'stay/hotels-near-sinquerim-fort',
    group: 'nearby',
    batch: 2,
    priority: 'P1',
    schema: 'article',
    title: 'Where to Stay Near Sinquerim Fort: Choosing an Area in North Goa',
    description:
      'Compare four base areas for a Sinquerim Fort visit — Sinquerim, Candolim, Calangute and Panaji — by transport, beach access and budget level, without unverified hotel rankings.',
    h1: 'Where to stay near Sinquerim Fort',
    kicker: 'Around Sinquerim · Stays',
    lead:
      'Rather than ranking hotels it has not verified, this guide compares the four areas visitors commonly use as a base. The right choice depends on how you plan to travel, not on a star rating in an outdated list.',
    sections: [
      {
        heading: '1. Sinquerim Beach area',
        paragraphs: [
          'Staying closest to the coast puts the fortification within a short, flexible outing. Check whether the approach from your accommodation is currently permitted and what the sea conditions are on the day.',
          'A beachside base still does not guarantee an entrance to the walls or a parking space. Confirm both separately.'
        ]
      },
      {
        heading: '2. Candolim',
        paragraphs: [
          'Candolim offers a wider spread of food, transport and services while remaining close to the lower site. It is a practical base for a half-day plan with a meal and a beach stop.',
          'Ask the accommodation which coastal approach is currently used by guests, then verify with signs and staff on arrival.'
        ]
      },
      {
        heading: '3. Calangute',
        paragraphs: [
          'Calangute suits visitors who want a busier beach base and do not mind a longer transfer. Plan the fort visit as one stop in a coastal day, with agreed transport and a return point.',
          'Do not assume a direct walking link between the two beaches and the fortification; check routes and conditions locally.'
        ]
      },
      {
        heading: '4. Panaji',
        paragraphs: [
          'Panaji works well for a wider North Goa itinerary that includes heritage and city stops. The fort visit becomes a planned transfer rather than a quick walk, so agree the fare and waiting time in advance.',
          'It is a good choice if your trip also includes other independent sites such as Reis Magos or the hilltop Aguada complex.'
        ]
      },
      {
        heading: 'Budget and booking checks',
        bullets: [
          'Compare areas by transport convenience, not by an invented ranking of properties.',
          'Confirm the current rate, taxes, cancellation terms and what the booking includes.',
          'Ask about airport transfers and whether the airport code is GOI or GOX.',
          'Check seasonal operation of any beachside facility you plan to rely on.',
          'Verify the property’s exact location before assuming it is near the lower fortification.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Which area is best for visiting Sinquerim Fort?',
        a: 'Sinquerim and Candolim are the most convenient coastal bases; Calangute suits a busier beach holiday and Panaji a wider North Goa itinerary. Choose by transport and plans rather than by a ranking.'
      },
      {
        q: 'Are there hotels within walking distance?',
        a: 'Some accommodation is in the same coastal area, but no specific property or walking route is verified here. Confirm the location and the permitted approach with the property.'
      },
      {
        q: 'Do you recommend specific hotels?',
        a: 'No. This guide does not publish unverified hotel names, rankings or prices. Check current availability and booking conditions directly.'
      },
      {
        q: 'Should I stay near the airport?',
        a: 'Only if your flight schedule requires it. Confirm whether your airport is GOI (Dabolim) or GOX (Mopa) before choosing a base for arrival or departure.'
      },
      {
        q: 'Is a beachside stay better in the monsoon?',
        a: 'Seasonal conditions can affect beach access and nearby services. Check what is operating during your travel dates before booking around it.'
      }
    ],
    related: ['from-candolim', 'from-calangute', 'from-panaji', 'from-goa-airport', 'itinerary/one-day-north-goa'],
    sources: ['goa', 'maps', 'gt']
  },
  {
    slug: 'activities/water-sports-near-sinquerim',
    group: 'nearby',
    batch: 2,
    priority: 'P1',
    schema: 'article',
    title: 'Water Sports Near Sinquerim Fort: What to Verify Before Booking',
    description:
      'Goa’s official tourism information associates Sinquerim Beach with coastal activities. Learn what to check about operators, authorisation, safety equipment, weather and prices before booking.',
    h1: 'Water sports near Sinquerim Fort',
    kicker: 'Around Sinquerim · Activities',
    lead:
      'Official tourism information describes the Sinquerim Beach area as a place associated with coastal and water-based activities. That is regional information, not confirmation that any operator, activity or price is available on the day you visit.',
    sections: [
      {
        heading: 'What the official information does and does not say',
        paragraphs: [
          'The Government of Goa’s Sinquerim Beach page presents the coast as a tourism area with activities. It does not confirm today’s operating schedule, the identity of an operator, a safety standard or a price for a specific ride.',
          'Treat any "water sports at Sinquerim" claim as a question to verify, not as a booked service. This guide does not name operators or publish package prices.'
        ]
      },
      {
        heading: 'A verification checklist before paying',
        bullets: [
          'Who is the operator, and are they currently authorised and operating at this beach?',
          'Which activity is offered today, and is it running given the sea state and weather?',
          'What exactly does the price include, and are there extra charges for equipment or photos?',
          'What safety equipment, briefing and supervision are provided?',
          'What are the age, health, swimming and weight restrictions?',
          'What happens if conditions change after you have paid?'
        ]
      },
      {
        heading: 'Weather and season',
        paragraphs: [
          'Rough seas, strong wind, heavy rain and poor visibility can stop coastal activities even in peak season. During the monsoon, availability is especially uncertain. Check the actual forecast and marine warnings rather than a seasonal brochure.',
          'Do not let an operator’s enthusiasm override a current warning. A paid activity is a separate commercial decision from a visit to the historic fortification.'
        ]
      },
      {
        heading: 'Keeping activities separate from the fort',
        paragraphs: [
          'Water sports belong to the beach and its operators; the lower shore-side fortification is a historic structure with unconfirmed access. No ticket, permission or safety briefing for one applies to the other.',
          'If conditions prevent an activity, keep the coastal visit flexible: a permitted view of the walls and a separately checked meal or beach stop still make a reasonable half day.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Are water sports available at Sinquerim Beach?',
        a: 'Official tourism information associates the area with coastal activities, but current operation, operators and conditions must be verified on the day.'
      },
      {
        q: 'How much do water sports cost?',
        a: 'No verified prices are published here. Ask the operator for the full price and exactly what it includes before paying.'
      },
      {
        q: 'Is it safe to book on the beach?',
        a: 'Confirm authorisation, safety equipment, briefing, supervision and current sea conditions first. Do not rely on a verbal assurance alone.'
      },
      {
        q: 'Do water sports run during the monsoon?',
        a: 'Availability is uncertain and conditions can be hazardous. Check current warnings and the operator’s status; this guide makes no seasonal promise.'
      },
      {
        q: 'Does an activity ticket include the fort?',
        a: 'No combined arrangement is confirmed. The activity, the beach and the lower fortification are separate decisions.'
      }
    ],
    related: ['nearby/sinquerim-beach', 'entry-fee', 'visitor-guide', 'itinerary/half-day', 'best-time-to-visit'],
    sources: ['goa', 'maps']
  }
];
