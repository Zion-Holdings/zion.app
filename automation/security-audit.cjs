#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

(function main() {
  let json = null;
  try {
    const out = execSync('npm audit --json', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    json = JSON.parse(out);
  } catch (e) {
    console.warn('[security-audit] npm audit failed, capturing partial');
    try { json = JSON.parse(e.stdout || '{}'); } catch { json = { error: String(e.message || e) }; }
  }
  const outDir = path.join(process.cwd(), 'data', 'security');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'npm-audit.json');
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), report: json }, null, 2), 'utf8');
  console.log('[security-audit] wrote', outPath);
})();