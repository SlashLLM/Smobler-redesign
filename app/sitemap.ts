import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { newsItems } from '@/data/news';
import { toIsoDate } from '@/lib/newsSource';
import { SITE_URL } from '@/lib/site';

/**
 * Generated from the same data the routes are, so a project or press item added
 * to `data/` is in the sitemap the moment its page exists — a hand-maintained
 * list would silently rot behind the archive.
 *
 * `lastModified` is only honest where a date was actually published: the news
 * archive records one per item, the portfolio does not, so case studies fall
 * back to the build date rather than inventing a day.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  /* `as const` keeps `changeFrequency` at its literal type through the map —
     widened to `string` it no longer satisfies MetadataRoute.Sitemap. */
  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
      { url: `${SITE_URL}/work`, changeFrequency: 'weekly', priority: 0.9 },
      { url: `${SITE_URL}/what-we-build`, changeFrequency: 'monthly', priority: 0.9 },
      { url: `${SITE_URL}/worlds`, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${SITE_URL}/newsroom`, changeFrequency: 'weekly', priority: 0.8 },
      { url: `${SITE_URL}/studio`, changeFrequency: 'monthly', priority: 0.7 },
      { url: `${SITE_URL}/studio/careers`, changeFrequency: 'weekly', priority: 0.6 },
      { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.5 },
    ] as const
  ).map((entry) => ({ ...entry, lastModified: buildDate }));

  const caseStudies: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: buildDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const articles: MetadataRoute.Sitemap = newsItems.map((item) => {
    const published = toIsoDate(item.publishedAt);
    return {
      url: `${SITE_URL}/newsroom/${item.slug}`,
      lastModified: published ? new Date(published) : buildDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...caseStudies, ...articles];
}
