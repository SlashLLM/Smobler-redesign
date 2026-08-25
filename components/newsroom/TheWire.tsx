'use client';

import React from 'react';
import Link from 'next/link';
import { newsItems } from '@/data/news';

export const TheWire: React.FC = () => {
  const wireItems = newsItems.filter((item) => item.onWire);

  return (
    <div
      className="overflow-hidden h-11 flex items-center select-none"
      style={{
        backgroundColor: 'var(--sun-100)',
        borderBottom: '1px solid var(--line-light)',
      }}
      role="region"
      aria-label="The Wire live headline ticker"
    >
      <div className="flex items-center w-full">
        {/* Left Sticky Label */}
        <div
          className="shrink-0 z-10 px-4 h-11 flex items-center font-mono text-label font-bold tracking-widest"
          style={{
            backgroundColor: 'var(--sun-500)',
            borderRight: '1px solid var(--line-light)',
            color: 'var(--ink)',
          }}
        >
          THE WIRE ▸
        </div>

        {/* Continuous Marquee Ticker Track */}
        <div className="overflow-hidden relative flex-grow flex items-center">
          <div className="ticker-track flex items-center gap-8 pl-4">
            {[...wireItems, ...wireItems].map((item, idx) => (
              <Link
                key={idx}
                href={`/newsroom/${item.slug}`}
                className="inline-flex items-center gap-3 font-mono text-xs text-[var(--ink)] hover:text-[var(--sun-700)] transition-colors whitespace-nowrap group focus:outline-none focus:text-[var(--sun-700)] font-medium"
              >
                <span className="text-[var(--sun-700)] font-bold">
                  {item.publishedAt.slice(0, 6)}
                </span>
                <span>{item.title}</span>
                <span className="text-[var(--ink-mute)] font-normal">▸</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
