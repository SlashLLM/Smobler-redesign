import React from 'react';

export const LogoWall: React.FC = () => {
  const logoTiers = [
    {
      category: 'BACKED BY',
      logos: [
        { name: 'ANIMOCA BRANDS', url: 'https://www.animocabrands.com' },
        { name: 'THE SANDBOX', url: 'https://www.sandbox.game' },
        { name: 'BRINC', url: 'https://www.brinc.io' },
        { name: 'ENTERPRISE SINGAPORE', url: 'https://www.enterprisesg.gov.sg' },
        { name: 'IMDA', url: 'https://www.imda.gov.sg' },
      ],
    },
    {
      category: 'PARTNERED WITH',
      logos: [
        { name: 'WILDBRAIN', url: 'https://www.wildbrain.com' },
        { name: 'MEDIACORP', url: 'https://www.mediacorp.sg' },
        { name: 'SINGAPORE AIRLINES', url: 'https://www.singaporeair.com' },
        { name: 'NTUC INCOME', url: 'https://www.income.com.sg' },
        { name: 'STARHUB', url: 'https://www.starhub.com' },
        { name: 'SG ENABLE', url: 'https://sgenable.sg' },
        { name: 'DHI BHUTAN', url: 'https://www.dhi.bt' },
        { name: 'NYSE', url: 'https://www.nyse.com' },
        { name: 'MYSTEN LABS / SUI', url: 'https://mystenlabs.com' },
        { name: 'THE SINGAPORE MINT', url: 'https://www.singaporemint.com' },
        { name: 'CLAY NATION', url: 'https://www.claynation.io' },
        { name: 'CITY OF AUSTIN', url: 'https://www.austintexas.gov' },
      ],
    },
    {
      category: 'FEATURED IN',
      logos: [
        { name: 'FORBES', url: 'https://www.forbes.com' },
        { name: 'THE STRAITS TIMES', url: 'https://www.straitstimes.com' },
        { name: 'CNA', url: 'https://www.channelnewsasia.com' },
        { name: 'LIANHE ZAOBAO', url: 'https://www.zaobao.com.sg' },
        { name: 'VOGUE', url: 'https://www.vogue.sg' },
        { name: 'HER WORLD', url: 'https://www.herworld.com' },
      ],
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
                  <a
                    key={lIdx}
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-wider text-[var(--ink-mute)] hover:text-[var(--ink)] hover:border-b-2 hover:border-[var(--sun-500)] transition-all cursor-pointer py-1 font-semibold inline-flex items-center gap-1 group"
                  >
                    <span>{logo.name}</span>
                    <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-[var(--sun-700)] font-bold">↗</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

