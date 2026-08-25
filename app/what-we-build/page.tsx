import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { SpatialBackground } from '@/components/ui/SpatialBackground';
import { CheckCircle2, Cpu, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What We Build — Capabilities & AI Systems | Smobler',
  description: 'Explaining Smobler’s 6 spatial AI capabilities: World generation, Agentic characters, Creator copilots, Brand experiences, Production pipelines, and Provenance.',
};

export default function WhatWeBuildPage() {
  const capabilities = [
    {
      id: 'world-generation',
      number: '01',
      title: 'World generation',
      tagline: 'Text and reference to playable voxel space. Art-directed, topological sanitization, and deterministic multiplayer physics.',
      icon: Cpu,
      mediaUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      modelRole: 'Synthesizes initial voxel terrain topologies, procedural biome elevation maps, and lighting atmospheric parameters.',
      humanRole: 'Performs topological manifold cleanup, collision boundary tuning, dynamic LOD batching, and artistic lore direction.',
      specs: [
        'Deterministic multiplayer seed replication',
        'Automated non-manifold internal void removal',
        'Sub-second biome transition shaders',
        'Multi-format export (VoxEdit, glTF, FBX, Unity/Unreal USD)',
      ],
      clientUse: 'Used in Clay Nation cross-chain realm and Singapore Govt 12x12 master estate.',
    },
    {
      id: 'agentic-characters',
      number: '02',
      title: 'Agentic characters',
      tagline: 'Autonomous NPCs and companions with persistent conversational memory, spatial awareness, and brand-safe voice parameters running live in-engine.',
      icon: Sparkles,
      mediaUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      modelRole: 'Runs real-time LLM inference for dialogue, long-term memory retrieval (vector memory store), and situational mood adjustments.',
      humanRole: 'Defines character backstory, personality boundaries, hard ethical guardrails, and voice acting cadence calibration.',
      specs: [
        'Local / cloud hybrid inference streaming (< 180ms time-to-first-token)',
        'Vector episodic memory retention per visiting player avatar',
        'Spatial audio proximity localization and lip-sync phoneme generation',
        'Strict brand safety and prompt injection firewall filters',
      ],
      clientUse: 'Deployed across Ichorium Wars tactical commanders and Yeti Realm mountain guides.',
    },
    {
      id: 'creator-copilots',
      number: '03',
      title: 'Creator copilots',
      tagline: 'Tooling that lets UGC creators ship faster. Extends Smobler’s work creating sustainable livelihoods for digital artists.',
      icon: Workflow,
      mediaUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      modelRole: 'Automates 2D-to-voxel trait synthesis, procedural rigging suggestions, and automated UV texture unwrapping.',
      humanRole: 'Reviews character appeal, tunes squash-and-stretch animation curves, and ensures polygon budget adherence.',
      specs: [
        'Batch avatar generation up to 10,000 unique trait combinations',
        'Automated bone weighting for humanoid and quadruped skeletons',
        'Real-time polygon decimation and draw-call analyzer',
      ],
      clientUse: 'Powered the Clay Nation 10,000 avatar conversion and Cobbleland creator asset marketplace.',
    },
    {
      id: 'brand-experiences',
      number: '04',
      title: 'Brand AI experiences',
      tagline: 'Conversational activations, live broadcast synchronization, and interactive narrative worlds for enterprise clients.',
      icon: Zap,
      mediaUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
      modelRole: 'Coordinates dynamic audio-reactive visuals, synchronized live broadcast lighting cues, and multi-lingual user engagement tracking.',
      humanRole: 'Directs virtual camera choreography, stage production design, and executive stakeholder narrative alignment.',
      specs: [
        'Sub-80ms broadcast television synchronization bridge',
        'High-density server clustering supporting 25K avatar instances per node',
        'Dynamic sponsorship overlay and interactive minigame telemetry',
      ],
      clientUse: 'Live national countdown for Mediacorp Singapore and City of Austin interactive music district.',
    },
    {
      id: 'pipelines-moderation',
      number: '05',
      title: 'Pipelines & moderation',
      tagline: 'Automated asset pipelines, safety layers, and server load balancing — the unglamorous part that keeps a public world open.',
      icon: ShieldCheck,
      mediaUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      modelRole: 'Scans text, voice, and uploaded 3D assets in real time for toxic behavior, hate speech, and malicious geometry.',
      humanRole: 'Reviews edge-case escalation tickets, tunes moderation thresholds, and audits security compliance logs.',
      specs: [
        'Multi-lingual real-time toxicity classification in 32 languages',
        'Automated geometry bounding box collision validation',
        'Continuous automated performance profiling and crash telemetry',
      ],
      clientUse: 'Enforces safety standards across all public Sandbox estates and civic charity activations.',
    },
    {
      id: 'provenance-ownership',
      number: '06',
      title: 'Provenance & ownership',
      tagline: 'On-chain cryptographic attribution for generated assets, automated creator revenue splits, and cross-world asset sovereignty.',
      icon: CheckCircle2,
      mediaUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
      modelRole: 'Generates deterministic cryptographic hashes and metadata fingerprints for all model-generated spatial outputs.',
      humanRole: 'Authors legal licensing terms, sets smart-contract royalty allocation splits, and audits treasury distribution.',
      specs: [
        'Instant multi-signature creator revenue distribution',
        'Cross-chain asset verification oracle on Polygon and Ethereum',
        'Gas-free player inventory staking protocol via SNOW dApp',
      ],
      clientUse: 'Powering the SNOW token ecosystem and decentralized creator economy.',
    },
  ];

  return (
    <div className="surface-snowfield">
      {/* Hero Header with Yellow Spatial Background */}
      <section className="relative py-20 border-b border-[var(--line-light)] overflow-hidden">
        <SpatialBackground variant="header" />
        <div className="buildplate-container relative z-10">
          <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
            ▸ CAPABILITIES & TECHNICAL SYSTEMS
          </div>
          <h1 className="text-h1 font-display font-bold text-[var(--ink)] max-w-4xl mb-6">
            Spatial intelligence, engineered for production.
          </h1>
          <p className="text-lede text-[var(--ink-mute)] max-w-2xl">
            Smobler’s advantage is not that we call a model. It’s that we’ve shipped 20+ persistent worlds and know exactly what breaks when you put generated content in front of real players.
          </p>
        </div>
      </section>

      {/* Deep-Dive Capabilities List */}
      <section className="py-16 md:py-24">
        <div className="buildplate-container space-y-20">
          {capabilities.map((cap, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = cap.icon;

            return (
              <div
                key={cap.id}
                id={cap.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center p-8 md:p-12 card-lift-snow bg-white"
              >
                {/* Visual Media Column */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--snowfield-2)] border border-[var(--line-light)] media-well">
                    <Image
                      src={cap.mediaUrl}
                      alt={cap.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 p-3 bg-[var(--snowfield-2)] border-l-3 border-[var(--sun-500)]">
                    <div className="text-label text-[var(--ink-mute)] font-mono font-bold mb-1">
                      Deployed at
                    </div>
                    <p className="text-body text-sm text-[var(--ink-mute)] leading-relaxed">
                      {cap.clientUse}
                    </p>
                  </div>
                </div>

                {/* Content & Specs Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={18} className="text-[var(--sun-700)]" />
                    <span className="text-label text-[var(--sun-700)] font-mono font-bold">
                      CAPABILITY {cap.number}
                    </span>
                  </div>

                  <h2 className="text-h2 font-display font-bold text-[var(--ink)] mb-4">
                    {cap.title}
                  </h2>

                  <p className="text-body text-[var(--ink-mute)] mb-6 leading-relaxed">
                    {cap.tagline}
                  </p>

                  {/* AI vs Human Split Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-5 bg-[var(--snowfield)] border border-[var(--line-light)]">
                    <div>
                      <div className="text-label text-[var(--ice-400)] font-mono font-bold mb-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--ice-400)]" />
                        WHAT THE MODEL DOES
                      </div>
                      <p className="text-body text-sm text-[var(--ink)] leading-relaxed">
                        {cap.modelRole}
                      </p>
                    </div>

                    <div>
                      <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[var(--sun-500)]" />
                        WHAT HUMANS ART-DIRECT
                      </div>
                      <p className="text-body text-sm text-[var(--ink)] leading-relaxed">
                        {cap.humanRole}
                      </p>
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <div className="text-label text-[var(--ink-mute)] font-mono mb-2 font-bold">
                      SYSTEM SPECIFICATIONS
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--ink)]">
                      {cap.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-[var(--sun-700)] font-bold shrink-0">▸</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-white py-20 border-t border-[var(--line-light)]">
        <div className="buildplate-container text-center max-w-2xl mx-auto">
          <h2 className="text-h2 font-display font-bold text-[var(--ink)] mb-4">
            Need a tailored spatial pipeline?
          </h2>
          <p className="text-body text-[var(--ink-mute)] mb-8">
            We collaborate with enterprise engineering teams to integrate custom AI world tools, character runtimes, and Web3 settlement layers.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Start technical scoping
          </Button>
        </div>
      </section>
    </div>
  );
}
