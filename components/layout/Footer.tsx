'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { offices } from '@/data/offices';
import { Button } from '../ui/Button';
import { ArrowUpRight, Loader2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [times, setTimes] = useState<Record<string, string>>({});
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  useEffect(() => {
    const updateClocks = () => {
      const newTimes: Record<string, string> = {};
      offices.forEach((office) => {
        try {
          const formatter = new Intl.DateTimeFormat('en-GB', {
            timeZone: office.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          });
          newTimes[office.code] = formatter.format(new Date());
        } catch {
          newTimes[office.code] = '--:--:--';
        }
      });
      setTimes(newTimes);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setNewsletterSubmitting(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (res.ok) {
        setNewsletterSubscribed(true);
        setNewsletterEmail('');
      }
    } catch (err) {
      console.error('Newsletter subscription error:', err);
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <footer className="bg-[var(--snowfield-2)] border-t-2 border-t-[var(--sun-500)] pt-16 pb-12 text-[var(--ink)]">
      <div className="buildplate-container">
        {/* Top Tier: Global Studios & Live Clocks */}
        <div className="mb-16">
          <div className="text-label text-[var(--sun-700)] mb-6 font-mono font-bold">
            ▸ GLOBAL HUBS & LOCAL TIME
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.code}
                className="p-6 bg-white border border-[var(--line-light)] flex flex-col justify-between card-lift-snow"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-label font-mono text-[var(--ink)] font-bold">
                      [{office.code}] {office.city}
                    </span>
                    <span className="font-mono text-xs text-[var(--ink)] tabular-nums bg-[var(--sun-100)] px-2 py-0.5 border border-[rgba(255,209,0,0.5)] font-semibold">
                      {times[office.code] || 'SYNCING'}
                    </span>
                  </div>
                  <div className="text-xs text-[var(--ink-mute)] mb-4 font-mono">
                    {office.country}
                  </div>
                  <p className="text-xs text-[var(--ink-mute)] leading-relaxed mb-4">
                    {office.address}
                  </p>
                </div>
                <a
                  href={`mailto:${office.email}`}
                  className="text-xs font-mono text-[var(--ink)] hover:text-[var(--sun-700)] inline-flex items-center gap-1 transition-colors mt-auto font-semibold"
                >
                  <span>{office.email}</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Tier: Navigation & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[var(--line-light)]">
          {/* Brand Mission Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Same wordmark as the nav — the logotype spells the name, so
                  it isn't set again in type beside it. */}
              <div className="mb-4">
                <Image
                  src="/brand/smobler-logo.png"
                  alt="Smobler"
                  width={249}
                  height={120}
                  style={{ height: '26px', width: 'auto' }}
                />
              </div>
              <p className="text-sm text-[var(--ink-mute)] max-w-md leading-relaxed mb-6">
                Smobler is a digital-first agency doing great while doing good with brands, IPs and communities — incubating phygital frontier tech at the intersection of AI, blockchain and Web3.
              </p>
            </div>
            <div className="text-xs font-mono text-[var(--ink-mute)]">
              SINGAPORE · HONOLULU
            </div>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            <div>
              <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
                PAGES
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/what-we-build" className="text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors">
                    What we do
                  </Link>
                </li>
                <li>
                  <Link href="/studio" className="text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/studio/careers" className="text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/newsroom" className="text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
                CHANNELS
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="https://x.com/smoblerstudios" target="_blank" rel="noopener noreferrer" className="text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors flex items-center gap-1">
                    X <ArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/smobler" target="_blank" rel="noopener noreferrer" className="text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors flex items-center gap-1">
                    LinkedIn <ArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/smobler" target="_blank" rel="noopener noreferrer" className="text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors flex items-center gap-1">
                    Instagram <ArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@smobler" target="_blank" rel="noopener noreferrer" className="text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors flex items-center gap-1">
                    YouTube <ArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://tiktok.com/@smobler.io" target="_blank" rel="noopener noreferrer" className="text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors flex items-center gap-1">
                    TikTok <ArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/smoblerstudios" target="_blank" rel="noopener noreferrer" className="text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors flex items-center gap-1">
                    Facebook <ArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@smobler.io" target="_blank" rel="noopener noreferrer" className="text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors flex items-center gap-1">
                    Medium <ArrowUpRight size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4">
            <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
              THE DISPATCH
            </div>
            <p className="text-xs text-[var(--ink-mute)] leading-relaxed mb-4">
              Notes from the studio on AI innovation, food security compliance, Slashboard, and enterprise digital solutions. Published to Medium first.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-[var(--sun-100)] border border-[var(--sun-500)] text-[var(--ink)] font-mono text-xs font-semibold">
                ▸ SUBSCRIBED TO THE DISPATCH
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white border border-[var(--line-light)] px-3.5 py-2.5 text-sm text-[var(--ink)] placeholder-[var(--ink-mute)] focus:border-[var(--sun-500)] outline-none flex-grow"
                />
                <Button type="submit" variant="primary" size="md" disabled={newsletterSubmitting}>
                  {newsletterSubmitting ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Tier: Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-mute)] font-mono">
          <div>
            © {new Date().getFullYear()} SMOBLER STUDIOS PTE. LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--ink)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--ink)] transition-colors">
              Terms of Service
            </Link>
            <span className="text-[var(--sun-700)] font-bold">BUILT WITH SUNLIGHT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
