'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { newsItems } from '@/data/news';
import { TheWire } from '@/components/newsroom/TheWire';
import { NewsFilterBar } from '@/components/newsroom/NewsFilterBar';
import { NewsWall } from '@/components/newsroom/NewsWall';
import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { SpatialBackground } from '@/components/ui/SpatialBackground';
import { ArrowRight } from 'lucide-react';

export default function NewsroomPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const leadItem = newsItems[0];
  const allYears = Array.from(new Set(newsItems.map((n) => n.year)));

  const filteredItems = newsItems.filter((item) => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesYear = selectedYear === 'all' || item.year === selectedYear;
    return matchesType && matchesYear;
  });

  return (
    <div className="surface-snowfield">
      {/* 1. The Wire Live Headline Ticker */}
      <TheWire />

      {/* 2. Lead Story with Yellow Spatial Background */}
      {leadItem && (
        <section className="relative py-16 md:py-24 border-b border-[var(--line-light)] overflow-hidden">
          <SpatialBackground variant="header" />
          <div className="buildplate-container relative z-10">
            <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
              ▸ LEAD STORY & DISPATCH
            </div>

            <div
              className="p-8 md:p-12 bg-[var(--snowfield)] border border-[var(--line-light)] grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center card-lift-snow"
              style={{
                borderTop: '3px solid var(--sun-500)',
              }}
            >
              {/* Text Side */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Chip variant="status-sun" size="sm">
                      {leadItem.type.toUpperCase()}
                    </Chip>
                    <span className="font-mono text-xs text-[var(--ink-mute)] font-medium">
                      {leadItem.publishedAt}
                    </span>
                  </div>

                  <h1 className="text-h2 font-display font-bold text-[var(--ink)] mb-4 leading-tight">
                    {leadItem.title}
                  </h1>

                  <p className="text-body text-[var(--ink-mute)] text-sm leading-relaxed mb-8">
                    {leadItem.excerpt}
                  </p>
                </div>

                <div>
                  <Button href={`/newsroom/${leadItem.slug}`} variant="primary" size="md">
                    <span>Read dispatch</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>

              {/* Lead Image */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--snowfield-2)] border border-[var(--line-light)] media-well">
                  <Image
                    src={leadItem.heroImage || 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1200&auto=format&fit=crop'}
                    alt={leadItem.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Sticky Filter Bar */}
      <NewsFilterBar
        selectedType={selectedType}
        onSelectType={setSelectedType}
        selectedYear={selectedYear}
        onSelectYear={setSelectedYear}
        availableYears={allYears}
      />

      {/* 4. The Wall: Archive Grid with Sticky Vertical Month Markers */}
      <section className="py-12 md:py-16">
        <div className="buildplate-container">
          <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-4">
            ▸ THE WALL ARCHIVE
          </div>

          <NewsWall items={filteredItems} />
        </div>
      </section>

      {/* 5. As Featured In (Publication Logo Wall on White) */}
      <section className="bg-white py-16 border-t border-[var(--line-light)]">
        <div className="buildplate-container">
          <div className="text-label text-[var(--sun-700)] mb-6 font-mono font-bold">
            ▸ AS FEATURED IN GLOBAL PRESS
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {['FORBES ASIA', 'VENTUREBEAT', 'TECH IN ASIA', 'COINDESK', 'BLOOMBERG', 'THE STRAITS TIMES'].map((pub, idx) => (
              <div
                key={idx}
                className="p-4 bg-[var(--snowfield)] border border-[var(--line-light)] text-center font-mono text-xs text-[var(--ink-mute)] hover:text-[var(--ink)] hover:border-[var(--sun-500)] transition-colors select-none font-bold card-lift-snow"
              >
                {pub}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
