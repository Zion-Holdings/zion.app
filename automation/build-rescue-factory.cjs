#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORTS_DIR = path.join(__dirname, '..', 'data', 'reports', 'performance');
const OUT_DIR = path.join(__dirname, 'build-rescue-agents');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function findLatestPerformanceReport() {
  if (!fs.existsSync(REPORTS_DIR)) return null;
  const files = fs.readdirSync(REPORTS_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => ({
      name: f,
      full: path.join(REPORTS_DIR, f),
      mtime: fs.statSync(path.join(REPORTS_DIR, f)).mtimeMs,
    }))
    .sort((a, b) => b.mtime - a.mtime);
  return files.length > 0 ? files[0].full : null;
}

function extractMissingDefaultExportPages(stderrText) {
  if (!stderrText) return [];
  const marker = 'pages without a React Component as default export in';
  const lines = stderrText.split(/\r?\n/);
  const results = [];
  let collecting = false;
  for (const line of lines) {
    if (!collecting && line.includes(marker)) {
      collecting = true;
      continue;
    }
    if (collecting) {
      const trimmed = line.trim();
      if (trimmed === '' || trimmed.startsWith('See ')) break;
      if (trimmed.startsWith('pages/')) {
        results.push(path.join(process.cwd(), trimmed));
      }
    }
  }
  return Array.from(new Set(results));
}

function buildPlaceholderForExtension(relPath) {
  const lower = relPath.toLowerCase();
  if (lower.endsWith('.tsx') || lower.endsWith('.jsx') || lower.endsWith('/index.tsx') || lower.endsWith('/index.jsx')) {
    return `\nexport default function PagePlaceholder(): JSX.Element {\n  return (<div>Auto placeholder for ${relPath}</div>);\n}\n`;
  }
  if (lower.endsWith('.js')) {
    return `\nexport default function PagePlaceholder(){\n  return (<div>Auto placeholder for ${relPath}</div>);\n}\n`;
  }
  // Fall back for .ts or unknown: return null (valid React component)
  return `\nimport type React from 'react';\nexport default function PagePlaceholder(): React.ReactElement | null {\n  return null;\n}\n`;
}

function generateAgentCodeForPage(pagePath) {
  const rel = path.relative(process.cwd(), pagePath);
  const placeholder = buildPlaceholderForExtension(rel);
  return `#!/usr/bin/env node\nconst fs = require('fs');\nconst path = require('path');\n\nconst target = path.join(process.cwd(), ${JSON.stringify(rel)});\nif (!fs.existsSync(target)) {\n  console.log('Skipping: page not found', target);\n  process.exit(0);\n}\nconst content = fs.readFileSync(target, 'utf8');\nconst hasDefaultExport = /export\\s+default\\s+/m.test(content);\nif (hasDefaultExport) {\n  console.log('Already has default export:', target);\n  process.exit(0);\n}\nfs.writeFileSync(target, content + ${JSON.stringify('\n') } + ${JSON.stringify(placeholder)});\nconsole.log('Inserted placeholder default export into', target);\n`;
}

function main() {
  ensureDir(OUT_DIR);
  const reportPath = findLatestPerformanceReport();
  if (!reportPath) {
    console.error('No performance report found.');
    process.exit(1);
  }
  let report;
  try {
    report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  } catch (e) {
    console.error('Failed to parse performance report:', e.message);
    process.exit(1);
  }
  const missingPages = extractMissingDefaultExportPages(report.build && report.build.stderr);
  const created = [];
  for (const page of missingPages) {
    const agentName = `fix-missing-default-export-${path.basename(page).replace(/\W+/g, '-')}.cjs`;
    const fp = path.join(OUT_DIR, agentName);
    if (!fs.existsSync(fp)) {
      const code = generateAgentCodeForPage(page);
      fs.writeFileSync(fp, code + '\n');
      try { fs.chmodSync(fp, 0o755); } catch {}
      created.push(fp);
    }
  }
  const registry = path.join(__dirname, 'logs', 'build-rescue-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({
    timestamp: new Date().toISOString(),
    report: path.basename(reportPath),
    created,
  }, null, 2));
  console.log(`Build rescue factory created ${created.length} agent(s).`);
}

main();