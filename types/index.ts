export type NewsType = 'press' | 'coverage' | 'product' | 'field';
export type NewsWeight = 'standard' | 'featured';

/**
 * A line actually written or spoken in a source. Absent means the page's
 * pull-quote block stands down rather than echoing the surrounding copy.
 */
export interface PullQuote {
  text: string;
  attribution?: string;
  /** Title and organisation, as the source prints it. */
  role?: string;
  /** Client logo, where the source sets one beside the quote. */
  logo?: string;
}

/**
 * A photo the source runs alongside its copy, dropped in after the body
 * paragraph at `afterParagraph` (0-based). Intrinsic `width`/`height` are held
 * so the figure keeps its own aspect — the press photos include portraits, and
 * a fixed landscape well would crop the subjects out of them.
 */
export interface NewsFigure {
  src: string;
  alt: string;
  /** The caption as the source writes it. */
  caption: string;
  width: number;
  height: number;
  afterParagraph: number;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  type: NewsType;
  publishedAt: string; // e.g. "14 AUG 2026"
  month: string; // e.g. "AUG"
  year: number;
  excerpt: string;
  body: string;
  heroImage?: string;
  heroImagePosition?: string;
  publication?: string; // coverage only (e.g. "Forbes", "The Straits Times")
  sourceUrl?: string;
  weight: NewsWeight; // drives 3-col vs 6-col span
  onWire: boolean; // ticker inclusion
  tags: string[];
  readTime?: string;
  pullQuote?: PullQuote;
  /** Absent for everything the archive links out to; set where we hold the photos. */
  figures?: NewsFigure[];
}

export type OfficeCode = 'SG' | 'NA';
export type Discipline =
  | 'Leadership'
  | 'Technology'
  | 'Operations'
  | 'Studio'
  | 'Communications'
  | 'Production'
  | 'Design'
  | 'Advisory';

export interface Person {
  id: string;
  slug: string;
  name: string;
  role: string;
  /** Advisors sit outside the hubs, so a person need not belong to one. */
  office?: OfficeCode;
  officeName?: string;
  disciplines: Discipline[];
  portrait?: string;
  portraitAlt: string;
  /** Only published where the person has a public biography. */
  bio?: string;
  projects?: string[]; // Project slugs
  links?: { label: string; url: string }[];
  isLeadership?: boolean;
  order: number;
}

export interface OpenRole {
  id: string;
  title: string;
  discipline: Discipline;
  office: OfficeCode;
  officeName: string;
  employmentType: string;
  locationType: 'Remote' | 'Hybrid' | 'On-site';
  applyUrl: string;
  description: string;
  requirements: string[];
  isOpen: boolean;
}

export interface OutcomeStat {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  sector: string; // e.g. "World's Firsts", "Metaverse for Good", "AI", "Blockchain"
  platform: string[]; // e.g. ["The Sandbox", "Roblox", "Sui", "IRL"]
  year: number;
  heroMedia?: string;
  thumbnail?: string;
  /**
   * The trailer smobler.io sets on the project's own page. Held as a YouTube id
   * rather than an embed URL because the player is only ever constructed after
   * the visitor clicks — see components/ui/VideoEmbed.
   */
  videoId?: string;
  /** The uploaded video's own title, used as the play control's label. */
  videoTitle?: string;
  /** Poster frame for that trailer, imported so the facade makes no third-party request. */
  videoPoster?: string;
  /**
   * Published figures only. Most engagements have none in the public record, so
   * this is frequently absent and the card simply omits its stat rail.
   */
  outcomeStats?: OutcomeStat[];
  oneLineOutcome: string;
  problem?: string;
  solution?: string;
  aiRole?: {
    modelRole: string; // What the model did
    humanRole: string; // What humans art-directed and built
    technicalHighlights: string[];
  };
  buildSections?: {
    title: string;
    description: string;
    mediaUrl?: string;
    mediaCaption?: string;
    /** Where a chapter is separately playable, the source's own action beside it. */
    link?: { label: string; url: string };
  }[];
  /** Screenshots published on the project's own page, in the order it sets them. */
  gallery?: { src: string; alt?: string }[];
  pullQuote?: PullQuote;
  projectHighlights?: { id: string; highlight: string }[];
  credits?: string[]; // Person slugs
  links?: { label: string; url: string }[];
  isFeatured: boolean;
}

export interface World {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: 'Live' | 'Alpha' | 'Beta' | 'In Production';
  heroMedia?: string;
  thumbnail?: string;
  description: string;
  mechanics: string[];
  stats: { value: string; label: string }[];
  links: { label: string; url: string }[];
}

export interface Office {
  code: OfficeCode;
  city: string;
  country: string;
  timezone: string; // e.g. "Asia/Singapore", "Pacific/Honolulu"
  address: string;
  email: string;
}
