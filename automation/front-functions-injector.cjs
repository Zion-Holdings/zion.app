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

function buildCards(manifest) {
  const names = Array.isArray(manifest?.functions) ? manifest.functions : [];
  const preferred = names.filter(n => /front|home|readme|docs|repo|orchestrator|enhancer|advertiser/i.test(n));
  const list = preferred.length ? preferred : names;
  const max = Math.min(list.length, 18);
  return list.slice(0, max).map((n) => {
    const title = toTitle(n);
    const href = `/.netlify/functions/${n}`;
    return [
      `              <a key="${n}" href="${href}" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">`,
      '                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />',
      `                <div className="text-lg font-semibold">${title}</div>`,
      '                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>',
      '                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>',
      '              </a>'
    ].join('\n');
  }).join('\n');
}

(function main() {
  const root = path.resolve(__dirname, '..');
  const target = path.join(root, 'pages', 'main', 'front', 'index.tsx');
  if (!ensureFile(target)) {
    console.error('front-functions-injector: front index not found.');
    process.exit(0);
  }
  const manifestPath = path.join(root, 'netlify', 'functions', 'functions-manifest.json');
  const manifest = readJsonSafe(manifestPath) || {};

  const src = fs.readFileSync(target, 'utf8');
  const startMarker = '{/* AUTO-GENERATED: FRONT_FUNCTIONS_START */}';
  const endMarker = '{/* AUTO-GENERATED: FRONT_FUNCTIONS_END */}';
  const s = src.indexOf(startMarker);
  const e = src.indexOf(endMarker);
  if (s === -1 || e === -1 || e <= s) {
    console.error('front-functions-injector: markers missing or invalid order.');
    process.exit(0);
  }

  const before = src.slice(0, s + startMarker.length);
  const after = src.slice(e);

  const section = [
    '',
    '        <section id="front-cloud-functions" className="mx-auto max-w-7xl px-6 pb-16">',
    '          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Front Cloud Functions</h2>',
    '          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">',
    buildCards(manifest),
    '          </div>',
    '        </section>',
    ' '
  ].join('\n');

  const out = before + section + after;
  if (out === src) {
    console.log('front-functions-injector: no changes.');
    return;
  }
  fs.writeFileSync(target, out);
  console.log('front-functions-injector: front page updated.');
})();