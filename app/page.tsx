import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { LogoWall } from '@/components/home/LogoWall';
import { ThesisBand } from '@/components/home/ThesisBand';
import { CapabilitiesGrid } from '@/components/home/CapabilitiesGrid';
import { FlagshipPlatformsStrip } from '@/components/home/FlagshipPlatformsStrip';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { FrontierHeritageBand } from '@/components/home/FrontierHeritageBand';
import { NewsroomPreview } from '@/components/home/NewsroomPreview';
import { AboutBand } from '@/components/home/AboutBand';
import { ProvenanceBand } from '@/components/home/ProvenanceBand';
import { SunlightCtaBand } from '@/components/home/SunlightCtaBand';

/**
 * The homepage previously carried no metadata of its own, so it and the three
 * client-rendered pages all served the root layout's title verbatim. `title`
 * is set absolutely — the brand name is already in it, and the layout template
 * would otherwise append a second "| Smobler".
 */
export const metadata: Metadata = {
  title: {
    absolute: 'Smobler — AI-First Digital Agency | Building Worlds Together',
  },
  description:
    'Smobler builds AI products, cost-optimization tooling, food-security platforms and blockchain systems for maritime trade. Singapore-born, globally built.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Intelligence, applied. */}
      <HeroSection />

      {/* 2. Glacier 3-Tier Logo Wall */}
      <LogoWall />

      {/* 3. The Thesis */}
      <ThesisBand />

      {/* 4. What We Build: the four pillars */}
      <CapabilitiesGrid />

      {/* 5. Flagship Systems */}
      <FlagshipPlatformsStrip />

      {/* 6. Selected Work: sector rail + featured cases */}
      <FeaturedWork />

      {/* 7. Our Frontier Heritage */}
      <FrontierHeritageBand />

      {/* 8. Insights */}
      <NewsroomPreview />

      {/* 9. About: Singapore-born, globally built */}
      <AboutBand />

      {/* 10. Our Principle */}
      <ProvenanceBand />

      {/* 11. Sunlight Band: CTA */}
      <SunlightCtaBand />
    </>
  );
}
