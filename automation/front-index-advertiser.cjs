#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START_MARKER = '/* AUTO-GENERATED: FRONT_ADS_START */';
const END_MARKER = '/* AUTO-GENERATED: FRONT_ADS_END */';

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
  const results = [];

  function push(href, label, tagline) {
    results.push({ type: 'internal', href, label, tagline });
  }

  // Priority pages
  const priority = [
    { href: '/automation', label: 'Automation Hub', tagline: 'Live agents & workflows' },
    { href: '/site-health', label: 'Site Health', tagline: 'A11y, performance, links' },
    { href: '/reports/seo', label: 'SEO Audit', tagline: 'Continuous improvements' },
    { href: '/reports/ai-trends', label: 'AI Trends', tagline: 'Intelligence signals' },
    { href: '/newsroom', label: 'Newsroom', tagline: 'Latest autonomous updates' },
  ];
  for (const p of priority) {
    const check = p.href.startsWith('/reports/')
      ? path.join(ROOT, 'pages', 'reports', p.href.split('/').pop() + '.tsx')
      : p.href === '/automation'
      ? path.join(ROOT, 'pages', 'automation', 'index.tsx')
      : path.join(ROOT, 'pages', p.href.replace(/^\//, '') + '.tsx');
    if (fs.existsSync(check)) push(p.href, p.label, p.tagline);
  }

  // Fallback discovery of other top-level pages
  try {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('_')) continue;
      if (entry.isFile() && entry.name.endsWith('.tsx')) {
        const base = entry.name.replace(/\.tsx$/, '');
        if (['index', 'front'].includes(base)) continue;
        push('/' + base, titleCase(base), 'Explore more');
      }
      if (entry.isDirectory()) {
        const indexPath = path.join(pagesDir, entry.name, 'index.tsx');
        if (fs.existsSync(indexPath)) {
          push('/' + entry.name, titleCase(entry.name), entry.name === 'automation' ? 'Live agents & workflows' : 'Explore more');
        }
      }
    }
  } catch {}

  // Add anchor deep-links for capabilities and benefits on the same page
  results.push({ type: 'internal', href: '/main/front#features', label: 'Features', tagline: 'Explore capabilities' });
  results.push({ type: 'internal', href: '/main/front#capabilities', label: 'Capabilities', tagline: 'What agents can do' });
  results.push({ type: 'internal', href: '/main/front#benefits', label: 'Benefits', tagline: 'Outcomes & ROI' });

  // Unique by href, limit
  const seen = new Set();
  const unique = [];
  for (const r of results) {
    if (!seen.has(r.href)) {
      seen.add(r.href);
      unique.push(r);
    }
  }
  return unique.slice(0, 16);
}

function discoverExternalLinks() {
  return [
    { type: 'internal', href: '/.netlify/functions/docs-index-runner', label: 'Docs — technical notes & guides', tagline: 'Documentation' },
    { type: 'internal', href: '/newsroom', label: 'AI Changelog — highlights', tagline: 'Summarized updates' },
    { type: 'internal', href: '/.netlify/functions/unused-media-scanner', label: 'Unused Media Scanner', tagline: 'Find and report unreferenced assets' },
    { type: 'internal', href: '/.netlify/functions/orphan-pages-detector', label: 'Orphan Pages Detector', tagline: 'Discover pages with no inbound links' },
    { type: 'internal', href: '/.netlify/functions/component-size-report', label: 'Component Size Report', tagline: 'Largest components by lines and bytes' },
  ];
}

function buildCard(item) {
  const common = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo';
  const inner = `\n  <div className=\"text-base font-semibold\">${item.label}</div>\n  <div className=\"mt-1 text-sm text-white/75\">${item.tagline || ''}</div>\n`;
  if (item.type === 'external') {
    return `              <a href=\"${item.href}\" target=\"_blank\" rel=\"noopener\" className=\"${common}\">${inner}  <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>↗</span></div></a>`;
  }
  return `              <Link href=\"${item.href}\"><a className=\"${common}\">${inner}  <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>→</span></div></a></Link>`;
}

function generateSection(items) {
  return [
    '<section id="auto-promoted" className="mx-auto max-w-7xl px-6 pb-14">',
    '  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Auto‑Promoted Features</h2>',
    '  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Continuously curated promos linking to live hubs, reports, and docs.</p>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">',
    items.map(buildCard).join('\n'),
    '  </div>',
    '</section>'
  ].join('\n');
}

function replaceBetweenMarkers(source, startMarker, endMarker, replacement) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('Markers not found or invalid order in front index');
  }
  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  return `${before}\n${replacement}\n${after}`;
}

(function main() {
  if (!fs.existsSync(FRONT_PAGE)) {
    console.log('Front page not found, skipping');
    process.exit(0);
  }
  const internal = discoverInternalPages();
  const external = discoverExternalLinks();
  const combined = [...internal, ...external].slice(0, 16);
  const block = generateSection(combined);
  const original = fs.readFileSync(FRONT_PAGE, 'utf8');
  let updated;
  try {
    updated = replaceBetweenMarkers(original, START_MARKER, END_MARKER, block);
  } catch (e) {
    console.log('Could not replace between markers:', e.message);
    process.exit(0);
  }
  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    console.log('Front index auto‑promotions updated.');
  } else {
    console.log('No updates required.');
  }
})();
