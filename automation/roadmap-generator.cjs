#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function writeFile(p, content) {
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, content);
}

async function fetchIssuesFromGitHub() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
  const repo = process.env.GITHUB_REPOSITORY || (process.env.GITHUB_REPO || 'Zion-Holdings/zion.app');
  if (!token || !repo) return null;

  const headers = { 'Accept': 'application/vnd.github+json', 'User-Agent': 'automation-roadmap', Authorization: `Bearer ${token}` };
  const url = `https://api.github.com/repos/${repo}/issues?state=open&per_page=100`;
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
}

function collectLocalSignals(workspaceRoot) {
  function list(dir) {
    try { return fs.readdirSync(dir, { withFileTypes: true }); } catch { return []; }
  }
  const signals = [];
  const dirs = [
    ['Pages', path.join(workspaceRoot, 'pages')],
    ['Components', path.join(workspaceRoot, 'components')],
    ['Automations', path.join(workspaceRoot, 'automation')],
    ['Netlify Functions', path.join(workspaceRoot, 'netlify', 'functions')],
  ];
  dirs.forEach(([label, dir]) => {
    const entries = list(dir);
    const files = entries.filter((e) => e.isFile()).map((e) => e.name);
    const folders = entries.filter((e) => e.isDirectory()).map((e) => e.name);
    signals.push({ label, dir, files, folders });
  });
  return signals;
}

function htmlEscape(s) {
  return String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
}

function renderHtml({ generatedAt, issues, localSignals }) {
  const head = `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Autonomous Roadmap</title><style>
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;background:#0f172a;color:#e2e8f0;margin:0;padding:2rem}
  h1,h2{color:#fff}
  .grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
  .card{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:1rem}
  a{color:#67e8f9}
  small{color:#94a3b8}
  </style></head><body>`;
  const footer = `<footer style="margin-top:2rem"><small>Generated ${htmlEscape(generatedAt)}</small></footer></body></html>`;

  let issuesHtml = '';
  if (issues && issues.length) {
    const groups = new Map();
    for (const issue of issues) {
      const key = (issue.labels && issue.labels[0] && (issue.labels[0].name || issue.labels[0])) || 'backlog';
      const group = groups.get(key) || [];
      group.push(issue);
      groups.set(key, group);
    }
    issuesHtml = '<section><h2>GitHub Issues</h2><div class="grid">' +
      Array.from(groups.entries()).map(([label, list]) => {
        const items = list.slice(0, 30).map((i) => `<li><a href="${htmlEscape(i.html_url)}" target="_blank" rel="noopener">${htmlEscape(i.title)}</a></li>`).join('');
        return `<div class="card"><h3>${htmlEscape(label)}</h3><ul>${items}</ul></div>`;
      }).join('') + '</div></section>';
  } else {
    issuesHtml = '<section><h2>GitHub Issues</h2><div class="card"><p><small>No token or issues unavailable. Showing local signals instead.</small></p></div></section>';
  }

  const signalsHtml = '<section><h2>Local Signals</h2><div class="grid">' +
    localSignals.map((s) => {
      const files = s.files.slice(0, 10).map((f) => `<li>${htmlEscape(f)}</li>`).join('');
      const folders = s.folders.slice(0, 10).map((f) => `<li>${htmlEscape(f)}</li>`).join('');
      return `<div class="card"><h3>${htmlEscape(s.label)}</h3><div><strong>Folders</strong><ul>${folders}</ul><strong>Files</strong><ul>${files}</ul></div></div>`;
    }).join('') + '</div></section>';

  const links = '<section><h2>Quick Links</h2><div class="grid">'
    + ['/.netlify/functions/roadmap-generator-runner','/.netlify/functions/redirects-audit-runner'].map((href) => `<div class="card"><a href="${href}">${htmlEscape(href)}</a></div>`).join('')
    + '</div></section>';

  return head + `<h1>Autonomous Roadmap</h1>` + issuesHtml + signalsHtml + links + footer;
}

async function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const outDir = path.join(workspaceRoot, 'public', 'reports', 'roadmap');
  const jsonPath = path.join(outDir, 'index.json');
  const htmlPath = path.join(outDir, 'index.html');

  const issues = await fetchIssuesFromGitHub();
  const localSignals = collectLocalSignals(workspaceRoot);

  const generatedAt = new Date().toISOString();
  writeFile(jsonPath, JSON.stringify({ generatedAt, issuesCount: (issues||[]).length, hasIssues: !!issues }, null, 2));
  writeFile(htmlPath, renderHtml({ generatedAt, issues: issues || [], localSignals }));
  console.log(`Roadmap generated at ${htmlPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});