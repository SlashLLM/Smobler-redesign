import type { Metadata } from 'next';
import './globals.css';
import { GlobalNav } from '@/components/layout/GlobalNav';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  // Resolves the relative og:image paths the newsroom articles set from `heroImage`.
  metadataBase: new URL('https://smobler.io'),
  title: 'Smobler — Building Worlds Together',
  description:
    'Smobler is an AI-first digital agency doing great while doing good — AI products, Slashboard cost optimization, AI for food security with NUTRA, blockchain for maritime trade, and enterprise digital solutions.',
  keywords: [
    'Smobler',
    'AI agency',
    'AI products',
    'Slashboard',
    'AI cost optimization',
    'AI for food security',
    'NUTRA',
    'digital bunkering',
    'phygital',
    'NOVA',
    'Singapore',
  ],
  openGraph: {
    title: 'Smobler — Building Worlds Together',
    description:
      'Incubating phygital frontier tech with purpose, at the intersection of AI, blockchain and Web3. 35 published experiences, 300K+ plays, 100+ ecosystem partners.',
    url: 'https://smobler.io',
    siteName: 'Smobler',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <GlobalNav />
        <main className="flex-grow nav-offset">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
