'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  /** YouTube video id, as recorded on the project. */
  videoId: string;
  /** The uploaded video's own title — the play control's accessible label. */
  title: string;
  /** Imported poster frame; falls back to the project hero where one is missing. */
  poster?: string;
  caption?: string;
}

/**
 * A trailer that costs nothing until it is wanted.
 *
 * The poster is served from public/ and the play control is ordinary markup, so
 * the page makes no request to youtube.com — and loads none of its player — until
 * the visitor clicks. Only then is the iframe constructed, with `autoplay=1`, so
 * the click that revealed the player is also the click that starts it.
 */
export const VideoEmbed: React.FC<VideoEmbedProps> = ({
  videoId,
  title,
  poster,
  caption,
}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="m-0">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--ink)] border border-[var(--line-light)] card-lift-snow">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            style={{ border: 0, padding: 0, background: 'transparent' }}
          >
            {poster && (
              <Image
                src={poster}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                style={{
                  opacity: 0.82,
                  transition: 'opacity var(--dur-ui) var(--ease-ui)',
                }}
              />
            )}

            {/* Play target — the ink-block-on-sunlight lockup the nav CTA uses. */}
            <span
              className="absolute left-1/2 top-1/2 flex items-center justify-center"
              style={{
                width: '76px',
                height: '76px',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'var(--sun-500)',
                border: '2px solid var(--ink)',
                boxShadow: 'var(--lift-ink)',
                transition: 'transform var(--dur-ui) var(--ease-ui)',
              }}
            >
              <Play size={26} color="var(--ink)" fill="var(--ink)" strokeWidth={2} />
            </span>

            <span
              className="absolute bottom-0 left-0 right-0 text-left font-mono font-bold"
              style={{
                padding: '14px 18px',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                background: 'linear-gradient(to top, rgba(0,0,0,0.72), transparent)',
              }}
            >
              ▸ Watch the trailer
            </span>
          </button>
        )}
      </div>

      {caption && (
        <figcaption className="text-[11px] font-mono text-[var(--ink-mute)] mt-2 font-medium">
          ▸ {caption}
        </figcaption>
      )}
    </figure>
  );
};
