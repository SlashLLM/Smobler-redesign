import React from 'react';
import type { Metadata } from 'next';

/**
 * app/newsroom/page.tsx is a client component (type and year filters), so its
 * metadata lives here. Article pages under `[slug]` override every field via
 * `generateMetadata`, canonical included.
 */
export const metadata: Metadata = {
  /* See app/work/layout.tsx — a segment layout owns the template for its
     children. Article pages opt out with `title.absolute`, since their titles
     already carry "· Smobler Newsroom". */
  title: {
    default: 'Newsroom',
    template: '%s | Smobler',
  },
  description:
    'Press releases, media coverage and field notes from Smobler — product launches, partnerships and the studio in the press.',
  alternates: {
    canonical: '/newsroom',
  },
  openGraph: {
    title: 'Newsroom | Smobler',
    description:
      'Press releases, media coverage and field notes from Smobler — product launches, partnerships and the studio in the press.',
    url: '/newsroom',
    type: 'website',
  },
};

export default function NewsroomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
