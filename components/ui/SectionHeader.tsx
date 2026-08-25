import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  dek?: string;
  actionLink?: {
    label: string;
    href: string;
  };
  theme?: 'snowfield' | 'glacier' | 'sunlight' | 'white';
  className?: string;
  headingLevel?: 'h1' | 'h2';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  dek,
  actionLink,
  className = '',
  headingLevel = 'h2',
}) => {
  const HeadingTag = headingLevel;

  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="text-label mb-2.5 font-mono text-[var(--sun-700)] font-bold">
              ▸ {eyebrow}
            </div>
          )}
          <HeadingTag
            className={`${headingLevel === 'h1' ? 'text-h1' : 'text-h2'} font-display font-bold text-[var(--ink)]`}
          >
            {title}
          </HeadingTag>
          {dek && (
            /* .text-lede caps at 34ch, which wraps a section dek into a narrow
               ragged column with dead space beside it. 58ch reads as one line
               of thought at these sizes. */
            <p className="text-lede mt-3 text-[var(--ink-mute)]" style={{ maxWidth: '58ch' }}>
              {dek}
            </p>
          )}
        </div>

        {actionLink && (
          <div className="shrink-0">
            <Link
              href={actionLink.href}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-[var(--ink)] hover:text-[var(--sun-700)] group transition-colors"
            >
              <span>{actionLink.label}</span>
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1 text-[var(--sun-700)]"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
