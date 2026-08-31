import React from 'react';
import { Button } from '../ui/Button';
import { SpatialBackground } from '../ui/SpatialBackground';

export const SunlightCtaBand: React.FC = () => {
  return (
    <section className="relative surface-sunlight py-20 border-b border-[var(--line-light)] overflow-hidden">
      <SpatialBackground variant="cta" />
      <div className="buildplate-container relative z-10">
        <div className="max-w-4xl">
          <div className="text-label text-[var(--ink)] mb-4 font-mono font-bold tracking-widest">
            ▸ TELL US THE CONSTRAINT
          </div>
          <h2 className="text-display text-[var(--ink)] font-display font-bold leading-[0.94] mb-6">
            Build what the market will need next.
          </h2>
          <p className="text-lede text-[var(--ink)] text-lg max-w-2xl mb-8 opacity-90">
            Tell us the constraint. We will help determine what technology, if any, should solve it.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="/contact"
              variant="glacier"
              size="lg"
            >
              Start a conversation
            </Button>
            <Button
              href="mailto:hello@smobler.io"
              external
              variant="ghost"
              size="lg"
              className="border-[var(--ink)] text-[var(--ink)] hover:bg-[rgba(11,14,18,0.06)]"
            >
              hello@smobler.io
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
