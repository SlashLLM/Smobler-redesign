import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PlotCard } from '../ui/PlotCard';
import { projects } from '@/data/projects';

export const FeaturedWork: React.FC = () => {
  const featured = projects.filter((p) => p.isFeatured);
  const leadProject = featured[0];
  const secondaryProjects = featured.slice(1, 3);

  return (
    <section className="bg-white section-py-lg border-b border-[var(--line-light)]">
      <div className="buildplate-container">
        <SectionHeader
          eyebrow="SELECTED WORK"
          title="Featured work"
          dek="Global IP, national governments, a food AI operating system and a blockchain for maritime fuel — 35 published experiences and counting."
          actionLink={{
            label: 'Full portfolio',
            href: '/work',
          }}
          theme="white"
        />

        <div className="grid-12">
          {/* Lead 12-Column Case Study */}
          {leadProject && (
            <PlotCard
              kicker={`${leadProject.client.toUpperCase()} · ${leadProject.year}`}
              title={leadProject.title}
              dek={leadProject.oneLineOutcome}
              meta={leadProject.platform.join(' · ')}
              stats={leadProject.outcomeStats?.slice(0, 2)}
              mediaUrl={leadProject.heroMedia}
              layout="split"
              href={`/work/${leadProject.slug}`}
              chips={[
                { label: leadProject.sector, variant: 'default' },
                { label: 'FEATURED', variant: 'status-sun' },
              ]}
              colSpan={12}
            />
          )}

          {/* Secondary 6-Column Plots */}
          {secondaryProjects.map((project) => (
            <PlotCard
              key={project.id}
              kicker={`${project.client.toUpperCase()} · ${project.year}`}
              title={project.title}
              dek={project.oneLineOutcome}
              meta={project.platform.join(' · ')}
              stats={project.outcomeStats?.slice(0, 2)}
              mediaUrl={project.thumbnail}
              aspectRatio="16:9"
              href={`/work/${project.slug}`}
              chips={[{ label: project.sector, variant: 'default' }]}
              colSpan={6}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
