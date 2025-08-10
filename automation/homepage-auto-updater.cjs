const fs = require('fs');
const path = require('path');

const REPO_SLUG = 'Zion-Holdings/zion.app';
const WORKFLOWS_DIR = path.resolve(__dirname, '..', '.github', 'workflows');
const INDEX_PAGE = path.resolve(__dirname, '..', 'pages', 'index.tsx');

function toTitleCase(text) {
  return text
    .split(/[-_\s]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function readWorkflows() {
  try {
    const files = fs.readdirSync(WORKFLOWS_DIR);
    const autonomous = files
      .filter((f) => f.startsWith('autonomous-') && f.endsWith('.yml'))
      .map((f) => ({
        file: f,
        name: f.replace(/\.yml$/, ''),
      }))
      .map(({ file, name }) => {
        const core = name.replace(/^autonomous-/, '');
        const title = toTitleCase(core);
        return {
          type: 'external',
          href: `https://github.com/${REPO_SLUG}/actions/workflows/${file}`,
          label: `${title} — run / view`,
        };
      })
      .sort((a, b) => a.label.localeCompare(b.label));
    return autonomous;
  } catch (e) {
    return [];
  }
}

function fileExists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch (_) {
    return false;
  }
}

function discoverInternalPages() {
  const root = path.resolve(__dirname, '..', 'pages');
  const internal = [];
  const candidates = [
    { href: '/automation', label: 'Automation Hub — live agents & reports', check: path.join(root, 'automation', 'index.tsx') },
    { href: '/newsroom', label: 'Newsroom — latest autonomous updates', check: path.join(root, 'newsroom.tsx') },
    { href: '/site-health', label: 'Site Health — audits & insights', check: path.join(root, 'site-health.tsx') },
  ];
  for (const c of candidates) {
    if (fileExists(c.check)) internal.push({ type: 'internal', href: c.href, label: c.label });
  }
  return internal;
}

function buildItems() {
  const internal = discoverInternalPages();
  const workflows = readWorkflows();

  const curated = [
    // Prefer a small, high-signal set for the homepage
    ...internal,
    // Pick a few noteworthy workflows by friendly name if present
  ];

  // Choose top workflows by a preferred order if they exist
  const prefer = [
    'Quick Fixes',
    'Deep Maintenance',
    'Marketing Seo',
    'Content Curation',
    'Deps Upgrade',
    'Cloud',
  ];

  const preferred = [];
  for (const p of prefer) {
    const idx = workflows.findIndex((w) => w.label.toLowerCase().startsWith(p.toLowerCase()))
      ;
    if (idx !== -1) {
      preferred.push(workflows[idx]);
    }
  }

  // Fill remaining up to max items
  const MAX_ITEMS = 10;
  const used = new Set(preferred.map((i) => i.href));
  const remaining = workflows.filter((w) => !used.has(w.href));
  const picked = [...curated, ...preferred, ...remaining].slice(0, MAX_ITEMS);
  return picked;
}

function generateBlock(items) {
  const lines = [];
  lines.push('<section className="mx-auto max-w-7xl px-6 pb-16">');
  lines.push('  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>');
  lines.push('  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">');
  lines.push('');

  for (const item of items) {
    if (item.type === 'internal') {
      lines.push(`            <Link href="${item.href}"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">${item.label}</span></a></Link>`);
      lines.push('  ');
      lines.push('');
    } else {
      lines.push(`            <a href="${item.href}" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">${item.label}</span></a>`);
      lines.push('  ');
      lines.push('');
    }
  }

  lines.push('  </div>');
  lines.push('</section>');
  return lines.join('\n');
}

function updateIndexPage() {
  const contents = fs.readFileSync(INDEX_PAGE, 'utf8');
  const startMarker = '{/* AUTO-GENERATED: HOME_UPDATER_START */}';
  const endMarker = '{/* AUTO-GENERATED: HOME_UPDATER_END */}';

  const startIdx = contents.indexOf(startMarker);
  const endIdx = contents.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    console.error('Markers not found in pages/index.tsx');
    process.exit(1);
  }

  const before = contents.slice(0, startIdx + startMarker.length);
  const after = contents.slice(endIdx);

  const items = buildItems();
  const block = '\n' + generateBlock(items) + '\n';

  const updated = before + block + after;

  if (updated !== contents) {
    fs.writeFileSync(INDEX_PAGE, updated);
    console.log('Homepage updated successfully.');
  } else {
    console.log('No changes needed.');
  }
}

updateIndexPage();