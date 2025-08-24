#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function read(fp) { return fs.existsSync(fp) ? fs.readFileSync(fp, 'utf8') : ''; }

function parseChecklist(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const bullets = [];
  for (const l of lines) {
    const m = l.match(/^(?:[-*]|\d+\.)\s+(.*)$/);
    if (m) bullets.push(m[1]);
  }
  return Array.from(new Set(bullets));
}

function checkProject(bullets) {
  const results = [];
  const pkgPath = path.join(process.cwd(), 'package.json');
  const hasPkg = fs.existsSync(pkgPath);
  results.push({ check: 'package.json exists', ok: hasPkg });
  if (hasPkg) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      const hasBuild = pkg.scripts && typeof pkg.scripts.build === 'string';
      results.push({ check: 'npm run build script present', ok: !!hasBuild });
    } catch (e) {
      results.push({ check: 'package.json parseable', ok: false, note: e.message });
    }
  }
  // Example heuristic checks based on bullets
  for (const b of bullets.slice(0, 20)) {
    if (/lint/i.test(b)) results.push({ check: 'eslint configured', ok: fs.existsSync(path.join(process.cwd(), '.eslintrc.js')) });
    if (/deploy|netlify/i.test(b)) results.push({ check: 'netlify.toml present', ok: fs.existsSync(path.join(process.cwd(), 'netlify.toml')) });
    if (/tailwind/i.test(b)) results.push({ check: 'tailwind.config.js present', ok: fs.existsSync(path.join(process.cwd(), 'tailwind.config.js')) });
    if (/mcp/i.test(b)) results.push({ check: 'MCP scripts present', ok: fs.existsSync(path.join(process.cwd(), 'mcp-automation-system.js')) });
  }
  return results;
}

function main() {
  const alignDir = path.join(process.cwd(), 'data', 'reports', 'alignment');
  const chatText = read(path.join(alignDir, 'chat-raw.txt'));
  const bullets = parseChecklist(chatText);
  const results = checkProject(bullets);
  const summary = {
    timestamp: new Date().toISOString(),
    totalChecks: results.length,
    failures: results.filter((r) => !r.ok).length,
    results
  };
  const outPath = path.join(alignDir, 'compliance-report.json');
  fs.writeFileSync(outPath, JSON.stringify(summary, null, 2));
  console.log(`Compliance report written to ${outPath}`);
}

if (require.main === module) main();