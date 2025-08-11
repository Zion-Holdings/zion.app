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

function buildCards(workspaceRoot) {
  const pagesDir = path.join(workspaceRoot, 'pages');
  const cards = [];

  const internal = [
    { href: '/automation', title: 'Automation Hub', desc: 'Live automations, schedulers and reports', check: path.join(pagesDir, 'automation', 'index.tsx') },
    { href: '/site-health', title: 'Site Health', desc: 'A11y, performance, and link integrity', check: path.join(pagesDir, 'site-health.tsx') },
    { href: '/reports/seo', title: 'AI SEO Auditor', desc: 'Continuous on-site improvements', check: path.join(pagesDir, 'reports', 'seo.tsx') },
    { href: '/reports/ai-trends', title: 'AI Trends Radar', desc: 'Signals for new factories', check: path.join(pagesDir, 'reports', 'ai-trends.tsx') },
    { href: '/newsroom', title: 'Newsroom', desc: 'Autonomous updates & releases', check: path.join(pagesDir, 'newsroom.tsx') },
    { href: '/', title: 'Homepage', desc: 'Overview and quick links', check: path.join(pagesDir, 'index.tsx') },
  ];

  internal.forEach((c) => { if (fileExists(c.check)) cards.push({ type: 'internal', ...c }); });

  // Netlify functions (treated as external anchors)
  const origin = process.env.CANONICAL_URL || '';
  cards.push({ type: 'external', href: `${origin}/.netlify/functions/maintenance-scheduler`, title: 'Maintenance Scheduler', desc: 'Netlify scheduled jobs' });
  cards.push({ type: 'external', href: `${origin}/.netlify/functions/marketing-scheduler`, title: 'Marketing Scheduler', desc: 'Campaigns & content' });

  return cards;
}

function renderCards(cards) {
  const lines = [];
  cards.forEach((card) => {
    const content = [
      '<div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />',
      `<div className="text-base font-semibold">${card.title}</div>`,
      `<div className="mt-1 text-sm text-white/75">${card.desc}</div>`,
      '<div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>'
    ].join('\n              ');

    if (card.type === 'internal') {
      lines.push(
        `            <Link href="${card.href}">\n              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">\n              ${content}\n              </a>\n            </Link>`
      );
    } else {
      lines.push(
        `            <a href="${card.href}" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">\n              ${content}\n            </a>`
      );
    }
    lines.push('');
  });
  return lines.join('\n');
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const frontPath = path.join(workspaceRoot, 'pages', 'main', 'front', 'index.tsx');
  if (!fileExists(frontPath)) {
    console.error('pages/main/front/index.tsx not found. Exiting.');
    process.exit(0);
  }

  const startMarker = '/* AUTO-GENERATED: FRONT_UPGRADER_START */';
  const endMarker = '/* AUTO-GENERATED: FRONT_UPGRADER_END */';

  const original = fs.readFileSync(frontPath, 'utf8');
  const s = original.indexOf(startMarker);
  const e = original.indexOf(endMarker);
  if (s === -1 || e === -1 || e <= s) {
    console.error('Front markers not found or invalid order. Exiting.');
    process.exit(0);
  }

  const before = original.slice(0, s + startMarker.length);
  const after = original.slice(e);

  const cards = buildCards(workspaceRoot);
  const cardsMarkup = renderCards(cards);

  const section = [
    '',
    ' <section className="mx-auto max-w-7xl px-6 pb-16" id="front-auto-explore">',
    '   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more for the Front</h2>',
    '   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    '',
    cardsMarkup,
    '   </div>',
    ' </section>',
    ' '
  ].join('\n');

  const updated = before + section + after;
  if (updated === original) {
    console.log('Front hub section already up to date.');
    return;
  }

  fs.writeFileSync(frontPath, updated);
  console.log('Front hub explore section updated.');
}

main();