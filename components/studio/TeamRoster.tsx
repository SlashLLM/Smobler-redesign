'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { people } from '@/data/people';
import { openRoles } from '@/data/openRoles';
import { Person, OfficeCode, Discipline } from '@/types';
import { Chip } from '../ui/Chip';
import { PersonDrawer } from './PersonDrawer';
import { ArrowUpRight } from 'lucide-react';

export const TeamRoster: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [selectedOffice, setSelectedOffice] = useState<string>('all');
  const [activePerson, setActivePerson] = useState<Person | null>(null);

  const disciplines: { label: string; value: string }[] = [
    { label: 'ALL DISCIPLINES', value: 'all' },
    { label: 'LEADERSHIP', value: 'Leadership' },
    { label: 'TECHNOLOGY', value: 'Technology' },
    { label: 'OPERATIONS', value: 'Operations' },
    { label: 'STUDIO', value: 'Studio' },
    { label: 'COMMUNICATIONS', value: 'Communications' },
    { label: 'PRODUCTION', value: 'Production' },
    { label: 'DESIGN', value: 'Design' },
    { label: 'ADVISORY', value: 'Advisory' },
  ];

  const officeCodes: { label: string; value: string }[] = [
    { label: 'ALL HUBS', value: 'all' },
    { label: 'SG (SINGAPORE)', value: 'SG' },
    { label: 'NA (HONOLULU)', value: 'NA' },
    { label: 'LATAM (SÃO PAULO)', value: 'LATAM' },
  ];

  const filteredPeople = people.filter((person) => {
    const matchesDiscipline =
      selectedDiscipline === 'all' ||
      person.disciplines.includes(selectedDiscipline as Discipline);
    const matchesOffice =
      selectedOffice === 'all' || person.office === selectedOffice;
    return matchesDiscipline && matchesOffice;
  });

  const filteredOpenRoles = openRoles.filter((role) => {
    const matchesDiscipline =
      selectedDiscipline === 'all' || role.discipline === selectedDiscipline;
    const matchesOffice =
      selectedOffice === 'all' || role.office === selectedOffice;
    return matchesDiscipline && matchesOffice;
  });

  return (
    <div>
      {/* Filter Section */}
      <div className="mb-10 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {disciplines.map((d) => (
            <Chip
              key={d.value}
              variant="filter"
              active={selectedDiscipline === d.value}
              onClick={() => setSelectedDiscipline(d.value)}
              size="md"
            >
              {d.label}
            </Chip>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--line-light)]">
          <span className="text-label text-[var(--ink-mute)] mr-2 font-mono">
            HUB:
          </span>
          {officeCodes.map((o) => (
            <Chip
              key={o.value}
              variant="filter"
              active={selectedOffice === o.value}
              onClick={() => setSelectedOffice(o.value)}
              size="sm"
            >
              {o.label}
            </Chip>
          ))}
        </div>
      </div>

      {/* The Roster: 4-Up Grid with 1px Visible Plot Boundaries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 plot-grid-bordered">
        {/* Render People Plots */}
        {filteredPeople.map((person) => (
          <div
            key={person.id}
            onClick={() => setActivePerson(person)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActivePerson(person);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View profile of ${person.name}, ${person.role}`}
            className="plot-cell-bordered person-card p-6 bg-white hover:bg-[var(--sun-50)] transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[var(--sun-500)]"
            style={{
              boxShadow: 'var(--lift-card-snow)',
            }}
          >
            {/* Portrait (1:1 square aspect from smobler.io/team) */}
            <div className="relative aspect-square w-full overflow-hidden mb-4 bg-[var(--snowfield-2)] border border-[var(--line-light)] media-well">
              {person.portrait && (
                <Image
                  src={person.portrait}
                  alt={person.portraitAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover duotone-portrait"
                />
              )}
            </div>

            {/* Name & Role */}
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-base font-display font-bold text-[var(--ink)] group-hover:text-[var(--sun-700)] transition-colors">
                {person.name}
              </h3>
            </div>
            <div className="text-label text-[var(--ink-mute)] font-mono text-[11px] mb-3">
              {person.role}
            </div>

            <div className="text-[10px] font-mono text-[var(--sun-700)] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>VIEW DOSSIER</span>
              <ArrowUpRight size={10} />
            </div>
          </div>
        ))}

        {/* Render Open Role Dashed Plots */}
        {filteredOpenRoles.map((role) => (
          <Link
            key={role.id}
            href={`/studio/careers#${role.id}`}
            className="plot-cell-bordered p-6 bg-[var(--sun-50)] border-2 border-dashed border-[var(--sun-500)] hover:bg-[var(--sun-100)] transition-all flex flex-col justify-between group"
            style={{
              boxShadow: 'var(--lift-card-snow)',
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Chip variant="status-sun" size="sm">
                  OPEN ROLE
                </Chip>
                <Chip variant="office" size="sm">
                  {role.office}
                </Chip>
              </div>

              <div className="text-label text-[var(--sun-700)] font-mono font-bold mb-2">
                PLOT AVAILABLE
              </div>

              <h3 className="text-base font-display font-bold text-[var(--ink)] group-hover:text-[var(--sun-700)] transition-colors mb-2">
                {role.title}
              </h3>

              <p className="text-xs text-[var(--ink-mute)] line-clamp-3 leading-relaxed mb-4">
                {role.description}
              </p>
            </div>

            <div className="text-xs font-mono text-[var(--sun-700)] font-bold flex items-center justify-between pt-4 border-t border-[var(--line-light)]">
              <span>APPLY FOR PLOT</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Slide-over Dossier Drawer */}
      <PersonDrawer
        person={activePerson}
        isOpen={!!activePerson}
        onClose={() => setActivePerson(null)}
      />
    </div>
  );
};
