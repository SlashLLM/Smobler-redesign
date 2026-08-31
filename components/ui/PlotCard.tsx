import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Chip } from './Chip';

interface PlotCardProps {
  kicker?: string;
  title: string;
  dek?: string;
  /** Single quiet line above the stat rail — platforms, read time, tags. */
  meta?: string;
  /**
   * Up to two headline figures for the card footer. Rendered as display-face
   * numbers over small labels; far more legible than the caps mono run-on
   * that a pipe-joined `meta` string produced.
   */
  stats?: { value: string; label: string }[];
  mediaUrl?: string;
  mediaAlt?: string;
  mediaPosition?: string;
  aspectRatio?: '16:10' | '4:5' | '16:9' | '1:1';
  href?: string;
  chips?: { label: string; variant?: 'default' | 'status-ice' | 'status-sun' | 'office' }[];
  theme?: 'snowfield' | 'glacier' | 'white';
  colSpan?: 3 | 4 | 6 | 8 | 12;
  isClickable?: boolean;
  className?: string;
  badge?: string;
  /**
   * 'stack' puts the media above the copy. 'split' sets them side by side —
   * use it for full-width cards, where a 16:10 well would otherwise render
   * an image as tall as the viewport.
   */
  layout?: 'stack' | 'split';
}

export const PlotCard: React.FC<PlotCardProps> = ({
  kicker,
  title,
  dek,
  meta,
  stats = [],
  mediaUrl,
  mediaAlt = '',
  mediaPosition,
  aspectRatio = '16:10',
  href,
  chips = [],
  colSpan = 6,
  className = '',
  badge,
  layout = 'stack',
}) => {
  const aspectClass = {
    '16:10': 'aspect-[16/10]',
    '4:5': 'aspect-[4/5]',
    '16:9': 'aspect-[16/9]',
    '1:1': 'aspect-square',
  }[aspectRatio];

  const colClass = {
    3: 'col-3',
    4: 'col-4',
    6: 'col-6',
    8: 'col-8',
    12: 'col-12',
  }[colSpan];

  const isSplit = layout === 'split';

  /* Two figures is the most a card footer can carry before the labels wrap
     into an unreadable block. */
  const visibleStats = stats.slice(0, 2);

  const media = mediaUrl && (
    <div
      className={`relative w-full overflow-hidden bg-[var(--snowfield-2)] border border-[var(--line-light)] media-well ${
        isSplit ? 'plot-card-split-media' : `${aspectClass} mb-5`
      }`}
    >
      <Image
        src={mediaUrl}
        alt={mediaAlt || title}
        fill
        quality={95}
        sizes={
          isSplit
            ? '(max-width: 768px) 100vw, 55vw'
            : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        }
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        style={{
          borderRadius: isSplit ? 0 : 'var(--radius-media)',
          ...(mediaPosition ? { objectPosition: mediaPosition } : {}),
        }}
      />
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <Chip variant="status-ice" size="sm">
            {badge}
          </Chip>
        </div>
      )}
    </div>
  );

  const copy = (
    <>
      {/* Kicker & Chips */}
      <div className="flex items-center justify-between gap-2 mb-3">
        {kicker && (
          <div className="text-label font-mono text-[var(--sun-700)] font-bold">
            ▸ {kicker}
          </div>
        )}
        {chips.length > 0 && (
          <div className="flex flex-wrap gap-1.5 ml-auto">
            {chips.map((chip, idx) => (
              <Chip key={idx} variant={chip.variant || 'default'} size="sm">
                {chip.label}
              </Chip>
            ))}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-h3 font-display font-bold mb-3 flex items-start justify-between gap-2 leading-snug text-[var(--ink)] group-hover:text-[var(--sun-700)] transition-colors">
        <span>{title}</span>
        {href && (
          <ArrowUpRight
            size={18}
            className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-[var(--sun-700)]"
          />
        )}
      </h3>

      {/* Dek (Description) */}
      {dek && (
        <p className="text-body text-sm mb-6 line-clamp-3 text-[var(--ink-mute)]">
          {dek}
        </p>
      )}

      {/* Footer: quiet meta line, then the stat rail */}
      {(meta || visibleStats.length > 0) && (
        <div
          /* Split cards size to their copy, so pinning the footer to the
             bottom would just open a gap — only the stacked card needs mt-auto. */
          className={`${isSplit ? '' : 'mt-auto'} pt-4 border-t border-[var(--line-light)]`}
        >
          {meta && (
            <p
              className="text-[var(--ink-mute)] truncate"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.625rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                lineHeight: 1.4,
              }}
            >
              {meta}
            </p>
          )}

          {visibleStats.length > 0 && (
            <div className={`flex items-start ${meta ? 'mt-3' : ''}`}>
              {visibleStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex-1 min-w-0 ${
                    idx > 0 ? 'pl-4 border-l border-[var(--line-light)]' : 'pr-4'
                  }`}
                >
                  <div className="font-display text-[var(--ink)] tabular-nums text-[1.375rem] leading-none">
                    {stat.value}
                  </div>
                  <div
                    className="text-[var(--ink-mute)] mt-1.5"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      lineHeight: 1.35,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );

  const cardContent = isSplit ? (
    <div
      className={`group relative grid grid-cols-1 md:grid-cols-2 h-full overflow-hidden transition-all duration-200 card-lift-snow bg-white ${className}`}
      style={{ borderRadius: 'var(--radius-card)' }}
    >
      {media}
      <div className="flex flex-col justify-center" style={{ padding: '32px' }}>
        {copy}
      </div>
    </div>
  ) : (
    <div
      className={`group relative flex flex-col h-full overflow-hidden transition-all duration-200 card-lift-snow bg-white ${className}`}
      style={{
        borderRadius: 'var(--radius-card)',
        padding: colSpan === 12 ? '32px' : '24px',
      }}
    >
      {media}
      {copy}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`${colClass} block h-full select-none`}>
        {cardContent}
      </Link>
    );
  }

  return <div className={`${colClass} h-full`}>{cardContent}</div>;
};
