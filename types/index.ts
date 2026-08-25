export type NewsType = 'press' | 'coverage' | 'product' | 'field';
export type NewsWeight = 'standard' | 'featured';

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
  publication?: string; // coverage only (e.g. "Tech in Asia", "VentureBeat", "Forbes")
  sourceUrl?: string;
  weight: NewsWeight; // drives 3-col vs 6-col span
  onWire: boolean; // ticker inclusion
  tags: string[];
  readTime?: string;
}

export type OfficeCode = 'SG' | 'NA' | 'LATAM' | 'EU';
export type Discipline = 'Leadership' | 'Engineering' | 'AI Systems' | 'Design' | 'Art & Voxels' | 'Production' | 'BD';

export interface Person {
  id: string;
  slug: string;
  name: string;
  role: string;
  office: OfficeCode;
  officeName: string;
  disciplines: Discipline[];
  portrait: string;
  portraitAlt: string;
  bio: string;
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
  sector: string; // e.g. "Government", "Entertainment", "IP & Gaming", "Accessibility"
  platform: string[]; // e.g. ["The Sandbox", "Custom Engine", "Roblox", "Web3"]
  year: number;
  heroMedia: string;
  thumbnail: string;
  outcomeStats: [OutcomeStat, OutcomeStat, OutcomeStat];
  oneLineOutcome: string;
  problem: string;
  solution: string;
  aiRole: {
    modelRole: string; // What the model did
    humanRole: string; // What humans art-directed and built
    technicalHighlights: string[];
  };
  buildSections: {
    title: string;
    description: string;
    mediaUrl: string;
    mediaCaption?: string;
  }[];
  credits: string[]; // Person slugs
  isFeatured: boolean;
}

export interface World {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: 'Live' | 'Alpha' | 'Beta' | 'In Production';
  heroMedia: string;
  thumbnail: string;
  description: string;
  mechanics: string[];
  stats: { value: string; label: string }[];
  links: { label: string; url: string }[];
}

export interface Office {
  code: OfficeCode;
  city: string;
  country: string;
  timezone: string; // e.g. "Asia/Singapore", "America/New_York"
  address: string;
  email: string;
}
