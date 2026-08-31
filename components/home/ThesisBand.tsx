import React from 'react';
import { EditorialBand } from '../ui/EditorialBand';

export const ThesisBand: React.FC = () => {
  return (
    <EditorialBand
      surfaceClass="surface-glacier"
      spatial
      eyebrow="THE THESIS"
      title="The next advantage is not access to AI. It is the ability to apply it."
      dek="Models are becoming abundant. Operational intelligence is not."
      body={[
        'The difficult work lies between what technology can do and what organisations can actually deploy: regulation, infrastructure, cost, data, trust, adoption and human behaviour. That is where Smobler works.',
        'We build systems that reduce friction, shorten time to market, automate repetitive work, modernise legacy infrastructure and create new paths to growth.',
      ]}
      footnote="▸ FROM FRONTIER TECHNOLOGY TO OPERATING ADVANTAGE"
      footnoteTone="accent"
    />
  );
};
