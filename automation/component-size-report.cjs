#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const COMPONENTS_DIR = path.join(ROOT, 'components');
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'component-size');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function listFilesRecursive(dir) {
  const results = [];
  (function walk(current) {
    let entries;
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full); else results.push(full);
    }
  })(dir);
  return results;
}

function countLines(text) { return (text.match(/\n/g) || []).length + (text ? 1 : 0); }

function main() {
  const start = Date.now();
  const files = listFilesRecursive(COMPONENTS_DIR).filter(f => /\.(tsx?|jsx?)$/i.test(f));
  const items = files.map(f => {
    const content = fs.readFileSync(f, 'utf8');
    const sizeBytes = Buffer.byteLength(content, 'utf8');
    const lines = countLines(content);
    const rel = path.relative(ROOT, f).replace(/\\/g, '/');
    return { file: rel, sizeBytes, lines };
  });

  items.sort((a,b) => b.lines - a.lines);

  const report = {
    generatedAt: new Date().toISOString(),
    durationMs: Date.now() - start,
    totalComponents: items.length,
    topByLines: items.slice(0, 50),
    topBySize: [...items].sort((a,b) => b.sizeBytes - a.sizeBytes).slice(0, 50),
  };

  ensureDir(REPORT_DIR);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  fs.writeFileSync(path.join(REPORT_DIR, `report-${timestamp}.json`), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(REPORT_DIR, 'latest.json'), JSON.stringify(report, null, 2));

  console.log(`Component size report: ${report.totalComponents} components`);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(1); }
}