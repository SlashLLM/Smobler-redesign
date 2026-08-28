import { NewsItem } from '@/types';

export type SourceKind = 'video' | 'interview' | 'release' | 'article';

export interface SourceMeta {
  href: string;
  /** Bare hostname, shown next to the CTA so the destination is visible before the click. */
  host: string;
  publisher: string;
  kind: SourceKind;
  ctaLabel: string;
}

/**
 * Publishers whose own name isn't recoverable from the hostname. `publication` on
 * the item wins where it is set; this only fills the gap for Smobler's own channels.
 */
const HOST_NAMES: Record<string, string> = {
  'medium.com': 'Medium',
  'einpresswire.com': 'EIN Presswire',
  'youtube.com': 'YouTube',
  'youtu.be': 'YouTube',
};

const CTA_VERBS: Record<SourceKind, string> = {
  video: 'Watch on',
  interview: 'Read the interview on',
  release: 'Read the release on',
  article: 'Read the article on',
};

function hostOf(url: string): string | null {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

/** Returns the YouTube video id for watch, short and embed URLs; null for anything else. */
export function getYouTubeId(url: string | undefined): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') return parsed.pathname.slice(1) || null;
    if (host !== 'youtube.com' && host !== 'm.youtube.com' && host !== 'youtube-nocookie.com') {
      return null;
    }
    if (parsed.pathname === '/watch') return parsed.searchParams.get('v');
    const embedded = parsed.pathname.match(/^\/(?:embed|shorts|v)\/([^/]+)/);
    return embedded ? embedded[1] : null;
  } catch {
    return null;
  }
}

/**
 * Everything the article page needs to point a reader at the original. Returns null
 * for the one archived item whose source has gone dead, so the CTA stands down
 * rather than rendering an empty slot.
 */
export function getSourceMeta(item: NewsItem): SourceMeta | null {
  if (!item.sourceUrl) return null;
  const host = hostOf(item.sourceUrl);
  if (!host) return null;

  let kind: SourceKind;
  if (getYouTubeId(item.sourceUrl)) kind = 'video';
  else if (item.tags.includes('Interview')) kind = 'interview';
  else if (item.type === 'press') kind = 'release';
  else kind = 'article';

  // A filmed interview is credited to the broadcaster in the VIA chip but watched on
  // the platform hosting it, so the CTA names the host rather than the publication.
  const publisher =
    kind === 'video'
      ? (HOST_NAMES[host] ?? host)
      : (item.publication ?? HOST_NAMES[host] ?? host);

  return {
    href: item.sourceUrl,
    host,
    publisher,
    kind,
    ctaLabel: `${CTA_VERBS[kind]} ${publisher}`,
  };
}

/**
 * Related dispatches by shared subject rather than by position in the archive:
 * a shared tag counts most, then type, then year, with recency breaking ties and
 * backfilling when too little overlaps.
 */
export function getRelatedItems(item: NewsItem, all: NewsItem[], count = 3): NewsItem[] {
  const scored = all
    .filter((n) => n.id !== item.id)
    .map((n, index) => {
      const sharedTags = n.tags.filter((t) => item.tags.includes(t)).length;
      const score =
        sharedTags * 2 + (n.type === item.type ? 1 : 0) + (n.year === item.year ? 0.5 : 0);
      return { item: n, score, index };
    });

  // `all` is already reverse-chronological, so the original index is the recency tiebreak.
  scored.sort((a, b) => b.score - a.score || a.index - b.index);
  return scored.slice(0, count).map((s) => s.item);
}

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

/**
 * `publishedAt` is written for display ("14 AUG 2026"); Open Graph wants ISO 8601.
 * Returns undefined rather than a guess if the string is not in that shape.
 */
export function toIsoDate(publishedAt: string): string | undefined {
  const match = publishedAt.trim().match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/);
  if (!match) return undefined;
  const month = MONTHS.indexOf(match[2].toUpperCase());
  if (month < 0) return undefined;
  return `${match[3]}-${String(month + 1).padStart(2, '0')}-${match[1].padStart(2, '0')}`;
}

/** Word count at ~200wpm, in the `'N min read'` shape the archive already uses. */
export function estimateReadTime(body: string): string {
  const words = body.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}
