'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SpatialBackground } from '../ui/SpatialBackground';
import { MagicBento, MagicBentoCardItem } from '../ui/MagicBento';
import { Cpu, Sparkles, Workflow, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CapabilitiesGrid: React.FC = () => {
  const capabilities: MagicBentoCardItem[] = [
    {
      label: '01 / EDUCATIONAL GAMING',
      title: 'Building future gamechangers',
      description: 'On-chain and off-chain worlds across The Sandbox and Roblox — Teletubbies, BHUTANVERSE, 3VEREST, A11Y Park — where the lesson arrives as play rather than as a syllabus.',
      meta: 'THE SANDBOX · ROBLOX · META QUEST',
      icon: <Cpu size={20} />,
      badge: 'PILLAR 1',
      href: '/what-we-build#educational-gaming',
      color: '#121720',
    },
    {
      label: '02 / AI FOR FOOD SECURITY',
      title: 'Compliance & equity',
      description: 'NUTRA and Robin AI compress a year of HACCP and nutrition-labelling work into hours, so a food founder can reach shelves instead of running out of capital first.',
      meta: 'META LLAMA · RAG · HACCP · FDA LABELS',
      icon: <Sparkles size={20} />,
      badge: 'PILLAR 2',
      href: '/what-we-build#ai-food-security',
      color: '#121720',
    },
    {
      label: '03 / DIGITAL HUMANS',
      title: 'Twinity',
      description: 'Photorealistic digital avatars delivering broadcast-quality video with authentic lip-sync in 40+ languages, for enterprise marketing, training and support.',
      meta: '40+ LANGUAGES · BROADCAST QUALITY',
      icon: <Workflow size={20} />,
      badge: 'PRODUCT',
      href: '/what-we-build#digital-humans',
      color: '#161E28',
    },
    {
      label: '04 / PHYGITAL',
      title: 'Where Wall Street meets Art Row',
      description: 'NOVA, Pop Toy Show and IMDA’s Digital for Life Festival — in-real-life activations run in sync with the events the audience is already at.',
      meta: 'NOVA · NYSE · TOKEN2049 · SXSW',
      icon: <Zap size={20} />,
      badge: 'PILLAR 4',
      href: '/what-we-build#phygital',
      color: '#161E28',
    },
    {
      label: '05 / BLOCKCHAIN',
      title: 'Trust in the open sea',
      description: 'Digital bunkering on Sui: smart contracts and NFT-based verification replacing paper in a $120B maritime fuel industry, built to Singapore’s 2025 mandate.',
      meta: 'SUI · SMART CONTRACTS · ESG TRACKING',
      icon: <ShieldCheck size={20} />,
      badge: 'PILLAR 3',
      href: '/what-we-build#blockchain-bunkering',
      color: '#121720',
    },
    {
      label: '06 / ETHICAL AI',
      title: 'Practice & safeguards',
      description: 'Every AI decision traceable and explained, bias actively monitored, users able to override any suggestion, and the platform kept current with the regulation it operates under.',
      meta: 'TRACEABLE · AUDITED · HUMAN OVERRIDE',
      icon: <CheckCircle2 size={20} />,
      badge: 'STANDARD',
      href: '/what-we-build#ethical-ai',
      color: '#121720',
    },
  ];

  return (
    <section className="relative surface-snowfield section-py-lg border-b border-[var(--line-light)] overflow-hidden">
      <SpatialBackground variant="ambient" />
      <div className="buildplate-container relative z-10">
        <SectionHeader
          eyebrow="FOUR PILLARS, ONE STUDIO"
          title="What we do"
          dek="Educational gaming, AI for food security, blockchain for maritime trade, and phygital events — 35 published experiences and 60+ activations behind them."
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
