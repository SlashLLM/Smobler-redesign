'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SpatialBackground } from '../ui/SpatialBackground';
import { MagicBento, MagicBentoCardItem } from '../ui/MagicBento';
import { Cpu, Sparkles, Workflow, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CapabilitiesGrid: React.FC = () => {
  const capabilities: MagicBentoCardItem[] = [
    {
      label: '01 / SYNTHESIS',
      title: 'World generation',
      description: 'Text and reference to playable voxel space. Art-directed, topological sanitization, and deterministic multiplayer physics — not slot-machined meshes.',
      meta: 'VOXEL GEOMETRY · TOPOLOGY SANITIZATION',
      icon: <Cpu size={20} />,
      badge: 'GENERATIVE',
      href: '/what-we-build#world-generation',
      color: '#121720',
    },
    {
      label: '02 / COGNITION',
      title: 'Agentic characters',
      description: 'Autonomous NPCs and companions with persistent conversational memory, spatial awareness, and brand-safe voice parameters running live in-engine.',
      meta: 'PERSISTENT MEMORY · SPATIAL AUDIO',
      icon: <Sparkles size={20} />,
      badge: 'AUTONOMOUS',
      href: '/what-we-build#agentic-characters',
      color: '#121720',
    },
    {
      label: '03 / UGC TOOLING',
      title: 'Creator copilots',
      description: 'Accelerating digital artisans with specialized rigging, texturing, and asset translation copilots. Generating sustainable livelihoods for creators with batch generation.',
      meta: 'RIGGING AUTOMATION · ASSET BATCHING',
      icon: <Workflow size={20} />,
      badge: 'COPILOT',
      href: '/what-we-build#creator-copilots',
      color: '#161E28',
    },
    {
      label: '04 / ENGAGEMENT',
      title: 'Brand AI experiences',
      description: 'Interactive broadcast activations, augmented reality portals, and responsive narrative experiences for Fortune 500 brands and cultural institutions.',
      meta: 'MULTI-MODAL · LIVE BROADCAST SYNC',
      icon: <Zap size={20} />,
      badge: 'ENTERPRISE',
      href: '/what-we-build#brand-experiences',
      color: '#161E28',
    },
    {
      label: '05 / RELIABILITY',
      title: 'Pipelines & moderation',
      description: 'Automated mesh optimization, draw-call reduction, and real-time multi-lingual content moderation that keeps public spatial worlds safe and stable.',
      meta: 'DRAW-CALL BATCHING · REAL-TIME FILTERING',
      icon: <ShieldCheck size={20} />,
      badge: 'INFRASTRUCTURE',
      href: '/what-we-build#pipelines-moderation',
      color: '#121720',
    },
    {
      label: '06 / SOVEREIGNTY',
      title: 'Provenance & ownership',
      description: 'Cryptographic attribution for AI-generated and human-crafted assets, ensuring immutable royalty flows and cross-world asset sovereignty.',
      meta: 'ON-CHAIN ORACLES · REVENUE SPLITS',
      icon: <CheckCircle2 size={20} />,
      badge: 'WEB3 PROTOCOL',
      href: '/what-we-build#provenance-ownership',
      color: '#121720',
    },
  ];

  return (
    <section className="relative surface-snowfield section-py-lg border-b border-[var(--line-light)] overflow-hidden">
      <SpatialBackground variant="ambient" />
      <div className="buildplate-container relative z-10">
        <SectionHeader
          eyebrow="CAPABILITIES & SYSTEMS"
          title="What we build"
          dek="Six core spatial AI capabilities engineered from shipping 20+ persistent virtual realms to millions of players."
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
