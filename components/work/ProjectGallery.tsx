import React from 'react';
import Image from 'next/image';

interface ProjectGalleryProps {
  images: { src: string; alt?: string }[];
  /** Falls back to the project title so every tile carries a real alt. */
  projectTitle: string;
}

/**
 * The screenshots the project's own page publishes, in the order it sets them.
 *
 * Three across on wide viewports, matching the credits grid below it; each tile
 * is a fixed 16:10 well so a mixed set of captures and key art still lines up.
 */
export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  projectTitle,
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    {images.map((image, idx) => (
      <div
        key={image.src}
        className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--snowfield-2)] border border-[var(--line-light)] card-lift-snow"
      >
        <Image
          src={image.src}
          alt={image.alt ?? `${projectTitle} — still ${idx + 1}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
    ))}
  </div>
);
