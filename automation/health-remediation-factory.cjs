#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, 'logs', 'auto-health-monitor.log');
const OUT_DIR = path.join(__dirname, 'health-remediation-agents');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

function parseIssuesFromLog(text) {
  const missingRoutes = [];
  const missingAssets = [];
  const lines = text.split(/\r?\n/);
  let mode = null;
  for (const line of lines) {
    if (line.includes('Details: Missing routes')) { mode = 'routes'; continue; }
    if (line.includes('Details: Missing assets')) { mode = 'assets'; continue; }
    if (!line.startsWith('[') && line.trim().startsWith('- ')) {
      const detail = line.trim().slice(2).trim();
      if (mode === 'routes') {
        const m = detail.match(/^(?<href>\S+) referenced in (?<file>.+)$/);
        if (m && m.groups) missingRoutes.push({ href: m.groups.href, file: m.groups.file });
      } else if (mode === 'assets') {
        const m = detail.match(/^(?<src>\S+) referenced in (?<file>.+)$/);
        if (m && m.groups) missingAssets.push({ src: m.groups.src, file: m.groups.file });
      }
    }
  }
  return { missingRoutes, missingAssets };
}

function agentForMissingRoute(href) {
  const name = `create-stub-page-${href.replace(/[^a-zA-Z0-9_-]/g, '-')}.cjs`;
  const routePath = href.replace(/^\//, '');
  const isIndex = routePath === '';
  const targetTsx = path.join(process.cwd(), 'pages', routePath, isIndex ? 'index.tsx' : 'index.tsx');
  const code = `#!/usr/bin/env node\nconst fs = require('fs');\nconst path = require('path');\nconst dest = path.join(process.cwd(), ${JSON.stringify(path.relative(process.cwd(), targetTsx))});\nfs.mkdirSync(path.dirname(dest), { recursive: true });\nif (!fs.existsSync(dest)) {\n  fs.writeFileSync(dest, 'export default function AutoPage(){return (<div>Auto-created page for ${href}</div>);}\\n');\n  console.log('Created page:', dest);\n} else {\n  console.log('Page already exists:', dest);\n}\n`;
  return { name, code };
}

function agentForMissingAsset(srcPath) {
  const name = `create-placeholder-asset-${srcPath.replace(/[^a-zA-Z0-9_-]/g, '-')}.cjs`;
  const target = path.join(process.cwd(), 'public', srcPath.replace(/^\//, ''));
  const code = `#!/usr/bin/env node\nconst fs = require('fs');\nconst path = require('path');\nconst dest = path.join(process.cwd(), ${JSON.stringify(path.relative(process.cwd(), target))});\nfs.mkdirSync(path.dirname(dest), { recursive: true });\nif (!fs.existsSync(dest)) {\n  fs.writeFileSync(dest, Buffer.from(''), { flag: 'w' });\n  console.log('Created placeholder asset:', dest);\n} else {\n  console.log('Asset already exists:', dest);\n}\n`;
  return { name, code };
}

function main() {
  ensureDir(OUT_DIR);
  if (!fs.existsSync(LOG_FILE)) {
    console.error('No auto-health-monitor log found at', LOG_FILE);
    process.exit(1);
  }
  const text = fs.readFileSync(LOG_FILE, 'utf8');
  const { missingRoutes, missingAssets } = parseIssuesFromLog(text);
  const created = [];
  for (const item of missingRoutes.slice(0, 100)) {
    const { name, code } = agentForMissingRoute(item.href);
    const fp = path.join(OUT_DIR, name);
    if (!fs.existsSync(fp)) { fs.writeFileSync(fp, code + '\n'); try { fs.chmodSync(fp, 0o755); } catch {} created.push(fp); }
  }
  for (const item of missingAssets.slice(0, 100)) {
    const { name, code } = agentForMissingAsset(item.src);
    const fp = path.join(OUT_DIR, name);
    if (!fs.existsSync(fp)) { fs.writeFileSync(fp, code + '\n'); try { fs.chmodSync(fp, 0o755); } catch {} created.push(fp); }
  }
  const registry = path.join(__dirname, 'logs', 'health-remediation-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Health remediation factory created ${created.length} agent(s).`);
}

main();