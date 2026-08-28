import { Project } from '@/types';

/**
 * Sources: the Smobler Global Master Deck (30 Dec 2025), the S25 NUTRA pitch
 * deck, smobler.io (/game-development, /artificial-intelligence, /blockchain,
 * /phygital, /nova) and the press releases linked from linktr.ee/smobler.io.
 *
 * `sector` uses the deck's own portfolio groupings — World's Firsts, Singapore
 * Reimagined, Metaverse for Good, Edu-tainment — alongside the four business
 * pillars. `outcomeStats` is populated only where a source publishes a figure,
 * so most entries carry none.
 */
export const projects: Project[] = [
  /* ─────────────────────────── World's Firsts ─────────────────────────── */
  {
    id: 'teletubbies-custard-chaos',
    slug: 'teletubbies-custard-chaos',
    title: 'Teletubbies: Custard Chaos',
    client: 'WildBrain',
    sector: 'World’s Firsts',
    platform: ['The Sandbox'],
    year: 2024,
    heroMedia: '/projects/teletubbies-custard-chaos.jpg',
    thumbnail: '/projects/teletubbies-custard-chaos.jpg',
    videoId: 'YF9z62mqxb0',
    videoTitle: 'Teletubbies : Custard Chaos by Smobler @ The Sandbox Game',
    videoPoster: '/projects/teletubbies-custard-chaos/poster.jpg',
    oneLineOutcome:
      'The first-ever Teletubbies game, bringing a custard-themed adventure to digital natives in The Sandbox.',
    problem:
      'WildBrain wanted to reintroduce one of the most recognisable children’s properties in the world to an audience that now meets its IP inside user-generated game platforms rather than on broadcast television.',
    solution:
      'Smobler built Custard Chaos as a full voxel adventure in The Sandbox — recreating Home Dome, the Tubbytronic Superdome interior and the rolling hills of Teletubbyland, then wrapping them in a custard-run quest structure aimed at younger players and nostalgic adults alike.',
    buildSections: [
      {
        title: 'Teletubbyland in voxels',
        description:
          'The Superdome, the windmill, the hills and each of the four Teletubbies were rebuilt as voxel assets faithful enough to be recognised instantly at a glance, while staying inside The Sandbox’s asset budgets.',
        mediaUrl: '/projects/teletubbies-custard-chaos-2.jpg',
        mediaCaption: 'Interior of the Tubbytronic Superdome, rebuilt in voxels.'
      }
    ],
    credits: ['rafaela-rizzi', 'remi-cesar', 'rj-purwandito'],
    links: [
      {
        label: 'Play in The Sandbox',
        url: 'https://www.sandbox.game/en/experiences/teletubbies-custard-chaos/5bce548b-acaa-4cae-928c-9ab5f359321c/page/'
      },
      {
        label: 'Announcement',
        url: 'https://medium.com/@smobler.io/smobler-and-wildbrain-partner-to-launch-their-first-teletubbies-game-in-the-sandbox-e3b377987b04'
      }
    ],
    pullQuote: {
      text:
        'Smobler’s track record of creating high-quality games for family-friendly IPs is unparalleled, and the game so perfectly captures the playful, whimsical, and joyful nature of our beloved Teletubbies.',
      attribution: 'Melissa Goodrich',
      role: 'Director, Franchise Management, WildBrain',
      logo: '/projects/teletubbies-custard-chaos/logo-wildbrain.jpg',
    },
    gallery: [
      { src: '/projects/teletubbies-custard-chaos/01-teletubbies-baby-sun.jpg' },
      { src: '/projects/teletubbies-custard-chaos/02-teletubbies-windmill.jpg' },
      { src: '/projects/teletubbies-custard-chaos/03-captura-de-tela-2025-03-06-180548.jpg' },
      { src: '/projects/teletubbies-custard-chaos/04-teletubbies-dome-detail.jpg' },
      { src: '/projects/teletubbies-custard-chaos/05-teletubbies-broken-machine.jpg' },
      { src: '/projects/teletubbies-custard-chaos/06-captura-de-tela-2025-03-06-181027.jpg' },
      { src: '/projects/teletubbies-custard-chaos/07-captura-de-tela-2025-03-06-181154.jpg' },
      { src: '/projects/teletubbies-custard-chaos/08-teletubbies-parkour-area-09.jpg' },
      { src: '/projects/teletubbies-custard-chaos/09-teletubbies-photo-room.jpg' },
      { src: '/projects/teletubbies-custard-chaos/10-teletubbies-photo-room-02.jpg' },
      { src: '/projects/teletubbies-custard-chaos/11-teletubbies-photo-room-03.jpg' },
    ],
    isFeatured: true,
  },
  {
    id: 'bhutanverse',
    slug: 'bhutanverse',
    title: 'BHUTANVERSE',
    client: 'Druk Holding & Investments',
    sector: 'World’s Firsts',
    platform: ['The Sandbox'],
    year: 2023,
    heroMedia: '/projects/bhutanverse.jpg',
    thumbnail: '/projects/bhutanverse.jpg',
    videoId: 'jhSxbttKE0k',
    videoTitle: 'Bhutan-verse Teaser',
    videoPoster: '/projects/bhutanverse/poster.jpg',
    oneLineOutcome:
      'Bhutan’s national metaverse — a gateway to the kingdom’s culture, art and philosophy for global Web3 innovators and artists.',
    problem:
      'Druk Holding & Investments, the commercial arm of the Royal Government of Bhutan, wanted a digital gateway that could introduce the kingdom to global Web3 builders and artists without flattening the culture into decoration.',
    solution:
      'Smobler designed BHUTANVERSE around Bhutanese architecture, iconography and philosophy, releasing it as a pair of Sandbox experiences — Realm of the Sacred Guardians and The Hidden Ter — that ask players to learn the culture in order to progress.',
    credits: ['loretta-chen', 'rafaela-rizzi'],
    links: [
      {
        label: 'Realm of the Sacred Guardians',
        url: 'https://www.sandbox.game/en/experiences/BHUTANVERSE:%20Realm%20of%20the%20Sacred%20Guardians/be115de8-4bd5-4d75-90a7-f6d6d7dfff28/page/'
      },
      {
        label: 'The Hidden Ter',
        url: 'https://www.sandbox.game/en/experiences/BHUTANVERSE:%20The%20Hidden%20Ter/cf5bc557-ec15-4402-8c47-68d6237223f8/page/'
      },
      {
        label: 'Announcement',
        url: 'https://www.einpresswire.com/article/646085157/druk-holding-investments-unveils-bhutanverse-a-metaverse-based-gateway-to-bhutan-for-global-web3-innovators-artists'
      }
    ],
    pullQuote: {
      text:
        'Bhutanverse represents a significant leap into the virtual world, opening up new possibilities for young Bhutanese to leverage emerging Web3 technologies to build innovative new businesses and leisure pursuits.',
      attribution: 'Ujjwal Deep Dahal',
      role: 'CEO, Druk Holding and Investments',
      logo: '/projects/bhutanverse/logo-dhi.jpg',
    },
    gallery: [
      { src: '/projects/bhutanverse/01-bhutanverse-ter-architecture-03.jpg' },
      { src: '/projects/bhutanverse/02-bhutanverse-elephants.jpg' },
      { src: '/projects/bhutanverse/03-bhutanverse-architecture-04.jpg' },
      { src: '/projects/bhutanverse/04-bhutanverse-ter-architecture.jpg' },
      { src: '/projects/bhutanverse/05-bhutanverse-demon.jpg' },
      { src: '/projects/bhutanverse/06-bhutanverse-ter-monks.jpg' },
      { src: '/projects/bhutanverse/07-bhutanverse-architecture-02.jpg' },
      { src: '/projects/bhutanverse/08-bhutanverse-ter-dhi.jpg' },
      { src: '/projects/bhutanverse/09-bhutanverse-ter-art-gallery.jpg' },
    ],
    isFeatured: true,
  },
  {
    id: 'austinverse',
    slug: 'austinverse',
    title: 'AUSTINVERSE',
    client: 'City of Austin',
    sector: 'World’s Firsts',
    platform: ['The Sandbox'],
    year: 2024,
    heroMedia: '/projects/austinverse.jpg',
    thumbnail: '/projects/austinverse.jpg',
    oneLineOutcome:
      'A voxel Austin built with the City of Austin, hosting the Asia × Austin Summit inside the skyline it recreates.',
    credits: ['rafaela-rizzi'],
    isFeatured: false,
  },
  {
    id: 'phygital-wedding',
    slug: 'phygital-wedding',
    title: 'Phygital Wedding',
    client: '1 Group',
    sector: 'World’s Firsts',
    platform: ['The Sandbox'],
    year: 2022,
    heroMedia: '/projects/phygital-wedding.jpg',
    thumbnail: '/projects/phygital-wedding.jpg',
    oneLineOutcome:
      'Singapore’s first metaverse wedding — a ceremony held simultaneously in a physical venue and a purpose-built voxel garden.',
    solution:
      'Smobler built a voxel wedding venue that ran in step with the physical ceremony, so guests who could not travel attended as avatars rather than as viewers on a video call.',
    links: [
      {
        label: 'CNA coverage',
        url: 'https://www.channelnewsasia.com/singapore/metaverse-wedding-sandbox-virtual-reality-singapore-first-2960256'
      }
    ],
    isFeatured: false,
  },
  {
    id: 'saving-claybox',
    slug: 'saving-claybox',
    title: 'Saving ClayBox: The Sonic Sands Adventure',
    client: 'Clay Nation',
    sector: 'World’s Firsts',
    platform: ['The Sandbox', 'Cardano', 'Polygon'],
    year: 2023,
    heroMedia: '/projects/saving-claybox.jpg',
    thumbnail: '/projects/saving-claybox.jpg',
    videoId: 'clIgw8tTwQI',
    videoTitle: 'Clay Nation | The Sandbox Game',
    videoPoster: '/projects/saving-claybox/poster.jpg',
    oneLineOutcome:
      'The first cross-chain experience in The Sandbox, bridging Cardano and Polygon — awarded Best Branded Experience.',
    problem:
      'Clay Nation’s community and assets lived on Cardano, while The Sandbox runs on Polygon. Bringing the IP into the platform meant crossing a chain boundary that no branded experience had crossed before.',
    solution:
      'Smobler delivered the first cross-chain experience on the platform, carrying the Clay Nation aesthetic into voxel form and letting a Cardano-native community play inside a Polygon-based world.',
    links: [
      {
        label: 'Play in The Sandbox',
        url: 'https://www.sandbox.game/en/experiences/Saving%20ClayBox:%20The%20Sonic%20Sands%20adventure./2b83e9e9-1c67-4947-be5f-ea6e98567efb/page/'
      }
    ],
    gallery: [
      { src: '/projects/saving-claybox/01-cv4.jpg' },
      { src: '/projects/saving-claybox/02-cv6.jpg' },
      { src: '/projects/saving-claybox/03-cv3.jpg' },
      { src: '/projects/saving-claybox/04-claynation-baby.jpg' },
      { src: '/projects/saving-claybox/05-claynation-reading-journal.jpg' },
      { src: '/projects/saving-claybox/06-clay4.jpg' },
      { src: '/projects/saving-claybox/07-clay6.jpg' },
      { src: '/projects/saving-claybox/08-clay5.jpg' },
      { src: '/projects/saving-claybox/09-clay8.jpg' },
      { src: '/projects/saving-claybox/10-claynation-frog.jpg' },
      { src: '/projects/saving-claybox/11-clay15.jpg' },
      { src: '/projects/saving-claybox/12-claynation-mushroom-boss.jpg' },
      { src: '/projects/saving-claybox/13-claynation-neon-mushrooms.jpg' },
    ],
    isFeatured: false,
  },

  /* ───────────────────────── Singapore Reimagined ──────────────────────── */
  {
    id: 'lets-celebrate-2024',
    slug: 'lets-celebrate-2024',
    title: 'Let’s Celebrate 2024',
    client: 'Mediacorp',
    sector: 'Singapore Reimagined',
    platform: ['Roblox'],
    year: 2023,
    heroMedia: '/projects/lets-celebrate-2024.jpg',
    thumbnail: '/projects/lets-celebrate-2024.jpg',
    videoId: 'DS3K-DaC0ps',
    videoTitle: 'Mediacorp Let\'s Celebrate 2024 Interactive Game',
    videoPoster: '/projects/lets-celebrate-2024/poster.jpg',
    oneLineOutcome:
      'Singapore’s first countdown game — an interactive New Year’s Eve experience with celebrity interactions, built with the national media network.',
    solution:
      'Smobler built an interactive countdown experience for Mediacorp that ran alongside the broadcast, letting players celebrate the turn of the year inside a game rather than in front of a screen.',
    links: [
      {
        label: 'Announcement',
        url: 'https://www.einpresswire.com/article/675858597/let-s-celebrate-2024-with-singapore-s-national-media-network-mediacorp-in-the-metaverse'
      }
    ],
    pullQuote: {
      text:
        'Mediacorp is thrilled to venture into the metaverse space to enhance engagement with our digital-native audience. “Let’s Celebrate 2024” is not just an event, it is a true ‘phygital’ experience that enables our audience to interact with our brands and personalities like never before.',
      attribution: 'Sonal Mathur',
      role: 'Vice President Partnerships and New Business, Mediacorp',
      logo: '/projects/lets-celebrate-2024/logo-media-corp.jpg',
    },
    gallery: [
      { src: '/projects/lets-celebrate-2024/01-1.jpg' },
      { src: '/projects/lets-celebrate-2024/02-2.jpg' },
      { src: '/projects/lets-celebrate-2024/03-fireworks.jpg' },
      { src: '/projects/lets-celebrate-2024/04-7.jpg' },
      { src: '/projects/lets-celebrate-2024/05-7-1.jpg' },
      { src: '/projects/lets-celebrate-2024/06-4.jpg' },
      { src: '/projects/lets-celebrate-2024/07-5-1.jpg' },
      { src: '/projects/lets-celebrate-2024/08-mediacorp.jpg' },
    ],
    isFeatured: false,
  },
  {
    id: 'silverkris-lounge',
    slug: 'silverkris-lounge',
    title: 'SilverKris Lounge',
    client: 'Singapore Airlines',
    sector: 'Singapore Reimagined',
    platform: ['The Sandbox'],
    year: 2023,
    heroMedia: '/projects/silverkris-lounge.jpg',
    thumbnail: '/projects/silverkris-lounge.jpg',
    oneLineOutcome:
      'Singapore Airlines’ flagship lounge rebuilt in voxels, carrying the brand’s hospitality language into a virtual space.',
    isFeatured: false,
  },
  {
    id: 'lky100',
    slug: 'lky100',
    title: 'LKY100 Tribute Exhibition',
    client: 'SPA Esprit Group',
    sector: 'Singapore Reimagined',
    platform: ['The Sandbox'],
    year: 2023,
    heroMedia: '/projects/lky100.jpg',
    thumbnail: '/projects/lky100.jpg',
    videoId: 'TWmqjbZWerg',
    videoTitle: 'LKY100 Tribute Exhibition @ The Sandbox Game',
    videoPoster: '/projects/lky100/poster.jpg',
    oneLineOutcome:
      'A virtual tribute exhibition for Lee Kuan Yew’s birth centennial, featuring Singaporean artist y/x’s ‘Light and Brilliance’.',
    solution:
      'Smobler built a walkable garden exhibition in The Sandbox to house the commissioned artwork, pairing the digital tribute with a physical installation.',
    links: [
      {
        label: 'Visit the exhibition',
        url: 'https://www.sandbox.game/experiences/LKY100%20Tribute%20Exhibition/e012f99a-4d3d-4fef-942f-6160f72a13b1/page'
      },
      {
        label: 'Announcement',
        url: 'https://www.einpresswire.com/article/654530068/singaporean-artist-y-x-creates-light-and-brilliance-in-commemoration-of-lee-kuan-yew-s-birth-centennial'
      }
    ],
    gallery: [
      { src: '/projects/lky100/01-lky100-guy-and-gardener.jpg' },
      { src: '/projects/lky100/02-lky100-landscape.jpg' },
      { src: '/projects/lky100/03-lky100-light-and-brilliance-art.jpg' },
      { src: '/projects/lky100/04-lky100-every-drop-art.jpg' },
      { src: '/projects/lky100/05-lky100-architect-art-02.jpg' },
      { src: '/projects/lky100/06-lky100-hero-tears-art-02.jpg' },
      { src: '/projects/lky100/07-lky100-incorruptibility-art-02.jpg' },
      { src: '/projects/lky100/08-lky100-man-and-child-art.jpg' },
      { src: '/projects/lky100/09-7db8c21cdd67ead1d8ee53ac17a430ac-lky100-rebrilliance-statue-02.jpg' },
      { src: '/projects/lky100/10-lky100-willing-spirit-art.jpg' },
      { src: '/projects/lky100/11-lky100-man-of-steel-art.jpg' },
    ],
    isFeatured: false,
  },
  {
    id: 'dreamscape',
    slug: 'dreamscape',
    title: 'Dreamscape by SNACK',
    client: 'NTUC Income',
    sector: 'Singapore Reimagined',
    platform: ['The Sandbox', 'Roblox'],
    year: 2023,
    heroMedia: '/projects/dreamscape.jpg',
    thumbnail: '/projects/dreamscape.jpg',
    videoId: '9GDbPTWkQc4',
    videoTitle: 'Dreamscape by SNACK',
    videoPoster: '/projects/dreamscape/poster.jpg',
    oneLineOutcome:
      'An aspirations-driven experience for NTUC Income’s SNACK, built with Mastercard, Visa and Garmin as partners.',
    links: [
      {
        label: 'Play in The Sandbox',
        url: 'https://www.sandbox.game/en/experiences/Dreamscape%20by%20SNACK/a1caa161-3919-4bd9-90f2-dbf4a6c16b20/page/'
      }
    ],
    gallery: [
      { src: '/projects/dreamscape/01-dreamscape-beach-02.jpg' },
      { src: '/projects/dreamscape/02-dreamscape-carro-01.jpg' },
      { src: '/projects/dreamscape/03-dreamscape-and-brands.jpg' },
      { src: '/projects/dreamscape/04-dreamscape-brands-01.jpg' },
      { src: '/projects/dreamscape/05-dreamscape-viu.jpg' },
      { src: '/projects/dreamscape/06-dreamscape-garmin.jpg' },
      { src: '/projects/dreamscape/07-47d799124eb4c4848e16ceba21afadf5-dreamscape-rev-and-garmin.jpg' },
      { src: '/projects/dreamscape/08-dreamscape-village.jpg' },
      { src: '/projects/dreamscape/09-dreamscape-maze-gate.jpg' },
      { src: '/projects/dreamscape/10-dreamscape-robots-dancing.jpg' },
    ],
    isFeatured: false,
  },

  /* ───────────────────────── Metaverse for Good ────────────────────────── */
  {
    id: 'a11y-park',
    slug: 'a11y-park',
    title: 'A11Y Park',
    client: 'SG Enable & A11yVerse',
    sector: 'Metaverse for Good',
    platform: ['The Sandbox'],
    year: 2024,
    heroMedia: '/projects/a11y-park.jpg',
    thumbnail: '/projects/a11y-park.jpg',
    videoId: 'Se9oRxvFdtI',
    videoTitle: 'A11y Park Teaser',
    videoPoster: '/projects/a11y-park/poster.jpg',
    oneLineOutcome:
      'The world’s first disability-led accessibility park and training programme in the metaverse, with sensory gardens and a virtual museum.',
    problem:
      'Virtual worlds are routinely designed without disabled players in the room, so accessibility arrives — if at all — as a retrofit rather than a premise.',
    solution:
      'Smobler and A11yVerse built A11Y Park as a disability-led project: a park with sensory gardens, a virtual museum and an accompanying training programme, designed by and with the people it is for.',
    links: [
      {
        label: 'Enter A11Y Park',
        url: 'https://www.sandbox.game/en/experiences/A11Y%20PARK:%20Alpha/c904d1b8-cc64-4ff6-a332-bce602a2840b/page/'
      },
      {
        label: 'Announcement',
        url: 'https://www.einpresswire.com/article/700472262/smobler-and-a11yverse-to-pioneer-world-s-first-disability-led-accessibility-park-training-program-in-the-metaverse'
      }
    ],
    credits: ['loretta-chen', 'rafaela-rizzi'],
    gallery: [
      { src: '/projects/a11y-park/01-a11y-park-06.jpg' },
      { src: '/projects/a11y-park/02-a11y-park-05.jpg' },
      { src: '/projects/a11y-park/03-a11y-park-07.jpg' },
      { src: '/projects/a11y-park/04-a11y-park-02.jpg' },
      { src: '/projects/a11y-park/05-a11y-park-03.jpg' },
      { src: '/projects/a11y-park/06-a11y-park-11.jpg' },
      { src: '/projects/a11y-park/07-a11y-park-08.jpg' },
      { src: '/projects/a11y-park/08-a11y-park-01.jpg' },
    ],
    isFeatured: false,
  },
  {
    id: 'peace-sanctuary',
    slug: 'peace-sanctuary',
    title: 'Peace Sanctuary: The Eternal Quest for Peace',
    client: 'Animoca Brands & The Sandbox',
    sector: 'Metaverse for Good',
    platform: ['The Sandbox'],
    year: 2024,
    heroMedia: '/projects/peace-sanctuary.jpg',
    thumbnail: '/projects/peace-sanctuary.jpg',
    videoId: 'CXzF__yjInA',
    videoTitle: 'The Universal Peace Sanctuary: A Metaverse Journey to Inner Peace 🕊️ [Trailer]',
    videoPoster: '/projects/peace-sanctuary/poster.jpg',
    oneLineOutcome:
      'A virtual Universal Peace Sanctuary built with Animoca Brands and The Sandbox, gamifying global harmony and connection.',
    links: [
      {
        label: 'Enter the Sanctuary',
        url: 'https://www.sandbox.game/en/experiences/Peace%20Sanctuary:%20The%20Eternal%20Quest%20for%20Peace/2f8cc492-7198-48df-9672-126090465f0f/page/'
      },
      {
        label: 'Announcement',
        url: 'https://medium.com/@smobler.io/animoca-brands-the-sandbox-smobler-launch-virtual-universal-peace-sanctuary-3339b7b6fedb'
      }
    ],
    pullQuote: {
      text:
        'We are very excited to work with Smobler and His Eminence Rinpoche on the digital version of the Universal Peace Sanctuary, a project that promotes inclusive and harmonious spaces in both the real and virtual realms.',
      attribution: 'Yat Siu',
      role: 'Co-Founder & Executive Chairman, Animoca Brands',
      logo: '/projects/peace-sanctuary/logo-animoca-brands.jpg',
    },
    gallery: [
      { src: '/projects/peace-sanctuary/01-peace-sanctuary-library.jpg' },
      { src: '/projects/peace-sanctuary/02-peace-sanctuary-books.jpg' },
      { src: '/projects/peace-sanctuary/03-peace-sanctuary-building.jpg' },
      { src: '/projects/peace-sanctuary/04-peace-sanctuary-statue.jpg' },
      { src: '/projects/peace-sanctuary/05-peace-sanctuary-painting.jpg' },
      { src: '/projects/peace-sanctuary/06-peace-sanctuary-flowers-and-butterflies.jpg' },
      { src: '/projects/peace-sanctuary/07-peace-sanctuary-meditating-monks.jpg' },
      { src: '/projects/peace-sanctuary/08-ps-05.jpg' },
      { src: '/projects/peace-sanctuary/09-peace-sanctuary-lotus-monk.jpg' },
      { src: '/projects/peace-sanctuary/10-ee758df44b645d6ba3fed604c8cf5b74-meditationcrowdevent01.jpg' },
    ],
    isFeatured: false,
  },
  {
    id: '8sian-town',
    slug: '8sian-town',
    title: '8SIAN TOWN',
    client: '8SIAN & The Royal Press',
    sector: 'Metaverse for Good',
    platform: ['The Sandbox'],
    year: 2023,
    heroMedia: '/projects/8sian-town.jpg',
    thumbnail: '/projects/8sian-town.jpg',
    videoId: 'zTMk-QehYJ4',
    videoTitle: '8SIAN TOWN Trailer | Metaverse for Good @ The Sandbox Game',
    videoPoster: '/projects/8sian-town/poster.jpg',
    oneLineOutcome:
      'A women-founded Southeast Asian cultural festival in The Sandbox, from calligraphy workshops to dragon battles.',
    links: [
      {
        label: 'Visit 8SIAN TOWN',
        url: 'https://www.sandbox.game/en/experiences/a1/0573ec77-935b-4742-b96b-19917905a4d0/page/'
      },
      {
        label: 'Announcement',
        url: 'https://www.einpresswire.com/article/647338172/launch-of-women-founded-8siantown-in-the-sandbox'
      }
    ],
    pullQuote: {
      text:
        'As a parent, I see how my kids are naturally drawn to voxel-based worlds like Minecraft and Roblox. It brings me immense joy to put Asian culture on the map in The Sandbox, promoting our rich heritage while collaborating with The Royal Press, the oldest letterpress museum in Malaysia.',
      attribution: 'Nicole Yap',
      role: 'Founder, 8SIAN',
      logo: '/projects/8sian-town/logo-8sian.jpg',
    },
    gallery: [
      { src: '/projects/8sian-town/01-captura-de-tela-2025-01-24-101106.jpg' },
      { src: '/projects/8sian-town/02-captura-de-tela-2024-10-03-163749.jpg' },
      { src: '/projects/8sian-town/03-captura-de-tela-2024-10-01-132405.jpg' },
      { src: '/projects/8sian-town/04-captura-de-tela-2025-01-24-101138.jpg' },
      { src: '/projects/8sian-town/05-captura-de-tela-2025-01-24-101516.jpg' },
      { src: '/projects/8sian-town/06-8sian-fair.jpg' },
      { src: '/projects/8sian-town/07-captura-de-tela-2025-01-24-102607.jpg' },
      { src: '/projects/8sian-town/08-captura-de-tela-2024-10-03-163825.jpg' },
      { src: '/projects/8sian-town/09-8sian-architecture-dark.jpg' },
      { src: '/projects/8sian-town/10-8sian-dragons-dark-02.jpg' },
      { src: '/projects/8sian-town/11-captura-de-tela-2024-09-30-170937.jpg' },
    ],
    isFeatured: false,
  },
  {
    id: 'sonik-satellitez',
    slug: 'sonik-satellitez',
    title: 'Sonik Satellitez',
    client: 'Music For Good & National Arts Council',
    sector: 'Metaverse for Good',
    platform: ['The Sandbox'],
    year: 2024,
    heroMedia: '/projects/sonik-satellitez.jpg',
    thumbnail: '/projects/sonik-satellitez.jpg',
    videoId: '7XoFqQ2WJ04',
    videoTitle: 'Sonik Satellitez Trailer | Metaverse for Good @ The Sandbox Game',
    videoPoster: '/projects/sonik-satellitez/poster.jpg',
    oneLineOutcome:
      'A music-driven experience launched with Singapore rock icon Inch Chua, putting the working life of a musician into play.',
    solution:
      'Built with Inch Chua and the National Arts Council under the Music For Good banner, Sonik Satellitez turns the career obstacles young musicians actually face into game mechanics, and follows them out to a lunar sequel, Lunar Leap.',
    links: [
      {
        label: 'Play Sonik Satellitez',
        url: 'https://www.sandbox.game/en/experiences/Sonik%20Satellitez/1850d6f1-2242-4744-b685-eb8a91954c23/page/'
      },
      {
        label: 'Play Lunar Leap',
        url: 'https://www.sandbox.game/en/experiences/Sonik%20Satellitez:%20Lunar%20Leap/d6e905c0-e3d5-4d98-9628-d62fd9ce434f/page/'
      },
      {
        label: 'Announcement',
        url: 'https://medium.com/@smobler.io/smobler-and-singapores-rock-icon-inch-chua-launch-music-for-good-to-champion-young-musicians-in-ebe65e0a2709'
      }
    ],
    pullQuote: {
      text:
        'Music For Good pursues opportunities that focus on audience and capability development in the arts and culture space. A big part of that is being unafraid to explore new models and creating new experiences to fill some gaps in the industry. Smobler has been a perfect partner with our aligned goals and values.',
      attribution: 'Inch Chua',
      role: 'Founder, Music For Good',
      logo: '/projects/sonik-satellitez/logo-b97e43b5edef4b9d8cefb10c178e7f59-music-for-good.jpg',
    },
    gallery: [
      { src: '/projects/sonik-satellitez/01-sonik-satellitez-architecture-01.jpg' },
      { src: '/projects/sonik-satellitez/02-sonik-satellitez-music-talent.jpg' },
      { src: '/projects/sonik-satellitez/03-sonik-satellitez-architecture-04.jpg' },
      { src: '/projects/sonik-satellitez/04-sonik-satellitez-singers-02.jpg' },
      { src: '/projects/sonik-satellitez/05-sonik-satellitez-fish-lake.jpg' },
      { src: '/projects/sonik-satellitez/06-lunar-leap-architecture-03.jpg' },
      { src: '/projects/sonik-satellitez/07-lunar-leap-architecture-05.jpg' },
      { src: '/projects/sonik-satellitez/08-lunar-leap-finish-line-03.jpg' },
      { src: '/projects/sonik-satellitez/09-lunar-leap-inch.jpg' },
      { src: '/projects/sonik-satellitez/10-lunar-leap-bored-sun.jpg' },
    ],
    isFeatured: false,
  },

  /* ─────────────────────────── Edu-tainment ────────────────────────────── */
  {
    id: 'equalverse',
    slug: 'equalverse',
    title: 'EQUAL-verse',
    client: 'StarHub, Rotary Club Singapore & EQUAL',
    sector: 'Edu-tainment',
    platform: ['Roblox'],
    year: 2023,
    heroMedia: '/projects/equalverse.jpg',
    thumbnail: '/projects/equalverse.jpg',
    videoId: 'n-Kx-Xc39t0',
    videoTitle: 'EQUAL-verse Trailer @ Roblox',
    videoPoster: '/projects/equalverse/poster.jpg',
    oneLineOutcome:
      'An equestrian wellness sanctuary on Roblox that opens horse-assisted therapy to players who could never reach a stable.',
    links: [
      {
        label: 'Play on Roblox',
        url: 'https://www.roblox.com/games/13829375568/Rotary-StarHub-Equalverse'
      }
    ],
    gallery: [
      { src: '/projects/equalverse/01-nofilter-1.jpg' },
      { src: '/projects/equalverse/02-nofilter-6.jpg' },
      { src: '/projects/equalverse/03-nofilter-5.jpg' },
      { src: '/projects/equalverse/04-nofilter-2.jpg' },
      { src: '/projects/equalverse/05-nofilter-3.jpg' },
      { src: '/projects/equalverse/06-nofilter-4.jpg' },
    ],
    isFeatured: false,
  },
  {
    id: 'playground-uxc',
    slug: 'playground-uxc',
    title: 'Playground @ UXC',
    client: 'Singapore Polytechnic',
    sector: 'Edu-tainment',
    platform: ['Roblox'],
    year: 2024,
    heroMedia: '/projects/playground-uxc.jpg',
    thumbnail: '/projects/playground-uxc.jpg',
    oneLineOutcome:
      'A virtual campus playground for Singapore Polytechnic, turning wellbeing and biomedical curriculum into explorable space.',
    isFeatured: false,
  },
  {
    id: 'herstory',
    slug: 'herstory',
    title: 'HERSTORY',
    client: 'Smobler & PANGU',
    sector: 'Edu-tainment',
    platform: ['The Sandbox'],
    year: 2022,
    heroMedia: '/projects/herstory.jpg',
    thumbnail: '/projects/herstory.jpg',
    oneLineOutcome:
      'A joint build with metaverse studio PANGU telling women’s stories inside a medium that rarely centres them.',
    links: [
      {
        label: 'Announcement',
        url: 'https://www.einpresswire.com/article/620776244/metaverse-studios-pangu-and-smobler-join-forces-to-create-herstory'
      }
    ],
    isFeatured: false,
  },
  {
    id: 'mimis-dream-builders',
    slug: 'mimis-dream-builders',
    title: 'Mimi’s Dream Builders',
    client: 'Prosperous Kids',
    sector: 'Edu-tainment',
    platform: ['Roblox'],
    year: 2026,
    heroMedia: '/pillars/educational-gaming.jpg',
    thumbnail: '/pillars/educational-gaming.jpg',
    oneLineOutcome:
      'Financial literacy for children as a playful dog-walking adventure on Roblox, built with Prosperous Kids.',
    problem:
      'Dr. Michele Cho-Dorado, a pediatric subspecialist, realised almost a decade into her medical practice that she had never been taught to manage money — and that the children she treated were on the same path.',
    solution:
      'A Technology for Good collaboration with Prosperous Kids: an immersive Roblox experience that turns financial learning into a dog-walking adventure, so the lesson arrives as play rather than as a syllabus.',
    credits: ['rafaela-rizzi'],
    links: [
      {
        label: 'Announcement',
        url: 'https://medium.com/@smobler.io/empowering-the-next-generation-smobler-partners-with-prosperous-kids-c0f6e004eecc'
      }
    ],
    isFeatured: false,
  },
  {
    id: 'bright-futures',
    slug: 'bright-futures',
    title: 'Bright Futures — Reach for the Stars',
    client: 'Smobler',
    sector: 'Edu-tainment',
    platform: ['Game'],
    year: 2025,
    heroMedia: '/projects/bright-futures.jpg',
    thumbnail: '/projects/bright-futures.jpg',
    oneLineOutcome:
      'A gamified financial literacy journey — a cozy life simulation where players chase real goals and learn to manage money on the way.',
    problem:
      'Financial literacy is taught as a syllabus, which is precisely why it does not stick: the lesson arrives years before the decision it is meant to inform.',
    solution:
      'Reach for the Stars is a cozy life simulation game where players chase personal dreams, like buying a house, going back to school, or traveling the world, while learning real-world financial skills. Through relatable goals and everyday choices, players grow their character, manage money, and shape their future one smart step at a time.',
    isFeatured: false,
  },
  {
    id: 'vr-medical-training',
    slug: 'vr-medical-training',
    title: 'VR Medical Training Simulation',
    client: 'Educational institutions',
    sector: 'Edu-tainment',
    platform: ['VR'],
    year: 2025,
    heroMedia: '/projects/vr-medical-training.jpg',
    thumbnail: '/projects/vr-medical-training.jpg',
    oneLineOutcome:
      'Hands-on medical training in VR — ten medical roles in realistic settings, with gamified objectives and a basic-to-advanced progression.',
    outcomeStats: [
      { value: '10', label: 'Medical roles in realistic settings' }
    ],
    solution:
      'A VR simulation suite for educational institutions built around four commitments: hands-on and immersive learning, ten medical roles in realistic settings, a levelling path from basic to advanced, and gamified learning objectives.',
    isFeatured: false,
  },

  /* ──────────────────────────────── AI ─────────────────────────────────── */
  {
    id: 'nutra',
    slug: 'nutra',
    title: 'NUTRA — The Food AI Operating System',
    client: 'Smobler',
    sector: 'AI',
    platform: ['Web', 'Meta Llama'],
    year: 2025,
    heroMedia: '/products/nutra.jpg',
    thumbnail: '/products/nutra.jpg',
    oneLineOutcome:
      'Automates nutrition labelling and HACCP plans so food founders launch faster and carry less regulatory risk — one year of compliance work compressed into 35 hours.',
    outcomeStats: [
      { value: '35 hrs', label: 'Compliance work, down from 12+ months' },
      { value: '99.6%', label: 'Time saved versus the manual route' },
      { value: '$299', label: 'Per month, against $15K+ in consultant fees' }
    ],
    problem:
      'Brandon Askew, founder of Hawaiian Vinegar Company, spent 12+ months battling FDA compliance, 8+ weeks researching production equipment, 30+ days chasing local suppliers and 6+ months scaling from kitchen to market. “This is insanity! Most people can’t do this.” He is not alone: an estimated 80% of food entrepreneurs hit the same fragmented maze, which kills ideas before they ever reach shelves. Regulatory red tape means 1+ year delays and USD 15K+ in sunk costs before launch; fragmented sourcing destroys unit economics; and one-size-fits-all tools ignore local markets, especially across APAC.',
    solution:
      'NUTRA is one unified experience across five modules: Compliance (AI-powered HACCP plus nutrition labels in 30 minutes), Supplier Intelligence (smart matching with ranked suppliers), Production Optimization (SOP generation tuned to local equipment), Workflow Management (a recipe-to-commercial pipeline with version control) and an Analytics Engine (real-time cost modelling, projection and performance insights).',
    aiRole: {
      modelRole:
        'Generates HACCP plans and FDA-compliant nutrition labels from a described production process, identifies hazards, ranks suppliers, and drafts production SOPs — built on Meta Llama with retrieval-augmented generation over food-specific and cultural context.',
      humanRole:
        'Entrepreneurs supervise, review and override every AI suggestion. All decisions are traceable and explained, bias is actively monitored, data is protected by encryption and strict access control, and the platform tracks changing food safety regulation.',
      technicalHighlights: [
        'Open architecture on Meta Llama — customisable rather than a black box',
        'Domain specialisation: food-specific training and optimisation',
        'Cultural integration for APAC and Native Hawaiian business context',
        'Responsible AI framework for enterprise food safety trust'
      ]
    },
    buildSections: [
      {
        title: 'From dashboard to compliant label',
        description:
          'Start at the dashboard, search and add ingredients, and generate an FDA-compliant nutrition label — the serving-size calculator, label preview and export sit in one pass rather than across three vendors.',
        mediaUrl: '/products/nutra.jpg',
        mediaCaption: 'Nutrition label preview and export inside NUTRA.'
      },
      {
        title: 'Describe the process, get a HACCP plan',
        description:
          'The entrepreneur describes their production process in plain language; the model identifies hazards and a HACCP plan is created — the step that conventionally takes months of consultant time.',
        mediaUrl: '/products/nutra-2.jpg',
        mediaCaption: 'AI hazard identification and HACCP plan generation.'
      }
    ],
    credits: ['loretta-chen', 'mridhul-pax'],
    isFeatured: true,
  },
  {
    id: 'robin-ai',
    slug: 'robin-ai',
    title: 'Robin AI',
    client: 'WVAPDC, Leeward Community College & the State of Hawai‘i',
    sector: 'AI',
    platform: ['Web'],
    year: 2025,
    heroMedia: '/pillars/ai-food.jpg',
    thumbnail: '/pillars/ai-food.jpg',
    oneLineOutcome:
      'Helps Hawaiian food entrepreneurs streamline product development, built with the Wahiawā Value-Added Product Development Center.',
    solution:
      'Robin AI is Smobler’s deployment with the Wahiawā Value-Added Product Development Center, Leeward Community College and the State of Hawai‘i — endorsed by a State commission and validated with Mana Up local consumer brands including Aloha Spice Company, Kauai Gourmet Nuts, Keani Hawaii, Oribe Tea and Paper Crane Soaps.',
    credits: ['loretta-chen', 'creighton-liu'],
    gallery: [
      { src: '/projects/robin-ai/01-robin-ai-1.jpg' },
      { src: '/projects/robin-ai/02-robin-ai-3.jpg' },
      { src: '/projects/robin-ai/03-robin-ai-2.jpg' },
    ],
    isFeatured: false,
  },
  {
    id: 'twinity',
    slug: 'twinity',
    title: 'Twinity',
    client: 'Smobler',
    sector: 'AI',
    platform: ['Web'],
    year: 2025,
    oneLineOutcome:
      'Photorealistic digital avatars delivering broadcast-quality video with authentic lip-sync in 40+ languages and round-the-clock engagement.',
    outcomeStats: [
      { value: '40+', label: 'Languages with authentic lip-sync' }
    ],
    solution:
      'Twinity produces photorealistic digital humans for enterprise marketing, training and support teams — broadcast-quality video, authentic lip-sync in 40+ languages, and 24/7 engagement, aimed at a global digital human market accelerating toward a $527B economy.',
    isFeatured: false,
  },

  /* ───────────────────────────── Blockchain ────────────────────────────── */
  {
    id: 'digital-bunkering',
    slug: 'digital-bunkering',
    title: 'Digital Bunkering',
    client: 'Mysten Labs & Sui Foundation',
    sector: 'Blockchain',
    platform: ['Sui'],
    year: 2025,
    heroMedia: '/products/digital-bunkering.jpg',
    thumbnail: '/products/digital-bunkering.jpg',
    oneLineOutcome:
      'A first-in-class blockchain platform for maritime fuel bunkering, built to meet Singapore’s 2025 digital bunkering mandate.',
    outcomeStats: [
      { value: '$120B', label: 'Maritime fuel bunkering market' }
    ],
    problem:
      'Ship refuelling still runs on manual, paper-based processes, in an industry where trust at sea, regulatory compliance and operational integrity are mission-critical — and where Singapore’s 2025 mandate requires digital bunkering outright.',
    solution:
      'Smobler is building a first-in-class blockchain platform for maritime fuel bunkering on Sui, using smart contracts and NFT-based verification. A ship requests 300MT; the supplier mints tokenised fuel; delivery is verified via GPS; the smart contract confirms and mints an NFT receipt; settlement completes instantly — with ESG tracking, carbon metrics and fully transparent documentation throughout.',
    aiRole: undefined,
    buildSections: [
      {
        title: 'Expansion beyond Singapore',
        description:
          'Built with Mysten Labs and the Sui Foundation, with Walrus as industry logistics partner, and planned expansion across APAC and the ARA ports — Amsterdam, Rotterdam and Antwerp.',
        mediaUrl: '/products/digital-bunkering-2.jpg',
        mediaCaption: 'Digital bunkering across APAC and the ARA ports.'
      }
    ],
    credits: ['mridhul-pax', 'desmond-tay'],
    gallery: [
      { src: '/projects/digital-bunkering/01-digital-bunkering-1.jpg' },
      { src: '/projects/digital-bunkering/02-digital-bunkering-2.jpg' },
      { src: '/projects/digital-bunkering/03-digital-bunkering-3.jpg' },
    ],
    isFeatured: false,
  },
  {
    id: 'posable',
    slug: 'posable',
    title: 'Posable',
    client: 'Smobler',
    sector: 'Blockchain',
    platform: ['Stablecoin settlement'],
    year: 2025,
    heroMedia: '/pillars/blockchain-maritime.jpg',
    thumbnail: '/pillars/blockchain-maritime.jpg',
    oneLineOutcome:
      'Smobler’s next-generation stablecoin settlement orchestrator, enabling real-time, compliant USD payments across global shipping and bunkering networks.',
    isFeatured: false,
  },

  /* ────────────────────────────── Phygital ─────────────────────────────── */
  {
    id: 'nova',
    slug: 'nova',
    title: 'NOVA — Makers. Meets. Metaverse.',
    client: 'Smobler (proprietary IP)',
    sector: 'Phygital',
    platform: ['IRL'],
    year: 2025,
    heroMedia: '/events/nova-2025-singapore.jpg',
    thumbnail: '/events/nova-2025-singapore.jpg',
    oneLineOutcome:
      'Smobler’s flagship festival, where Wall Street, Main Street, Art Row and humanity converge — five editions across Singapore, Austin and Honolulu.',
    problem:
      'Web3 conferences talk to Web3. The people who most need to meet — institutions, artists, founders, technologists — keep arriving at separate rooms.',
    solution:
      'NOVA is a Smobler proprietary IP and a celebration of the communities created by and connected with the Smobler ecosystem: an in-real-life festival hosted in sync with major crypto and Web3 events, bringing together innovators, creators and institutions at the frontier of Web3, AI and immersive tech.',
    buildSections: [
      {
        title: 'NOVA 2023: Singapore',
        description:
          'The inaugural edition, debuting alongside TOKEN2049 and bringing phygital art, gaming and live entertainment together in one room.',
        mediaUrl: '/events/nova-2023-singapore.jpg'
      },
      {
        title: 'NOVA 2024: Austin',
        description:
          'An official SXSW event, staged with the Greater Austin Asian Chamber of Commerce and Republic of Gamers.',
        mediaUrl: '/events/nova-2024-austin.jpg'
      },
      {
        title: 'NOVA 2024: Singapore',
        description:
          'TOKEN2049 event and afterparty partner, timed to the F1 night race, with Agoria and Champ Medici headlining.',
        mediaUrl: '/events/nova-2024-singapore.jpg'
      },
      {
        title: 'NOVA 2025: Singapore — the SG60 edition',
        description:
          'On 2 October, NOVA returned to Singapore for the nation’s 60th anniversary, presented by the New York Stock Exchange in collaboration with Gemini, Nifty Gateway Studio, Skadden, Michigan Ross Executive Education and Skypoly. Conversations ran on The Future of Money, The Future of Identity, and The Future of Learning & Leadership — uniting voices from Wall Street to Orchard Road, Web2 to Web3, academia to industry, and culture to code.',
        mediaUrl: '/events/nova-2025-singapore.jpg'
      }
    ],
    credits: ['loretta-chen', 'gianna-bui', 'jane-ngo'],
    links: [
      {
        label: 'NOVA bridges Wall Street and Singapore',
        url: 'https://medium.com/@smobler.io/smoblers-nova-bridges-wall-street-frontier-tech-and-singapore-s-innovation-ecosystem-b4990d72a548'
      },
      {
        label: 'NOVA expands to Hawaii',
        url: 'https://medium.com/@smobler.io/smobler-expands-to-hawaii-with-nova-launch-abf5db2f77e1'
      }
    ],
    isFeatured: false,
  },
  {
    id: 'pop-toy-show',
    slug: 'pop-toy-show',
    title: 'Pop Toy Show Singapore',
    client: 'The Singapore Mint & WildBrain',
    sector: 'Phygital',
    platform: ['IRL'],
    year: 2025,
    heroMedia: '/events/irl-activations.jpg',
    thumbnail: '/events/irl-activations.jpg',
    oneLineOutcome:
      'Smobler, Teletubbies and The Singapore Mint brought phygital play to Pop Toy Show Singapore — a return to the show where Smobler first unveiled a game in 2023.',
    links: [
      {
        label: '2025 announcement',
        url: 'https://medium.com/@smobler.io/smobler-teletubbies-and-the-singapore-mint-unite-to-bring-phygital-play-to-pop-toy-show-singapore-faf3be083b55'
      },
      {
        label: '2023 announcement',
        url: 'https://www.einpresswire.com/article/654057703/metaverse-architect-smobler-unveils-new-game-at-inaugural-pop-toy-show-singapore-2023'
      }
    ],
    isFeatured: false,
  },
  {
    id: 'imda-digital-for-life',
    slug: 'imda-digital-for-life',
    title: 'IMDA Digital for Life Festival',
    client: 'IMDA',
    sector: 'Phygital',
    platform: ['IRL'],
    year: 2023,
    heroMedia: '/pillars/phygital-events.jpg',
    thumbnail: '/pillars/phygital-events.jpg',
    oneLineOutcome:
      'Took the metaverse into Singapore’s heartlands for IMDA’s Digital for Life Festival, with Razer, Republic of Gamers, POPMART and Teletubbies.',
    links: [
      {
        label: 'Announcement',
        url: 'https://www.einpresswire.com/article/666067028/metaverse-goes-to-singapore-heartlands-in-imda-s-digital-for-life-festival'
      }
    ],
    isFeatured: false,
  },

  /* ───────────────────────────── IP & Gaming ───────────────────────────── */
  {
    id: 'pomeverse',
    slug: 'pomeverse',
    title: 'Pomeverse',
    client: 'Pomerium',
    sector: 'IP & Gaming',
    platform: ['The Sandbox'],
    year: 2024,
    oneLineOutcome:
      'A virtual world built on the Korean Pome Village IP, home to its dog-villager community.',
    links: [
      {
        label: 'Play in The Sandbox',
        url: 'https://www.sandbox.game/en/experiences/Pomeverse/af5e5192-a377-452f-bd92-1fa787d92467/page/'
      }
    ],
    gallery: [
      { src: '/projects/pomeverse/01-captura-de-tela-2024-06-26-130950.jpg' },
      { src: '/projects/pomeverse/02-captura-de-tela-2024-06-26-192546.jpg' },
      { src: '/projects/pomeverse/03-captura-de-tela-2024-06-26-131231.jpg' },
      { src: '/projects/pomeverse/04-captura-de-tela-2024-06-26-192650.jpg' },
      { src: '/projects/pomeverse/05-captura-de-tela-2024-06-26-130629.jpg' },
      { src: '/projects/pomeverse/06-captura-de-tela-2024-06-26-131038.jpg' },
      { src: '/projects/pomeverse/07-captura-de-tela-2024-06-26-130737.jpg' },
      { src: '/projects/pomeverse/08-captura-de-tela-2024-06-26-192845.jpg' },
      { src: '/projects/pomeverse/09-captura-de-tela-2024-06-26-192917.jpg' },
      { src: '/projects/pomeverse/10-captura-de-tela-2024-06-26-131053.jpg' },
      { src: '/projects/pomeverse/11-captura-de-tela-2024-06-26-131007.jpg' },
    ],
    isFeatured: false,
  }
];
