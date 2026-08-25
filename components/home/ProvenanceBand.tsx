import React from 'react';
import { Chip } from '../ui/Chip';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const ProvenanceBand: React.FC = () => {
  const pillars = [
    {
      title: 'What the model does',
      description: 'Synthesizes initial voxel terrain topologies, generates real-time audio-reactive particle variants, and powers autonomous NPC conversational voice and memory.',
      icon: Sparkles,
      tag: 'MACHINE LAYER',
    },
    {
      title: 'What humans art-direct',
      description: 'Rigid bone rigging, level topology sanitization, multiplayer server load balancing, aesthetic coherence, and spatial accessibility compliance.',
      icon: CheckCircle2,
      tag: 'HUMAN JUDGMENT',
    },
    {
      title: 'Who owns the output',
      description: 'Client IP sovereignty is absolute. Assets, models, and trained parameters are cryptographically anchored on-chain with deterministic royalty contracts.',
      icon: ShieldCheck,
      tag: 'SOVEREIGNTY',
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
              AI PROVENANCE & ATTRIBUTION
            </Chip>
            <span className="text-label text-[var(--ink-mute)] font-mono hidden sm:inline font-bold">
              ETHICAL SPATIAL AI STANDARDS
            </span>
          </div>

          <div className="text-xs font-mono text-[var(--ice-400)] font-bold">
            [DETERMINISTIC VERIFICATION ORACLE v2.4]
          </div>
        </div>

        <div className="max-w-3xl mb-10">
          <h2 className="text-h2 font-display text-[var(--ink)] font-bold mb-3">
            Honest boundaries: What is generated, what is crafted, and who owns it.
          </h2>
          <p className="text-body text-[var(--ink-mute)]">
            Vague AI claims ruin technical trust. At Smobler, we operate an explicit, auditable separation between stochastic generative models and deterministic spatial engineering.
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
