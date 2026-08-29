import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '../ui/SectionHeader';
import { Chip } from '../ui/Chip';
import { people } from '@/data/people';
import { ArrowRight } from 'lucide-react';

export const StudioPreview: React.FC = () => {
  const previewPeople = people.slice(0, 8);

  return (
    <section className="bg-white section-py-lg border-b border-[var(--line-light)]">
      <div className="buildplate-container">
        <SectionHeader
          eyebrow="SMOBLER GLOBAL TEAM"
          title="The studio"
          dek="An all-female leadership team and a board of advisors in AI systems, blockchain, digital bunkering and CPG AI."
          actionLink={{
            label: 'Meet the full team',
            href: '/studio',
          }}
          theme="white"
        />

        <div className="grid-12 plot-grid-bordered">
          {previewPeople.map((person) => (
            <Link
              key={person.id}
              href={`/studio?person=${person.slug}`}
              className="col-3 plot-cell-bordered person-card p-5 bg-white hover:bg-[var(--sun-50)] transition-all block group"
              style={{
                boxShadow: 'var(--lift-card-snow)',
              }}
            >
              {/* Natural Vibrant Portrait with 4:5 Aspect Ratio */}
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-4 bg-[var(--snowfield-2)] border border-[var(--line-light)] media-well">
                {person.portrait && (
                  <Image
                    src={person.portrait}
                    alt={person.portraitAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover duotone-portrait"
                  />
                )}
              </div>

              {/* Details */}
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-base font-display font-bold text-[var(--ink)] group-hover:text-[var(--sun-700)] transition-colors">
                  {person.name}
                </h3>
                <ArrowRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--sun-700)]"
                />
              </div>

              <div className="text-label text-[var(--ink-mute)] font-mono text-[11px]">
                {person.role}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
