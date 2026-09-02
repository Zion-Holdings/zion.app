import fs from 'node:fs';
import { discoverZionConnections } from './discover-connections.mjs';

async function run() {
  const ts = new Date().toISOString();
  console.log(`\n═══ ZION CONNECTION MONITOR v3 (auto-discover) — ${ts} ═══\n`);

  const { inventory, active } = await discoverZionConnections();
  const connections = [];
  const alerts = [];

  for (const [toolkit, stats] of Object.entries(inventory.byToolkit).sort()) {
    const status = stats.active > 0 ? 'ACTIVE' : stats.failed > 0 ? 'FAILED' : 'EXPIRED';
    connections.push({ name: toolkit, status, ...stats, connectionId: active[toolkit]?.id || null });
    const icon = status === 'ACTIVE' ? '✓' : '✗';
    console.log(`  ${icon} ${toolkit.padEnd(18)} ${status} (active=${stats.active} expired=${stats.expired} failed=${stats.failed})`);
    if (status !== 'ACTIVE') {
      alerts.push({ severity: 'warning', toolkit, message: `${toolkit} has no ACTIVE Composio connection` });
    }
  }

  const healthScore = Math.round(
    (inventory.activeToolkits.length / Math.max(1, Object.keys(inventory.byToolkit).length)) * 100
  );
  const report = {
    timestamp: ts,
    healthScore,
    activeCount: inventory.activeToolkits.length,
    totalCount: Object.keys(inventory.byToolkit).length,
    totalAccounts: inventory.totalAccounts,
    connections,
    alerts,
  };

  fs.writeFileSync('composio-connection-report.json', JSON.stringify(report, null, 2));
  console.log(`\n  Health Score: ${healthScore}% (${inventory.activeToolkits.length}/${Object.keys(inventory.byToolkit).length} toolkits active)`);
  console.log('\n═══ MONITOR COMPLETE ═══');
  return report;
}

run().catch((error) => {
  console.error('FATAL:', error);
  process.exit(1);
});
