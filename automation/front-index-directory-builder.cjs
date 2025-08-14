#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const REGISTRY_JSON = path.join(ROOT, 'public', 'automation', 'content-registry.json');
const START_MARKER = '/* AUTO:FRONT_INDEX_DIRECTORY_START */';
const END_MARKER = '/* AUTO:FRONT_INDEX_DIRECTORY_END */';

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit', cwd: ROOT });
  } catch (e) {
    console.warn('Command failed:', cmd, e.message);
  }
}

function ensureRegistry() {
  if (!fs.existsSync(REGISTRY_JSON)) {
    run('node automation/docs-pages-indexer.cjs');
  }
}

function readRegistry() {
  ensureRegistry();
  try {
    const raw = fs.readFileSync(REGISTRY_JSON, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { pages: [], docs: [], generatedAt: new Date().toISOString() };
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildItemCard(item) {
  const common = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring';
  const title = escapeHtml(item.label);
  const desc = escapeHtml(item.desc || 'Explore');
  if (item.external) {
    return `          <a href="${item.href}" target="_blank" rel="noopener" className="${common}"><div className="text-base font-semibold">${title}</div><div className="mt-1 text-sm text-white/75">${desc}</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>`;
  }
  return `          <Link href="${item.href}"><a className="${common}"><div className="text-base font-semibold">${title}</div><div className="mt-1 text-sm text-white/75">${desc}</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>`;
}

function chooseItems(registry) {
  // Prioritize important routes
  const priority = [
    { href: '/automation', label: 'Automation Hub', desc: 'Factories, agents, and live workflows' },
    { href: '/site-health', label: 'Site Health', desc: 'A11y, performance, and link dashboards' },
    { href: '/reports/seo', label: 'AI SEO Auditor', desc: 'Continuous on‑site SEO improvements' },
    { href: '/reports/ai-trends', label: 'AI Trends Radar', desc: 'Signals that inspire new automations' },
    { href: '/newsroom', label: 'Newsroom', desc: 'Curated updates and product evolution highlights' },
  ];

  const seen = new Set(priority.map(p => p.href));
  const others = [];

  for (const p of registry.pages || []) {
    const route = p.route;
    if (!route || seen.has(route)) continue;
    if (route === '/' || route.startsWith('/api') || route.startsWith('/_')) continue;
    if (route === '/main/front') continue;
    others.push({ href: route, label: route.split('/').filter(Boolean).map(s => s[0]?.toUpperCase() + s.slice(1)).join(' ') || 'Open', desc: 'Explore more' });
    seen.add(route);
  }

  // Include a few docs
  const docs = [];
  for (const d of registry.docs || []) {
    if (docs.length >= 4) break;
    const label = d.file.replace(/^docs\//, '').replace(/\.(md|mdx)$/,'');
    docs.push({ href: '/.netlify/functions/docs-index-runner', label: 'Docs — ' + label, desc: 'Open documentation' });
  }

  const combined = [...priority, ...others.slice(0, 20), ...docs];
  return combined.slice(0, 20);
}

function buildSection(items) {
  return [
    '<section id="auto-catalog" className="mx-auto max-w-7xl px-6 pb-16">',
    '  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Catalog</h2>',
    '  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Auto‑discovered features, capabilities, and resources. Kept fresh by in‑repo Node tools.</p>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">',
    items.map(buildItemCard).join('\n'),
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
  return `${before}\n\n${replacement}\n\n${after}`;
}

(function main() {
  if (!fs.existsSync(FRONT_PAGE)) {
    console.log('Front page not found, skipping');
    process.exit(0);
  }

  const registry = readRegistry();
  const items = chooseItems(registry);
  const block = buildSection(items);

  const original = fs.readFileSync(FRONT_PAGE, 'utf8');
  let updated;
  try {
    updated = replaceBetweenMarkers(original, START_MARKER, END_MARKER, block);
  } catch (e) {
    console.log('Could not replace between directory markers:', e.message);
    process.exit(0);
  }

  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    console.log('Front index autonomous catalog refreshed.');
  } else {
    console.log('No catalog updates required.');
  }
})();