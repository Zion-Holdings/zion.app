#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function writeFile(p, content) { ensureDir(path.dirname(p)); fs.writeFileSync(p, content); }

function parseRedirects(content) {
  const lines = content.split(/\r?\n/);
  const rules = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const parts = line.split(/\s+/);
    if (parts.length >= 2) {
      const from = parts[0];
      const to = parts[1];
      const status = parts[2] || '200/301';
      rules.push({ from, to, status });
    }
  }
  return rules;
}

function renderHtml({ generatedAt, rules, exists }) {
  const head = `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Redirects Audit</title><style>
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;background:#0f172a;color:#e2e8f0;margin:0;padding:2rem}
  h1,h2{color:#fff}
  table{border-collapse:collapse;width:100%}
  td,th{border:1px solid rgba(255,255,255,0.2);padding:8px}
  tr:nth-child(even){background:rgba(255,255,255,0.04)}
  small{color:#94a3b8}
  </style></head><body>`;
  const footer = `<footer style="margin-top:2rem"><small>Generated ${generatedAt}</small></footer></body></html>`;

  if (!exists) {
    return head + `<h1>Redirects Audit</h1><p>No _redirects file detected at project root. You can add one to manage redirects for the exported site.</p>` + footer;
  }

  const rows = rules.map((r) => `<tr><td>${r.from}</td><td>${r.to}</td><td>${r.status}</td></tr>`).join('');
  return head + `<h1>Redirects Audit</h1><p>Total rules: <strong>${rules.length}</strong></p><table><thead><tr><th>From</th><th>To</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>` + footer;
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const redirectsPath = path.join(workspaceRoot, '_redirects');
  const outDir = path.join(workspaceRoot, 'public', 'reports', 'redirects');
  const htmlPath = path.join(outDir, 'index.html');

  let exists = false;
  let rules = [];
  try {
    const content = fs.readFileSync(redirectsPath, 'utf8');
    rules = parseRedirects(content);
    exists = true;
  } catch {
    exists = false;
  }

  writeFile(htmlPath, renderHtml({ generatedAt: new Date().toISOString(), rules, exists }));
  console.log(`Redirects audit generated at ${htmlPath} (rules=${rules.length}, exists=${exists})`);
}

main();