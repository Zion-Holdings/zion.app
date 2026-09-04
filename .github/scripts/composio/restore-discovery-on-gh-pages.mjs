/**
 * Dual-write PIN_PATHS + competing-agent canonical routes onto
 * current origin/gh-pages HEAD. Never force-pushes (ruleset
 * 22178533 blocks non-fast-forward on gh-pages).
 *
 * Usage:
 *   node restore-discovery-on-gh-pages.mjs
 *   node restore-discovery-on-gh-pages.mjs --if-leftover
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { discoverZionConnections, executeTool, composioFetch } from './discover-connections.mjs';
import { PIN_PATHS } from './publish-gh-pages.mjs';

const EXTRA = [
  'free-consultation/index.html',
  'use-cases/index.html',
  'cpa/index.html',
  'booking/index.html',
  'pricing/index.html',
  'monetization-hub/index.html',
  'checkout/index.html',
  'tools/phishing-analyzer/index.html',
  'solutions/index.html',
];

function isLeftoverHtml(html) {
  return html.includes('_next/static')
    || html.includes('Get Free Consultation')
    || html.includes('Automação e IA para Empresas')
    || html.includes('Pague por Resultado')
    || html.includes('>Free Consultation<');
}

export async function liveHomepageLooksLeftover() {
  const res = await fetch(`https://ziontechgroup.com/?v=${Date.now()}`, {
    headers: { 'user-agent': 'ZionComposioEngine/1.0' },
    redirect: 'follow',
  });
  const html = await res.text();
  return {
    status: res.status,
    bytes: html.length,
    leftover: isLeftoverHtml(html),
    discovery: html.includes('data-built="2026-09-03T02:55Z"') || html.includes('AI/IT Discovery'),
  };
}

export async function restoreDiscoveryOnGhPages({ ifLeftover = false } = {}) {
  if (ifLeftover) {
    const live = await liveHomepageLooksLeftover();
    if (!live.leftover) {
      return { skipped: true, reason: 'live homepage is not leftover Next.js', live };
    }
  }

  const { active } = await discoverZionConnections();
  await composioFetch('/tools/GITHUB_COMMIT_MULTIPLE_FILES');
  const seen = new Set();
  const upserts = [];
  for (const rel of [...PIN_PATHS, ...EXTRA]) {
    if (seen.has(rel)) continue;
    seen.add(rel);
    const src = existsSync(new URL(`../../../${rel}`, import.meta.url))
      ? new URL(`../../../${rel}`, import.meta.url)
      : new URL(`../../../public/${rel}`, import.meta.url);
    const content = readFileSync(src, 'utf8');
    if (isLeftoverHtml(content)) {
      throw new Error(`refusing leftover Next.js: ${rel}`);
    }
    upserts.push({ path: rel, content, encoding: 'utf-8' });
    upserts.push({ path: `public/${rel}`, content, encoding: 'utf-8' });
  }
  upserts.push({ path: 'public/.nojekyll', content: '', encoding: 'utf-8' });
  upserts.push({ path: 'public/CNAME', content: 'ziontechgroup.com\n', encoding: 'utf-8' });
  upserts.push({ path: 'CNAME', content: 'ziontechgroup.com\n', encoding: 'utf-8' });

  const commit = await executeTool('github', 'GITHUB_COMMIT_MULTIPLE_FILES', {
    owner: 'Zion-support',
    repo: 'zion-support.github.io',
    branch: 'gh-pages',
    message: 'fix(pages): restore Discovery $99 + pin money pages after leftover overwrite',
    upserts,
  }, active);
  const sha = commit.data?.commit?.sha || commit.data?.sha || commit.data?.commit_sha;
  return {
    ok: commit.ok,
    sha,
    error: commit.ok ? null : commit.error,
    files: upserts.length,
  };
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
  const ifLeftover = process.argv.includes('--if-leftover');
  restoreDiscoveryOnGhPages({ ifLeftover })
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      if (result.ok === false) process.exit(1);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
