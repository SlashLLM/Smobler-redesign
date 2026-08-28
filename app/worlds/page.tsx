import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { worlds } from '@/data/worlds';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { SpatialBackground } from '@/components/ui/SpatialBackground';

export const metadata: Metadata = {
  title: 'Games — Proprietary IP | Smobler',
  description: 'Smobler’s own properties — 3VEREST, Sephia, Yeti Realm and Cobbleland — built and operated by the studio rather than commissioned.',
};

export default function WorldsPage() {
  return (
    <div className="surface-snowfield">
      {/* Header with Yellow Spatial Background */}
      <section className="relative py-20 border-b border-[var(--line-light)] overflow-hidden">
        <SpatialBackground variant="header" />
        <div className="buildplate-container relative z-10">
          <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
            ▸ PROPRIETARY IP
          </div>
          <h1 className="text-h1 font-display font-bold text-[var(--ink)] max-w-4xl mb-4">
            The games we own.
          </h1>
          <p className="text-lede text-[var(--ink-mute)] max-w-2xl text-lg">
            Beyond client commissions, Smobler conceives, funds and operates its own properties — starting with 3VEREST, named Best Sports Experience by The Sandbox.
          </p>
        </div>
      </section>

      {/* World Deep-Dives */}
      <section className="py-16 md:py-24">
        <div className="buildplate-container space-y-20">
          {worlds.map((world, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={world.id}
                id={world.slug}
                className="p-8 md:p-12 card-lift-snow bg-white border border-[var(--line-light)] grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--snowfield-2)] border border-[var(--line-light)] media-well">
                    {world.heroMedia && (
                      <Image
                        src={world.heroMedia}
                        alt={world.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    )}
                    <div className="absolute top-4 left-4 z-10">
                      <Chip
                        variant={world.status === 'Live' ? 'status-ice' : 'status-sun'}
                        size="sm"
                      >
                        STATUS: {world.status.toUpperCase()}
                      </Chip>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-2">
                    PROPRIETARY UNIVERSE {idx + 1}
                  </div>

                  <h2 className="text-h2 font-display font-bold text-[var(--ink)] mb-3">
                    {world.name}
                  </h2>

                  <p className="text-lede text-[var(--ink)] text-base font-medium mb-4">
                    {world.tagline}
                  </p>

                  <p className="text-body text-[var(--ink-mute)] text-sm leading-relaxed mb-6">
                    {world.description}
                  </p>

                  {/* Core Mechanics */}
                  {world.mechanics.length > 0 && (
                    <div className="mb-6 p-4 rounded-sm bg-[var(--snowfield)] border border-[var(--line-light)]">
                      <div className="text-label text-[var(--ink-mute)] font-bold mb-3">
                        CORE SYSTEMS & GAMEPLAY MECHANICS
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[var(--ink)] leading-relaxed">
                        {world.mechanics.map((mech, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-2 font-normal">
                            <span className="text-[var(--sun-700)] font-bold text-xs mt-1 select-none">▸</span>
                            <span>{mech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Stats Row */}
                  {world.stats.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 pb-6 border-b border-[var(--line-light)] mb-6">
                      {world.stats.map((st, sIdx) => (
                        <div key={sIdx}>
                          <div className="font-display font-bold text-xl text-[var(--ink)] tabular-nums">
                            {st.value}
                          </div>
                          <div className="text-xs text-[var(--ink-mute)] font-medium mt-0.5">
                            {st.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Links */}
                  {world.links.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                      {world.links.map((link, lIdx) => (
                        <Button
                          key={lIdx}
                          href={link.url}
                          variant={lIdx === 0 ? 'primary' : 'ghost'}
                          size="md"
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
