import { TOPICS_A } from './topics.a';
import { TOPICS_B } from './topics.b';
import { TOPICS_C } from './topics.c';
import { TOPICS_D } from './topics.d';
import { TOPICS_HI_A } from './topics.hi.a';
import { TOPICS_HI_B } from './topics.hi.b';
import { TOPICS_HI_C } from './topics.hi.c';
import { TOPICS_HI_D } from './topics.hi.d';
import { GROUP_ORDER, type Topic, type TopicGroup } from './topic-types';
import type { Locale } from './i18n/types';

/* 35 independent English guides. Add an entry here and the route, cluster and sitemap follow. */
export const TOPICS: Topic[] = [...TOPICS_A, ...TOPICS_B, ...TOPICS_C, ...TOPICS_D];
export const TOPICS_HI: Topic[] = [...TOPICS_HI_A, ...TOPICS_HI_B, ...TOPICS_HI_C, ...TOPICS_HI_D];

export const TOPIC_COUNT = TOPICS.length;
export const TOPIC_COUNT_HI = TOPICS_HI.length;

export const topicPath = (slug: string, locale: Locale = 'en') =>
  locale === 'hi' ? `/${slug}/` : `/en/${slug}/`;

export const getTopic = (slug: string, locale: Locale = 'en'): Topic | undefined =>
  (locale === 'hi' ? TOPICS_HI : TOPICS).find((topic) => topic.slug === slug);

export const topicSlugs = (locale: Locale = 'en') =>
  (locale === 'hi' ? TOPICS_HI : TOPICS).map((topic) => topic.slug);

export const topicsByGroup = (group: TopicGroup, locale: Locale = 'en') =>
  (locale === 'hi' ? TOPICS_HI : TOPICS).filter((topic) => topic.group === group);

export const topicsByBatch = (batch: 1 | 2 | 3, locale: Locale = 'en') =>
  (locale === 'hi' ? TOPICS_HI : TOPICS).filter((topic) => topic.batch === batch);

export const relatedFor = (topic: Topic, locale: Locale = 'en'): Topic[] =>
  topic.related
    .map((slug) => getTopic(slug, locale))
    .filter((item): item is Topic => Boolean(item));

export const groupOrder = GROUP_ORDER;

export type { Topic, TopicGroup } from './topic-types';
