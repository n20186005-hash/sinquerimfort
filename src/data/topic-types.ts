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

export const GROUP_LABELS_HI: Record<TopicGroup, string> = {
  visit: 'जाने से पहले',
  transport: 'यहाँ पहुँचना',
  nearby: 'सिंकेरिम के आसपास',
  stories: 'इतिहास और यात्रा-योजना'
};

export const GROUP_INTROS: Record<TopicGroup, string> = {
  visit: 'Timings, tickets, location and on-site practicalities.',
  transport: 'Routes from North Goa bases, airports and the final walk.',
  nearby: 'Beaches, food, stays, heritage venues and coastal activities.',
  stories: 'History, architecture, photography, seasons and trip plans.'
};

export const GROUP_INTROS_HI: Record<TopicGroup, string> = {
  visit: 'आने से पहले के फ़ैसले: समय, शुल्क, स्थान और अंतिम पहुँच।',
  transport: 'उत्तर गोवा के ठिकानों, हवाई अड्डों और आख़िरी पैदल चलने तक के रास्ते।',
  nearby: 'समुद्र तट, भोजन, ठहरने के विकल्प, धरोहर स्थल और तटीय गतिविधियाँ।',
  stories: 'इतिहास, वास्तुकला, फ़ोटोग्राफ़ी, मौसम और यात्रा की योजना।'
};

export const CHECKED = '5 November 2026';
export const CHECKED_HI = '5 नवंबर 2026';

export const TOPIC_UI = {
  home: 'Home',
  guides: 'Guides',
  breadcrumbGuides: 'Sinquerim Fort guides',
  relatedTitle: 'Related guides',
  faqTitle: 'Questions about this guide',
  faqEyebrow: 'FAQ',
  relatedEyebrow: 'Related',
  sourcesTitle: 'Sources & how to verify',
  sourcesEyebrow: 'Sources',
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
  quickCategoryValue: 'Fort · Lower Aguada fortification',
  quickVerify: 'Verify before travel',
  quickMaps: 'Map',
  photosNote:
    'Historic photograph, not confirmation of current access. Full attribution appears on the main guide.',
  // Attraction page chrome
  skip: 'Skip to content',
  switchLabel: 'हिन्दी',
  switchAria: 'Switch to Hindi',
  labelRating: 'Rating',
  ratingNote: 'Traveller reviews are shared on Google Maps — check the latest rating ↗',
  labelHours: 'Hours',
  labelTickets: 'Tickets',
  overview: 'Overview',
  highlightsEyebrow: 'Highlights',
  highlightsTitle: 'What makes it worth the stop',
  about: 'About',
  aboutTitle: 'In a few lines',
  tableLocation: 'Location',
  tableCategory: 'Category',
  tableHours: 'Opening hours',
  tableTickets: 'Tickets',
  tableVerify: 'Verify before travel',
  tableMap: 'Map',
  verifyValue: 'Entrance, access, timings and any charge',
  tips: 'Visitor tips',
  tipsTitle: 'How to plan the visit',
  charms: 'Discover its appeal',
  charmsTitle: 'History, architecture, culture',
  route: 'Suggested route',
  routeTitle: 'A simple way to see it',
  photoSpots: 'Photo spots',
  photoSpotsTitle: 'Where to point the camera',
  stay: 'Where to stay',
  stayTitle: 'Basing yourself nearby',
  stayCta: 'Compare base areas ↗',
  reviews: 'Visitor reviews',
  reviewsTitle: 'What travellers say',
  reviewsText:
    'Travellers share their own ratings and experiences on Google Maps. This independent guide does not publish or reproduce individual reviews, and it does not confirm current scores. Open the map listing to read them and to see the latest snapshot.',
  reviewsCta: 'Read reviews on Google Maps ↗',
  gettingHere: 'Getting here',
  addressMap: 'Address & map',
  mapDirections: 'Map & directions ↗',
  goodToKnow: 'Good to know',
  goodToKnowTitle: 'Before you set off',
  ogAlt: 'Sinquerim Fort in Candolim',
  ogAltArea: 'Sinquerim area, Goa',
  photoName: 'Sinquerim Fort sea-facing laterite wall',
  privacyLabel: 'Privacy Policy',
  termsLabel: 'Terms of Service',
  cookiesLabel: 'Cookie Settings'
};

