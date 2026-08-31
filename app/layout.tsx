import type { Metadata } from 'next';
import './globals.css';
import { GlobalNav } from '@/components/layout/GlobalNav';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema } from '@/lib/schema';
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from '@/lib/site';

export const metadata: Metadata = {
  // Resolves the relative og:image paths the newsroom articles set from `heroImage`.
  metadataBase: new URL(SITE_URL),
  /* `default` is what the three client-rendered pages and the homepage would
     otherwise inherit verbatim; `template` gives every child route a unique,
     brand-suffixed title without each one restating the studio name. */
  title: {
    default: 'Smobler — Building Worlds Together',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'An AI-first digital agency doing great while doing good — AI products, cost optimization, food security and blockchain for maritime trade.',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Smobler — Building Worlds Together',
    description:
      'Incubating phygital frontier tech with purpose, at the intersection of AI, blockchain and Web3. 35 published experiences, 300K+ plays, 100+ ecosystem partners.',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },
  /* Explicit rather than implied: `max-image-preview:large` is what gets the
     portfolio's own artwork into image results instead of a thumbnail. */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
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
        {/* One Organization + WebSite node the whole site's schema refers back to. */}
        <JsonLd data={organizationSchema()} />
        <GlobalNav />
        <main className="flex-grow nav-offset">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
