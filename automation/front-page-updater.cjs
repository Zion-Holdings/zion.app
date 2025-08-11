#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START_MARKER = '/* AUTO-GENERATED: FRONT_UPDATER_START */';
const END_MARKER = '/* AUTO-GENERATED: FRONT_UPDATER_END */';

function titleCase(slug) {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function discoverInternal() {
  const items = [];
  const add = (href, label, desc) => items.push({ type: 'internal', href, label, desc });

  const pages = [
    ['/automation', 'Automation Hub', 'Factories & live workflows'],
    ['/site-health', 'Site Health', 'A11y, performance, link checks'],
    ['/reports/seo', 'SEO Audit', 'On-site improvements & artifacts'],
    ['/reports/ai-trends', 'AI Trends', 'Signals that inspire new factories'],
    ['/newsroom', 'Newsroom', 'Autonomous updates & evolution'],
  ];
  pages.forEach(([href, label, desc]) => add(href, label, desc));
  return items;
}

function discoverExternal() {
  const repo = 'https://github.com/Zion-Holdings/zion.app';
  return [
    { type: 'external', href: `${repo}/actions`, label: 'Live Pipelines', desc: 'CI logs & artifacts' },
    { type: 'external', href: `${repo}/tree/main/docs`, label: 'Documentation', desc: 'Technical notes & guides' },
    { type: 'external', href: `${repo}/blob/main/docs/CHANGELOG_AI.md`, label: 'AI Changelog', desc: 'Summarized autonomous changes' },
  ];
}

function buildCard(item) {
  const common = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover';
  const body = `\n                  <div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" />\n\n                  <div className=\"text-base font-semibold\">${item.label}</div>\n                  <div className=\"mt-1 text-sm text-white/75\">${item.desc}</div>\n                  <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>${item.type === 'external' ? '↗' : '→'}</span></div>\n`;
  if (item.type === 'external') {
    return `            <a href=\"${item.href}\" target=\"_blank\" rel=\"noopener\" className=\"${common}\">${body}            </a>`;
  }
  return `            <Link href=\"${item.href}\"><a className=\"${common}\">${body}            </a></Link>`;
}

function generateTSX() {
  const items = [...discoverInternal(), ...discoverExternal()].slice(0, 8);
  const header = `\n<section id=\"auto-highlights\" className=\"mx-auto max-w-7xl px-6 pb-16\">\n  <h2 className=\"text-center text-2xl font-bold tracking-wide text-white/90\">Auto Highlights</h2>\n  <div className=\"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4\">\n`;
  const body = items.map(buildCard).join('\n\n');
  const footer = `\n  </div>\n</section>`;
  return header + (body ? `\n${body}\n` : '') + footer;
}

function replaceBetweenMarkers(source, startMarker, endMarker, replacement) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('Markers not found or wrong order in front page');
  }
  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  return `${before}\n${replacement}\n${after}`;
}

(function main() {
  if (!fs.existsSync(FRONT_PAGE)) {
    console.error('Front page not found:', FRONT_PAGE);
    process.exit(0);
  }
  const original = fs.readFileSync(FRONT_PAGE, 'utf8');
  const tsx = generateTSX();
  let updated;
  try {
    updated = replaceBetweenMarkers(original, START_MARKER, END_MARKER, tsx);
  } catch (err) {
    console.error('Front updater failed:', err.message);
    process.exit(0);
  }
  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    console.log('Front page auto highlights updated.');
  } else {
    console.log('No changes needed.');
  }
})();