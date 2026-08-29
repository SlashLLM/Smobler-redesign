import React from 'react';

const investedLogos = [
  {
    name: 'Brinc',
    url: 'https://www.brinc.io',
    src: '/logos/brinc.svg',
    height: 'h-8 md:h-9',
  },
  {
    name: 'The Sandbox',
    url: 'https://www.sandbox.game',
    src: '/logos/sandbox.svg',
    height: 'h-8 md:h-9',
  },
];

const supportedLogos = [
  {
    name: 'BLOCK71',
    url: 'https://block71.co',
    src: '/logos/block71.svg',
    height: 'h-9 md:h-11',
  },
  {
    name: 'Enterprise Singapore',
    url: 'https://www.enterprisesg.gov.sg',
    src: '/logos/enterprise-singapore.svg',
    height: 'h-8 md:h-10',
  },
  {
    name: 'IMDA',
    url: 'https://www.imda.gov.sg',
    src: '/logos/imda.svg',
    height: 'h-8 md:h-10',
  },
  {
    name: 'Plug and Play',
    url: 'https://www.plugandplaytechcenter.com',
    src: '/logos/plugandplay.svg',
    height: 'h-8 md:h-9',
  },
  {
    name: 'ScaleUp inBrazil',
    url: 'https://scaleupinbrazil.com',
    src: '/logos/scaleup-brazil.svg',
    height: 'h-8 md:h-10',
  },
];

export const LogoWall: React.FC = () => {
  return (
    <section className="bg-[var(--snowfield)] py-10 md:py-12 border-b border-[var(--line-light)]">
      <div className="buildplate-container flex flex-col gap-8 md:gap-10">
        {/* Row 1: Invested in by */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
          <div className="w-40 shrink-0 font-sans text-sm md:text-base font-semibold text-[var(--ink-mute)]">
            Invested in by
          </div>
          <div className="flex flex-wrap items-center gap-8 md:gap-14">
            {investedLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-105 opacity-90 hover:opacity-100 focus:outline-none flex items-center shrink-0"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  className={`${logo.height} w-auto object-contain block`}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-[var(--line-light)] opacity-60" />

        {/* Row 2: Supported by */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
          <div className="w-40 shrink-0 font-sans text-sm md:text-base font-semibold text-[var(--ink-mute)]">
            Supported by
          </div>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {supportedLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-105 opacity-90 hover:opacity-100 focus:outline-none flex items-center shrink-0"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  className={`${logo.height} w-auto object-contain block`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



