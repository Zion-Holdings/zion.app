#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const LOG_DIR = path.join(ROOT, 'automation', 'logs');
const LOG_FILE = path.join(LOG_DIR, 'homepage-auto-advertiser.log');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

ensureDir(LOG_DIR);

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

const INDEX_PAGE = path.join(ROOT, 'pages', 'index.tsx');
const START_MARKER = '/* AUTO-GENERATED: HOME_UPDATER_START */';
const END_MARKER = '/* AUTO-GENERATED: HOME_UPDATER_END */';

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

  const addPage = (route, label, tagline) => {
    internal.push({ type: 'internal', href: route, label, tagline });
  };

  try {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.tsx')) {
        const base = entry.name.replace(/\.tsx$/, '');
        if (base === 'index' || base.startsWith('_')) continue;
        const route = `/${base}`;
        const label = titleCase(base);
        const tagline = base === 'newsroom'
          ? 'Latest autonomous updates'
          : base === 'site-health'
          ? 'Audits & insights'
          : 'Explore more';
        addPage(route, label, tagline);
      } else if (entry.isDirectory()) {
        const indexPathTsx = path.join(pagesDir, entry.name, 'index.tsx');
        if (fs.existsSync(indexPathTsx)) {
          const route = `/${entry.name}`;
          const label = titleCase(entry.name);
          const tagline = entry.name === 'automation' ? 'Live agents & reports' : 'Explore more';
          addPage(route, label, tagline);
        }
      }
    }
  } catch (err) {
    log(`Error discovering internal pages: ${err.message}`);
  }

  const seen = new Set();
  const unique = [];
  for (const item of internal) {
    if (!seen.has(item.href)) {
      seen.add(item.href);
      unique.push(item);
    }
  }
  unique.sort((a, b) => {
    const rank = (h) => (h.href === '/automation' ? 0 : h.href === '/newsroom' ? 1 : h.href === '/site-health' ? 2 : 3);
    return rank(a) - rank(b);
  });
  return unique;
}

function discoverKeyWorkflows() {
  const wfDir = path.join(ROOT, '.github', 'workflows');
  const selected = [
    'autonomous-cloud.yml',
    'rapid-git-sync.yml',
    'performance-audit.yml',
    'optimize-images.yml',
    'sitemap-auto-commit.yml',
  ];
  const nameMap = {
    'autonomous-cloud.yml': { label: 'Autonomous Cloud', tagline: '15m cadence orchestrations' },
    'rapid-git-sync.yml': { label: 'Rapid Git Sync', tagline: 'Fast repo syncing' },
    'performance-audit.yml': { label: 'Performance Audit', tagline: 'Lighthouse & runtime checks' },
    'optimize-images.yml': { label: 'Image Optimizer', tagline: 'Automatic asset slimming' },
    'sitemap-auto-commit.yml': { label: 'Sitemap Auto‑Update', tagline: 'Fresh URLs daily' },
  };

  const items = [];
  try {
    const files = fs.existsSync(wfDir) ? fs.readdirSync(wfDir) : [];
    for (const f of files) {
      if (!selected.includes(f)) continue;
      const info = nameMap[f] || { label: titleCase(f.replace(/\.ya?ml$/, '')), tagline: 'Automation workflow' };
      const href = `https://github.com/Zion-Holdings/zion.app/actions/workflows/${f}`;
      items.push({ type: 'external', href, label: info.label, tagline: info.tagline });
    }
  } catch (err) {
    log(`Error discovering workflows: ${err.message}`);
  }
  return items;
}

function buildCard(item) {
  const cardClass = 'bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10';
  const textSpan = `<span className=\"text-white/90\">${item.label}${item.tagline ? ' — ' + item.tagline : ''}</span>`;
  if (item.type === 'internal') {
    return `            <Link href=\"${item.href}\"><a className=\"${cardClass}\">${textSpan}</a></Link>`;
  }
  return `            <a href=\"${item.href}\" target=\"_blank\" rel=\"noopener\" className=\"${cardClass}\">${textSpan}</a>`;
}

function generateSectionTSX(items) {
  const header = `
<section className=\"mx-auto max-w-7xl px-6 pb-16\">
  <h2 className=\"text-center text-2xl font-bold tracking-wide text-white/90\">Explore more</h2>
  <div className=\"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\">
`;
  const body = items.map(buildCard).join('\n\n');
  const footer = `
  </div>
</section>`;
  return header + (body ? `
${body}
` : '') + footer;
}

function replaceBetweenMarkers(source, startMarker, endMarker, replacement) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('Markers not found or in wrong order in pages/index.tsx');
  }
  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  return `${before}\n${replacement}\n${after}`;
}

(async function main() {
  log('Homepage Auto Advertiser started');

  const internal = discoverInternalPages();
  const workflows = discoverKeyWorkflows();
  const combined = [...internal, ...workflows].slice(0, 12);
  const tsxBlock = generateSectionTSX(combined);

  if (!fs.existsSync(INDEX_PAGE)) {
    log('index.tsx not found; aborting');
    process.exit(0);
  }
  const original = fs.readFileSync(INDEX_PAGE, 'utf8');
  let updated;
  try {
    updated = replaceBetweenMarkers(original, START_MARKER, END_MARKER, tsxBlock);
  } catch (err) {
    log(`Failed to apply update: ${err.message}`);
    process.exit(0);
  }

  if (updated !== original) {
    fs.writeFileSync(INDEX_PAGE, updated);
    log('Homepage updated between markers.');
  } else {
    log('No changes needed.');
  }

  log('Homepage Auto Advertiser finished');
  process.exit(0);
})();