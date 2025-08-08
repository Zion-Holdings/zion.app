#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'homepage-promo', 'homepage-promo-actions.json');
const HOMEPAGE = path.join(__dirname, '..', 'pages', 'index.tsx');

const START_MARK = '{/* AUTO-GENERATED: HOMEPAGE_PROMOS_START */}';
const END_MARK = '{/* AUTO-GENERATED: HOMEPAGE_PROMOS_END */}';

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

function loadPages() {
  const data = readJson(REPORT);
  if (!data) return [];
  const pages = Array.isArray(data.discoveredPages) ? data.discoveredPages : [];
  return pages
    .filter(Boolean)
    .filter(p => p !== '' && p !== '/' && !p.startsWith('/api'))
    .filter(p => !p.match(/^\/_(app|document)$/))
    .filter(p => !p.endsWith('/[...slug]'))
    .slice(0, 24);
}

function ensureMarkers(src) {
  if (src.includes(START_MARK) && src.includes(END_MARK)) return src;
  // insert before closing </main>
  const insertAt = src.indexOf('</main>');
  if (insertAt === -1) return src;
  const block = `\n        ${START_MARK}\n        ${END_MARK}\n`;
  return src.slice(0, insertAt) + block + src.slice(insertAt);
}

function buildPromoSection(pages) {
  const items = pages.map(p => `
              <Link href="${p}">
                <a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10">
                  <span className="text-white">${p === '' ? '/' : p}</span>
                </a>
              </Link>`).join('\n');

  return `\n        ${START_MARK}\n        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Explore more</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">\n${items}\n          </div>
        </section>\n        ${END_MARK}`;
}

function updateHomepage() {
  if (!fs.existsSync(HOMEPAGE)) {
    console.log('Homepage not found, skipping.');
    return false;
  }
  const pages = loadPages();
  const src = fs.readFileSync(HOMEPAGE, 'utf8');
  const withMarkers = ensureMarkers(src);
  const promo = buildPromoSection(pages);

  let next;
  if (withMarkers.includes(START_MARK) && withMarkers.includes(END_MARK)) {
    const start = withMarkers.indexOf(START_MARK);
    const end = withMarkers.indexOf(END_MARK) + END_MARK.length;
    next = withMarkers.slice(0, start) + promo + withMarkers.slice(end);
  } else {
    next = withMarkers; // fallback
  }

  if (next !== src) {
    fs.writeFileSync(HOMEPAGE, next, 'utf8');
    console.log('Homepage promos applied.');
    return true;
  }
  console.log('No homepage promo changes needed.');
  return false;
}

updateHomepage();


