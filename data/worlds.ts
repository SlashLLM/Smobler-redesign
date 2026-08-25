import { World } from '@/types';

export const worlds: World[] = [
  {
    id: 'ichorium-wars',
    slug: 'ichorium-wars',
    name: 'Ichorium Wars',
    tagline: 'High-stakes tactical strategy realm with autonomous faction AI commanders.',
    status: 'Alpha',
    heroMedia: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    description: 'Set in a post-cataclysmic world where rival factions battle for control of Ichorium, an exotic crystalline energy source. Features player-directed siege warfare governed by autonomous AI guild leaders that negotiate real-time alliances and retaliate dynamically against player aggression.',
    mechanics: [
      'Autonomous AI Faction Generals',
      'Dynamic Voxel Terrain Destruction & Fortification',
      'Persistent Territorial Resource Economy',
      'Cross-Chain Guild Asset Staking'
    ],
    stats: [
      { value: '3', label: 'Rival sovereign factions' },
      { value: '144', label: 'Territorial war zones' },
      { value: '12K+', label: 'Registered alpha tacticians' }
    ],
    links: [
      { label: 'Enter Alpha Waitlist', url: '/contact?inquiry=ichorium-alpha' },
      { label: 'Read Game Lore', url: '/newsroom/ichorium-wars-season-3-alpha-launch' }
    ]
  },
  {
    id: 'yeti-realm',
    slug: 'yeti-realm',
    name: 'Yeti Realm',
    tagline: 'Himalayan myth meets procedural glacial exploration and lore-driven quests.',
    status: 'Live',
    heroMedia: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
    description: 'An expansive alpine sanctuary inspired by ancient Himalayan folklore. Players navigate sheer mountain ascents, uncover forgotten shrines, and interact with sentient yeti elders possessing dynamic conversational memory.',
    mechanics: [
      'Procedural Glacial Avalanche Hazards',
      'Voice-Interactive Elder NPCs with Persistent Memory',
      'Ancient Artifact Crafting Synthesizer',
      'Cooperative Mountain Expedition Raids'
    ],
    stats: [
      { value: '88,000+', label: 'Summits achieved' },
      { value: '450+', label: 'Unique craftable artifacts' },
      { value: '4.9/5', label: 'Player satisfaction rating' }
    ],
    links: [
      { label: 'Play on The Sandbox', url: 'https://www.sandbox.game' },
      { label: 'View Case Study', url: '/work/metaverse-for-good' }
    ]
  },
  {
    id: 'cobbleland',
    slug: 'cobbleland',
    name: 'Cobbleland',
    tagline: 'The premier social hangout and UGC builder sandbox for digital creators.',
    status: 'Beta',
    heroMedia: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    description: 'A vibrant creator hub where independent builders, musicians, and digital fashion designers publish interactive mini-games, host live listening parties, and trade modular voxel assets.',
    mechanics: [
      'Zero-Code In-World Event Staging',
      'Creator AI Copilot Asset Generation',
      'Instant Modular Plot Rental & Customization',
      'Social Voice Proximity Chat Arenas'
    ],
    stats: [
      { value: '250K+', label: 'Monthly active visitors' },
      { value: '1,800+', label: 'Community-built mini games' },
      { value: '$620K', label: 'Paid out directly to creators' }
    ],
    links: [
      { label: 'Explore Cobbleland', url: '/contact?inquiry=cobbleland' }
    ]
  },
  {
    id: 'snow-ecosystem',
    slug: 'snow-ecosystem',
    name: 'SNOW Ecosystem & dApp',
    tagline: 'The spatial economy infrastructure connecting worlds, creators, and assets.',
    status: 'Live',
    heroMedia: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop',
    description: 'The native token and decentralized infrastructure powering cross-world provenance, automatic revenue sharing between multi-disciplinary creators, and gas-free player inventory interoperability across all Smobler environments.',
    mechanics: [
      'Automated Split Smart Contracts for Multi-Creator Builds',
      'Universal Spatial Inventory Identity Protocol',
      'Zero-Gas In-World Asset Staking & Governance',
      'Deterministic Creator Attribution Oracles'
    ],
    stats: [
      { value: '$14.8M', label: 'Total ecosystem volume' },
      { value: '38,000+', label: 'Connected spatial wallets' },
      { value: '< 1s', label: 'Cross-world transfer finality' }
    ],
    links: [
      { label: 'Launch SNOW dApp', url: '/newsroom/snow-dapp-v2-protocol-release' }
    ]
  }
];
