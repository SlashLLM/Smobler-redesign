import { NewsItem } from '@/types';

export const newsItems: NewsItem[] = [
  {
    id: 'city-of-austin-sandbox-partnership',
    slug: 'city-of-austin-sandbox-partnership',
    title: 'City of Austin enters The Sandbox with Smobler to digitize iconic live music heritage',
    type: 'press',
    publishedAt: '14 AUG 2026',
    month: 'AUG',
    year: 2026,
    excerpt: 'Municipal cultural commission partners with Smobler to build persistent virtual music stages that preserve historic Austin indie venues and support local artists.',
    body: `The City of Austin Tech & Cultural Commission has officially selected Smobler as the lead spatial architecture studio to bring Austin’s renowned live music corridor into The Sandbox ecosystem.

The initiative bridges civic preservation with Web3 streaming technology, giving independent Austin musicians a permanent, interactive platform to stream live performances, sell exclusive digital merchandise, and receive direct tip distributions from a worldwide audience.

"Our mission with the City of Austin is to prove that immersive spatial worlds can generate tangible economic and cultural value for municipal communities," said Dr. Loretta Chen, CEO and Co-Founder of Smobler. "By integrating real-time audio spatialization with interactive NPC jam sessions, visitors from Tokyo to London can experience the raw energy of Red River Street."

The project includes meticulous voxel reconstructions of five historic music venues, interactive questlines detailing Austin’s music history, and a decentralized royalty settlement layer for performing artists.`,
    heroImage: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1200&auto=format&fit=crop',
    weight: 'featured',
    onWire: true,
    tags: ['Government', 'Music', 'The Sandbox', 'Civic Tech'],
    readTime: '3 min read',
  },
  {
    id: 'venturebeat-ai-world-studios-feature',
    slug: 'venturebeat-ai-world-studios-feature',
    title: 'How Smobler is redefining virtual worlds with deterministic AI agent runtimes',
    type: 'coverage',
    publishedAt: '08 AUG 2026',
    month: 'AUG',
    year: 2026,
    excerpt: 'VentureBeat analyses why leading brands are moving past static metaverse plots toward persistent worlds populated by voice-reactive, memory-enabled AI characters.',
    body: `In an in-depth feature published today, VentureBeat highlighted Smobler’s transformation from an early metaverse builder into a pioneering AI world studio.

The article explores Smobler’s proprietary behavioral runtime, which allows non-player characters (NPCs) to retain persistent long-term memories of player conversations while operating under strict safety and brand guidelines.

"Smobler's key differentiator is their pragmatic understanding of spatial production constraints," writes VentureBeat. "Rather than treating AI as an uncontrolled novelty, they have built deterministic guardrails that let enterprise brands deploy agentic characters without risking reputation or lore consistency."`,
    publication: 'VentureBeat',
    sourceUrl: 'https://venturebeat.com',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    weight: 'standard',
    onWire: true,
    tags: ['Coverage', 'AI Systems', 'VentureBeat'],
    readTime: '4 min read',
  },
  {
    id: 'snow-dapp-v2-protocol-release',
    slug: 'snow-dapp-v2-protocol-release',
    title: 'SNOW dApp v2 ships with automated creator royalty splits and voxel asset staking',
    type: 'product',
    publishedAt: '28 JUL 2026',
    month: 'JUL',
    year: 2026,
    excerpt: 'The second major iteration of the SNOW ecosystem introduces instant creator payouts, cross-game asset verification, and gas-free staking for ecosystem participants.',
    body: `Smobler is thrilled to announce the public release of the SNOW dApp v2 protocol upgrade, bringing enhanced utility, sub-second transaction finality, and seamless creator payouts across all Smobler-powered virtual worlds.

Key enhancements in v2 include:
- Automated multi-party royalty splits at the smart-contract layer for collaborating voxel sculptors, animators, and game designers.
- Zero-gas asset registry enabling instant in-world item verification across multiple platforms.
- Staking dashboard allowing SNOW holders to back emerging creator worlds and participate in seasonal governance votes.`,
    heroImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
    weight: 'standard',
    onWire: true,
    tags: ['SNOW', 'Product', 'Web3', 'Creators'],
    readTime: '2 min read',
  },
  {
    id: 'field-notes-what-breaks-generative-voxels',
    slug: 'field-notes-what-breaks-generative-voxels',
    title: 'Field Notes: What breaks when you put generative 3D in front of 100,000 real players',
    type: 'field',
    publishedAt: '15 JUL 2026',
    month: 'JUL',
    year: 2026,
    excerpt: 'Studio CTO Jason Gu breaks down the hard lessons learned stress-testing diffusion-based voxel asset pipelines against live multiplayer server physics.',
    body: `Generating a 3D mesh from a text prompt in a test sandbox is trivial. Deploying that mesh into a live spatial environment where 2,000 players are colliding, jumping, and casting raycasts against it is where reality hits.

In this field note, we break down the three fundamental failure modes of raw generative assets:
1. Non-manifold internal voxel voids that cause catastrophic raycast leaks and collision falls.
2. Inconsistent bone weighting that turns character animations into jagged voxel soup.
3. Unbatched draw calls that choke GPU fill rates on mobile clients.

We share the exact topological sanitization pipeline we developed to clean, batch, and auto-rig AI-generated assets before they ever touch our production servers.`,
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    weight: 'featured',
    onWire: true,
    tags: ['Field Notes', 'Engineering', 'AI Pipeline', 'Architecture'],
    readTime: '6 min read',
  },
  {
    id: 'forbes-metaverse-for-good-spotlight',
    slug: 'forbes-metaverse-for-good-spotlight',
    title: 'Forbes: How Smobler turned virtual land into a multi-million dollar civic charity engine',
    type: 'coverage',
    publishedAt: '02 JUL 2026',
    month: 'JUL',
    year: 2026,
    excerpt: 'Forbes profile examines Smobler’s pioneering work on the Metaverse for Good estate and the future of social impact gamification.',
    body: `Forbes has featured Smobler’s flagship Metaverse for Good estate, highlighting the studio's commitment to leveraging Web3 virtual environments for tangible social impact and global philanthropy.

The profile details how Smobler brought together over 30 international charities onto a unified 12x12 Sandbox estate, raising over $1.8 million for initiatives ranging from disability empowerment to environmental conservation.`,
    publication: 'Forbes Asia',
    sourceUrl: 'https://forbes.com',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    weight: 'standard',
    onWire: true,
    tags: ['Forbes', 'Civic Impact', 'Philanthropy'],
    readTime: '3 min read',
  },
  {
    id: 'ichorium-wars-season-3-alpha-launch',
    slug: 'ichorium-wars-season-3-alpha-launch',
    title: 'Ichorium Wars Season 3 Alpha goes live with dynamic faction AI territory battles',
    type: 'product',
    publishedAt: '20 JUN 2026',
    month: 'JUN',
    year: 2026,
    excerpt: 'Smobler’s flagship tactical strategy world introduces autonomous AI guild commanders that negotiate alliances and deploy dynamic siege warfare.',
    body: `Smobler is excited to open Alpha access for Season 3 of Ichorium Wars, our proprietary competitive strategy universe.

Season 3 introduces groundbreaking Autonomous Faction Commanders—AI-driven generals that formulate battle plans, negotiate trade treaties with player alliances, and react to emergent battlefield tactics in real-time.`,
    heroImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    weight: 'standard',
    onWire: true,
    tags: ['Ichorium Wars', 'Gaming', 'AI Commanders'],
    readTime: '2 min read',
  },
  {
    id: 'tech-in-asia-singapore-studio-expansion',
    slug: 'tech-in-asia-singapore-studio-expansion',
    title: 'Tech in Asia: Smobler expands engineering presence across London and São Paulo hubs',
    type: 'coverage',
    publishedAt: '12 JUN 2026',
    month: 'JUN',
    year: 2026,
    excerpt: 'Singapore-headquartered studio announces 40% headcount expansion to support surging enterprise AI world engagements in the West.',
    body: `Tech in Asia reports on Smobler’s rapid international expansion, detailing new studio hubs established in London and São Paulo to support international brand activations.

"Our distributed engineering model allows us to provide 24-hour development velocity for tier-one partners across Asia, North America, and Europe," said Dr. Loretta Chen.`,
    publication: 'Tech in Asia',
    sourceUrl: 'https://techinasia.com',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    weight: 'standard',
    onWire: true,
    tags: ['Tech in Asia', 'Expansion', 'Studio'],
    readTime: '3 min read',
  },
  {
    id: 'a11y-park-global-inclusion-award',
    slug: 'a11y-park-global-inclusion-award',
    title: 'Smobler wins International Civic Inclusion Award for landmark A11Y Park design',
    type: 'press',
    publishedAt: '01 JUN 2026',
    month: 'JUN',
    year: 2026,
    excerpt: 'Global Inclusion Council honors Smobler for creating the first universally accessible spatial environment tailored for neurodiverse and mobility-assisted users.',
    body: `Smobler has been awarded the prestigious International Civic Inclusion Award for its pioneering design of A11Y Park, developed in partnership with SG Enable.

The project was praised by the jury for setting a new global benchmark in spatial accessibility, combining spatial audio navigation, custom sensory dampening controls, and universal screen-reader integration.`,
    heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    weight: 'featured',
    onWire: true,
    tags: ['Awards', 'Accessibility', 'Press Release'],
    readTime: '3 min read',
  }
];
