import { ImageResponse } from 'next/og';

/**
 * The site shipped with no favicon at all. The brand PNG is a 249×120 wordmark,
 * which letterboxes into an illegible smear at 32px, so the tab mark is drawn
 * here instead: the monogram on Sunlight Yellow, using the same #FFD100 / #0B0E12
 * pair as styles/tokens.css.
 */
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFD100',
          color: '#0B0E12',
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: '-0.04em',
        }}
      >
        S
      </div>
    ),
    size
  );
}
