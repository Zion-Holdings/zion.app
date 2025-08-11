#!/usr/bin/env node

<<<<<<< HEAD
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START_MARKER = '/* AUTO-GENERATED: FRONT_ADS_START */';
const END_MARKER = '/* AUTO-GENERATED: FRONT_ADS_END */';

function titleCase(slug) {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function discoverInternalPages() {
  const pagesDir = path.join(ROOT, 'pages');
  const results = [];

  function push(href, label, tagline) {
    results.push({ type: 'internal', href, label, tagline });
  }

  // Priority pages
  const priority = [
    { href: '/automation', label: 'Automation Hub', tagline: 'Live agents & workflows' },
    { href: '/site-health', label: 'Site Health', tagline: 'A11y, performance, links' },
    { href: '/reports/seo', label: 'SEO Audit', tagline: 'Continuous improvements' },
    { href: '/reports/ai-trends', label: 'AI Trends', tagline: 'Intelligence signals' },
    { href: '/newsroom', label: 'Newsroom', tagline: 'Latest autonomous updates' },
  ];
  for (const p of priority) {
    const check = p.href.startsWith('/reports/')
      ? path.join(ROOT, 'pages', 'reports', p.href.split('/').pop() + '.tsx')
      : p.href === '/automation'
      ? path.join(ROOT, 'pages', 'automation', 'index.tsx')
      : path.join(ROOT, 'pages', p.href.replace(/^\//, '') + '.tsx');
    if (fs.existsSync(check)) push(p.href, p.label, p.tagline);
  }

  // Fallback discovery of other top-level pages
  try {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('_')) continue;
      if (entry.isFile() && entry.name.endsWith('.tsx')) {
        const base = entry.name.replace(/\.tsx$/, '');
        if (['index', 'front'].includes(base)) continue;
        push('/' + base, titleCase(base), 'Explore more');
      }
      if (entry.isDirectory()) {
        const indexPath = path.join(pagesDir, entry.name, 'index.tsx');
        if (fs.existsSync(indexPath)) {
          push('/' + entry.name, titleCase(entry.name), entry.name === 'automation' ? 'Live agents & workflows' : 'Explore more');
        }
      }
    }
  } catch {}

  // Unique by href, limit
  const seen = new Set();
  const unique = [];
  for (const r of results) {
    if (!seen.has(r.href)) {
      seen.add(r.href);
      unique.push(r);
    }
  }
  return unique.slice(0, 12);
}

function discoverExternalLinks() {
  const repoUrl = 'https://github.com/Zion-Holdings/zion.app';
  return [
    { type: 'external', href: repoUrl + '/actions', label: 'Live Pipelines', tagline: 'CI logs & artifacts' },
    { type: 'external', href: repoUrl + '/tree/main/docs', label: 'Documentation', tagline: 'Technical notes & guides' },
    { type: 'external', href: repoUrl + '/blob/main/docs/CHANGELOG_AI.md', label: 'AI Changelog', tagline: 'Summarized updates' },
  ];
}

function buildCard(item) {
  const common = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo';
  const inner = `\n  <div className=\"text-base font-semibold\">${item.label}</div>\n  <div className=\"mt-1 text-sm text-white/75\">${item.tagline || ''}</div>\n`;
  if (item.type === 'external') {
    return `              <a href=\"${item.href}\" target=\"_blank\" rel=\"noopener\" className=\"${common}\">${inner}  <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>↗</span></div></a>`;
  }
  return `              <Link href=\"${item.href}\"><a className=\"${common}\">${inner}  <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>→</span></div></a></Link>`;
}

function generateSection(items) {
  return [
    '<section id="auto-promoted" className="mx-auto max-w-7xl px-6 pb-14">',
    '  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Auto‑Promoted Features</h2>',
    '  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Continuously curated promos linking to live hubs, reports, and docs.</p>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">',
    items.map(buildCard).join('\n'),
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
  return `${before}\n${replacement}\n${after}`;
}

(function main() {
  if (!fs.existsSync(FRONT_PAGE)) {
    console.log('Front page not found, skipping');
    process.exit(0);
  }
  const internal = discoverInternalPages();
  const external = discoverExternalLinks();
  const combined = [...internal, ...external].slice(0, 12);
  const block = generateSection(combined);
  const original = fs.readFileSync(FRONT_PAGE, 'utf8');
  let updated;
  try {
    updated = replaceBetweenMarkers(original, START_MARKER, END_MARKER, block);
  } catch (e) {
    console.log('Could not replace between markers:', e.message);
    process.exit(0);
  }
  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    console.log('Front index auto‑promotions updated.');
  } else {
    console.log('No updates required.');
  }
})();
=======
const fs = require('fs');
const path = require('path');

function fileExists(absolutePath) {
  try {
    fs.accessSync(absolutePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function buildItems(repoUrl, workspaceRoot) {
  const items = [];
  const pagesDir = path.join(workspaceRoot, 'pages');

  const internal = [
    { href: '/automation', label: 'Automation Hub — live agents & reports', desc: 'Factories, agents, and workflows', check: path.join(pagesDir, 'automation', 'index.tsx') },
    { href: '/reports/seo', label: 'SEO Audit — continuous improvements', desc: 'On‑site SEO artifacts', check: path.join(pagesDir, 'reports', 'seo.tsx') },
    { href: '/site-health', label: 'Site Health — audits & insights', desc: 'A11y, performance, links', check: path.join(pagesDir, 'site-health.tsx') },
    { href: '/reports/ai-trends', label: 'AI Trends — intelligence signals', desc: 'Ecosystem insights', check: path.join(pagesDir, 'reports', 'ai-trends.tsx') },
    { href: '/newsroom', label: 'Newsroom — autonomous updates', desc: 'Product evolution', check: path.join(pagesDir, 'newsroom.tsx') },
  ];

  internal.forEach((c) => {
    if (fileExists(c.check)) items.push({ type: 'internal', href: c.href, label: c.label, desc: c.desc });
  });

  if (fileExists(path.join(workspaceRoot, 'docs'))) {
    items.push({ type: 'external', href: `${repoUrl}/tree/main/docs`, label: 'Docs — technical notes & guides', desc: 'Documentation' });
  }

  return items;
}

function renderItems(items) {
  const lines = [];
  for (const item of items) {
    if (item.type === 'internal') {
      lines.push(
        `            <Link href="${item.href}"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" /><div className=\"text-base font-semibold\">${item.label}</div><div className=\"mt-1 text-sm text-white/75\">${item.desc}</div></a></Link>`
      );
      lines.push('');
    } else {
      lines.push(
        `            <a href="${item.href}" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" /><div className=\"text-base font-semibold\">${item.label}</div><div className=\"mt-1 text-sm text-white/75\">${item.desc}</div></a>`
      );
      lines.push('');
    }
  }
  return lines.join('\n');
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const targetPath = path.join(workspaceRoot, 'pages', 'main', 'front', 'index.tsx');

  if (!fileExists(targetPath)) {
    console.error('pages/main/front/index.tsx not found. Exiting.');
    process.exit(0);
  }

  const pkgPath = path.join(workspaceRoot, 'package.json');
  let repoUrl = 'https://github.com/Zion-Holdings/zion.app';
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    if (pkg.repository && typeof pkg.repository.url === 'string') {
      repoUrl = pkg.repository.url.replace(/^git\+/, '').replace(/\.git$/, '');
    }
  } catch {}

  const startMarker = '/* AUTO-GENERATED: FRONT_ADS_START */';
  const endMarker = '/* AUTO-GENERATED: FRONT_ADS_END */';

  const original = fs.readFileSync(targetPath, 'utf8');
  const startIdx = original.indexOf(startMarker);
  const endIdx = original.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    console.error('Markers not found or invalid order in front page. Exiting.');
    process.exit(0);
  }

  const before = original.slice(0, startIdx + startMarker.length);
  const after = original.slice(endIdx);

  const items = buildItems(repoUrl, workspaceRoot);
  const itemsMarkup = renderItems(items);

  const section = [
    '',
    '        <section className="mx-auto max-w-7xl px-6 pb-16">',
    '          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>',
    '          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">',
    '',
    itemsMarkup,
    '          </div>',
    '        </section>',
    '        '
  ].join('\n');

  const updated = before + section + after;

  if (updated !== original) {
    fs.writeFileSync(targetPath, updated);
    console.log('Front page explore section updated.');
  } else {
    console.log('Front page explore section already up to date.');
  }
}

main();
>>>>>>> 66c36b7ed6 (feat(front): new Netlify automations + futuristic front ads section)
