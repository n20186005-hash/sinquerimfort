export type TopicGroup = 'visit' | 'transport' | 'nearby' | 'stories';
export type TopicSchema = 'article' | 'attraction' | 'photos';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  batch: 1 | 2 | 3;
  priority: 'P0' | 'P1' | 'P2';
  schema: TopicSchema;
  title: string;
  description: string;
  h1: string;
  kicker: string;
  lead: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
  sources: string[];
  featured?: boolean;
  detail?: AttractionDetail;
}

export interface AttractionDetail {
  tagline?: string;
  hoursLabel?: string;
  ticketLabel?: string;
  highlights?: string[];
  about?: string;
  tips?: string[];
  transport?: string;
  transportBullets?: string[];
  charms?: { history?: string; architecture?: string; culture?: string; experience?: string };
  routeSteps?: string[];
  photoSpots?: string[];
  stayTips?: string;
  goodToKnow?: string[];
}

export const GROUP_ORDER: TopicGroup[] = ['visit', 'transport', 'nearby', 'stories'];

export const GROUP_LABELS: Record<TopicGroup, string> = {
  visit: 'Before you go',
  transport: 'Getting here',
  nearby: 'Around Sinquerim',
  stories: 'History & itineraries'
};

export const GROUP_INTROS: Record<TopicGroup, string> = {
  visit: 'Timings, tickets, location and on-site practicalities.',
  transport: 'Routes from North Goa bases, airports and the final walk.',
  nearby: 'Beaches, food, stays, heritage venues and coastal activities.',
  stories: 'History, architecture, photography, seasons and trip plans.'
};

export const CHECKED = '5 November 2026';

export const TOPIC_UI = {
  home: 'Home',
  guides: 'Guides',
  breadcrumbGuides: 'Sinquerim Fort guides',
  relatedTitle: 'Related guides',
  faqTitle: 'Questions about this guide',
  sourcesTitle: 'Sources & how to verify',
  verifyTitle: 'What still needs confirming',
  verifyNote:
    'This independent guide does not publish unconfirmed tariffs, gate hours or access rules. Check the current entrance, sea conditions and any charges with the site manager or the relevant operator before travelling.',
  independentTitle: 'About this guide',
  independentText:
    'An independent, noncommercial visitor guide. It is not the site manager, a ticket service or an official tourism portal. Upper Fort Aguada, the lighthouse, the jail complex and the beaches are separate destinations with their own access arrangements.',
  checkedLabel: 'Information checked',
  mapsCta: 'Open Sinquerim Fort in Google Maps ↗',
  plusCta: 'Search by Plus Code ↗',
  backCta: '← Back to the main Sinquerim Fort guide',
  allGuidesCta: 'Browse all 35 guides ↗',
  quickTitle: 'Quick facts',
  quickLocation: 'Location',
  quickCategory: 'Category',
  quickVerify: 'Verify before travel',
  quickMaps: 'Map',
  photosNote:
    'Historic photograph, not confirmation of current access. Full attribution appears on the main guide.'
};

export const HI_TOPIC_TEASER = {
  title: 'विस्तृत गाइड (अंग्रेज़ी में)',
  text: 'समय, टिकट, स्थान, मार्ग, आसपास के स्थल और यात्रा योजनाओं पर 35 अलग-अलग गाइड अंग्रेज़ी में उपलब्ध हैं।',
  cta: 'अंग्रेज़ी गाइड देखें ↗'
};
