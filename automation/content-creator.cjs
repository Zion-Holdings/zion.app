#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const LOGS_DIR = path.join(ROOT, 'automation', 'logs');
const LOCK_FILE = path.join(ROOT, 'automation', '.git-sync.lock');
const UPDATES_DIR = path.join(ROOT, 'pages', 'reports', 'updates');
const INDEX_PAGE = path.join(ROOT, 'pages', 'index.tsx');

const START = '/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */';
const END = '/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */';

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function ensureLogs() { ensureDir(LOGS_DIR); }
function log(msg) {
  ensureLogs();
  const line = `${new Date().toISOString()} ${msg}`;
  console.log(line);
  try { fs.appendFileSync(path.join(LOGS_DIR, 'content-creator.log'), line + '\n'); } catch {}
}

function run(cmd, args = []) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', cwd: ROOT, env: process.env, shell: false });
  return res.status === 0;
}

function tryNode(relPath, args = []) {
  const abs = path.join(ROOT, relPath);
  if (!fs.existsSync(abs)) { log(`skip: missing ${relPath}`); return true; }
  log(`run: node ${relPath} ${args.join(' ')}`);
  return run('node', [abs, ...args]);
}

function withGitLock(fn) {
  const maxAgeMs = 5 * 60 * 1000;
  try {
    if (fs.existsSync(LOCK_FILE)) {
      const age = Date.now() - fs.statSync(LOCK_FILE).mtimeMs;
      if (age < maxAgeMs) { log('git lock present; skipping'); return false; }
      try { fs.unlinkSync(LOCK_FILE); } catch {}
    }
    fs.writeFileSync(LOCK_FILE, String(process.pid));
  } catch (e) { log(`lock error: ${e.message || e}`); return false; }
  try { return fn(); } finally { try { fs.unlinkSync(LOCK_FILE); } catch {} }
}

function nowParts() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return { y: d.getFullYear(), m: pad(d.getMonth() + 1), day: pad(d.getDate()), hh: pad(d.getHours()), mm: pad(d.getMinutes()) };
}
function generateSlug() { const { y, m, day, hh, mm } = nowParts(); return `update-${y}-${m}-${day}-${hh}${mm}`; }
function generateTitle() { const { y, m, day, hh, mm } = nowParts(); return `Autonomous Update — ${y}-${m}-${day} ${hh}:${mm}`; }

function writeContentPage() {
  ensureDir(UPDATES_DIR);
  const slug = generateSlug();
  const title = generateTitle();
  const filePath = path.join(UPDATES_DIR, `${slug}.tsx`);
  if (!fs.existsSync(filePath)) {
    const canonical = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
    const body = `import Head from 'next/head';

export default function UpdatePage() {
  return (
    <div className=\"min-h-screen bg-slate-950 text-white\">
      <Head>
        <title>${title}</title>
        <meta name=\"description\" content=\"Autonomously generated update.\" />
      </Head>
      <main className=\"container mx-auto px-6 py-12 prose prose-invert\">
        <h1 className=\"text-3xl font-extrabold\">${title}</h1>
        <p className=\"text-white/70\">This page was created automatically by the content creator automation. It showcases our continuous, autonomous publishing pipeline.</p>
        <p className=\"mt-4\">Learn more at <a className=\"text-cyan-300 underline\" href=\"${canonical}\" target=\"_blank\" rel=\"noopener\">${canonical}</a>.</p>
      </main>
    </div>
  );
}
`;
    fs.writeFileSync(filePath, body, 'utf8');
    log(`created: ${path.relative(ROOT, filePath)}`);
  }
  return { filePath, route: `/reports/updates/${slug}`, title };
}

function listLatestUpdates(limit = 6) {
  if (!fs.existsSync(UPDATES_DIR)) return [];
  return fs.readdirSync(UPDATES_DIR)
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => ({ name: f, full: path.join(UPDATES_DIR, f), mtime: fs.statSync(path.join(UPDATES_DIR, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime)
    .slice(0, limit)
    .map((f) => {
      const slug = f.name.replace(/\.tsx$/, '');
      const title = slug.replace(/^update-/, '').replace(/-/g, ': ').replace(/:(\d\d)$/, ' $1');
      return { route: `/reports/updates/${slug}`, title: `Autonomous Update — ${title}` };
    });
}

function ensureMarkers(content) {
  if (content.includes(START) && content.includes(END)) return content;
  const anchor = content.indexOf('/* AUTO-GENERATED: HOME_VISIONARY_START */');
  const insertAt = anchor !== -1 ? anchor : content.lastIndexOf('</section>');
  const section = [START, '',
    ' <section className="mx-auto max-w-7xl px-6 pb-14">',
    '   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>',
    '   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    '   </div>',
    ' </section>',
    ' ', END].join('\n');
  const pos = insertAt >= 0 ? insertAt : content.length;
  return content.slice(0, pos) + '\n' + section + '\n' + content.slice(pos);
}

function buildCards(updates) {
  return updates.map((u) => `            <a href=\"${u.route}\" className=\"group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover\">\n              <div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" />\n              <h3 className=\"text-lg font-semibold\">${u.title}</h3>\n              <p className=\"mt-1 text-sm text-white/75\">Freshly published by autonomous agents.</p>\n              <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>→</span></div>\n            </a>`).join('\n');
}

function updateHomepage() {
  if (!fs.existsSync(INDEX_PAGE)) return false;
  let content = fs.readFileSync(INDEX_PAGE, 'utf8');
  content = ensureMarkers(content);
  const updates = listLatestUpdates(6);
  const section = [START, '',
    ' <section className="mx-auto max-w-7xl px-6 pb-14">',
    '   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>',
    '   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    buildCards(updates),
    '   </div>',
    ' </section>',
    ' ', END].join('\n');

  const startIdx = content.indexOf(START);
  const endIdx = content.indexOf(END);
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    log('homepage: markers missing or invalid, reinserting');
    content = ensureMarkers(content);
  }
  const s2 = content.indexOf(START);
  const e2 = content.indexOf(END);
  if (s2 === -1 || e2 === -1 || e2 <= s2) {
    log('homepage: failed to ensure markers');
    return false;
  }
  const before = content.slice(0, s2);
  const after = content.slice(e2 + END.length);
  const updated = `${before}${section}${after}`;
  if (updated !== content) { fs.writeFileSync(INDEX_PAGE, updated, 'utf8'); log('homepage: advertised latest content'); return true; }
  return false;
}

function main() {
  log('content-creator: start');
  ensureDir(UPDATES_DIR);
  const page = writeContentPage();
  try {
    // Attempt to inject research snapshot into the latest update (best effort)
    const injector = path.join(ROOT, 'automation', 'research-injector.cjs');
    if (fs.existsSync(injector)) {
      run('node', [injector]);
    }
  } catch {}
  const changed = updateHomepage();

  // Refresh registries and auxiliary promos
  tryNode('automation/docs-pages-indexer.cjs');
  tryNode('automation/front-index-directory-builder.cjs');
  try { tryNode('automation/homepage-updater.cjs'); } catch {}
  try { tryNode('automation/front-index-advertiser.cjs'); } catch {}

  withGitLock(() => { log('git sync'); tryNode('automation/git-sync.cjs'); return true; });
  log(`content-creator: done (${path.basename(page.filePath)}${changed ? ' + homepage' : ''})`);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { log(`fatal: ${e.stack || e}`); process.exit(1); }
}

 