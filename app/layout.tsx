import type { Metadata } from 'next';
import './globals.css';
import { GlobalNav } from '@/components/layout/GlobalNav';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  // Resolves the relative og:image paths the newsroom articles set from `heroImage`.
  metadataBase: new URL('https://smobler.io'),
  title: 'Smobler — Building Worlds Together',
  description:
    'Smobler is a digital-first agency doing great while doing good with brands, IPs and communities — educational gaming, AI for food security, blockchain for maritime trade, and phygital events.',
  keywords: [
    'Smobler',
    'educational gaming',
    'The Sandbox',
    'Roblox',
    'AI for food security',
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
