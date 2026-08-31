import { ImageResponse } from 'next/og';

/** iOS home-screen mark. Same treatment as app/icon.tsx at the size iOS wants. */
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          fontSize: 128,
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
