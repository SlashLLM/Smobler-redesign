'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SpatialBackground } from '../ui/SpatialBackground';
import { MagicBento, MagicBentoCardItem } from '../ui/MagicBento';
import { Gauge, Sparkles, Workflow, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

const automationWorkflows = [
  {
    num: '01',
    title: 'Lead qualification & automated follow-up',
    action: 'Score and enrich inbound prospects, sync CRM records automatically, and schedule calls with high-value leads.',
  },
  {
    num: '02',
    title: 'Customer support resolution & guardrails',
    action: 'Resolve tickets using verified knowledge bases, execute safe routine tasks, and hand off complex cases with full context.',
  },
  {
    num: '03',
    title: 'Voice reception & appointment booking',
    action: 'Capture missed phone calls, evaluate caller intent, and book calendar appointments around the clock.',
  },
  {
    num: '04',
    title: 'Document processing & data validation',
    action: 'Parse and validate complex documents, flag discrepancies, and generate pre-filled drafts for supervisor sign-off.',
  },
  {
    num: '05',
    title: 'Employee onboarding & HR services',
    action: 'Streamline access permissions, route manager approvals, assign equipment and training, and highlight pending tasks.',
  },
];

export const CapabilitiesGrid: React.FC = () => {
  const capabilities: MagicBentoCardItem[] = [
    {
      label: '01 / AI COST OPTIMISATION',
      title: 'Slashboard',
      description: 'Our platform for the AI bill. See what every model, prompt and workload actually costs, find the spend that returns nothing, and cut it — without giving up output quality.',
      meta: 'MULTI-MODEL · USAGE ANALYTICS · SPEND CONTROLS',
      icon: <Gauge size={20} />,
      badge: 'PRODUCT',
      href: '/what-we-build#slashboard',
      color: '#121720',
    },
    {
      label: '02 / AI FOR FOOD COMPLIANCE',
      title: 'NUTRA',
      description: 'A year of HACCP plans and nutrition labelling compressed into hours. NUTRA takes a food business from recipe to shelf-ready compliance while the capital is still in the bank.',
      meta: 'HACCP · FDA LABELS · RAG · SUPPLIER INTELLIGENCE',
      icon: <Sparkles size={20} />,
      badge: 'PRODUCT',
      href: '/what-we-build#ai-food-compliance',
      color: '#121720',
    },
    {
      label: '03 / AI BUSINESS WORKFLOWS',
      title: 'Automate the work your teams repeat',
      description: 'From inbound lead scoring to customer support, voice booking, document extraction, and employee onboarding — we embed autonomous AI agents directly into your daily operations with human-in-the-loop guardrails.',
      content: (
        <div className="mt-4 space-y-2.5">
          {automationWorkflows.map((item) => (
            <div
              key={item.num}
              className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,209,0,0.3)] transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="font-mono text-[11px] font-bold text-[var(--sun-400)] px-2 py-0.5 rounded bg-[rgba(255,209,0,0.1)] border border-[rgba(255,209,0,0.25)]">
                  {item.num}
                </span>
                <h4 className="text-sm md:text-[15px] font-bold text-white font-display tracking-tight">
                  {item.title}
                </h4>
              </div>
              <p className="text-[13px] md:text-sm text-[var(--bento-text-muted)] leading-relaxed">
                <span className="text-[var(--sun-500)] mr-1.5 font-bold">→</span>
                {item.action}
              </p>
            </div>
          ))}
        </div>
      ),
      meta: 'AUTONOMOUS AGENTS · ENTERPRISE WORKFLOWS · HUMAN OVERRIDE',
      icon: <Workflow size={20} />,
      badge: 'SERVICE',
      href: '/what-we-build#business-automation',
      color: '#161E28',
    },
    {
      label: '04 / PHYGITAL & ENTERPRISE ACTIVATIONS',
      title: 'Where Wall Street meets Art Row',
      description: 'Phygital experiences and IRL activations — NOVA, Pop Toy Show, IMDA’s Digital for Life Festival — run in sync with the events the audience is already attending.',
      meta: 'NOVA · NYSE · TOKEN2049 · SXSW',
      icon: <Zap size={20} />,
      badge: 'HERITAGE',
      href: '/what-we-build#phygital',
      color: '#161E28',
    },
    {
      label: '05 / BLOCKCHAIN',
      title: 'Trustancy',
      description: 'Digital bunkering on Sui: smart contracts and NFT-based verification replacing paper in a $120B maritime fuel industry, built to Singapore’s 2025 mandate.',
      meta: 'SUI · SMART CONTRACTS · ESG TRACKING',
      icon: <ShieldCheck size={20} />,
      badge: 'PRODUCT',
      href: '/what-we-build#blockchain-bunkering',
      color: '#121720',
    },
    {
      label: '06 / FARM TO FORK',
      title: 'Halal Chain',
      description: 'Blockchain-enabled traceability for the halal supply chain — every step from farm to fork recorded, verifiable and auditable by the people who have to trust it.',
      meta: 'ON-CHAIN PROVENANCE · CERTIFICATION · AUDIT TRAIL',
      icon: <CheckCircle2 size={20} />,
      badge: 'PRODUCT',
      href: '/what-we-build#halal-chain',
      color: '#121720',
    },
  ];

  return (
    <section className="relative surface-snowfield section-py-lg border-b border-[var(--line-light)] overflow-hidden">
      <SpatialBackground variant="ambient" />
      <div className="buildplate-container relative z-10">
        <SectionHeader
          eyebrow="THREE SERVICES, THREE PRODUCTS"
          title="What we do"
          dek="We cut what AI costs to run, we build AI products like Slashboard and NUTRA, and we automate the operations that slow a business down — with a decade of shipped work behind it."
          actionLink={{
            label: 'All capabilities',
            href: '/what-we-build',
          }}
          theme="snowfield"
        />

        <MagicBento
          cards={capabilities}
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={320}
          particleCount={14}
          glowColor="255, 209, 0"
        />
      </div>
    </section>
  );
};
