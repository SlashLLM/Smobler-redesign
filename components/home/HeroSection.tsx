'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SpatialBackground } from '../ui/SpatialBackground';

const stats = [
  { value: '20+', label: 'Persistent worlds shipped' },
  { value: '14', label: 'Countries activated' },
  { value: '1.4M+', label: 'Engaged players reached' },
];

/**
 * Isometric skyline. Each tower is a cube column: `cx` is the apex x, `ty` the
 * apex y, and every column runs to the bottom of the viewBox so the band reads
 * as one continuous horizon. Spacing and height are deliberately uneven — an
 * even rhythm reads as wallpaper.
 */
const TOWERS = [
  { cx: 148, ty: 74, tone: 'sun' },
  { cx: 268, ty: 22, tone: 'ink' },
  { cx: 372, ty: 104, tone: 'sun' },
  { cx: 536, ty: 52, tone: 'snow' },
  { cx: 640, ty: 8, tone: 'ink' },
  { cx: 792, ty: 96, tone: 'sun' },
  { cx: 900, ty: 44, tone: 'snow' },
  { cx: 1048, ty: 116, tone: 'sun' },
  { cx: 1160, ty: 34, tone: 'ink' },
  { cx: 1288, ty: 88, tone: 'sun' },
] as const;

const TONES = {
  sun: { top: 'var(--sun-50)', left: 'var(--sun-600)', right: 'var(--sun-400)' },
  ink: { top: 'var(--white)', left: 'var(--ink)', right: 'rgba(11, 14, 18, 0.78)' },
  snow: { top: 'var(--white)', left: 'var(--snowfield-3)', right: 'var(--snowfield)' },
} as const;

const HALF_W = 38;
const HALF_H = 19;
const BASE_Y = 260;

const VoxelSkyline: React.FC = () => (
  <svg
    viewBox={`0 0 1440 ${BASE_Y}`}
    preserveAspectRatio="xMidYMin slice"
    width="100%"
    height="100%"
    aria-hidden="true"
    focusable="false"
    style={{ display: 'block' }}
  >
    {TOWERS.map(({ cx, ty, tone }) => {
      const t = TONES[tone];
      const my = ty + HALF_H;
      const by = ty + HALF_H * 2;
      return (
        <g key={cx} stroke="var(--line-on-sun)" strokeWidth={1.2}>
          <polygon
            points={`${cx},${ty} ${cx + HALF_W},${my} ${cx},${by} ${cx - HALF_W},${my}`}
            fill={t.top}
          />
          <polygon
            points={`${cx - HALF_W},${my} ${cx},${by} ${cx},${BASE_Y} ${cx - HALF_W},${BASE_Y - HALF_H}`}
            fill={t.left}
          />
          <polygon
            points={`${cx + HALF_W},${my} ${cx},${by} ${cx},${BASE_Y} ${cx + HALF_W},${BASE_Y - HALF_H}`}
            fill={t.right}
          />
        </g>
      );
    })}
  </svg>
);

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Rich Yellow Spatial Background with Ambient Pulsing Solar Flares & HUD Crosshairs */}
      <SpatialBackground variant="hero" />

      <div className="buildplate-container relative z-10" style={{ paddingTop: '84px' }}>
        {/* Eyebrow */}
        <div className="flex items-center gap-3" style={{ marginBottom: '34px' }}>
          <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--ink)' }} />
          <span
            className="font-mono"
            style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink-on-sun)' }}
          >
            Singapore · Global AI World Studio
          </span>
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: 'var(--t-hero)',
            lineHeight: 0.86,
            letterSpacing: '-0.045em',
            color: 'var(--ink)',
            maxWidth: '15ch',
            margin: 0,
          }}
        >
          We build worlds that think back.
        </h1>

        {/* Lede and actions share a baseline on desktop, stack on mobile */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          style={{ marginTop: '34px' }}
        >
          <p
            style={{
              fontSize: 'var(--t-body-lg)',
              lineHeight: 1.55,
              color: 'var(--ink-on-sun)',
              maxWidth: '44ch',
              margin: 0,
            }}
          >
            20+ persistent worlds shipped for global brands, governments and IP holders — now
            running deterministic intelligence models inside them.
          </p>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="nav-cta flex items-center gap-3"
              style={{
                minHeight: '58px',
                padding: '0 30px',
                backgroundColor: 'var(--ink)',
                color: 'var(--white)',
                fontSize: '17px',
                fontWeight: 700,
                boxShadow: 'var(--lift-ink-lg)',
                transition:
                  'transform var(--dur-ui) var(--ease-ui), box-shadow var(--dur-ui) var(--ease-ui)',
              }}
            >
              Start a project
              <ArrowRight size={17} color="var(--sun-500)" strokeWidth={2.4} />
            </Link>

            <Link
              href="/work"
              className="hero-secondary flex items-center gap-3"
              style={{
                minHeight: '58px',
                padding: '0 28px',
                backgroundColor: 'var(--white)',
                border: '1px solid var(--ink)',
                color: 'var(--ink)',
                fontSize: '17px',
                fontWeight: 600,
                transition: 'transform var(--dur-ui) var(--ease-ui)',
              }}
            >
              See the work
              <ArrowRight size={17} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>

      {/* Horizon: genuinely cropped by the fold — the band is shorter than the
          artwork, so the towers run off the bottom edge into the proof rail. */}
      <div
        className="relative z-10 hero-horizon"
        style={{ marginTop: '56px', overflow: 'hidden' }}
      >
        <VoxelSkyline />
      </div>

      {/* Proof rail lands on white, directly under the sunlight */}
      <div
        className="relative z-10 grid grid-cols-1 md:grid-cols-3"
        style={{
          backgroundColor: 'var(--white)',
          borderTop: '2px solid var(--ink)',
          borderBottom: '1px solid var(--line-light)',
        }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="hero-stat-cell flex flex-col gap-3">
            <div
              className="font-display tabular-nums"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.125rem)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
              }}
            >
              {stat.value}
            </div>
            <div className="text-label" style={{ color: 'var(--ink-mute)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
