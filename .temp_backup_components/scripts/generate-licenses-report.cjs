#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const axios = require('axios');

function readPackageJson() {
  const pkgPath = path.join(__dirname, '..', 'package.json');
  const rootPkgPath = path.join(__dirname, '..', 'package.json');
  const actualPath = fs.existsSync(rootPkgPath) ? rootPkgPath : pkgPath;
  return JSON.parse(fs.readFileSync(actualPath, 'utf8'));
}

async function fetchLicense(pkgName) {
  try {
    const url = `https://registry.npmjs.org/${pkgName}/latest`;
    const { data } = await axios.get(url, { timeout: 10000, headers: { 'User-Agent': 'automation-bot' } });
    const lic = data.license || (data.licenses && data.licenses[0] && data.licenses[0].type) || 'UNKNOWN';
    return typeof lic === 'string' ? lic : (lic?.type || 'UNKNOWN');
  } catch (e) {
    return 'UNKNOWN';
  }
}

async function main() {
  const pkg = readPackageJson();
  const deps = Object.keys(pkg.dependencies || {});
  const devDeps = Object.keys(pkg.devDependencies || {});
  const all = [...new Set([...deps, ...devDeps])];
  const entries = [];
  for (const name of all) {
    const license = await fetchLicense(name);
    entries.push({ name, license });
  }
  const counts = entries.reduce((acc, e) => { acc[e.license] = (acc[e.license] || 0) + 1; return acc; }, {});
  const out = { updatedAt: new Date().toISOString(), total: entries.length, byLicense: counts, items: entries.sort((a,b) => a.name.localeCompare(b.name)) };
  const target = path.join(__dirname, '..', 'data', 'automation', 'licenses.json');
  fs.writeFileSync(target, JSON.stringify(out, null, 2));
  console.log('Wrote', target);
}

main().catch(err => { console.error(err); process.exit(1); });