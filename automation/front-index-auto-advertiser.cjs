#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START = '{/* AUTO-GENERATED: FRONT_ADS_START */}';
const END = '{/* AUTO-GENERATED: FRONT_ADS_END */}';

function log(msg) {
  process.stdout.write(`[front-index-auto-advertiser] ${msg}\n`);
}

function buildTiles() {
  const items = [
    { href: '/automation', label: 'Automation Hub', tagline: 'Factories, agents, live workflows' },
    { href: '/site-health', label: 'Site Health', tagline: 'A11y, performance, link integrity' },
    { href: '/reports/seo', label: 'AI SEO Auditor', tagline: 'Continuous on‑site improvements' },
    { href: '/reports/ai-trends', label: 'AI Trends', tagline: 'Signals for new automations' },
    { href: '/newsroom', label: 'Newsroom', tagline: 'Autonomous updates & highlights' },
    { href: '/.netlify/functions/docs-index-runner', label: 'Docs', tagline: 'Technical notes & guides' },
    { href: '/newsroom', label: 'AI Changelog', tagline: 'Summarized autonomous changes' },
    { href: '/automation/functions-directory', label: 'Autonomy Directory', tagline: 'Browse all cloud functions' }
  ];

  return items.map((it) => {
    if (it.external) {
      return `
            <a href="${it.href}" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left text-white/80 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold text-white/90">${it.label}</div>
              <div className="mt-0.5 text-xs text-white/70">${it.tagline}</div>
              <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>`;
    }
    return `
            <Link href="${it.href}">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left text-white/80 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold text-white/90">${it.label}</div>
                <div className="mt-0.5 text-xs text-white/70">${it.tagline}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>`;
  }).join('\n');
}

function ensureImports(tsx) {
  if (!tsx.includes("from 'next/link'")) {
    tsx = tsx.replace(/(import\s+Head\s+from\s+'next\/head';?)/, `$1\nimport Link from 'next/link';`);
  }
  return tsx;
}

function apply() {
  if (!fs.existsSync(FRONT_PAGE)) {
    throw new Error(`Front page not found at ${FRONT_PAGE}`);
  }
  let tsx = fs.readFileSync(FRONT_PAGE, 'utf8');
  tsx = ensureImports(tsx);

  const startIdx = tsx.indexOf(START);
  const endIdx = tsx.indexOf(END);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('FRONT_ADS markers not found or misordered');
  }

  const replacement = `
<section id="auto-promoted" className="mx-auto max-w-7xl px-6 pb-14">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Auto‑Promoted Features</h2>
  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Continuously curated promos linking to live hubs, reports, and docs.</p>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
${buildTiles()}
  </div>
</section>`;

  const before = tsx.slice(0, startIdx + START.length);
  const after = tsx.slice(endIdx);
  const updated = `${before}\n${replacement}\n${after}`;

  if (updated !== tsx) {
    fs.writeFileSync(FRONT_PAGE, updated, 'utf8');
    log('Front ads section updated.');
  } else {
    log('No changes needed.');
  }
}

try {
  apply();
} catch (e) {
  console.error(e.message || e);
  process.exitCode = 1;
}