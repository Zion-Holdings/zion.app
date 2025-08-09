const fs = require('fs');
const path = require('path');

function listPages(dir, base = '') {
  const entries = fs.readdirSync(dir);
  const routes = [];
  for (const e of entries) {
    const fp = path.join(dir, e);
    const stat = fs.statSync(fp);
    if (stat.isDirectory()) {
      routes.push(...listPages(fp, path.join(base, e)));
    } else if (/\.tsx?$/.test(e)) {
      if (e.startsWith('_')) continue;
      if (base.includes('/api')) continue;
      const name = e.replace(/\.(tsx|ts)$/,'');
      let route = '/' + path.join(base, name).replace(/\\/g, '/');
      route = route.replace(/\/index$/, '');
      route = route.replace(/\[.*?\]/g, '[param]');
      routes.push(route);
    }
  }
  return Array.from(new Set(routes.sort()));
}

(function main() {
  const startedAt = new Date().toISOString();
  const pagesDir = path.resolve(__dirname, '../../../pages');
  const routes = listPages(pagesDir);
  const status = {
    name: 'Route Inventory',
    key: 'route-inventory',
    startedAt,
    finishedAt: new Date().toISOString(),
    success: true,
    metrics: { count: routes.length, routes },
    error: null,
  };
  const outDir = path.resolve(__dirname, '../../../data/cloud-automations');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'route-inventory.json'), JSON.stringify(status, null, 2));
  console.log('[route-inventory] ok');
})();