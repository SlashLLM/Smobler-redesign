import React from 'react';
import type { Metadata } from 'next';

/**
 * app/contact/page.tsx is a client component (the project-scope form), so its
 * metadata lives here.
 */
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a project with Smobler — AI products, enterprise automation, blockchain and phygital activations. Offices in Singapore and Honolulu.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Smobler',
    description:
      'Start a project with Smobler — AI products, enterprise automation, blockchain and phygital activations. Offices in Singapore and Honolulu.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
