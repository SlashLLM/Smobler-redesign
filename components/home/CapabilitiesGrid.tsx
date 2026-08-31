'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SpatialBackground } from '../ui/SpatialBackground';
import { MagicBento, MagicBentoCardItem } from '../ui/MagicBento';
import { Gauge, Sparkles, Workflow, ShieldCheck } from 'lucide-react';

export const CapabilitiesGrid: React.FC = () => {
  /* Four pillars on a 2x2. MagicBento.css hardcodes nth-child spans for a
     six-card wall, including a row span on the third — colSpan/rowSpan are
     written as inline style, so they are what evens the grid back out. */
  const capabilities: MagicBentoCardItem[] = [
    {
      label: '01 / APPLIED AI',
      title: 'Build intelligence around the problem, not the model.',
      description: 'We design and deploy production AI for complex, domain-specific environments — from food compliance and product development to enterprise decision support. Our systems combine language models, proprietary data, retrieval, automation and human oversight to create AI people can actually use.',
      meta: 'AI PRODUCTS · DOMAIN INTELLIGENCE · RAG · HUMAN-IN-THE-LOOP',
      icon: <Sparkles size={20} />,
      href: '/what-we-build#ai-food-security',
      color: '#121720',
      colSpan: 2,
      rowSpan: 1,
    },
    {
      label: '02 / INTELLIGENT OPERATIONS',
      title: 'Turn repetitive work into intelligent infrastructure.',
      description: 'We redesign workflows around AI agents and automation, connecting information, systems and people rather than adding another layer of software. From customer operations and document processing to qualification, reporting and internal services, we build automation around measurable business outcomes.',
      meta: 'AI AGENTS · WORKFLOW AUTOMATION · ENTERPRISE INTEGRATION · GOVERNANCE',
      icon: <Workflow size={20} />,
      href: '/what-we-build#business-automation',
      color: '#161E28',
      colSpan: 2,
      rowSpan: 1,
    },
    {
      label: '03 / AI ECONOMICS',
      title: 'Make every AI dollar accountable.',
      description: 'As AI adoption scales, so does its hidden cost. Slashboard gives organisations visibility across models, prompts, workloads and teams so leaders can understand what their AI is costing, what it is producing and where economics can improve.',
      meta: 'MODEL INTELLIGENCE · USAGE ANALYTICS · COST OPTIMISATION · SPEND GOVERNANCE',
      icon: <Gauge size={20} />,
      href: '/what-we-build#slashboard',
      color: '#161E28',
      colSpan: 2,
      rowSpan: 1,
    },
    {
      label: '04 / TRUSTED DIGITAL INFRASTRUCTURE',
      title: 'When trust matters, architecture matters.',
      description: 'We build blockchain and digital infrastructure where verification, provenance, settlement and auditability solve genuine operational problems. From maritime trade to supply chains, we use distributed systems selectively — where the technology creates a better system, not simply a different one.',
      meta: 'DIGITAL TRADE · VERIFICATION · SETTLEMENT · TRACEABILITY',
      icon: <ShieldCheck size={20} />,
      href: '/what-we-build#blockchain-bunkering',
      color: '#121720',
      colSpan: 2,
      rowSpan: 1,
    },
  ];

  return (
    <section className="relative surface-snowfield section-py-lg border-b border-[var(--line-light)] overflow-hidden">
      <SpatialBackground variant="ambient" />
      <div className="buildplate-container relative z-10">
        <SectionHeader
          eyebrow="WHAT WE BUILD"
          title="What we build"
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
