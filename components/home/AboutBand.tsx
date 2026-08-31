import React from 'react';
import { EditorialBand } from '../ui/EditorialBand';

export const AboutBand: React.FC = () => {
  return (
    <EditorialBand
      surfaceClass="bg-white"
      eyebrow="ABOUT"
      title="Singapore-born. Globally built."
      dek="Smobler is an applied AI and frontier technology company headquartered in Singapore, with a growing presence in the United States."
      actionLink={{ label: 'About the studio', href: '/studio' }}
      body={[
        'We work across disciplines because the problems we solve do not fit neatly inside them. Our teams bring together technology, product, business strategy, design and storytelling to move emerging ideas from possibility to deployment.',
        'Smobler has grown through global innovation ecosystems spanning Singapore, Asia-Pacific and the United States, working with enterprises, public institutions, technology platforms and founders.',
      ]}
      footnote="SINGAPORE · HAWAIʻI · GLOBAL"
    />
  );
};
