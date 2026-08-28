/**
 * Recomputes every `readTime` in data/news.ts from the length of its own `body`,
 * so the stated reading time matches the text that is actually on the page.
 *
 *   node scripts/sync-news-readtime.mjs [--check]
 *
 * --check reports without writing. Run it after editing any body.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(ROOT, 'data', 'news.ts');
const WORDS_PER_MINUTE = 200;

const check = process.argv.includes('--check');
const src = fs.readFileSync(FILE, 'utf8');

// Entries are separated by a top-level `  },\n  {` boundary in the exported array.
const chunks = src.split(/(?=\n  \{\n)/);
let changed = 0;

const out = chunks.map((chunk) => {
  const slug = chunk.match(/\n    slug: '([^']+)'/)?.[1];
  const body = chunk.match(/\n    body: `([\s\S]*?)`,\n/)?.[1];
  if (!slug || !body) return chunk;

  const words = body.trim().split(/\s+/).length;
  // Rounded up, the way reading-time estimates are conventionally stated.
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  const next = `${minutes} min read`;
  const current = chunk.match(/\n    readTime: '([^']*)'/)?.[1];

  if (current !== next) {
    changed += 1;
    console.log(`${slug.padEnd(48)} ${words} words  ${current ?? '—'} → ${next}`);
  }
  return chunk.replace(/\n    readTime: '[^']*'/, `\n    readTime: '${next}'`);
});

if (!check && changed) fs.writeFileSync(FILE, out.join(''), 'utf8');
console.log(`\n${changed} readTime value${changed === 1 ? '' : 's'} ${check ? 'stale' : 'updated'}.`);
