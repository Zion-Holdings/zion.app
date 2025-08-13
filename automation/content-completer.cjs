#!/usr/bin/env node
'use strict';

// Content Completer
// - Continuously scans Next.js pages and applies safe, incremental improvements
// - Inserts missing meta tags inside existing <Head> blocks when possible
// - Refreshes homepage promos and front directories
// - Regenerates sitemap and search index
// - Commits and pushes changes using automation/git-sync.cjs

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const REPO = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(REPO, 'pages');
const LOGS_DIR = path.join(REPO, 'automation', 'logs');
const LOCK_FILE = path.join(REPO, 'automation', '.content-completer.lock');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function log(msg) {
  ensureDir(LOGS_DIR);
  const line = `${new Date().toISOString()} ${msg}`;
  console.log(line);
  try { fs.appendFileSync(path.join(LOGS_DIR, 'content-completer.log'), line + '\n'); } catch {}
}

function run(cmd, args = [], opts = {}) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', cwd: REPO, env: process.env, shell: false, ...opts });
  return res.status === 0;
}

function tryNode(relPath, args = []) {
  const abs = path.join(REPO, relPath);
  if (!fs.existsSync(abs)) { log(`skip: missing ${relPath}`); return true; }
  log(`run: node ${relPath} ${args.join(' ')}`);
  return run('node', [abs, ...args]);
}

function withLock(fn) {
  const maxAgeMs = 2 * 60 * 1000; // 2 minutes
  try {
    if (fs.existsSync(LOCK_FILE)) {
      const age = Date.now() - fs.statSync(LOCK_FILE).mtimeMs;
      if (age < maxAgeMs) { log('lock present; skipping'); return false; }
      try { fs.unlinkSync(LOCK_FILE); } catch {}
    }
    fs.writeFileSync(LOCK_FILE, String(process.pid));
  } catch (e) { log(`lock error: ${e.message || e}`); return false; }
  try { return fn(); } finally { try { fs.unlinkSync(LOCK_FILE); } catch {} }
}

function listPageFiles(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('_') || entry.name === 'api') continue;
      files.push(...listPageFiles(full));
    } else if (/\.(tsx|jsx)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function getRouteFromPath(filePath) {
  const rel = path.relative(PAGES_DIR, filePath).replace(/\\/g, '/');
  const noExt = rel.replace(/\.(tsx|jsx)$/, '');
  let route = '/' + noExt;
  route = route.replace(/\/index$/, '/');
  return route;
}

function analyzeHead(content) {
  const hasHead = /<Head>/i.test(content);
  const hasTitle = /<title>[^<]*<\/title>/i.test(content);
  const hasDescription = /<meta\s+name=["']description["']\s+content=/i.test(content);
  const hasOgTitle = /<meta\s+property=["']og:title["']\s+content=/i.test(content);
  const hasOgDesc = /<meta\s+property=["']og:description["']\s+content=/i.test(content);
  const hasTwitterCard = /<meta\s+name=["']twitter:card["']\s+content=/i.test(content);
  return { hasHead, hasTitle, hasDescription, hasOgTitle, hasOgDesc, hasTwitterCard };
}

function inferTitleFromContent(content, fallback) {
  const m = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const text = m ? String(m[1]).replace(/<[^>]*>/g, '').trim() : fallback;
  return text || fallback || 'Zion';
}

function applyHeadImprovements(source, route) {
  const headOpenIdx = source.indexOf('<Head>');
  const headCloseIdx = source.indexOf('</Head>');
  if (headOpenIdx === -1 || headCloseIdx === -1 || headCloseIdx <= headOpenIdx) return source;

  const before = source.slice(0, headOpenIdx + '<Head>'.length);
  const inside = source.slice(headOpenIdx + '<Head>'.length, headCloseIdx);
  const after = source.slice(headCloseIdx);

  const a = analyzeHead(inside);
  let newInside = inside;

  const suggestTitle = inferTitleFromContent(source, route.split('/').filter(Boolean).map(s => s[0]?.toUpperCase() + s.slice(1)).join(' '));
  const suggestDesc = `${suggestTitle} — automatically suggested description.`;

  if (!a.hasTitle) {
    newInside = `\n        <title>${suggestTitle}</title>\n` + newInside;
  }
  if (!a.hasDescription) {
    newInside += `\n        <meta name="description" content="${suggestDesc}" />`;
  }
  if (!a.hasOgTitle) {
    newInside += `\n        <meta property="og:title" content="${suggestTitle}" />`;
  }
  if (!a.hasOgDesc) {
    newInside += `\n        <meta property="og:description" content="${suggestDesc}" />`;
  }
  if (!a.hasTwitterCard) {
    newInside += `\n        <meta name="twitter:card" content="summary_large_image" />`;
  }

  return before + newInside + after;
}

function improvePages() {
  const files = listPageFiles(PAGES_DIR);
  let changes = 0;
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const route = getRouteFromPath(file);
      const a = analyzeHead(content);
      if (!a.hasHead) continue; // only safe edits inside existing Head
      const updated = applyHeadImprovements(content, route);
      if (updated !== content) {
        fs.writeFileSync(file, updated, 'utf8');
        log(`updated meta: ${path.relative(REPO, file)}`);
        changes++;
      }
    } catch (e) {
      log(`error processing ${file}: ${e.message}`);
    }
  }
  return changes;
}

function main() {
  return withLock(() => {
    log('content-completer: start');

    // Quick site intelligence reports (non-editing)
    tryNode('automation/metadata-optimizer.cjs');

    // Safe, local page improvements
    const changed = improvePages();

    // Refresh promos and directories
    try { tryNode('automation/homepage-updater.cjs'); } catch {}
    try { tryNode('automation/front-index-directory-builder.cjs'); } catch {}

    // Refresh sitemap & search index (best effort)
    try { tryNode('scripts/generate-sitemap.js'); } catch {}
    try { tryNode('scripts/generate-search-index.js'); } catch {}

    // Commit and push
    log('git sync');
    tryNode('automation/git-sync.cjs');

    log(`content-completer: done${changed ? ` (+${changed} file(s))` : ''}`);
    return true;
  });
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { log(`fatal: ${e.stack || e}`); process.exit(1); }
}


