#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START_MARKER = '/* AUTO-GENERATED: FRONT_ACTIONS_START */';
const END_MARKER = '/* AUTO-GENERATED: FRONT_ACTIONS_END */';

function readJsonSafe(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

function getRepoFromPackageJson() {
  const pkg = readJsonSafe(path.join(ROOT, 'package.json')) || {};
  const repoUrl = (pkg.repository && pkg.repository.url) || pkg.homepage || '';
  const m = repoUrl.match(/github\.com[/:]([^/]+)\/([^/#.]+)(?:\.git)?/i);
  if (!m) return null;
  return { owner: m[1], repo: m[2] };
}

function listWorkflows() {
  const dir = path.join(ROOT, '.github', 'workflows');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.yml') || f.endsWith('.yaml'));
}

function toTitle(basename) {
  return basename
    .replace(/\.(yml|yaml)$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function buildCards(repo, files) {
  const actionsBase = `https://github.com/${repo.owner}/${repo.repo}/actions/workflows`;
  const curatedOrder = [
    'dead-code-report.yml',
    'duplicate-media-finder.yml',
    'image-optimizer.yml',
    'todo-scanner.yml',
    'branch-cleanup.yml',
  ];
  const set = new Set(files);
  const chosen = curatedOrder.filter((f) => set.has(f));
  const finalList = chosen.length ? chosen : files.slice(0, 8);
  return finalList.map((f) => {
    const href = `${actionsBase}/${f}`;
    const title = toTitle(f);
    const desc = (
      f.includes('dead-code') ? 'Scans and reports unused code, hourly.' :
      f.includes('duplicate-media') ? 'Finds duplicate images by content hash.' :
      f.includes('image-optimizer') ? 'Optimizes images and commits savings.' :
      f.includes('todo-scanner') ? 'Aggregates TODO/FIXME into docs and JSON.' :
      f.includes('branch-cleanup') ? 'Prunes merged/stale ephemeral branches.' :
      'Autonomous GitHub Action'
    );
    return { title, desc, href };
  });
}

function generateSection(cards) {
  const items = cards.map((c) => (
`              <a href="${c.href}" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">${c.title}</div>
                <div className="mt-1 text-sm text-white/75">${c.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>`)).join('\n');

  return [
    '<section className="mx-auto max-w-7xl px-6 pb-14">',
    '  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">GitHub Actions — Autonomous Automations</h2>',
    '  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Runs fully in the cloud on a fast cadence, syncing changes to main automatically.</p>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    items,
    '  </div>',
    '</section>'
  ].join('\n');
}

function replaceBetweenMarkers(source, startMarker, endMarker, replacement) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('Markers not found or invalid order in front index');
  }
  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  return `${before}\n${replacement}\n${after}`;
}

(function main() {
  if (!fs.existsSync(FRONT_PAGE)) {
    console.log('Front page not found, skipping');
    process.exit(0);
  }
  const repo = getRepoFromPackageJson();
  if (!repo) {
    console.log('Could not parse repo from package.json, skipping');
    process.exit(0);
  }
  const workflows = listWorkflows();
  const cards = buildCards(repo, workflows);
  const block = generateSection(cards);
  const original = fs.readFileSync(FRONT_PAGE, 'utf8');
  let updated;
  try {
    updated = replaceBetweenMarkers(original, START_MARKER, END_MARKER, block);
  } catch (e) {
    console.log('Could not replace between markers:', e.message);
    process.exit(0);
  }
  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    console.log('Front index actions advertisement updated.');
  } else {
    console.log('No updates required.');
  }
})();