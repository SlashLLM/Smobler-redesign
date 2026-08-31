/**
 * Single source of truth for anything that has to name the site absolutely —
 * canonicals, sitemap `<loc>` entries, robots' sitemap pointer, and the `@id`
 * values the JSON-LD graph links itself together with.
 *
 * Route metadata should pass *relative* paths to `alternates.canonical` and
 * `openGraph.url` and let `metadataBase` in app/layout.tsx resolve them; the
 * absolute helpers here are for the places Next does no resolution of its own.
 */

export const SITE_URL = 'https://smobler.io';
export const SITE_NAME = 'Smobler';

/** The X handle the footer links, in the form `twitter:site` expects. */
export const TWITTER_HANDLE = '@smoblerstudios';

/** Resolve a site-relative path against the production origin. */
export const absoluteUrl = (path: string): string =>
  new URL(path, SITE_URL).toString();

/**
 * The studio's published channels, mirroring the CHANNELS column in
 * components/layout/Footer.tsx. Feeds `sameAs` on the Organization schema,
 * which is how search engines reconcile the entity across platforms.
 */
export const SOCIAL_PROFILES = [
  'https://x.com/smoblerstudios',
  'https://www.linkedin.com/company/smobler',
  'https://instagram.com/smobler',
  'https://www.youtube.com/@smobler',
  'https://tiktok.com/@smobler.io',
  'https://www.facebook.com/smoblerstudios',
  'https://medium.com/@smobler.io',
] as const;

/** Stable `@id`s so every schema on the site points at one Organization node. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
