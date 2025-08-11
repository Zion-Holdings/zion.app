const fs = require('fs');
const path = require('path');

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'Accept': 'application/vnd.npm.install-v1+json, application/json' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function writeFile(p, data) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, data);
}

function runNode(relPath, args = []) {
  const { spawnSync } = require('child_process');
  const abs = path.resolve(__dirname, '..', '..', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
}

exports.config = { schedule: '0 2 * * 1' };

exports.handler = async () => {
  const root = path.resolve(__dirname, '..', '..');
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  const all = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
  const names = Object.keys(all);

  const risky = new Set(['agpl', 'gpl', 'lgpl']);
  const results = [];

  const limit = parseInt(process.env.LICENSE_CONCURRENCY || '6', 10);
  let index = 0;
  async function worker() {
    while (index < names.length) {
      const name = names[index++];
      const version = all[name];
      try {
        const ver = version.replace(/^[^0-9]*/, '');
        const url = `https://registry.npmjs.org/${encodeURIComponent(name)}/${encodeURIComponent(ver || 'latest')}`;
        const json = await fetchJson(url);
        const license = json.license || (Array.isArray(json.licenses) ? json.licenses.map(l => l.type).join(',') : 'unknown');
        const normalized = String(license).toLowerCase();
        const risk = Array.from(risky).some(k => normalized.includes(k)) ? 'high' : 'low';
        results.push({ name, version, license: license || 'unknown', risk });
      } catch (e) {
        results.push({ name, version, license: 'error', error: String(e), risk: 'unknown' });
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, names.length) }, () => worker()));

  results.sort((a,b) => (a.risk === 'high' ? -1 : 1) || a.name.localeCompare(b.name));

  const outDir = path.join(root, 'public', 'reports', 'licenses');
  const jsonPath = path.join(outDir, 'report.json');
  const mdPath = path.join(outDir, 'report.md');

  writeFile(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), total: results.length, results }, null, 2));
  const rows = results.map(r => `| ${r.name} | ${r.version} | ${r.license} | ${r.risk} |`).join('\n');
  const md = `# License Compliance Report\n\nGenerated: ${new Date().toISOString()}\n\nTotal dependencies: ${results.length}\n\n| Package | Version | License | Risk |\n|---|---|---|---|\n${rows}\n`;
  writeFile(mdPath, md);

  const sync = runNode('automation/advanced-git-sync.cjs');

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true, generated: { json: path.relative(root, jsonPath), md: path.relative(root, mdPath) }, total: results.length })
  };
};