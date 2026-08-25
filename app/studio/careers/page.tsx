import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { openRoles } from '@/data/openRoles';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { SpatialBackground } from '@/components/ui/SpatialBackground';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers & Open Plots | Smobler',
  description: 'Join Smobler as an AI systems engineer, voxel artist, or spatial producer. Build persistent virtual worlds across Singapore, Austin, São Paulo, and London.',
};

export default function CareersPage() {
  const values = [
    {
      title: 'Judgment over hype',
      description: 'We test generative AI pipelines under real multiplayer server physics before recommending them to clients. We value empirical evidence over abstract capability claims.',
    },
    {
      title: 'Global by design',
      description: 'Distributed teams across 4 continents. We work asynchronously with high autonomy, clear deliverables, and respectful overlap hours.',
    },
    {
      title: 'Craft and rigor',
      description: 'Voxel constraints require mathematical precision. We balance strict polygon budgets with artistic beauty and responsive animation curves.',
    },
    {
      title: 'Shared upside',
      description: 'Transparent equity, competitive compensation, and direct performance distributions tied to our proprietary IP and ecosystem milestones.',
    },
  ];

  return (
    <div className="surface-snowfield">
      {/* Header with Yellow Spatial Background */}
      <section className="relative py-20 border-b border-[var(--line-light)] overflow-hidden">
        <SpatialBackground variant="header" />
        <div className="buildplate-container relative z-10">
          <div className="mb-6">
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 font-mono text-xs text-[var(--ink-mute)] hover:text-[var(--sun-700)] transition-colors uppercase tracking-wider font-bold"
            >
              <ArrowLeft size={14} />
              <span>Back to studio</span>
            </Link>
          </div>

          <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
            ▸ JOIN THE COLLECTIVE
          </div>

          <h1 className="text-h1 font-display font-bold text-[var(--ink)] max-w-4xl mb-4">
            Build the next generation of thinking worlds.
          </h1>

          <p className="text-lede text-[var(--ink-mute)] max-w-2xl text-lg">
            We are hiring builders who thrive at the intersection of neural intelligence, spatial geometry, and high-performance game engineering.
          </p>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-16 md:py-24 border-b border-[var(--line-light)]">
        <div className="buildplate-container">
          <SectionHeader
            eyebrow="AVAILABLE VACANCIES"
            title="Open plots"
            dek="Explore available positions across our Singapore HQ and international remote hubs."
            theme="snowfield"
          />

          <div className="space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.id}
                id={role.id}
                className="p-8 bg-white border border-[var(--line-light)] card-lift-snow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[var(--line-light)] mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Chip variant="status-sun" size="sm">
                        {role.discipline}
                      </Chip>
                      <Chip variant="office" size="sm">
                        {role.office} · {role.officeName}
                      </Chip>
                      <Chip variant="default" size="sm">
                        {role.employmentType} ({role.locationType})
                      </Chip>
                    </div>

                    <h2 className="text-h2 font-display font-bold text-[var(--ink)]">
                      {role.title}
                    </h2>
                  </div>

                  <Button href={`/contact?role=${role.id}`} variant="primary" size="lg">
                    <span>Apply for this plot</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-6">
                    <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-2">
                      ROLE OVERVIEW
                    </div>
                    <p className="text-body text-[var(--ink-mute)] text-sm leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-2">
                      KEY QUALIFICATIONS
                    </div>
                    <ul className="space-y-2 text-xs font-mono text-[var(--ink)]">
                      {role.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 font-medium">
                          <CheckCircle2 size={14} className="text-[var(--sun-700)] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Culture & Principles */}
      <section className="bg-white py-20 border-b border-[var(--line-light)]">
        <div className="buildplate-container">
          <SectionHeader
            eyebrow="HOW WE WORK"
            title="Studio principles"
            dek="The operational values that keep our distributed collective aligned."
            theme="white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-8 bg-[var(--snowfield)] border border-[var(--line-light)] card-lift-snow"
                style={{ borderTop: '3px solid var(--sun-500)' }}
              >
                <div className="text-label text-[var(--sun-700)] font-mono mb-3 font-bold">
                  0{idx + 1} / PRINCIPLE
                </div>
                <h3 className="text-h3 font-display font-bold text-[var(--ink)] mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-[var(--ink-mute)] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
