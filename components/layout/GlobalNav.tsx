'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'What we do', href: '/what-we-build' },
  { label: 'About', href: '/studio' },
  { label: 'News', href: '/newsroom' },
];

export const GlobalNav: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        backgroundColor: 'var(--sun-500)',
        borderBottom: '2px solid var(--ink)',
      }}
    >
      <div
        className="buildplate-container flex items-center justify-between"
        style={{ height: 'var(--nav-h)' }}
      >
        {/* Smobler Brand Logo */}
        <Link href="/" className="nav-logo flex items-center gap-3 select-none" aria-label="Smobler — home">
          {/* The wordmark is the logotype: it already reads "smobler", so the
              name is not set again in type beside it. Black artwork on the
              sunlight bar, which is the lockup smobler.io itself ships. */}
          <Image
            src="/brand/smobler-logo.png"
            alt="Smobler"
            width={249}
            height={120}
            priority
            className="nav-logo-mark"
            style={{ height: '42px', width: 'auto', transition: 'opacity var(--dur-ui) var(--ease-ui)' }}
          />
        </Link>

        {/* Desktop Nav Items — active state is an ink block, not an underline */}
        {/* gap is tight because each link now carries 14px of its own padding */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link flex items-center"
                style={{
                  fontSize: '15px',
                  fontWeight: isActive ? 700 : 600,
                  /* 44px minimum target — the bar got taller, the links have to
                     grow with it or the nav is still small where it counts */
                  minHeight: '44px',
                  padding: '0 14px',
                  backgroundColor: isActive ? 'var(--ink)' : 'transparent',
                  color: isActive ? 'var(--sun-500)' : 'var(--ink)',
                  transition: 'opacity var(--dur-fast) var(--ease-ui)',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="nav-ghost hidden lg:flex items-center"
            style={{
              minHeight: '46px',
              padding: '0 20px',
              border: '1px solid var(--ink)',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--ink)',
              transition: 'background-color var(--dur-ui) var(--ease-ui), color var(--dur-ui) var(--ease-ui)',
            }}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="nav-cta hidden sm:flex items-center gap-2"
            style={{
              minHeight: '48px',
              padding: '0 24px',
              backgroundColor: 'var(--ink)',
              color: 'var(--white)',
              fontSize: '14px',
              fontWeight: 700,
              boxShadow: 'var(--lift-ink)',
              transition: 'transform var(--dur-ui) var(--ease-ui), box-shadow var(--dur-ui) var(--ease-ui)',
            }}
          >
            Start a project
            <ArrowRight size={14} color="var(--sun-500)" strokeWidth={2.4} />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center"
            style={{
              width: '48px',
              height: '48px',
              border: '1px solid var(--ink)',
              color: 'var(--ink)',
              backgroundColor: 'transparent',
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="md:hidden buildplate-container"
          style={{
            backgroundColor: 'var(--sun-500)',
            borderTop: '1px solid var(--line-on-sun)',
            paddingTop: '8px',
            paddingBottom: '24px',
          }}
        >
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center"
                  style={{
                    minHeight: '56px',
                    fontSize: '17px',
                    fontWeight: isActive ? 700 : 600,
                    color: 'var(--ink)',
                    borderBottom: '1px solid var(--line-on-sun)',
                  }}
                >
                  {isActive && (
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'var(--ink)',
                        marginRight: '10px',
                      }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2"
              style={{
                marginTop: '20px',
                minHeight: '56px',
                backgroundColor: 'var(--ink)',
                color: 'var(--white)',
                fontSize: '16px',
                fontWeight: 700,
                boxShadow: 'var(--lift-ink)',
              }}
            >
              Start a project
              <ArrowRight size={16} color="var(--sun-500)" strokeWidth={2.4} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
