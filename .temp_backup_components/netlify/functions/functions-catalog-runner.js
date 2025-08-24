const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

function readNetlifyTomlSchedules(netlifyTomlPath) {
  const text = fs.readFileSync(netlifyTomlPath, 'utf8');
  const entries = [];
  const blockRe = /\[\[scheduled\.functions\]\][\s\S]*?(?=(\[\[|$))/g;
  const nameRe = /name\s*=\s*"([^"]+)"/;
  const schedRe = /schedule\s*=\s*"([^"]+)"/;
  let match;
  while ((match = blockRe.exec(text))) {
    const block = match[0];
    const nameM = block.match(nameRe);
    const schedM = block.match(schedRe);
    if (nameM && nameM[1]) {
      entries.push({ name: nameM[1], schedule: schedM ? schedM[1] : null });
    }
  }
  return entries;
}

function htmlEscape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

exports.config = { schedule: '*/5 * * * *' };

exports.handler = async () => {
  const root = path.resolve(__dirname, '..', '..');
  const fnsDir = path.join(root, 'netlify', 'functions');
  const files = fs.readdirSync(fnsDir).filter(f => /\.(js|ts)$/.test(f));
  const fromFs = files.map(f => ({ name: f.replace(/\.(js|ts)$/,'') }));

  let manifest = { functions: [] };
  try {
    manifest = JSON.parse(fs.readFileSync(path.join(fnsDir, 'functions-manifest.json'), 'utf8'));
  } catch {}

  const scheduled = readNetlifyTomlSchedules(path.join(root, 'netlify.toml'));
  const scheduleMap = new Map(scheduled.map(s => [s.name, s.schedule]));

  const mergedNames = new Set([
    ...fromFs.map(f => f.name),
    ...manifest.functions,
    ...scheduled.map(s => s.name)
  ]);

  const catalog = Array.from(mergedNames).sort().map(name => ({
    name,
    schedule: scheduleMap.get(name) || null,
    file: files.find(f => f.startsWith(name + '.')) || null
  }));

  const outDir = path.join(root, 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'functions-catalog.json'), JSON.stringify({ generatedAt: new Date().toISOString(), total: catalog.length, functions: catalog }, null, 2));

  const rows = catalog.map(c => `<tr><td><code>${htmlEscape(c.name)}</code></td><td>${c.schedule ? `<code>${htmlEscape(c.schedule)}</code>` : '<em>on-demand</em>'}</td><td>${c.file ? `<code>${htmlEscape(c.file)}</code>` : '<em>-</em>'}</td></tr>`).join('\n');
  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Functions Catalog</title>
  <style>
    body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background:#0b1220; color:#fff; }
    .container { max-width: 960px; margin: 2rem auto; padding: 0 1rem; }
    h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .meta { color: #9ca3af; font-size: 0.85rem; margin-bottom: 1rem; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border-bottom: 1px solid rgba(255,255,255,0.1); padding: 0.5rem; text-align: left; font-size: 0.9rem; }
    code { color: #7dd3fc; }
    a { color: #93c5fd; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Functions Catalog</h1>
    <div class="meta">Generated: ${new Date().toISOString()} — Total: ${catalog.length}</div>
    <div class="meta"><a href="./functions-catalog.json">Download JSON</a></div>
    <table>
      <thead><tr><th>Name</th><th>Schedule</th><th>File</th></tr></thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  </div>
</body>
</html>`;
  fs.writeFileSync(path.join(outDir, 'functions-catalog.html'), html);

  runNode('automation/advanced-git-sync.cjs');

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true, total: catalog.length, output: 'public/automation/functions-catalog.{json,html}' })
  };
};