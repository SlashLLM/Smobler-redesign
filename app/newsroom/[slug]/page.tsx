import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { newsItems } from '@/data/news';
import { Chip } from '@/components/ui/Chip';
import { PlotCard } from '@/components/ui/PlotCard';
import { SpatialBackground } from '@/components/ui/SpatialBackground';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface NewsArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);

  if (!item) {
    notFound();
  }

  const relatedItems = newsItems
    .filter((n) => n.id !== item.id)
    .slice(0, 3);

  const paragraphs = item.body.split('\n\n');

  return (
    <article className="surface-snowfield">
      {/* Article Header with Yellow Spatial Background */}
      <header className="relative py-16 md:py-24 border-b border-[var(--line-light)] overflow-hidden">
        <SpatialBackground variant="header" />
        <div className="buildplate-container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back link */}
            <div className="mb-6">
              <Link
                href="/newsroom"
                className="inline-flex items-center gap-2 font-mono text-xs text-[var(--ink-mute)] hover:text-[var(--sun-700)] transition-colors uppercase tracking-wider font-bold"
              >
                <ArrowLeft size={14} />
                <span>Back to newsroom</span>
              </Link>
            </div>

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Chip variant="status-sun" size="sm">
                {item.type.toUpperCase()}
              </Chip>
              <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--ink-mute)]">
                <Calendar size={12} />
                <span>{item.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--ink-mute)]">
                <Clock size={12} />
                <span>{item.readTime || '3 min read'}</span>
              </div>
              {item.publication && (
                <Chip variant="status-ice" size="sm">
                  VIA {item.publication.toUpperCase()}
                </Chip>
              )}
            </div>

            {/* Display Headline */}
            <h1 className="text-h1 font-display font-bold text-[var(--ink)] leading-tight mb-8">
              {item.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lede text-[var(--ink-mute)] text-lg leading-relaxed">
              {item.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* Featured Hero Visual */}
      {item.heroImage && (
        <div className="buildplate-container pt-12">
          <div className="max-w-4xl mx-auto relative aspect-[16/9] w-full overflow-hidden bg-[var(--snowfield-2)] border border-[var(--line-light)] card-lift-snow">
            <Image
              src={item.heroImage}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Body */}
      <div className="buildplate-container py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-body leading-relaxed text-[var(--ink)] text-base">
            {paragraphs.map((p, pIdx) => {
              if (pIdx === 1) {
                return (
                  <React.Fragment key={pIdx}>
                    <div
                      className="my-10 p-8 border-l-4 border-[var(--sun-500)] text-[var(--ink)]"
                      style={{
                        backgroundColor: 'var(--sun-100)',
                      }}
                    >
                      <blockquote className="font-display font-bold text-xl md:text-2xl text-[var(--ink)] leading-snug">
                        “{item.excerpt}”
                      </blockquote>
                      <div className="text-label text-[var(--sun-700)] mt-4 font-mono font-bold">
                        ▸ KEY TAKEAWAY · SMOBLER DISPATCH
                      </div>
                    </div>
                    <p>{p}</p>
                  </React.Fragment>
                );
              }

              return <p key={pIdx}>{p}</p>;
            })}
          </div>

          {/* Tags & Topics */}
          <div className="mt-12 pt-8 border-t border-[var(--line-light)]">
            <div className="text-label text-[var(--ink-mute)] font-mono mb-3 font-bold">
              FILED UNDER
            </div>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, tIdx) => (
                <Chip key={tIdx} variant="default" size="sm">
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Stories */}
      <section className="bg-white py-16 border-t border-[var(--line-light)]">
        <div className="buildplate-container">
          <div className="text-label text-[var(--sun-700)] mb-8 font-mono font-bold">
            ▸ RELATED DISPATCHES & ARTICLES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedItems.map((rel) => (
              <PlotCard
                key={rel.id}
                kicker={`${rel.type.toUpperCase()} · ${rel.publishedAt}`}
                title={rel.title}
                dek={rel.excerpt}
                meta={rel.readTime || '3 min read'}
                mediaUrl={rel.heroImage}
                aspectRatio="16:10"
                href={`/newsroom/${rel.slug}`}
                chips={[{ label: rel.type.toUpperCase(), variant: 'default' }]}
                colSpan={4}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
