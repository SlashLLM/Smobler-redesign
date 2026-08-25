import React from 'react';

interface SpatialBackgroundProps {
  variant?: 'hero' | 'ambient' | 'header' | 'cta';
  className?: string;
  showCoordinates?: boolean;
}

export const SpatialBackground: React.FC<SpatialBackgroundProps> = ({
  variant = 'ambient',
  className = '',
  showCoordinates = true,
}) => {
  if (variant === 'hero') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {/* Base Rich Sunlight Radial Gradient Mesh */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 10% 10%, #FFE04D 0%, #FFD100 45%, #E6BC00 100%)',
          }}
        />

        {/* Ambient Top-Left Solar Flare / Glow Pulse */}
        <div
          className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full animate-sun-pulse"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.45) 0%, rgba(255, 224, 77, 0.3) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Secondary Warm Ambient Glow Orb */}
        <div
          className="absolute top-1/3 -right-24 w-[500px] h-[500px] rounded-full animate-sun-pulse"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 240, 150, 0.25) 0%, rgba(230, 188, 0, 0.15) 50%, transparent 70%)',
            filter: 'blur(50px)',
            animationDelay: '3s',
          }}
        />

        {/* 48px Spatial Coordinate Precision Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(11, 14, 18, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11, 14, 18, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Diagonal Isometric Ray Accents */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 95px,
                rgba(11, 14, 18, 0.02) 95px,
                rgba(11, 14, 18, 0.02) 96px
              )
            `,
          }}
        />

        {/* Architectural HUD Crosshairs */}
        {showCoordinates && (
          <>
            {/* Precision Crosshair (+) Markers at Grid Nodes */}
            <svg
              className="absolute inset-0 w-full h-full animate-crosshair"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="var(--ink)" strokeWidth="1.2" opacity="0.35">
                <path d="M 48 44 L 48 52 M 44 48 L 52 48" />
                <path d="M 480 92 L 480 100 M 476 96 L 484 96" />
                <path d="M 960 44 L 960 52 M 956 48 L 964 48" />
                <path d="M 1248 140 L 1248 148 M 1244 144 L 1252 144" />
                <path d="M 288 236 L 288 244 M 284 240 L 292 240" />
                <path d="M 768 188 L 768 196 M 764 192 L 772 192" />
              </g>
            </svg>
          </>
        )}
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {/* Soft Sunlight Top-to-Bottom Wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, var(--sun-50) 0%, rgba(255, 253, 240, 0.4) 65%, #FFFFFF 100%)',
          }}
        />

        {/* Ambient Top-Left Sunlight Wash */}
        <div
          className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 209, 0, 0.22) 0%, rgba(255, 224, 77, 0.08) 50%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />

        {/* 36px Precision Spatial Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 209, 0, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 209, 0, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Micro-dot Cluster Highlight */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full"
          style={{
            backgroundImage:
              'radial-gradient(rgba(230, 188, 0, 0.2) 1.2px, transparent 1.2px)',
            backgroundSize: '18px 18px',
            maskImage:
              'linear-gradient(to left, rgba(0,0,0,1) 0%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to left, rgba(0,0,0,1) 0%, transparent 100%)',
          }}
        />

        {/* Subtle Crosshairs */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="var(--sun-700)" strokeWidth="1" opacity="0.3">
            <path d="M 36 32 L 36 40 M 32 36 L 40 36" />
            <path d="M 540 68 L 540 76 M 536 72 L 544 72" />
            <path d="M 1080 32 L 1080 40 M 1076 36 L 1084 36" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'cta') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {/* Energetic Sunlight Mesh */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 90% 10%, #FFE04D 0%, #FFD100 50%, #E6BC00 100%)',
          }}
        />

        {/* Floating Solar Pulse */}
        <div
          className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full animate-sun-pulse"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 224, 77, 0.25) 45%, transparent 70%)',
            filter: 'blur(35px)',
          }}
        />

        {/* Kinetic Isometric Matrix Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(11, 14, 18, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11, 14, 18, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Diagonal Ray Lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 79px,
                rgba(11, 14, 18, 0.03) 79px,
                rgba(11, 14, 18, 0.03) 80px
              )
            `,
          }}
        />

        {/* HUD Crosshairs */}
        <svg
          className="absolute inset-0 w-full h-full animate-crosshair"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="var(--ink)" strokeWidth="1.2" opacity="0.3">
            <path d="M 40 36 L 40 44 M 36 40 L 44 40" />
            <path d="M 720 76 L 720 84 M 716 80 L 724 80" />
            <path d="M 1200 40 L 1200 48 M 1196 44 L 1204 44" />
          </g>
        </svg>
      </div>
    );
  }

  // Default: Ambient Wash for Light / Snowfield Content Sections
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Top-Left Ambient Sunlight Radial Wash */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 209, 0, 0.15) 0%, rgba(255, 224, 77, 0.05) 50%, transparent 70%)',
          filter: 'blur(45px)',
        }}
      />

      {/* Subtle Micro-Dot Matrix Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(230, 188, 0, 0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.7,
        }}
      />
    </div>
  );
};
