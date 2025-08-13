#!/usr/bin/env node

'use strict';

// Injects a new "Innovations" section into the Front Systems Hub between the existing directory markers,
// without altering prior injected content logic.

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START_MARKER = '/* AUTO:FRONT_INDEX_DIRECTORY_START */';
const END_MARKER = '/* AUTO:FRONT_INDEX_DIRECTORY_END */';

function listRecentInnovations(limit = 8) {
  const dir = path.join(ROOT, 'pages', 'reports', 'innovations');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => ({ f, mtime: fs.statSync(path.join(dir, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime)
    .slice(0, limit)
    .map(({ f }) => ({
      href: `/reports/innovations/${f.replace(/\.tsx$/, '')}`,
      label: f.replace(/\.tsx$/, '').replace(/[-_]/g, ' ')
    }));
}

function buildSection(items) {
  if (!items.length) return '';
  const cards = items
    .map(
      (u) =>
        `          <Link href="${u.href}"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">${u.label}</div><div className="mt-1 text-sm text-white/75">Cloud AI innovations</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>`
    )
    .join('\n');
  return [
    '<section id="innovations" className="mx-auto max-w-7xl px-6 pb-16">',
    '  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Cloud AI Innovations</h2>',
    '  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Useful, diversified ideas synthesized by autonomous cloud agents.</p>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">',
    cards,
    '  </div>',
    '</section>'
  ].join('\n');
}

function inject(source, startMarker, endMarker, addition) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) return source;
  const before = source.slice(0, startIdx + startMarker.length);
  const inside = source.slice(startIdx + startMarker.length, endIdx).trim();
  const after = source.slice(endIdx);
  const combinedInside = [inside, addition].filter(Boolean).join('\n\n');
  return `${before}\n\n${combinedInside}\n\n${after}`;
}

(function main() {
  if (!fs.existsSync(FRONT_PAGE)) return;
  const items = listRecentInnovations(8);
  if (!items.length) return;
  const add = buildSection(items);
  const original = fs.readFileSync(FRONT_PAGE, 'utf8');
  const updated = inject(original, START_MARKER, END_MARKER, add);
  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    console.log('cloud-ai-innovation-advertiser: injected innovations section');
  } else {
    console.log('cloud-ai-innovation-advertiser: no change');
  }
})();


