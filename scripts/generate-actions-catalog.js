#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const HOMEPAGE = path.join(ROOT, 'pages', 'index.tsx');
const START_MARKER = '/* AUTO-GENERATED: HOME_ACTIONS_START */';
const END_MARKER = '/* AUTO-GENERATED: HOME_ACTIONS_END */';

function getRepoSlug() {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
    const url = (pkg.repository && pkg.repository.url) || '';
    const match = url.match(/github.com[:/]+([^/]+)\/([^/]+?)(?:\.git)?$/i);
    if (match) return `${match[1]}/${match[2]}`;
  } catch {
    // noop
  }
  return '';
}

function listWorkflowFiles() {
  const results = [];
  const tryDirs = [path.join(ROOT, '.github', 'workflows'), path.join(ROOT, '.github')];
  for (const dir of tryDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      if (!name.match(/\.(ya?ml)$/)) continue;
      // Prefer real workflow definitions; skip common config files
      if (name.toLowerCase().includes('dependabot')) continue;
      const full = path.join(dir, name);
      // Avoid duplicates if file exists in both places
      const key = `/${path.relative(ROOT, full).replace(/\\/g, '/')}`;
      if (!results.find((r) => r.key === key)) {
        results.push({ key, dir, name, full });
      }
    }
  }
  return results.sort((a, b) => a.name.localeCompare(b.name));
}

function readWorkflowMeta(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  let name = '';
  let cron = '';
  const nameMatch = src.match(/^name:\s*(.+)$/m);
  if (nameMatch) name = nameMatch[1].trim();
  // Try to find the first cron entry
  const cronMatch = src.match(/cron:\s*["']?([^"'\n]+)["']?/);
  if (cronMatch) cron = cronMatch[1].trim();
  return { name, cron };
}

function toTitle(fileName) {
  const base = fileName.replace(/\.(ya?ml)$/i, '').replace(/[-_]/g, ' ').trim();
  return base
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function buildCards(repoSlug, workflows) {
  const items = workflows.map((w) => {
    const meta = readWorkflowMeta(w.full);
    const title = meta.name || toTitle(w.name);
    const href = repoSlug
      ? `https://github.com/${repoSlug}/actions/workflows/${w.name}`
      : `https://github.com/actions`;
    const desc = meta.cron ? `Scheduled: ${meta.cron}` : 'On push / schedule';
    return { title, href, desc };
  });
  // Limit to 12 for homepage density
  return items.slice(0, 12)
    .map((it) => (
      `              <a href="${it.href}" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">${it.title}</div>
                <div className="mt-1 text-sm text-white/75">${it.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>`
    ))
    .join('\n');
}

function buildSection(cardsHtml, repoSlug) {
  const viewAll = repoSlug ? `https://github.com/${repoSlug}/actions` : 'https://github.com/actions';
  return [
    START_MARKER,
    '<section className="mx-auto max-w-7xl px-6 pb-16">',
    '  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Live GitHub Actions</h2>',
    '  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Autonomous workflows running fully in the cloud. Click to view runs and logs.</p>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    cardsHtml,
    '  </div>',
    `  <div className="mt-6 text-center"><a className="text-cyan-300 underline" href="${viewAll}" target="_blank" rel="noopener">View all workflows ↗</a></div>`,
    '</section>',
    END_MARKER
  ].join('\n');
}

function ensureMarkersAndInsert(source, block) {
  const hasStart = source.includes(START_MARKER);
  const hasEnd = source.includes(END_MARKER);
  if (hasStart && hasEnd) {
    const startIdx = source.indexOf(START_MARKER) + START_MARKER.length;
    const endIdx = source.indexOf(END_MARKER);
    return source.slice(0, startIdx) + '\n' + block.split('\n').slice(1, -1).join('\n') + '\n' + source.slice(endIdx);
  }
  // Choose insertion point: before HOME_UPDATER_START if present, else before </main>
  const homeUpdater = source.indexOf('/* AUTO-GENERATED: HOME_UPDATER_START */');
  let insertIdx = -1;
  if (homeUpdater !== -1) insertIdx = homeUpdater;
  if (insertIdx === -1) {
    const closingMain = source.lastIndexOf('</main>');
    insertIdx = closingMain !== -1 ? closingMain : source.length;
  }
  return source.slice(0, insertIdx) + '\n' + block + '\n' + source.slice(insertIdx);
}

(function main() {
  if (!fs.existsSync(HOMEPAGE)) {
    console.log('Homepage not found');
    process.exit(0);
  }
  const workflows = listWorkflowFiles();
  if (!workflows.length) {
    console.log('No workflows found');
    process.exit(0);
  }
  const repoSlug = getRepoSlug();
  const cards = buildCards(repoSlug, workflows);
  const section = buildSection(cards, repoSlug);
  const src = fs.readFileSync(HOMEPAGE, 'utf8');
  const updated = ensureMarkersAndInsert(src, section);
  if (updated !== src) {
    fs.writeFileSync(HOMEPAGE, updated, 'utf8');
    console.log('Homepage actions catalog updated.');
  } else {
    console.log('Homepage actions catalog up-to-date.');
  }
})();