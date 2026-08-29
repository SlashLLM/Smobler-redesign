'use client';

import React, { useState } from 'react';
import { projects } from '@/data/projects';
import { PlotCard } from '@/components/ui/PlotCard';
import { WorkFilter } from '@/components/work/WorkFilter';
import { SpatialBackground } from '@/components/ui/SpatialBackground';

export default function WorkPage() {
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');

  const allSectors = Array.from(new Set(projects.map((p) => p.sector)));
  const allPlatforms = Array.from(
    new Set(projects.flatMap((p) => p.platform))
  );

  const filteredProjects = projects.filter((project) => {
    const matchesSector =
      selectedSector === 'all' || project.sector === selectedSector;
    const matchesPlatform =
      selectedPlatform === 'all' ||
      project.platform.includes(selectedPlatform);
    return matchesSector && matchesPlatform;
  });

  return (
    <div className="surface-snowfield">
      {/* Header with Yellow Spatial Background */}
      <section className="relative py-20 border-b border-[var(--line-light)] overflow-hidden">
        <SpatialBackground variant="header" />
        <div className="buildplate-container relative z-10">
          <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
            ▸ THE FULL PORTFOLIO
          </div>
          <h1 className="text-h1 font-display font-bold text-[var(--ink)] max-w-3xl mb-4">
            Proof of work.
          </h1>
          <p className="text-lede text-[var(--ink-mute)] max-w-2xl text-lg">
            Every engagement across our flagship areas — AI compliance platforms, services marketplaces, custom e-commerce engines, statewide career navigation systems, blockchain settlement networks, and phygital activations.
          </p>
        </div>
      </section>

      {/* Main Filterable Index */}
      <section className="py-16 md:py-24">
        <div className="buildplate-container">
          {/* Filters */}
          <WorkFilter
            selectedSector={selectedSector}
            onSelectSector={setSelectedSector}
            selectedPlatform={selectedPlatform}
            onSelectPlatform={setSelectedPlatform}
            sectors={allSectors}
            platforms={allPlatforms}
          />

          {/* Projects Plot Grid */}
          <div className="grid-12">
            {filteredProjects.map((project) => (
              <PlotCard
                key={project.id}
                kicker={`${project.client.toUpperCase()} · ${project.year}`}
                title={project.title}
                dek={project.oneLineOutcome}
                meta={project.platform.join(' · ')}
                stats={project.outcomeStats?.slice(0, 2)}
                mediaUrl={project.thumbnail}
                aspectRatio="16:10"
                href={`/work/${project.slug}`}
                chips={[{ label: project.sector, variant: 'default' }]}
                colSpan={6}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-secondary">
              <p className="font-mono text-sm">No case studies found matching the selected filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
