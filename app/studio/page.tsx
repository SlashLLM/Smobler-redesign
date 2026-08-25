import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { OfficesStrip } from '@/components/studio/OfficesStrip';
import { TeamRoster } from '@/components/studio/TeamRoster';
import { SpatialBackground } from '@/components/ui/SpatialBackground';
import { people } from '@/data/people';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Studio & Staff Roster | Smobler',
  description: 'Meet the founders, neural architects, spatial engineers, and master voxel artists powering Smobler across Singapore, Austin, São Paulo, and London.',
};

export default function StudioPage() {
  const leadership = people.filter((p) => p.isLeadership);

  return (
    <div className="surface-snowfield">
      {/* 1. Header with Yellow Spatial Background & Global Offices Strip */}
      <section className="relative py-20 border-b border-[var(--line-light)] overflow-hidden">
        <SpatialBackground variant="header" />
        <div className="buildplate-container relative z-10">
          <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
            ▸ ABOUT SMOBLER & GLOBAL HUBS
          </div>

          <h1 className="text-h1 font-display font-bold text-[var(--ink)] max-w-4xl mb-6">
            A studio selling judgment has to show who has it.
          </h1>

          <p className="text-lede text-[var(--ink-mute)] max-w-3xl text-lg mb-12">
            Founded in Singapore in 2020, Smobler is a distributed team of engineers, researchers, and world-builders across four continents. We combine deterministic spatial systems with emerging AI models to build virtual environments that stand up to real crowds.
          </p>

          {/* Global World Clocks */}
          <OfficesStrip />
        </div>
      </section>

      {/* 2. Leadership Section */}
      <section className="py-16 md:py-24 border-b border-[var(--line-light)]">
        <div className="buildplate-container">
          <SectionHeader
            eyebrow="STUDIO DIRECTION"
            title="Leadership"
            dek="Guiding strategy, enterprise partnerships, and spatial architecture."
            theme="snowfield"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.id}
                className="p-8 bg-white border border-[var(--line-light)] card-lift-snow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 bg-[var(--snowfield-2)] border border-[var(--line-light)] media-well">
                    <Image
                      src={leader.portrait}
                      alt={leader.portraitAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover duotone-portrait"
                    />
                    <div className="absolute top-3 right-3 z-10">
                      <Chip variant="office" size="sm">
                        {leader.office} · {leader.officeName}
                      </Chip>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-h3 font-display font-bold text-[var(--ink)]">
                      {leader.name}
                    </h3>
                  </div>

                  <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-4">
                    {leader.role}
                  </div>

                  <p className="text-body text-[var(--ink-mute)] text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line-light)] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {leader.disciplines.map((disc, idx) => (
                      <Chip key={idx} variant="default" size="sm">
                        {disc}
                      </Chip>
                    ))}
                  </div>

                  {leader.links && (
                    <div className="flex gap-3">
                      {leader.links.map((l, idx) => (
                        <a
                          key={idx}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[var(--ink)] hover:text-[var(--sun-700)] flex items-center gap-0.5 font-semibold"
                        >
                          <span>{l.label}</span>
                          <ArrowUpRight size={11} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Roster (4-Up Plot Grid with Visible Boundaries) */}
      <section className="bg-white py-16 md:py-24 border-b border-[var(--line-light)]">
        <div className="buildplate-container">
          <SectionHeader
            eyebrow="DISTRIBUTED COLLECTIVE"
            title="The roster"
            dek="Interactive directory of spatial architects, voxel sculptors, and neural researchers."
            actionLink={{
              label: 'View careers',
              href: '/studio/careers',
            }}
            theme="white"
          />

          <TeamRoster />
        </div>
      </section>

      {/* 4. Sunlight Careers CTA Band */}
      <section className="surface-sunlight py-16 border-b border-[var(--line-light)]">
        <div className="buildplate-container flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-label text-[var(--ink)] font-mono font-bold mb-2">
              ▸ WORK WITH US
            </div>
            <h2 className="text-h2 font-display font-bold text-[var(--ink)]">
              Claim a plot on our roster.
            </h2>
            <p className="text-sm text-[var(--ink)] mt-2 opacity-90 max-w-xl">
              We’re expanding our engineering, voxel art, and AI systems teams across Singapore, North America, LATAM, and Europe.
            </p>
          </div>

          <Button href="/studio/careers" variant="white" size="lg">
            See all open positions
          </Button>
        </div>
      </section>
    </div>
  );
}
