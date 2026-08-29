import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { SpatialBackground } from '@/components/ui/SpatialBackground';
import { CheckCircle2, Cpu, Gauge, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What We Do — Capabilities & AI Solutions | Smobler',
  description:
    'Smobler’s AI-first capabilities: AI cost optimization with Slashboard, AI for food security with NUTRA and Robin AI, autonomous AI workflow automation, blockchain for maritime bunkering on Sui, and phygital activations led by NOVA.',
};

export default function WhatWeBuildPage() {
  const capabilities = [
    {
      id: 'slashboard',
      number: '01',
      title: 'AI cost optimisation',
      tagline: 'Slashboard: total control over model spend and performance. See what every prompt, API call and agent actually costs, and cut waste without giving up quality.',
      icon: Gauge,
      mediaUrl: '/products/slashboard.png',
      modelRole: 'Multi-model usage analytics, latency monitoring, tokens-per-dollar efficiency benchmarks, automated prompt routing, and spend control guardrails across Meta Llama, OpenAI, Anthropic and custom fine-tunes.',
      humanRole: 'Engineering governance: team quota policies, production oversight, model failover rules, and financial architecture alignment.',
      specs: [
        'Real-time multi-model spend and token telemetry',
        'Automated fallback and intelligent prompt routing',
        'Granular API key rate limiting and team budgets',
        'Enterprise cost-per-task optimization dashboards',
      ],
      clientUse: 'Slashboard platform deployed across enterprise AI workloads and multi-agent operations.',
    },
    {
      id: 'ai-food-security',
      number: '02',
      title: 'AI for food security',
      tagline: 'Compliance and equity through augmented intelligence. NUTRA and Robin AI turn a year of regulatory work into an afternoon.',
      icon: Sparkles,
      mediaUrl: '/pillars/ai-food.jpg',
      modelRole: 'AI-powered HACCP plans and FDA-compliant nutrition labels in 30 minutes, supplier matching and ranking, SOP generation tuned to local equipment, and real-time cost modelling — built on Meta Llama with retrieval-augmented generation.',
      humanRole: 'The entrepreneur stays in charge: every AI suggestion can be reviewed, edited and overridden, and the platform is kept aligned with the food safety regulation it operates under.',
      specs: [
        'Open architecture on Meta Llama — customisable, not a black box',
        'Food-specific domain training and optimisation',
        'APAC and Native Hawaiian cultural and religious context built in',
        'End-to-end AI development, intelligent automation, scalable platforms',
      ],
      clientUse: 'NUTRA, Smobler’s Food AI Operating System, and Robin AI with the Wahiawā Value-Added Product Development Center, Leeward Community College and the State of Hawai‘i.',
    },
    {
      id: 'business-automation',
      number: '03',
      title: 'AI business workflows',
      tagline: 'Automate the work your teams repeat — from lead scoring and customer support to 24/7 voice booking, document extraction, and employee onboarding — with human-in-the-loop guardrails.',
      icon: Workflow,
      mediaUrl: '/products/ai-workflows.jpg',
      modelRole: 'Autonomous AI agents embedded into core operations: instant lead qualification, zero-reopen support resolution, 24/7 voice receptionist scheduling, automated document validation, and streamlined HR onboarding.',
      humanRole: 'Human override and safety controls: strict validation rules, safe action boundaries, automated exception routing, and zero-compromise audit logging.',
      specs: [
        'Lead Qualification: Siemens case study — 2,800 weekly leads processed across 50 validation rules',
        'Customer Support: Knowledge base answers with zero-reopen resolution metrics',
        'Voice Reception: 24/7 missed-call recovery & calendar appointment booking',
        'Document Processing: Microsoft benchmark — 40h/wk saved alongside a 99% error reduction',
        'Employee Onboarding: FranklinCovey HR workflow slashed from 30 days to 2 hours',
      ],
      clientUse: 'Enterprise organizations embedding autonomous workflow agents into CRM, support ticketing, voice systems, document extraction, and HR management.',
    },
    {
      id: 'phygital',
      number: '04',
      title: 'Phygital',
      tagline: 'Where Wall Street, Main Street, Art Row and humanity converge. In-real-life activations, run in sync with the events the audience is already attending.',
      icon: Zap,
      mediaUrl: '/pillars/phygital-events.jpg',
      modelRole: 'NOVA is a Smobler proprietary IP and a celebration of the communities created by and connected with the Smobler ecosystem — an IRL festival hosted in sync with major crypto and Web3 events.',
      humanRole: 'Programming, partnerships and production: five editions across Singapore, Austin and Honolulu, plus 60+ activations from Pop Toy Show to IMDA’s Digital for Life Festival.',
      specs: [
        'NOVA 2023 Singapore — inaugural edition at TOKEN2049',
        'NOVA 2024 Austin — official SXSW event',
        'NOVA 2024 Singapore — TOKEN2049 and F1 night race',
        'NOVA 2025 Singapore — the SG60 edition, presented by the NYSE',
      ],
      clientUse: 'Presented with the New York Stock Exchange, Gemini, Nifty Gateway Studio, Skadden, Michigan Ross Executive Education, Unstoppable Domains and Ledger.',
    },
    {
      id: 'blockchain-bunkering',
      number: '05',
      title: 'Blockchain for bunkering',
      tagline: 'Trust in the open sea. Production-ready blockchain infrastructure for maritime fuel, where compliance and operational integrity are mission-critical.',
      icon: ShieldCheck,
      mediaUrl: '/pillars/blockchain-maritime.jpg',
      modelRole: 'Smart contracts and NFT-based verification replace manual, paper-based ship refuelling: a vessel requests 300MT, the supplier mints tokenised fuel, delivery is verified by GPS, the contract confirms and mints an NFT receipt, and settlement completes instantly.',
      humanRole: 'Regulatory alignment with Singapore’s 2025 digital bunkering mandate, port operations integration, and the ESG and carbon reporting the industry is now held to.',
      specs: [
        'Built on Sui with Mysten Labs and the Sui Foundation',
        '$120B maritime fuel bunkering market',
        'ESG tracking, carbon metrics, transparent documentation',
        'Expansion planned across APAC and the ARA ports',
      ],
      clientUse: 'Digital Bunkering with Mysten Labs and the Sui Foundation, with Walrus as logistics partner, and Posable for stablecoin settlement.',
    },
    {
      id: 'ethical-ai',
      number: '06',
      title: 'Ethical AI practice & safeguards',
      tagline: 'The commitments that apply to every model Smobler puts in front of a user — written down, not implied.',
      icon: CheckCircle2,
      mediaUrl: '/products/nutra.jpg',
      modelRole: 'All AI decisions are traceable and clearly explained for users, and bias is actively monitored and minimised for fair outcomes.',
      humanRole: 'Users can supervise, review and override AI suggestions at any time. Data is protected through secure encryption and strict access controls.',
      specs: [
        'Data protected by encryption and strict access control',
        'Every AI decision traceable and explained',
        'Bias actively monitored and minimised',
        'Continuously updated to meet food safety and legal regulation',
      ],
      clientUse: 'Applied across NUTRA, Robin AI and every client-facing model Smobler ships.',
    },
  ];

  return (
    <div className="surface-snowfield">
      {/* Hero Header with Yellow Spatial Background */}
      <section className="relative py-20 border-b border-[var(--line-light)] overflow-hidden">
        <SpatialBackground variant="header" />
        <div className="buildplate-container relative z-10">
          <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
            ▸ CORE CAPABILITIES & AI SOLUTIONS
          </div>
          <h1 className="text-h1 font-display font-bold text-[var(--ink)] max-w-4xl mb-6">
            Doing great while doing good.
          </h1>
          <p className="text-lede text-[var(--ink-mute)] max-w-2xl">
            Smobler is an AI-first digital agency building intelligent products, AI cost optimization (Slashboard), food security AI (NUTRA), enterprise workflow automation, and verified blockchain infrastructure.
          </p>
        </div>
      </section>

      {/* Deep-Dive Capabilities List */}
      <section className="py-16 md:py-24">
        <div className="buildplate-container space-y-20">
          {capabilities.map((cap, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = cap.icon;

            return (
              <div
                key={cap.id}
                id={cap.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center p-8 md:p-12 card-lift-snow bg-white"
              >
                {/* Visual Media Column */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--snowfield-2)] border border-[var(--line-light)] media-well">
                    <Image
                      src={cap.mediaUrl}
                      alt={cap.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 p-3 bg-[var(--snowfield-2)] border-l-3 border-[var(--sun-500)]">
                    <div className="text-label text-[var(--ink-mute)] font-mono font-bold mb-1">
                      Deployed at
                    </div>
                    <p className="text-body text-sm text-[var(--ink-mute)] leading-relaxed">
                      {cap.clientUse}
                    </p>
                  </div>
                </div>

                {/* Content & Specs Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={18} className="text-[var(--sun-700)]" />
                    <span className="text-label text-[var(--sun-700)] font-mono font-bold">
                      CAPABILITY {cap.number}
                    </span>
                  </div>

                  <h2 className="text-h2 font-display font-bold text-[var(--ink)] mb-4">
                    {cap.title}
                  </h2>

                  <p className="text-body text-[var(--ink-mute)] mb-6 leading-relaxed">
                    {cap.tagline}
                  </p>

                  {/* AI vs Human Split Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-5 bg-[var(--snowfield)] border border-[var(--line-light)]">
                    <div>
                      <div className="text-label text-[var(--ice-400)] font-mono font-bold mb-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--ice-400)]" />
                        WHAT THE MODEL DOES
                      </div>
                      <p className="text-body text-sm text-[var(--ink)] leading-relaxed">
                        {cap.modelRole}
                      </p>
                    </div>

                    <div>
                      <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[var(--sun-500)]" />
                        WHAT HUMANS ART-DIRECT
                      </div>
                      <p className="text-body text-sm text-[var(--ink)] leading-relaxed">
                        {cap.humanRole}
                      </p>
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <div className="text-label text-[var(--ink-mute)] font-mono mb-2 font-bold">
                      SYSTEM SPECIFICATIONS
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--ink)]">
                      {cap.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-[var(--sun-700)] font-bold shrink-0">▸</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-white py-20 border-t border-[var(--line-light)]">
        <div className="buildplate-container text-center max-w-2xl mx-auto">
          <h2 className="text-h2 font-display font-bold text-[var(--ink)] mb-4">
            Join us in shaping the future of ethical, immersive phygital tech.
          </h2>
          <p className="text-body text-[var(--ink-mute)] mb-8">
            Whether it’s a world, a compliance platform, a settlement layer or a festival — tell us what you’re trying to build and who it’s for.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Start a conversation
          </Button>
        </div>
      </section>
    </div>
  );
}
