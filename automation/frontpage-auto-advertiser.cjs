#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LOG_DIR = path.join(ROOT, 'automation', 'logs');
const LOG_FILE = path.join(LOG_DIR, 'frontpage-auto-advertiser.log');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

ensureDir(LOG_DIR);

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START_MARKER = '{/* AUTO-GENERATED: FRONT_ADS_START */}';
const END_MARKER = '{/* AUTO-GENERATED: FRONT_ADS_END */}';

function titleCase(slug) {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function pageExists(rel) {
  return fs.existsSync(path.join(ROOT, 'pages', rel));
}

function discoverCards() {
  // Prioritize key destinations
  const cards = [];
  if (pageExists('automation/index.tsx')) cards.push({ href: '/automation', title: 'Automation Hub', desc: 'Factories, agents, and live workflows' });
  if (pageExists('reports/seo.tsx')) cards.push({ href: '/reports/seo', title: 'AI SEO Auditor', desc: 'Continuous on‑site SEO improvements' });
  if (pageExists('site-health.tsx')) cards.push({ href: '/site-health', title: 'Site Health', desc: 'A11y, performance, and link integrity' });
  if (pageExists('reports/ai-trends.tsx')) cards.push({ href: '/reports/ai-trends', title: 'AI Trends Radar', desc: 'Signals that inspire new automations' });
  if (pageExists('newsroom.tsx')) cards.push({ href: '/newsroom', title: 'Newsroom', desc: 'Latest autonomous updates' });

  // Add some dynamic discovery from pages root (fallbacks)
  try {
    const pagesDir = path.join(ROOT, 'pages');
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
    for (const entry of entries) {
      if (cards.length >= 12) break;
      if (entry.isFile() && entry.name.endsWith('.tsx')) {
        const base = entry.name.replace(/\.tsx$/, '');
        if (['index', '_app', '_document'].includes(base)) continue;
        const href = `/${base}`;
        if (!cards.find((c) => c.href === href)) {
          cards.push({ href, title: titleCase(base), desc: 'Explore more' });
        }
      } else if (entry.isDirectory()) {
        const idx = path.join(pagesDir, entry.name, 'index.tsx');
        if (fs.existsSync(idx)) {
          const href = `/${entry.name}`;
          if (!cards.find((c) => c.href === href)) {
            cards.push({ href, title: titleCase(entry.name), desc: 'Explore more' });
          }
        }
      }
    }
  } catch (e) {
    log(`Discovery error: ${e.message}`);
  }

  // External actions dashboard always useful
  cards.push({ href: 'https://github.com/Zion-Holdings/zion.app/actions', title: 'Live Workflows', desc: 'Observe pipelines running 24/7', external: true });

  return cards.slice(0, 12);
}

function buildCardTSX(card) {
  const baseClass = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo';
  const inner = `<div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" />\n<h3 className=\"text-base font-semibold\">${card.title}</h3>\n<p className=\"mt-1 text-sm text-white/75\">${card.desc}</p>\n<div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>→</span></div>`;
  if (card.external) {
    return `              <a href=\"${card.href}\" target=\"_blank\" rel=\"noopener\" className=\"${baseClass}\">${inner}</a>`;
  }
  return `              <Link href=\"${card.href}\"><a className=\"${baseClass}\">${inner}</a></Link>`;
}

function renderSection(cards) {
  return [
    `<section className=\"mx-auto max-w-7xl px-6 pb-16\">`,
    `  <div className=\"relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-violet-600/10 to-cyan-600/10 p-6 backdrop-blur-xl\">`,
    `    <div aria-hidden className=\"pointer-events-none absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,2.5rem_2.5rem,2.5rem_2.5rem] animate-grid\" />`,
    `    <h2 className=\"text-center text-2xl font-bold tracking-wide text-white/90\">Explore Zion Systems</h2>`,
    `    <p className=\"mx-auto mt-2 max-w-3xl text-center text-sm text-white/70\">Discover key features, capabilities, and benefits. Each card links to a dedicated page or live hub.</p>`,
    `    <div className=\"mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\">`,
    cards.map(buildCardTSX).join('\n'),
    `    </div>`,
    `  </div>`,
    `</section>`,
  ].join('\n');
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
  log('Frontpage Auto Advertiser started');
  if (!fs.existsSync(FRONT_PAGE)) {
    log('Frontpage not found; aborting');
    process.exit(0);
  }

  const original = fs.readFileSync(FRONT_PAGE, 'utf8');
  const cards = discoverCards();
  const section = renderSection(cards);

  let updated;
  try {
    updated = replaceBetweenMarkers(original, START_MARKER, END_MARKER, section);
  } catch (err) {
    log(`Failed to apply update: ${err.message}`);
    process.exit(0);
  }

  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    log('Frontpage updated between markers.');
  } else {
    log('No changes needed.');
  }

  log('Frontpage Auto Advertiser finished');
  process.exit(0);
})();