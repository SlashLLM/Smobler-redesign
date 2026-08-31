import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * The site had no robots.txt at all, which leaves both crawl directives and AI
 * bot policy undefined. The AI crawlers are listed explicitly rather than left
 * to the `*` rule: several of them (Google-Extended in particular) treat an
 * absent named rule as a reason to hold back, and the studio wants the
 * visibility in answer engines.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-User',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
        ],
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
