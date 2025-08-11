#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function safeRead(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function listFilesRecursively(rootDir, includeExts, ignoreDirs = new Set(['.git','node_modules','.next','.vercel','.netlify'])) {
  const results = [];
  const stack = [rootDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) {
        if (!ignoreDirs.has(e.name)) stack.push(full);
        continue;
      }
      const ext = path.extname(e.name).toLowerCase();
      if (!includeExts.size || includeExts.has(ext)) results.push(full);
    }
  }
  return results;
}

function countOccurrences(text, needle) {
  if (!text || !needle) return 0;
  const re = new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  return (text.match(re) || []).length;
}

function main() {
  const workspace = path.resolve(__dirname, '..');
  const outDir = path.join(workspace, 'data', 'reports', 'ux-drift');
  fs.mkdirSync(outDir, { recursive: true });

  const homepage = safeRead(path.join(workspace, 'pages', 'index.tsx'));
  const frontHub = safeRead(path.join(workspace, 'pages', 'main', 'front', 'index.tsx'));
  const readme = safeRead(path.join(workspace, 'README.md'));
  const changelog = safeRead(path.join(workspace, 'docs', 'CHANGELOG_AI.md'));
  const netlifyToml = safeRead(path.join(workspace, 'netlify.toml'));

  const signals = [
    'Autonomous', 'Cloud', 'Orchestrator', 'Scheduler', 'Netlify', 'AI', 'Performance', 'A11y', 'SEO', 'Security', 'Docs', 'Images', 'Links'
  ];

  const counts = {};
  for (const s of signals) {
    counts[s] = {
      homepage: countOccurrences(homepage, s),
      frontHub: countOccurrences(frontHub, s),
      readme: countOccurrences(readme, s),
      changelog: countOccurrences(changelog, s)
    };
  }

  // Compare scheduled functions vs present functions
  const scheduledNames = [];
  const lines = netlifyToml.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].trim() === '[[scheduled.functions]]') {
      for (let j = i + 1; j < Math.min(lines.length, i + 6); j += 1) {
        const m = lines[j].match(/name\s*=\s*"([^"]+)"/);
        if (m) { scheduledNames.push(m[1]); break; }
      }
    }
  }

  const functionsDir = path.join(workspace, 'netlify', 'functions');
  let presentFunctions = [];
  try {
    presentFunctions = fs.readdirSync(functionsDir)
      .filter((f) => /\.(js|ts|mjs|cjs)$/.test(f))
      .map((f) => f.replace(/\.[^.]+$/, ''));
  } catch {}

  const missingInSchedule = presentFunctions.filter((n) => !scheduledNames.includes(n)).sort();
  const missingAsFile = scheduledNames.filter((n) => !presentFunctions.includes(n)).sort();

  const driftFindings = [];
  if (missingInSchedule.length) driftFindings.push({ type: 'schedule_gap', message: 'Functions not scheduled', items: missingInSchedule });
  if (missingAsFile.length) driftFindings.push({ type: 'file_gap', message: 'Scheduled functions missing file', items: missingAsFile });

  // Scan for TODOs on front
  const codeFiles = listFilesRecursively(path.join(workspace, 'pages'), new Set(['.ts','.tsx','.js','.jsx']));
  let todoCount = 0;
  for (const f of codeFiles) {
    const c = safeRead(f);
    todoCount += countOccurrences(c, 'TODO');
  }

  const report = {
    generatedAt: new Date().toISOString(),
    signals: counts,
    scheduled: scheduledNames,
    presentFunctions,
    driftFindings,
    todoCount
  };

  const outPath = path.join(outDir, `ux-drift-${Date.now()}.json`);
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

  const md = [
    '# UX/Content Drift Report',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    '## Key Signal Mentions (homepage/front/readme/changelog)',
    '',
    ...signals.map((s) => `- ${s}: ${counts[s].homepage}/${counts[s].frontHub}/${counts[s].readme}/${counts[s].changelog}`),
    '',
    `- TODOs in pages/: ${todoCount}`,
    '',
    missingInSchedule.length ? `- Functions not scheduled: ${missingInSchedule.join(', ')}` : '- All present functions scheduled',
    missingAsFile.length ? `- Scheduled without implementation: ${missingAsFile.join(', ')}` : '- All scheduled functions implemented'
  ].join('\n');
  fs.writeFileSync(path.join(workspace, 'docs', 'UX-DRIFT.md'), md);

  console.log('[ux-drift-detector] Report written:', outPath);
}

main();