#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeJson(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function run(cmd) {
  try {
    return execSync(cmd, { stdio: 'pipe', encoding: 'utf8' });
  } catch (e) {
    return String(e?.stdout || e?.message || e);
  }
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const reportDir = path.join(workspaceRoot, 'data', 'reports', 'dead-code');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

  // Collect TS/JS file list
  let files = [];
  try {
    const rgFiles = run("rg -g '!node_modules' -g '!automation/logs' -n --files -t js -t ts");
    files = rgFiles
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .filter((p) => !p.endsWith('.d.ts'));
  } catch {
    const gitFiles = run('git ls-files "**/*.ts" "**/*.tsx" "**/*.js" "**/*.jsx"');
    files = gitFiles
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .filter((p) => !p.endsWith('.d.ts'));
  }

  // Find unused exports via ts-prune if available; otherwise basic heuristic
  let pruneJson = [];
  let usedTool = 'heuristic';
  try {
    const tmp = path.join(reportDir, `ts-prune-${timestamp}.json`);
    ensureDir(reportDir);
    const out = run('npx -y ts-prune -j');
    pruneJson = JSON.parse(out);
    usedTool = 'ts-prune';
    // remove noisy entries in pages/_app etc
    pruneJson = pruneJson.filter((e) => !/pages\/_app|pages\/_document/.test(e.file));
    writeJson(tmp, pruneJson);
  } catch {
    // fallback: mark files not referenced anywhere by import statements
    const importMap = new Map();
    let importMatches = '';
    try {
      importMatches = run("rg -n " + JSON.stringify("from '") + '\n' + run('rg -n "require(\\\"" | cat'));
    } catch {
      importMatches = run("grep -RhnE \'from \\\'|require\\(\"\' -- */*.{ts,tsx,js,jsx} 2>/dev/null | cat");
    }
    files.forEach((f) => importMap.set(f, 0));
    importMatches.split('\n').forEach((line) => {
      const parts = line.split(':');
      if (parts.length < 2) return;
      const file = parts[0];
      if (importMap.has(file)) importMap.set(file, (importMap.get(file) || 0) + 1);
    });
    const likelyDead = files.filter((f) => (importMap.get(f) || 0) === 0 && !/pages\//.test(f));
    pruneJson = likelyDead.map((f) => ({ file: f, name: 'file', type: 'file' }));
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    method: usedTool,
    totals: {
      filesAnalyzed: files.length,
      unusedCount: Array.isArray(pruneJson) ? pruneJson.length : 0,
    },
  };

  const latestPath = path.join(reportDir, 'latest.json');
  const datedPath = path.join(reportDir, `report-${timestamp}.json`);
  writeJson(datedPath, { summary, unused: pruneJson });
  writeJson(latestPath, { summary, unused: pruneJson });
  console.log(`Dead-code report written to ${datedPath}`);
}

main();