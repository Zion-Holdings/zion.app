#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const LOG_DIR = path.join(ROOT, 'automation', 'logs');
const LOG_FILE = path.join(LOG_DIR, 'front-index-curator.log');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}
ensureDir(LOG_DIR);

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function exists(p) {
  try { fs.accessSync(p, fs.constants.F_OK); return true; } catch { return false; }
}

function replaceBetweenMarkers(source, startMarker, endMarker, replacement) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error(`Markers not found or invalid order: ${startMarker}..${endMarker}`);
  }
  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  return `${before}\n${replacement}\n${after}`;
}

function buildCardTSX(title, desc, href, external = false) {
  const common = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo';
  const inner = `\n  <h3 className=\"text-lg font-semibold\">${title}</h3>\n  <p className=\"mt-1 text-sm text-white/75\">${desc}</p>\n`;
  if (external) {
    return `              <a href=\"${href}\" target=\"_blank\" rel=\"noopener\" className=\"${common}\">${inner}  <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>↗</span></div></a>`;
  }
  return `              <Link href=\"${href}\"><a className=\"${common}\">${inner}  <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>→</span></div></a></Link>`;
}

function curateFeatures(root) {
  const features = [];
  // Prefer existing pages
  const mainFront = '/main/front';
  const automation = exists(path.join(root, 'pages', 'automation', 'index.tsx')) ? '/automation' : '/';
  const siteHealth = exists(path.join(root, 'pages', 'site-health.tsx')) ? '/site-health' : mainFront + '#reports';
  const newsroom = exists(path.join(root, 'pages', 'newsroom.tsx')) ? '/newsroom' : mainFront + '#highlights';

  features.push(['Futuristic Templates', 'Animated surfaces, holographic cards and neon beams.', mainFront]);
  features.push(['Automation‑Driven UI', 'Live promos and content curated continuously.', automation]);
  features.push(['Site Health Dashboard', 'A11y, performance and link integrity reports.', siteHealth]);
  features.push(['Newsroom', 'Autonomous updates and evolution highlights.', newsroom]);

  // Optional external docs
  const repo = 'https://github.com/Zion-Holdings/zion.app';
  features.push(['Docs', 'Technical notes and guides.', `${repo}/tree/main/docs`]);

  return features.map(([t, d, h]) => buildCardTSX(t, d, h, /^https?:/.test(h))).join('\n');
}

function curateCapabilities(root) {
  const capabilities = [];
  const automation = exists(path.join(root, 'pages', 'automation', 'index.tsx')) ? '/automation' : '/';
  const siteHealth = exists(path.join(root, 'pages', 'site-health.tsx')) ? '/site-health' : '/';
  const seo = exists(path.join(root, 'pages', 'reports', 'seo.tsx')) ? '/reports/seo' : automation;

  capabilities.push(['Code Quality & Refactors', 'Lints, fixes and type‑safety improvements.', automation + '#capabilities']);
  capabilities.push(['Performance & A11y', 'Optimizes bundles and accessibility.', siteHealth]);
  capabilities.push(['Content & SEO', 'Curates metadata and improves reach.', seo]);
  capabilities.push(['Front Systems', 'Futuristic layouts for front‑of‑house.', '/main/front#templates']);
  capabilities.push(['Automation Hub', 'Orchestrate cloud agents and review outputs.', automation]);

  return capabilities.map(([t, d, h]) => buildCardTSX(t, d, h)).join('\n');
}

function curateBenefits(root) {
  const benefits = [
    ['24/7 Autonomous Progress', 'Continuous improvements without human intervention.', '/automation#benefits'],
    ['Rapid Feedback Loop', 'Safe, incremental edits with layered checks.', '/main/front#guardrails'],
    ['Direct to Main', 'Committed and pushed automatically.', '/newsroom'],
    ['Zero‑Ops Cloud', 'Runs fully in the cloud with schedules.', '/automation'],
    ['Futuristic UX', 'Neon, animated, holographic experiences.', '/main/front#templates']
  ];
  return benefits.map(([t, d, h]) => buildCardTSX(t, d, h)).join('\n');
}

(function main() {
  log('Front Index Curator started');

  if (!exists(FRONT_PAGE)) {
    log('Front page not found, exiting');
    process.exit(0);
  }

  const original = fs.readFileSync(FRONT_PAGE, 'utf8');

  const featuresGrid = [
    '<section className="mx-auto max-w-7xl px-6 pb-14">',
    '  <h2 className="sr-only">Auto‑Curated Features</h2>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    curateFeatures(ROOT),
    '  </div>',
    '</section>'
  ].join('\n');

  const capabilitiesGrid = [
    '<section className="mx-auto max-w-7xl px-6 pb-14">',
    '  <h2 className="sr-only">Auto‑Curated Capabilities</h2>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    curateCapabilities(ROOT),
    '  </div>',
    '</section>'
  ].join('\n');

  const benefitsGrid = [
    '<section className="mx-auto max-w-7xl px-6 pb-20">',
    '  <h2 className="sr-only">Auto‑Curated Benefits</h2>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    curateBenefits(ROOT),
    '  </div>',
    '</section>'
  ].join('\n');

  let updated = original;
  try {
    updated = replaceBetweenMarkers(updated, '/* AUTO-GENERATED: FRONT_FEATURES_START */', '/* AUTO-GENERATED: FRONT_FEATURES_END */', featuresGrid);
  } catch (e) {
    log('Features markers not found; skipping');
  }
  try {
    updated = replaceBetweenMarkers(updated, '/* AUTO-GENERATED: FRONT_CAPABILITIES_START */', '/* AUTO-GENERATED: FRONT_CAPABILITIES_END */', capabilitiesGrid);
  } catch (e) {
    log('Capabilities markers not found; skipping');
  }
  try {
    updated = replaceBetweenMarkers(updated, '/* AUTO-GENERATED: FRONT_BENEFITS_START */', '/* AUTO-GENERATED: FRONT_BENEFITS_END */', benefitsGrid);
  } catch (e) {
    log('Benefits markers not found; skipping');
  }

  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    log('Front Index Curator updated page.');
  } else {
    log('No changes applied.');
  }

  log('Front Index Curator finished');
})();