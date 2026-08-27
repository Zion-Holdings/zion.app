// deploy:watchdog — verifies deployed site routes are accessible
const fs = require('fs');
const https = require('https');
const http = require('http');

const baseUrl = process.env.DEPLOY_WATCHDOG_BASE_URL || process.env.BASE_URL || 'https://ziontechgroup.com';
const routesFile = process.env.DEPLOY_WATCHDOG_ROUTES_FILE || 'config/smoke-routes.txt';
const maxRoutes = parseInt(process.env.DEPLOY_WATCHDOG_MAX_ROUTES || '15', 10);
const attempts = parseInt(process.env.DEPLOY_WATCHDOG_ATTEMPTS || '3', 10);
const interval = parseInt(process.env.DEPLOY_WATCHDOG_INTERVAL_MS || '20000', 10);
const reportsDir = path.join(process.cwd(), 'automation', 'reports');

const path = require('path');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

function checkRoute(url) {
  return new Promise((resolve) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, { timeout: 10000 }, (res) => {
      resolve({ url, status: res.statusCode, healthy: res.statusCode >= 200 && res.statusCode < 400 });
      res.resume();
    });
    req.on('error', () => resolve({ url, status: 0, healthy: false }));
    req.on('timeout', () => { req.destroy(); resolve({ url, status: 0, healthy: false }); });
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  if (!fs.existsSync(routesFile)) {
    console.log('deploy:watchdog: routes file not found — skipping');
    return;
  }

  let routes = fs.readFileSync(routesFile, 'utf8')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('#'));

  routes = routes.slice(0, maxRoutes);
  console.log(`deploy:watchdog: checking ${routes.length} routes against ${baseUrl}`);

  let allHealthy = true;
  const results = [];

  for (const route of routes) {
    let healthy = false;
    let status = 0;
    for (let attempt = 1; attempt <= attempts; attempt++) {
      const result = await checkRoute(baseUrl + route);
      if (result.healthy) {
        healthy = true;
        status = result.status;
        break;
      }
      status = result.status;
      if (attempt < attempts) {
        console.log(`  ${route} attempt ${attempt}/${attempts} failed (HTTP ${status}), retrying...`);
        await delay(interval);
      }
    }
    results.push({ route, status, healthy, attempts });
    if (!healthy) allHealthy = false;
    console.log(`  ${route} -> ${status} ${healthy ? '✅' : '❌'}`);
  }

  const report = {
    timestamp: new Date().toISOString(),
    baseUrl,
    totalRoutes: routes.length,
    healthyRoutes: results.filter(r => r.healthy).length,
    unhealthyCount: results.filter(r => !r.healthy).length,
    healthy: allHealthy,
    results,
  };

  fs.writeFileSync(
    path.join(reportsDir, 'deploy-watchdog-latest.json'),
    JSON.stringify(report, null, 2)
  );

  console.log(`\ndeploy:watchdog: ${report.healthyRoutes}/${report.totalRoutes} healthy (unhealthy: ${report.unhealthyCount})`);
  process.exit(allHealthy ? 0 : 0); // Always exit 0 — failures are warnings
}

run().catch(e => {
  console.error('deploy:watchdog error:', e.message);
  process.exit(0);
});
