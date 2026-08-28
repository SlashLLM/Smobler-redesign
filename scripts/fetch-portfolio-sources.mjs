/**
 * Pulls the portfolio layer off smobler.io — the 16 dedicated project pages that
 * carry long-form copy, chapter cards, a client pull-quote, an image gallery and
 * a hero YouTube trailer — so data/projects.ts can be written from what the site
 * actually says rather than from the deck's paraphrase.
 *
 * Dev-only. Writes nothing into the repo — output lands in the directory given by
 * --out (default: ./.portfolio-sources, which is gitignored).
 *
 *   node scripts/fetch-portfolio-sources.mjs [--out DIR] [--only SLUG]
 *
 * The pages are Webflow, so the markup is identical across all sixteen and can be
 * addressed by its `uui-`/`brix---` class names rather than by document order.
 * Images ship a `-p-<width>` srcset ladder; the largest rung at or under 1600w is
 * recorded, because the originals run to 3MB apiece and the site never displays
 * them at that size. Everything is UTF-8 with typographic quotes already, which
 * is what the data files use, so no transcoding happens here.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

const ORIGIN = 'https://smobler.io';

/**
 * Source page → the slug it lands on in data/projects.ts. Two of them (3verest,
 * sephia) have no entry yet and exist locally only as data/worlds.ts worlds.
 */
const PAGES = [
  ['teletubbies-custard-chaos', 'teletubbies-custard-chaos'],
  ['bhutanverse', 'bhutanverse'],
  ['3verest', '3verest'],
  ['sephia', 'sephia'],
  ['equalverse', 'equalverse'],
  ['a11y-park', 'a11y-park'],
  ['8sian-town', '8sian-town'],
  ['peace-sanctuary', 'peace-sanctuary'],
  ['sonik-satellitez', 'sonik-satellitez'],
  ['dreamscape-by-snack', 'dreamscape'],
  ['lets-celebrate-2024', 'lets-celebrate-2024'],
  ['lky100', 'lky100'],
  ['saving-claybox', 'saving-claybox'],
  ['pomeverse', 'pomeverse'],
  ['robin-ai', 'robin-ai'],
  ['digital-bunkering', 'digital-bunkering'],
];

/** Site chrome that appears on every page and is never project imagery. */
const CHROME = /Smobler_logo|Favicon|webclip|untitled-ui-logo/i;

const MAX_WIDTH = 1600;

function parseArgs(argv) {
  const args = { out: path.join(ROOT, '.portfolio-sources'), only: null };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--out') args.out = path.resolve(argv[(i += 1)]);
    else if (argv[i] === '--only') args.only = argv[(i += 1)];
  }
  return args;
}

function decode(str) {
  return str
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8217;/g, '’')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

/** Splits a Webflow rich-text blob on its `<br/><br/>` paragraph breaks. */
function paragraphs(str) {
  return decode(str)
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\n/g, ' ').trim())
    .filter(Boolean);
}

/**
 * Picks the widest srcset rung at or under MAX_WIDTH. Falls back to `src`, which
 * is what the smaller assets carry — Webflow only generates the ladder above a
 * threshold, so roughly a fifth of the images have no `-p-` variant at all.
 */
function bestImage(tag) {
  const srcset = tag.match(/srcset="([^"]*)"/)?.[1];
  const src = tag.match(/\ssrc="([^"]*)"/)?.[1] ?? null;
  if (!srcset) return src;
  let best = null;
  for (const part of srcset.split(',')) {
    const [url, w] = part.trim().split(/\s+/);
    const width = parseInt(w, 10);
    if (!url || Number.isNaN(width) || width > MAX_WIDTH) continue;
    if (!best || width > best.width) best = { url, width };
  }
  return best?.url ?? src;
}

function imgTags(html) {
  return html.match(/<img\b[^>]*>/gi) ?? [];
}

/** Everything between an opening tag carrying `cls` and the matching close. */
function sectionsWithClass(html, tag, cls) {
  const out = [];
  const open = new RegExp(`<${tag}\\b[^>]*class="[^"]*\\b${cls}\\b[^"]*"[^>]*>`, 'gi');
  const step = new RegExp(`<${tag}\\b[^>]*>|</${tag}>`, 'gi');
  let m;
  while ((m = open.exec(html)) !== null) {
    step.lastIndex = m.index + m[0].length;
    let depth = 1;
    let s;
    while (depth > 0 && (s = step.exec(html)) !== null) {
      depth += s[0][1] === '/' ? -1 : 1;
    }
    out.push(html.slice(m.index, depth === 0 ? step.lastIndex : html.length));
  }
  return out;
}

function textOf(html, tag, cls) {
  const re = new RegExp(`<${tag}\\b[^>]*class="[^"]*\\b${cls}\\b[^"]*"[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
  const m = html.match(re);
  return m ? decode(m[1]) : null;
}

function rawOf(html, tag, cls) {
  const re = new RegExp(`<${tag}\\b[^>]*class="[^"]*\\b${cls}\\b[^"]*"[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
  return html.match(re)?.[1] ?? null;
}

/** The hero trailer: a Webflow YouTube embed, whose iframe title is the real one. */
function parseVideo(html) {
  const block = html.match(/w-embed-youtubevideo[\s\S]{0,600}?<\/iframe>/i)?.[0];
  if (!block) return { videoId: null, videoTitle: null };
  const videoId = block.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/)?.[1] ?? null;
  const videoTitle = block.match(/title="([^"]*)"/)?.[1] ?? null;
  return { videoId, videoTitle: videoTitle ? decode(videoTitle) : null };
}

