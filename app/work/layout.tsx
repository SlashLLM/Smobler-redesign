import React from 'react';
import type { Metadata } from 'next';

/**
 * app/work/page.tsx is a client component — it holds the sector and platform
 * filter state — and `metadata` exports are server-only. This layout carries
 * the index route's metadata without refactoring a working page.
 *
 * Note that `[slug]` children inherit from here, so each case study sets its
 * own canonical in `generateMetadata`; without that they would all canonicalize
 * to /work and drop out of the index.
 */
export const metadata: Metadata = {
  /* The template has to be restated here, not just in the root layout: a
     segment layout defines the template its own children inherit, so without
     this the twelve case studies render titles with no brand suffix. */
  title: {
    default: 'Work — Case Studies',
    template: '%s | Smobler',
  },
  description:
    'Every Smobler engagement: AI compliance platforms, marketplaces, e-commerce engines, blockchain settlement networks and phygital activations.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Work — Case Studies | Smobler',
    description:
      'Every Smobler engagement: AI compliance platforms, marketplaces, e-commerce engines, blockchain settlement networks and phygital activations.',
    url: '/work',
    type: 'website',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
