import { Project } from '@/types';

/**
 * Smobler Master Portfolio - Enterprise AI, FinTech, EdTech, E-Commerce, 
 * Marketplace, Legal/Dispatch, Blockchain & Phygital Platforms.
 */
export const projects: Project[] = [
  /* ────────────────────────────────── AI ─────────────────────────────────── */
  {
    id: 'nutra',
    slug: 'nutra',
    title: 'NUTRA — Robin: AI-Powered Food Compliance Platform',
    client: 'Leeward Community College & WVAPDC',
    sector: 'AI',
    platform: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'GPT-4'],
    year: 2025,
    heroMedia: '/projects/robin-ai.png',
    thumbnail: '/projects/robin-ai.png',
    oneLineOutcome:
      'Robin is a free, AI-powered compliance tool built for Hawaiʻi\'s food entrepreneurs through Leeward Community College\'s ʻĀina to Mākeke program, generating nutrition labels and HACCP plans in minutes.',
    problem:
      'First-time food entrepreneurs struggle with complex FDA regulatory requirements and HACCP plans, facing weeks of manual research and high consultant costs that delay bringing home recipes to retail shelves.',
    solution:
      'Robin is a free, AI-powered compliance tool built for Hawaiʻi\'s food entrepreneurs through Leeward Community College\'s ʻĀina to Mākeke program. The platform transforms complex FDA regulatory requirements into an intuitive wizard-based experience, enabling first-time food makers to generate professional nutrition labels and HACCP food safety plans in minutes rather than weeks. By integrating USDA nutritional databases with intelligent document generation, Robin bridges the gap between home recipes and retail-ready products, democratizing food business compliance for underserved entrepreneurs.',
    projectHighlights: [
      { id: '01', highlight: 'AI-generated FDA-compliant nutrition labels with USDA database integration' },
      { id: '02', highlight: 'Automated HACCP plan builder with hazard analysis, CCPs, and corrective actions' },
      { id: '03', highlight: 'Real-time compliance validation against FDA/USDA standards' },
      { id: '04', highlight: 'Multi-format export: PDF, Word (DOCX), and high-resolution PNG' },
      { id: '05', highlight: 'Contextual AI food safety assistant with step-aware guidance' },
      { id: '06', highlight: 'Auto-save draft recovery with version tracking' },
      { id: '07', highlight: 'Seamless pathway to WVAPDC facility for lab verification' },
      { id: '08', highlight: 'Tech Stack: React, TypeScript, Supabase, Tailwind CSS, GPT-4' },
      { id: '09', highlight: 'Target: Underserved Hawaiʻi food entrepreneurs' },
      { id: '10', highlight: 'Development Timeline: 12 weeks MVP' }
    ],
    credits: ['loretta-chen', 'mridhul-pax'],
    isFeatured: true,
  },
  {
    id: 'twinity',
    slug: 'twinity',
    title: 'Twinity',
    client: 'Smobler',
    sector: 'AI',
    platform: ['Web', 'Generative AI'],
    year: 2025,
    heroMedia: '/pillars/ai-food.jpg',
    thumbnail: '/pillars/ai-food.jpg',
    oneLineOutcome:
      'Photorealistic digital avatars delivering broadcast-quality video with authentic lip-sync in 40+ languages and round-the-clock engagement.',
    outcomeStats: [
      { value: '40+', label: 'Languages with authentic lip-sync' }
    ],
    solution:
      'Twinity produces photorealistic digital humans for enterprise marketing, training and support teams — broadcast-quality video, authentic lip-sync in 40+ languages, and 24/7 engagement, aimed at a global digital human market accelerating toward a $527B economy.',
    isFeatured: false,
  },

  /* ─────────────────────────────── FinTech ──────────────────────────────── */
  {
    id: 'sage',
    slug: 'sage',
    title: 'Sage',
    client: 'Wealthyhood Tracker',
    sector: 'FinTech',
    platform: ['Web', 'AES-256 Encryption'],
    year: 2025,
    heroMedia: '/projects/sage.png',
    thumbnail: '/projects/sage.png',
    oneLineOutcome:
      'A secure, privacy-first personal wealth management application with client-side AES-256 encryption, real-time net worth calculations, and granular portfolio sharing.',
    problem:
      'Individuals and families struggle to securely track assets, liabilities, insurance policies, and loans in one unified platform without exposing raw financial data to backend servers.',
    solution:
      'Wealthyhood Tracker is a secure, privacy-first personal wealth management application that helps individuals and families track their complete financial picture in one place — assets, liabilities, insurance policies, and borrowed money — with real-time net worth calculations. Built with client-side AES-256 encryption, it ensures that sensitive financial data is encrypted before it ever reaches the backend, so users stay in full control of their information. The platform supports granular portfolio sharing with trusted beneficiaries, family members, or financial advisors, and includes specialized tools like an Excel-based wealth tracker for spreadsheet users, an advisor dashboard for professionals managing multiple clients, and a dead man\'s switch for emergency access.',
    isFeatured: true,
  },

  /* ──────────────────────────────── EdTech ──────────────────────────────── */
  {
    id: 'aloha-pathways',
    slug: 'aloha-pathways',
    title: 'Aloha Pathways',
    client: 'State of Hawaiʻi',
    sector: 'EdTech',
    platform: ['Web', 'Explainable AI (XAI)', 'WCAG 2.1 AA'],
    year: 2025,
    heroMedia: '/projects/aloha-pathways.png',
    thumbnail: '/projects/aloha-pathways.png',
    oneLineOutcome:
      'A statewide AI-powered career navigation platform guiding Hawaiʻi students from middle school through postsecondary education into meaningful careers.',
    problem:
      'Hawaiʻi students, parents, and educators lack a unified, accessible platform connecting student interests, academic programs, and real labor market data with actionable career guidance.',
    solution:
      'Built a statewide AI-powered career navigation platform designed to guide Hawaiʻi students from middle school through postsecondary education into meaningful careers. The application connects student interests, academic programs, and real labor market data through personalized AI recommendations, interactive pathway visualizations, and a robust skills gap analyzer. Key features include an adaptive multi-persona interface for students, parents, educators, and administrators; a command palette-driven navigation system; saved-item bookmarking; explainable AI (XAI) recommendations with bias monitoring; a CIP-SOC crosswalk explorer; data validation dashboards; on-demand reporting and export tools; and full accessibility compliance (WCAG 2.1 AA / Section 508).',
    isFeatured: true,
  },

  /* ──────────────────────── Services Marketplace ────────────────────────── */
  {
    id: 'quicktradie',
    slug: 'quicktradie',
    title: 'QuickTradie (MyMarket)',
    client: 'MyMarket NZ',
    sector: 'Services Marketplace',
    platform: ['Next.js', 'Marketplace', 'Node.js'],
    year: 2026,
    heroMedia: '/projects/quicktradie-mymarket.png',
    thumbnail: '/projects/quicktradie-mymarket.png',
    oneLineOutcome:
      'New Zealand–first services marketplace connecting homeowners with verified local tradies via transparent quotes and deal-locking.',
    problem:
      'Finding a trustworthy tradie was a frustrating maze of phone calls, missed callbacks, and guesswork, while skilled tradies paid for leads that went nowhere.',
    solution:
      'QuickTradie solves both sides through verified profiles, in-platform negotiation, deal-locking before contact sharing, and verified work reviews.',
    isFeatured: false,
  },

  /* ────────────────────────────── E-Commerce ────────────────────────────── */
  {
    id: 'banana-patch-studio',
    slug: 'banana-patch-studio',
    title: 'Banana Patch Studio',
    client: 'Banana Patch Studio Kauaʻi',
    sector: 'E-Commerce',
    platform: ['Shopify Online Store 2.0', 'Custom Theme'],
    year: 2026,
    heroMedia: '/projects/banana-patch-studio.png',
    thumbnail: '/projects/banana-patch-studio.png',
    oneLineOutcome:
      'Custom Online Store 2.0 theme built for Hawaii\'s iconic ceramic art studio & twin island galleries.',
    problem:
      'A legacy storefront was unable to convey the rich Hawaiian ceramic heritage, artist stories, and dual gallery locations in Hanapepe & Kīlauea.',
    solution:
      'Designed a bespoke Online Store 2.0 theme featuring rich editorial layouts, kiln stats, island collection filters, and location booking.',
    isFeatured: false,
  },

  /* ──────────────────── Legal & Professional Services ──────────────────── */
  {
    id: '808-notary',
    slug: '808-notary',
    title: '808 Mobile Notary',
    client: '808 Mobile Notary Hawaii',
    sector: 'Legal & Professional Services',
    platform: ['Web Application', 'Logistics Platform'],
    year: 2026,
    heroMedia: '/projects/808-notary.png',
    thumbnail: '/projects/808-notary.png',
    oneLineOutcome:
      'On-demand mobile notary & loan signing platform optimized for Hawaii with instant transparent pricing.',
    problem:
      'Clients needing urgent loan signing or document notarization faced unclear fees and scheduling bottlenecks.',
    solution:
      'Built a high-conversion dispatch platform featuring instant travel area fee calculators, WhatsApp dispatch, and document compliance rules.',
    isFeatured: false,
  },

  /* ───────────────────────────── Blockchain ────────────────────────────── */
  {
    id: 'digital-bunkering',
    slug: 'digital-bunkering',
    title: 'Digital Bunkering',
    client: 'Mysten Labs & Sui Foundation',
    sector: 'Blockchain',
    platform: ['Sui', 'Smart Contracts'],
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
    platform: ['Stablecoin Settlement'],
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
    platform: ['IRL Activations'],
    year: 2025,
    heroMedia: '/events/nova-2025-singapore.jpg',
    thumbnail: '/events/nova-2025-singapore.jpg',
    oneLineOutcome:
      'Smobler’s flagship festival, where Wall Street, Main Street, Art Row and humanity converge — five editions across Singapore, Austin and Honolulu.',
    problem:
      'Web3 conferences talk to Web3. The people who most need to meet — institutions, artists, founders, technologists — keep arriving at separate rooms.',
    solution:
      'NOVA is a Smobler proprietary IP and a celebration of the communities created by and connected with the Smobler ecosystem: an in-real-life festival hosted in sync with major crypto and Web3 events, bringing together innovators, creators and institutions at the frontier of Web3, AI and immersive tech.',
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
      'Smobler brought phygital play to Pop Toy Show Singapore in partnership with Teletubbies and The Singapore Mint.',
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
      'Took immersive technology into Singapore’s heartlands for IMDA’s Digital for Life Festival, with Razer, ASUS ROG, POPMART and key ecosystem partners.',
    isFeatured: false,
  }
];
