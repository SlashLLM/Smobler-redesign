import React from 'react';

interface LogoItem {
  name: string;
  url: string;
  src: string;
  heightPx: number;
  className?: string;
}

const investedLogos: LogoItem[] = [
  {
    name: 'Brinc',
    url: 'https://www.brinc.io',
    src: '/logos/brinc.svg',
    heightPx: 36,
  },
  {
    name: 'Animoca Brands',
    url: 'https://www.animocabrands.com',
    src: '/logos/animoca.svg',
    heightPx: 34,
  },
  {
    name: 'Sui Foundation',
    url: 'https://sui.io',
    src: '/logos/sui-foundation.svg',
    heightPx: 30,
  },
  {
    name: 'Mysten Labs',
    url: 'https://mystenlabs.com',
    src: '/logos/mystenlabs.webp',
    heightPx: 34,
    className: 'rounded-md',
  },
];

const supportedLogos: LogoItem[] = [
  {
    name: 'BLOCK71',
    url: 'https://block71.co',
    src: '/logos/cropped-LogoBlock71.png',
    heightPx: 48,
  },
  {
    name: 'Enterprise Singapore',
    url: 'https://www.enterprisesg.gov.sg',
    src: '/logos/enterprise_singapore_full_colour_logo.svg',
    heightPx: 36,
  },
  {
    name: 'IMDA',
    url: 'https://www.imda.gov.sg',
    src: '/logos/45d45448-2de8-424a-ae25-cf45b181e3d9.webp',
    heightPx: 38,
  },
  {
    name: 'Plug and Play',
    url: 'https://www.plugandplaytechcenter.com',
    src: '/logos/pnp-logo.svg',
    heightPx: 34,
  },
  {
    name: 'ScaleUp inBrazil',
    url: 'https://scaleupinbrazil.com',
    src: '/logos/scaleup-brazil.svg',
    heightPx: 32,
  },
];

export const LogoWall: React.FC = () => {
  return (
    <section className="bg-[var(--snowfield)] py-10 md:py-12 border-b border-[var(--line-light)]">
      <div className="buildplate-container flex flex-col gap-8 md:gap-10">
        {/* Row 1: Invested in by */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
          <div className="w-40 shrink-0 font-sans text-xs md:text-sm font-semibold text-[var(--ink-mute)] uppercase tracking-wider">
            Invested in by
          </div>
          <div className="logo-row flex-grow">
            {investedLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-105 opacity-90 hover:opacity-100 focus:outline-none flex items-center"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  style={{ height: `${logo.heightPx}px`, maxHeight: `${logo.heightPx}px` }}
                  className={`w-auto object-contain block max-w-[220px] ${logo.className || ''}`}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-[var(--line-light)] opacity-60" />

        {/* Row 2: Supported by */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
          <div className="w-40 shrink-0 font-sans text-xs md:text-sm font-semibold text-[var(--ink-mute)] uppercase tracking-wider">
            Supported by
          </div>
          <div className="logo-row flex-grow">
            {supportedLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-105 opacity-90 hover:opacity-100 focus:outline-none flex items-center"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  style={{ height: `${logo.heightPx}px`, maxHeight: `${logo.heightPx}px` }}
                  className={`w-auto object-contain block max-w-[220px] ${logo.className || ''}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};




