import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PlotCard } from '../ui/PlotCard';
import { SpatialBackground } from '../ui/SpatialBackground';

/* The doc supplies no figures for these three, so no `stats` — the tag row
   carries the detail instead. */
export const flagshipPlatforms = [
  {
    id: 'nutra',
    kicker: 'HAWAIʻI · FOOD INTELLIGENCE',
    title: 'Robin AI / NUTRA',
    dek: 'From recipe to market readiness. AI-powered food intelligence designed to simplify complex compliance, product-development and market-readiness workflows for food entrepreneurs. Developed from Smobler’s work with Leeward Community College, the Wahiawā Value-Added Product Development Center in Hawaiʻi and the State of Hawaiʻi.',
    meta: 'FOOD AI · REGTECH · HACCP · NUTRITION INTELLIGENCE',
    mediaUrl: '/projects/robin-ai.png',
    href: '/work/nutra',
    status: 'FOOD AI',
    statusVariant: 'status-sun' as const,
  },
  {
    id: 'slashboard',
    kicker: 'AI ECONOMICS · PLATFORM',
    title: 'Slashboard',
    dek: 'The intelligence layer for the AI bill. Understand the economics behind every model, workload and AI interaction — then optimise performance without sacrificing quality.',
    meta: 'AI ECONOMICS · MULTI-MODEL · COST INTELLIGENCE',
    mediaUrl: '/products/slashboard.png',
    href: '/what-we-build#slashboard',
    status: 'AI ECONOMICS',
    statusVariant: 'status-ice' as const,
  },
  {
    id: 'digital-trade-infrastructure',
    kicker: 'MARITIME · TRADE INFRASTRUCTURE',
    title: 'Digital Trade Infrastructure',
    dek: 'Turning paper-based trust into programmable trust. Digital infrastructure for industries where transactions, provenance and verification still depend on fragmented documentation and manual processes. Our maritime work explores the use of blockchain, smart contracts and digital settlement to modernise the infrastructure behind global trade.',
    meta: 'MARITIME · BLOCKCHAIN · DIGITAL SETTLEMENT · TRADE INFRASTRUCTURE',
    mediaUrl: '/products/digital-bunkering.jpg',
    href: '/work/digital-bunkering',
    status: 'MARITIME',
    statusVariant: 'status-ice' as const,
  }
];

export const FlagshipPlatformsStrip: React.FC = () => {
  return (
    <section className="relative surface-snowfield section-py-lg border-b border-[var(--line-light)] overflow-hidden">
      <SpatialBackground variant="ambient" />
      <div className="buildplate-container relative z-10">
        <SectionHeader
          eyebrow="FLAGSHIP SYSTEMS"
          title="Built for the real economy."
          theme="snowfield"
        />

        <div className="grid-12">
          {flagshipPlatforms.map((platform) => (
            <PlotCard
              key={platform.id}
              kicker={platform.kicker}
              title={platform.title}
              dek={platform.dek}
              meta={platform.meta}
              mediaUrl={platform.mediaUrl}
              aspectRatio="16:10"
              href={platform.href}
              chips={[
                {
                  label: platform.status,
                  variant: platform.statusVariant,
                },
              ]}
              theme="snowfield"
              colSpan={4}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
