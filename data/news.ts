import { NewsItem } from '@/types';

/**
 * The real Smobler press archive, rebuilt from the 71 destinations published on
 * linktr.ee/smobler.io.
 *
 * Every `publishedAt` was read from the source itself — Medium's RSS feed and
 * article metadata, EIN Presswire's `datePublished`, and the publishers' own
 * schema markup — rather than estimated. The two exceptions are noted inline.
 * Bodies summarise what the linked source states; `sourceUrl` always points at
 * the original so nothing here has to be taken on trust.
 */
export const newsItems: NewsItem[] = [
  /* ────────────────────────────── 2026 ─────────────────────────────────── */
  {
    id: 'prosperous-kids-mimis-dream-builders',
    slug: 'prosperous-kids-mimis-dream-builders',
    title: 'Smobler partners with Prosperous Kids to launch ‘Mimi’s Dream Builders’ on Roblox',
    type: 'press',
    publishedAt: '13 MAR 2026',
    month: 'MAR',
    year: 2026,
    excerpt:
      'A Technology for Good collaboration with Prosperous Kids, founded by Dr. Michele Cho-Dorado, turning financial literacy for children into a playful dog-walking adventure on Roblox.',
    body: `March is a time for planting seeds for the future. At Smobler, we believe one of the most important seeds we can plant is financial literacy for the next generation.

Our latest Technology for Good collaboration is with Prosperous Kids, founded by Dr. Michele Cho-Dorado. Together we are launching Mimi’s Dream Builders on Roblox — an immersive educational experience that turns financial learning into a playful dog-walking adventure.

The project was born from Dr. Cho-Dorado’s personal mission. A pediatric gastroenterologist almost a decade into her medical practice, she realised she still lacked financial literacy despite her extensive training. She started Prosperous Kids as a passion project for her own children and wrote her first children’s book, Reach For The Stars; the mission has since widened to giving children everywhere a financial foundation in early childhood.

Players step into the shoes of a dog walker, and the core loop mirrors a real-world financial cycle. An obby — the classic Roblox obstacle course — is run while managing a pack of dogs to earn coins, and the non-player mentors Mimi and Dudley teach when to invest, when to donate and how to manage what has been earned.

Two goals sit either side of that loop. Coins saved in the Piggy Bank buy a pet dog that then follows the player everywhere with bonuses attached; the Animal Shelter is crowdfunded collectively, and reaching the target transforms the map with dozens of puppies. A bank pays interest on deposits, so a child can watch long-term saving compound rather than be told about it.

The partnership aligns with Smobler’s IDEALS — Inclusion, Diversity, Equity, Accessibility, Leadership and Sustainability. Gamifying financial literacy removes the stress usually attached to money and replaces it with exploration during a child’s key developmental years.`,
    pullQuote: {
      text: 'Imparting education through platforms our youths are already on is like baking broccoli into brownies.',
      attribution: 'Dr. Michele Cho-Dorado, founder, Prosperous Kids',
    },
    heroImage: '/pillars/educational-gaming.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/empowering-the-next-generation-smobler-partners-with-prosperous-kids-c0f6e004eecc',
    weight: 'featured',
    onWire: true,
    tags: ['Roblox', 'Educational Gaming', 'Technology for Good'],
    readTime: '2 min read',
  },

  /* ────────────────────────────── 2025 ─────────────────────────────────── */
  {
    id: 'thank-you-for-an-extraordinary-2025',
    slug: 'thank-you-for-an-extraordinary-2025',
    title: 'Thank you for an extraordinary 2025',
    type: 'field',
    publishedAt: '31 DEC 2025',
    month: 'DEC',
    year: 2025,
    excerpt:
      'Smobler’s year in review — the NYSE partnership, NOVA’s SG60 edition, the expansion to Hawai‘i, and the move beyond gaming into AI and blockchain.',
    body: `2025 was the year Smobler stopped being describable as a metaverse studio. What began as a game studio has evolved into a frontier technology company working at the intersection of gaming, AI, blockchain and phygital experiences, with one constant: the IDEALS — Inclusion, Diversity, Equity, Access, Leadership, Love and Sustainability.

The year opened with Teletubbies: Custard Chaos, the first Teletubbies game in The Sandbox, built with WildBrain. It reintroduced an iconic IP to a generation of digital natives, then stepped out of the virtual world entirely at Pop Toy Show Singapore through collaborations with The Singapore Mint and Razer.

NOVA crossed continents — the Hawaii Edition during Honolulu Tech Week, then NOVA 2025: SG60 Edition marking Singapore’s 60th birthday. The defining image of the year was NOVA SG60 lighting the NYSE trading floor cubes at 11 Wall Street: a festival that started on Orchard Road, displayed on Wall Street. NYSE was title sponsor, and hosted Founder and CEO Dr. Loretta Chen at NYSE International Day alongside Yao Ming, CNBC’s Jim Cramer and JP Morgan’s Anu Aiyengar.

The partnership with Mysten Labs and the Sui Foundation deepened, with Smobler joining as a portfolio company. The work on digital bunkering and maritime trade is about transparency, trust and traceability in an industry that underpins global commerce — the groundwork for better financial instruments, ESG accountability and operational resilience.

On AI, Smobler joined both the Meta Llama Incubator and the NVIDIA Inception Program, and launched Robin AI with the Wahiawā Value-Added Product Development Center, Leeward Community College and the State of Hawai‘i. It helps food entrepreneurs and exporters automate nutritional labelling, HACCP compliance and USDA and FDA certification, cutting the cost, time and regulatory friction of getting a product to market.

Every milestone was made possible by the trust of partners, clients, collaborators and friends. Thank you for an extraordinary 2025.`,
    sourceUrl: 'https://medium.com/@smobler.io/thank-you-for-an-extraordinary-2025-7c49ac6adfe5',
    weight: 'standard',
    onWire: true,
    tags: ['Year in Review', 'NOVA', 'AI', 'Blockchain'],
    readTime: '2 min read',
  },
  {
    id: 'smobler-ceo-storytelling-phygital-worlds',
    slug: 'smobler-ceo-storytelling-phygital-worlds',
    title: 'Smobler CEO discusses the power of storytelling and the future of ‘phygital’ worlds',
    type: 'coverage',
    publishedAt: '10 NOV 2025',
    month: 'NOV',
    year: 2025,
    excerpt:
      'Dr. Loretta Chen on why storytelling, not technology, is the thing that makes a virtual world worth entering.',
    body: `Smobler founder and CEO Dr. Loretta Chen was filmed by the New York Stock Exchange at NYSE International Day, in conversation with Ashley Mastronardi, content creator at ICE.

The subject is the one the studio keeps returning to: that the phygital frontier is a storytelling problem before it is a technical one, and that technology is the means rather than the point.

Chen appeared at NYSE International Day alongside NBA legend Yao Ming, CNBC’s Jim Cramer and JP Morgan’s Anu Aiyengar. NYSE was title sponsor of NOVA 2025: SG60 Edition, whose artwork lit the exchange’s trading floor cubes at 11 Wall Street.`,
    publication: 'NYSE',
    sourceUrl: 'https://www.youtube.com/watch?v=89okF0jMb68',
    weight: 'standard',
    onWire: false,
    tags: ['Interview', 'Phygital', 'Leadership'],
    readTime: '1 min read',
  },
  {
    id: 'insignia-boons-and-banes-storytelling-technology',
    slug: 'insignia-boons-and-banes-storytelling-technology',
    title: 'The boons and banes of tomorrow’s storytelling technology',
    type: 'coverage',
    publishedAt: '28 OCT 2025',
    month: 'OCT',
    year: 2025,
    excerpt:
      'Insignia Ventures Partners interviews Smobler CEO and founder Dr. Loretta Chen on where storytelling technology helps — and where it does not.',
    body: `Insignia Ventures Partners’ On Call podcast, hosted by Paulo Joquiño, sat down with Smobler founder and CEO Dr. Loretta Chen on the future of storytelling — one of a series recorded with speakers from NOVA 2025: SG60 Edition, co-hosted by Smobler, the New York Stock Exchange, Gemini, Nifty Gateway Studio and Skadden.

Chen’s starting point is that storytelling is not a marketing function but the thing that holds societies together. All nations need a narrative, she argues, reaching for Sang Nila Utama and the Merlion: a story that may be fictitious, but which anchors a fishing village’s account of itself. Values, tradition and perspective get transmitted the same way a mother tells a bedtime story.

Her background is theatre direction, and she carries the discipline into leadership. Theatre is ephemeral — here today, gone tomorrow — and still it moves a room full of different perspectives to the sound of a single drum. Getting a team to a shared vision while celebrating the diversity that makes it good is, she says, the same job.

Then the banes. Technology has made storytelling accessible and instantaneous, but the same power produces counter-narratives, counterfeit narratives and actors suturing distrust through compelling stories. Generative AI sharpens both edges at once: content faster, cheaper and better, and more fallout to deal with. Her answer is media literacy, an open mind and a strong moral compass, in a landscape where the line between reality and fiction keeps blurring.

The creator economy matters to her for reasons rooted further back. She grew up with institutional narratives where only a chosen few had a platform, and read Snow White long before she read The Woman Warrior by Maxine Hong Kingston — the first book she found with an Asian character in the dominant culture. Technology has since democratised access to communication and creation, and that is what she wanted to carry into a technology company.

Her advice to other CEOs: the balance sheet still matters and is no longer sufficient. Communication and storytelling now decide whether a leader can lead by example — and the more generative technology there is, the more people want what is genuine.`,
    pullQuote: {
      text: 'Storytelling is what really gels societies together.',
      attribution: 'Dr. Loretta Chen, founder & CEO, Smobler',
    },
    publication: 'Insignia Ventures',
    sourceUrl: 'https://review.insignia.vc/2025/10/28/smobler',
    weight: 'standard',
    onWire: false,
    tags: ['Interview', 'Leadership', 'Venture'],
    readTime: '2 min read',
  },
  {
    id: 'supernova-unstoppable-domains',
    slug: 'supernova-unstoppable-domains',
    title: 'Unstoppable Domains and Smobler announce .SuperNOVA: a new digital identity for a global festival of collaboration',
    type: 'press',
    publishedAt: '02 OCT 2025',
    month: 'OCT',
    year: 2025,
    excerpt:
      'A dedicated top-level domain for the NOVA community, giving festival participants a portable digital identity across the Smobler ecosystem.',
    body: `Unstoppable Domains — an ICANN-accredited registrar with over 4.5 million domains registered — announced a partnership with Smobler to launch .SuperNOVA, a new top-level domain celebrating collaboration across companies, communities and technologies.

The name is literal. A nova is a celestial event where a star suddenly becomes far brighter and appears as a newly visible star; .SuperNOVA is meant to spotlight the brilliance of collaboration between companies, between people, and between technologies like AI and Web3.

NOVA was born in 2023 as an official side event during TOKEN2049 Singapore and has since become a global festival, running from SXSW in Austin to Honolulu Tech Week in Hawai‘i. Each edition blends in-real-life gatherings with metaverse activations, and has hosted partners from Champ Medici and Agoria to Animoca Brands, AWS and PwC, alongside cultural showcases such as Singapore artist y/x’s “Light and Brilliance” exhibition for the Lee Kuan Yew centenary and Cobbleland: Austin.

“.SuperNOVA is more than a TLD. It’s a digital home for one of the world’s most unique cultural and technology festivals,” said Sandy Carter, chief business officer at Unstoppable Domains. “Together with NOVA, we are proud to provide the infrastructure that allows communities to truly own their identity in the blockchain world.”

The announcement landed ahead of NOVA’s return to Singapore for the nation’s 60th anniversary, presented by the New York Stock Exchange in collaboration with Gemini, Nifty Gateway Studio, Skadden, Michigan Ross Executive Education and Skypoly, with over 120 invited C-suite executives, founders, investors and regulators.`,
    pullQuote: {
      text: 'NOVA has always been about connection — people with people, culture with technology, and communities with opportunities.',
      attribution: 'Dr. Loretta Chen, founder & CEO, Smobler',
    },
    heroImage: '/events/nova-2025-singapore.jpg',
    sourceUrl: 'https://medium.com/@smobler.io/unstoppable-domains-and-smobler-announce-supernova-1646ceb9b754',
    weight: 'standard',
    onWire: true,
    tags: ['NOVA', 'Unstoppable Domains', 'Web3', 'Identity'],
    readTime: '2 min read',
  },
  {
    id: 'nova-bridges-wall-street-singapore',
    slug: 'nova-bridges-wall-street-singapore',
    title: 'Smobler’s NOVA bridges Wall Street, frontier tech and Singapore’s innovation ecosystem',
    type: 'press',
    publishedAt: '01 OCT 2025',
    month: 'OCT',
    year: 2025,
    excerpt:
      'On 2 October, NOVA returned to Singapore for the nation’s 60th anniversary — presented by the New York Stock Exchange with Gemini, Nifty Gateway Studio, Skadden, Michigan Ross Executive Education and Skypoly.',
    body: `On 2 October, NOVA returned to Singapore for the nation’s 60th anniversary — a gathering that merges the leaders of Web2 and Web3, convening legacy institutions alongside pioneers from the digital frontier.

Presented by the New York Stock Exchange in collaboration with Gemini, Nifty Gateway Studio, Skadden, Michigan Ross Executive Education and Skypoly, NOVA 2025: SG60 Edition underscores Smobler’s role as a connector — linking rigorous finance institutions with decentralised tech, and academia with hands-on innovation, against the backdrop of Singapore’s innovation hubs.

The timing matters. In September, Platinum Sponsor Gemini raised US$425 million in its IPO, pricing above expectations and signalling renewed institutional trust in crypto platforms; Web3 is no longer speculative but entering mainstream finance and regulatory discourse. Michigan Ross Executive Education, meanwhile, has expanded its leadership offerings into AI, data governance, sustainability and ESG, and launched a Board Director Programme with Emeritus covering digital and AI governance.

The three-hour programme runs as panels and fireside discussions. The Future of Money — “Digital Assets & the New Trust Economy” — features NYSE, Gemini, StraitsX, Yzi Labs, Reefknot Capital and Mysten Labs. The Future of Identity — “Redefining Ownership, IP & the Creator Economy” — features Nifty Gateway Studio, Animoca Brands, WildBrain, Skypoly, SBI Digital Markets and Unstoppable Domains. The Future of Learning & Leadership is a fireside chat with Nicholas Hamilton-Archer, chief executive education officer at the Stephen M. Ross School of Business.

The edition is more than an anniversary celebration: it signals that the region’s innovation ecosystem is both mature and globally relevant, and offers a blueprint for cooperative futures that links legacy financial institutions, Web3 innovators, legal and regulatory experts, academic leaders and venture-backed infrastructure players.`,
    heroImage: '/events/nova-2025-singapore.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/smoblers-nova-bridges-wall-street-frontier-tech-and-singapore-s-innovation-ecosystem-b4990d72a548',
    weight: 'featured',
    onWire: true,
    tags: ['NOVA', 'NYSE', 'SG60', 'Phygital'],
    readTime: '2 min read',
  },
  {
    id: 'pop-toy-show-singapore-2025',
    slug: 'pop-toy-show-singapore-2025',
    title: 'Smobler, Teletubbies and The Singapore Mint unite to bring phygital play to Pop Toy Show Singapore 2025',
    type: 'press',
    publishedAt: '20 AUG 2025',
    month: 'AUG',
    year: 2025,
    excerpt:
      'A three-way collaboration putting Custard Chaos, collectible minting and physical play on the same show floor.',
    body: `Smobler joined WildBrain’s Teletubbies and heritage collectible house The Singapore Mint at Pop Toy Show Singapore 2025, bringing a phygital experience to Booth K31 from 22–24 August at the Sands Expo & Convention Centre.

Pop Toy Show — Asia’s premier designer toy convention, created by POP MART — returned to Singapore for its third edition, and has grown into a collector’s playground where artists, designers and global brands meet.

Teletubbies: Custard Chaos, the metaverse adventure Smobler built with WildBrain and launched in May, was the centrepiece. Set in The Sandbox, it invites players of all ages to join Tinky Winky, Dipsy, Laa-Laa and Po on a quest to tame a wayward Tubby Custard Machine.

The collaboration with The Singapore Mint — minting since 1968 — produced the Teletubbies 24K Gold-Plated Metal Keychain Series. Each keychain carries a scannable QR code that opens Custard Chaos directly, so a physical keepsake is also a door into the game. Pop Toy Show attendees were the first in Southeast Asia to get the limited-edition series, sold only at Booth K31.

The booth ran hands-on gameplay, a Musical Chairs stage game with a gaming chair as the prize, giveaways, and photo opportunities with life-sized Teletubbies standees — an argument, in miniature, for the “kidult” economy of adult collectors and Gen Z fans that Smobler builds for.`,
    pullQuote: {
      text: 'Each collectible not only celebrates nostalgia but also connects fans to interactive metaverse gaming experiences through embedded QR codes.',
      attribution: 'Mr Lim, head of Raffles Mint Collectibles',
    },
    heroImage: '/events/irl-activations.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/smobler-teletubbies-and-the-singapore-mint-unite-to-bring-phygital-play-to-pop-toy-show-singapore-faf3be083b55',
    weight: 'standard',
    onWire: true,
    tags: ['Phygital', 'Teletubbies', 'The Singapore Mint'],
    readTime: '2 min read',
  },
  {
    id: 'smobler-nyse-singapore-60th',
    slug: 'smobler-nyse-singapore-60th',
    title: 'Smobler joins forces with NYSE to celebrate Singapore’s 60th birthday',
    type: 'press',
    publishedAt: '08 AUG 2025',
    month: 'AUG',
    year: 2025,
    excerpt:
      'The New York Stock Exchange and Smobler mark SG60, setting up the NOVA edition that followed in October.',
    body: `As Singapore marked its 60th birthday, Smobler announced the return of NOVA — the SG60 Edition, presented by the New York Stock Exchange in collaboration with Gemini, Nifty Gateway Studio and Skadden.

NOVA is a bi-annual festival that gathers global institutions, technologists, creatives and investors from across Smobler’s ecosystem for conversations at the intersection of culture and frontier tech. Last year’s edition lit up Orchard Road during TOKEN2049 and the F1 Night Race with a gathering at ARK11, drawing Champ Medici, Agoria, Animoca Brands group president Evan Auyang, The Sandbox co-founder and COO Sebastien Borget and C-suites from AWS and PwC Singapore — backed by 35 corporate sponsors and partners, and close to 2,500 signups.

The 2025 edition takes a more intimate and symbolic form: a curated afternoon tea on 2 October at Avenue On 3, a multi-label boutique and café inside Paragon Orchard created by F J Benjamin, Southeast Asia’s pioneer in luxury retail since 1959. It welcomes 120 invited guests — C-suite executives, founders, investors and institutional regulators.

As title sponsor, the NYSE brings over two centuries of influence to the celebration. The world’s largest equities exchange is home to 74% of the publicly listed Fortune 500 and 70% of the S&P 500. In a landmark gesture, it featured Smobler’s NOVA on the trading floor cubes at its Wall Street headquarters — international recognition for Singapore’s 60th anniversary and its journey from a little red dot to a global innovation and fintech hub.

The edition’s key visual was designed by local lifestyle brand Binary Style around Hotel Fort Canning, the historic landmark in Fort Canning Park that once housed the British Far East Command headquarters — echoing NOVA’s theme of bridging past and future, the natural within the urban and the historic within the digital.`,
    heroImage: '/events/nova-2025-singapore.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/smobler-joins-forces-with-nyse-to-celebrate-singapores-60th-birthday-02f7b16f4348',
    weight: 'featured',
    onWire: true,
    tags: ['NYSE', 'SG60', 'NOVA'],
    readTime: '2 min read',
  },
  {
    id: 'straits-times-crypto-bros-are-back',
    slug: 'straits-times-crypto-bros-are-back',
    title: 'The crypto bros are back: ‘The hubris never really left’',
    type: 'coverage',
    publishedAt: '09 AUG 2025',
    month: 'AUG',
    year: 2025,
    excerpt:
      'The Straits Times on the return of crypto’s loudest voices — and the operators, Smobler among them, who stayed and built through the quiet years.',
    body: `The Straits Times looked at the return of crypto’s loudest voices to Singapore, and at how much of the old excess has actually gone. Nearly all the insiders it spoke to wanted to play down the sector’s links to yachts, nightclubs and jet-setting, and to talk instead about how it has grown up since 2017.

Dr. Loretta Chen, 48, founder and chief executive of Smobler, reads the excess as a symptom of the sector’s youth. “When this whole notion of cryptocurrency was unleashed, it was the younger generation and digitally savvy that embraced it,” she told the paper. “With this sudden flush of cash, when you’re young, you will say, ‘Wow, let’s go throw a party’, right?” The piece draws the obvious comparison with 1980s Wall Street, before regulation began to instil discipline.

Chen is optimistic about Singapore specifically, arguing it is a natural hub for intelligent people and high-net-worth individuals because of its reputation for safety and its regulatory frameworks. She notes that Vitalik Buterin visits the country without a security entourage and uses public transport — something not possible in other crypto hubs.

Being based there also produces a different kind of company. Smobler, she says, stays away from the short-term profit of memecoins and has diversified into AI and virtual reality; a long-term orientation is what working closely with financial institutions and regulators requires.

The wider article charts the arrival of the suits. Coinbase’s Singapore country director reports a record number of applicants after years in which regulatory uncertainty weighed on job seekers as much as on capital; OKX Singapore received three times as many applications in the first half of 2025 as in the same period of 2024, and not only from Web3 natives.`,
    pullQuote: {
      text: 'The technology lends itself to it, and many jump on that bandwagon, but we do not.',
      attribution: 'Dr. Loretta Chen to The Straits Times',
    },
    publication: 'The Straits Times',
    sourceUrl: 'https://www.straitstimes.com/life/the-crypto-bros-are-back-the-hubris-never-really-left',
    weight: 'standard',
    onWire: false,
    tags: ['Coverage', 'Web3', 'Singapore'],
    readTime: '2 min read',
  },
  {
    id: 'nova-hawaii-launch',
    slug: 'nova-hawaii-launch',
    title: 'Smobler expands to Hawai‘i with NOVA launch',
    type: 'press',
    publishedAt: '05 SEP 2025',
    month: 'SEP',
    year: 2025,
    excerpt:
      'NOVA lands in Honolulu for Honolulu Tech Week, featuring 13+ local ventures alongside Smobler’s AI work with the State of Hawai‘i.',
    body: `Smobler announced the launch of Smobler Hawaii, marked by NOVA 2025: Hawai‘i Edition on 9 September at The Hub Coworking Hawaii, as part of Honolulu Tech Week.

NOVA is a travelling in-real-life mini-festival built to create meaningful connections at the intersection of technology, culture and community. It runs alongside major global events as an intimate alternative to large, impersonal conferences — since launching at TOKEN2049 Singapore in 2023 it has been an official side event at SXSW in Austin.

The Hawai‘i edition carries the theme “Culture. Community. Code”, spotlighting the islands’ cultural heritage, creative economy and entrepreneurial spirit alongside global tech leaders. It is co-presented with Kairos Ray, a Hawai‘i-based premium home and apparel brand devoted to modern design and the preservation of traditional craftsmanship.

“Launching Smobler Hawaii in my adopted home is deeply personal and profoundly purposeful,” said Dr. Loretta Chen, founder and CEO of Smobler. “Hawaii has always been a meeting point of East and West, and NOVA 2025: Hawaii Edition is our way of honoring that heritage — bridging local creativity with global innovation to build a future that is inclusive, sustainable, and community-driven.”

Michael Bennett, founder of Honolulu Tech Week, framed the fit: the week’s mission is to accelerate the growth of tech talent, capital and adoption across Hawai‘i, and the NOVA lineup connects the local community with a global presence. Speakers include Meli James, co-founder of the economic development initiative Mana Up, and the evening features local pop-ups including Galleon Chocolates.`,
    sourceUrl: 'https://medium.com/@smobler.io/smobler-expands-to-hawaii-with-nova-launch-abf5db2f77e1',
    weight: 'standard',
    onWire: true,
    tags: ['NOVA', 'Hawaii', 'Phygital'],
    readTime: '2 min read',
  },
  {
    id: 'smobler-expands-beyond-gaming',
    slug: 'smobler-expands-beyond-gaming',
    title: 'Smobler expands beyond gaming into AI, blockchain and impact tech',
    type: 'field',
    publishedAt: '31 JUL 2025',
    month: 'JUL',
    year: 2025,
    excerpt:
      'The studio sets out its four pillars — educational gaming, AI for food security, blockchain for maritime trade, and phygital events.',
    body: `Smobler set out publicly what the work had already become: a studio expanding beyond gaming into immersive tech, blockchain and AI. It is backed by Brinc and The Sandbox, and supported by ecosystem partners including Block71, Enterprise Singapore, IMDA, Plug and Play and ScaleUp inBrazil.

The year’s milestone in play was Teletubbies: Custard Chaos, the first Teletubbies game built in The Sandbox with WildBrain, spotlighted at the Las Vegas Licensing Expo 2025 among 5,000-plus brands and 16,000 attendees. “Bringing Teletubbies into the Metaverse with Smobler has been an incredibly exciting project,” said Melissa Goodrich, director of franchise management at WildBrain. “The response at Licensing Expo was overwhelmingly positive.”

To carry the pipeline, Smobler appointed Mridhul Pax as chief technology officer. An engineering leader with over 18 years of experience, Pax has built AI applications, LLM platforms, GPU inference pipelines and blockchain validator infrastructure. Under him the studio’s AI work spans LLM fine-tuning and enterprise AI, generative content co-pilots, conversational and contextual AI, multilingual NLP chatbots, and predictive analytics.

Smobler was accepted into two of the industry’s most respected programmes. The Meta Llama Incubator — the first of its kind in APAC — gathers 40 start-ups and SMEs to build responsible AI products on Meta’s open-source Llama models, backed by IMDA, GovTech, AI Singapore, SGInnovate and Enterprise Singapore. NVIDIA Inception, a global network of more than 25,000 members, adds technical training, hardware and platform access, and industry connections.

The frontier work is deliberately applied. The FoodTech AI initiative, developed with the Wahiawā Value-Added Product Development Center — an initiative of Leeward Community College and the State of Hawai‘i — is a generative AI platform that helps food entrepreneurs and exporters automate nutritional labelling, HACCP compliance and certification.

With headquarters in Singapore and teams in Silicon Valley, Hawai‘i, Brazil and Bhutan, the stated ambition is socially conscious AI deployed across industries, borders and communities — innovations as scalable as they are human-centred.`,
    heroImage: '/pillars/ai-food.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/smobler-expands-beyond-gaming-into-ai-blockchain-impact-tech-add7c18116cb',
    weight: 'featured',
    onWire: true,
    tags: ['AI', 'Blockchain', 'Strategy', 'Impact'],
    readTime: '2 min read',
  },
  {
    id: 'nus-alumnus-rewriting-the-script',
    slug: 'nus-alumnus-rewriting-the-script',
    title: 'Rewriting the script',
    type: 'coverage',
    publishedAt: '15 JUL 2025',
    month: 'JUL',
    year: 2025,
    excerpt:
      'The NUS Alumnus profiles Dr. Loretta Chen’s route from theatre and academia to founding a technology studio.',
    // The Alumnus serves the article behind a client-side reader that returns no text to
    // any fetch, so this body stays a summary and the source link carries the detail.
    body: `NUS’s alumni magazine, The Alumnus, profiles Dr. Loretta Chen — two decades across media, education, publishing and the performing arts, and the decision to rewrite that script as a technology founder.`,
    publication: 'The Alumnus, NUS',
    sourceUrl: 'https://alumni.nus.edu.sg/thealumnus/2025/07/15/rewriting-the-script/',
    weight: 'standard',
    onWire: false,
    tags: ['Leadership', 'Profile', 'Singapore'],
    readTime: '1 min read',
  },
  {
    id: 'wildbrain-teletubbies-sandbox',
    slug: 'wildbrain-teletubbies-sandbox',
    title: 'Smobler and WildBrain partner to launch their first Teletubbies game in The Sandbox',
    type: 'press',
    publishedAt: '09 MAY 2025',
    month: 'MAY',
    year: 2025,
    excerpt:
      'Custard Chaos brings one of the most recognisable children’s properties in the world into a user-generated game platform for the first time.',
    body: `Smobler and WildBrain, a global leader in kids’ and family entertainment, announced Teletubbies: Custard Chaos — the first-ever Teletubbies game, built on The Sandbox.

Teletubbies broke boundaries when it launched in 1997 by speaking directly to children in their own language, with words and mannerisms that mirrored their development. The BAFTA-winning series has kept that connection across generations; its playful, offbeat, nostalgic register now plays to Gen Z and Millennials on TikTok and Instagram, where the brand has over three million followers.

“Teletubbies has huge cross-generational appeal, and we’re excited to introduce our colorful quartet to a new digital audience on The Sandbox,” said Melissa Goodrich, director of franchise management at WildBrain. “Smobler’s track record of creating high-quality games for family-friendly IPs is unparalleled, and the game so perfectly captures the playful, whimsical, and joyful nature of our beloved Teletubbies.”

That track record is the reason for the partnership. Smobler’s portfolio spans Playground@UXC with Singapore Polytechnic and the Let’s Celebrate 2024 interactive game for Mediacorp, and its institutional work includes Bhutanverse for the Kingdom of Bhutan, A11yverse — the world’s first disability-led accessibility park — and Equalverse, an equestrian Roblox game for differently abled youths built with StarHub.

In Custard Chaos, players step into a reimagined Teletubbyland on a custard-fuelled quest to work out what went wrong with the Tubby Custard Machine.`,
    pullQuote: {
      text: 'We’re not just making a game — we’re building a wonderland where childhood meets the Metaverse.',
      attribution: 'Dr. Loretta Chen, founder & CEO, Smobler',
    },
    heroImage: '/projects/teletubbies-custard-chaos.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/smobler-and-wildbrain-partner-to-launch-their-first-teletubbies-game-in-the-sandbox-e3b377987b04',
    weight: 'featured',
    onWire: true,
    tags: ['WildBrain', 'Teletubbies', 'The Sandbox', 'IP'],
    readTime: '2 min read',
  },
  {
    id: 'inside-smoblers-all-female-leadership',
    slug: 'inside-smoblers-all-female-leadership',
    title: 'Inside Smobler’s all-female leadership',
    type: 'field',
    publishedAt: '07 MAR 2025',
    month: 'MAR',
    year: 2025,
    excerpt:
      'How an all-female leadership team runs a studio in two industries — games and Web3 — that are not known for having one.',
    body: `According to the World Bank, female representation in leadership at Amazon, Facebook, Apple, Google and Microsoft runs between 26% and 34%. Women make up 60% of Smobler’s workforce, and with the hire of former Timbre Group executive Veronica Ong as head of business development, the core leadership team became entirely women-led.

At its helm is founder and CEO Dr. Loretta Chen, who spent over two decades driving social equity through media, storytelling and technology. She was the People’s Choice for Nominated Member of Parliament and has been an international consultant to the Kingdom of Bhutan since 2011; she is part of the AWS Women Founders Program and UBS Project Female Founder, a Top 100 Women of the Future, and was named among the Unstoppable Women of Web3 and AI.

When the metaverse emerged as a frontier during the pandemic, Chen saw a way to reshape narratives and democratise access, and founded Smobler to bring brands, IPs and communities into Web3 with diversity and accessibility at the core.

The record since then includes the world’s first phygital wedding in The Sandbox, Bhutanverse for the Kingdom of Bhutan, and A11yverse — the world’s first disability-led accessibility park and training programme, built with SG Enable. Alongside those sit Playground@UXC for Singapore Polytechnic, Mediacorp’s Year-End Countdown 2023, StarHub’s Equalverse, and the first cross-chain project between Cardano and Polygon for Clay Nation.

The team leads are Rafaela Rizzi (production), Gianna Bui (communications), Joyce Gan (administration) and Veronica Ong (business development), heading a team spread across Brazil, Vietnam, Singapore and beyond. “As a company led by women, we are not just breaking industry norms — we’re actively building an inclusive, innovative future in the Metaverse and Web3,” Ong said on joining.`,
    sourceUrl: 'https://medium.com/@smobler.io/inside-smoblers-all-female-leadership-f59f4d1edace',
    weight: 'standard',
    onWire: false,
    tags: ['Leadership', 'Culture', 'Women in Tech'],
    readTime: '2 min read',
  },
  {
    id: 'her-world-loretta-chen-web3',
    slug: 'her-world-loretta-chen-web3',
    title: 'Dr. Loretta Chen on breaking barriers and building the future of Web3 with Smobler',
    type: 'coverage',
    publishedAt: '06 MAR 2025',
    month: 'MAR',
    year: 2025,
    excerpt:
      'Her World interviews Smobler’s founder on building a Web3 studio and the barriers she had to get through to do it.',
    body: `Her World profiled Dr. Loretta Chen for its SG60 issue of Innovators — women driving Singapore’s progress — in a piece by Hayden Ng.

Before tech, Chen’s career ran through the creative arts, media, academia and entrepreneurship, and the early challenge was having to work twice as hard to prove herself. At 24, teaching at a tertiary institute, she won a Best Teaching Award and was told by her female dean not to treat teaching as a popularity contest. “By doing so, she disregarded that students can exercise discernment and conflated my family’s media reputation with my efforts,” she says.

She founded Smobler in 2021 as a game studio and metaverse architect helping brands, enterprises, institutions, educators and creators build immersive experiences; the company has since expanded into real-world blockchain solutions and AI applications.

The early obstacle was convincing businesses that Web3 was a sustainable ecosystem rather than hype. “Many investors were hesitant about the metaverse, especially after market volatility and high-profile scams in the crypto space,” she explains. “We also had to prove our model and show that Smobler was not just about virtual LAND sales — it was about brand storytelling, engaging experiences, real-world utility, and community-building.”

Among her proudest moments is Herstory, a project that encourages young women into technology careers by having them create and own digital assets. She is direct about the misconceptions she wants gone: that women are not interested in tech or lack the skills, and that a woman in tech has to be a coder.`,
    pullQuote: {
      text: 'Women bring incredible creativity, empathy, and problem-solving skills to the table — qualities that are essential for innovation.',
      attribution: 'Dr. Loretta Chen to Her World',
    },
    publication: 'Her World',
    sourceUrl: 'https://www.herworld.com/pov/dr-loretta-chen-breaking-barriers-and-building-future-web3-smobler',
    weight: 'standard',
    onWire: false,
    tags: ['Leadership', 'Web3', 'Women in Tech'],
    readTime: '2 min read',
  },
  {
    id: '8sian-royal-press-southeast-asian-culture',
    slug: '8sian-royal-press-southeast-asian-culture',
    title: '8SIAN, Smobler and The Royal Press join forces to celebrate Southeast Asian culture in the metaverse',
    type: 'press',
    publishedAt: '27 JAN 2025',
    month: 'JAN',
    year: 2025,
    excerpt:
      'A three-way collaboration extending 8SIAN TOWN with Malaysia’s oldest letterpress printer, The Royal Press.',
    body: `The Royal Press — one of the world’s oldest polyglot letterpress houses — announced a collaboration with 8SIAN, the Web3 brand celebrating Asian heritage, and Smobler, to unveil 8SIAN TOWN, a Southeast Asian-inspired experience in The Sandbox.

The launch took place on 1 February at The Royal Press Living Museum in Melaka, a UNESCO World Heritage Site. Founded in 1938 and housed in a pre-war heritage building, The Royal Press has printed in Jawi, Chinese, Tamil, English and Malay, standing as a physical “Guardian of Language” for the region’s linguistic heritage.

“Our mission has always been to preserve the heritage of letterpress printing,” said Ee Soon Wei, the museum’s custodian. “This collaboration allows us to introduce this art form to a wider audience and foster a deeper appreciation. It is a meaningful step towards navigating a future where tradition and innovation coexist seamlessly.”

Nicole Yap, the Malaysian founder of the 8SIAN NFT project, built 8SIAN TOWN as a tribute to the region’s landmarks, traditions and multicultural spirit. “As a parent, I see how my kids are naturally drawn to voxel-based worlds like Minecraft and Roblox,” she said. “It brings me immense joy to put Asian culture on the map in The Sandbox.”

Smobler’s contribution was to rebuild the Living Museum inside the game, turning traditional printing blocks into an immersive experience. The project is the latest chapter in the studio’s Metaverse for Good initiative, alongside Sonik Satellitez for young musicians and the award-winning 3VEREST.`,
    heroImage: '/projects/8sian-town.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/8sian-smobler-and-the-royal-press-join-forces-to-celebrate-southeast-asian-culture-in-the-1458f51f2628',
    weight: 'standard',
    onWire: false,
    tags: ['8SIAN', 'Culture', 'The Sandbox'],
    readTime: '2 min read',
  },
  {
    id: 'voxel-around-the-world',
    slug: 'voxel-around-the-world',
    title: 'Smobler launches ‘Voxel Around The World’ campaign to celebrate cultural diversity and global partnerships in 2025',
    type: 'press',
    publishedAt: '06 JAN 2025',
    month: 'JAN',
    year: 2025,
    excerpt:
      'A year-long campaign tying together Smobler’s cultural builds — Bhutan, Singapore, Southeast Asia, Hawai‘i — under one banner.',
    body: `Smobler opened 2025 with Voxel Around The World, a three-week campaign running from 6 to 31 January celebrating the cultural diversity and global partnerships behind the studio’s work.

At its heart is a giveaway of seven exclusive in-game equipables, each inspired by the culture and traditions of one of the seven countries and regions the Smobler team comes from: Singapore, Malaysia, Vietnam, Brazil, Serbia, South Africa and Hawai‘i. The items are not only decorative — they carry catalysts that boost player stats and work across every experience in The Sandbox.

“We are deeply rooted in our IDEALS of Inclusivity, Diversity, Equity, Access, Leadership, Love and Sustainability,” said founder and CEO Loretta Chen. “The team will design digital assets representative of their heritage and share personal anecdotes with our global Web3 and Metaverse communities over three weeks of the campaign.”

The campaign also names the network behind the year’s projects: The Sandbox and Unstoppable Domains, the Clay Nation and 8SIAN communities, Singapore rock musician and Music For Good founder Inch Chua, and Druk Holding and Investments, Bhutan’s government investment arm. Those partnerships produced Bhutanverse, Clay Nation — the first interoperable project between Cardano and Polygon — Sonik Satellitez, and the first Unstoppable top-level domain on Base.

It follows two wins at The Sandbox Awards 2024 in Los Angeles: Best Sports Experience for 3VEREST | The Edge, and Best Branded Experience for Saving ClayBox: The Sonic Sands Adventure. The campaign also sets up the launch of 8SIAN TOWN, the first Southeast Asian-inspired experience in The Sandbox.`,
    sourceUrl:
      'https://medium.com/@smobler.io/smobler-launches-voxel-around-the-world-campaign-to-celebrate-cultural-diversity-and-global-638ab0904fd1',
    weight: 'standard',
    onWire: false,
    tags: ['Culture', 'Campaign', 'Partnerships'],
    readTime: '2 min read',
  },

  /* ────────────────────────────── 2024 ─────────────────────────────────── */
  {
    id: 'pioneering-a-metaverse-for-good',
    slug: 'pioneering-a-metaverse-for-good',
    title: 'Pioneering a metaverse for good: Smobler leads in ethical tech and educational gaming',
    type: 'field',
    publishedAt: '19 DEC 2024',
    month: 'DEC',
    year: 2024,
    excerpt:
      'The thesis behind the studio’s Metaverse for Good work — accessibility, inclusion, education and cultural preservation as the brief, not the marketing.',
    body: `Smobler set out the reasoning behind its Metaverse for Good portfolio, and the values under it: inclusivity, diversity, equity, access, leadership and sustainability. The ethos produced A11yVerse, the world’s first disability-led accessibility park, created with SG Enable, and Peace Sanctuary, the digital counterpart to the Universal Peace Sanctuary initiative built with Animoca Brands.

In spite of market conditions, 2024 was a landmark year: 250% year-on-year revenue growth, ten new products shipped, two phygital events in Singapore and the United States, and 36 new partners.

The ecosystem now runs from tech partners AWS, Meta and Silversea Media to entertainment figures including Champ Medici, Agoria, Imogen Heap and Shara Senderoff, alongside WildBrain, ASUS and Republic of Gamers, and Web3 innovators Cardano, Moongate, Opal, Ordzaar and Rare Network.

Smobler appeared at Web Summit Lisbon, SelectUSA 2024 and Bitcoin Nashville, and CEO Dr. Loretta Chen delivered keynotes at the Washington International Association Forum and the DT|UX Summit in Manila, where the studio unveiled the Humanity-Centered Design (HCD+) Metaverse — a gamified platform built for Singapore Polytechnic that lets students and professionals apply design thinking to real-world challenges.

“The collaboration between Singapore Polytechnic and Smobler at the DT|UX Summit 2024 underscores our shared commitment to using design as a powerful driver for regional transformation,” said Georgina Phua, deputy principal (development) at Singapore Polytechnic.

The year’s collaborations also included .Smobler, the first top-level domain on Base, launched with Unstoppable Domains, and the appointment of mountaineer Wasfia Nazreen as ambassador for 3VEREST.`,
    heroImage: '/projects/a11y-park.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/pioneering-a-metaverse-for-good-smobler-leads-in-ethical-tech-and-educational-gaming-c9f67e872325',
    weight: 'standard',
    onWire: true,
    tags: ['Metaverse for Good', 'Ethics', 'Accessibility'],
    readTime: '2 min read',
  },
  {
    id: 'zaobao-redefining-the-metaverse',
    slug: 'zaobao-redefining-the-metaverse',
    title: 'Re-defining the metaverse: work, play and everyday living take precedence as the space continues to grow',
    type: 'coverage',
    publishedAt: '22 NOV 2024',
    month: 'NOV',
    year: 2024,
    excerpt:
      'Lianhe Zaobao on how the metaverse conversation moved from speculation to work, play and daily use.',
    // Zaobao is subscriber-only past the opening section, so this body summarises the
    // published lede rather than the full feature.
    body: `Lianhe Zaobao’s feature argues that the metaverse did not die when the hype did. Over the three years since the speculators left, developers kept working, the technology matured, and more interesting and practical use cases appeared.

The piece dates the peak to 28 October 2021, when Mark Zuckerberg renamed Facebook to Meta and the term became the technology conversation. Three years on, it is barely mentioned, and some declare the metaverse a bubble that briefly bloomed.

Zhao Shengdong, professor at City University of Hong Kong’s School of Creative Media and Department of Computer Science, disagrees: the field has made real progress, AI is accelerating it, and the metaverse will become part of daily life — it simply is not a hot topic right now.

The industry view in the feature is that mobile-native, lightweight metaverse platforms are what bring the technology into everyday play, work and social life, tying the virtual and the real together with fast, seamless interaction.`,
    publication: 'Lianhe Zaobao',
    sourceUrl:
      'https://www.zaobao.com.sg/lifestyle/feature/story20241122-5338541?gift=51b40793-6ec4-412f-8d11-103940ec2b64',
    weight: 'standard',
    onWire: false,
    tags: ['Coverage', 'Metaverse', 'Singapore'],
    readTime: '1 min read',
  },
  {
    id: 'straits-times-singapore-writers-festival-2024',
    slug: 'straits-times-singapore-writers-festival-2024',
    title: 'Singapore Writers Festival 2024: Stories hold power to open spaces for alternative voices',
    type: 'coverage',
    publishedAt: '18 NOV 2024',
    month: 'NOV',
    year: 2024,
    excerpt:
      'The Straits Times covers the festival panel on storytelling and alternative voices, featuring Dr. Loretta Chen.',
    body: `The Straits Times reported from the closing day of the Singapore Writers Festival, where two panels found unexpected synchronicity in advocating alternative narratives.

At Ink And Equality: The Role Of Female Empowerment In Modern Literature, held at Victoria Theatre on 17 November, authors Cat Bohannon and Sarah Malik spoke about women-centred stories in a panel moderated by Dr. Loretta Chen.

Malik, whose 2022 memoir Desi Girl came out of growing up in a white-dominated 1990s Australia, described engaging deeply with books and newspapers despite never seeing herself in them, because she instinctively knew the importance of narratives. September 11 was the spark: “I suddenly saw my identity and who I was reflected back to me in sometimes caricatured, grotesque ways… I wanted to be part of it, not as its subject, but as the creator.”

Bohannon, author of Eve: How The Female Body Drove 200 Million Years Of Human Evolution, read the same moment as a collective rupture that only later transforms into how a society tells the story of itself. Both writers acknowledged the risk in it — Malik recalling the fear of being disowned, Bohannon noting that the act of speaking is always offensive — and both argued that ground gained cannot be taken for granted.

The second panel, Echoes Of The Straits: Unearthing Singapore’s Indigenous Legacy, brought Cultural Medallion recipient Isa Kamari together with Orang Laut SG founder Firdaus Sani on reasserting indigenous voices in a national narrative that has long neglected pre-colonial histories.`,
    pullQuote: {
      text: 'Storytellers like us should do the job of telling a different narrative — a narrative from the ground up, not a narrative from the top.',
      attribution: 'Isa Kamari, at the Singapore Writers Festival',
    },
    publication: 'The Straits Times',
    sourceUrl:
      'https://www.straitstimes.com/life/arts/singapore-writers-festival-2024-stories-hold-power-to-open-spaces-for-alternative-voices',
    weight: 'standard',
    onWire: false,
    tags: ['Coverage', 'Culture', 'Storytelling'],
    readTime: '2 min read',
  },
  {
    id: 'base-tld-web-summit',
    slug: 'base-tld-web-summit',
    title: 'Smobler, Unstoppable and Base team up at Web Summit to launch the first TLD on Base',
    type: 'press',
    publishedAt: '14 NOV 2024',
    month: 'NOV',
    year: 2024,
    excerpt:
      'The first top-level domain on Base, announced at Web Summit with Unstoppable Domains.',
    body: `At Web Summit Lisbon, Smobler teamed up with Unstoppable Domains — the largest onchain domain name provider — and Base to launch .Smobler, the first top-level domain on Base and the first belonging to a gaming and metaverse studio.

The domain is designed to unify Smobler’s expanding ecosystem across The Sandbox and its other gaming platform partners. It puts the studio among an elite group of over 20 blockchain companies in the Unstoppable Domains family, including Blockchain.com, with plans to take part in the ICANN gTLD application round scheduled for 2026.

“Our collaboration with Smobler to launch the first-ever gaming and metaverse studio TLD on Base marks a watershed moment in the evolution of digital identity and community engagement within the Web3 gaming space,” said Sandy Carter, chief operating officer at Unstoppable Domains. “The .Smobler domain is not just a technological advancement; it’s a bridge connecting passionate gaming communities with the limitless possibilities of the decentralized web.”

Base was chosen for scalability and efficiency, giving the domain speed, security and interoperability inside the Ethereum ecosystem — and opening the way for further specialised TLDs on the chain.

To mark the launch, Smobler and Unstoppable ran a campaign from 14 to 21 November offering a .Smobler domain plus an Unstoppable Mansion: a virtual building the winner can customise and publish in The Sandbox as a platform for their own experiences.`,
    sourceUrl:
      'https://medium.com/@smobler.io/smobler-unstoppable-and-base-team-up-at-web-summit-to-launch-1st-tld-on-base-0a4b0043b222',
    weight: 'standard',
    onWire: true,
    tags: ['Base', 'Unstoppable Domains', 'Web Summit', 'Web3'],
    readTime: '2 min read',
  },
  {
    id: 'moongate-sg60-collectibles',
    slug: 'moongate-sg60-collectibles',
    title: 'Smobler partners with Moongate to launch exclusive SG60 digital collectibles at Web Summit',
    type: 'press',
    publishedAt: '11 NOV 2024',
    month: 'NOV',
    year: 2024,
    excerpt:
      'A digital collectible drop with Moongate, marking Singapore’s 60th year, launched at Web Summit.',
    body: `In celebration of Singapore’s 60th anniversary, Smobler announced a collaboration with Moongate to launch a limited-edition SG60 collectible series, blending digital innovation with real-world value for holders.

Each collectible acts as a digital key, granting entry to exclusive events, discounts and community benefits across Smobler’s network of more than 60 partners — a token-gated experience built on Moongate’s Web3 tooling that ties digital assets to physical rewards.

The idea came out of a post-mortem between the two companies on NOVA Singapore, held over TOKEN2049. “We were keen to partner again as our inaugural collaboration saw a full house attended by celebrities like Champ Medici, DJ Agoria, founders, and C-suites from PwC, AWS, The Sandbox, and Animoca Brands,” said founder and CEO Loretta Chen. “Given we are a homegrown Singapore company and Moongate’s core competencies, I thought a special SG60 collection would be the best way to immortalize this moment.”

Beyond individual perks, the two companies set out to onboard a wider group of partners bringing rewards and discounts to holders, and to use Moongate’s loyalty and engagement tools to keep the community active rather than static.

“This collaboration is a wonderful opportunity to celebrate Singapore’s 60th anniversary by bringing people together through unique experiences and community,” said Peter Hui, co-founder of Moongate.`,
    sourceUrl:
      'https://medium.com/@smobler.io/smobler-partners-with-moongate-to-launch-exclusive-sg60-digital-collectibles-at-web-summit-fac7370fbb95',
    weight: 'standard',
    onWire: false,
    tags: ['Moongate', 'SG60', 'Collectibles', 'Web Summit'],
    readTime: '2 min read',
  },
  {
    id: 'music-for-good-inch-chua',
    slug: 'music-for-good-inch-chua',
    title: 'Smobler and Singapore’s rock icon Inch Chua launch Music For Good to champion young musicians in The Sandbox',
    type: 'press',
    publishedAt: '11 NOV 2024',
    month: 'NOV',
    year: 2024,
    excerpt:
      'Sonik Satellitez takes a player from music student to working DJ or producer, built with Inch Chua’s non-profit Music For Good.',
    body: `Smobler launched Sonik Satellitez, a music-driven game built in partnership with Music For Good — the non-profit founded by Singapore indie rock icon Inch Chua.

Chua is a pivotal figure in Singapore’s music scene, and Music For Good is her venture to uplift the music community and nurture young talent. “Music For Good pursues opportunities that focus on audience and capability development in the arts and culture space,” she says. “A big part of that is being unafraid to explore new models and creating new experiences to fill some gaps in the industry. Smobler has been a perfect partner with our aligned goals and values.”

The game is set in a retro-futuristic city powered by music, and takes players through a music career: starting as students and working up to become professional DJs or producers. Players choose between guitarist and drummer, each with its own questline, and meet NPCs modelled on real musicians — Chua among them, acting as an in-game mentor.

The two founders go back further than the project. “My friendship with Inch started with music as both of us were media personalities and DJs in LUSH 99.5, Singapore’s indie music station,” said Dr. Loretta Chen. “It is heartening to see how we have progressed from broadcast radio to blockchain gaming.”

Sebastien Borget, COO and co-founder of The Sandbox, framed the platform’s side: it embraces music festivals, concerts and art expos as a way for artists to deliver immersive shows to a global audience. Music For Good went on to appear at Web Summit 2024 in Lisbon.`,
    heroImage: '/projects/sonik-satellitez.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/smobler-and-singapores-rock-icon-inch-chua-launch-music-for-good-to-champion-young-musicians-in-ebe65e0a2709',
    weight: 'standard',
    onWire: true,
    tags: ['Music For Good', 'National Arts Council', 'The Sandbox'],
    readTime: '2 min read',
  },
  {
    id: 'most-inspirational-women-of-web3',
    slug: 'most-inspirational-women-of-web3',
    title: 'Dr. Loretta Chen named one of the Most Inspirational Women of Web3',
    type: 'press',
    publishedAt: '28 OCT 2024',
    month: 'OCT',
    year: 2024,
    excerpt:
      'Smobler’s founder and CEO recognised among the most inspirational women working in Web3.',
    body: `Dr. Loretta Chen, founder and CEO of Smobler, was recognised as one of Unstoppable WOW3’s Most Inspirational Women of Web3 and AI in 2024. The awards were announced on 21 October at Singularity South Africa, one of the continent’s most prestigious tech events.

The Unstoppable Women of Web3 and AI initiative exists to equalise the playing field in emerging technologies by making women leaders’ achievements visible. Sandy Carter, COO of the organisation, framed the gap plainly: women are 51% of the global population and around 10% of all CEOs.

Under Chen’s leadership, Smobler has delivered a run of metaverse world-firsts, including a phygital wedding and a disability-led accessibility park — work that bridges traditional industries and blockchain rather than treating the two as separate audiences.

The recognition sits alongside her selection for the AWS Women Founders Program, UBS Project Female Founder, and a place among the Top 100 Women of the Future.`,
    sourceUrl:
      'https://medium.com/@smobler.io/dr-loretta-chen-founder-and-ceo-of-smobler-awarded-one-of-the-most-inspirational-women-of-web3-df5213d7cbd8',
    weight: 'standard',
    onWire: false,
    tags: ['Award', 'Leadership', 'Web3'],
    readTime: '1 min read',
  },
  {
    id: 'universal-peace-sanctuary',
    slug: 'universal-peace-sanctuary',
    title: 'Animoca Brands, The Sandbox and Smobler launch virtual Universal Peace Sanctuary',
    type: 'press',
    publishedAt: '24 SEP 2024',
    month: 'SEP',
    year: 2024,
    excerpt:
      'A gamified sanctuary built with Animoca Brands and The Sandbox, aimed at global harmony rather than conquest.',
    body: `Animoca Brands, its subsidiary The Sandbox, and Smobler launched the Universal Peace Sanctuary — an open gaming experience in The Sandbox metaverse, and the digital counterpart to the physical Universal Peace Sanctuary. Both aim to promote peace, unity and cultural understanding.

The physical Sanctuary, under construction in Lumbini, Nepal, was conceived by the Dzogchen master and teacher His Eminence Shyalpa Rinpoche. The virtual one is a destination where users from any background can explore interactive experiences focused on global harmony, in line with Rinpoche’s stated aim: to make peace more fashionable than war.

“Unconditional love is the true source of peace in the world,” said Rinpoche. “And while it is great to build temples on pilgrimage sites such as Lumbini, we all need to build temples of tolerance and peace within our own hearts… The Universal Peace Sanctuary in The Sandbox provides a neutral, digital space for everyone, including world leaders and diplomats seeking peaceful resolutions to global conflict.”

The Sanctuary honours Queen Mayadevi, birth mother of Siddhartha Gautama Buddha, and all mothers past, present and future, as exemplars of the selfless love the project takes as its subject.

As players move through the virtual Sanctuary, each location reveals another layer of its history and significance. The route works through the impact of major conflicts in human history and their consequences, so that each step offers a lesson toward world peace by way of inner peace.`,
    heroImage: '/projects/peace-sanctuary.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/animoca-brands-the-sandbox-smobler-launch-virtual-universal-peace-sanctuary-3339b7b6fedb',
    weight: 'featured',
    onWire: true,
    tags: ['Animoca Brands', 'The Sandbox', 'Metaverse for Good'],
    readTime: '2 min read',
  },
  {
    id: 'first-base-tld-immersive-web3',
    slug: 'first-base-tld-immersive-web3',
    title: 'Unstoppable and Smobler announce first Base TLD for immersive Web3 experiences',
    type: 'press',
    publishedAt: '16 SEP 2024',
    month: 'SEP',
    year: 2024,
    excerpt:
      'The first Base top-level domain built specifically for immersive Web3 experiences.',
    body: `Unstoppable Domains, the largest onchain domain name provider and digital identity platform, announced a collaboration with Smobler to launch .Smobler — the first gaming and metaverse studio top-level domain on Base.

The domain is built to unify the studio’s expanding ecosystem across The Sandbox and its other gaming platform partners, letting players access services, transfer assets and identify themselves across platforms. Base was chosen for its scalability and efficiency, giving the domain speed, security and interoperability inside the Ethereum ecosystem, and opening the way for further specialised TLDs on the chain.

The extension does several jobs at once: it establishes a first on Base for the gaming sector, amplifies the brand by letting community members carry it as their own identity, and acts as a digital signature of affiliation that makes onboarding new users easier.

The announcement took centre stage at NOVA, Smobler’s signature event held on 17 September at ARK11 in Orchard Central, in conjunction with Ordinals Summit and TOKEN2049 Singapore — an edition featuring Roblox, The Sandbox, Champ Medici, Agoria, ASUS, Republic of Gamers and AWS.`,
    sourceUrl:
      'https://medium.com/@smobler.io/unstoppable-and-smobler-announce-first-base-tld-for-immersive-web3-experiences-49396834939b',
    weight: 'standard',
    onWire: false,
    tags: ['Base', 'Unstoppable Domains', 'Web3'],
    readTime: '1 min read',
  },
  {
    id: 'nova-2024-singapore-token2049',
    slug: 'nova-2024-singapore-token2049',
    title: 'Smobler’s NOVA 2024: Singapore edition turns up the heat with TOKEN2049 and the F1 night race',
    type: 'press',
    publishedAt: '14 SEP 2024',
    month: 'SEP',
    year: 2024,
    excerpt:
      'NOVA returns to Singapore as a TOKEN2049 event and afterparty partner, timed to the Formula 1 night race, with Agoria and Champ Medici headlining.',
    body: `Smobler announced NOVA 2024: Singapore Edition, an official TOKEN2049 satellite event held with Ordinals Summit — Asia’s first large-scale Bitcoin Ordinals event — Rare Social and Champ Medici. It followed the inaugural Singapore edition the year before and the Austin edition at SXSW that March.

The event ran on 17 September at ARK11, an 8,000-square-foot sci-fi-themed club in the middle of Orchard Road, timed to sit alongside TOKEN2049 and the Formula 1 night race.

NOVA is a celebration of the communities connected to the Smobler ecosystem — among them the lifestyle conglomerate Spa Esprit Group, gaming hardware giant Republic of Gamers, the non-profit Music For Good, and The Sandbox. AWS gave away US$100,000 worth of credits to qualified startups at the event.

Champ Medici led the roster. Widely regarded as one of the most important players in Web3, he is the architect of Snoop Dogg’s move into the sector. French electronic DJ and producer Agoria — fresh from a digital art show at the Musée d’Orsay and a set at the Paris Olympics — headlined, and joined a fireside chat with Sébastien Borget, co-founder and COO of The Sandbox.

“For the third consecutive event, we’re proud to stand alongside Smobler, The Sandbox, AWS, and other industry leaders in supporting NOVA at Ordinals Summit and TOKEN2049,” said Sandy Carter, chief operating officer of Unstoppable Domains. “Together, we’re not just witnessing the future of blockchain and AI — we’re actively shaping it.”`,
    heroImage: '/events/nova-2024-singapore.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/smoblers-nova-singapore-edition-turns-up-the-heat-with-token2049-f1-night-race-17665a396f8f',
    weight: 'standard',
    onWire: true,
    tags: ['NOVA', 'TOKEN2049', 'Phygital', 'Singapore'],
    readTime: '2 min read',
  },
  {
    id: 'wasfia-nazreen-3verest-ambassador',
    slug: 'wasfia-nazreen-3verest-ambassador',
    title: 'World-renowned mountaineer Wasfia Nazreen appointed ambassador for 3VEREST',
    type: 'press',
    publishedAt: '25 AUG 2024',
    month: 'AUG',
    year: 2024,
    excerpt:
      'The mountaineer joins Smobler’s landmark Everest experience as its ambassador.',
    body: `Wasfia Nazreen — mountaineer, activist and National Geographic Explorer — was appointed an official ambassador of Smobler, collaborating on 3VEREST, the studio’s Everest experience in The Sandbox.

3VEREST lets players summit Mount Everest from home: a gamified ascent that teaches the history, culture and environmental pressures of the Himalayan region, and pays tribute to the Sherpa people so often hired as guides and porters for foreign expeditions.

The game’s first chapter, Khumbu Icefall, was made with Kenton Cool, the British adventurer with sixteen Everest summits to his name. During the 2023 climbing season Cool minted a Climber avatar at Everest Base Camp, 5,346 metres above sea level — the world’s highest NFT.

The numbers behind the first chapter: 1,953 avatars minted, a nod to the year Sir Edmund Hillary first reached the summit, and since launch more than 40,000 visits, 17,000 unique players and over 5,000 hours played.

Nazreen’s appointment carries into the second chapter, The Summit. She was chosen for her insistence on crediting Sherpa and other high-altitude guides from Nepal’s different ethnicities, and for her environmental advocacy — both foundational to the project’s themes.`,
    pullQuote: {
      text: 'She sees the importance of extending her reach to a digitally savvy demographic and appreciates the power of gaming to build community, camaraderie and creating awareness.',
      attribution: 'Loretta Chen, founder & CEO, Smobler',
    },
    heroImage: '/projects/3verest.jpg',
    sourceUrl:
      'https://medium.com/@smobler.io/world-renowned-mountaineer-wasfia-nazreen-appointed-ambassador-for-3verest-smoblers-landmark-953e683ea9cc',
    weight: 'standard',
    onWire: true,
    tags: ['3VEREST', 'The Sandbox', 'Proprietary IP'],
    readTime: '1 min read',
  },
  {
    id: 'sgn-technopreneur-hawaii-bhutan',
    slug: 'sgn-technopreneur-hawaii-bhutan',
    title: 'How this S’porean became a technopreneur in Hawai‘i and consultant to Bhutan',
    type: 'coverage',
    publishedAt: '22 JUL 2024',
    month: 'JUL',
    year: 2024,
    excerpt:
      'Singapore Global Network profiles Dr. Loretta Chen’s work across Honolulu and Thimphu.',
    body: `Singapore Global Network profiled Dr. Loretta Chen, tracing the route from Singapore’s entertainment scene — actor, emcee, radio presenter and theatre director — to a technology company run from Honolulu.

The turn came at a Singapore International Foundation event, where she was urged to consult for Druk Holding and Investments, roughly Bhutan’s equivalent of Temasek, training senior executives in marketing, leadership and presentation. She was handpicked by then DHI chair Lyonpo Om Pradhan. “I was just so taken with a country that has such a deep understanding of compassion and empathy,” she says. “All the buzzwords that we use today, like DEI and ESG, the country was already living them.”

Bhutan made her want a slower place to live; Hawai‘i, where she moved in 2014, became it. She found the spirit of aloha close to Bhutan’s philosophy of happiness, and the nature and architecture strangely familiar. She lectured at the University of Hawai‘i in performing arts, peacebuilding and entrepreneurship, and now lives in Hawai‘i Kai minutes from the ocean, with 23 cats and ten more who visit for meals.

In 2020 a former staff member approached her to co-found Smobler. She based the company in Singapore, where she could rely on her networks, the tech scene and a stable regulatory environment: “There was no rule book in the Web3 space during COVID, so my one anchor was Singapore.” It has since gone global, partnering with Airbus, PwC and Republic of Gamers and operating across Asia, North America, Latin America and Europe.

The studio has been building virtual twins of cities and countries — Bhutanverse launched in 2023 with DHI’s InnoTech department, and Cobbleland: Austin was unveiled at SXSW 2024 with Mayor Kirk Watson. At the end of 2023 Chen was named one of ten finalists, and the only one from Southeast Asia, for the UBS Female Founder Award.

The piece ends on the tension she lives inside: a founder is meant to strive constantly, while Hawai‘i and Bhutan taught her what enough looks like. “By taking the spirit of Hawaii and Bhutan and throwing in the tech savviness of Singapore, I find myself curiously living this Web3 ethos.”`,
    publication: 'Singapore Global Network',
    sourceUrl:
      'https://singaporeglobalnetwork.gov.sg/stories/tech/how-this-sporean-became-a-technopreneur-in-hawaii-and-consultant-to-bhutan/',
    weight: 'standard',
    onWire: false,
    tags: ['Leadership', 'Hawaii', 'Bhutan'],
    readTime: '2 min read',
  },
  {
    id: 'selectusa-2024',
    slug: 'selectusa-2024',
    title: 'Smobler represents the best of Singapore’s tech start-ups at SelectUSA 2024',
    type: 'press',
    publishedAt: '24 JUN 2024',
    month: 'JUN',
    year: 2024,
    excerpt:
      'Smobler selected to represent Singapore’s technology sector at the United States’ flagship investment summit.',
    body: `Smobler represented Singapore’s tech start-ups at the SelectUSA Investment Summit, held from 23–26 June at the Gaylord National Resort and Convention Center in Maryland.

SelectUSA is the premier United States event for foreign direct investment promotion, connecting investors, companies, economic development organisations, industry experts and startups. It is hosted by US Secretary of Commerce Gina Raimondo, and the 2024 edition drew senior officials including Secretary of State Antony Blinken, Secretary of Transportation Pete Buttigieg and Deputy Secretary of Defense Kathleen Hicks.

Founder and CEO Loretta Chen attended with a delegation from Enterprise Singapore, the agency supporting Singapore’s growth as a hub for global trading and startups.

Chen also took part in Select Global Women in Tech, the programme Secretary Raimondo pioneered for international women founders and executives in emerging tech, and was selected to pitch alongside nine other international startups in the Open Tech category — companies from Sri Lanka, Colombia, Taiwan, Georgia, Germany, Ukraine, Indonesia and South Korea among them.

She additionally joined an Enterprise Singapore-moderated panel on innovation, alongside Yvonne Hao, secretary of the Executive Office of Economic Development, and Best Haputpong, VP of the Singapore-based startup Igloo.`,
    sourceUrl:
      'https://www.einpresswire.com/article/722311263/smobler-represents-the-best-of-singapore-s-tech-start-ups-at-selectusa-2024',
    weight: 'standard',
    onWire: false,
    tags: ['SelectUSA', 'Singapore', 'Expansion'],
    readTime: '1 min read',
  },
  {
    id: 'scales-up-in-brazil',
    slug: 'scales-up-in-brazil',
    title: 'Smobler successfully scales up in Brazil',
    type: 'press',
    publishedAt: '29 MAY 2024',
    month: 'MAY',
    year: 2024,
    excerpt:
      'Smobler completes the Scale Up in Brazil programme, establishing the studio’s Latin American presence.',
    body: `Smobler expanded into South America — Brazil specifically — with the support of ScaleUp inBrazil, a programme developed by ApexBrasil and ABVCAP in partnership with Enterprise Singapore.

The rigorous eight-month programme gives companies the tools and methodologies to make inroads in the Brazilian market, and opens access to private equity and venture capital fund managers plus over 200 corporations looking for innovative solutions in the region. To date it has accelerated 48 companies, eleven of which have started operations in the country.

“As the largest economy in Latin America, Brazil presents immense opportunities for Singapore businesses,” said Clarence Hoe, executive director for Americas and Europe at Enterprise Singapore. “We are heartened to see Smobler embarking on new efforts in Brazil and will continue to support Singapore companies in their global growth ambitions.”

The fourth edition of the programme ran with 16 startups from multiple countries; during the second immersion, nine selected companies visited Belo Horizonte, Joinville, Florianópolis, Rio de Janeiro and São Paulo across twelve matchmaking events. “In particular, Smobler, a metaverse and gaming startup, garnered significant interest from local corporations,” said Livia Carbonell, investment coordinator at ApexBrasil.

The market explains the interest. Brazil’s game market is the largest in Latin America, with revenue projected by Statista to reach US$2.46 billion in 2024.`,
    sourceUrl: 'https://www.einpresswire.com/article/715419793/smobler-successfully-scales-up-in-brazil',
    weight: 'standard',
    onWire: false,
    tags: ['Brazil', 'Expansion', 'LATAM'],
    readTime: '2 min read',
  },
  {
    id: 'a11y-park-disability-led',
    slug: 'a11y-park-disability-led',
    title: 'Smobler and A11yVerse to pioneer the world’s first disability-led accessibility park and training programme in the metaverse',
    type: 'press',
    publishedAt: '02 APR 2024',
    month: 'APR',
    year: 2024,
    excerpt:
      'A11Y Park is designed by the people it is for — sensory gardens, a virtual museum, and a training programme attached.',
    body: `Smobler was appointed chief designer of the world’s first disability-led accessibility park in the open metaverse, working with A11yVerse — a disability-led, community-based company using Web3 technology to create learning, networking and employment opportunities for persons with disabilities.

The case for it is in the numbers. A National Volunteer and Philanthropy Centre report found that 62% of persons with disabilities surveyed in Singapore did not feel included, accepted, or given opportunities to contribute or reach their potential. Research cited in the announcement goes further: workplace initiatives that claim inclusion but are designed by non-disabled counterparts can lower expectations and leave “oppressive, patronizing and exclusionary” effects.

Which is what the phrase “disability-led” is doing in the title. “New norms created by the pandemic contributed to the growth of the digital economy,” said Nat Lim, founder of A11yVerse — bringing both unprecedented challenges and promising opportunities in digital media, arts and the metaverse.

The park adopts universal design principles and is e-accessible. Its first phase focuses on a social hub and community area, sensory gardens, and a virtual museum honouring notable disabled artists past and present. Training programmes in digital art and voxel creation, storytelling and performance, and arts and events management are planned to follow.

“We are proud to welcome A11yVerse’s community to The Sandbox,” said Sebastien Borget, COO and co-founder of The Sandbox. “We have a unique chance to shape the metaverse as a better virtual society where everyone feels they belong; where our differences and disabilities are understood and accepted as part of our digital identities.”`,
    pullQuote: {
      text: 'We cannot be what we do not see. Through fun play, increasing familiarity, mass adoption and positive role modeling, we can create systemic change for PwDs as stakeholders in society.',
      attribution: 'Loretta Chen, co-founder & CEO, Smobler',
    },
    heroImage: '/projects/a11y-park.jpg',
    sourceUrl:
      'https://www.einpresswire.com/article/700472262/smobler-and-a11yverse-to-pioneer-world-s-first-disability-led-accessibility-park-training-program-in-the-metaverse',
    weight: 'featured',
    onWire: true,
    tags: ['Accessibility', 'SG Enable', 'Metaverse for Good', 'World’s First'],
    readTime: '2 min read',
  },
  {
    id: 'nova-2024-austin-lone-star-state',
    slug: 'nova-2024-austin-lone-star-state',
    title: 'Smobler’s NOVA 2024 gets bigger and bolder in the Lone Star State',
    type: 'press',
    /* Date anchored to the opening of SXSW 2024, which smobler.io/nova names as
       this edition's host event; the syndicated Yahoo Finance copy carries no
       machine-readable publication date. */
    publishedAt: '08 MAR 2024',
    month: 'MAR',
    year: 2024,
    excerpt:
      'NOVA crosses the Pacific to Austin as an official SXSW event, with the Greater Austin Asian Chamber of Commerce and Republic of Gamers.',
    body: `NOVA 2024 ran in Austin as an official SXSW event — the festival’s first edition outside Singapore.

It was staged with the Greater Austin Asian Chamber of Commerce and Republic of Gamers, and preceded Smobler’s AUSTINVERSE build with the City of Austin.`,
    heroImage: '/events/nova-2024-austin.jpg',
    /* The syndicated Yahoo Finance copy linked from Linktree is now a 404, so no
       sourceUrl is given; the edition itself is documented on smobler.io/nova. */
    weight: 'standard',
    onWire: false,
    tags: ['NOVA', 'Austin', 'SXSW', 'Phygital'],
    readTime: '1 min read',
  },

  /* ────────────────────────────── 2023 ─────────────────────────────────── */
  {
    id: 'mediacorp-lets-celebrate-2024',
    slug: 'mediacorp-lets-celebrate-2024',
    title: 'Let’s Celebrate 2024 with Singapore’s national media network, Mediacorp, in the metaverse',
    type: 'press',
    publishedAt: '19 DEC 2023',
    month: 'DEC',
    year: 2023,
    excerpt:
      'Singapore’s first countdown game — an interactive New Year’s Eve experience built with the national media network.',
    body: `Mediacorp, Singapore’s largest content creator and national media network, released its first metaverse game — the Let’s Celebrate 2024 Interactive Game in The Sandbox — with Smobler selected as architect and digital creator of the country’s first countdown game experience. It stayed open on the platform until 1 January 2024.

“Mediacorp is thrilled to venture into the metaverse space to enhance engagement with our digital-native audience,” said Sonal Mathur, vice president of partnerships and new business at Mediacorp. “‘Let’s Celebrate 2024’ is not just an event, it is a true ‘phygital’ experience that enables our audience to interact with our brands and personalities like never before.”

Players go behind the glitz of the concert arena into what happens backstage. They can customise avatars and interact with personalities including Tasha Low, Shawn Thia, Shazza, Joakim Gomez and Sonia Chew, and the experience ends in a team challenge that unleashes an animated dragon and a fireworks display.

The game made its phygital debut at Singapore Comic Con on 9–10 December, ahead of the countdown itself.`,
    pullQuote: {
      text: 'With the metaverse, we are no longer physically constrained by geographical boundaries, personal incapacities or inflated festive prices.',
      attribution: 'Loretta Chen, co-founder & CEO, Smobler',
    },
    heroImage: '/projects/lets-celebrate-2024.jpg',
    sourceUrl:
      'https://www.einpresswire.com/article/675858597/let-s-celebrate-2024-with-singapore-s-national-media-network-mediacorp-in-the-metaverse',
    weight: 'standard',
    onWire: true,
    tags: ['Mediacorp', 'Singapore', 'Roblox'],
    readTime: '1 min read',
  },
  {
    id: 'ubs-female-founder-award-2023',
    slug: 'ubs-female-founder-award-2023',
    title: 'Dr. Loretta Chen makes Top 10 Female Founder at the UBS Female Founder Award 2023',
    type: 'press',
    publishedAt: '15 DEC 2023',
    month: 'DEC',
    year: 2023,
    excerpt:
      'Smobler’s founder and CEO named among the top ten at the UBS Female Founder Award.',
    body: `Smobler announced that its co-founder and CEO, Loretta Chen, had been recognised as a Top 10 female founder in the UBS Female Founder Award 2023, for leadership and innovation in the metaverse.

Now in its third year, the award honours female start-up founders and C-suite executives in fintech and enterprise tech. It exists to address the funding gap a 2021 UBS report identified — the case being that equal opportunity for female entrepreneurs is an economic argument, not only a fairness one.

“This recognition is humbling and a real honor,” said Chen. “My fellow founders are all incredible in their own right working in fields as diverse as empowering rural women in India to providing financing to African communities. At Smobler, we seek to enable digital asset creation, ownership and financial empowerment through gamification and the open Metaverse.”

Smobler’s three business pillars at the time were metaverse development, phygital creation and blockchain gaming, behind a run of world-firsts: a metaverse wedding, the Tools of Rock concert venue, and a disability park with SG Enable, Singapore’s focal agency for disability. It also led the first cross-chain project with Clay Nation, the leading project on Cardano.

The studio is backed by Brinc and The Sandbox, and supported by UBS, IMDA, Enterprise Singapore, Plug and Play, German Entrepreneurship, ScaleUp inBrazil and AWS.`,
    sourceUrl:
      'https://www.einpresswire.com/article/675009508/loretta-chen-co-founder-and-ceo-of-smobler-makes-top-10-female-founder-at-ubs-female-founder-award-2023',
    weight: 'standard',
    onWire: false,
    tags: ['Award', 'UBS', 'Leadership'],
    readTime: '2 min read',
  },
  {
    id: 'vogue-bmw-neue-klasse',
    slug: 'vogue-bmw-neue-klasse',
    title: 'The BMW Neue Klasse and Dr Loretta Chen share an electrifying vision for the future of sustainability',
    type: 'coverage',
    /* Vogue Singapore serves no machine-readable date to non-browser clients;
       this is the publication date reported for the article. */
    publishedAt: '01 DEC 2023',
    month: 'DEC',
    year: 2023,
    excerpt:
      'Vogue Singapore pairs Smobler’s founder with BMW’s Neue Klasse on what a sustainable future actually asks of technology.',
    // vogue.sg refuses every non-browser client (403), so this body stays a summary and
    // the source link carries the article itself.
    body: `Vogue Singapore’s feature puts Dr. Loretta Chen alongside BMW’s Neue Klasse, on the shared ground between sustainable design and technology built with intent.`,
    publication: 'Vogue Singapore',
    sourceUrl: 'https://vogue.sg/bmw-neue-klasse-loretta-chen/',
    weight: 'standard',
    onWire: false,
    tags: ['Coverage', 'Sustainability', 'Leadership'],
    readTime: '1 min read',
  },
  {
    id: 'imda-digital-for-life-festival',
    slug: 'imda-digital-for-life-festival',
    title: 'Metaverse goes to the Singapore heartlands in IMDA’s Digital for Life Festival',
    type: 'press',
    publishedAt: '03 NOV 2023',
    month: 'NOV',
    year: 2023,
    excerpt:
      'A large-scale public activation taking the metaverse out of the conference hall and into the heartlands, with Razer, Republic of Gamers and POPMART.',
    body: `Smobler joined IMDA’s Digital for Life Festival 2023 alongside more than 120 partners, from Google, Microsoft and Amazon to DBS, Singtel and Mediacorp.

The festival is an annual attempt to raise the digital skills of all Singaporeans, organised into three activity zones — Learn, Explore and Play a Part — that carry information on online safety, security and emerging technologies to people who would never attend a technology conference.

Smobler’s playground sat inside the Explore Zone with live interactions and blockchain-designed games. Visitors could climb Mount Everest in 3VEREST, or enter a metaverse experience inspired by the birth centennial of Singapore’s first prime minister, Lee Kuan Yew, based on artwork by y/x, who is also CEO of the Spa Esprit Group. Video installations carried Sebastien Borget of The Sandbox on the open metaverse, and Loretta Chen on co-creating a Metaverse for Good.

The festival ran over three weekends from 28 October across heartland locations — Kampung Admiralty, Heartbeat@Bedok and Toa Payoh Hub. President Tharman Shanmugaratnam met residents at Heartbeat@Bedok on 4 November, and Deputy Prime Minister Heng Swee Keat visited Smobler in the Explore Zone the following day.`,
    pullQuote: {
      text: 'All Singaporeans, regardless of age and backgrounds, should be given the opportunity to embrace digital learning as a lifelong pursuit.',
      attribution: 'Loretta Chen, co-founder & CEO, Smobler',
    },
    heroImage: '/pillars/phygital-events.jpg',
    sourceUrl:
      'https://www.einpresswire.com/article/666067028/metaverse-goes-to-singapore-heartlands-in-imda-s-digital-for-life-festival',
    weight: 'standard',
    onWire: false,
    tags: ['IMDA', 'Phygital', 'Singapore'],
    readTime: '1 min read',
  },
  {
    id: 'the-edge-peace-centre-playpan',
    slug: 'the-edge-peace-centre-playpan',
    title: 'Soon-to-be-demolished Peace Centre offers its retail space to PlayPan for six months of community activities',
    type: 'coverage',
    publishedAt: '19 SEP 2023',
    month: 'SEP',
    year: 2023,
    excerpt:
      'The Edge Singapore on the temporary community takeover of Peace Centre before demolition.',
    // theedgesingapore.com returns 403 to every non-browser client, so this body stays a
    // summary and the source link carries the report.
    body: `The Edge Singapore reports on Peace Centre handing its retail space to PlayPan for six months of community-based activity ahead of demolition.`,
    publication: 'The Edge Singapore',
    sourceUrl:
      'https://www.theedgesingapore.com/options/weekout/soon-be-demolished-peace-centre-offers-its-retail-space-playpan-six-months-community',
    weight: 'standard',
    onWire: false,
    tags: ['Coverage', 'Community', 'Singapore'],
    readTime: '1 min read',
  },
  {
    id: 'forbes-women-in-web3-and-ai',
    slug: 'forbes-women-in-web3-and-ai',
    title: 'From glass ceiling to digital frontier: women in Web3 and AI are essential',
    type: 'coverage',
    publishedAt: '13 SEP 2023',
    month: 'SEP',
    year: 2023,
    excerpt:
      'Forbes on why the next technology cycle cannot afford to repeat the last one’s exclusions — with Smobler’s founder among the voices.',
    // forbes.com returns 403 to every non-browser client, so this body stays a summary and
    // the source link carries the article.
    body: `Forbes’ digital assets desk argues that women in Web3 and AI are not a diversity line item but a condition of the technology working at all.`,
    publication: 'Forbes',
    sourceUrl:
      'https://www.forbes.com/sites/digital-assets/2023/09/13/from-glass-ceiling-to-digital-frontier-women-in-web3-and-ai-are-essential/',
    weight: 'featured',
    onWire: true,
    tags: ['Forbes', 'Web3', 'AI', 'Women in Tech'],
    readTime: '1 min read',
  },
  {
    id: 'lky100-light-and-brilliance',
    slug: 'lky100-light-and-brilliance',
    title: 'Singaporean artist y/x creates ‘Light and Brilliance’ in commemoration of Lee Kuan Yew’s birth centennial',
    type: 'press',
    publishedAt: '11 SEP 2023',
    month: 'SEP',
    year: 2023,
    excerpt:
      'A commissioned artwork housed in a walkable voxel exhibition marking the LKY100 centenary.',
    body: `Singaporean artist y/x — Chua Koon Beng — launched Light and Brilliance (光宗耀祖) into The Sandbox with Smobler, alongside a physical exhibition at the IMDA PIXEL Innovation Centre as part of NOVA on 12 September. The show then moved to Yang Gallery at Four Seasons from 13 to 30 September.

y/x is a self-taught artist who works through experimentation and materiality, has exhibited in Singapore since 2002, and is CEO of the Spa Esprit Group. He is also an avowed admirer of Lee Kuan Yew, whose name (李光耀) translates as light and brightness, and to bring glory to one’s ancestors — which is where the work’s title comes from.

“Lee Kuan Yew has not only brought glory to his ancestors but also to Singapore, shining the brightest of light over Singapore during his years as the country’s leader and even posthumously,” said y/x.

Loretta Chen framed the pairing of art, culture and technology as a continuation rather than a novelty: “I recall planting a tree with him as a young Girl Scout over three decades ago. I believe those seeds of progress were sown in me as it did in y/x as we now embark on co-creating a digital ecosystem to allow our youth and community to thrive in light and brilliance.”

The centennial came with a small, characteristically Singaporean incentive: anyone posting a selfie with an artwork — at IMDA PIXEL, at the Four Seasons linkway, or inside the Sandbox experience — could redeem a free coffee at Common Man Coffee Roasters or a croissant at Tiong Bahru Bakery between 16 and 30 September.`,
    heroImage: '/projects/lky100.jpg',
    sourceUrl:
      'https://www.einpresswire.com/article/654530068/singaporean-artist-y-x-creates-light-and-brilliance-in-commemoration-of-lee-kuan-yew-s-birth-centennial',
    weight: 'standard',
    onWire: false,
    tags: ['LKY100', 'Art', 'Singapore', 'The Sandbox'],
    readTime: '2 min read',
  },
  {
    id: 'nova-2023-token2049',
    slug: 'nova-2023-token2049',
    title: 'NOVA 2023 to bring phygital art, gaming and live entertainment together in conjunction with TOKEN2049',
    type: 'press',
    publishedAt: '08 SEP 2023',
    month: 'SEP',
    year: 2023,
    excerpt:
      'The inaugural NOVA — phygital art, gaming and live entertainment in one room, debuting alongside TOKEN2049 in Singapore.',
    body: `Smobler announced the debut of NOVA, its phygital experience, at the IMDA PIXEL Innovation Centre on 12 September, ahead of TOKEN2049 and the Formula 1 Singapore Grand Prix 2023.

NOVA is a celebration of the communities created by and connected with the Smobler ecosystem: an in-real-life experience hosted in sync with large-scale crypto and Web3 events, so that community members from around the world can meet and start collaborations in person. The inaugural edition was presented with The Sandbox, Unstoppable Domains and Ledger, in collaboration with Clay Nation.

“The metaverse is not a replacement of the real world but an augmentation of the varied identities we already inhabit,” said co-founder and CEO Loretta Chen. “We should never underestimate the value of a firm handshake and a genuine smile across the room. The best ideas in the world begin with a simple hello.”

Sebastien Borget, COO and co-founder of The Sandbox, put the venue in context: holding the event in the heart of IMDA’s PIXEL demonstrates how Singapore is participating in the digitisation movement and creating a blueprint for others. Smobler had been onboarded into PIXEL since June; the hub is 28,000 square feet of innovation space and one of the top ten launchpads in Southeast Asia.

The evening opened with a performance led by Andy Benjamin Cai, chief choreographer for the Singapore National Day Parade in 2017 and 2022. “Loretta gave me my first big break into professional theater fifteen years ago,” he said. “I am ecstatic to pay it forward with budding creators and experimental technology.”`,
    heroImage: '/events/nova-2023-singapore.jpg',
    sourceUrl:
      'https://www.einpresswire.com/article/654448132/nova-to-bring-phygital-art-gaming-and-live-entertainment-together-in-conjunction-with-token-2049',
    weight: 'standard',
    onWire: true,
    tags: ['NOVA', 'TOKEN2049', 'Phygital'],
    readTime: '2 min read',
  },
  {
    id: 'pop-toy-show-singapore-2023',
    slug: 'pop-toy-show-singapore-2023',
    title: 'Metaverse architect Smobler unveils new game at the inaugural Pop Toy Show Singapore 2023',
    type: 'press',
    publishedAt: '06 SEP 2023',
    month: 'SEP',
    year: 2023,
    excerpt:
      'Smobler’s first Pop Toy Show appearance, and the start of a run that returned with Teletubbies and The Singapore Mint in 2025.',
    body: `Smobler announced its participation in POP TOY SHOW Singapore 2023 — the first POP MART showcase held outside China, running 8–10 September at the Sands Expo and Convention Centre.

The studio was the only metaverse architect among the artists and toy designers exhibiting, showing the IPs it had built in The Sandbox.

Chief among them was 3VEREST, a blockchain-based educational adventure through the Himalayas that teaches the region’s history, the culture of the Sherpa people, and the impact of global warming. At that point it had drawn more than 10,000 unique players and over 5,000 hours of gameplay across a competitive two-week event in The Sandbox, and came to the show as an interactive gaming booth.

Alongside game challenges and prizes, co-founder and CEO Loretta Chen gave a keynote — Mission Possible: Play, Profit and Purpose in the Open Metaverse — on the future of gaming and the socio-economic potential of the metaverse.`,
    pullQuote: {
      text: 'Play is an integral part of identity, social and cultural formation and a close to 200 billion dollar industry.',
      attribution: 'Loretta Chen, co-founder & CEO, Smobler',
    },
    sourceUrl:
      'https://www.einpresswire.com/article/654057703/metaverse-architect-smobler-unveils-new-game-at-inaugural-pop-toy-show-singapore-2023',
    weight: 'standard',
    onWire: false,
    tags: ['Pop Toy Show', 'Phygital', 'Singapore'],
    readTime: '1 min read',
  },
  {
    id: '8siantown-launch',
    slug: '8siantown-launch',
    title: 'Launch of women-founded 8SIANTOWN in The Sandbox',
    type: 'press',
    publishedAt: '01 AUG 2023',
    month: 'AUG',
    year: 2023,
    excerpt:
      'A Southeast Asian cultural festival in voxel form — calligraphy workshops, dragon battles, and a women-founded IP behind it.',
    body: `Two female founders — one behind Southeast Asia’s most successful NFT project, the other running a top-tier metaverse architecture studio — announced 8SIANTOWN, the world’s first Southeast Asian town in the open metaverse.

Nicole Yap founded 8SIAN, the only Malaysian and Southeast Asian NFT project to have trended in OpenSea’s top ten, generating over 3,000 ETH — roughly US$9 million — in secondary sales within 24 hours. Joining her is Loretta Chen, whose Singapore-headquartered studio had just launched the Kingdom of Bhutan into the open metaverse.

Yap wanted globally recognisable Malaysian landmarks in it — the Twin Towers, the Sultan Abdul Samad Building, Batu Caves — while Chen set out to bring Singapore’s multicultural heritage and Southeast Asia’s landscapes into The Sandbox.

Both founders framed 8SIANTOWN as a first step rather than a finished piece: a place to fold in popular regional IPs, open avenues for Southeast Asian celebrities in the way Snoop Dogg and Paris Hilton opened them elsewhere in The Sandbox, and seed new businesses such as digital tourism.

“There is no lack of creative talent in Southeast Asia and the region is very digitally savvy,” said Chen, citing a Yahoo figure that close to 75% of the region is aware of the metaverse and looking forward to making social connections there.`,
    heroImage: '/projects/8sian-town.jpg',
    sourceUrl: 'https://www.einpresswire.com/article/647338172/launch-of-women-founded-8siantown-in-the-sandbox',
    weight: 'standard',
    onWire: false,
    tags: ['8SIAN', 'Culture', 'The Sandbox'],
    readTime: '2 min read',
  },
  {
    id: 'bhutanverse-dhi-launch',
    slug: 'bhutanverse-dhi-launch',
    title: 'Druk Holding & Investments unveils Bhutanverse, a metaverse-based gateway to Bhutan for global Web3 innovators and artists',
    type: 'press',
    publishedAt: '25 JUL 2023',
    month: 'JUL',
    year: 2023,
    excerpt:
      'Bhutan’s national metaverse, built with the commercial arm of the Royal Government of Bhutan.',
    body: `Druk Holding and Investments, the commercial arm of the Royal Government of Bhutan, unveiled Bhutanverse at the FAB23 Bhutan International Conference in Thimphu, built with Smobler and The Sandbox.

Bhutanverse is a parcel of digital assets inside The Sandbox: a virtual space where users anywhere can experience Bhutan’s culture, history and philosophy, rendered in the Kingdom’s own motifs, art and architecture.

“The Bhutanverse will be a place of cultural innovation and diversity, cultivating a community of international and Bhutanese Web3 artists, developers, and architects,” said Ujjwal Deep Dahal, CEO of Druk Holding and Investments. “It will provide a gateway for global audiences to engage with Bhutan’s rich heritage of culture and art while also providing Bhutan’s digital communities with a space where they can leverage and explore the immense potential of Web3 technologies.”

The project’s stated aims are threefold: grow a domestic metaverse community, open Bhutan to the global metaverse and Web3 communities and build bridges between them, and serve as a virtual lab for students, entrepreneurs and businesses.

It launched as a co-created space rather than a finished build. DHI opened with a challenge inviting artists and creators to submit artwork to co-design Bhutanverse, so that the completed space would host a curated collection made by the local community.`,
    heroImage: '/projects/bhutanverse.jpg',
    sourceUrl:
      'https://www.einpresswire.com/article/646085157/druk-holding-investments-unveils-bhutanverse-a-metaverse-based-gateway-to-bhutan-for-global-web3-innovators-artists',
    weight: 'featured',
    onWire: true,
    tags: ['Bhutan', 'DHI', 'The Sandbox', 'Culture'],
    readTime: '2 min read',
  },
  {
    id: 'cna-edutech-firms-look-to-us',
    slug: 'cna-edutech-firms-look-to-us',
    title: 'Singapore edutech firms look to the US to grow their business',
    type: 'coverage',
    publishedAt: '08 APR 2023',
    month: 'APR',
    year: 2023,
    excerpt:
      'CNA on Singapore’s education technology companies expanding into the American market.',
    // A CNA video segment: the page carries only the standfirst, not a transcript.
    body: `A CNA video segment reported by Chloe Choo on Singapore’s education technology companies turning to the United States for growth.

As the segment frames it, the edutech landscape has kept growing and the sector has drawn increased investment in recent years — enough that Singapore firms are now looking to the American market to expand.`,
    publication: 'CNA',
    sourceUrl:
      'https://www.channelnewsasia.com/watch/singapore-edutech-firms-look-us-grow-their-business-video-3405586',
    weight: 'standard',
    onWire: false,
    tags: ['Coverage', 'Edutech', 'Expansion'],
    readTime: '1 min read',
  },
  {
    id: 'pangu-smobler-herstory',
    slug: 'pangu-smobler-herstory',
    title: 'Metaverse studios PANGU and Smobler join forces to create HERSTORY',
    type: 'press',
    publishedAt: '08 MAR 2023',
    month: 'MAR',
    year: 2023,
    excerpt:
      'Two metaverse studios build HERSTORY — women’s stories told inside a medium that rarely centres them.',
    body: `Two metaverse studios announced a partnership and a pilot project, HERSTORY, to build pathways for young women into technology careers by first teaching them to create and own digital assets.

The programme runs as workshops, educational panels and outreach with local non-profits and educational institutions, giving participants hands-on experience on The Sandbox and a route to owning what they make.

HERSTORY launched in four locations at once: Smobler led Singapore and Brunei, while PANGU by Kenal took Hong Kong and Taiwan. Both studios worked with local chapters of Inspiring Girls, the charity that connects girls with female role models, and Smobler additionally with Pinnacle, the learning arm of multi-family office Golden Equator, for the Brunei workshops.

“It is 2023 and statistics show that close to 70% of young women still feel they do not have the same professional opportunities as their male counterparts,” said co-founder and CEO Loretta Chen. “By teaching girls how to create and own digital assets, we are empowering them to think like entrepreneurs and set the path towards financial literacy and independence.”

“We believe that by harnessing the power of the metaverse, we can make a real difference in empowering women in tech and Web3,” said Kenny, founder and CEO of PANGU by Kenal. Workshops began in March and ran through the year, with the resulting digital creations curated afterwards.`,
    heroImage: '/projects/herstory.jpg',
    sourceUrl: 'https://www.einpresswire.com/article/620776244/metaverse-studios-pangu-and-smobler-join-forces-to-create-herstory',
    weight: 'standard',
    onWire: false,
    tags: ['HERSTORY', 'PANGU', 'Women in Tech'],
    readTime: '2 min read',
  },

  /* ────────────────────────────── 2022 ─────────────────────────────────── */
  {
    id: 'cna-first-metaverse-wedding',
    slug: 'cna-first-metaverse-wedding',
    title: 'Couple say ‘I do’ in Singapore’s first metaverse wedding',
    type: 'coverage',
    publishedAt: '23 SEP 2022',
    month: 'SEP',
    year: 2022,
    excerpt:
      'CNA covers Singapore’s first metaverse wedding — a ceremony held in a physical venue and a purpose-built voxel garden at the same time.',
    body: `Avatars clapped and cheered as the digital likenesses of Clarence Chan and Joanne Tham sealed their vows at a virtual altar — in what CNA reported as Singapore’s first metaverse wedding. Family, friends, the officiator and the bride’s pet dog were present in pixel form and in physical form at the same hybrid ceremony.

“We actually met in real life,” Chan laughed, when asked whether the couple had met virtually. “We had this idea of a crossover because we wanted to create scenes that both reflect and exceed what we can do in real life.” It was also, he said, the first wedding held in The Sandbox — and the couple planted the Singapore flag in their digital venue to mark it.

Tham walked down the aisle at a digital recreation of The Alkaff Mansion on Telok Blangah Hill. Its garden conservatory, European-style water fountains and broad balustrade stairways were rebuilt by Smobler Studios, and the 1970s disco glam theme let guests attend as anything at all — an alien, a robot, a polar bear. The venue carried super trees, a Cinderella horse-drawn carriage and a giant calligraphic 囍.

“We are thrilled at being able to create Singapore’s first ever metaverse wedding… allowing friends, family and loved ones from afar to join in the celebrations across the globe,” said co-founder Loretta Chen.

The couple still held a conventional hotel wedding for relatives, but the response to the virtual one surprised them. “We were able to replicate aspects of our wedding onto the metaverse, from our vows to the attendees, right down to the outfits,” said Tham. “We even managed to create a version of my designer gown.”`,
    pullQuote: {
      text: 'Even the sky is no longer the limit with the open metaverse.',
      attribution: 'Loretta Chen to CNA',
    },
    heroImage: '/projects/phygital-wedding.jpg',
    publication: 'CNA',
    sourceUrl:
      'https://www.channelnewsasia.com/singapore/metaverse-wedding-sandbox-virtual-reality-singapore-first-2960256',
    weight: 'standard',
    onWire: true,
    tags: ['World’s First', 'Phygital', 'Singapore'],
    readTime: '2 min read',
  }
];
