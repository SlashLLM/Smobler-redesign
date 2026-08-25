'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { SpatialBackground } from '@/components/ui/SpatialBackground';
import { offices } from '@/data/offices';
import { CheckCircle2, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'world-generation',
    budget: '$50k-$150k',
    timeline: '1-3 months',
    message: '',
    preferredOffice: 'SG',
  });

  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    { label: 'AI WORLD GENERATION', value: 'world-generation' },
    { label: 'AGENTIC CHARACTERS & NPCS', value: 'agentic-npcs' },
    { label: 'ENTERPRISE BRAND ACTIVATION', value: 'brand-activation' },
    { label: 'PROPRIETARY IP & GAMING', value: 'gaming-ip' },
    { label: 'WEB3 & SPATIAL ECONOMY', value: 'web3-economy' },
    { label: 'CAREERS / HIRING INQUIRY', value: 'careers' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="surface-snowfield">
      {/* Header with Yellow Spatial Background */}
      <section className="relative py-20 border-b border-[var(--line-light)] overflow-hidden">
        <SpatialBackground variant="header" />
        <div className="buildplate-container relative z-10">
          <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
            ▸ INITIATE A PROJECT SCOPE
          </div>
          <h1 className="text-h1 font-display font-bold text-[var(--ink)] max-w-4xl mb-4">
            Start a project.
          </h1>
          <p className="text-lede text-[var(--ink-mute)] max-w-2xl text-lg">
            Tell us about your spatial concept, platform targets, and timeline. Our systems architects will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Scoping Section */}
      <section className="py-16 md:py-24">
        <div className="buildplate-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Scoping Form (7 Col) */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div
                  className="p-10 bg-white border-2 border-[var(--sun-500)] card-lift-snow"
                >
                  <div className="flex items-center gap-3 text-[var(--sun-700)] font-mono font-bold mb-4">
                    <CheckCircle2 size={24} />
                    <span>SCOPE DOSSIER TRANSMITTED</span>
                  </div>
                  <h2 className="text-h2 font-display font-bold text-[var(--ink)] mb-4">
                    Thank you, {formData.name}.
                  </h2>
                  <p className="text-body text-[var(--ink-mute)] mb-6 leading-relaxed">
                    Your inquiry has been routed to our <span className="font-bold text-[var(--ink)]">[{formData.preferredOffice}]</span> studio leads. We’ll review your project requirements and schedule an initial technical scoping call shortly.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="ghost"
                    size="md"
                  >
                    Submit another inquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 md:p-12 bg-white border border-[var(--line-light)] card-lift-snow space-y-8"
                >
                  {/* Project Type Selection */}
                  <div>
                    <label className="block text-label text-[var(--ink)] font-mono font-bold mb-3">
                      01 / WHAT WOULD YOU LIKE TO BUILD?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((pt) => (
                        <Chip
                          key={pt.value}
                          variant="filter"
                          active={formData.projectType === pt.value}
                          onClick={() => setFormData({ ...formData, projectType: pt.value })}
                          size="md"
                        >
                          {pt.label}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div>
                    <label className="block text-label text-[var(--ink)] font-mono font-bold mb-3">
                      02 / YOUR DETAILS
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[var(--snowfield)] border border-[var(--line-light)] px-4 py-3 text-sm text-[var(--ink)] placeholder-[var(--ink-mute)] focus:border-[var(--sun-500)] outline-none"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Business email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[var(--snowfield)] border border-[var(--line-light)] px-4 py-3 text-sm text-[var(--ink)] placeholder-[var(--ink-mute)] focus:border-[var(--sun-500)] outline-none"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <input
                          type="text"
                          placeholder="Company / Organization / Project"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-[var(--snowfield)] border border-[var(--line-light)] px-4 py-3 text-sm text-[var(--ink)] placeholder-[var(--ink-mute)] focus:border-[var(--sun-500)] outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <label className="block text-label text-[var(--ink)] font-mono font-bold mb-3">
                      03 / PROJECT BRIEF & SCOPE
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about the world you want to build, target platforms, or specific intelligence models needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[var(--snowfield)] border border-[var(--line-light)] p-4 text-sm text-[var(--ink)] placeholder-[var(--ink-mute)] focus:border-[var(--sun-500)] outline-none resize-none"
                    />
                  </div>

                  {/* Preferred Regional Hub */}
                  <div>
                    <label className="block text-label text-[var(--ink)] font-mono font-bold mb-3">
                      04 / PREFERRED REGIONAL STUDIO
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {offices.map((off) => (
                        <button
                          key={off.code}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredOffice: off.code })}
                          className={`p-3 text-left font-mono text-xs border transition-colors cursor-pointer ${
                            formData.preferredOffice === off.code
                              ? 'bg-[var(--sun-500)] border-[var(--sun-500)] text-[var(--ink)] font-bold'
                              : 'bg-[var(--snowfield)] border-[var(--line-light)] text-[var(--ink-mute)] hover:border-[var(--sun-500)]'
                          }`}
                        >
                          <div className="font-bold">[{off.code}]</div>
                          <div className="text-[10px] truncate">{off.city}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <span>Transmit project scope</span>
                    <Send size={16} className="ml-2" />
                  </Button>
                </form>
              )}
            </div>

            {/* Hub Details Sidebar (5 Col) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-label text-[var(--sun-700)] font-mono font-bold">
                DIRECT REGIONAL CONTACTS
              </div>

              {offices.map((office) => (
                <div
                  key={office.code}
                  className="p-6 bg-white border border-[var(--line-light)] card-lift-snow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[var(--sun-700)] font-bold">
                      [{office.code}] {office.city}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--ink-mute)]">
                      {office.timezone}
                    </span>
                  </div>
                  <div className="text-xs text-[var(--ink-mute)] mb-3">
                    {office.address}
                  </div>
                  <a
                    href={`mailto:${office.email}`}
                    className="font-mono text-xs text-[var(--ink)] font-semibold hover:text-[var(--sun-700)] transition-colors"
                  >
                    ▸ {office.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
