import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { LogoWall } from '@/components/home/LogoWall';
import { CapabilitiesGrid } from '@/components/home/CapabilitiesGrid';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { WorldsStrip } from '@/components/home/WorldsStrip';
import { ProvenanceBand } from '@/components/home/ProvenanceBand';
import { NewsroomPreview } from '@/components/home/NewsroomPreview';
import { StudioPreview } from '@/components/home/StudioPreview';
import { SunlightCtaBand } from '@/components/home/SunlightCtaBand';

export default function HomePage() {
  return (
    <>
      {/* 1. Glacier Hero Section with 1400ms Sun Sweep */}
      <HeroSection />

      {/* 2. Glacier 3-Tier Logo Wall */}
      <LogoWall />

      {/* 3. Snowfield: What We Build (6 AI-led plots) */}
      <CapabilitiesGrid />

      {/* 4. Glacier: Featured Work (1x12 lead + 2x6) */}
      <FeaturedWork />

      {/* 5. Snowfield: Our Worlds (IP Strip) */}
      <WorldsStrip />

      {/* 6. Glacier: Provenance Band (with Ice-400 Signal) */}
      <ProvenanceBand />

      {/* 7. Snowfield: From the Newsroom (3 Plots + View All) */}
      <NewsroomPreview />

      {/* 8. Glacier: The Studio (8 Faces Preview) */}
      <StudioPreview />

      {/* 9. Sunlight Band: CTA */}
      <SunlightCtaBand />
    </>
  );
}
