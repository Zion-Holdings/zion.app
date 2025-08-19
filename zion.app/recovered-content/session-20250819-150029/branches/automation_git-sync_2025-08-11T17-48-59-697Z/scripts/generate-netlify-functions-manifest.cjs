#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FUNCTIONS_DIR = path.join(ROOT, 'netlify', 'functions');
const NETLIFY_TOML = path.join(ROOT, 'netlify.toml');
const OUT_DIR = path.join(ROOT, 'data');
const OUT_FILE = path.join(OUT_DIR, 'netlify-functions-manifest.json');

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
}

function listFunctions() {
  const files = fs.readdirSync(FUNCTIONS_DIR, { withFileTypes: true })
    .filter(e => e.isFile())
    .map(e => e.name)
    .filter(n => /\.(js|ts)$/.test(n));
  // Deduplicate by base name, prefer .js
  const byBase = new Map();
  for (const f of files.sort()) {
    const base = f.replace(/\.(js|ts)$/i, '');
    const ext = path.extname(f);
    if (!byBase.has(base) || ext === '.js') byBase.set(base, f);
  }
  return Array.from(byBase.entries()).map(([name, file]) => ({ name, file }));
}

function parseSchedules() {
  const schedules = {};
  let txt = '';
  try { txt = fs.readFileSync(NETLIFY_TOML, 'utf8'); } catch (_) { return schedules; }
  // Very naive parse of blocks:
  // [[scheduled.functions]]\n name = "..."\n schedule = "..."
  const lines = txt.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('[[scheduled.functions]]')) {
      let name, schedule;
      for (let j = i + 1; j < Math.min(i + 6, lines.length); j++) {
        const mName = lines[j].match(/name\s*=\s*"([^"]+)"/);
        if (mName) name = mName[1];
        const mSchedule = lines[j].match(/schedule\s*=\s*"([^"]+)"/);
        if (mSchedule) schedule = mSchedule[1];
      }
      if (name) schedules[name] = schedule || '';
    }
  }
  return schedules;
}

function main() {
  const functions = listFunctions();
  const schedules = parseSchedules();
  ensureDir(OUT_DIR);
  const manifest = {
    generatedAt: new Date().toISOString(),
    directory: path.relative(ROOT, FUNCTIONS_DIR),
    total: functions.length,
    functions: functions.map(f => ({
      name: f.name,
      file: f.file,
      scheduled: Object.prototype.hasOwnProperty.call(schedules, f.name),
      schedule: schedules[f.name] || null,
      endpoint: `/.netlify/functions/${f.name}`,
    })),
  };
  fs.writeFileSync(OUT_FILE, JSON.stringify(manifest, null, 2));
  console.log(`Wrote ${OUT_FILE} with ${functions.length} functions.`);
}

main();