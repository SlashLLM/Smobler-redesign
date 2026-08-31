import React from 'react';
import { NewsItem } from '@/types';
import { PlotCard } from '../ui/PlotCard';

interface NewsWallProps {
  items: NewsItem[];
}

export const NewsWall: React.FC<NewsWallProps> = ({ items }) => {
  // Group news items by month and year
  const groupedByMonth = items.reduce((acc, item) => {
    const key = `${item.month} ${item.year}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, NewsItem[]>);

  const monthKeys = Object.keys(groupedByMonth);

  if (items.length === 0) {
    return (
      <div className="py-20 text-center text-secondary">
        <p className="font-mono text-sm">No stories found matching your selected filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-16 py-12">
      {monthKeys.map((monthKey) => {
        const monthItems = groupedByMonth[monthKey];
        const [month, year] = monthKey.split(' ');

        return (
          <div key={monthKey} className="relative grid grid-cols-12 gap-6 items-start">
            {/* Left Gutter: Sticky Vertical Month Marker */}
            <div className="col-span-12 md:col-span-2 sticky sticky-under-subnav z-20 pb-4 md:pb-0">
              <div className="flex md:flex-col items-center md:items-start gap-2 border-b md:border-b-0 md:border-l-2 border-[var(--sun-500)] pb-2 md:pb-0 md:pl-4">
                <span className="font-display font-bold text-2xl md:text-3xl text-[var(--ink)] tracking-tight">
                  {month}
                </span>
                <span className="font-mono text-xs text-[var(--ink-mute)]">
                  {year}
                </span>
                <span className="font-mono text-[10px] text-[var(--sun-700)] ml-auto md:ml-0 font-semibold">
                  {monthItems.length} {monthItems.length === 1 ? 'ENTRY' : 'ENTRIES'}
                </span>
              </div>
            </div>

            {/* Right plot area: uniform half-width cells */}
            <div className="col-span-12 md:col-span-10 grid grid-cols-1 md:grid-cols-12 gap-6">
              {monthItems.map((item) => {
                /* Every entry on the wall gets the same cell. The `featured`
                   weight used to span all twelve columns, which made one card
                   in a month roughly four times the area of its neighbours and
                   dragged its whole grid row taller. The lead story above the
                   wall already carries that emphasis. */
                const typeLabels: Record<string, string> = {
                  press: 'PRESS RELEASE',
                  coverage: item.publication ? `COVERAGE · ${item.publication.toUpperCase()}` : 'COVERAGE',
                  product: 'PRODUCT NOTE',
                  field: 'FIELD NOTE',
                };

                return (
                  <div key={item.id} className="col-span-1 md:col-span-6">
                    <PlotCard
                      kicker={`${typeLabels[item.type]} · ${item.publishedAt}`}
                      title={item.title}
                      dek={item.excerpt}
                      meta={`${item.readTime || '3 min read'} · ${item.tags.join(' · ')}`}
                      mediaUrl={item.heroImage}
                      aspectRatio="16:10"
                      href={`/newsroom/${item.slug}`}
                      chips={[
                        ...(item.weight === 'featured'
                          ? [{ label: 'FEATURED', variant: 'status-sun' as const }]
                          : []),
                        {
                          label: item.type.toUpperCase(),
                          variant: item.type === 'press' ? 'status-sun' : item.type === 'product' ? 'status-ice' : 'default',
                        },
                      ]}
                      theme="snowfield"
                      colSpan={6}
                      className="news-card"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
