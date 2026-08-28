'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Person } from '@/types';
import { Drawer } from '../ui/Drawer';
import { Chip } from '../ui/Chip';
import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

interface PersonDrawerProps {
  person: Person | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PersonDrawer: React.FC<PersonDrawerProps> = ({
  person,
  isOpen,
  onClose,
}) => {
  if (!person) return null;

  const linkedProjects = projects.filter((p) =>
    person.projects?.includes(p.slug) || person.projects?.includes(p.id)
  );

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      eyebrow={
        person.office
          ? `OFFICE: ${person.office} · ${person.officeName?.toUpperCase()}`
          : 'BOARD OF ADVISORS'
      }
      title={person.name}
    >
      {/* Portrait */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--snowfield-2)] border border-[var(--line-light)] media-well mb-6">
        {person.portrait && (
          <Image
            src={person.portrait}
            alt={person.portraitAlt}
            fill
            sizes="480px"
            className="object-cover"
          />
        )}
      </div>

      {/* Role & Office Chip */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="font-mono text-xs text-[var(--sun-700)] font-bold">
          {person.role}
        </span>
        {person.office && (
          <Chip variant="office" size="sm">
            {person.office}
          </Chip>
        )}
      </div>

      {/* Bio — published for Dr. Loretta Chen only; the block stands down for
          everyone else rather than showing an empty heading. */}
      {person.bio && (
        <div className="border-t border-[var(--line-light)] pt-4 mb-6">
          <div className="text-label text-[var(--ink-mute)] mb-2 font-mono font-bold">
            BIOGRAPHY
          </div>
          <p className="text-sm text-[var(--ink)] leading-relaxed">
            {person.bio}
          </p>
        </div>
      )}

      {/* Disciplines Chips */}
      <div className="border-t border-[var(--line-light)] pt-4 mb-6">
        <div className="text-label text-[var(--ink-mute)] mb-2 font-mono font-bold">
          DISCIPLINES
        </div>
        <div className="flex flex-wrap gap-1.5">
          {person.disciplines.map((disc, idx) => (
            <Chip key={idx} variant="default" size="sm">
              {disc}
            </Chip>
          ))}
        </div>
      </div>

      {/* Shipped Worlds / Projects */}
      {linkedProjects.length > 0 && (
        <div className="border-t border-[var(--line-light)] pt-4 mb-6">
          <div className="text-label text-[var(--sun-700)] mb-3 font-mono font-bold">
            WORLDS & REALMS SHIPPED
          </div>
          <div className="space-y-2.5">
            {linkedProjects.map((proj) => (
              <Link
                key={proj.id}
                href={`/work/${proj.slug}`}
                onClick={onClose}
                className="flex items-center justify-between p-3 bg-[var(--snowfield)] border border-[var(--line-light)] hover:border-[var(--sun-500)] hover:bg-white transition-all group card-lift-snow"
              >
                <div>
                  <div className="text-xs font-bold text-[var(--ink)] group-hover:text-[var(--sun-700)]">
                    {proj.title}
                  </div>
                  <div className="text-[10px] font-mono text-[var(--ink-mute)]">
                    {proj.client} · {proj.year}
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-[var(--ink-mute)] group-hover:text-[var(--sun-700)] transition-colors"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* External Links */}
      {person.links && person.links.length > 0 && (
        <div className="border-t border-[var(--line-light)] pt-4">
          <div className="text-label text-[var(--ink-mute)] mb-2 font-mono font-bold">
            CONNECT
          </div>
          <div className="flex flex-wrap gap-3">
            {person.links.map((l, idx) => (
              <a
                key={idx}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[var(--ink)] hover:text-[var(--sun-700)] inline-flex items-center gap-1 transition-colors font-semibold"
              >
                <span>{l.label}</span>
                <ArrowUpRight size={11} />
              </a>
            ))}
          </div>
        </div>
      )}
    </Drawer>
  );
};
