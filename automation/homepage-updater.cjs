#!/usr/bin/env node

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

  // Internal pages detection
  const internalCandidates = [
    { href: '/automation', label: 'Automation Hub — live agents & reports', check: path.join(pagesDir, 'automation', 'index.tsx') },
    { href: '/newsroom', label: 'Newsroom — latest autonomous updates', check: path.join(pagesDir, 'newsroom.tsx') },
    { href: '/site-health', label: 'Site Health — audits & insights', check: path.join(pagesDir, 'site-health.tsx') },
  ];

  internalCandidates.forEach((c) => {
    if (fileExists(c.check)) items.push({ type: 'internal', href: c.href, label: c.label });
  });

  // External useful links
  items.push({ type: 'external', href: `${repoUrl}/actions`, label: 'GitHub Actions — live workflows' });
  if (fileExists(path.join(workspaceRoot, 'docs'))) {
    items.push({ type: 'external', href: `${repoUrl}/tree/main/docs`, label: 'Docs — technical notes & guides' });
  }

  return items;
}

function renderItems(items) {
  const lines = [];
  items.forEach((item) => {
    if (item.type === 'internal') {
      lines.push(
        `            <Link href="${item.href}"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">${item.label}</span></a></Link>`
      );
      lines.push('  ');
    } else {
      lines.push(
        `            <a href="${item.href}" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">${item.label}</span></a>`
      );
      lines.push('  ');
    }
  });
  return lines.join('\n');
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const indexPath = path.join(workspaceRoot, 'pages', 'index.tsx');

  if (!fileExists(indexPath)) {
    console.error('pages/index.tsx not found. Exiting.');
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

  const startMarker = '/* AUTO-GENERATED: HOME_UPDATER_START */';
  const endMarker = '/* AUTO-GENERATED: HOME_UPDATER_END */';

  const original = fs.readFileSync(indexPath, 'utf8');
  const startIdx = original.indexOf(startMarker);
  const endIdx = original.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    console.error('Markers not found or invalid order. Exiting.');
    process.exit(0);
  }

  const before = original.slice(0, startIdx + startMarker.length);
  const after = original.slice(endIdx);

  const items = buildItems(repoUrl, workspaceRoot);
  const itemsMarkup = renderItems(items);

  const section = [
    '',
    ' <section className="mx-auto max-w-7xl px-6 pb-16">',
    '   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>',
    '   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">',
    '',
    itemsMarkup,
    '   </div>',
    ' </section>',
    ' '
  ].join('\n');

  const updated = before + section + after;

  if (updated === original) {
    console.log('Homepage explore section already up to date.');
    return;
  }

  fs.writeFileSync(indexPath, updated);
  console.log('Homepage explore section updated.');
}

main();