import type { NewsItem, Project } from '@/types';
import { offices } from '@/data/offices';
import { toIsoDate } from '@/lib/newsSource';
import {
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  WEBSITE_ID,
  absoluteUrl,
} from '@/lib/site';

/**
 * Schema builders for the site's JSON-LD. Every graph below refers to the
 * Organization by `@id` rather than restating it, so search engines resolve one
 * entity across the whole site instead of a dozen unrelated publishers.
 *
 * Nothing here asserts a fact the site doesn't already publish — the addresses
 * come from data/offices.ts, the channels from lib/site.ts, and article dates
 * from the archive's own `publishedAt`.
 */

const singapore = offices.find((o) => o.code === 'SG');

/** The Organization + WebSite pair, emitted once from the root layout. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          'Smobler is an AI-first digital agency working across AI products, blockchain and intelligent digital experiences, from Singapore and Honolulu.',
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/brand/smobler-logo.png'),
        },
        foundingLocation: {
          '@type': 'Place',
          name: 'Singapore',
        },
        sameAs: [...SOCIAL_PROFILES],
        ...(singapore
          ? {
              address: {
                '@type': 'PostalAddress',
                streetAddress: singapore.address,
                addressCountry: 'SG',
              },
              email: singapore.email,
            }
          : {}),
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { '@id': ORGANIZATION_ID },
        inLanguage: 'en',
      },
    ],
  };
}

/**
 * A press item. `citation` is set only where the archive holds the original
 * URL — most entries link out, the lead release does not.
 */
export function newsArticleSchema(item: NewsItem) {
  const published = toIsoDate(item.publishedAt);
  const url = absoluteUrl(`/newsroom/${item.slug}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: item.title,
    description: item.excerpt,
    articleSection: item.type,
    inLanguage: 'en',
    ...(published ? { datePublished: published, dateModified: published } : {}),
    ...(item.heroImage ? { image: [absoluteUrl(item.heroImage)] } : {}),
    ...(item.tags.length ? { keywords: item.tags.join(', ') } : {}),
    publisher: { '@id': ORGANIZATION_ID },
    /* Coverage was written by the publication; releases by the studio. */
    author:
      item.type === 'coverage' && item.publication
        ? { '@type': 'Organization', name: item.publication }
        : { '@id': ORGANIZATION_ID },
    ...(item.sourceUrl ? { isBasedOn: item.sourceUrl } : {}),
  };
}

/** A portfolio engagement. */
export function caseStudySchema(project: Project) {
  const url = absoluteUrl(`/work/${project.slug}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#work`,
    mainEntityOfPage: url,
    url,
    name: project.title,
    description: project.oneLineOutcome,
    about: project.sector,
    inLanguage: 'en',
    datePublished: String(project.year),
    creator: { '@id': ORGANIZATION_ID },
    ...(project.heroMedia ? { image: [absoluteUrl(project.heroMedia)] } : {}),
    ...(project.client ? { sourceOrganization: { '@type': 'Organization', name: project.client } } : {}),
    ...(project.platform.length ? { keywords: project.platform.join(', ') } : {}),
  };
}

/** Home → section → item, matching the "Back to…" link each detail page renders. */
export function breadcrumbSchema(
  trail: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
