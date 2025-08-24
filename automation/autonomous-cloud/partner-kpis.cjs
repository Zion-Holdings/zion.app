#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

async function main() {
  const root = process.cwd();
  const partnersFile = path.join(root, 'data', 'partners', 'partners.json');
  const keysFile = path.join(root, 'data', 'partners', 'keys.json');
  const usageFile = path.join(root, 'data', 'partners', 'usage.json');
  const outDir = path.join(root, 'data', 'reports', 'partners');
  await fs.ensureDir(outDir);

  const partners = (await fs.pathExists(partnersFile)) ? await fs.readJSON(partnersFile) : [];
  const keys = (await fs.pathExists(keysFile)) ? await fs.readJSON(keysFile) : [];
  const usage = (await fs.pathExists(usageFile)) ? await fs.readJSON(usageFile) : [];

  const now = new Date();
  const nowIso = now.toISOString();
  const dayKey = nowIso.substring(0, 10);
  const since30 = Date.now() - 30 * 24 * 60 * 60 * 1000;

  const totalPartners = partners.length;
  const approvedPartners = partners.filter(p => p.status === 'approved').length;
  const activeKeys = keys.filter(k => k.active).length;

  const last30 = usage.filter(u => new Date(u.timestamp).getTime() >= since30);
  const totalRequests30d = last30.length;
  const byEndpoint = {};
  const byPartner = {};
  for (const u of last30) {
    byEndpoint[u.endpoint] = (byEndpoint[u.endpoint] || 0) + 1;
    byPartner[u.partnerId] = (byPartner[u.partnerId] || 0) + 1;
  }
  const topEndpoints = Object.entries(byEndpoint)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([endpoint, count]) => ({ endpoint, count }));
  const topPartners = Object.entries(byPartner)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([partnerId, count]) => ({ partnerId, count }));

  const report = {
    generatedAt: nowIso,
    totals: {
      partners: totalPartners,
      approvedPartners,
      activeApiKeys: activeKeys,
      requestsLast30d: totalRequests30d,
    },
    topEndpoints,
    topPartners,
  };

  await fs.writeJSON(path.join(outDir, 'kpis-latest.json'), report, { spaces: 2 });
  await fs.writeJSON(path.join(outDir, `kpis-${dayKey}.json`), report, { spaces: 2 });
  console.log(`[partner-kpis] Wrote reports at ${outDir}`);
}

main().catch(err => {
  console.error('[partner-kpis] Failed:', err);
  process.exit(1);
});