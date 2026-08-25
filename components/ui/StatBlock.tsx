import React from 'react';
import { OutcomeStat } from '@/types';

interface StatBlockProps {
  stats: [OutcomeStat, OutcomeStat, OutcomeStat] | OutcomeStat[];
  className?: string;
  theme?: 'snowfield' | 'glacier' | 'white';
}

export const StatBlock: React.FC<StatBlockProps> = ({
  stats,
  className = '',
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-8 py-8 ${className}`}
      style={{
        borderTop: '2px solid var(--sun-500)',
        borderBottom: '1px solid var(--line-light)',
      }}
    >
      {stats.slice(0, 3).map((stat, idx) => (
        <div key={idx} className="flex flex-col">
          <div
            className="tabular-nums font-display font-bold leading-none tracking-tight text-[var(--ink)]"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            }}
          >
            {stat.value}
          </div>
          <div className="text-label mt-3 text-[var(--ink-mute)] font-mono">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};
