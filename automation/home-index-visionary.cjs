#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const HOME_PAGE = path.join(ROOT, 'pages', 'index.tsx');

const START_MARK = '/* AUTO-GENERATED: HOME_VISIONARY_START */';
const END_MARK = '/* AUTO-GENERATED: HOME_VISIONARY_END */';

function ensureImports(content) {
  if (!content.includes("from 'next/link'")) {
    content = content.replace(/(import\s+Head\s+from\s+'next\/head';?\s*)/, `$1\nimport Link from 'next/link';\n`);
  }
  return content;
}

function buildSection() {
  const tools = [
    { title: 'Front Visionary Expander', desc: 'Enhances main/front with animated sections and deep links.', href: '/.netlify/functions/front-visionary-expander' },
    { title: 'Home Visionary Expander', desc: 'Refreshes homepage highlights and links.', href: '/.netlify/functions/home-visionary-expander' },
    { title: 'Continuous Orchestrator', desc: 'Runs multi‑tool refresh and sitemap on a fast cadence.', href: '/.netlify/functions/continuous-orchestrator' },
  ];

  const toolCard = (t) => `
              <a key="${t.title}" href="${t.href}" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">${t.title}</div>
                <div className="mt-1 text-sm text-white/75">${t.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>`;

  const links = [
    { href: '/main/front#features', label: 'Features — explore capabilities' },
    { href: '/main/front#capabilities', label: 'Capabilities — what agents can do' },
    { href: '/main/front#benefits', label: 'Benefits — outcomes & ROI' },
    { href: '/automation', label: 'Automation Hub — live agents & reports' },
    { href: '/site-health', label: 'Site Health — audits & insights' },
  ];

  const linkItem = (l) => `
            <Link href="${l.href}"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">${l.label}</span></a></Link>`;

  return [
    START_MARK,
    `
        <section id="home-visionary" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Visionary Automations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Futuristic templates, animated backgrounds, and deep links — continuously curated by cloud functions.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
${tools.map(toolCard).join('\n')}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
${links.map(linkItem).join('\n')}
          </div>
        </section>`,
    END_MARK,
  ].join('\n');
}

function upsert() {
  if (!fs.existsSync(HOME_PAGE)) {
    console.log('Home page not found, skipping');
    process.exit(0);
  }
  let content = fs.readFileSync(HOME_PAGE, 'utf8');
  content = ensureImports(content);

  const generated = buildSection();
  const hasMarks = content.includes(START_MARK) && content.includes(END_MARK);

  if (hasMarks) {
    const nextContent = content.replace(new RegExp(`${START_MARK}[\s\S]*?${END_MARK}`), generated);
    if (nextContent !== content) {
      fs.writeFileSync(HOME_PAGE, nextContent, 'utf8');
      console.log('Updated visionary section in home page.');
    } else {
      console.log('No home visionary changes to apply.');
    }
    return;
  }

  // Insert before closing </main> for predictable placement
  const mainCloseIdx = content.lastIndexOf('</main>');
  const insertAt = mainCloseIdx !== -1 ? mainCloseIdx : content.length;
  const nextContent = content.slice(0, insertAt) + `\n        ${generated}\n` + content.slice(insertAt);
  fs.writeFileSync(HOME_PAGE, nextContent, 'utf8');
  console.log('Inserted visionary section in home page.');
}

try {
  upsert();
} catch (e) {
  console.error('home-index-visionary failed:', e);
  process.exitCode = 1;
}