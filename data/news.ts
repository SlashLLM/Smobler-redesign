import { NewsItem } from '@/types';

/**
 * The real Smobler press archive, rebuilt from the 71 destinations published on
 * linktr.ee/smobler.io.
 *
 * Every `publishedAt` was read from the source itself — Medium's RSS feed and
 * article metadata, EIN Presswire's `datePublished`, and the publishers' own
 * schema markup — rather than estimated. The two exceptions are noted inline.
 * Bodies summarise what the linked source states; `sourceUrl` points at the
 * original so nothing here has to be taken on trust, and is only left unset for
 * the lead release below, which has no public URL yet.
 */
export const newsItems: NewsItem[] = [
  /* ────────────────────────────── 2026 / LEAD ─────────────────────────── */
  /*
   * The one entry not drawn from a published URL: the source is the press
   * release itself, dated 31 August 2026 and issued for LEAP 2026 in Riyadh.
   * Quotes and details below are transcribed from that document, so `sourceUrl`
   * stays unset and the article page's source CTA stands down until the wire
   * copy is live. `featured` is held by this item alone — it is what the wall,
   * the home preview and the newsroom lead all read as the current lead story.
   */
  {
    id: 'smobler-leap-2026-haccp-to-halal',
    slug: 'smobler-leap-2026-haccp-to-halal',
    title:
      'From HACCP to Halal: Smobler bets on vertical AI to take food compliance across borders',
    type: 'press',
    publishedAt: '31 AUG 2026',
    month: 'AUG',
    year: 2026,
    excerpt:
      'Smobler heads to LEAP 2026 in Riyadh, seeking partners as it explores extending Robin AI’s food-compliance workflows toward Halal certification across ASEAN and MENA.',
    body: `Singapore-founded technology company Smobler is preparing to extend the capabilities of an AI platform originally developed to help Hawaiʻi food entrepreneurs navigate U.S. food-safety requirements toward Halal compliance workflows across Southeast Asia and the Middle East, as the company begins seeking partners in Saudi Arabia and the wider Gulf.

Smobler’s co-founder and chief technology officer, Mridhul Pax, is in Riyadh for LEAP 2026 from 31 August to 3 September, where he will meet potential partners across food technology, enterprise AI and digital trade.

The move reflects a broader bet by Smobler: as access to increasingly capable AI models becomes ubiquitous, more value will shift toward specialised applications built around expensive, persistent and industry-specific problems.

Smobler launched Robin AI in Hawaiʻi in June 2026 to address a problem familiar to small food producers — turning a recipe into a market-ready product requires navigating complex regulatory and food-safety requirements. Developed with the Wahiawā Value-Added Product Development Center and Leeward Community College, Robin helps early-stage food and beverage entrepreneurs generate draft nutrition labels and Hazard Analysis and Critical Control Point (HACCP) food-safety plans. Rather than replacing food-safety specialists or regulatory authorities, the platform is designed to help entrepreneurs navigate some of the documentation and technical complexity involved in preparing products for market.

The company now sees an opportunity to apply the same principle to other regulatory environments. Its product roadmap includes exploring AI-assisted workflows around Halal compliance across ASEAN and the Middle East and North Africa — regions linked by significant flows of food, trade and Muslim consumer demand. Any such system would be designed to support, rather than replace, recognised Halal certification authorities, qualified auditors and human decision-makers.

“The interesting question is no longer how impressive a model can be,” said Dr. Loretta Chen, Smobler’s founder and CEO. “It is what we can make possible with it. Can we help a small producer navigate compliance more efficiently? Can we reduce some of the friction between creating a product and reaching a market? Can we make cross-border trade easier to navigate while preserving the human judgement and regulatory authority that matter? The most interesting technologies scale globally because the underlying problem is widespread and travels.”

Food compliance is one example of a larger shift underway at Smobler. The company, which previously built across immersive technology, gaming and blockchain, is concentrating increasingly on vertical AI and digital infrastructure designed around specific industry workflows, with current work spanning food systems, enterprise workflow automation, AI cost intelligence and digital trade. Alongside Robin, Smobler is developing Forage AI, focused on business-to-business food trade through AI-enabled workflows, verified networks and embedded financial infrastructure, and is working on digital maritime infrastructure — blockchain-enabled approaches to bunkering, documentation and transactions in an industry where verification and settlement can remain fragmented and manual.

These areas give Smobler a particular reason to look toward the Gulf. Saudi Arabia is investing heavily in artificial intelligence and digital infrastructure while simultaneously expanding its logistics and trade capabilities. For Smobler, that intersection creates an opportunity for specialised technology built around real operational constraints rather than general-purpose AI.

For Pax, the engineering challenge begins where the demonstration ends. “Everyone can build an AI demo now,” he said. “The difficult part starts afterwards. Can the system be trusted? Is it economical to operate? Does it integrate into the way an industry actually works? Can you deploy it at scale without creating three new problems for every one you solve? That last mile between an impressive prototype and reliable infrastructure is where we spend much of our time.”

Pax said Smobler will use LEAP to identify potential regional partners around defined business problems rather than pursue AI deployments for their own sake. “We always start with the constraint and engineer backwards,” he said. “At LEAP, I want to meet organisations thinking seriously about AI in production, particularly across food, enterprise operations and trade. If there is a genuine problem we are equipped to solve, that is where the conversation becomes interesting.”

Smobler’s interest in Saudi Arabia forms part of a larger opportunity the company sees emerging between Southeast Asia and the Gulf. Singapore sits at the intersection of technology, finance, maritime trade and Southeast Asian commerce; Saudi Arabia is investing in technology and infrastructure as it builds new industries and strengthens its position across international trade and logistics. Smobler believes some of the most interesting opportunities will come from adapting technologies and operating knowledge between these markets rather than simply exporting software from one to the other.

Food illustrates the potential. A producer in Hawaiʻi, Singapore or Riyadh operates within a different regulatory environment, but often encounters variations of the same problems: documentation, compliance, specialist knowledge, market access, cost and cross-border complexity. Halal requirements add another layer when producers seek access to Muslim consumer markets. Smobler believes AI could eventually help businesses navigate portions of that complexity while keeping recognised certification bodies and qualified human experts firmly within the process.

“For us, the Middle East opportunity isn’t interesting simply because AI investment is booming,” Chen said. “It is interesting because there are real problems at the intersection of food, trade, logistics and technology where our experience across Asia-Pacific may be useful and where we have a great deal to learn from regional partners.”

Smobler’s shift toward applied AI follows several years building at successive technology frontiers. Founded in Singapore, the company has worked across immersive environments, gaming, blockchain, artificial intelligence and digital infrastructure, including projects for international brands and institutions, and has participated in technology ecosystems including the Meta Llama APAC Incubator, the inaugural INSEAD AI Venture Lab and NVIDIA Inception. Chen said the growing emphasis on applied AI does not represent a rejection of those earlier technologies, but a more demanding test of what the company builds: “Being early to technology is exciting. Being useful is harder. We want Smobler to be known for building and shipping products that are useful and make our lives easier.”

Pax will be in Riyadh throughout LEAP 2026, from 31 August to 3 September. Smobler is seeking potential pilot, technology and commercial partners across food technology and trade, AI infrastructure and enterprise automation, logistics and maritime technology, as well as investment and innovation ecosystems. Organisations interested in meeting Pax in Riyadh or discussing a potential pilot or regional collaboration can contact hello@smobler.io.`,
    heroImage: '/news/leap-2026-llama-incubator.jpg',
    pullQuote: {
      text: 'The next competitive advantage will not come from having access to AI. It will come from knowing how to apply it.',
      attribution: 'Dr. Loretta Chen, founder & CEO, Smobler',
    },
    /* The other two photos filed with the release, kept where it runs them:
       the NOVA group shot beside Chen's quotes, the incubator booth beside the
       paragraph naming the Meta Llama APAC Incubator. */
    figures: [
      {
        src: '/news/leap-2026-nova-nyse.jpg',
        alt: 'Smobler’s team and guests on stage at NOVA Singapore 2025, in front of a NYSE-presented NOVA backdrop.',
        caption:
          'Smobler CEO Dr Loretta Chen (centre, in pink) and CTO Mridhul Pax (extreme right) at NOVA Singapore 2025, in collaboration with the New York Stock Exchange.',
        width: 1600,
        height: 880,
        afterParagraph: 5,
      },
      {
        src: '/news/leap-2026-smobler-booth.jpg',
        alt: 'Dr Loretta Chen and Mridhul Pax behind a Smobler booth at the Llama Incubator Program, Singapore 2025.',
        caption:
          'Smobler CEO Dr Loretta Chen and CTO Mridhul Pax at the Llama Incubator Program, Singapore 2025.',
        width: 734,
        height: 978,
        afterParagraph: 13,
      },
    ],
    weight: 'featured',
    onWire: true,
    tags: ['LEAP 2026', 'Vertical AI', 'Robin AI', 'Halal'],
    readTime: '4 min read',
  },

  /* ────────────────────────────── 2025 ─────────────────────────────────── */
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
    weight: 'standard',
    onWire: true,
    tags: ['NYSE', 'SG60', 'NOVA'],
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
    heroImage: '/events/nyse-floor-talk.jpg',
    publication: 'NYSE',
    sourceUrl: 'https://www.youtube.com/watch?v=89okF0jMb68',
    weight: 'standard',
    onWire: false,
    tags: ['Interview', 'Phygital', 'Leadership'],
    readTime: '1 min read',
  },
  {
    id: 'thank-you-for-an-extraordinary-2025',
    slug: 'thank-you-for-an-extraordinary-2025',
    title: 'Thank you for an extraordinary 2025',
    type: 'field',
    publishedAt: '31 DEC 2025',
    month: 'DEC',
    year: 2025,
    excerpt:
      'Smobler’s year in review — the NYSE partnership, NOVA’s SG60 edition, the expansion to Hawai‘i, and the acceleration of AI and blockchain capabilities.',
    body: `2025 was the year Smobler established its position as an AI-first technology agency. What began as an immersive design studio has evolved into a frontier technology company working across AI products, blockchain, and enterprise digital solutions, with one constant: the IDEALS — Inclusion, Diversity, Equity, Access, Leadership, Love and Sustainability.

The year opened with Teletubbies: Custard Chaos in The Sandbox, built with WildBrain. It reintroduced an iconic IP to a generation of digital natives, then stepped out of the virtual world entirely at Pop Toy Show Singapore through collaborations with The Singapore Mint and Razer.

NOVA crossed continents — the Hawaii Edition during Honolulu Tech Week, then NOVA 2025: SG60 Edition marking Singapore’s 60th birthday. The defining image of the year was NOVA SG60 lighting the NYSE trading floor cubes at 11 Wall Street: a festival that started on Orchard Road, displayed on Wall Street. NYSE was title sponsor, and hosted Founder and CEO Dr. Loretta Chen at NYSE International Day alongside Yao Ming, CNBC’s Jim Cramer and JP Morgan’s Anu Aiyengar.

The partnership with Mysten Labs and the Sui Foundation deepened, with Smobler joining as a portfolio company. The work on digital bunkering and maritime trade is about transparency, trust and traceability in an industry that underpins global commerce — the groundwork for better financial instruments, ESG accountability and operational resilience.

On AI, Smobler joined both the Meta Llama Incubator and the NVIDIA Inception Program, and launched Robin AI with the Wahiawā Value-Added Product Development Center, Leeward Community College and the State of Hawai‘i. It helps food entrepreneurs and exporters automate nutritional labelling, HACCP compliance and USDA and FDA certification, cutting the cost, time and regulatory friction of getting a product to market.

Every milestone was made possible by the trust of partners, clients, collaborators and friends. Thank you for an extraordinary 2025.`,
    heroImage: '/events/1NsaxY3WDBihNO-Eb5qEjsA.webp',
    sourceUrl: 'https://medium.com/@smobler.io/thank-you-for-an-extraordinary-2025-7c49ac6adfe5',
    weight: 'standard',
    onWire: true,
    tags: ['Year in Review', 'NOVA', 'AI', 'Blockchain'],
    readTime: '2 min read',
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
    heroImage: '/news/insignia-boons-and-banes.png',
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
    heroImage: '/news/straits-times-crypto-bros.webp',
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
    title: 'Smobler expands into AI, blockchain and impact tech',
    type: 'field',
    publishedAt: '31 JUL 2025',
    month: 'JUL',
    year: 2025,
    excerpt:
      'The studio sets out its core capabilities — AI cost optimization, AI for food security, autonomous workflow automation, and verified blockchain infrastructure.',
    body: `Smobler set out publicly what the work had already become: an AI-first agency building intelligent products, blockchain infrastructure and enterprise automation. It is backed by Brinc and supported by ecosystem partners including Block71, Enterprise Singapore, IMDA and Plug and Play.

To carry the pipeline, Smobler appointed Mridhul Pax as chief technology officer. An engineering leader with over 18 years of experience, Pax has built AI applications, LLM platforms, GPU inference pipelines and blockchain validator infrastructure. Under him the studio’s AI work spans LLM fine-tuning and enterprise AI, generative content co-pilots, conversational and contextual AI, multilingual NLP chatbots, and predictive analytics.

Smobler was accepted into two of the industry’s most respected programmes. The Meta Llama Incubator — the first of its kind in APAC — gathers 40 start-ups and SMEs to build responsible AI products on Meta’s open-source Llama models, backed by IMDA, GovTech, AI Singapore, SGInnovate and Enterprise Singapore. NVIDIA Inception, a global network of more than 25,000 members, adds technical training, hardware and platform access, and industry connections.

The frontier work is deliberately applied. The FoodTech AI initiative, developed with the Wahiawā Value-Added Product Development Center — an initiative of Leeward Community College and the State of Hawai‘i — is a generative AI platform that helps food entrepreneurs and exporters automate nutritional labelling, HACCP compliance and certification.

With headquarters in Singapore and teams in Silicon Valley, Hawai‘i and Bhutan, the stated ambition is socially conscious AI deployed across industries, borders and communities — innovations as scalable as they are human-centred.`,
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
    id: 'inside-smoblers-all-female-leadership',
    slug: 'inside-smoblers-all-female-leadership',
    title: 'Inside Smobler’s all-female leadership',
    type: 'field',
    publishedAt: '07 MAR 2025',
    month: 'MAR',
    year: 2025,
    excerpt:
      'How an all-female leadership team runs a studio in two industries — spatial tech and Web3 — that are not known for having one.',
    body: `According to the World Bank, female representation in leadership at Amazon, Facebook, Apple, Google and Microsoft runs between 26% and 34%. Women make up 60% of Smobler’s workforce, and with the hire of former Timbre Group executive Veronica Ong as head of business development, the core leadership team became entirely women-led.

At its helm is founder and CEO Dr. Loretta Chen, who spent over two decades driving social equity through media, storytelling and technology. She was the People’s Choice for Nominated Member of Parliament and has been an international consultant to the Kingdom of Bhutan since 2011; she is part of the AWS Women Founders Program and UBS Project Female Founder, a Top 100 Women of the Future, and was named among the Unstoppable Women of Web3 and AI.

When the metaverse emerged as a frontier during the pandemic, Chen saw a way to reshape narratives and democratise access, and founded Smobler to bring brands, IPs and communities into Web3 with diversity and accessibility at the core.

The record since then includes the world’s first phygital wedding in The Sandbox, Bhutanverse for the Kingdom of Bhutan, and A11yverse — the world’s first disability-led accessibility park and training programme, built with SG Enable. Alongside those sit Playground@UXC for Singapore Polytechnic, Mediacorp’s Year-End Countdown 2023, StarHub’s Equalverse, and the first cross-chain project between Cardano and Polygon for Clay Nation.

The team leads are Rafaela Rizzi (production), Gianna Bui (communications), Joyce Gan (administration) and Veronica Ong (business development), heading a team spread across Vietnam, Singapore and beyond. “As a company led by women, we are not just breaking industry norms — we’re actively building an inclusive, innovative future in the Metaverse and Web3,” Ong said on joining.`,
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

She founded Smobler in 2021 as a digital studio and metaverse architect helping brands, enterprises, institutions, educators and creators build immersive experiences; the company has since expanded into real-world blockchain solutions and AI applications.

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

NOVA is a celebration of the communities connected to the Smobler ecosystem — among them the lifestyle conglomerate Spa Esprit Group, hardware giant Republic of Gamers, the non-profit Music For Good, and The Sandbox. AWS gave away US$100,000 worth of credits to qualified startups at the event.

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


  /* ────────────────────────────── 2023 ─────────────────────────────────── */

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

Smobler’s three business pillars at the time were metaverse development, phygital creation and blockchain solutions, behind a run of world-firsts: a metaverse wedding, the Tools of Rock concert venue, and a disability park with SG Enable, Singapore’s focal agency for disability. It also led the first cross-chain project with Clay Nation, the leading project on Cardano.

The studio is backed by Brinc and The Sandbox, and supported by UBS, IMDA, Enterprise Singapore, Plug and Play, German Entrepreneurship and AWS.`,
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
    id: 'cna-edutech-firms-look-to-us',
    slug: 'cna-edutech-firms-look-to-us',
    title: 'Singapore edutech firms look to the US to grow their business',
    type: 'coverage',
    publishedAt: '08 APR 2023',
    month: 'APR',
    year: 2023,
    excerpt:
      'CNA on Singapore’s education technology companies expanding into the American market.',
    body: `A CNA video segment reported by Chloe Choo on Singapore’s education technology companies turning to the United States for growth.

As the segment frames it, the edutech landscape has kept growing and the sector has drawn increased investment in recent years — enough that Singapore firms are now looking to the American market to expand.`,
    publication: 'CNA',
    sourceUrl:
      'https://www.channelnewsasia.com/watch/singapore-edutech-firms-look-us-grow-their-business-video-3405586',
    weight: 'standard',
    onWire: false,
    tags: ['Coverage', 'Edutech', 'Expansion'],
    readTime: '1 min read',
  }
];
