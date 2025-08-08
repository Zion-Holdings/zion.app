#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LOG_DIR = path.join(__dirname, 'logs');
const REGISTRY = path.join(LOG_DIR, 'autonomous-meta-registry.json');
const OUT_FACTORIES_DIR = path.join(__dirname, 'auto-factories');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function log(message) {
  ensureDir(LOG_DIR);
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(path.join(LOG_DIR, 'autonomous-meta-factory.log'), line);
}

function sanitize(name) {
  return name.replace(/[^a-z0-9\-_.]/gi, '-').toLowerCase();
}

function listProjectFiles() {
  const files = [];
  const ignoreDirs = new Set(['.git', 'node_modules', '.next', 'out', 'dist', 'build']);
  const exts = new Set(['.ts', '.tsx', '.js', '.cjs']);
  const walk = (dir) => {
    let items = [];
    try { items = fs.readdirSync(dir); } catch { return; }
    for (const item of items) {
      const full = path.join(dir, item);
      let stat; try { stat = fs.statSync(full); } catch { continue; }
      if (stat.isDirectory()) {
        if (!ignoreDirs.has(item) && !item.startsWith('.cache')) walk(full);
      } else if (exts.has(path.extname(item))) {
        files.push(full);
      }
    }
  };
  walk(ROOT);
  return files;
}

const DOMAINS = [
  { name: 'refactor', description: 'Refactoring opportunities and structure improvements' },
  { name: 'tests', description: 'Generate test scaffolds and coverage nudges' },
  { name: 'docs', description: 'Documentation and JSDoc improvements' },
  { name: 'a11y', description: 'Accessibility nudges and checks' },
  { name: 'i18n', description: 'Internationalization scaffolds and checks' },
  { name: 'dead-code', description: 'Dead code detection candidates' },
  { name: 'types', description: 'Type-safety improvement suggestions' },
  { name: 'perf-guard', description: 'Performance guardrails and optimization suggestions' }
];

function createFactoryCode(domain) {
  const OUT_DIR_EXPR = `path.join(__dirname, '..', '${sanitize(domain.name)}-agents-auto')`;
  return `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
const OUT_DIR = ${OUT_DIR_EXPR};
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function sanitize(name) { return name.replace(/[^a-z0-9\-_.]/gi, '-').toLowerCase(); }

function listProjectFiles() {
  const root = path.resolve(__dirname, '..');
  const files = [];
  const ignore = new Set(['.git','node_modules','.next','out','dist','build']);
  const exts = new Set(['.ts','.tsx','.js']);
  const walk = (dir) => {
    let items = [];
    try { items = fs.readdirSync(dir); } catch { return; }
    for (const it of items) {
      const full = path.join(dir, it);
      let st; try { st = fs.statSync(full); } catch { continue; }
      if (st.isDirectory()) { if (!ignore.has(it) && !it.startsWith('.cache')) walk(full); }
      else if (exts.has(path.extname(it))) { files.push(full); }
    }
  };
  walk(root);
  return files;
}

function makeAgentCode(domainName, targetFile) {
  const safeDomain = domainName;
  const safeFile = targetFile.replace(/`/g, '\\`');
  return `#!/usr/bin/env node\nconst fs = require('fs');\nconst path = require('path');\nconsole.log('[${sanitize(domain.name)}] Agent targeting ${safeFile}');\nconst target = path.resolve('${safeFile}');\nif (!fs.existsSync(target)) process.exit(0);\nlet src = fs.readFileSync(target, 'utf8');\nlet changed = false;\n// Conservative, suggestion-only agent. Extend with AST transforms in follow-ups.\nswitch ('${sanitize(domain.name)}') {\n  case 'tests': { /* Suggest test scaffolds */ break; }\n  case 'docs': { /* Suggest JSDoc headers */ break; }\n  case 'a11y': { /* Suggest accessibility annotations */ break; }\n  case 'i18n': { /* Suggest i18n placeholders */ break; }\n  case 'dead-code': { /* Mark dead code candidates */ break; }\n  case 'types': { /* Suggest stricter types */ break; }\n  case 'perf-guard': { /* Suggest memoization/caching */ break; }\n  case 'refactor': { /* Suggest refactor plan */ break; }\n}\nif (changed) { fs.writeFileSync(target, src); console.log('Applied minimal safe change'); }\nelse { console.log('No automatic change applied (suggestion-only agent)'); }\n`;
}

function makeAgentName(domainName, projectFile) {
  const base = sanitize(path.basename(projectFile).replace(/\.[^.]+$/, ''));
  return \`auto-\${sanitize(domainName)}-\${base}\`;
}

function main() {
  const files = listProjectFiles().slice(0, 60); // safety cap per run
  const created = [];
  for (const f of files) {
    const name = makeAgentName('${sanitize(domain.name)}', f);
    const agentPath = path.join(OUT_DIR, \`\${name}.cjs\`);
    if (!fs.existsSync(agentPath)) {
      const code = makeAgentCode('${sanitize(domain.name)}', f);
      fs.writeFileSync(agentPath, code);
      try { fs.chmodSync(agentPath, 0o755); } catch {}
      created.push(agentPath);
    }
  }
  const regPath = path.join(__dirname, 'logs', '${sanitize(domain.name)}-agents-auto.json');
  fs.writeFileSync(regPath, JSON.stringify({ timestamp: new Date().toISOString(), domain: '${sanitize(domain.name)}', created }, null, 2));
  console.log(\`Created \${created.length} ${sanitize(domain.name)} agents\`);
}

if (require.main === module) main();
`;
}

function generateFactories() {
  ensureDir(OUT_FACTORIES_DIR);
  const createdFactories = [];
  for (const d of DOMAINS) {
    const fileName = `${sanitize(d.name)}-factory.cjs`;
    const outPath = path.join(OUT_FACTORIES_DIR, fileName);
    if (!fs.existsSync(outPath)) {
      const code = createFactoryCode(d);
      fs.writeFileSync(outPath, code);
      try { fs.chmodSync(outPath, 0o755); } catch {}
      createdFactories.push(outPath);
      log(`Created factory for domain '${d.name}': ${outPath}`);
    } else {
      log(`Factory already exists for domain '${d.name}', skipping`);
    }
  }
  return createdFactories;
}

function updateRegistry(createdFactories) {
  const entry = {
    timestamp: new Date().toISOString(),
    factories: createdFactories,
    domains: DOMAINS.map(d => ({ name: d.name, description: d.description }))
  };
  let current = { runs: [] };
  try { if (fs.existsSync(REGISTRY)) current = JSON.parse(fs.readFileSync(REGISTRY, 'utf8')); } catch {}
  current.runs = current.runs || [];
  current.runs.push(entry);
  ensureDir(path.dirname(REGISTRY));
  fs.writeFileSync(REGISTRY, JSON.stringify(current, null, 2));
}

function main() {
  log('🚀 Autonomous Meta Factory started');
  const created = generateFactories();
  updateRegistry(created);
  log(`✅ Meta Factory completed. New factories: ${created.length}`);
}

if (require.main === module) main();