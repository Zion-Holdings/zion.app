#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function log(msg) { console.log(`[manifest] ${msg}`); }

const workspace = process.cwd();
const functionsDir = path.join(workspace, 'netlify', 'functions');
const tomlPath = path.join(workspace, 'netlify.toml');
const manifestPath = path.join(functionsDir, 'functions-manifest.json');

function safeRead(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function parseScheduledFunctionNamesFromToml(tomlContent) {
  if (!tomlContent) return [];
  const names = [];
  const lines = tomlContent.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line === '[[scheduled.functions]]') {
      for (let j = i + 1; j < Math.min(i + 6, lines.length); j += 1) {
        const m = lines[j].match(/name\s*=\s*"([^"]+)"/);
        if (m) { names.push(m[1]); break; }
      }
    }
  }
  return names;
}

function listFunctionNamesFromDir(dir) {
  let entries = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return []; }
  const exts = new Set(['.js', '.ts', '.mjs', '.cjs']);
  const names = new Set();
  for (const e of entries) {
    if (e.isDirectory()) continue;
    const ext = path.extname(e.name);
    if (!exts.has(ext)) continue;
    const base = path.basename(e.name, ext);
    names.add(base);
  }
  return Array.from(names);
}

(function main() {
  const scheduled = parseScheduledFunctionNamesFromToml(safeRead(tomlPath));
  const fromDir = listFunctionNamesFromDir(functionsDir);
  const all = Array.from(new Set([...scheduled, ...fromDir])).sort();
  fs.writeFileSync(manifestPath, JSON.stringify({ generatedAt: new Date().toISOString(), functions: all }, null, 2));
  log(`Wrote ${manifestPath} with ${all.length} functions.`);
})();