#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LOG_DIR = path.join(ROOT, 'automation', 'logs');
const LOG_FILE = path.join(LOG_DIR, 'front-index-auto-advertiser.log');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

ensureDir(LOG_DIR);

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  try { fs.appendFileSync(LOG_FILE, line + '\n'); } catch {}
}

const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START_MARKER = '/* AUTO:FRONT_INDEX_DIRECTORY_START */';
const END_MARKER = '/* AUTO:FRONT_INDEX_DIRECTORY_END */';

function titleCase(slug) {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function discoverInternalCards() {
  const pagesDir = path.join(ROOT, 'pages');
  const candidates = [
    { href: '/automation', label: 'Automation Hub', desc: 'Factories, agents, and live workflows' },
    { href: '/automation#features', label: 'Automation Features', desc: 'Deep dive into what agents can do' },
    { href: '/automation#capabilities', label: 'Capabilities', desc: 'What the platform can automate' },
    { href: '/automation#benefits', label: 'Benefits', desc: 'Outcomes and ROI from autonomous agents' },
    { href: '/automation#feature-factories', label: 'Feature Factories', desc: 'Generators for product features' },
    { href: '/site-health', label: 'Site Health', desc: 'A11y, performance, and link dashboards' },
    { href: '/reports/seo', label: 'AI SEO Auditor', desc: 'Continuous on‑site SEO improvements' },
    { href: '/reports/ai-trends', label: 'AI Trends Radar', desc: 'Signals that inspire new automations' },
    { href: '/newsroom', label: 'Newsroom', desc: 'Curated updates and product evolution highlights' },
    { href: '/main/front', label: 'Front Systems Hub', desc: 'Curated, futuristic front experience' },
    // Futuristic front anchors
    { href: '/main/front#features', label: 'Features', desc: 'Explore capabilities' },
    { href: '/main/front#feature-map', label: 'Feature Map', desc: 'Overview of the platform' },
    { href: '/main/front#suites', label: 'Suites', desc: 'Solution bundles' },
    { href: '/main/front#capabilities', label: 'Capabilities', desc: 'What agents can do' },
    { href: '/main/front#use-cases', label: 'Use Cases', desc: 'Real scenarios' },
    { href: '/main/front#pillars', label: 'Pillars', desc: 'Foundational principles' },
    { href: '/main/front#benefits', label: 'Benefits', desc: 'Outcomes & ROI' },
    { href: '/main/front#templates', label: 'Templates', desc: 'Futuristic layouts' },
    { href: '/main/front#demos', label: 'Demos', desc: 'Live examples' },
    { href: '/main/front#highlights', label: 'Highlights', desc: 'Key improvements' },
    { href: '/main/front#cases', label: 'Cases', desc: 'Selected case studies' },
    { href: '/main/front#reports', label: 'Reports', desc: 'Dashboards & artifacts' },
    { href: '/main/front#guardrails', label: 'Guardrails', desc: 'Safety before shipping' },
    { href: '/main/front#roadmap', label: 'Docs', desc: 'Technical notes & guides' },
  ];

  function existsRoute(route) {
    const routeNoHash = (route || '').split('#')[0];
    const parts = routeNoHash.split('/').filter(Boolean);
    if (parts.length === 0) return false;
    const dir = path.join(pagesDir, ...parts);
    const fileIdx = path.join(pagesDir, ...parts, 'index.tsx');
    const fileTsx = path.join(pagesDir, `${parts[parts.length - 1]}.tsx`);
    return fs.existsSync(fileIdx) || fs.existsSync(fileTsx) || fs.existsSync(dir + '.tsx');
  }

  return candidates.filter((c) => existsRoute(c.href)).map((c) => ({ type: 'internal', ...c }));
}

function discoverExternalCards() {
  // Prefer repo URL from package.json
  let repoUrl = 'https://github.com/Zion-Holdings/zion.app';
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
    if (pkg.repository && typeof pkg.repository.url === 'string') {
      repoUrl = pkg.repository.url.replace(/^git\+/, '').replace(/\.git$/, '');
    }
  } catch {}

  const cards = [];
  // External docs and AI changelog
  cards.push({ type: 'external', href: `${repoUrl}/tree/main/docs`, label: 'Docs & Guides', desc: 'Technical notes and architecture' });
  cards.push({ type: 'external', href: `${repoUrl}/blob/main/docs/CHANGELOG_AI.md`, label: 'AI Changelog', desc: 'Summarized autonomous changes' });
  // Live pipelines (transparency; source-of-truth now Netlify scheduled functions)
  cards.push({ type: 'external', href: `${repoUrl}/actions`, label: 'Live Pipelines', desc: 'CI logs & artifacts 24/7' });
  // Company site
  cards.push({ type: 'external', href: 'https://ziontechgroup.com', label: 'Zion Cloud', desc: 'Deployments and cloud platform' });

  return cards;
}

function buildCard(item) {
  const base = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring';
  const heading = `<div className=\"text-base font-semibold\">${item.label}</div>`;
  const desc = item.desc ? `<div className=\"mt-1 text-sm text-white/75\">${item.desc}</div>` : '';
  if (item.type === 'internal') {
    return `          <Link href=\"${item.href}\"><a className=\"${base}\">${heading}${desc}<div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>→</span></div></a></Link>`;
  }
  return `          <a href=\"${item.href}\" target=\"_blank\" rel=\"noopener\" className=\"${base}\">${heading}${desc}<div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>↗</span></div></a>`;
}

function generateSectionTSX(items) {
  const header = `
<section id=\"auto-catalog\" className=\"mx-auto max-w-7xl px-6 pb-16\">\n  <h2 className=\"text-center text-2xl font-bold tracking-wide text-white/90\">Autonomous Catalog</h2>\n  <p className=\"mx-auto mt-2 max-w-3xl text-center text-sm text-white/70\">Auto‑discovered features, capabilities, and resources. Kept fresh by in‑repo Node tools.</p>\n  <div className=\"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4\">`;
  const body = items.map(buildCard).join('\n');
  const footer = `\n  </div>\n</section>`;
  return header + (body ? `\n${body}\n` : '\n') + footer;
}

function replaceBetweenMarkers(source, startMarker, endMarker, replacement) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('Markers not found or in wrong order in pages/main/front/index.tsx');
  }
  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  return `${before}\n${replacement}\n${after}`;
}

(function main() {
  log('Front Index Auto Advertiser started');
  if (!fs.existsSync(FRONT_PAGE)) {
    log('pages/main/front/index.tsx not found; aborting');
    process.exit(0);
  }

  const internal = discoverInternalCards();
  const external = discoverExternalCards();
  const items = [...internal, ...external].slice(0, 20);
  const tsxBlock = generateSectionTSX(items);

  const original = fs.readFileSync(FRONT_PAGE, 'utf8');
  let updated;
  try {
    updated = replaceBetweenMarkers(original, START_MARKER, END_MARKER, tsxBlock);
  } catch (err) {
    log(`Failed to apply update: ${err.message}`);
    process.exit(0);
  }

  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    log('Front index updated between markers.');
  } else {
    log('No changes needed.');
  }

  log('Front Index Auto Advertiser finished');
})();