#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const NETLIFY_FUNCS_DIR = path.join(__dirname, '..', 'netlify', 'functions');
const GITHUB_WORKFLOWS_DIR = path.join(__dirname, '..', '.github', 'workflows');
const NETLIFY_TOML = path.join(__dirname, '..', 'netlify.toml');
const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'automations');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function listFunctions() {
  try {
    return fs.readdirSync(NETLIFY_FUNCS_DIR)
      .filter(f => f.match(/\.(js|ts|mjs|cjs)$/))
      .map(f => path.basename(f, path.extname(f)))
      .sort();
  } catch { return []; }
}

function parseScheduledFromToml() {
  const out = [];
  let content = '';
  try { content = fs.readFileSync(NETLIFY_TOML, 'utf8'); } catch { return out; }
  const lines = content.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line === '[[scheduled.functions]]') {
      let name = ''; let schedule = '';
      for (let j = i + 1; j < Math.min(lines.length, i + 8); j += 1) {
        const n = lines[j].match(/name\s*=\s*"([^"]+)"/);
        const s = lines[j].match(/schedule\s*=\s*"([^"]+)"/);
        if (n) name = n[1];
        if (s) schedule = s[1];
        if (name && schedule) break;
      }
      if (name) out.push({ name, schedule });
    }
  }
  return out;
}

function listWorkflows() {
  try {
    return fs.readdirSync(GITHUB_WORKFLOWS_DIR)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .sort();
  } catch { return []; }
}

function renderHTML(data) {
  const funcsRows = data.functions.map(n => `<tr><td>${n}</td></tr>`).join('\n');
  const schedRows = data.schedules.map(s => `<tr><td>${s.name}</td><td><code>${s.schedule}</code></td></tr>`).join('\n');
  const wfRows = data.workflows.map(w => `<tr><td>${w}</td></tr>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Automation Atlas</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    h1 { margin-bottom: 8px; }
    section { margin: 16px 0; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; font-size: 14px; }
    th { background: #f3f4f6; text-align: left; }
  </style>
</head>
<body>
  <h1>Automation Atlas</h1>
  <p>Autonomously generated. Consolidates Netlify Functions, schedules from netlify.toml, and GitHub workflows.</p>

  <section>
    <h2>Netlify Functions (${data.functions.length})</h2>
    <table>
      <thead><tr><th>Name</th></tr></thead>
      <tbody>${funcsRows}</tbody>
    </table>
  </section>

  <section>
    <h2>Scheduled Functions (${data.schedules.length})</h2>
    <table>
      <thead><tr><th>Name</th><th>Schedule</th></tr></thead>
      <tbody>${schedRows}</tbody>
    </table>
  </section>

  <section>
    <h2>GitHub Workflows (${data.workflows.length})</h2>
    <table>
      <thead><tr><th>Workflow</th></tr></thead>
      <tbody>${wfRows}</tbody>
    </table>
  </section>
</body>
</html>`;
}

(function main() {
  const data = {
    generatedAt: new Date().toISOString(),
    functions: listFunctions(),
    schedules: parseScheduledFromToml(),
    workflows: listWorkflows(),
  };
  ensureDir(OUT_DIR);
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(data));
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify(data, null, 2));
})();