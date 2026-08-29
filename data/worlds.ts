import { World } from '@/types';

/**
 * Smobler-owned properties only — client engagements live in data/projects.ts.
 *
 * Sources: smobler.io/origin-story ("proprietary GameFi properties: 3VEREST,
 * Yeti Realm, Cobbleland"), smobler.io/game-development, and the Sandbox and
 * Roblox experience links published on linktr.ee/smobler.io. Yeti Realm and
 * Cobbleland have no published imagery or metrics, so those fields are omitted
 * rather than filled in.
 *
 * 3VEREST and Sephia also carry full case studies in data/projects.ts, built
 * from their own pages on smobler.io; the first link on each points there.
 */
export const worlds: World[] = [
  {
    id: '3verest',
    slug: '3verest',
    name: '3VEREST',
    tagline: 'The ascent of Mount Everest, told in five chapters from Base Camp to The Edge.',
    status: 'Live',
    heroMedia: '/projects/3verest.jpg',
    thumbnail: '/projects/3verest.jpg',
    description:
      'Smobler’s landmark mountaineering experience, built with world-renowned climbers Kenton Cool and Wasfia Nazreen — the latter appointed ambassador for the project. The climb is released as five sequential chapters in The Sandbox, and was named Best Sports Experience by the platform.',
    mechanics: [
      'Five-chapter progression: Base Camp, Icefall, Camp 2, The Wall, The Edge',
      'Built with real mountaineers Kenton Cool and Wasfia Nazreen',
      'Named Best Sports Experience by The Sandbox'
    ],
    stats: [
      { value: '5', label: 'Chapters from Base Camp to summit' }
    ],
    links: [
      { label: 'Read the case study', url: '/work/3verest' },
      { label: 'Part 1 — Base Camp', url: 'https://www.sandbox.game/en/experiences/3VEREST%20%7C%20Base%20Camp/57bce89e-d7e4-4c07-881d-e6142c2ab6ec/page/' },
      { label: 'Part 2 — Icefall', url: 'https://www.sandbox.game/en/experiences/3VEREST%20%7C%20Icefall/9dc047d8-4cb4-412d-a6e5-471b5c79b8ab/page/' },
      { label: 'Part 3 — Camp 2', url: 'https://www.sandbox.game/en/experiences/3verest-camp-2/b43d27be-399e-4acf-8301-ad96af98a2e7/page/' },
      { label: 'Part 4 — The Wall', url: 'https://www.sandbox.game/en/experiences/3VEREST%20%7C%20The%20Wall%20ver.%2010.9/7e489076-fa4e-4923-a52e-f47cf2685e07/page/' },
      { label: 'Part 5 — The Edge', url: 'https://www.sandbox.game/en/experiences/3VEREST%20%7C%20The%20Edge%20ver.%2010.9/c7498aee-ef43-4e87-9704-34301bebcbb6/page/' },
      { label: 'Ambassador announcement', url: 'https://medium.com/@smobler.io/world-renowned-mountaineer-wasfia-nazreen-appointed-ambassador-for-3verest-smoblers-landmark-953e683ea9cc' }
    ]
  },
  {
    id: 'sephia',
    slug: 'sephia',
    name: 'Sephia',
    tagline: 'An original sci-fi action title with stylised art direction and companion creatures.',
    /* smobler.io/sephia now calls it "early release phase" and links a playable
       Roblox build, so it is no longer in production only. */
    status: 'Alpha',
    heroMedia: '/projects/sephia/01-thumbnail-main.jpg',
    thumbnail: '/projects/sephia/01-thumbnail-main.jpg',
    description:
      'Smobler’s original science-fiction action IP, built on Roblox. Set on the enigmatic Cirsephia Island, five clans — Titan, Diwata, Yaksha, Asura and Kami — fight for control of Synther, a mysterious energy crystal that shapes both environment and combat.',
    mechanics: [
      'Original Smobler IP',
      'Five clans with class-based abilities and distinct fighting styles',
      'Bold low-poly art direction, companion creatures and stylised effects'
    ],
    stats: [],
    links: [
      { label: 'Read the case study', url: '/work/sephia' },
      { label: 'Explore on Roblox', url: 'https://www.roblox.com/games/16814401402/SEPHIA-PvP-Shooting-Battle#!/' }
    ]
  },
  {
    id: 'yeti-realm',
    slug: 'yeti-realm',
    name: 'Yeti Realm',
    tagline: 'A proprietary Smobler digital world property.',
    status: 'In Production',
    description:
      'One of Smobler’s proprietary digital world properties, developed alongside 3VEREST and Cobbleland as the studio moved from client commissions into owned IP.',
    mechanics: [],
    stats: [],
    links: []
  },
  {
    id: 'cobbleland',
    slug: 'cobbleland',
    name: 'Cobbleland',
    tagline: 'A proprietary Smobler digital world property.',
    status: 'In Production',
    description:
      'One of Smobler’s proprietary digital world properties, developed alongside 3VEREST and Yeti Realm as the studio moved from client commissions into owned IP.',
    mechanics: [],
    stats: [],
    links: []
  }
];