export const TOPIC_UI_HI: Record<string, string> = {
  home: 'होम',
  guides: 'गाइड',
  breadcrumbGuides: 'सिंकेरिम किला गाइड',
  relatedTitle: 'संबंधित गाइड',
  faqTitle: 'इस गाइड के बारे में अक्सर पूछे जाने वाले प्रश्न',
  faqEyebrow: 'प्रश्न',
  relatedEyebrow: 'संबंधित',
  sourcesTitle: 'स्रोत और सत्यापन',
  sourcesEyebrow: 'स्रोत',
  verifyTitle: 'अभी क्या पुष्टि बाक़ी है',
  verifyNote:
    'यह स्वतंत्र गाइड अपुष्ट शुल्क, प्रवेश-समय या पहुँच-नियम प्रकाशित नहीं करता। यात्रा से पहले वर्तमान प्रवेश, समुद्र-स्थिति और किसी भी शुल्क की पुष्टि स्थल प्रबंधक या संबंधित संचालक से कर लें।',
  independentTitle: 'इस गाइड के बारे में',
  independentText:
    'यह एक स्वतंत्र, ग़ैर-व्यावसायिक पर्यटक गाइड है। यह स्थल प्रबंधक, टिकट सेवा या आधिकारिक पर्यटन पोर्टल नहीं है। ऊपरी अगुआदा क़िला, लाइटहाउस, जेल परिसर और समुद्र तट अलग-अलग गंतव्य हैं जिनकी अपनी पहुँच-व्यवस्था है।',
  checkedLabel: 'जाँची गई जानकारी',
  mapsCta: 'Google मानचित्र में सिंकेरिम किला खोलें ↗',
  plusCta: 'प्लस कोड से खोजें ↗',
  backCta: '← मुख्य सिंकेरिम किला गाइड पर वापस',
  allGuidesCta: 'सभी 35 गाइड देखें ↗',
  quickTitle: 'त्वरित तथ्य',
  quickLocation: 'स्थान',
  quickCategory: 'श्रेणी',
  quickCategoryValue: 'किला · निचली अगुआदा क़िलाबंदी',
  quickVerify: 'यात्रा से पहले सत्यापित करें',
  quickMaps: 'मानचित्र',
  photosNote:
    'ऐतिहासिक फ़ोटो, वर्तमान पहुँच की पुष्टि नहीं। पूरा श्रेय मुख्य गाइड पर दिया गया है।',
  skip: 'मुख्य सामग्री पर जाएँ',
  switchLabel: 'English',
  switchAria: 'Switch to English',
  labelRating: 'रेटिंग',
  ratingNote: 'यात्रियों की समीक्षाएँ Google मानचित्र पर साझा होती हैं — नवीनतम रेटिंग देखें ↗',
  labelHours: 'समय',
  labelTickets: 'टिकट',
  overview: 'अवलोकन',
  highlightsEyebrow: 'मुख्य आकर्षण',
  highlightsTitle: 'इसे रुकने लायक क्या बनाता है',
  about: 'परिचय',
  aboutTitle: 'कुछ पंक्तियों में',
  tableLocation: 'स्थान',
  tableCategory: 'श्रेणी',
  tableHours: 'खुलने का समय',
  tableTickets: 'टिकट',
  tableVerify: 'यात्रा से पहले सत्यापित करें',
  tableMap: 'मानचित्र',
  verifyValue: 'प्रवेश, पहुँच, समय और कोई भी शुल्क',
  tips: 'पर्यटक सुझाव',
  tipsTitle: 'यात्रा की योजना कैसे बनाएं',
  charms: 'इसका आकर्षण खोजें',
  charmsTitle: 'इतिहास, वास्तुकला, संस्कृति',
  route: 'सुझाया गया मार्ग',
  routeTitle: 'इसे देखने का एक सरल तरीका',
  photoSpots: 'फ़ोटो स्थान',
  photoSpotsTitle: 'कैमरा किधर रखें',
  stay: 'कहाँ ठहरें',
  stayTitle: 'आसपास ठहरने की जगह',
  stayCta: 'ठहरने के क्षेत्रों की तुलना करें ↗',
  reviews: 'पर्यटक समीक्षाएँ',
  reviewsTitle: 'यात्री क्या कहते हैं',
  reviewsText:
    'यात्री Google मानचित्र पर अपनी रेटिंग और अनुभव साझा करते हैं। यह स्वतंत्र गाइड व्यक्तिगत समीक्षाएँ प्रकाशित या पुनः उत्पादित नहीं करता और न ही वर्तमान स्कोर की पुष्टि करता है। उन्हें पढ़ने और नवीनतम स्नैपशॉट देखने के लिए मानचित्र लिस्टिंग खोलें।',
  reviewsCta: 'Google मानचित्र पर समीक्षाएँ पढ़ें ↗',
  gettingHere: 'यहाँ पहुँचना',
  addressMap: 'पता और मानचित्र',
  mapDirections: 'मानचित्र और दिशा ↗',
  goodToKnow: 'जानने योग्य',
  goodToKnowTitle: 'जाने से पहले',
  ogAlt: 'कांडोलिम में सिंकेरिम किला',
  ogAltArea: 'सिंकेरिम क्षेत्र, गोवा',
  photoName: 'सिंकेरिम किले की समुद्र-मुखी लेटराइट दीवार',
  privacyLabel: 'गोपनीयता नीति',
  termsLabel: 'सेवा की शर्तें',
  cookiesLabel: 'कुकी सेटिंग्स'
};

export const CHARM_LABELS_HI: Record<string, string> = {
  history: 'इतिहास',
  architecture: 'वास्तुकला',
  culture: 'संस्कृति',
  experience: 'आप क्या अनुभव करेंगे'
};

export const HI_TOPIC_TEASER = {
  title: 'विस्तृत गाइड (अंग्रेज़ी में)',
  text: 'समय, टिकट, स्थान, मार्ग, आसपास के स्थल और यात्रा योजनाओं पर 35 अलग-अलग गाइड अंग्रेज़ी में उपलब्ध हैं।',
  cta: 'अंग्रेज़ी गाइड देखें ↗'
};