function parseQuote(html) {
  const [block] = sectionsWithClass(html, 'section', 'uui-section_testimonial02');
  if (!block) return null;
  const text = textOf(block, 'h3', 'uui-heading-medium-5');
  if (!text) return null;
  const logoTag = imgTags(block).find((t) => /uui-testimonial02_logo/.test(t));
  return {
    text,
    attribution: textOf(block, 'div', 'uui-heading-tiny-2'),
    role: textOf(block, 'div', 'uui-text-size-medium-6'),
    logoUrl: logoTag ? bestImage(logoTag) : null,
  };
}

/** The chapter cards — 3VEREST is the only page that carries all five. */
function parseChapters(html) {
  return sectionsWithClass(html, 'div', 'uui-layout35_content')
    .map((card) => {
      const title = textOf(card, 'h3', 'uui-heading-small-2');
      if (!title) return null;
      const imageTag = imgTags(card).find((t) => /uui-layout35_image/.test(t));
      const anchor = card.match(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/i);
      return {
        title,
        description: textOf(card, 'div', 'uui-text-size-medium-4'),
        imageUrl: imageTag ? bestImage(imageTag) : null,
        link: anchor ? { label: decode(anchor[2]), url: anchor[1] } : null,
      };
    })
    .filter(Boolean);
}

function parseGallery(html) {
  const urls = [];
  for (const grid of sectionsWithClass(html, 'div', 'brix---grid-gallery-v6')) {
    for (const tag of imgTags(grid)) {
      const url = bestImage(tag);
      if (url && !CHROME.test(url) && !urls.includes(url)) urls.push(url);
    }
  }
  return urls;
}

/**
 * The lede: title, tagline, body copy and the "Read more" / "Play now" action
 * beside it.
 *
 * Two shapes exist. The game pages set the copy as one rich-text blob broken by
 * `<br/><br/>`; the two product pages (robin-ai, digital-bunkering) use a Webflow
 * rich-text field with real `<p>` tags under a hero that also carries a tagline.
 */
function parseLede(html) {
  const links = [];
  for (const block of sectionsWithClass(html, 'div', 'uui-button-row-\\d+')) {
    const re = /<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
    let m;
    while ((m = re.exec(block)) !== null) {
      const label = decode(m[2]);
      if (label && m[1].startsWith('http') && !links.some((l) => l.url === m[1])) {
        links.push({ label, url: m[1] });
      }
    }
  }

  const body = rawOf(html, 'div', 'uui-text-size-large-5');
  if (body) {
    return {
      title: textOf(html, 'h2', 'uui-heading-medium-5'),
      tagline: null,
      paragraphs: paragraphs(body),
      links,
    };
  }

  const [rich] = sectionsWithClass(html, 'div', 'uui-text-rich-text');
  return {
    title: textOf(html, 'h1', 'uui-heading-xlarge-2'),
    tagline: textOf(html, 'div', 'uui-text-size-xlarge-2'),
    paragraphs: rich
      ? (rich.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi) ?? []).map(decode).filter(Boolean)
      : [],
    links,
  };
}

async function fetchPage(slug) {
  const url = `${ORIGIN}/${slug}`;
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, Accept: 'text/html,application/xhtml+xml' },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  if (/404 - Page not found/.test(html)) throw new Error('404 page');
  return html;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  fs.mkdirSync(args.out, { recursive: true });

  const pages = PAGES.filter(([source]) => !args.only || source.includes(args.only));
  const manifest = {};
  const failures = [];

  for (const [source, slug] of pages) {
    try {
      const html = await fetchPage(source);
      // The page chrome carries its own headings and images; strip nav and footer
      // before parsing so the lede regexes cannot latch onto them.
      const body = html
        .replace(/[\s\S]*?<\/nav>/i, '')
        .replace(/<footer[\s\S]*$/i, '')
        .replace(/<section class="uui-section_layout37"[\s\S]*$/i, '');

      const lede = parseLede(body);
      const entry = {
        sourceUrl: `${ORIGIN}/${source}`,
        slug,
        ...lede,
        ...parseVideo(body),
        pullQuote: parseQuote(body),
        chapters: parseChapters(body),
        galleryUrls: parseGallery(body),
      };
      manifest[slug] = entry;
      fs.writeFileSync(
        path.join(args.out, `${slug}.json`),
        JSON.stringify(entry, null, 2),
        'utf8'
      );
      console.log(
        `OK      ${slug.padEnd(28)} ${String(entry.paragraphs.length).padStart(2)}¶  ` +
          `video=${entry.videoId ?? '—'.padEnd(11)}  quote=${entry.pullQuote ? 'y' : 'n'}  ` +
          `chapters=${entry.chapters.length}  gallery=${entry.galleryUrls.length}`
      );
    } catch (err) {
      failures.push({ slug, source, reason: err.message });
      console.log(`FAILED  ${slug.padEnd(28)} — ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, 400));
  }

  fs.writeFileSync(
    path.join(args.out, 'manifest.json'),
    JSON.stringify(manifest, null, 2),
    'utf8'
  );
  console.log(`\n${pages.length - failures.length}/${pages.length} fetched → ${args.out}`);
  if (failures.length) console.log(`${failures.length} failed; see the log above`);
}

main();
