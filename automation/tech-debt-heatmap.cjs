const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return '';
  }
}

function countOccurrences(text, regex) {
  if (!text) return 0;
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

function analyzeFile(filePath) {
  const content = readFileSafe(filePath);
  const lines = content.split('\n').length;
  const todoCount = countOccurrences(content, /\b(TODO|FIXME)\b/gi);
  const anyCount = /\.(ts|tsx)$/i.test(filePath) ? countOccurrences(content, /\bany\b/g) : 0;
  const eslintDisableCount = countOccurrences(content, /eslint-disable/gi);

  // naive complexity signal: count of branching keywords
  const complexitySignals = countOccurrences(content, /\b(if|for|while|switch|case|catch|try)\b/g);

  const score = (
    todoCount * 5 +
    anyCount * 3 +
    eslintDisableCount * 4 +
    Math.round(lines / 400) +
    Math.round(complexitySignals / 25)
  );

  return { filePath, lines, todoCount, anyCount, eslintDisableCount, complexitySignals, score };
}

function gatherFiles() {
  const patterns = [
    'pages/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'automation/**/*.{cjs,js,mjs,ts}',
    'scripts/**/*.{cjs,js,mjs,ts}',
    'netlify/functions/**/*.{js,ts}',
  ];
  const ignore = [
    '**/node_modules/**',
    '**/.next/**',
    '**/out/**',
    '**/dist/**',
    '**/public/**',
    '**/.git/**'
  ];
  const files = new Set();
  patterns.forEach((p) => glob.sync(p, { ignore }).forEach((f) => files.add(f)));
  return Array.from(files);
}

function generateHtmlReport(results, summary) {
  const rows = results.slice(0, 200).map((r) => `
    <tr>
      <td style="text-align:left">${r.filePath}</td>
      <td>${r.lines}</td>
      <td>${r.todoCount}</td>
      <td>${r.anyCount}</td>
      <td>${r.eslintDisableCount}</td>
      <td>${r.complexitySignals}</td>
      <td><strong>${r.score}</strong></td>
    </tr>`).join('\n');
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Tech Debt Heatmap</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: ui-sans-serif, system-ui; background: #0b1220; color: #e6f0ff; padding: 24px; }
    h1 { margin-bottom: 8px; }
    .muted { color: #9fb3c8 }
    table { border-collapse: collapse; width: 100%; margin-top: 16px; }
    th, td { border: 1px solid #1f2a44; padding: 8px; font-size: 13px; }
    th { background: #111a2f; }
    tr:nth-child(even) { background: #0f1730 }
  </style>
</head>
<body>
  <h1>Tech Debt Heatmap</h1>
  <div class="muted">Generated at ${new Date().toISOString()}</div>
  <p class="muted">Top signals across the repo. Higher score indicates higher potential maintenance priority.</p>
  <ul>
    <li>Total files scanned: ${summary.totalFiles}</li>
    <li>Total TODO/FIXME: ${summary.totalTodos}</li>
    <li>Total ESLint disables: ${summary.totalEslintDisables}</li>
  </ul>
  <table>
    <thead>
      <tr>
        <th>File</th>
        <th>Lines</th>
        <th>TODO</th>
        <th>any</th>
        <th>eslint-disable</th>
        <th>Complexity signals</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</body>
</html>`;
}

(function run() {
  const files = gatherFiles();
  const analyses = files.map(analyzeFile);
  const sorted = analyses.sort((a, b) => b.score - a.score);

  const summary = {
    generatedAt: new Date().toISOString(),
    totalFiles: files.length,
    totalTodos: sorted.reduce((acc, r) => acc + r.todoCount, 0),
    totalEslintDisables: sorted.reduce((acc, r) => acc + r.eslintDisableCount, 0),
    topFiles: sorted.slice(0, 50).map((r) => r.filePath)
  };

  const outDir = path.resolve(__dirname, '..', 'public', 'reports', 'tech-debt');
  fse.mkdirpSync(outDir);

  const jsonPath = path.join(outDir, 'latest.json');
  const htmlPath = path.join(outDir, 'index.html');

  fs.writeFileSync(jsonPath, JSON.stringify({ summary, results: sorted }, null, 2));
  fs.writeFileSync(htmlPath, generateHtmlReport(sorted, summary));

  // Also surface a small registry entry
  const registryDir = path.resolve(__dirname, '..', 'public', 'automation');
  fse.mkdirpSync(registryDir);
  const registryPath = path.join(registryDir, 'content-registry.json');
  let registry = [];
  try { registry = JSON.parse(fs.readFileSync(registryPath, 'utf8')); } catch {}
  const entry = {
    id: 'tech-debt-heatmap',
    title: 'Tech Debt Heatmap',
    href: '/reports/tech-debt',
    updatedAt: summary.generatedAt
  };
  const without = registry.filter((x) => x.id !== entry.id);
  without.push(entry);
  fs.writeFileSync(registryPath, JSON.stringify(without, null, 2));

  console.log(`[tech-debt] Wrote ${jsonPath} and ${htmlPath}`);
})();