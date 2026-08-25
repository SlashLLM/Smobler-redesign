import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PlotCard } from '../ui/PlotCard';
import { SpatialBackground } from '../ui/SpatialBackground';
import { newsItems } from '@/data/news';

export const NewsroomPreview: React.FC = () => {
  const latestNews = newsItems.slice(0, 3);

  return (
    <section className="relative surface-snowfield section-py-lg border-b border-[var(--line-light)] overflow-hidden">
      <SpatialBackground variant="ambient" />
      <div className="buildplate-container relative z-10">
        <SectionHeader
          eyebrow="THE WIRE & DISPATCHES"
          title="From the newsroom"
          dek="Press releases, technical field notes, and international coverage of our spatial AI deployments."
          actionLink={{
            label: 'All news & field notes',
            href: '/newsroom',
          }}
          theme="snowfield"
        />

        <div className="grid-12">
          {latestNews.map((item) => (
            <PlotCard
              key={item.id}
              kicker={`${item.type.toUpperCase()} · ${item.publishedAt}`}
              title={item.title}
              dek={item.excerpt}
              meta={`${item.readTime || '3 min read'} · ${item.tags.join(' · ')}`}
              mediaUrl={item.heroImage}
              aspectRatio="16:10"
              href={`/newsroom/${item.slug}`}
              chips={[{ label: item.type.toUpperCase(), variant: 'default' }]}
              theme="snowfield"
              colSpan={4}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
