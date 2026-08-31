import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { SpatialBackground } from '@/components/ui/SpatialBackground';

/**
 * `notFound()` is called from both dynamic routes; without this file they fell
 * through to the framework default. `noindex` matters as much as the markup —
 * a 404 that gets indexed is how soft-404 penalties start.
 */
export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="surface-snowfield">
      <section className="relative py-32 overflow-hidden">
        <SpatialBackground variant="header" />
        <div className="buildplate-container relative z-10">
          <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
            ▸ ERROR 404
          </div>

          <h1 className="text-h1 font-display font-bold text-[var(--ink)] max-w-3xl mb-4">
            This plot is empty.
          </h1>

          <p className="text-lede text-[var(--ink-mute)] max-w-xl text-lg mb-10">
            The page you asked for has moved, been renamed, or never existed.
            The portfolio and the press archive are both a click away.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/" variant="primary" size="lg">
              Back to home
            </Button>
            <Button href="/work" variant="ghost" size="lg">
              Browse the work
            </Button>
            <Button href="/newsroom" variant="ghost" size="lg">
              Read the newsroom
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
