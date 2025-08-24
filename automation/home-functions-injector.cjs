#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function readJsonSafe(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

function ensureFile(p) {
  try { fs.accessSync(p, fs.constants.F_OK); return true; } catch { return false; }
}

function toTitle(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function buildCards(baseUrl, manifest) {
  const names = Array.isArray(manifest?.functions) ? manifest.functions : [];
  const max = Math.min(names.length, 24);
  return names.slice(0, max).map((n) => {
    const title = toTitle(n);
    const href = `/.netlify/functions/${n}`;
    return [
      `              <a key="${n}" href="${href}" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">`,
      '                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />',
      `                <div className="text-lg font-semibold">${title}</div>`,
      '                <div className="mt-1 text-sm text-white/75">Live cloud tool — open endpoint</div>',
      '                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>',
      '              </a>'
    ].join('\n');
  }).join('\n');
}

(function main() {
  const root = path.resolve(__dirname, '..');
  const indexPath = path.join(root, 'pages', 'index.tsx');
  if (!ensureFile(indexPath)) {
    console.error('home-functions-injector: index.tsx not found.');
    process.exit(0);
  }
  const manifestPath = path.join(root, 'netlify', 'functions', 'functions-manifest.json');
  const manifest = readJsonSafe(manifestPath) || {};

  const src = fs.readFileSync(indexPath, 'utf8');
  const startMarker = '/* AUTO-GENERATED: HOME_FUNCTIONS_START */';
  const endMarker = '/* AUTO-GENERATED: HOME_FUNCTIONS_END */';
  const s = src.indexOf(startMarker);
  const e = src.indexOf(endMarker);
  if (s === -1 || e === -1 || e <= s) {
    console.error('home-functions-injector: markers missing or invalid order.');
    process.exit(0);
  }

  const before = src.slice(0, s + startMarker.length);
  const after = src.slice(e);

  const section = [
    '',
    ' <section className="mx-auto max-w-7xl px-6 pb-20">',
    '   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Live Cloud Functions</h2>',
    '   <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Open endpoints that run autonomously and sync changes back to the repo.</p>',
    '   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">',
    buildCards('', manifest),
    '   </div>',
    ' </section>',
    ' '
  ].join('\n');

  const out = before + section + after;
  if (out === src) {
    console.log('home-functions-injector: no changes.');
    return;
  }
  fs.writeFileSync(indexPath, out);
  console.log('home-functions-injector: homepage updated.');
})();