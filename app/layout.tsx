import type { Metadata } from 'next';
import './globals.css';
import { GlobalNav } from '@/components/layout/GlobalNav';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Smobler — AI World Studio',
  description: 'Smobler is an AI world studio. We build persistent virtual worlds, agentic characters, and spatial economies for brands, governments, and visionary IP holders.',
  keywords: ['AI world studio', 'spatial computing', 'voxel architecture', 'The Sandbox', 'metaverse studio', 'Singapore tech', 'agentic NPCs'],
  openGraph: {
    title: 'Smobler — AI World Studio',
    description: 'We build worlds that think back. 20+ persistent worlds shipped with models inside them.',
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
