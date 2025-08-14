#!/usr/bin/env node

'use strict';

// New advertiser that ensures latest update pages are listed on the front systems hub
// using the existing directory markers in pages/front/index.tsx.

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START_MARKER = '/* AUTO:FRONT_INDEX_DIRECTORY_START */';
const END_MARKER = '/* AUTO:FRONT_INDEX_DIRECTORY_END */';

function listRecentUpdates(limit = 8) {
  const dir = path.join(ROOT, 'pages', 'reports', 'updates');
  if (!fs.existsSync(dir)) return [];
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => ({ f, mtime: fs.statSync(path.join(dir, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime)
    .slice(0, limit)
    .map(({ f }) => ({ href: `/reports/updates/${f.replace(/\.tsx$/, '')}`, label: f.replace(/\.tsx$/, '').replace(/[-_]/g, ' ') }));
  return files;
}

function buildSection(updates) {
  if (!updates.length) return '';
  const cards = updates
    .map(
      (u) =>
        `          <Link href="${u.href}"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">${u.label}</div><div className="mt-1 text-sm text-white/75">Autonomous content</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>`
    )
    .join('\n');
  return [
    '<section id="ai-content" className="mx-auto max-w-7xl px-6 pb-16">',
    '  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous AI Content</h2>',
    '  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Fresh, diversified insights created by cloud agents.</p>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">',
    cards,
    '  </div>',
    '</section>'
  ].join('\n');
}

function injectBetweenMarkers(source, startMarker, endMarker, moreHtml) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) return source;
  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  return `${before}\n\n${moreHtml}\n\n${after}`;
}

(function main() {
  if (!fs.existsSync(FRONT_PAGE)) {
    console.log('ai-content-advertiser: front page not found, skipping');
    return;
  }
  const updates = listRecentUpdates(8);
  if (!updates.length) {
    console.log('ai-content-advertiser: no updates yet');
    return;
  }
  const add = buildSection(updates);
  const original = fs.readFileSync(FRONT_PAGE, 'utf8');
  const updated = injectBetweenMarkers(original, START_MARKER, END_MARKER, add);
  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    console.log('ai-content-advertiser: injected latest content section');
  } else {
    console.log('ai-content-advertiser: no change');
  }
})();


