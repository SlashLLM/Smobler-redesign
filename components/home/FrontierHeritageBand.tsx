import React from 'react';
import { EditorialBand } from '../ui/EditorialBand';

/* The closing triad is the doc's statement of the role that survives every
   technology cycle. Set as three divided cells so the uneven clause lengths
   read as a deliberate rail rather than three fragments adrift on a row. */
const role = [
  'Understand what is coming.',
  'Build what matters.',
  'Make it useful.',
];

export const FrontierHeritageBand: React.FC = () => {
  return (
    <EditorialBand
      surfaceClass="surface-snowfield"
      spatial
      eyebrow="OUR FRONTIER HERITAGE"
      title="We have always built ahead of the curve."
      dek="Before applied AI became ubiquitous, Smobler was building immersive worlds, blockchain infrastructure and new models of digital participation."
      actionLink={{ label: 'Explore the archive', href: '/work' }}
      body={[
        'Our work has ranged from global IP to accessibility initiatives, Web3 infrastructure and NOVA — our platform connecting technology, capital, culture and community.',
        'That frontier instinct remains part of Smobler. The technology changes. Our role does not.',
      ]}
      rail={
        <div className="editorial-triad">
          {role.map((clause) => (
            <div
              key={clause}
              className="font-display font-bold text-[var(--ink)] tracking-tight"
              style={{ fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', lineHeight: 1.15 }}
            >
              {clause}
            </div>
          ))}
        </div>
      }
    />
  );
};
