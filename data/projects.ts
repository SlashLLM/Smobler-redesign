import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'mediacorp-countdown',
    slug: 'mediacorp-countdown',
    title: 'Mediacorp National Countdown',
    client: 'Mediacorp Singapore',
    sector: 'Broadcasting & Live Events',
    platform: ['The Sandbox', 'Live Broadcast Sync'],
    year: 2026,
    heroMedia: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    oneLineOutcome: 'Synchronized live national countdown with 180,000 concurrent virtual participants.',
    outcomeStats: [
      { value: '180K', label: 'Concurrent live participants' },
      { value: '< 80ms', label: 'Broadcast audio-spatial sync latency' },
      { value: '100%', label: 'Zero downtime across national broadcast' },
    ],
    problem: 'Mediacorp required a simultaneous digital twin broadcast for Singapore’s New Year Countdown that could bridge linear television with interactive voxel worlds in real-time, allowing live television hosts to interact with avatar crowds without latency spikes.',
    solution: 'Engineered a low-latency spatial synchronization pipeline that mirrored television broadcast cues into the voxel environment, featuring dynamic crowd rendering, custom soundscapes, and synchronized pyrotechnic triggers.',
    aiRole: {
      modelRole: 'Synthesized real-time crowd behavior models, procedural pyrotechnic variations based on broadcast audio frequencies, and automated multi-lingual chat moderation.',
      humanRole: 'Architected the high-density spatial server topology, designed iconic Singapore landmark voxel geometry, and orchestrated live stage camera direction.',
      technicalHighlights: [
        'Audio-reactive procedural particle generators',
        'High-density spatial sharding supporting 25K avatar clusters per node',
        'Deterministic state replication engine for live broadcast cues'
      ]
    },
    buildSections: [
      {
        title: 'Architecting Singapore’s Landmark Marina Bay in Voxels',
        description: 'Every architectural asset was engineered to adhere to strict polygon limits while retaining the iconic silhouetted contours of Marina Bay Sands and the Singapore Flyer under dynamic night lighting.',
        mediaUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop',
        mediaCaption: 'Voxel precision modelling for landmark architectural structures.'
      },
      {
        title: 'Live Telemetry & Broadcast Audio Reactivity',
        description: 'Our proprietary bridge relayed live broadcast audio feeds to trigger synchronized lighting sweeps and firework sequences with sub-second synchronization.',
        mediaUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
        mediaCaption: 'Spatial broadcast bridge dashboard.'
      }
    ],
    credits: ['loretta-chen', 'jason-gu', 'marcus-tan', 'elena-rostova'],
    isFeatured: true,
  },
  {
    id: 'clay-nation-cross-chain',
    slug: 'clay-nation-cross-chain',
    title: 'Clay Nation First Cross-Chain Voxel World',
    client: 'Clay Nation IP',
    sector: 'IP & Gaming',
    platform: ['The Sandbox', 'Cardano', 'Polygon'],
    year: 2025,
    heroMedia: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    oneLineOutcome: 'Transformed 10,000 claymation collectibles into interoperable, interactive voxel avatars.',
    outcomeStats: [
      { value: '10,000', label: 'Cross-chain 3D avatar assets deployed' },
      { value: '94%', label: 'Avatar claim and activation rate' },
      { value: '$4.2M', label: 'Secondary trading volume driven' },
    ],
    problem: 'Translating handmade stop-motion clay aesthetic into strict voxel geometry without losing the tactile imperfection, squash-and-stretch motion curves, and distinct personality of the original 2D clay collectibles.',
    solution: 'Built an automated trait-mapping procedural pipeline combined with hand-sculpted character animation rigs that accurately reproduced clay deformation within voxel constraints.',
    aiRole: {
      modelRole: 'Trained a diffusion-based 2D-to-voxel trait synthesis pipeline to generate 3D voxel topologies from high-resolution clay photos.',
      humanRole: 'Created the master voxel bone rigs, sculpted custom facial expression lattices, and balanced physical weight physics in engine.',
      technicalHighlights: [
        'Proprietary Clay2Voxel trait generation pipeline',
        'Cross-chain cryptographic asset verification oracle',
        'Custom bone weighting simulating non-rigid stop-motion movement'
      ]
    },
    buildSections: [
      {
        title: 'Tactile Clay Shading in a Voxel Engine',
        description: 'Developed custom shader mappings that mimic fingerprints, clay cracks, and organic surface variations on pure voxel cube faces.',
        mediaUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
        mediaCaption: 'Procedural clay texture mapping on voxel surfaces.'
      }
    ],
    credits: ['jason-gu', 'sofia-rodriguez', 'kai-chen'],
    isFeatured: true,
  },
  {
    id: 'a11y-park',
    slug: 'a11y-park',
    title: 'A11Y Park — Accessible Virtual Realm',
    client: 'SG Enable / Global Inclusion Council',
    sector: 'Accessibility & Civic Tech',
    platform: ['The Sandbox', 'Web Accessibility Bridge'],
    year: 2025,
    heroMedia: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    oneLineOutcome: 'World’s first WCAG-compliant virtual park built for neurodiverse and mobility-impaired players.',
    outcomeStats: [
      { value: 'WCAG 2.2', label: 'Full compliance across screen readers' },
      { value: '12', label: 'Specialized accessibility control modes' },
      { value: '45,000+', label: 'Inclusive learning session completions' },
    ],
    problem: 'Virtual worlds are notoriously inaccessible for visually impaired, neurodivergent, and motor-impaired players due to dense visual noise, twitch-reaction physics, and absence of assistive screen-reader hooks.',
    solution: 'Designed an inclusive navigation matrix featuring spatial audio landmarks, contrast-adaptive surface rendering, simplified switch-control navigation, and real-time audio description triggers.',
    aiRole: {
      modelRole: 'Generated dynamic contextual audio descriptions and spatial voice navigation vectors calibrated for screen-reader interfaces.',
      humanRole: 'Co-designed sensory pathways with accessibility advocates, tuned tactile feedback, and verified architectural clearance ramps.',
      technicalHighlights: [
        'Spatial audio wayfinding beacons',
        'Adaptive sensory density sliders (calms lighting & audio for autistic players)',
        'Screen-reader descriptive metadata bridge for 3D world geometry'
      ]
    },
    buildSections: [
      {
        title: 'Sensory-Friendly Space Planning',
        description: 'Replaced erratic visual clutter with coherent visual corridors, predictable waypoint beacons, and distinct audio textures per zone.',
        mediaUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
        mediaCaption: 'Spatial wayfinding corridors in A11Y Park.'
      }
    ],
    credits: ['loretta-chen', 'amara-okafor', 'marcus-tan'],
    isFeatured: true,
  },
  {
    id: 'metaverse-for-good',
    slug: 'metaverse-for-good',
    title: 'Metaverse for Good 12×12 Estate',
    client: 'Singapore Govt & Non-Profit Alliance',
    sector: 'Government & Social Impact',
    platform: ['The Sandbox 12x12 Estate'],
    year: 2025,
    heroMedia: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    oneLineOutcome: 'Unified 30+ social enterprises on a 144-plot virtual estate driving real-world fundraising.',
    outcomeStats: [
      { value: '144', label: 'Voxel plots interconnected into one seamless world' },
      { value: '$1.8M', label: 'Raised for partner non-profits' },
      { value: '32', label: 'Civic organisations onboarded' },
    ],
    problem: 'Non-profit and civic groups lacked the technical capabilities and capital to establish interactive educational presences in emerging virtual spaces.',
    solution: 'Designed a modular 12x12 master-planned estate that gave each organization a dedicated plot with turnkey interactive quest mechanics, educational minigames, and direct donation pipelines.',
    aiRole: {
      modelRole: 'Created interactive conversational guides for each non-profit with curated knowledge bases on climate, eldercare, and digital literacy.',
      humanRole: 'Master-planned the urban estate layout, environmental lighting, and unified public transit pathways across all 144 plots.',
      technicalHighlights: [
        'Modular plot assembly engine',
        'Zero-gas direct fiat-to-charity donation terminal in-world',
        'Dynamic visitor analytics heatmap system'
      ]
    },
    buildSections: [
      {
        title: 'Master Urban Planning for 144 Plots',
        description: 'Engineered a cohesive green belt connecting educational pavilions, gaming arenas, and cultural exhibition halls.',
        mediaUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
        mediaCaption: 'Aerial master plan of the 12x12 Metaverse for Good estate.'
      }
    ],
    credits: ['loretta-chen', 'jason-gu', 'sofia-rodriguez'],
    isFeatured: false,
  },
  {
    id: 'city-of-austin',
    slug: 'city-of-austin',
    title: 'City of Austin Interactive Innovation Hub',
    client: 'Austin Tech & Cultural Commission',
    sector: 'Government & Civic Tech',
    platform: ['The Sandbox', 'WebXR'],
    year: 2026,
    heroMedia: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=800&auto=format&fit=crop',
    oneLineOutcome: 'Recreated Austin’s live music district with interactive AI street musicians and civic voting.',
    outcomeStats: [
      { value: '65K', label: 'Active music festival attendees' },
      { value: '240', label: 'Local indie tracks streamed' },
      { value: '88%', label: 'Civic engagement rating' },
    ],
    problem: 'Bringing the authentic spirit of Austin’s Live Music Capital into a digital landscape while establishing a venue for independent musicians to monetize global performances.',
    solution: 'Constructed an accurate voxel replica of 6th Street and Red River Cultural District with live audio streaming stages and autonomous AI jam-session buskers.',
    aiRole: {
      modelRole: 'Generated procedural accompaniment tracks and dynamic vocal harmonizations responding in real-time to visiting player instruments.',
      humanRole: 'Digitized historic Austin music venues and integrated smart-contract artist tip jars.',
      technicalHighlights: [
        'Low-latency WebRTC live concert streaming node',
        'Spatial acoustic simulation for open-air amphitheaters',
        'Decentralized artist royalty split contracts'
      ]
    },
    buildSections: [
      {
        title: 'Preserving Historic Venues in Voxel Form',
        description: 'Detailed historic murals, neon signage, and iconic interior layouts of Austin’s most storied indie stages.',
        mediaUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
        mediaCaption: 'Voxel music venue stage design.'
      }
    ],
    credits: ['marcus-tan', 'kai-chen', 'amara-okafor'],
    isFeatured: false,
  }
];
