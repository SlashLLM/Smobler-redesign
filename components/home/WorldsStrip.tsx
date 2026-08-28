import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PlotCard } from '../ui/PlotCard';
import { SpatialBackground } from '../ui/SpatialBackground';
import { worlds } from '@/data/worlds';

export const WorldsStrip: React.FC = () => {
  return (
    <section className="relative surface-snowfield section-py-lg border-b border-[var(--line-light)] overflow-hidden">
      <SpatialBackground variant="ambient" />
      <div className="buildplate-container relative z-10">
        <SectionHeader
          eyebrow="PROPRIETARY IP"
          title="Our games"
          dek="The properties Smobler owns outright — 3VEREST, Sephia, Yeti Realm and Cobbleland."
          actionLink={{
            label: 'Explore all games',
            href: '/worlds',
          }}
          theme="snowfield"
        />

        <div className="grid-12">
          {worlds.map((world) => (
            <PlotCard
              key={world.id}
              /* The chip already carries the status — repeating it in the
                 kicker just doubled the same word across the card head. */
              kicker="PROPRIETARY IP"
              title={world.name}
              dek={world.tagline}
              stats={world.stats.slice(0, 2)}
              mediaUrl={world.thumbnail}
              aspectRatio="16:10"
              href={`/worlds#${world.slug}`}
              chips={[
                {
                  label: world.status,
                  variant: world.status === 'Live' ? 'status-ice' : 'status-sun',
                },
              ]}
              theme="snowfield"
              colSpan={3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
