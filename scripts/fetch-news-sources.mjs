/**
 * Pulls the text of every `sourceUrl` in data/news.ts so the archive's bodies can be
 * rewritten from what the sources actually say rather than from memory.
 *
 * Dev-only. Writes nothing into the repo — output lands in the directory given by
 * --out (default: ./.news-sources, which is gitignored).
 *
 *   node scripts/fetch-news-sources.mjs [--out DIR] [--only SUBSTRING]
 *
 * Medium is fronted by Cloudflare and refuses both plain HTML curl and the fetch
 * services, but its `?format=json` endpoint still answers with the full paragraph
 * model, so medium.com is routed there. Everything else is fetched as HTML and
 * stripped down to text; hosts that answer with a challenge or a paywall are
 * reported as FAILED and handled by hand.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

function parseArgs(argv) {
  const args = { out: path.join(ROOT, '.news-sources'), only: null };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--out') args.out = path.resolve(argv[(i += 1)]);
    else if (argv[i] === '--only') args.only = argv[(i += 1)];
  }
  return args;
}

/** Reads the (slug, sourceUrl) pairs straight out of the data file. */
function readEntries() {
  const src = fs.readFileSync(path.join(ROOT, 'data', 'news.ts'), 'utf8');
  const entries = [];
  let slug = null;
  for (const line of src.split('\n')) {
    const slugMatch = line.match(/^\s*slug:\s*'([^']+)'/);
    if (slugMatch) {
      slug = slugMatch[1];
      continue;
    }
    const urlMatch = line.match(/https?:\/\/[^'"\s]+/);
    if (urlMatch && slug && /sourceUrl|^\s*'https/.test(line)) {
      entries.push({ slug, url: urlMatch[0] });
      slug = null;
    }
  }
  return entries;
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<\/(p|div|h[1-6]|li|br)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#8217;/g, '’')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    .trim();
}

async function fetchMedium(url) {
  const res = await fetch(`${url}?format=json`, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const raw = await res.text();
  // Medium prefixes the payload with `])}while(1);</x>` to defeat JSON hijacking.
  const json = JSON.parse(raw.replace(/^[^{]*/, ''));
  const value = json?.payload?.value;
  if (!value) throw new Error('no payload.value');
  const paragraphs = value.content?.bodyModel?.paragraphs ?? [];
  const published = value.firstPublishedAt
    ? new Date(value.firstPublishedAt).toISOString().slice(0, 10)
    : 'unknown';
  const text = paragraphs
    .map((p) => (p.type === 3 ? `## ${p.text}` : p.text))
    .filter(Boolean)
    .join('\n\n');
  return `TITLE: ${value.title ?? ''}\nPUBLISHED: ${published}\nSOURCE: ${url}\n\n${text}`;
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, Accept: 'text/html,application/xhtml+xml' },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const text = stripTags(html);
  if (text.length < 400 || /Enable JavaScript and cookies|Just a moment/i.test(text)) {
    throw new Error('challenge or empty body');
  }
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() ?? '';
  const published =
    html.match(/"datePublished"\s*:\s*"([^"]+)"/)?.[1] ??
    html.match(/property="article:published_time"\s+content="([^"]+)"/)?.[1] ??
    'unknown';
  return `TITLE: ${title}\nPUBLISHED: ${published}\nSOURCE: ${url}\n\n${text}`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  fs.mkdirSync(args.out, { recursive: true });

  const entries = readEntries().filter((e) => !args.only || e.url.includes(args.only));
  const failures = [];

  for (const { slug, url } of entries) {
    const host = new URL(url).hostname.replace(/^www\./, '');
    try {
      const text = host === 'medium.com' ? await fetchMedium(url) : await fetchHtml(url);
      fs.writeFileSync(path.join(args.out, `${slug}.txt`), text, 'utf8');
      console.log(`OK      ${host.padEnd(28)} ${slug} (${text.split(/\s+/).length} words)`);
    } catch (err) {
      failures.push({ slug, url, host, reason: err.message });
      console.log(`FAILED  ${host.padEnd(28)} ${slug} — ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, 400));
  }

  fs.writeFileSync(path.join(args.out, '_failures.json'), JSON.stringify(failures, null, 2));
  console.log(`\n${entries.length - failures.length}/${entries.length} fetched → ${args.out}`);
  if (failures.length) console.log(`${failures.length} need a manual route; see _failures.json`);
}

main();
