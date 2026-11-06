import { TOPICS_A } from './topics.a';
import { TOPICS_B } from './topics.b';
import { TOPICS_C } from './topics.c';
import { TOPICS_D } from './topics.d';
import { GROUP_ORDER, type Topic, type TopicGroup } from './topic-types';

/* 35 independent English guides. Add an entry here and the route, cluster and sitemap follow. */
export const TOPICS: Topic[] = [...TOPICS_A, ...TOPICS_B, ...TOPICS_C, ...TOPICS_D];

export const TOPIC_COUNT = TOPICS.length;

export const topicPath = (slug: string) => `/en/${slug}/`;

export const getTopic = (slug: string): Topic | undefined =>
  TOPICS.find((topic) => topic.slug === slug);

export const topicSlugs = () => TOPICS.map((topic) => topic.slug);

export const topicsByGroup = (group: TopicGroup) =>
  TOPICS.filter((topic) => topic.group === group);

export const topicsByBatch = (batch: 1 | 2 | 3) =>
  TOPICS.filter((topic) => topic.batch === batch);

export const relatedFor = (topic: Topic): Topic[] =>
  topic.related
    .map((slug) => getTopic(slug))
    .filter((item): item is Topic => Boolean(item));

export const groupOrder = GROUP_ORDER;

export type { Topic, TopicGroup } from './topic-types';
