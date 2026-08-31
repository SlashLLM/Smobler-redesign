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
  title: 'Careers',
  description:
    'Work with Smobler across AI products, cost optimization, food security, blockchain for maritime trade and phygital events — Singapore and Honolulu.',
  alternates: {
    canonical: '/studio/careers',
  },
  openGraph: {
    title: 'Careers | Smobler',
    description:
      'Work with Smobler across AI products, cost optimization, food security, blockchain for maritime trade and phygital events — Singapore and Honolulu.',
    url: '/studio/careers',
    type: 'website',
  },
};

export default function CareersPage() {
  /* Drawn from the studio's stated positions in the Smobler Global Master Deck
     and the NUTRA deck's ethical AI commitments. */
  const values = [
    {
      title: 'Do good, do well',
      description: 'The studio’s founding premise, and still the filter: work that is commercially serious and does something worth doing. Accessibility, food security, cultural preservation and financial literacy are the brief, not the CSR slide.',
    },
    {
      title: 'Technology with purpose',
      description: 'Smobler was founded on three fault lines the pandemic exposed — creators deemed non-essential, businesses forced to digitise, and consumers wanting engagement they could trust. Every pillar traces back to one of them.',
    },
    {
      title: 'Ethical AI, in writing',
      description: 'Every AI decision traceable and explained. Bias actively monitored. Users able to supervise, review and override any suggestion. Open architecture rather than a black box. These are commitments we publish, not aspirations.',
    },
    {
      title: 'Female-founded, globally distributed',
      description: 'An all-female leadership team running a studio across Singapore and Honolulu, guided by a board of advisors in AI systems, enterprise blockchain, digital bunkering and CPG AI.',
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
            Join us in shaping the future of ethical, immersive phygital tech.
          </h1>

          <p className="text-lede text-[var(--ink-mute)] max-w-2xl text-lg">
            We build across AI products, food security compliance, business automation, blockchain for maritime trade, and phygital events — from Singapore and Honolulu.
          </p>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-16 md:py-24 border-b border-[var(--line-light)]">
        <div className="buildplate-container">
          <SectionHeader
            eyebrow="AVAILABLE VACANCIES"
            title="Open plots"
            dek="Roles across the Singapore HQ and our Honolulu presence."
            theme="snowfield"
          />

          {openRoles.length === 0 && (
            <div className="py-16 text-center">
              <p className="font-mono text-sm text-[var(--ink-mute)] mb-6">
                No plots are open right now. Speculative applications are still welcome.
              </p>
              <Button href="mailto:hello@smobler.io" variant="primary" size="lg">
                <span>Write to hello@smobler.io</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          )}

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
            dek="The positions the studio has committed to publicly, and works to."
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
