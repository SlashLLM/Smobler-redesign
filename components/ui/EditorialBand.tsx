import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SpatialBackground } from './SpatialBackground';

interface EditorialBandProps {
  eyebrow: string;
  title: string;
  dek: string;
  /* The argument, one paragraph per cell. They stack in the right-hand column
     rather than sitting side by side: two half-width paragraphs of unequal
     length leave a ragged bottom edge and a dead gutter between them. */
  body: string[];
  actionLink?: {
    label: string;
    href: string;
  };
  /* Closing rail under the hairline. A mono caption, or `rail` for markup. */
  footnote?: string;
  footnoteTone?: 'accent' | 'mute';
  rail?: React.ReactNode;
  surfaceClass: string;
  spatial?: boolean;
}

export const EditorialBand: React.FC<EditorialBandProps> = ({
  eyebrow,
  title,
  dek,
  body,
  actionLink,
  footnote,
  footnoteTone = 'mute',
  rail,
  surfaceClass,
  spatial = false,
}) => {
  return (
    <section
      className={`relative ${surfaceClass} section-py-lg border-b border-[var(--line-light)] overflow-hidden`}
    >
      {spatial && <SpatialBackground variant="ambient" />}
      <div className="buildplate-container relative z-10">
        <div className="grid-12">
          {/* Title rail. A five-column measure makes the headline's wrap read
              as a set column rather than an accident of max-w-3xl leaving
              half the row empty. */}
          <div className="col-5">
            <div className="text-label mb-3 font-mono text-[var(--sun-700)] font-bold">
              ▸ {eyebrow}
            </div>
            <h2 className="text-h2 font-display font-bold text-[var(--ink)]">{title}</h2>
            <p className="text-lede mt-4 text-[var(--ink-mute)]">{dek}</p>

            {/* Anchored under the dek, not floated to the far right of the
                band, where it read as unattached to anything. */}
            {actionLink && (
              <Link
                href={actionLink.href}
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-[var(--ink)] hover:text-[var(--sun-700)] group transition-colors"
              >
                <span>{actionLink.label}</span>
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 text-[var(--sun-700)]"
                />
              </Link>
            )}
          </div>

          <div className="col-7-12 space-y-6">
            {body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-body text-[var(--ink-mute)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {rail ? (
          <div className="mt-12">{rail}</div>
        ) : (
          footnote && (
            <div className="mt-12 pt-6 border-t border-[var(--line-light)]">
              <div
                className={`text-label font-mono font-bold ${
                  footnoteTone === 'accent'
                    ? 'text-[var(--sun-700)]'
                    : 'text-[var(--ink-mute)]'
                }`}
              >
                {footnote}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
