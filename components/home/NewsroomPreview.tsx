import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PlotCard } from '../ui/PlotCard';
import { SpatialBackground } from '../ui/SpatialBackground';
import { newsItems } from '@/data/news';

/* The questions the published perspectives set out to answer. */
const questions = [
  'How should organisations measure AI ROI?',
  'What happens when AI agents become part of the workforce?',
  'How will AI reshape food, trade and compliance?',
  'Where does blockchain still create genuine economic value?',
  'How should leaders distinguish technological possibility from technological advantage?',
];

export const NewsroomPreview: React.FC = () => {
  const latestNews = newsItems.slice(0, 3);

  return (
    <section className="relative surface-snowfield section-py-lg border-b border-[var(--line-light)] overflow-hidden">
      <SpatialBackground variant="ambient" />
      <div className="buildplate-container relative z-10">
        <SectionHeader
          eyebrow="INSIGHTS"
          title="Ideas for the applied-intelligence era."
          dek="Technology moves quickly. Institutions move differently. Smobler publishes perspectives on the questions leaders increasingly need to answer."
          actionLink={{
            label: 'Explore Smobler Insights',
            href: '/newsroom',
          }}
          theme="snowfield"
        />

        <div className="mb-12 md:mb-16 border-t border-[var(--line-light)]">
          {questions.map((question) => (
            <div
              key={question}
              className="flex items-start gap-3 py-3.5 border-b border-[var(--line-light)]"
            >
              <span className="font-mono text-xs font-bold text-[var(--sun-700)] leading-6 shrink-0">
                ▸
              </span>
              <p className="text-body text-[var(--ink)] m-0">{question}</p>
            </div>
          ))}
        </div>

        <div className="grid-12">
          {latestNews.map((item) => (
            <PlotCard
              key={item.id}
              kicker={`${item.type.toUpperCase()} · ${item.publishedAt}`}
              title={item.title}
              dek={item.excerpt}
              meta={`${item.readTime || '3 min read'} · ${item.tags.join(' · ')}`}
              mediaUrl={item.heroImage}
              mediaPosition={item.heroImagePosition}
              aspectRatio="16:10"
              href={`/newsroom/${item.slug}`}
              chips={[
                ...(item.weight === 'featured'
                  ? [{ label: 'FEATURED', variant: 'status-sun' as const }]
                  : []),
                { label: item.type.toUpperCase(), variant: 'default' as const },
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
