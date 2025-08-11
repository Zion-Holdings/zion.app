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
    'front-enhancer': 'Run front improvements continuously.',
    'frontpage-enhancer': 'Refresh frontpage content on schedule.',
    'homepage_advertiser': 'Auto‑advertise homepage features and links.',
    'cloud_orchestrator': 'Coordinate broader agents and git sync.',
    'sitemap_runner': 'Keep sitemap fresh for SEO.',
    'marketing-and-features-promo': 'Regenerate promos and deep links.',
    'fast-front-promoter': 'Fast iteration of front/home updates.',
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

<<<<<<< HEAD
// New: discover Netlify scheduled functions and tools
function discoverNetlifyTools() {
  const fnDir = path.join(ROOT, 'netlify', 'functions');
  const items = [];
  const nameMap = {
    'front-enhancer': { label: 'Front Enhancer', tagline: 'Futuristic front updates (10m)' },
    'frontpage-enhancer': { label: 'Frontpage Enhancer', tagline: 'Homepage promos (20m)' },
    'homepage_advertiser': { label: 'Homepage Advertiser', tagline: 'Fresh highlights (15m)' },
    'cloud_orchestrator': { label: 'Cloud Orchestrator', tagline: 'Coordinates agents (4h)' },
    'fast-front-promoter': { label: 'Fast Front Promoter', tagline: 'Quick promos (15m)' },
    'homepage-updater': { label: 'Homepage Updater', tagline: 'Explore section refresh' },
    'continuous-orchestrator': { label: 'Continuous Orchestrator', tagline: 'Multi-step curator (5m)' },
    'ultrafast-orchestrator': { label: 'Ultrafast Orchestrator', tagline: 'Every minute updates' },
    'sitemap_runner': { label: 'Sitemap Runner', tagline: 'Keeps URLs fresh (12h)' },
    'link-and-health-scheduler': { label: 'Link & Health', tagline: 'Link checks & audits (6h)' },
    'marketing-and-features-promo': { label: 'Marketing & Promo', tagline: 'Feature promos (2h)' },
  };
  try {
    if (!fs.existsSync(fnDir)) return items;
    const files = fs.readdirSync(fnDir).filter((f) => f.endsWith('.js'));
    for (const file of files) {
      const base = file.replace(/\.js$/, '');
      const info = nameMap[base] || { label: titleCase(base.replace(/[-_]/g, ' ')), tagline: 'Scheduled function' };
      const href = `/.netlify/functions/${base}`;
      items.push({ type: 'external', href, label: info.label, tagline: info.tagline });
    }
  } catch (err) {
    log(`Error discovering Netlify tools: ${err.message}`);
  }
  return items;
}

function buildCard(item) {
  const cardClass = 'bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10';
  const textSpan = `<span className=\"text-white/90\">${item.label}${item.tagline ? ' — ' + item.tagline : ''}</span>`;
  if (item.type === 'internal') {
    return `            <Link href=\"${item.href}\"><a className=\"${cardClass}\">${textSpan}</a></Link>`;
  }
  return `            <a href=\"${item.href}\" target=\"_blank\" rel=\"noopener\" className=\"${cardClass}\">${textSpan}</a>`;
}

function generateSectionTSX(items) {
  const header = `
<section className=\"mx-auto max-w-7xl px-6 pb-16\">
  <h2 className=\"text-center text-2xl font-bold tracking-wide text-white/90\">Explore more</h2>
  <div className=\"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\">
`;
  const body = items.map(buildCard).join('\n\n');
  const footer = `
  </div>
</section>`;
  return header + (body ? `
${body}
` : '') + footer;
}

function replaceBetweenMarkers(source, startMarker, endMarker, replacement) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('Markers not found or in wrong order in pages/index.tsx');
  }
  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  return `${before}\n${replacement}\n${after}`;
}

(async function main() {
  log('Homepage Auto Advertiser started');

  const internal = discoverInternalPages();
  const netlifyTools = discoverNetlifyTools();
  const combined = [...internal, ...netlifyTools].slice(0, 12);
  const tsxBlock = generateSectionTSX(combined);

=======
(function main() {
>>>>>>> d4c00f9a67 (feat(front): new cloud automations + futuristic homepage tools and promos)
  if (!fs.existsSync(INDEX_PAGE)) {
    console.error('index.tsx not found');
    process.exit(0);
  }
  let content = fs.readFileSync(INDEX_PAGE, 'utf8');
  content = ensureMarkers(content);

  const fns = listFunctions();
  const section = buildToolsSection(fns);

  const hasMarkers = content.includes(START) && content.includes(END);
  if (!hasMarkers) {
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