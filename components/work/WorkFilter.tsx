'use client';

import React from 'react';
import { Chip } from '../ui/Chip';

interface WorkFilterProps {
  selectedSector: string;
  onSelectSector: (sector: string) => void;
  selectedPlatform: string;
  onSelectPlatform: (platform: string) => void;
  sectors: string[];
  platforms: string[];
}

export const WorkFilter: React.FC<WorkFilterProps> = ({
  selectedSector,
  onSelectSector,
  selectedPlatform,
  onSelectPlatform,
  sectors,
  platforms,
}) => {
  return (
    <div className="space-y-4 mb-12 pb-6 border-b border-[var(--line-light)]">
      {/* Sector Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-label text-[var(--ink-mute)] mr-2 font-mono">
          SECTOR:
        </span>
        <Chip
          variant="filter"
          active={selectedSector === 'all'}
          onClick={() => onSelectSector('all')}
          size="md"
        >
          ALL SECTORS
        </Chip>
        {sectors.map((sec) => (
          <Chip
            key={sec}
            variant="filter"
            active={selectedSector === sec}
            onClick={() => onSelectSector(sec)}
            size="md"
          >
            {sec.toUpperCase()}
          </Chip>
        ))}
      </div>

      {/* Platform Filters */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--line-light)]">
        <span className="text-label text-[var(--ink-mute)] mr-2 font-mono">
          PLATFORM:
        </span>
        <Chip
          variant="filter"
          active={selectedPlatform === 'all'}
          onClick={() => onSelectPlatform('all')}
          size="sm"
        >
          ALL PLATFORMS
        </Chip>
        {platforms.map((plat) => (
          <Chip
            key={plat}
            variant="filter"
            active={selectedPlatform === plat}
            onClick={() => onSelectPlatform(plat)}
            size="sm"
          >
            {plat.toUpperCase()}
          </Chip>
        ))}
      </div>
    </div>
  );
};
