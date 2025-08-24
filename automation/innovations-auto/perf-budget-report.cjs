#!/usr/bin/env node
/*
  Performance Budget Report
  - Parses .next build output in a simple way by scanning .next/build-manifest.json and .next/server/pages-manifest.json (if present)
  - Writes data/reports/perf-budget.json with basic asset counts per page
*/
const fs = require('fs');
const path = require('path');

function main(cwd = process.cwd()) {
  const manifestPath = path.join(cwd, '.next', 'build-manifest.json');
  const serverManifestPath = path.join(cwd, '.next', 'server', 'pages-manifest.json');
  const report = { pages: {}, assetsTotal: 0 };

  if (fs.existsSync(manifestPath)) {
    const m = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    const pages = m.pages || {};
    for (const [page, assets] of Object.entries(pages)) {
      report.pages[page] = { assetCount: Array.isArray(assets) ? assets.length : 0 };
      report.assetsTotal += Array.isArray(assets) ? assets.length : 0;
    }
  }
  if (fs.existsSync(serverManifestPath)) {
    const sm = JSON.parse(fs.readFileSync(serverManifestPath, 'utf8'));
    report.serverPages = Object.keys(sm).length;
  }

  const out = path.join(cwd, 'data', 'reports', 'perf-budget.json');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(report, null, 2) + '\n', 'utf8');
  console.log(`PERF: Wrote ${out}`);
}

if (require.main === module) main();

module.exports = { main };