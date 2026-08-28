'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SpatialBackground } from '../ui/SpatialBackground';
import { MagicBento, MagicBentoCardItem } from '../ui/MagicBento';
import { Gauge, Sparkles, Workflow, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
      label: '03 / AI FOR BUSINESS AUTOMATION',
      title: 'Put AI on the work you repeat',
      description: 'Support queues, back-office processing, reporting, content operations — we build agents into the workflows your teams run every day, and we keep them running in production.',
      meta: 'AGENTS · WORKFLOW INTEGRATION · HUMAN-IN-THE-LOOP',
      icon: <Workflow size={20} />,
      badge: 'SERVICE',
      href: '/what-we-build#business-automation',
      color: '#161E28',
    },
    {
      label: '04 / PHYGITAL & GAMING',
      title: 'Where Wall Street meets Art Row',
      description: 'On-chain and off-chain worlds across The Sandbox and Roblox, and IRL activations — NOVA, Pop Toy Show, IMDA’s Digital for Life Festival — run in sync with the events the audience is already at.',
      meta: 'THE SANDBOX · ROBLOX · NYSE · TOKEN2049',
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
