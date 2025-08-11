#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT_DIR, 'public', 'reports', 'secrets');

const IGNORE_DIRS = new Set(['node_modules', '.git', '.next', 'out', 'public', '.husky']);
const MAX_FILE_SIZE_BYTES = 1024 * 1024; // 1MB

const PATTERNS = [
  { name: 'AWS Access Key ID', regex: /AKIA[0-9A-Z]{16}/g },
  { name: 'AWS Secret Access Key', regex: /(?<![A-Z0-9])[A-Za-z0-9\/+=]{40}(?![A-Z0-9])/g },
  { name: 'GitHub Token', regex: /ghp_[A-Za-z0-9]{36}/g },
  { name: 'Slack Bot Token', regex: /xoxb-[0-9A-Za-z-]{10,}/g },
  { name: 'OpenAI API Key', regex: /sk-[A-Za-z0-9]{20,}/g },
  { name: 'Google API Key', regex: /AIza[0-9A-Za-z\-_]{35}/g },
];

function listFilesRecursively(startDir) {
  const result = [];
  const stack = [startDir];
  while (stack.length) {
    const dir = stack.pop();
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (entry.isFile()) result.push(full);
    }
  }
  return result;
}

function maskValue(value) {
  if (!value) return '';
  const visible = Math.min(6, Math.floor(value.length / 4));
  return value.slice(0, visible) + '…' + value.slice(-4);
}

function scanFile(filePath) {
  try {
    const stat = fs.statSync(filePath);
    if (stat.size > MAX_FILE_SIZE_BYTES) return [];
    const buf = fs.readFileSync(filePath);
    // Try to treat as text
    const content = buf.toString('utf8');
    const findings = [];
    for (const pat of PATTERNS) {
      const matches = content.match(pat.regex) || [];
      for (const val of matches) {
        findings.push({ pattern: pat.name, preview: maskValue(val) });
      }
    }
    return findings;
  } catch {
    return [];
  }
}

function renderHTML(rows) {
  const total = rows.reduce((acc, r) => acc + r.findings.length, 0);
  const trs = rows.map(r => {
    const issues = r.findings.length ? '<ul>' + r.findings.map(f => `<li>${f.pattern}: <code>${f.preview}</code></li>`).join('') + '</ul>' : 'OK';
    return `<tr><td>${r.file}</td><td>${issues}</td></tr>`;
  }).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Secrets Leak Scanner</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; font-size: 14px; vertical-align: top; }
    th { background: #f3f4f6; text-align: left; }
  </style>
</head>
<body>
  <h1>Secrets Leak Scanner</h1>
  <p>Potential findings are masked. Review carefully before taking action.</p>
  <p>Total files with findings: ${rows.filter(r => r.findings.length).length}, Total potential secrets: ${total}</p>
  <table>
    <thead><tr><th>File</th><th>Findings</th></tr></thead>
    <tbody>${trs}</tbody>
  </table>
</body>
</html>`;
}

function main() {
  const files = listFilesRecursively(ROOT_DIR);
  const rows = files.map(f => ({ file: f.replace(ROOT_DIR + '/', ''), findings: scanFile(f) })).filter(r => r.findings.length);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify({ generatedAt: new Date().toISOString(), rows }, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(rows));
}

if (require.main === module) {
  main();
}