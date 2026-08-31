import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PlotCard } from '../ui/PlotCard';
import { projects } from '@/data/projects';

/* The domains the work spans — each one stated with the cases that carry it. */
const sectors = [
  {
    name: 'FOOD SYSTEMS',
    line: 'Turning regulatory complexity into an accessible pathway from recipe to market.',
    projectIds: ['nutra'],
  },
  {
    name: 'ENTERPRISE AI',
    line: 'Building intelligent workflows that remove repetitive operational friction.',
    projectIds: ['twinity'],
  },
  {
    name: 'MARITIME TRADE',
    line: 'Reimagining trust, documentation and settlement for global infrastructure.',
    projectIds: ['digital-bunkering'],
  },
  {
    name: 'EDUCATION',
    line: 'Using AI and interactive technologies to make complex knowledge more accessible.',
    projectIds: ['aloha-pathways'],
  },
];

export const FeaturedWork: React.FC = () => {
  return (
    <section className="bg-white section-py-lg border-b border-[var(--line-light)]">
      <div className="buildplate-container">
        <SectionHeader
          eyebrow="SELECTED WORK"
          title="Technology is only interesting when it changes something."
          theme="white"
        />

        {sectors.map((sector) => {
          const sectorProjects = sector.projectIds
            .map((id) => projects.find((p) => p.id === id))
            .filter((p): p is (typeof projects)[number] => Boolean(p));

          if (sectorProjects.length === 0) return null;

          /* A lone case gets the full-width split plot; a pair splits the row. */
          const isSolo = sectorProjects.length === 1;

          return (
            <div
              key={sector.name}
              className="pt-8 mb-12 md:mb-16 last:mb-0 border-t border-[var(--line-light)]"
            >
              <div className="flex flex-col gap-2 mb-6 md:mb-8 max-w-[560px]">
                <div className="text-label text-[var(--ink)] text-[15px] md:text-[18px] tracking-[0.1em] font-bold">
                  {sector.name}
                </div>
                <p className="text-[14px] md:text-[15px] leading-[1.55] text-[var(--ink-mute)] m-0">
                  {sector.line}
                </p>
              </div>

              <div className="grid-12">
                {sectorProjects.map((project) => (
                  <PlotCard
                    key={project.id}
                    kicker={`${project.client.toUpperCase()} · ${project.year}`}
                    title={project.title}
                    dek={project.oneLineOutcome}
                    meta={project.platform.join(' · ')}
                    stats={project.outcomeStats?.slice(0, 2)}
                    mediaUrl={isSolo ? project.heroMedia : project.thumbnail}
                    aspectRatio={isSolo ? '16:10' : '16:9'}
                    layout={isSolo ? 'split' : 'stack'}
                    href={`/work/${project.slug}`}
                    chips={[
                      { label: project.sector, variant: 'default' },
                      ...(project.isFeatured
                        ? [{ label: 'FEATURED', variant: 'status-sun' as const }]
                        : []),
                    ]}
                    colSpan={isSolo ? 12 : 6}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
