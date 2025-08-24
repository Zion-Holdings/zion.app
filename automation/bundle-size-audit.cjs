#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd) {
  try { return execSync(cmd, { stdio: 'pipe', encoding: 'utf8' }); }
  catch (e) { return e.stdout?.toString?.() || ''; }
}

(function main(){
  process.env.NODE_OPTIONS = '--openssl-legacy-provider';
  console.log('Building project to analyze bundle sizes...');
  run('npx next build');
  const chunksDir = path.join(process.cwd(), '.next', 'static', 'chunks');
  const report = [];
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else {
        const stat = fs.statSync(full);
        report.push({ file: path.relative(process.cwd(), full), bytes: stat.size });
      }
    }
  }
  walk(chunksDir);
  const total = report.reduce((a, b) => a + b.bytes, 0);
  const outDir = path.join(process.cwd(), 'data', 'reports', 'bundle');
  fs.mkdirSync(outDir, { recursive: true });
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const outPath = path.join(outDir, `bundle-size-${ts}.json`);
  fs.writeFileSync(outPath, JSON.stringify({ totalBytes: total, files: report }, null, 2));
  console.log('Bundle size report written to', outPath);
})();