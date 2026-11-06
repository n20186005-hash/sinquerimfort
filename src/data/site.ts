/* Single source of truth for Sinquerim Fort entity facts. */
export const SITE_URL = 'https://sinquerimfort.com';
export const FULL = 'Sinquerim Fort';
export const CITY = 'Candolim';
export const STATE = 'Goa';
export const COUNTRY = 'India';
export const PLUS_CODE = 'FQX8+9HJ';
export const LAT = 15.498447;
export const LNG = 73.766356;

export const MAPS_SHARE_URL = 'https://maps.app.goo.gl/FjmgmJePsTwafjCB8';
export const MAPS_PLUS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(`${PLUS_CODE}, ${CITY}, ${STATE}, ${COUNTRY}`);
export const mapsEmbedSrc = (isHi: boolean) =>
  `https://www.google.com/maps?q=${LAT},${LNG}&output=embed&hl=${isHi ? 'hi' : 'en'}`;

export const GOVT_TOURISM_URL = 'https://goa-tourism.com/fort/fort-aguada/';
export const GOA_GOV_URL = 'https://www.goa.gov.in/places/sinquerim-beach/';
export const INCREDIBLE_INDIA_URL = 'https://www.incredibleindia.gov.in/en/goa/goa/fort-aguada';
export const AGUAD_JAIL_URL = 'https://www.aguad.in/heritage-walks';
export const ASI_LIST_URL = 'https://asi.nic.in/admin/whatsnew/download/585';

/* Google Maps rating snapshot: display only, never written into JSON-LD. */
export const RATING_VALUE = '4.5';
export const RATING_COUNT_LABEL = '20,473';
export const RATING_CHECKED = '5 November 2026';
export const ACCESS_SNAPSHOT_CHECKED = '29 October 2026';

export interface OfficialSource {
  key: string;
  label: string;
  url: string;
  use: string;
  useHi: string;
}

export const OFFICIAL_SOURCES: OfficialSource[] = [
  {
    key: 'gt',
    label: 'Goa Tourism – Fort Aguada',
    url: GOVT_TOURISM_URL,
    use: 'Published hilltop-fort timetable and the distinction between the citadel and the sea-level works.',
    useHi: 'हिलटॉप क़िले का प्रकाशित समय-सारणी और क़िलेबंदी (सितादेल) तथा समुद्र-तल के कार्यों के बीच अंतर।'
  },
  {
    key: 'goa',
    label: 'Government of Goa – Sinquerim Beach',
    url: GOA_GOV_URL,
    use: 'Regional description of Sinquerim Beach and coastal activities.',
    useHi: 'सिंकेरिम बीच और तटीय गतिविधियों का क्षेत्रीय विवरण।'
  },
  {
    key: 'ii',
    label: 'Incredible India – Fort Aguada',
    url: INCREDIBLE_INDIA_URL,
    use: 'Cultural-heritage background for the wider Aguada complex.',
    useHi: 'व्यापक अगुआदा परिसर के लिए सांस्कृतिक-धरोहर पृष्ठभूमि।'
  },
  {
    key: 'jail',
    label: 'Aguad Port & Jail Complex',
    url: AGUAD_JAIL_URL,
    use: 'Independent heritage venue information for visits, exhibitions and bookings.',
    useHi: 'दौरे, प्रदर्शनियों और बुकिंग के लिए स्वतंत्र धरोहर-स्थल जानकारी।'
  },
  {
    key: 'asi',
    label: 'ASI protected-monument list, Goa',
    url: ASI_LIST_URL,
    use: 'Separate listing name for the lower fortification wall at Candolim.',
    useHi: 'कांडोलिम में निचली क़िलाबंदी दीवार के लिए पृथक सूचीबद्ध नाम।'
  },
  {
    key: 'maps',
    label: 'Google Maps – Sinquerim Fort',
    url: MAPS_SHARE_URL,
    use: 'Location, navigation and a dated third-party listing snapshot.',
    useHi: 'स्थान, नेविगेशन और तिथि-युक्त तृतीय-पक्ष लिस्टिंग स्नैपशॉट।'
  }
];

export const sourcesByKeys = (keys: string[]) =>
  OFFICIAL_SOURCES.filter((source) => keys.includes(source.key));

