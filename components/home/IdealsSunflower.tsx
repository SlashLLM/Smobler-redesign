'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const IdealsSunflower: React.FC = () => {
  return (
    <section className="relative bg-white section-py-lg border-b border-[var(--line-light)] overflow-hidden">
      {/* Yellow Sunlight Top Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[4px]" 
        style={{ backgroundColor: 'var(--sun-500)' }} 
      />

      <div className="buildplate-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Header Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-label font-mono text-[var(--sun-700)] font-bold px-2.5 py-1 bg-[var(--sun-100)] border border-[rgba(255,209,0,0.4)] rounded-full">
                OUR PRINCIPLE
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-h1 font-display text-[var(--ink)] font-bold mb-4 tracking-tight leading-tight uppercase">
              Technology should expand human possibility.
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl font-medium text-[var(--ink)] mb-4 leading-snug">
              We believe intelligence and responsibility belong together.
            </p>

            {/* Extended Paragraph */}
            <p className="text-body text-[var(--ink-mute)] mb-8 leading-relaxed">
              Our systems are designed with human oversight, transparency and practical usefulness in mind. Not technology for technology’s sake. Technology that improves how people work, build, trade, learn and create.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/studio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[var(--ink)] text-[var(--ink)] font-bold text-sm hover:bg-[var(--ink)] hover:text-white transition-all shadow-[4px_4px_0_rgba(11,14,18,0.15)]"
              >
                About the studio
              </Link>

              <Link
                href="/what-we-build"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--sun-500)] text-[var(--ink)] font-bold text-sm hover:bg-[var(--sun-400)] transition-all shadow-[4px_4px_0_rgba(11,14,18,0.15)] gap-2 group"
              >
                What we build
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE SMOBLER IDEALS GRAPHIC */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative py-4">
            <Image
              src="/brand/smobler-ideals.png"
              alt="Smobler Ideals - Sustainability, Leadership, Inclusivity, Access, Diversity"
              width={600}
              height={500}
              className="w-full max-w-[540px] h-auto object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

