import React from 'react';

export const LogoWall: React.FC = () => {
  const logoTiers = [
    {
      category: 'BACKED BY',
      logos: ['ANIMOCA BRANDS', 'THE SANDBOX', 'BRINC', 'ENTERPRISE SINGAPORE', 'IMDA'],
    },
    {
      category: 'PARTNERED WITH',
      logos: [
        'WILDBRAIN',
        'MEDIACORP',
        'SINGAPORE AIRLINES',
        'NTUC INCOME',
        'STARHUB',
        'SG ENABLE',
        'DHI BHUTAN',
        'NYSE',
        'MYSTEN LABS / SUI',
        'THE SINGAPORE MINT',
        'CLAY NATION',
        'CITY OF AUSTIN',
      ],
    },
    {
      category: 'FEATURED IN',
      logos: ['FORBES', 'THE STRAITS TIMES', 'CNA', 'LIANHE ZAOBAO', 'VOGUE', 'HER WORLD'],
    },
  ];

  return (
    <section className="bg-[var(--snowfield)] py-12 border-b border-[var(--line-light)]">
      <div className="buildplate-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[var(--line-light)]">
          {logoTiers.map((tier, idx) => (
            <div key={idx} className={`${idx > 0 ? 'pt-8 lg:pt-0 lg:pl-8' : ''}`}>
              <div className="text-label text-[var(--sun-700)] mb-4 font-mono font-bold">
                ▸ {tier.category}
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {tier.logos.map((logo, lIdx) => (
                  <span
                    key={lIdx}
                    className="font-mono text-xs tracking-wider text-[var(--ink-mute)] hover:text-[var(--ink)] hover:border-b-2 hover:border-[var(--sun-500)] transition-all cursor-default select-none py-1 font-semibold"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
