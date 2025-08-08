#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'smoke-test-agents');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

function* walkFiles(startDir, exts = ['.js', '.jsx', '.ts', '.tsx', '.mdx']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (exts.includes(path.extname(entry.name))) yield full;
      }
    }
  }
}

function collectRoutes() {
  const routes = new Set(['/']);
  const bases = [path.join(process.cwd(), 'pages'), path.join(process.cwd(), 'src', 'pages')];
  for (const base of bases) {
    if (!fs.existsSync(base)) continue;
    for (const file of walkFiles(base)) {
      const rel = path.relative(base, file);
      if (rel.startsWith('api' + path.sep)) continue;
      if (!/\.(js|jsx|ts|tsx|mdx)$/i.test(rel)) continue;
      let route = rel.replace(/\.(js|jsx|ts|tsx|mdx)$/i, '');
      if (route.endsWith('/index')) route = route.slice(0, -('/index'.length));
      if (route.includes('[')) continue; // skip dynamic for now
      route = '/' + route.replace(/\\/g, '/');
      if (route === '//') route = '/';
      routes.add(route);
    }
  }
  return Array.from(routes);
}

function agentForRoute(route) {
  const name = `smoke-${route.replace(/[^a-zA-Z0-9_-]/g, '-')}.cjs`;
  const code = `#!/usr/bin/env node\nconst http = require('http');\nconst url = process.env.SMOKE_BASE_URL || 'http://localhost:3000';\nconst target = url.replace(/\/$/, '') + ${JSON.stringify(route)};\nhttp.get(target, (res) => {\n  const { statusCode } = res;\n  if (statusCode >= 200 && statusCode < 400) {\n    console.log('OK', target, statusCode);\n    process.exit(0);\n  } else {\n    console.error('FAIL', target, statusCode);\n    process.exit(1);\n  }\n}).on('error', (e) => {\n  console.error('ERROR', target, e.message);\n  process.exit(1);\n});\n`;
  return { name, code };
}

function main() {
  ensureDir(OUT_DIR);
  const routes = collectRoutes().slice(0, 200);
  const created = [];
  for (const route of routes) {
    const { name, code } = agentForRoute(route);
    const fp = path.join(OUT_DIR, name);
    if (!fs.existsSync(fp)) { fs.writeFileSync(fp, code + '\n'); try { fs.chmodSync(fp, 0o755); } catch {} created.push(fp); }
  }
  const registry = path.join(__dirname, 'logs', 'smoke-test-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), routesCount: routes.length, created }, null, 2));
  console.log(`Smoke test factory created ${created.length} agent(s).`);
}

main();