#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(REPO_ROOT, 'pages');
const HOME_PATH = path.join(PAGES_DIR, 'index.tsx');

const START_MARK = '{/* AUTO-GENERATED: HOME_UPDATER_START */}';
const END_MARK = '{/* AUTO-GENERATED: HOME_UPDATER_END */}';

/**
 * Discover top-level pages and key sections to promote.
 * Only include routes that actually exist to avoid broken links.
 */
function discoverPromotions() {
  /** Map of route -> { title, tagline } */
  const candidates = new Map([
    ['/automation', { title: 'Automation Status', tagline: 'live agents & reports' }],
    ['/newsroom', { title: 'Newsroom', tagline: 'latest autonomous updates' }],
    ['/site-health', { title: 'Site Health', tagline: 'audits & insights' }],
  ]);

  // Validate existence of each route
  const existing = [];
  for (const [route, meta] of candidates.entries()) {
    const parts = route.split('/').filter(Boolean);
    let exists = false;
    if (parts.length === 1) {
      const name = parts[0];
      // pages/name.(tsx|jsx|js|mdx)
      exists = ['tsx', 'jsx', 'js', 'mdx', 'ts', 'md'].some((ext) =>
        fs.existsSync(path.join(PAGES_DIR, `${name}.${ext}`))
      );
      // pages/name/index.(tsx|...)
      exists = exists || ['tsx', 'jsx', 'js', 'mdx', 'ts', 'md'].some((ext) =>
        fs.existsSync(path.join(PAGES_DIR, name, `index.${ext}`))
      );
    } else {
      // nested route, e.g. /automation/index.tsx
      const fileBase = path.join(PAGES_DIR, ...parts);
      exists = ['tsx', 'jsx', 'js', 'mdx', 'ts', 'md'].some((ext) =>
        fs.existsSync(`${fileBase}.${ext}`)
      );
      exists = exists || ['tsx', 'jsx', 'js', 'mdx', 'ts', 'md'].some((ext) =>
        fs.existsSync(path.join(fileBase, `index.${ext}`))
      );
    }
    if (exists) existing.push({ route, ...meta });
  }

  // Sort by preferred order
  const order = ['/automation', '/newsroom', '/site-health'];
  existing.sort((a, b) => order.indexOf(a.route) - order.indexOf(b.route));

  return existing;
}

function buildCardsTsx(items) {
  // Build card grid using Next Link with nested <a> for Next.js v11 compatibility
  const cards = items
    .map((it) => {
      const label = `${it.title} — ${it.tagline}`;
      return (
        `            <Link href="${it.route}"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">${label}</span></a></Link>`
      );
    })
    .join('\n\n');

  return [
    '<section className="mx-auto max-w-7xl px-6 pb-16">',
    '  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">',
    '',
    cards,
    '  ',
    '  </div>',
    '</section>'
  ].join('\n');
}

function replaceBetweenMarkers(source, replacementBlock) {
  const startIdx = source.indexOf(START_MARK);
  const endIdx = source.indexOf(END_MARK);
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    throw new Error('Auto-generation markers not found or malformed in pages/index.tsx');
  }

  // Find the next newline after the start marker and the previous newline before the end marker
  const afterStart = source.indexOf('\n', startIdx) + 1;
  const beforeEnd = source.lastIndexOf('\n', endIdx);

  const newContent =
    source.slice(0, afterStart) +
    replacementBlock +
    '\n' +
    source.slice(beforeEnd);

  return newContent;
}

function main() {
  if (!fs.existsSync(HOME_PATH)) {
    console.error('Homepage not found at', HOME_PATH);
    process.exit(1);
  }

  const homepage = fs.readFileSync(HOME_PATH, 'utf8');
  const items = discoverPromotions();

  if (items.length === 0) {
    console.log('No promotional items discovered. Skipping edit.');
    process.exit(0);
  }

  const replacement = buildCardsTsx(items);
  const updated = replaceBetweenMarkers(homepage, replacement);

  if (updated === homepage) {
    console.log('Homepage auto-generated block already up to date.');
    process.exit(0);
  }

  fs.writeFileSync(HOME_PATH, updated, 'utf8');
  console.log('Homepage auto-generated promotional section updated successfully.');
}

try {
  main();
} catch (err) {
  console.error('Failed to update homepage:', err && err.message ? err.message : err);
  process.exit(1);
}