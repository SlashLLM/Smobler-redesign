import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { people } from '@/data/people';
import { StatBlock } from '@/components/ui/StatBlock';
import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { SpatialBackground } from '@/components/ui/SpatialBackground';
import { VideoEmbed } from '@/components/ui/VideoEmbed';
import { ProjectGallery } from '@/components/work/ProjectGallery';
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, UserCheck } from 'lucide-react';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const projectCredits = people.filter(
    (person) =>
      project.credits?.includes(person.id) || project.credits?.includes(person.slug)
  );

  /* Most engagements publish no figures, no AI split and no build breakdown, so
     each block below stands down rather than rendering an empty frame. */
  const hasOutcomeStats = (project.outcomeStats?.length ?? 0) > 0;
  const hasNarrative = !!(project.problem || project.solution || hasOutcomeStats);
  const buildSections = (project.buildSections ?? []).filter((s) => s.mediaUrl);

  return (
    <article className="surface-snowfield">
      {/* 1. Full-Bleed Hero Media Header with Yellow Spatial Background */}
      <header className="relative pt-12 pb-20 border-b border-[var(--line-light)] overflow-hidden">
        <SpatialBackground variant="header" />
        <div className="buildplate-container relative z-10">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs text-[var(--ink-mute)] hover:text-[var(--sun-700)] transition-colors uppercase tracking-wider font-bold"
            >
              <ArrowLeft size={14} />
              <span>Back to all case studies</span>
            </Link>
          </div>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-label text-[var(--sun-700)] font-mono font-bold">
              {project.client.toUpperCase()}
            </span>
            <span className="text-[var(--ink-mute)] font-mono text-xs">·</span>
            <span className="text-label text-[var(--ink-mute)] font-mono">
              YEAR {project.year}
            </span>
            <span className="text-[var(--ink-mute)] font-mono text-xs">·</span>
            <Chip variant="status-sun" size="sm">
              {project.sector}
            </Chip>
          </div>

          {/* Display Headline */}
          <h1 className="text-h1 font-display font-bold text-[var(--ink)] max-w-5xl mb-8">
            {project.title}
          </h1>

          {/* Platforms */}
          <div className="flex flex-wrap gap-2 mb-12">
            {project.platform.map((plat, idx) => (
              <Chip key={idx} variant="default" size="sm">
                {plat}
              </Chip>
            ))}
          </div>

          {/* Where the work actually lives — same action row the Worlds page
              uses, so a playable build or a press release is one click away. */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-12">
              {project.links.map((link, idx) => (
                <Button
                  key={idx}
                  href={link.url}
                  variant={idx === 0 ? 'primary' : 'ghost'}
                  size="md"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          )}

          {/* Full-bleed Hero Visual — the trailer takes the slot where the
              project publishes one, and the still stands in where it does not. */}
          {project.videoId ? (
            <VideoEmbed
              videoId={project.videoId}
              title={project.videoTitle ?? project.title}
              poster={project.videoPoster ?? project.heroMedia}
              caption={project.videoTitle}
            />
          ) : (
            project.heroMedia && (
              <div className="relative aspect-[16/9] max-w-4xl mx-auto w-full overflow-hidden bg-white border border-[var(--line-light)] card-lift-snow rounded-xl shadow-sm">
                <Image
                  src={project.heroMedia}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain p-2"
                />
              </div>
            )
          )}
        </div>
      </header>

      {/* 2 & 3. The Problem & Outcome Stats */}
      {hasNarrative && (
        <section className="py-16 md:py-24 border-b border-[var(--line-light)]">
          <div className="buildplate-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              {/* The Problem Statement */}
              {project.problem && (
                <div
                  className={`p-8 bg-white border border-[var(--line-light)] card-lift-snow ${
                    project.solution ? 'lg:col-span-6' : 'lg:col-span-12'
                  }`}
                  style={{ borderTop: '3px solid var(--sun-500)' }}
                >
                  <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-3">
                    01 / THE CHALLENGE
                  </div>
                  <h2 className="text-h3 font-display font-bold text-[var(--ink)] mb-4">
                    The problem
                  </h2>
                  <p className="text-body text-[var(--ink-mute)] text-sm leading-relaxed max-w-none">
                    {project.problem}
                  </p>
                </div>
              )}

              {/* The Solution & Architecture */}
              {project.solution && (
                <div
                  className={`p-8 bg-white border border-[var(--line-light)] card-lift-snow ${
                    project.problem ? 'lg:col-span-6' : 'lg:col-span-12'
                  }`}
                  style={{ borderTop: '3px solid var(--ice-400)' }}
                >
                  <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-3">
                    02 / ARCHITECTURAL APPROACH
                  </div>
                  <h2 className="text-h3 font-display font-bold text-[var(--ink)] mb-4">
                    The solution
                  </h2>
                  <p className="text-body text-[var(--ink)] text-sm md:text-base leading-relaxed max-w-none">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>

            {/* Outcome Stats Block */}
            {hasOutcomeStats && (
              <div className="pt-8">
                <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-4">
                  MEASURED OUTCOMES
                </div>
                <StatBlock stats={project.outcomeStats!} theme="white" />
              </div>
            )}

            {/* What the client said, where the record has them on it. */}
            {project.pullQuote && (
              <figure className="mt-16 m-0 border-l-3 border-[var(--sun-500)] pl-6 md:pl-8 max-w-4xl">
                <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-4">
                  ON THE RECORD
                </div>
                <blockquote className="text-h3 font-display font-medium text-[var(--ink)] leading-snug m-0">
                  “{project.pullQuote.text}”
                </blockquote>
                {(project.pullQuote.attribution || project.pullQuote.logo) && (
                  <figcaption className="flex items-center gap-4 mt-6">
                    {project.pullQuote.logo && (
                      <span className="relative block w-14 h-8 shrink-0">
                        <Image
                          src={project.pullQuote.logo}
                          alt=""
                          fill
                          sizes="56px"
                          className="object-contain"
                        />
                      </span>
                    )}
                    <span>
                      {project.pullQuote.attribution && (
                        <span className="block text-sm font-display font-bold text-[var(--ink)]">
                          {project.pullQuote.attribution}
                        </span>
                      )}
                      {project.pullQuote.role && (
                        <span className="block text-[11px] font-mono text-[var(--ink-mute)]">
                          {project.pullQuote.role}
                        </span>
                      )}
                    </span>
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        </section>
      )}

      {/* Project Highlights Table */}
      {project.projectHighlights && project.projectHighlights.length > 0 && (
        <section className="py-16 md:py-24 border-b border-[var(--line-light)] bg-white">
          <div className="buildplate-container">
            <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-6">
              PROJECT HIGHLIGHTS
            </div>
            <div className="overflow-x-auto border border-[var(--line-light)] rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[var(--snowfield-2)] border-b border-[var(--line-light)]">
                    <th className="py-3 px-4 font-mono text-xs text-[var(--ink-mute)] font-bold w-16">#</th>
                    <th className="py-3 px-4 font-mono text-xs text-[var(--ink-mute)] font-bold">Highlight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line-light)]">
                  {project.projectHighlights.map((item) => (
                    <tr key={item.id} className="hover:bg-[var(--snowfield)] transition-colors">
                      <td className="py-3 px-4 font-mono text-sm text-[var(--sun-700)] font-bold">{item.id}</td>
                      <td className="py-3 px-4 text-sm text-[var(--ink)] font-medium">{item.highlight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 4. Build Sections (Alternating 6/6 Media and Copy) */}
      {buildSections.length > 0 && (
      <section className="py-16 md:py-24 border-b border-[var(--line-light)] bg-white">
        <div className="buildplate-container space-y-20">
          <div className="text-label text-[var(--sun-700)] font-mono font-bold">
            03 / BUILD PROCESS & TECHNICAL MILESTONES
          </div>

          {buildSections.map((section, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Media Column (6 col) */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--snowfield-2)] border border-[var(--line-light)] card-lift-snow">
                    <Image
                      src={section.mediaUrl!}
                      alt={section.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {section.mediaCaption && (
                    <div className="text-[11px] font-mono text-[var(--ink-mute)] mt-2 font-medium">
                      ▸ {section.mediaCaption}
                    </div>
                  )}
                </div>

                {/* Text Column (6 col) */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <h3 className="text-h2 font-display font-bold text-[var(--ink)] mb-4">
                    {section.title}
                  </h3>
                  <p className="text-body text-[var(--ink-mute)] leading-relaxed">
                    {section.description}
                  </p>
                  {/* Chapters that ship separately carry their own entry point. */}
                  {section.link && (
                    <div className="mt-6">
                      <Button href={section.link.url} variant="ghost" size="sm">
                        {section.link.label}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      )}

      {/* 5. Explicit AI Role Breakdown */}
      {project.aiRole && (
      <section className="bg-[var(--snowfield)] py-20 border-b border-[var(--line-light)]">
        <div className="buildplate-container">
          <div className="flex items-center gap-2 mb-4">
            <Chip variant="status-ice" size="sm">
              EXPLICIT AI PROVENANCE
            </Chip>
            <span className="text-label text-[var(--ink-mute)] font-mono font-bold">
              ROLE SPLIT & BOUNDARIES
            </span>
          </div>

          <h2 className="text-h2 font-display font-bold text-[var(--ink)] mb-8">
            How intelligence was deployed on this project
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* What the Model Did */}
            <div className="p-8 bg-white border border-[var(--line-light)] card-lift-snow" style={{ borderTop: '3px solid var(--ice-400)' }}>
              <div className="flex items-center gap-2 text-label text-[var(--ice-400)] font-mono font-bold mb-4">
                <Sparkles size={16} />
                <span>WHAT THE MODEL DID</span>
              </div>
              <p className="text-sm text-[var(--ink)] leading-relaxed mb-6">
                {project.aiRole.modelRole}
              </p>
            </div>

            {/* What Humans Art-Directed */}
            <div className="p-8 bg-white border border-[var(--line-light)] card-lift-snow" style={{ borderTop: '3px solid var(--sun-500)' }}>
              <div className="flex items-center gap-2 text-label text-[var(--sun-700)] font-mono font-bold mb-4">
                <UserCheck size={16} />
                <span>WHAT HUMANS ART-DIRECTED</span>
              </div>
              <p className="text-sm text-[var(--ink)] leading-relaxed mb-6">
                {project.aiRole.humanRole}
              </p>
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="p-6 bg-white border border-[var(--line-light)]">
            <div className="text-label text-[var(--ink-mute)] font-mono mb-3 font-bold">
              TECHNICAL INTEGRATION HIGHLIGHTS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.aiRole.technicalHighlights.map((highlight, hIdx) => (
                <div key={hIdx} className="text-sm text-[var(--ink)] flex items-start gap-2 font-normal leading-relaxed">
                  <span className="text-[var(--sun-700)] font-bold text-xs mt-0.5 select-none">▸</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 6. From the build — the stills the project's own page publishes. */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 md:py-24 border-b border-[var(--line-light)]">
          <div className="buildplate-container">
            <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-6">
              04 / FROM THE BUILD
            </div>
            <ProjectGallery images={project.gallery} projectTitle={project.title} />
          </div>
        </section>
      )}

      {/* 7. Credits (Links to Studio Roster) */}
      {projectCredits.length > 0 && (
      <section className="py-16 md:py-20 border-b border-[var(--line-light)] bg-white">
        <div className="buildplate-container">
          <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-6">
            PROJECT CREDITS & ROSTER
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectCredits.map((member) => (
              <Link
                key={member.id}
                href={`/studio?person=${member.slug}`}
                className="p-5 bg-[var(--snowfield)] border border-[var(--line-light)] card-lift-snow block group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 shrink-0 overflow-hidden bg-[var(--snowfield-2)] border border-[var(--line-light)] media-well">
                    {member.portrait && (
                      <Image
                        src={member.portrait}
                        alt={member.name}
                        fill
                        sizes="48px"
                        className="object-cover duotone-portrait"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-[var(--ink)] group-hover:text-[var(--sun-700)] transition-colors flex items-center gap-1">
                      <span>{member.name}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <div className="text-[10px] font-mono text-[var(--ink-mute)]">
                      {member.role}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 8. Next Case Navigation */}
      <section className="bg-[var(--sun-50)] py-20 border-b border-[var(--line-light)]">
        <div className="buildplate-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-2">
                NEXT CASE STUDY
              </div>
              <h2 className="text-h2 font-display font-bold text-[var(--ink)]">
                {nextProject.title}
              </h2>
              <div className="text-sm text-[var(--ink-mute)] font-mono mt-1">
                {nextProject.client} · {nextProject.year}
              </div>
            </div>

            <Button
              href={`/work/${nextProject.slug}`}
              variant="primary"
              size="lg"
            >
              <span>Explore next case</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
