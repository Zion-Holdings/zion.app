#!/usr/bin/env node
/**
 * verify-static-artifacts.cjs — local artifact gate before deploy
 *
 * Runs:
 *  1) Presence checks: index.html, 404.html, _next/, _not-found/, data/services.json
 *  2) Content sanity: no Next.js error markers in generated HTML
 *  3) Page spot-check: home, one service page, one AI page
 *
 * Exits 0 when all checks pass. Exits 1 otherwise, writing state JSON.
 */
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const outDir = path.join(repo, 'out');
const statePath = path.join(repo, 'automation/reports/static-artifact-verification.json');

const REQUIRED = [
  path.join(outDir, 'index.html'),
  path.join(outDir, '404.html'),
  path.join(outDir, 'data', 'services.json'),
  path.join(outDir, '_next'),
  path.join(outDir, '_not-found'),
];

const ERROR_RX = /<title>.*(?:Error|Oops).*<\/title>|<pre>.*Error:.*<\/pre>|<div class="[^"]*error[^"]*"/i;
const SITE_HOME = path.join(outDir, 'index.html');
const CANDIDATE_PAGES = (() => {
  const candidates = [];
  const serviceDir = path.join(outDir, 'services');
  if (fs.existsSync(serviceDir)) {
    try {
      for (const entry of fs.readdirSync(serviceDir)) {
        const idx = path.join(serviceDir, entry, 'index.html');
        if (fs.existsSync(idx)) { candidates.push(idx); break; }
      }
    } catch {}
  }
  const aiDir = path.join(outDir, 'ai');
  if (fs.existsSync(aiDir)) {
    try {
      for (const entry of fs.readdirSync(aiDir)) {
        const idx = path.join(aiDir, entry, 'index.html');
        if (fs.existsSync(idx)) { candidates.push(idx); break; }
      }
    } catch {}
  }
  return [SITE_HOME, ...candidates];
})();

function exists(p) {
  try { return fs.existsSync(p); } catch { return false; }
}
function stat(p) {
  try { return fs.statSync(p); } catch { return null; }
}

function checkPresence() {
  const missing = REQUIRED.filter((f) => !exists(f));
  return { checked: REQUIRED.length, missing, missingCount: missing.length };
}

function checkContent(filePath) {
  let html = '';
  try { html = fs.readFileSync(filePath, 'utf8'); } catch (e) { return { ok: false, reason: e.message }; }
  const hasError = ERROR_RX.test(html);
  return { ok: !hasError, reason: hasError ? 'error-marker' : '' };
}

function checkPages(pagePaths) {
  const checked = [];
  for (const p of pagePaths) {
    if (!exists(p)) { checked.push({ page: p, ok: false, reason: 'missing' }); continue; }
    const c = checkContent(p);
    checked.push({ page: p, bytes: stat(p)?.size || 0, ...c });
  }
  const failing = checked.filter((c) => !c.ok);
  return { checked: checked.length, pages: checked, failingCount: failing.length, failing };
}

function buildState(presence, pages) {
  return {
    checkedAt: new Date().toISOString(),
    presence,
    pages,
    pass: presence.missingCount === 0 && pages.failingCount === 0,
    next: 'pass' ? 'static verification ok' : 'static verification failed',
  };
}

function main() {
  fs.mkdirSync(path.dirname(statePath), { recursive: true });
  const presence = checkPresence();
  const pages = checkPages(CANDIDATE_PAGES.filter(exists));
  const state = buildState(presence, pages);
  fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
  console.log(JSON.stringify(state, null, 2));
  process.exit(state.pass ? 0 : 1);
}

try { main(); } catch (e) { console.error(e); process.exit(1); }
