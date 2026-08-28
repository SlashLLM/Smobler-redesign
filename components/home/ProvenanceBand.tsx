import React from 'react';
import { Chip } from '../ui/Chip';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const ProvenanceBand: React.FC = () => {
  const pillars = [
    {
      title: 'What the model does',
      description: 'Generates HACCP plans and FDA-compliant nutrition labels from a described process, identifies hazards, ranks suppliers, and drafts production SOPs. Every one of those decisions is traceable and clearly explained to the person using it.',
      icon: Sparkles,
      tag: 'MACHINE LAYER',
    },
    {
      title: 'What humans decide',
      description: 'Users can supervise, review and override any AI suggestion at any time. Bias is actively monitored and minimised for fair outcomes, and cultural context — APAC, Native Hawaiian — is built in rather than assumed away.',
      icon: CheckCircle2,
      tag: 'HUMAN JUDGMENT',
    },
    {
      title: 'What we guarantee',
      description: 'Data is protected through secure encryption and strict access controls, and the platform is kept current with every food safety regulation it operates under. Open architecture on Meta Llama, so it stays customisable rather than a black box.',
      icon: ShieldCheck,
      tag: 'SAFEGUARDS',
    },
  ];

  return (
    <section className="bg-white section-py-md border-b border-[var(--line-light)] relative overflow-hidden">
      {/* Subtle Yellow Accent Top Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          backgroundColor: 'var(--sun-500)',
        }}
      />

      <div className="buildplate-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--line-light)]">
          <div className="flex items-center gap-3">
            <Chip variant="status-ice" size="md">
              ETHICAL AI PRACTICE & SAFEGUARDS
            </Chip>
            <span className="text-label text-[var(--ink-mute)] font-mono hidden sm:inline font-bold">
              RESPONSIBLE AI FRAMEWORK
            </span>
          </div>

          <div className="text-xs font-mono text-[var(--ice-400)] font-bold">
            [META LLAMA · OPEN ARCHITECTURE]
          </div>
        </div>

        <div className="max-w-3xl mb-10">
          <h2 className="text-h2 font-display text-[var(--ink)] font-bold mb-3">
            Honest boundaries: what the model decides, and what you do.
          </h2>
          <p className="text-body text-[var(--ink-mute)]">
            Vague AI claims ruin trust — and in food safety and maritime compliance, they cost more than trust. So the split is written down, and the person using the tool always has the last word.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[var(--snowfield)] border border-[var(--line-light)] flex flex-col justify-between card-lift-snow"
                style={{
                  borderTop: '3px solid var(--sun-500)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-label font-mono text-[var(--sun-700)] font-bold">
                      ▸ {pillar.tag}
                    </span>
                    <Icon size={18} className="text-[var(--sun-700)]" />
                  </div>
                  <h3 className="text-h3 font-display text-[var(--ink)] font-bold mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--ink-mute)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
