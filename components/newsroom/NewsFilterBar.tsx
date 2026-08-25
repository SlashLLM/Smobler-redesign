'use client';

import React from 'react';
import { Chip } from '../ui/Chip';
import { NewsType } from '@/types';

interface NewsFilterBarProps {
  selectedType: string;
  onSelectType: (type: string) => void;
  selectedYear: number | 'all';
  onSelectYear: (year: number | 'all') => void;
  availableYears: number[];
}

export const NewsFilterBar: React.FC<NewsFilterBarProps> = ({
  selectedType,
  onSelectType,
  selectedYear,
  onSelectYear,
  availableYears,
}) => {
  const filterTypes: { label: string; value: string }[] = [
    { label: 'ALL', value: 'all' },
    { label: 'PRESS RELEASES', value: 'press' },
    { label: 'COVERAGE', value: 'coverage' },
    { label: 'PRODUCT NOTES', value: 'product' },
    { label: 'FIELD NOTES', value: 'field' },
  ];

  return (
    <div className="sticky sticky-under-nav z-30 surface-snowfield border-y border-[var(--line-light)] py-4 backdrop-blur-md">
      <div className="buildplate-container flex flex-wrap items-center justify-between gap-4">
        {/* Post Type Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTypes.map((f) => (
            <Chip
              key={f.value}
              variant="filter"
              active={selectedType === f.value}
              onClick={() => onSelectType(f.value)}
              size="md"
            >
              {f.label}
            </Chip>
          ))}
        </div>

        {/* Year Dropdown Filter */}
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--ink-mute)]">
          <span>YEAR:</span>
          <select
            value={selectedYear}
            onChange={(e) => onSelectYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="bg-transparent border border-[var(--line-light)] px-3 py-1.5 text-xs font-mono text-[var(--ink)] focus:border-[var(--sun-500)] outline-none cursor-pointer"
          >
            <option value="all">ALL YEARS</option>
            {availableYears.map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
