import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { OfficesStrip } from '@/components/studio/OfficesStrip';
import { SpatialBackground } from '@/components/ui/SpatialBackground';
import { people } from '@/data/people';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About & Team',
  description: 'The origin story, leadership and board of directors behind Smobler — Singapore HQ, with presence in Honolulu.',
  alternates: {
    canonical: '/studio',
  },
  openGraph: {
    title: 'About & Team | Smobler',
    description: 'The origin story, leadership and board of directors behind Smobler — Singapore HQ, with presence in Honolulu.',
    url: '/studio',
    type: 'website',
  },
};

export default function StudioPage() {
  const leadership = people.filter(
    (p) => p.id === 'loretta-chen' || p.id === 'mridhul-pax'
  );
  const boardOfDirectors = people.filter((p) =>
    p.disciplines.includes('Advisory')
  );

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
            People. Purpose. Possibilities.
          </h1>

          <p className="text-lede text-[var(--ink-mute)] max-w-3xl text-lg mb-12">
            Our story began during the pandemic, when three fault lines were exposed: creators were deemed non-essential, businesses had to digitise or risk obsolescence, and consumers wanted engagement they could actually trust. Out of that, Smobler — founded by Dr. Loretta Chen — emerged as an AI-first digital agency and technology solutions provider working across AI, blockchain and intelligent digital experiences. Backed by Enterprise Singapore, IMDA, Brinc and Animoca Brands.
          </p>

          {/* Global World Clocks */}
          <OfficesStrip />
        </div>
      </section>

      {/* 2. Leadership Section (Loretta Chen & Mridhul Pax) */}
      <section className="py-16 md:py-24 border-b border-[var(--line-light)]">
        <div className="buildplate-container">
          <SectionHeader
            eyebrow="STUDIO DIRECTION"
            title="Leadership"
            dek="Driven by visionary leadership and cutting-edge technology, guided by our board of directors in AI systems, blockchain, digital bunkering and CPG AI."
            theme="snowfield"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.id}
                className="p-8 bg-white border border-[var(--line-light)] card-lift-snow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square w-full overflow-hidden mb-6 bg-[var(--snowfield-2)] border border-[var(--line-light)] media-well">
                    {leader.portrait && (
                      <Image
                        src={leader.portrait}
                        alt={leader.portraitAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover duotone-portrait"
                      />
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-h3 font-display font-bold text-[var(--ink)]">
                      {leader.name}
                    </h3>
                  </div>

                  <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-4">
                    {leader.role}
                  </div>

                  {leader.bio && (
                    <p className="text-body text-[var(--ink-mute)] text-sm leading-relaxed mb-6">
                      {leader.bio}
                    </p>
                  )}
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

      {/* 3. Board of Directors Section (No roster, no filters) */}
      <section className="bg-white py-16 md:py-24 border-b border-[var(--line-light)]">
        <div className="buildplate-container">
          <SectionHeader
            eyebrow="ADVISORY BOARD"
            title="Board of Directors"
            dek="We are guided by industry leaders in AI systems, enterprise blockchain, and digital infrastructure."
            theme="white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {boardOfDirectors.map((director) => (
              <div
                key={director.id}
                className="p-8 bg-[var(--snowfield-2)] border border-[var(--line-light)] card-lift-snow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square w-full overflow-hidden mb-6 bg-white border border-[var(--line-light)] media-well">
                    {director.portrait && (
                      <Image
                        src={director.portrait}
                        alt={director.portraitAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover duotone-portrait"
                      />
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-h3 font-display font-bold text-[var(--ink)]">
                      {director.name}
                    </h3>
                  </div>

                  <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-4">
                    {director.role}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--line-light)] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {director.disciplines.map((disc, idx) => (
                      <Chip key={idx} variant="default" size="sm">
                        {disc}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              AI engineering, product design, systems architecture and enterprise strategy — across the Singapore HQ and our Honolulu presence.
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
