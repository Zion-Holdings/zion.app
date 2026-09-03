/**
 * Dual-write a batch of leftover closers to origin/gh-pages and pin
 * money/ops pages so closer-only upserts cannot leave /affiliate/ 404.
 *
 * Usage: node republish-closer-batch.mjs <list.txt> <offset> [count]
 */
import { readFileSync } from 'node:fs';
import { discoverZionConnections, executeTool, composioFetch } from './discover-connections.mjs';
import { PIN_PATHS } from './publish-gh-pages.mjs';

const listFile = process.argv[2];
const offset = Number(process.argv[3] || 0);
const count = Number(process.argv[4] || 12);
if (!listFile) {
  console.error('usage: republish-closer-batch.mjs <list.txt> <offset> [count]');
  process.exit(1);
}

const all = readFileSync(listFile, 'utf8').trim().split('\n').filter(Boolean);
const batch = all.slice(offset, offset + count);
if (!batch.length) {
  console.log('no paths at offset', offset);
  process.exit(0);
}

const { active } = await discoverZionConnections();
await composioFetch('/tools/GITHUB_COMMIT_MULTIPLE_FILES');
const upserts = [];
const seen = new Set();
for (const rel of [...batch, ...PIN_PATHS]) {
  if (seen.has(rel)) continue;
  seen.add(rel);
  const content = readFileSync(new URL(`../../../${rel}`, import.meta.url), 'utf8');
  if (content.includes('_next/static') || content.includes('Get Free Consultation')) {
    throw new Error(`refusing leftover Next.js: ${rel}`);
  }
  upserts.push({ path: rel, content, encoding: 'utf-8' });
  upserts.push({ path: `public/${rel}`, content, encoding: 'utf-8' });
}

const label = batch[0].replace(/\/index\.html$/, '').split('/').pop();
const commit = await executeTool('github', 'GITHUB_COMMIT_MULTIPLE_FILES', {
  owner: 'Zion-support',
  repo: 'zion-support.github.io',
  branch: 'gh-pages',
  message: `fix(pages): republish leftover closers (${label}+); pin money pages`,
  upserts,
}, active);
console.log('offset', offset, 'n', batch.length, 'first', batch[0], 'pin', PIN_PATHS.length);
console.log('commit', commit.ok ? 'ok' : JSON.stringify(commit.error).slice(0, 800));
if (commit.ok) {
  const sha = commit.data?.commit?.sha || commit.data?.sha || commit.data?.commit_sha;
  console.log('sha', sha || JSON.stringify(commit.data).slice(0, 400));
}
