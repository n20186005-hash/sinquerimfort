import type { Topic } from './topic-types';

/* Batch 3 / Group D: history, photography, seasons and itineraries (P2). */
export const TOPICS_D: Topic[] = [
  {
    slug: 'history',
    group: 'stories',
    batch: 3,
    priority: 'P2',
    schema: 'article',
    title: 'Sinquerim Fort History: The Lower Aguada Defence Works',
    description:
      'The history behind the lower Sinquerim fortification: its separate ASI listing, the wider Aguada coastal defence system and why the hilltop citadel’s story is not automatically the lower wall’s story.',
    h1: 'Sinquerim Fort history',
    kicker: 'History & itineraries · History',
    lead:
      'The history of Sinquerim Fort is really the history of one part of a larger coastal defence system. This page keeps the documented identity of the lower shore-side walls separate from the better-known hilltop Fort Aguada.',
    sections: [
      {
        heading: 'A separately listed fortification',
        paragraphs: [
          'The Archaeological Survey of India’s protected-monument list for Goa records the "Fortification Wall of Auguda Fortress (Lower)" at Candolim. That separate entry is the most important historical fact for visitors: the lower works are not simply another name for the hilltop citadel.',
          'Traveller spellings vary, and the same stretch of coast appears under Sinquerim Fort, Lower Aguada Fortification and Fort Aguada in different sources. The listed name helps keep the identity clear.'
        ]
      },
      {
        heading: 'The wider Aguada defensive system',
        paragraphs: [
          'Official tourism descriptions present Aguada as a Portuguese defensive complex associated with controlling the Mandovi estuary, guarding against seaborne threats and supplying fresh water to ships. Those functions describe the overall system and its principal hilltop structures.',
          'The lower sea-level works belong to that coastal defence story. Their position at the waterline is the clearest surviving evidence of their role: they face the sea, not the hill.'
        ]
      },
      {
        heading: 'What the history does not tell us',
        bullets: [
          'The history of the whole complex is not an independent construction date for every surviving wall.',
          'It does not confirm which parts of the lower site are currently open or safe to walk on.',
          'It does not establish today’s entrance, timetable or tariff.',
          'It does not make the lighthouse, the former prison or the jail complex part of the lower fortification.'
        ],
        note: 'This guide does not publish unverified construction dates, battles or rulers for the lower wall.'
      },
      {
        heading: 'Reading the site today',
        paragraphs: [
          'Approach the surviving masonry as coastal architecture: laterite stone, a sea-facing line of defence and an exposed shoreline. A historic photograph can show how the wall looked at a particular time, but it cannot prove current access or safety.',
          'For the architectural details, see the architecture guide; for the full lower-versus-upper comparison, see the comparison guide.'
        ]
      },
      {
        heading: 'Sources worth reading in context',
        paragraphs: [
          'Use the ASI list for the separate monument name, Goa Tourism and Incredible India for the wider Aguada complex, and the jail complex’s own site for its independent heritage programme. Read each with its own scope in mind.',
          'Google Maps helps locate the lower site, but a map listing is not a historical source or an official access statement.'
        ]
      }
    ],
    faqs: [
      {
        q: 'When was Sinquerim Fort built?',
        a: 'This guide does not publish a specific construction date for the lower shore-side wall. The wider Aguada complex has a documented Portuguese defensive history, but that is not an independent date for every wall.'
      },
      {
        q: 'Who built Sinquerim Fort?',
        a: 'Official tourism descriptions place the Aguada defensive works in the Portuguese period. For a precise attribution to the lower wall, consult the ASI listing and specialist heritage sources.'
      },
      {
        q: 'Is Sinquerim Fort the same as the hilltop Fort Aguada?',
        a: 'No. The lower fortification wall at Candolim is listed separately. The hilltop citadel, lighthouse and former prison are distinct parts of the wider area.'
      },
      {
        q: 'Why is the lower fort called "Lower Aguada"?',
        a: 'Because it is the sea-level part of the Aguada defensive works, as reflected in the separate ASI listing name for the fortification wall at Candolim.'
      },
      {
        q: 'What was Aguada’s defensive purpose?',
        a: 'Official tourism descriptions associate the complex with controlling the Mandovi estuary, guarding against seaborne threats and supplying fresh water to ships. Those functions describe the wider system.'
      }
    ],
    related: ['architecture', 'lower-vs-upper-aguada', 'nearby/fort-aguada', 'nearby/aguad-jail-museum', 'things-to-do'],
    sources: ['asi', 'gt', 'ii', 'maps']
  },
  {
    slug: 'architecture',
    group: 'stories',
    batch: 3,
    priority: 'P2',
    schema: 'article',
    title: 'Sinquerim Fort Architecture: Laterite Walls and Coastal Defence',
    description:
      'An architectural reading of the lower Sinquerim fortification: laterite stone, a sea-facing wall, the relationship between upper and lower works, and what to observe from a permitted viewpoint.',
    h1: 'Sinquerim Fort architecture',
    kicker: 'History & itineraries · Architecture',
    lead:
      'The lower Sinquerim fortification is best understood through its material and its position. This page describes what can be observed from a permitted viewpoint without claiming measured dimensions, hidden chambers or unverified restoration dates.',
    sections: [
      {
        heading: 'Laterite and the sea-facing line',
        paragraphs: [
          'The surviving wall is built from the reddish laterite stone common along this coast. Its colour, weathering and blockwork are visible even from a distance, and they give the structure much of its character.',
          'The wall faces the Arabian Sea. That orientation is the architectural point: the lower works guard the shoreline and the water approach, while the hilltop citadel occupies a different, elevated position.'
        ]
      },
      {
        heading: 'Upper and lower works as one system, not one building',
        bullets: [
          'The hilltop citadel provides elevation, enclosure and the well-known landmarks above.',
          'The lower sea-level wall addresses the shoreline and the waterline.',
          'The lighthouse and former prison belong to the wider hilltop area, not to the lower wall.',
          'The ASI list records the lower fortification wall separately at Candolim.'
        ]
      },
      {
        heading: 'What visitors can actually observe',
        paragraphs: [
          'From a permitted public route, look at the wall’s line, its stone coursing, the way it meets the shore and how the sea has weathered the surface. A wider frame that includes the horizon usually explains the design better than a close-up of a single block.',
          'Do not climb onto the masonry to inspect it. Wet laterite is slippery, edges can be unstable, and current signs and staff instructions decide where you may stand.'
        ]
      },
      {
        heading: 'What this guide does not claim',
        paragraphs: [
          'No unverified wall height, length, bastion count, tunnel, chamber or construction date is published here. A historic photograph is useful for surface detail but not for measurement or for proving current access.',
          'For the documented identity and the wider defensive history, see the history and comparison guides; for photography, see the photos and sunset guides.'
        ]
      }
    ],
    faqs: [
      {
        q: 'What is Sinquerim Fort made of?',
        a: 'The lower sea-facing wall is built from laterite stone, the reddish local material visible in the existing photograph.'
      },
      {
        q: 'How tall or long is the wall?',
        a: 'No measured dimensions are published here. This guide describes observable material and orientation rather than unverified numbers.'
      },
      {
        q: 'Is the lighthouse part of the lower fort?',
        a: 'No. The lighthouse and former prison belong to the separate hilltop area of the Aguada complex.'
      },
      {
        q: 'Are there tunnels or chambers to explore?',
        a: 'No such features are confirmed by this guide, and access to the structure is not verified. Do not enter restricted or unstable areas.'
      },
      {
        q: 'Can I walk along the top of the wall?',
        a: 'No. Do not climb walls or cross barriers; wet stone and exposed sea edges are hazardous.'
      }
    ],
    related: ['history', 'lower-vs-upper-aguada', 'photos', 'things-to-do', 'walking-access'],
    sources: ['asi', 'gt', 'ii', 'maps']
  },
  {
    slug: 'sunset-guide',
    group: 'stories',
    batch: 3,
    priority: 'P2',
    schema: 'article',
    title: 'Sinquerim Fort Sunset Guide: Light, Viewpoints and Safety',
    description:
      'A sunset guide for the lower Sinquerim Fort: low light on the laterite walls, westward sea views, photographic framing and the access and safety checks that matter more than the hour.',
    h1: 'Sinquerim Fort sunset guide',
    kicker: 'History & itineraries · Photography',
    lead:
      'A west-facing sea wall is naturally associated with sunset. This page explains how to plan for the light without treating it as permission to stay after dark or to enter an unconfirmed part of the site.',
    sections: [
      {
        heading: 'Why the light works here',
        paragraphs: [
          'Low afternoon sun warms the reddish laterite and gives long shadows across the masonry, while the open Arabian Sea horizon provides a clean background. Overcast days soften contrast; harsh midday light tends to flatten the stone’s texture.',
          'The best viewpoint is a permitted public route with the wall and the shoreline in the same frame. No specific platform, wall or standing position is confirmed as open by this guide.'
        ]
      },
      {
        heading: 'A short shot list',
        bullets: [
          'The wall line against the sea, with enough horizon for scale.',
          'Laterite texture in low, raking light.',
          'The shoreline leading towards the fortification.',
          'Wide coastal views that include the changing sky.',
          'People only with permission; never stage a shot on a barrier or wall.'
        ]
      },
      {
        heading: 'Timing without a fixed clock',
        paragraphs: [
          'This guide does not publish a sunset time. Check the day’s local time and the forecast, and arrive with enough daylight to confirm the permitted approach and to return by the same route.',
          'Light or a good photograph is not permission to remain after dark. Current signs, staff instructions and barriers decide access, and no manager-confirmed timetable for the lower site has been established.'
        ]
      },
      {
        heading: 'Conditions that can spoil the plan',
        paragraphs: [
          'Rough seas, spray, wet stone and monsoon rain make an exposed wall hazardous. Keep back from edges, wear shoes with grip and carry a light layer if the wind picks up.',
          'If conditions are poor, treat the visit as a scouting walk and return another day. The photos guide and the monsoon guide cover those alternatives in more detail.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is Sinquerim Fort good for sunset?',
        a: 'The west-facing sea wall can give warm low light and open horizon views. Use a permitted viewpoint and check current access and sea conditions first.'
      },
      {
        q: 'What time is sunset?',
        a: 'No fixed sunset time is published here. Check the local time for your date and arrive with enough daylight for the return.'
      },
      {
        q: 'Can I stay after dark for night photos?',
        a: 'No. No manager-confirmed timetable exists for the lower site, and sunset is not permission to remain. Follow signs and staff instructions.'
      },
      {
        q: 'Where is the best sunset viewpoint?',
        a: 'A permitted public route that frames the wall with the shoreline and horizon. No specific wall or platform is confirmed as open.'
      },
      {
        q: 'Is it safe at sunset in the monsoon?',
        a: 'Rough seas and wet stone can make it inadvisable. Check the forecast and marine warnings and keep a flexible plan.'
      }
    ],
    related: ['photos', 'best-time-to-visit', 'monsoon-guide', 'walking-access', 'architecture'],
    sources: ['maps', 'goa', 'asi']
  },
  {
    slug: 'monsoon-guide',
    group: 'stories',
    batch: 3,
    priority: 'P2',
    schema: 'article',
    title: 'Visiting Sinquerim Fort During Monsoon: Risks and Checks',
    description:
      'A monsoon guide for the lower Sinquerim Fort: rough seas, wet laterite stone, strong winds, changing access and the checks that should decide whether to visit.',
    h1: 'Visiting Sinquerim Fort during monsoon',
    kicker: 'History & itineraries · Seasons',
    lead:
      'An exposed sea wall behaves differently in the monsoon. This page explains the practical risks and the checks to make, without promising that any route, opening or activity continues through the season.',
    sections: [
      {
        heading: 'What changes on an exposed coast',
        bullets: [
          'Surf and spray reach further; sea edges become more hazardous.',
          'Laterite stone becomes slippery, and sand or paths can be washed out.',
          'Strong wind and sudden rain reduce visibility and make equipment hard to handle.',
          'Beachside services, activities and approaches may not operate as usual.',
          'Daylight can be limited by heavy cloud.'
        ]
      },
      {
        heading: 'Checks before you go',
        paragraphs: [
          'Read the actual forecast and marine warnings for the day, then confirm the current entrance and permitted approach locally. No manager-confirmed timetable for the lower site has been established, and no monsoon opening is promised here.',
          'If warnings, rough seas or a blocked approach are present, choose a permitted distant viewpoint or postpone the coastal stop. A historic photograph from a calm day is not evidence that the route is safe now.'
        ]
      },
      {
        heading: 'What to carry',
        paragraphs: [
          'Wear shoes with grip, carry water and protect your phone and camera from spray. A light rain layer is useful, but an umbrella is a poor choice in strong wind on an exposed edge.',
          'Keep a flexible return plan and enough daylight. If the weather turns, leave by the same permitted route rather than looking for a shorter one.'
        ]
      },
      {
        heading: 'A workable monsoon itinerary',
        paragraphs: [
          'Put timed, indoor or separately ticketed venues on their own confirmed schedules, and keep the fortification as a short optional stop. The Aguad Port & Jail Complex, the hilltop fort and local food are independent destinations with their own current arrangements.',
          'For the general seasonal picture, see the best-time guide; for light and framing in difficult weather, see the photos and sunset guides.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is Sinquerim Fort open during the monsoon?',
        a: 'No monsoon opening is confirmed by this guide. Check current signs, staff instructions, sea conditions and warnings on the day.'
      },
      {
        q: 'Is it safe to visit in the rain?',
        a: 'Wet laterite stone, surf and strong wind can make an exposed wall hazardous. Keep back from edges and be prepared to change plans.'
      },
      {
        q: 'Do water sports operate in the monsoon?',
        a: 'Availability is uncertain and conditions can be hazardous. Check the operator’s status and current marine warnings; see the water-sports guide.'
      },
      {
        q: 'What should I wear?',
        a: 'Shoes with grip, water, sun and rain protection as appropriate, and a way to keep your phone dry. Avoid relying on an umbrella in strong wind.'
      },
      {
        q: 'Is there a good indoor alternative nearby?',
        a: 'The Aguad Port & Jail Complex and the hilltop fort are separate venues with their own hours and charges. Check each one’s current information before adding it to your day.'
      }
    ],
    related: ['best-time-to-visit', 'walking-access', 'photos', 'activities/water-sports-near-sinquerim', 'nearby/aguad-jail-museum'],
    sources: ['goa', 'maps', 'gt']
  },
  {
    slug: 'itinerary/half-day',
    group: 'stories',
    batch: 3,
    priority: 'P2',
    schema: 'article',
    title: 'Half-Day Trip to Sinquerim Fort: A Flexible Coastal Plan',
    description:
      'A half-day plan for the lower Sinquerim Fort and the adjacent coast: what to confirm first, how to order flexible stops, and how to keep food, parking and tickets as separate decisions.',
    h1: 'Half-day trip to Sinquerim Fort',
    kicker: 'History & itineraries · Itinerary',
    lead:
      'The lower fortification does not need a rigid schedule. This half-day plan is built around a few checks and flexible stops, with no invented journey times, fixed walking durations or assumed tickets.',
    sections: [
      {
        heading: 'Step 1 · Confirm before leaving',
        bullets: [
          'Identify the lower Candolim site with the Plus Code FQX8+9HJ.',
          'Check the current entrance and the day’s access; no timetable is manager-confirmed.',
          'Check whether any charge applies; no official tariff is established.',
          'Check the forecast, sea state and marine warnings.',
          'Agree a permitted drop-off or parking point and a return time with your driver.'
        ]
      },
      {
        heading: 'Step 2 · The fortification stop',
        paragraphs: [
          'Keep this as a short, observant visit: the sea-facing laterite wall, the coastal setting and a permitted viewpoint. Follow signs and barriers, keep back from wet edges and do not climb the masonry.',
          'If safe access cannot be confirmed, view the wall from a permitted public route and move on. A historic photograph is not evidence that a particular path is open.'
        ]
      },
      {
        heading: 'Step 3 · One or two independent additions',
        bullets: [
          'Sinquerim Beach or Candolim Beach as a separate coastal stop, conditions permitting.',
          'A meal in the Candolim area, with the venue’s opening status and menu confirmed.',
          'Hilltop Fort Aguada as a timed, separately checked visit with its own timetable.',
          'Aguad Port & Jail Complex as a booked heritage experience with its own charges.'
        ]
      },
      {
        heading: 'Step 4 · The return',
        paragraphs: [
          'Leave enough daylight to return by the same permitted route and meet your driver at the agreed point. In the monsoon or at low light, shorten the plan rather than improvising a new path.',
          'For a full day with more stops, see the one-day North Goa itinerary. For a family group or a couples’ outing, see the two audience-specific itineraries.'
        ]
      }
    ],
    faqs: [
      {
        q: 'How long should a half-day visit take?',
        a: 'No fixed duration is published here. Keep the fortification stop flexible and let confirmed access, sea conditions and your chosen additions decide.'
      },
      {
        q: 'Can I fit the hilltop fort into a half day?',
        a: 'Yes as a separate, independently checked stop. Confirm its own timetable and any ticket; do not assume a shared entrance or a short walk.'
      },
      {
        q: 'Should I book a water-sports activity too?',
        a: 'Only after checking the operator, current conditions and the full price. It is a separate commercial decision, not part of the fort visit.'
      },
      {
        q: 'What if the lower site is not accessible?',
        a: 'Use a permitted distant viewpoint, then continue with an independent beach, meal or heritage stop. The plan is designed to stay flexible.'
      }
    ],
    related: ['itinerary/one-day-north-goa', 'itinerary/family-trip', 'visitor-guide', 'location', 'nearby/sinquerim-beach'],
    sources: ['maps', 'goa', 'gt', 'jail']
  },
  {
    slug: 'itinerary/one-day-north-goa',
    group: 'stories',
    batch: 3,
    priority: 'P2',
    schema: 'article',
    featured: true,
    title: 'One-Day North Goa Fort & Beach Itinerary: Sinquerim, Aguada and the Coast',
    description:
      'A full-day North Goa plan linking the lower Sinquerim Fort, nearby beaches, hilltop Fort Aguada and meal stops, with separate self-drive and taxi versions and no invented travel times.',
    h1: 'One-day North Goa fort & beach itinerary',
    kicker: 'History & itineraries · Full-day plan',
    lead:
      'A North Goa day works best when the coastline’s separate sites stay separate. This itinerary links the lower Sinquerim fortification with beaches, the hilltop Aguada complex and meal stops, while leaving every timetable, ticket and route to be confirmed on the day.',
    sections: [
      {
        heading: 'The principle behind this plan',
        paragraphs: [
          'The lower sea-level fortification, Sinquerim Beach, Candolim Beach, hilltop Fort Aguada, the lighthouse, the former prison and the Aguad Port & Jail Complex are not one attraction. They have different entrances, operators, public information and, in several cases, different published schedules.',
          'So this is not a minute-by-minute tour. It is an order of decisions: confirm the lower site first, keep it flexible, and place any timed or ticketed venue on its own independently verified schedule.'
        ],
        note:
          'This guide publishes no fixed journey times, distances, ticket prices or combined passes. Confirm them with the relevant operator.'
      },
      {
        heading: 'Before the day starts',
        bullets: [
          'Save the Plus Code FQX8+9HJ and the Google Maps listing for the lower Candolim site.',
          'Check the forecast, sea state and marine warnings for the coastal stops.',
          'Check the hilltop Fort Aguada’s current timetable and any ticket with its own source.',
          'Check whether a jail-complex heritage walk or exhibition needs a booking.',
          'Confirm which airport applies to your trip if this is an arrival or departure day: GOI at Dabolim or GOX at Mopa.',
          'Agree the vehicle, fare, waiting time and final pick-up point with your driver.'
        ]
      },
      {
        heading: 'Morning · the lower fortification first',
        paragraphs: [
          'Start with the lower shore-side walls while the light is softer and you have the whole day to adapt. From a permitted drop-off, confirm the current entrance and the day’s access, then take a short, observant look at the sea-facing laterite wall and the coastal setting.',
          'Keep back from wet edges, surf and unstable stone. If signs, barriers or staff instructions restrict the approach, use a permitted public viewpoint and move on. A historic photograph is not evidence that a route is open now.'
        ]
      },
      {
        heading: 'Late morning · one coastal stop',
        paragraphs: [
          'Add Sinquerim Beach or Candolim Beach as a separate destination, subject to sea conditions and current access. If you are considering a water activity, check the operator, its authorisation, safety equipment and full price before paying; see the water-sports guide.',
          'Do not assume a shared ticket, a shared entrance or a fixed short link between the beach and the fortification. Keep the return route and the driver’s meeting point agreed.'
        ]
      },
      {
        heading: 'Midday · lunch as an independent decision',
        paragraphs: [
          'Plan a meal in the Candolim area using the restaurants guide: confirm the venue is open, ask what is on the menu that day and raise any vegetarian, vegan, halal or allergy-aware requirements directly with the kitchen.',
          'Regional options such as Goan fish curry, xacuti or bebinca are described in the Goan food guide, but no specific venue or price is verified here. Allow time for a shaded break; an exposed coastal morning is tiring in the heat.'
        ]
      },
      {
        heading: 'Afternoon · the hilltop and heritage options',
        paragraphs: [
          'Choose one timed item rather than trying to fit everything. Goa Tourism publishes 09:30–18:00 for hilltop Fort Aguada; confirm the current schedule and any ticket before going. The lighthouse and former prison have their own arrangements, and the Aguad Port & Jail Complex runs its own exhibitions and heritage walks.',
          'Keep the identity straight: the 09:30–18:00 timetable is the hilltop fort’s, not the lower shore-side walls’. The comparison guide and the jail-complex guide explain the difference in detail.'
        ]
      },
      {
        heading: 'Two versions of the same day',
        bullets: [
          'Taxi version: agree a multi-stop half-day or full-day fare, one permitted drop-off for the lower site, and a fixed final pick-up. Ask the driver to wait or return at agreed points; do not rely on app availability at the shoreline.',
          'Self-drive version: plan permitted parking for each stop before leaving, keep beach and residential access clear, and check licence, helmet and insurance conditions with the rental operator. Avoid driving onto sand or restricted tracks.',
          'Both versions: keep the lower fortification flexible, put timed venues on their own schedules, and leave enough daylight for the return by a permitted route.'
        ]
      },
      {
        heading: 'Late afternoon · light, then the return',
        paragraphs: [
          'If conditions and confirmed access allow, low afternoon light on the laterite wall makes a pleasant final look; the sunset guide covers framing and safety. Sunset is not permission to remain after dark.',
          'Return by the agreed route with enough daylight. If the monsoon, rough seas or a blocked approach have shortened the coastal part of the day, keep the meal or heritage stop and treat the fortification as a view rather than an entry.'
        ]
      },
      {
        heading: 'Where each guide fits',
        paragraphs: [
          'Use timings and entry-fee for the two unconfirmed questions, location and walking-access for the approach, lower-vs-upper-aguada for site identity, and the nearby-beach, food, stay and activity guides for the independent stops. The half-day, family and couples itineraries offer shorter variants.',
          'Every one of those pages keeps the same rule: information that has not been confirmed is described as unconfirmed, not filled in with a convenient guess.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Can I cover Sinquerim Fort and Fort Aguada in one day?',
        a: 'Yes as separate stops. Check the hilltop fort’s own timetable and any ticket, and keep the lower shore-side fortification as a flexible coastal stop.'
      },
      {
        q: 'How long does the full itinerary take?',
        a: 'No fixed duration or journey time is published here. Decide based on confirmed access, sea conditions, your chosen venues and the transport you arrange.'
      },
      {
        q: 'Should I hire a taxi or drive myself?',
        a: 'A taxi removes the parking question and suits several stops; self-drive offers flexibility if you have permitted parking and appropriate rental conditions. Both need an agreed return plan.'
      },
      {
        q: 'Is there a combined ticket for all the forts?',
        a: 'No combined pass is confirmed. Treat the hilltop fort, the jail complex, the lighthouse and any activity as separate bookings or charges.'
      },
      {
        q: 'What is the best order for the day?',
        a: 'A flexible lower-site stop first, then one beach stop, a meal, and one timed hilltop or heritage venue. Adjust for sea conditions, daylight and confirmed hours.'
      },
      {
        q: 'Can I include water sports?',
        a: 'Only after checking the operator, current authorisation, safety equipment, price and weather. It is a separate commercial activity, not part of the fort visit.'
      },
      {
        q: 'What if it rains?',
        a: 'Keep a timed indoor or heritage alternative and shorten the coastal portion. See the monsoon guide for the checks that should decide whether to visit the wall at all.'
      }
    ],
    related: [
      'itinerary/half-day',
      'lower-vs-upper-aguada',
      'nearby/fort-aguada',
      'nearby/aguad-jail-museum',
      'nearby/sinquerim-beach',
      'food/restaurants-near-sinquerim-fort',
      'activities/water-sports-near-sinquerim',
      'sunset-guide'
    ],
    sources: ['maps', 'gt', 'goa', 'jail', 'ii', 'asi']
  },
  {
    slug: 'itinerary/family-trip',
    group: 'stories',
    batch: 3,
    priority: 'P2',
    schema: 'article',
    title: 'Sinquerim Fort Family Trip Guide: A Short, Flexible Coastal Stop',
    description:
      'Planning a family visit to the lower Sinquerim Fort? Focus on safe permitted viewpoints, flexible timing, sun and sea checks, and realistic expectations about facilities and accessibility.',
    h1: 'Sinquerim Fort family trip guide',
    kicker: 'History & itineraries · Families',
    lead:
      'For a family group, the lower fortification is best treated as a short coastal look rather than a long exploratory walk. This page covers the practical decisions without promising facilities, accessible paths or a fixed duration.',
    sections: [
      {
        heading: 'Set expectations before you leave',
        paragraphs: [
          'The site is an exposed historic sea wall, not a managed attraction with confirmed play areas, toilets, shade or step-free routes. No accessibility features or on-site facilities are verified here.',
          'Explain to children that the wall is something to look at, not to climb. A historic photograph showing people on the masonry is not evidence that it is safe or permitted now.'
        ]
      },
      {
        heading: 'Safety on the approach',
        bullets: [
          'Use only a currently permitted drop-off and approach; confirm with signs and staff.',
          'Keep everyone back from wet laterite stone, surf and exposed sea edges.',
          'Wear shoes with grip and carry water and sun protection.',
          'Check the forecast, sea state and marine warnings; shorten the visit in the monsoon.',
          'Keep the group together and leave enough daylight to return by the same route.'
        ]
      },
      {
        heading: 'A family-friendly shape for the outing',
        paragraphs: [
          'Plan a short fortification stop, then move to an independent beach or meal break with confirmed facilities. Keep the timing flexible: heat, crowds and tired children are better handled by an adjustable plan than a fixed circuit.',
          'The half-day itinerary provides a simple sequence, and the visitor guide has a carry-and-check list you can use on your phone.'
        ]
      },
      {
        heading: 'Nearby arrangements to check separately',
        paragraphs: [
          'Restaurants, beach shacks, stays and any water activity are separate services. Confirm opening status, menus, dietary needs, prices and safety provisions directly with each operator before involving a group.',
          'If anyone in the group has mobility, dietary or medical needs, check those with the relevant venue and with the approach itself; this guide does not confirm step-free access.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is Sinquerim Fort suitable for children?',
        a: 'It can work as a short, supervised coastal stop from a permitted viewpoint. Uneven ground, wet stone and exposed sea edges require care, and no child-specific facilities are confirmed.'
      },
      {
        q: 'Is the site wheelchair or stroller accessible?',
        a: 'No step-free route or accessibility feature is verified here. Check the current approach and ask locally before planning around a stroller or wheelchair.'
      },
      {
        q: 'Are there toilets or shade nearby?',
        a: 'No on-site facilities are confirmed. Plan breaks in the Candolim area as separate stops and check their current availability.'
      },
      {
        q: 'How long should a family visit take?',
        a: 'Keep it short and flexible. This guide does not publish a fixed duration; let sea conditions, heat and the group decide.'
      },
      {
        q: 'Can children climb on the walls?',
        a: 'No. Do not climb walls or cross barriers. Follow current signs and staff instructions and keep back from the sea edge.'
      }
    ],
    related: ['itinerary/half-day', 'visitor-guide', 'walking-access', 'food/restaurants-near-sinquerim-fort', 'nearby/sinquerim-beach'],
    sources: ['maps', 'goa', 'asi']
  },
  {
    slug: 'itinerary/couples',
    group: 'stories',
    batch: 3,
    priority: 'P2',
    schema: 'article',
    title: 'Sinquerim Fort for Couples: Sea Views, Photos and a Slow Half Day',
    description:
      'A couples’ guide to the lower Sinquerim Fort: sea-facing views, low-light photography, a relaxed meal stop and a flexible route, with no unverified venue or price claims.',
    h1: 'Sinquerim Fort for couples',
    kicker: 'History & itineraries · Couples',
    lead:
      'The appeal of the lower fortification for two people is simple: a sea-facing laterite wall, open horizon and changing light. This page shapes a relaxed half day around that, without inventing romantic venues or fixed timings.',
    sections: [
      {
        heading: 'Keep the fortification stop unhurried',
        paragraphs: [
          'Arrive with a flexible window rather than a fixed slot. Confirm the current entrance and permitted approach, then take time to look at the wall, the shoreline and the horizon from a safe viewpoint.',
          'No specific bench, platform or wall-top viewpoint is confirmed as open. Do not climb the masonry or cross barriers for a photograph.'
        ]
      },
      {
        heading: 'Light and photographs',
        paragraphs: [
          'Low afternoon light warms the laterite and gives long views over the Arabian Sea; overcast conditions soften contrast. The sunset guide and the photos guide cover framing, safety and the limits of what a historic image can show.',
          'Sunset is not permission to stay after dark. Leave enough daylight to return by the same permitted route and agree the pick-up point in advance.'
        ]
      },
      {
        heading: 'A relaxed sequence',
        bullets: [
          'A short coastal stop at the lower fortification, conditions permitting.',
          'One independent beach stop at Sinquerim or Candolim.',
          'A meal or café break in the Candolim area, with the venue confirmed that day.',
          'An optional timed heritage venue such as the hilltop fort or the jail complex, checked separately.'
        ]
      },
      {
        heading: 'Practical limits worth knowing',
        paragraphs: [
          'Shade, seating, toilets and on-site services are not verified, and rough seas or monsoon rain can change the plan quickly. Carry water, wear shoes with grip and keep a fallback.',
          'Restaurants, shacks, stays and activities are independent commercial services; confirm their current status, menu and prices directly. This guide does not name or rank venues.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is Sinquerim Fort a good spot for couples?',
        a: 'The sea-facing wall and open horizon make a pleasant short coastal stop. Keep it flexible and use only a permitted, safe viewpoint.'
      },
      {
        q: 'Is sunset the best time to visit together?',
        a: 'Low light can be attractive, but sunset is not permission to remain after dark. Check current access and leave enough daylight for the return.'
      },
      {
        q: 'Can we combine it with dinner nearby?',
        a: 'Yes as a separate stop. Confirm the venue’s opening status, menu and any dietary needs on the day; no specific restaurant is verified here.'
      },
      {
        q: 'Are there quiet spots on the wall?',
        a: 'No specific viewpoint or seating area is confirmed. Follow signs and staff instructions and avoid climbing or crossing barriers.'
      }
    ],
    related: ['itinerary/half-day', 'sunset-guide', 'photos', 'food/restaurants-near-sinquerim-fort', 'nearby/sinquerim-beach'],
    sources: ['maps', 'goa', 'asi']
  }
];
