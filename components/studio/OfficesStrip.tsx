'use client';

import React, { useState, useEffect } from 'react';
import { offices } from '@/data/offices';

export const OfficesStrip: React.FC = () => {
  const [times, setTimes] = useState<Record<string, string>>({});

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-y border-[var(--line-light)]">
      {offices.map((office) => (
        <div
          key={office.code}
          className="p-5 bg-white border border-[var(--line-light)] flex flex-col justify-between card-lift-snow"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-[var(--ink)] font-bold tracking-wider">
              [{office.code}] {office.city}
            </span>
            <span className="font-mono text-xs text-[var(--ink)] tabular-nums bg-[var(--sun-100)] px-2 py-0.5 border border-[rgba(255,209,0,0.5)] font-semibold">
              {times[office.code] || 'SYNCING'}
            </span>
          </div>
          <div className="text-xs text-[var(--ink-mute)] font-mono mb-2">
            {office.country}
          </div>
          <div className="text-[11px] text-[var(--ink-mute)] leading-relaxed">
            {office.address}
          </div>
        </div>
      ))}
    </div>
  );
};
