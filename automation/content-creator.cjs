#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const UPDATES_DIR = path.join(ROOT, 'pages', 'reports', 'updates');
const INDEX_PAGE = path.join(ROOT, 'pages', 'index.tsx');

const START = '/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */';
const END = '/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */';

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit', cwd: ROOT, shell: true });
  } catch (e) {
    console.warn('[content-creator] Command failed:', cmd, e.message);
  }
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function nowParts() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const y = d.getFullYear();
  const m = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hh = pad(d.getHours());
  const mm = pad(d.getMinutes());
  return { y, m, day, hh, mm };
}

function generateSlug() {
  const { y, m, day, hh, mm } = nowParts();
  return `update-${y}-${m}-${day}-${hh}${mm}`;
}

function generateTitle() {
  const { y, m, day, hh, mm } = nowParts();
  return `Autonomous Update — ${y}-${m}-${day} ${hh}:${mm}`;
}

function writeContentPage() {
  ensureDir(UPDATES_DIR);
  const slug = generateSlug();
  const title = generateTitle();
  const filePath = path.join(UPDATES_DIR, `${slug}.tsx`);
  if (fs.existsSync(filePath)) return { filePath, route: `/reports/updates/${slug}`, title };

  const canonical = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
  const body = `import Head from 'next/head';

export default function UpdatePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>${title}</title>
        <meta name="description" content="Autonomously generated update." />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-3xl font-extrabold">${title}</h1>
        <p className="text-white/70">This page was created automatically by the content creator automation. It showcases our continuous, autonomous publishing pipeline.</p>
        <p className="mt-4">Learn more at <a className="text-cyan-300 underline" href="${canonical}" target="_blank" rel="noopener">${canonical}</a>.</p>
      </main>
    </div>
  );
}
`;
  fs.writeFileSync(filePath, body, 'utf8');
  return { filePath, route: `/reports/updates/${slug}`, title };
}

function listLatestUpdates(limit = 6) {
  if (!fs.existsSync(UPDATES_DIR)) return [];
  const files = fs
    .readdirSync(UPDATES_DIR)
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => ({
      name: f,
      path: path.join(UPDATES_DIR, f),
      mtime: fs.statSync(path.join(UPDATES_DIR, f)).mtimeMs,
    }))
    .sort((a, b) => b.mtime - a.mtime)
    .slice(0, limit);

  return files.map((f) => {
    const slug = f.name.replace(/\.tsx$/, '');
    const route = `/reports/updates/${slug}`;
    const title = slug.replace(/^update-/, '').replace(/-/g, ': ').replace(/:(\d\d)$/,' $1');
    return { route, title: `Autonomous Update — ${title}` };
  });
}

function ensureMarkers(content) {
  if (content.includes(START) && content.includes(END)) return content;
  const insertAnchor = content.indexOf('/* AUTO-GENERATED: HOME_VISIONARY_START */');
  const mainClose = content.lastIndexOf('</section>');
  const insertAt = insertAnchor !== -1 ? insertAnchor : (mainClose !== -1 ? mainClose : content.length);
  const section = [
    START,
    '',
    ' <section className="mx-auto max-w-7xl px-6 pb-14">',
    '   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>',
    '   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    '   </div>',
    ' </section>',
    ' ',
    END,
  ].join('\n');
  return content.slice(0, insertAt) + '\n' + section + '\n' + content.slice(insertAt);
}

function buildCards(updates) {
  if (!updates.length) return '';
  return updates
    .map((u) => `            <a href="${u.route}" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">${u.title}</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>`)
    .join('\n');
}

function updateHomepage(updates) {
  if (!fs.existsSync(INDEX_PAGE)) return false;
  let content = fs.readFileSync(INDEX_PAGE, 'utf8');
  content = ensureMarkers(content);
  const section = [
    START,
    '',
    ' <section className="mx-auto max-w-7xl px-6 pb-14">',
    '   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>',
    '   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    buildCards(updates),
    '   </div>',
    ' </section>',
    ' ',
    END,
  ].join('\n');

  const updated = content.replace(new RegExp(`${START}[\s\S]*?${END}`), section);
  if (updated !== content) {
    fs.writeFileSync(INDEX_PAGE, updated, 'utf8');
    return true;
  }
  return false;
}

function reindex() {
  run('node automation/docs-pages-indexer.cjs');
}

function gitSyncCommit(message) {
  try {
    execSync('git pull --rebase', { stdio: 'inherit', cwd: ROOT, shell: true });
  } catch (e) {
    console.warn('[content-creator] git pull failed:', e.message);
  }
  try {
    execSync(
      'git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m ' +
        JSON.stringify(message) +
        ' || true) && (git push origin main || true)',
      { stdio: 'inherit', cwd: ROOT, shell: true }
    );
  } catch (e) {
    console.warn('[content-creator] git commit/push failed:', e.message);
  }
}

(function main() {
  ensureDir(UPDATES_DIR);
  const page = writeContentPage();
  const latest = listLatestUpdates(6);
  const changed = updateHomepage(latest);
  reindex();
  const msg = changed
    ? `feat(content): publish ${path.basename(page.filePath)} and advertise on homepage [ci skip]`
    : `feat(content): publish ${path.basename(page.filePath)} [ci skip]`;
  gitSyncCommit(msg);
  console.log('[content-creator] Done.');
})();


