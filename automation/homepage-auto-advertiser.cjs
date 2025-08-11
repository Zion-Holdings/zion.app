#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INDEX_PAGE = path.join(ROOT, 'pages', 'index.tsx');
const FUNCS_DIR = path.join(ROOT, 'netlify', 'functions');

const START = '/* AUTO-GENERATED: HOME_UPDATER_START */';
const END = '/* AUTO-GENERATED: HOME_UPDATER_END */';

function titleCase(input) {
  return input
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function log(message) {
  process.stdout.write(`[homepage-auto-advertiser] ${message}\n`);
}

function discoverNetlifyTools() {
  const items = [];
  const nameMap = {
    'front-enhancer': { label: 'Front Enhancer', tagline: 'Futuristic front updates (10m)' },
    'frontpage-enhancer': { label: 'Frontpage Enhancer', tagline: 'Homepage promos (20m)' },
    'homepage_advertiser': { label: 'Homepage Advertiser', tagline: 'Fresh highlights (15m)' },
    'cloud_orchestrator': { label: 'Cloud Orchestrator', tagline: 'Coordinates agents (4h)' },
    'fast-front-promoter': { label: 'Fast Front Promoter', tagline: 'Quick promos (15m)' },
    'homepage-updater': { label: 'Homepage Updater', tagline: 'Explore section refresh' },
    'continuous-orchestrator': { label: 'Continuous Orchestrator', tagline: 'Multi-step curator (5m)' },
    'ultrafast-orchestrator': { label: 'Ultrafast Orchestrator', tagline: 'Every minute updates' },
    'sitemap_runner': { label: 'Sitemap Runner', tagline: 'Keeps URLs fresh (12h)' },
    'link-and-health-scheduler': { label: 'Link & Health', tagline: 'Link checks & audits (6h)' },
    'marketing-and-features-promo': { label: 'Marketing & Promo', tagline: 'Feature promos (2h)' },
    'hyper-front-index-accelerator': { label: 'Hyper Front Index Accelerator', tagline: 'Ultra-fast front index (1m)' },
    'features-capabilities-benefits-advertiser': { label: 'Features/Capabilities/Benefits Advertiser', tagline: 'New features (2m)' },
    'continuous-front-runner': { label: 'Continuous Front Runner', tagline: 'Subset runner (3m)' },
    'readme-advertiser': { label: 'README Advertiser', tagline: 'Refresh README (6h)' },
  };
  try {
    if (!fs.existsSync(FUNCS_DIR)) return items;
    const files = fs.readdirSync(FUNCS_DIR).filter((f) => f.endsWith('.js'));
    for (const file of files) {
      const base = file.replace(/\.js$/, '');
      const info = nameMap[base] || { label: titleCase(base), tagline: 'Scheduled function' };
      const href = `/.netlify/functions/${base}`;
      items.push({ type: 'external', href, label: info.label, tagline: info.tagline });
    }
  } catch (err) {
    log(`Error discovering Netlify tools: ${err.message}`);
  }
  return items;
}

function discoverInternalPages() {
  return [
    { type: 'internal', href: '/automation', label: 'Automation', tagline: 'Live agents & reports' },
    { type: 'internal', href: '/newsroom', label: 'Newsroom', tagline: 'Autonomous updates' },
    { type: 'internal', href: '/site-health', label: 'Site Health', tagline: 'Audits & insights' },
    { type: 'internal', href: '/front', label: 'Front', tagline: 'Explore more' },
  ];
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
  const header = `\n<section className=\"mx-auto max-w-7xl px-6 pb-16\">\n  <h2 className=\"text-center text-2xl font-bold tracking-wide text-white/90\">Explore more</h2>\n  <div className=\"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\">\n`;
  const body = items.map(buildCard).join('\n\n');
  const footer = `\n  </div>\n</section>\n`;
  return header + (body ? `\n${body}\n` : '') + footer;
}

function replaceBetweenMarkers(source, startMarker, endMarker, replacement) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('Markers not found or in wrong order in pages/index.tsx');
  }
  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  return `${before}\n\n${replacement}\n${after}`;
}

(function main() {
  log('start');
  if (!fs.existsSync(INDEX_PAGE)) {
    log('index.tsx not found');
    process.exit(0);
  }
  const internal = discoverInternalPages();
  const netlifyTools = discoverNetlifyTools();
  const combined = [...internal, ...netlifyTools].slice(0, 16);
  const tsxBlock = generateSectionTSX(combined);

  let content = fs.readFileSync(INDEX_PAGE, 'utf8');
  if (!content.includes(START) || !content.includes(END)) {
    log('auto-generated markers missing; skipping update');
    process.exit(0);
  }

  const updated = replaceBetweenMarkers(content, START, END, tsxBlock);
  if (updated !== content) {
    fs.writeFileSync(INDEX_PAGE, updated, 'utf8');
    log('homepage Explore section updated');
  } else {
    log('no changes');
  }
})();