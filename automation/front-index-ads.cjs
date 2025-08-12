#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');

const START = '/* AUTO-GENERATED: FRONT_ADS_START */';
const END = '/* AUTO-GENERATED: FRONT_ADS_END */';

function buildAds() {
  const items = [
    { title: 'Automation Hub', desc: 'Factories, agents, and live workflows', href: '/automation' },
    { title: 'AI SEO Auditor', desc: 'Continuous on‑site SEO improvements', href: '/reports/seo' },
    { title: 'Site Health', desc: 'A11y, performance, and link integrity', href: '/site-health' },
    { title: 'AI Trends', desc: 'Signals that inspire new automations', href: '/reports/ai-trends' },
    { title: 'Newsroom', desc: 'Curated updates and product evolution highlights', href: '/newsroom' },
    { title: 'Docs & Guides', desc: 'Technical notes and architecture', href: '/.netlify/functions/docs-index-runner' },
    { title: 'AI Changelog', desc: 'Summarized autonomous changes', href: '/newsroom' },
    { title: 'Cloud Automations', desc: 'Netlify scheduled functions powering jobs 24/7', href: '/automation' },
    { title: 'A11y Alt Text Auditor', desc: 'Find and propose alt text across images', href: '/reports/a11y' },
    { title: 'Metadata Optimizer', desc: 'Detect missing meta tags and propose fixes', href: '/reports/metadata' },
    { title: 'Stale Content Auditor', desc: 'Find stale files and publish a live report', href: '/.netlify/functions/stale-content-auditor-runner' },
    { title: 'Unused Exports Report', desc: 'Detects unused TS/JS exports and writes reports', href: '/.netlify/functions/unused-exports-runner' },
    { title: 'Spelling & Terminology Auditor', desc: 'Find brand/style inconsistencies; publish a report', href: '/.netlify/functions/spelling-terminology-runner' },
    { title: 'Reading Level Report', desc: 'Assess readability across docs and pages; commit insights', href: '/.netlify/functions/reading-level-runner' },
  ];

  const cards = items.map((item) => (
    item.external
      ? `            <a key="${item.title}" href="${item.href}" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">${item.title}</h3>
              <p className="mt-1 text-sm text-white/75">${item.desc}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>`
      : `            <Link key="${item.title}" href="${item.href}"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">${item.title}</h3>
              <p className="mt-1 text-sm text-white/75">${item.desc}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>`
  )).join('\n');

  return [
    START,
    '        <section id="auto-promoted" className="mx-auto max-w-7xl px-6 pb-14">',
    '          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Auto‑Promoted Features</h2>',
    '          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Continuously curated promos linking to live hubs, reports, and docs.</p>',
    '          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">',
    cards,
    '          </div>',
    '        </section>',
    END,
  ].join('\n');
}

(function main() {
  if (!fs.existsSync(FRONT_PAGE)) {
    console.error('front page not found');
    process.exit(0);
  }
  let content = fs.readFileSync(FRONT_PAGE, 'utf8');
  if (!content.includes(START) || !content.includes(END)) {
    console.error('markers not found for FRONT_ADS');
    process.exit(0);
  }
  const section = buildAds();
  const updated = content.replace(new RegExp(`${START}[\s\S]*?${END}`), section);
  if (updated !== content) {
    fs.writeFileSync(FRONT_PAGE, updated, 'utf8');
    console.log('Front index ads updated.');
  } else {
    console.log('No changes to front index ads.');
  }
})();