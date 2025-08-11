#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const LOG_DIR = path.join(ROOT, 'automation', 'logs');
const LOG_FILE = path.join(LOG_DIR, 'front-auto-advertiser.log');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(LOG_DIR);

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START_MARKER = '/* AUTO-GENERATED: FRONT_AD_START */';
const END_MARKER = '/* AUTO-GENERATED: FRONT_AD_END */';

function titleCase(slug) {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function discoverInternalPages() {
  const pagesDir = path.join(ROOT, 'pages');
  const internal = [];

  const add = (href, label, desc) => internal.push({ type: 'internal', href, label, desc });

  // Curated essentials
  const curated = [
    ['/automation', 'Automation Hub', 'Factories, agents, and live workflows.'],
    ['/reports/seo', 'SEO Audit', 'Continuous on‑site improvements and artifacts.'],
    ['/reports/ai-trends', 'AI Trends', 'Signals that inspire new factories.'],
    ['/site-health', 'Site Health', 'A11y, performance, and link integrity.'],
    ['/newsroom', 'Newsroom', 'Autonomous updates and product evolution.'],
  ];
  curated.forEach(([href, label, desc]) => add(href, label, desc));

  // Discover additional first-level pages
  try {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.tsx')) {
        const base = entry.name.replace(/\.tsx$/, '');
        if (['index', '_app', '_document', 'front'].includes(base)) continue;
        add(`/${base}`, titleCase(base), 'Explore more');
      } else if (entry.isDirectory()) {
        const indexPathTsx = path.join(pagesDir, entry.name, 'index.tsx');
        if (fs.existsSync(indexPathTsx)) {
          add(`/${entry.name}`, titleCase(entry.name), 'Explore more');
        }
      }
    }
  } catch (err) {
    log(`Discovery error: ${err.message}`);
  }

  // Deduplicate by href
  const seen = new Set();
  const unique = [];
  for (const item of internal) {
    if (!seen.has(item.href)) { seen.add(item.href); unique.push(item); }
  }

  // Rank curated first
  const rank = (href) => {
    if (href === '/automation') return 0;
    if (href === '/reports/seo') return 1;
    if (href === '/reports/ai-trends') return 2;
    if (href === '/site-health') return 3;
    if (href === '/newsroom') return 4;
    return 10;
  };
  unique.sort((a, b) => rank(a.href) - rank(b.href));

  return unique.slice(0, 9);
}

function buildCard(item) {
  const cardClass = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover';
  return `            <Link href="${item.href}"><a className="${cardClass}"><div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" /><h3 className=\"text-lg font-semibold\">${item.label}</h3><p className=\"mt-1 text-sm text-white/75\">${item.desc || ''}</p></a></Link>`;
}

function generateSectionTSX(items) {
  const header = `
<section className=\"mx-auto max-w-7xl px-6 pb-16\">
  <h2 className=\"text-center text-2xl font-bold tracking-wide text-white/90\">Explore Features, Capabilities & Benefits</h2>
  <div className=\"mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3\">
`;
  const body = items.map(buildCard).join('\n');
  const footer = `
  </div>
</section>`;
  return header + (body ? `\n${body}\n` : '') + footer;
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
  log('Front Auto Advertiser started');
  if (!fs.existsSync(FRONT_PAGE)) {
    log('front index.tsx not found; aborting');
    process.exit(0);
  }
  const items = discoverInternalPages();
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
    log('Front page updated between markers.');
  } else {
    log('No changes needed.');
  }
  log('Front Auto Advertiser finished');
})();