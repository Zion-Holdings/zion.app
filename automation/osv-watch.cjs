const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'security', 'osv-report.json');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function fetchJson(url, opts = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Zion-Automation/1.0', 'Content-Type': 'application/json' }, ...opts });
  if (!res.ok) throw new Error(`Request failed ${res.status} ${url}`);
  return res.json();
}

async function queryOsv(name, version) {
  const body = {
    package: { name, ecosystem: 'npm' },
    version,
  };
  try {
    const data = await fetchJson('https://api.osv.dev/v1/query', { method: 'POST', body: JSON.stringify(body) });
    return data.vulns || [];
  } catch (e) {
    console.warn('OSV query failed for', name, version, e.message);
    return [];
  }
}

async function run() {
  const pkgPath = path.join(__dirname, '..', 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };

  const results = [];
  for (const [name, versionRange] of Object.entries(deps)) {
    const cleanVersion = versionRange.replace(/^[^\d]*/, '');
    const vulns = await queryOsv(name, cleanVersion);
    if (vulns.length > 0) {
      results.push({ name, versionRange, vulns });
    }
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'OSV vulnerability report for npm dependencies',
    totalAffected: results.length,
    results,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`OSV report written to ${OUTPUT_PATH} with ${results.length} affected packages.`);
}

run().catch((err) => {
  console.error('OSV watch failed:', err);
  process.exit(0);
});