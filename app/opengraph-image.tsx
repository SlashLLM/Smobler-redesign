import { ImageResponse } from 'next/og';

/**
 * The default share card, used by every route that doesn't set its own image —
 * case studies and articles override it from `heroMedia` / `heroImage`.
 *
 * Drawn from the site's own tokens (Snowfield ground, Sunlight rule, Ink type)
 * rather than a bitmap, so it stays correct if the palette moves. Satori
 * supports a narrow CSS subset: flexbox only, literal colours, no custom
 * properties — hence the hard-coded hex values from styles/tokens.css.
 */
export const alt = 'Smobler — an AI-first digital agency building worlds together';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F8F9F7',
          padding: 80,
          borderTop: '24px solid #FFD100',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: '#B38F00',
          }}
        >
          {/* The site's ▸ eyebrow marker is deliberately absent: Satori has no
              glyph for it in the embedded face and its fallback fetch 400s,
              which would render the card with a tofu box. */}
          SMOBLER
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#0B0E12',
            }}
          >
            Building worlds together.
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.35,
              color: '#555E68',
              maxWidth: 900,
            }}
          >
            An AI-first digital agency — AI products, food security, blockchain
            for maritime trade, and phygital activations.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 24,
            color: '#555E68',
          }}
        >
          <div style={{ display: 'flex', color: '#0B0E12', fontWeight: 700 }}>
            smobler.io
          </div>
          <div style={{ display: 'flex', margin: '0 16px', color: '#E2E5DF' }}>
            /
          </div>
          <div style={{ display: 'flex' }}>Singapore · Honolulu</div>
        </div>
      </div>
    ),
    size
  );
}
