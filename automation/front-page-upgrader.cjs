#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START_MARKER = '/* AUTO-GENERATED: FRONT_UPDATER_START */';
const END_MARKER = '/* AUTO-GENERATED: FRONT_UPDATER_END */';

function ensureFileExists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function titleCase(slug) {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function discoverCards() {
  const cards = [];
  const pagesDir = path.join(ROOT, 'pages');

  const internalTargets = [
    { href: '/features', prefer: true, label: 'Features', desc: 'Futuristic modules and templates' },
    { href: '/capabilities', prefer: true, label: 'Capabilities', desc: 'What the system can do across domains' },
    { href: '/benefits', prefer: true, label: 'Benefits', desc: 'Outcomes and value delivered' },
    { href: '/automation', prefer: false, label: 'Automations', desc: 'Factories, agents, and live workflows' },
    { href: '/site-health', prefer: false, label: 'Site Health', desc: 'A11y, performance, link integrity' },
    { href: '/newsroom', prefer: false, label: 'Newsroom', desc: 'Autonomous updates and evolution' },
  ];

  for (const t of internalTargets) {
    const checkPath = t.href === '/automation'
      ? path.join(pagesDir, 'automation', 'index.tsx')
      : path.join(pagesDir, t.href.replace(/^\//, '') + (t.href.split('/').length > 2 ? '' : '.tsx'));

    if (ensureFileExists(checkPath)) {
      cards.push({ type: 'internal', href: t.href, title: t.label, desc: t.desc, weight: t.prefer ? 0 : 1 });
    }
  }

  // Also discover other top-level directories in pages to surface
  try {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const idx = path.join(pagesDir, entry.name, 'index.tsx');
        if (ensureFileExists(idx)) {
          const href = `/${entry.name}`;
          if (cards.find((c) => c.href === href)) continue;
          cards.push({ type: 'internal', href, title: titleCase(entry.name), desc: 'Explore more', weight: 2 });
        }
      }
    }
  } catch {}

  cards.sort((a, b) => a.weight - b.weight || a.title.localeCompare(b.title));
  return cards.slice(0, 9);
}

function buildCard(item) {
  const wrapper = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover';
  return (
    `            <Link href="${item.href}"><a className="${wrapper}">\n` +
    `              <div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" />\n` +
    `              <div className=\"text-base font-semibold\">${item.title}</div>\n` +
    `              <div className=\"mt-1 text-sm text-white/75\">${item.desc}</div>\n` +
    `              <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>→</span></div>\n` +
    `            </a></Link>`
  );
}

function generateSectionTSX(cards) {
  const header = [
    '<section className="mx-auto max-w-7xl px-6 pb-16">',
    '  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore Features, Capabilities, Benefits</h2>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
  ].join('\n');
  const body = cards.map(buildCard).join('\n');
  const footer = [
    '  </div>',
    '</section>',
  ].join('\n');
  return `${header}\n${body}\n${footer}`;
}

function replaceBetweenMarkers(source, startMarker, endMarker, replacement) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('Markers not found or in wrong order in front page');
  }
  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  return `${before}\n${replacement}\n${after}`;
}

(function main() {
  if (!ensureFileExists(FRONT_PAGE)) {
    console.log('Front page not found; exiting');
    process.exit(0);
  }
  const original = fs.readFileSync(FRONT_PAGE, 'utf8');
  const cards = discoverCards();
  const tsx = generateSectionTSX(cards);
  let updated;
  try {
    updated = replaceBetweenMarkers(original, START_MARKER, END_MARKER, tsx);
  } catch (e) {
    console.log('Skipping update, markers missing:', e.message);
    process.exit(0);
  }
  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    console.log('Front page updated between markers.');
  } else {
    console.log('No changes for front page.');
  }
})();