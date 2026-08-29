import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PlotCard } from '../ui/PlotCard';
import { SpatialBackground } from '../ui/SpatialBackground';

export const flagshipPlatforms = [
  {
    id: 'quicktradie',
    kicker: 'NEW ZEALAND · MARKETPLACE',
    title: 'QuickTradie (MyMarket)',
    dek: 'New Zealand–first services marketplace connecting homeowners with verified local tradies through real quotes, deal-locking, and transparent reviews.',
    mediaUrl: '/projects/quicktradie-mymarket.png',
    href: '/work/quicktradie',
    status: 'Live Platform',
    statusVariant: 'status-ice' as const,
    stats: [
      { value: '2,400+', label: 'Verified Tradies' },
      { value: '3 hrs', label: 'Avg Lead Time' }
    ]
  },
  {
    id: 'banana-patch-studio',
    kicker: 'HAWAII · E-COMMERCE',
    title: 'Banana Patch Studio',
    dek: 'Custom Online Store 2.0 theme and e-commerce platform for Hawaii’s iconic ceramic art studio, handcrafted pottery, and island galleries.',
    mediaUrl: '/projects/banana-patch-studio.png',
    href: '/work/banana-patch-studio',
    status: 'Shopify 2.0',
    statusVariant: 'status-sun' as const,
    stats: [
      { value: '30+ Yrs', label: 'Studio Heritage' },
      { value: '2', label: 'Island Galleries' }
    ]
  },
  {
    id: '808-notary',
    kicker: 'HAWAII · DISPATCH PLATFORM',
    title: '808 Mobile Notary',
    dek: 'On-demand mobile notary public & loan signing platform optimized for Hawaii with instant travel area scheduling and fee transparency.',
    mediaUrl: '/projects/808-notary.png',
    href: '/work/808-notary',
    status: 'Web Application',
    statusVariant: 'status-ice' as const,
    stats: [
      { value: '100%', label: 'Mobile Dispatch' },
      { value: 'Instant', label: 'Fee Transparency' }
    ]
  }
];

export const FlagshipPlatformsStrip: React.FC = () => {
  return (
    <section className="relative surface-snowfield section-py-lg border-b border-[var(--line-light)] overflow-hidden">
      <SpatialBackground variant="ambient" />
      <div className="buildplate-container relative z-10">
        <SectionHeader
          eyebrow="PLATFORMS & PRODUCTS"
          title="Flagship platforms"
          dek="Custom web applications, high-conversion e-commerce engines, and two-sided services marketplaces."
          theme="snowfield"
        />

        <div className="grid-12">
          {flagshipPlatforms.map((platform) => (
            <PlotCard
              key={platform.id}
              kicker={platform.kicker}
              title={platform.title}
              dek={platform.dek}
              stats={platform.stats}
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
