const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function log(msg) { console.log(`[functions-directory] ${msg}`); }

function readJSONSafe(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

function readTextSafe(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return ''; }
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function parseScheduledFromToml(tomlContent) {
  const entries = [];
  if (!tomlContent) return entries;
  const lines = tomlContent.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].trim() === '[[scheduled.functions]]') {
      let name = null; let schedule = null;
      for (let j = i + 1; j < Math.min(i + 8, lines.length); j += 1) {
        const ln = lines[j];
        const mName = ln.match(/name\s*=\s*"([^"]+)"/);
        if (mName) name = mName[1];
        const mSched = ln.match(/schedule\s*=\s*"([^"]+)"/);
        if (mSched) schedule = mSched[1];
      }
      if (name) entries.push({ name, schedule });
    }
  }
  return entries;
}

function heuristicCategory(name) {
  const n = name.toLowerCase();
  if (n.includes('front')) return 'Front Systems';
  if (n.includes('home')) return 'Homepage';
  if (n.includes('repo') || n.includes('git')) return 'Repo Intelligence';
  if (n.includes('security')) return 'Security';
  if (n.includes('link') || n.includes('health') || n.includes('broken')) return 'Site Health';
  if (n.includes('docs')) return 'Docs & Knowledge';
  if (n.includes('marketing') || n.includes('promo')) return 'Marketing';
  if (n.includes('sitemap') || n.includes('image') || n.includes('og')) return 'Media & SEO';
  if (n.includes('ultrafast') || n.includes('orchestrator')) return 'Orchestrators';
  return 'General';
}

function toRows(entries) {
  const groups = new Map();
  for (const e of entries) {
    const cat = heuristicCategory(e.name);
    if (!groups.has(cat)) groups.set(cat, []);
    groups.get(cat).push(e);
  }
  for (const arr of groups.values()) arr.sort((a,b)=>a.name.localeCompare(b.name));
  return Array.from(groups.entries()).sort((a,b)=>a[0].localeCompare(b[0]));
}

function renderHTML(entries, basePath) {
  const rows = toRows(entries).map(([cat, items]) => {
    const cards = items.map(i => {
      const href = `${basePath}/.netlify/functions/${i.name}`;
      return `<a href="${href}" class="card" target="_self" rel="noopener">
  <div class="title">${i.name}</div>
  ${i.schedule ? `<div class="meta">cron: ${i.schedule}</div>` : ''}
</a>`; }).join('\n');
    return `<section>
  <h2>${cat}</h2>
  <div class="grid">${cards}</div>
</section>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Autonomy Functions Directory</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; color: #e5e7eb; background: #0b1220; }
    h1 { margin: 0 0 8px; font-size: 24px; color: #fff; }
    h2 { margin: 24px 0 12px; font-size: 18px; color: #a5b4fc; }
    p { color: #9ca3af; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; }
    .card { display: block; padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.06); text-decoration: none; color: #e5e7eb; }
    .card:hover { border-color: rgba(34,211,238,0.40); }
    .title { font-weight: 600; }
    .meta { font-size: 12px; color: #93c5fd; margin-top: 4px; }
    .container { max-width: 1024px; margin: 0 auto; }
    .header { display:flex; justify-content: space-between; align-items:center; gap: 12px; }
    .small { font-size: 12px; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Autonomy Functions Directory</h1>
      <div class="small">Autonomously generated</div>
    </div>
    <p>Browse all Netlify functions and scheduled jobs powering the autonomous cloud. Click to invoke lightweight endpoints where safe.</p>
    ${rows}
  </div>
</body>
</html>`;
}

function writeArtifacts(entries) {
  const outDir = path.join(process.cwd(), 'public', 'automation', 'functions-directory');
  ensureDir(outDir);
  const json = { generatedAt: new Date().toISOString(), total: entries.length, items: entries };
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(json, null, 2));
  const basePath = process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '';
  fs.writeFileSync(path.join(outDir, 'index.html'), renderHTML(entries, ''));
  return [path.join(outDir, 'latest.json'), path.join(outDir, 'index.html')];
}

function commitChanges(files) {
  try {
    execSync('git config user.name "zion-bot"');
    execSync('git config user.email "bot@zion.app"');
    execSync(`git add ${files.map(f=>`"${path.relative(process.cwd(), f)}"`).join(' ')}`, { stdio: 'inherit' });
    execSync(`git commit -m "feat(autonomy): update functions directory [skip ci]" || true`, { stdio: 'inherit', shell: true });
    execSync(`git push origin ${process.env.GIT_BRANCH || 'main'} || true`, { stdio: 'inherit', shell: true });
  } catch (e) {
    log(`git push failed: ${e.message}`);
  }
}

exports.config = { schedule: '*/2 * * * *' };

exports.handler = async function() {
  try {
    const manifestPath = path.join(process.cwd(), 'netlify', 'functions', 'functions-manifest.json');
    const manifest = readJSONSafe(manifestPath) || { functions: [] };

    // Include all JS/TS function files in directory too
    let dirEntries = [];
    try {
      dirEntries = fs.readdirSync(path.join(process.cwd(), 'netlify', 'functions'));
    } catch {}
    const discovered = new Set((manifest.functions || []).filter(Boolean));
    for (const name of dirEntries) {
      const ext = path.extname(name);
      const base = path.basename(name, ext);
      if (!ext || base === 'functions-manifest' || base === 'functions-directory') continue;
      if (['.js', '.ts', '.mjs', '.cjs'].includes(ext)) discovered.add(base);
    }

    // Scheduled functions from netlify.toml
    const tomlContent = readTextSafe(path.join(process.cwd(), 'netlify.toml'));
    const scheduled = parseScheduledFromToml(tomlContent);
    const scheduledSet = new Map(scheduled.map(s => [s.name, s.schedule]));

    const names = Array.from(discovered).sort();
    const items = names
      .filter(n => n && n !== 'trigger-all-and-commit' && n !== 'functions-directory')
      .map(n => ({ name: n, schedule: scheduledSet.get(n) || null }));

    const files = writeArtifacts(items);
    commitChanges(files);

    return { statusCode: 200, body: JSON.stringify({ ok: true, total: items.length }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};