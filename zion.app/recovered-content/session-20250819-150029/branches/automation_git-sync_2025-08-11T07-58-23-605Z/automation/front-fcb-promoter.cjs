#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');

const START = '/* AUTO-GENERATED: FCB_PROMO_START */';
const END = '/* AUTO-GENERATED: FCB_PROMO_END */';

function ensureImports(tsx) {
  if (!tsx.includes("from 'next/link'")) {
    tsx = tsx.replace(/(import\s+Head\s+from\s+'next\/head';?)/, `$1\nimport Link from 'next/link';`);
  }
  return tsx;
}

function buildList(items) {
  return items.map((t) => `\n              <li className=\"flex items-start gap-2\">\n                <span className=\"mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse\" />\n                <span className=\"text-sm text-white/80\">${t}</span>\n              </li>`).join('\n');
}

function buildCards(cards) {
  const common = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo';
  return cards.map((c) => {
    if (c.external) {
      return `            <a href=\"${c.href}\" target=\"_blank\" rel=\"noopener\" className=\"${common}\">\n              <div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" />\n              <div className=\"text-base font-semibold\">${c.title}</div>\n              <div className=\"mt-1 text-sm text-white/75\">${c.desc}</div>\n              <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>↗</span></div>\n            </a>`;
    }
    return `            <Link href=\"${c.href}\">\n              <a className=\"${common}\">\n                <div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" />\n                <div className=\"text-base font-semibold\">${c.title}</div>\n                <div className=\"mt-1 text-sm text-white/75\">${c.desc}</div>\n                <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>→</span></div>\n              </a>\n            </Link>`;
  }).join('\n');
}

function buildSection() {
  const features = [
    'Self‑improving autonomous agents',
    'Repo sync to main with safe diffs',
    'Zero‑ops, cloud‑native runtime',
    'Defense‑in‑depth guardrails',
  ];
  const capabilities = [
    'Code quality and refactors',
    'A11y and performance tuning',
    'Content curation and SEO',
    'Observability and analytics',
  ];
  const benefits = [
    '24/7 progress without manual ops',
    'Faster feedback with small edits',
    'Higher confidence via layered checks',
    'Links to hubs, reports, and docs',
  ];

  const cards = [
    { title: 'Automation Hub', desc: 'Factories, agents, and live workflows', href: '/automation' },
    { title: 'Features', desc: 'Explore capabilities', href: '/main/front#features' },
    { title: 'Capabilities', desc: 'What agents can do', href: '/main/front#capabilities' },
    { title: 'Benefits', desc: 'Outcomes & ROI', href: '/main/front#benefits' },
    { title: 'AI SEO Auditor', desc: 'Continuous on‑site improvements', href: '/reports/seo' },
    { title: 'Site Health', desc: 'A11y, performance, link integrity', href: '/site-health' },
    { title: 'Newsroom', desc: 'Autonomous updates & highlights', href: '/newsroom' },
    { title: 'Docs', desc: 'Technical notes & guides', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/docs', external: true },
  ];

  return [
    START,
    `
        <section id="fcb-promo" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature • Capability • Benefit Portal</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Continuously curated links to the most impactful areas across the product. Futuristic, animated and always up to date.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-lg font-semibold">Features</div>
              <ul className="mt-3 space-y-2">${buildList(features)}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-lg font-semibold">Capabilities</div>
              <ul className="mt-3 space-y-2">${buildList(capabilities)}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-lg font-semibold">Benefits</div>
              <ul className="mt-3 space-y-2">${buildList(benefits)}
              </ul>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
${buildCards(cards)}
          </div>
        </section>`,
    END,
  ].join('\n');
}

function insertOrReplace(tsx) {
  const generated = buildSection();
  const hasMarkers = tsx.includes(START) && tsx.includes(END);
  if (hasMarkers) {
    const before = tsx.slice(0, tsx.indexOf(START) + START.length);
    const after = tsx.slice(tsx.indexOf(END));
    return `${before}\n${generated}\n${after}`;
  }
  // Insert after FRONT_FUTURIZER_END if present, else before </main>
  const FUT_END = '/* AUTO-GENERATED: FRONT_FUTURIZER_END */';
  let insertAt = tsx.indexOf(FUT_END);
  if (insertAt !== -1) insertAt += FUT_END.length;
  if (insertAt === -1) insertAt = tsx.lastIndexOf('</main>');
  if (insertAt === -1) insertAt = tsx.length;
  return tsx.slice(0, insertAt) + `\n\n${generated}\n\n` + tsx.slice(insertAt);
}

(function main() {
  if (!fs.existsSync(FRONT_PAGE)) {
    console.error('Front page not found:', FRONT_PAGE);
    process.exit(0);
  }
  let tsx = fs.readFileSync(FRONT_PAGE, 'utf8');
  tsx = ensureImports(tsx);
  const updated = insertOrReplace(tsx);
  if (updated !== tsx) {
    fs.writeFileSync(FRONT_PAGE, updated, 'utf8');
    console.log('FCB promo section updated.');
  } else {
    console.log('No FCB promo changes.');
  }
})();