#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = process.cwd();
const PAGES_DIR = path.join(PROJECT_ROOT, 'pages');
const HOME_PAGE = path.join(PAGES_DIR, 'index.tsx');

const START_MARK = '{/* AUTO-GENERATED: HOME_UPDATER_START */}';
const END_MARK = '{/* AUTO-GENERATED: HOME_UPDATER_END */}';

function fileExists(p) { try { return fs.existsSync(p); } catch { return false; } }
function readFile(p) { return fs.readFileSync(p, 'utf8'); }
function writeFile(p, c) { fs.writeFileSync(p, c, 'utf8'); }

function discoverInternalPages() {
  const links = [];
  // Top-level pages
  const topFiles = fs.readdirSync(PAGES_DIR, { withFileTypes: true });
  for (const entry of topFiles) {
    if (entry.isFile()) {
      if (!/\.tsx?$/.test(entry.name)) continue;
      const base = entry.name.replace(/\.(tsx|ts|jsx|js)$/i, '');
      if (base === 'index' || base.startsWith('_')) continue;
      links.push({ href: `/${base}`, label: toTitle(base) });
    } else if (entry.isDirectory()) {
      // directory with index.tsx
      const idx = path.join(PAGES_DIR, entry.name, 'index.tsx');
      if (fileExists(idx)) {
        links.push({ href: `/${entry.name}`, label: toTitle(entry.name) });
      }
    }
  }
  // Sort for stable output
  links.sort((a, b) => a.href.localeCompare(b.href));
  return links;
}

function toTitle(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function curatedCards(existing) {
  const byHref = new Set(existing.map(x => x.href));
  const cards = [];
  // Always include Automation Hub if exists
  if (byHref.has('/automation')) {
    cards.push({ href: '/automation', text: 'Automation Hub — live agents & reports' });
  }
  if (byHref.has('/newsroom')) {
    cards.push({ href: '/newsroom', text: 'Newsroom — latest autonomous updates' });
  }
  if (byHref.has('/site-health')) {
    cards.push({ href: '/site-health', text: 'Site Health — audits & insights' });
  }
  // Add any other discovered pages (up to 5)
  for (const p of existing) {
    if (['/automation','/newsroom','/site-health'].includes(p.href)) continue;
    if (cards.length >= 7) break;
    cards.push({ href: p.href, text: `${p.label} — explore` });
  }
  return cards;
}

function renderBlock(cards) {
  const lines = [];
  lines.push('<section className="mx-auto max-w-7xl px-6 pb-16">');
  lines.push('  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>');
  lines.push('  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">');
  lines.push('');
  for (const c of cards) {
    lines.push(`            <Link href="${c.href}"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">${escapeHtml(c.text)}</span></a></Link>`);
    lines.push('  ');
    lines.push('');
  }
  lines.push('  </div>');
  lines.push('</section>');
  return lines.join('\n');
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function replaceBetween(source, startMark, endMark, replacement) {
  const startIdx = source.indexOf(startMark);
  const endIdx = source.indexOf(endMark);
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    throw new Error('Marker block not found in pages/index.tsx');
  }
  const before = source.slice(0, startIdx + startMark.length);
  const after = source.slice(endIdx);
  // ensure newline formatting similar to existing file
  const content = '\n' + replacement + '\n';
  return before + '\n' + content + after;
}

function main() {
  if (!fileExists(HOME_PAGE)) {
    console.error('Homepage not found at', HOME_PAGE);
    process.exit(0);
  }
  const src = readFile(HOME_PAGE);
  const pages = discoverInternalPages();
  const cards = curatedCards(pages);
  const block = renderBlock(cards);
  const updated = replaceBetween(src, START_MARK, END_MARK, block);
  if (updated !== src) {
    writeFile(HOME_PAGE, updated);
    console.log(`Homepage auto-generated block updated with ${cards.length} card(s).`);
  } else {
    console.log('Homepage auto-generated block already up-to-date.');
  }
}

main();