#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fileExists(p) {
  try { fs.accessSync(p, fs.constants.F_OK); return true; } catch { return false; }
}

function detectLinks(root) {
  const pagesDir = path.join(root, 'pages');
  const links = [];
  const internal = [
    { href: '/automation', title: 'Automation Hub', desc: 'Factories, agents, and live workflows' },
    { href: '/site-health', title: 'Site Health', desc: 'A11y, performance, and link integrity' },
    { href: '/reports/seo', title: 'SEO Audit', desc: 'Continuous on‑site improvements' },
    { href: '/reports/ai-trends', title: 'AI Trends', desc: 'Ecosystem intelligence signals' },
    { href: '/reports/github-trending', title: 'GitHub Trending', desc: 'Daily hottest repos' },
    { href: '/reports/ai-papers', title: 'AI Papers Watch', desc: 'Recent arXiv highlights' },
    { href: '/reports/hn-top', title: 'HN Top Stories', desc: 'Top stories with points' },
    { href: '/newsroom', title: 'Newsroom', desc: 'Autonomous updates & evolution' },
    { href: '/main/front', title: 'Front Systems Hub', desc: 'Curated futuristic front experience' },
  ];
  internal.forEach((i) => {
    const check = i.href.endsWith('/') ? i.href.slice(0, -1) : i.href;
    const parts = check.split('/').filter(Boolean);
    const candidateIndex = path.join(pagesDir, ...parts, 'index.tsx');
    const candidatePage = path.join(pagesDir, ...parts) + '.tsx';
    if (fileExists(candidateIndex) || fileExists(candidatePage)) links.push({ type: 'internal', ...i });
  });

  const pkgPath = path.join(root, 'package.json');
  let repoUrl = 'https://github.com/Zion-Holdings/zion.app';
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    if (pkg.repository && typeof pkg.repository.url === 'string') {
      repoUrl = pkg.repository.url.replace(/^git\+/, '').replace(/\.git$/, '');
    }
  } catch {}

  links.push({ type: 'external', href: repoUrl + '/actions', title: 'Live Pipelines', desc: 'CI logs & artifacts' });
  links.push({ type: 'external', href: repoUrl + '/tree/main/docs', title: 'Docs & Guides', desc: 'Technical notes' });

  const seen = new Set();
  return links.filter((l) => (seen.has(l.href) ? false : (seen.add(l.href), true)));
}

function renderLinks(links) {
  return links.map((l) => {
    const card = `<div className=\"text-base font-semibold\">${l.title}</div><div className=\"mt-1 text-sm text-white/75\">${l.desc}</div>`;
    if (l.type === 'external') {
      return `            <a href=\"${l.href}\" target=\"_blank\" rel=\"noopener\" className=\"group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring\">${card}</a>`;
    }
    return `            <Link href=\"${l.href}\"><a className=\"group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring\">${card}</a></Link>`;
  }).join('\n');
}

function main() {
  const root = path.resolve(__dirname, '..');
  const target = path.join(root, 'pages', 'main', 'front', 'index.tsx');
  if (!fileExists(target)) {
    console.error('Front page not found at', target);
    process.exit(0);
  }
  const startMarker = '{/* AUTO-GENERATED: FRONT_ADS_START */}';
  const endMarker = '{/* AUTO-GENERATED: FRONT_ADS_END */}';
  const src = fs.readFileSync(target, 'utf8');
  const s = src.indexOf(startMarker);
  const e = src.indexOf(endMarker);
  if (s === -1 || e === -1 || e <= s) {
    console.error('Markers not found or invalid order.');
    process.exit(0);
  }

  const before = src.slice(0, s + startMarker.length);
  const after = src.slice(e);
  const links = detectLinks(root);
  const grid = [
    '',
    '        <section id=\"auto-ads\" className=\"mx-auto max-w-7xl px-6 pb-16\">',
    '          <h2 className=\"text-center text-2xl font-bold tracking-wide text-white/90\">Auto‑advertised Highlights</h2>',
    '          <div className=\"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\">',
    renderLinks(links),
    '          </div>',
    '        </section>',
    ' '
  ].join('\n');
  const out = before + '\n' + grid + after;
  if (out === src) {
    console.log('Front auto-ads unchanged.');
    return;
  }
  fs.writeFileSync(target, out);
  console.log('Front auto-ads updated.');
}

main();