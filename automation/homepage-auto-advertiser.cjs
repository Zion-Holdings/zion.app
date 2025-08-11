#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INDEX_PAGE = path.join(ROOT, 'pages', 'index.tsx');
const FUNCS_DIR = path.join(ROOT, 'netlify', 'functions');

const START = '/* AUTO-GENERATED: HOME_TOOLS_START */';
const END = '/* AUTO-GENERATED: HOME_TOOLS_END */';

function listFunctions() {
  try {
    const files = fs.readdirSync(FUNCS_DIR).filter((f) => f.endsWith('.js'));
    return files.map((f) => f.replace(/\.js$/, ''));
  } catch {
    return [];
  }
}

function displayName(fn) {
  return fn
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function buildToolsSection(functionNames) {
  const knownDescriptions = {
    'homepage-enhancer': 'Enhance homepage sections continuously.',
    'link-crawler': 'Crawl and fix links; push changes automatically.',
    'site-crawler': 'Generate sitemap and search artifacts.',
    'automation-matrix': 'Curated set of automations on a 30m cadence.',
    'front-enhancer': 'Run front improvements continuously.',
    'frontpage-enhancer': 'Refresh frontpage content on schedule.',
    'homepage_advertiser': 'Auto‑advertise homepage features and links.',
    'cloud_orchestrator': 'Coordinate broader agents and git sync.',
    'sitemap_runner': 'Keep sitemap fresh for SEO.',
    'marketing-and-features-promo': 'Regenerate promos and deep links.',
    'fast-front-promoter': 'Fast iteration of front/home updates.'
  };

  const cards = functionNames
    .sort()
    .map((name) => {
      const title = displayName(name);
      const desc = knownDescriptions[name] || 'Scheduled automation running in the cloud.';
      const href = `/.netlify/functions/${name}`;
      return (
        `            <a key="${name}" href="${href}" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">${title}</h3>
              <p className="mt-1 text-sm text-white/75">${desc}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>`
      );
    })
    .join('\n');

  return [
    START,
    '',
    ' <section className="mx-auto max-w-7xl px-6 pb-20">',
    '   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Automation Engine — New Tools</h2>',
    '   <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Powered by scheduled cloud functions — no GitHub Actions required.</p>',
    '   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    cards,
    '   </div>',
    ' </section>',
    ' ',
    END,
  ].join('\n');
}

function ensureMarkers(content) {
  if (content.includes(START) && content.includes(END)) return content;
  // Insert before HOME_UPDATER_START if present, else before closing main
  const updaterStart = content.indexOf('/* AUTO-GENERATED: HOME_UPDATER_START */');
  const mainClose = content.lastIndexOf('</main>');
  const insertAt = updaterStart !== -1 ? updaterStart : (mainClose !== -1 ? mainClose : content.length);
  const section = [START, END].join('\n');
  return content.slice(0, insertAt) + '\n' + section + '\n' + content.slice(insertAt);
}

(function main() {
  if (!fs.existsSync(INDEX_PAGE)) {
    console.error('index.tsx not found');
    process.exit(0);
  }
  let content = fs.readFileSync(INDEX_PAGE, 'utf8');
  content = ensureMarkers(content);

  const functionNames = listFunctions();
  const section = buildToolsSection(functionNames);

  if (!content.includes(START) || !content.includes(END)) {
    console.error('Failed to ensure markers');
    process.exit(1);
  }

  const updated = content.replace(new RegExp(`${START}[\s\S]*?${END}`), section);
  if (updated !== content) {
    fs.writeFileSync(INDEX_PAGE, updated, 'utf8');
    console.log('Homepage tools section updated.');
  } else {
    console.log('No changes to homepage tools section.');
  }
})();