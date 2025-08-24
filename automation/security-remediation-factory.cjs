#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SECURITY_DIR = path.join(__dirname, '..', 'data', 'reports', 'security');
const OUT_DIR = path.join(__dirname, 'security-remediation-agents');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

function findLatestAuditReport() {
  if (!fs.existsSync(SECURITY_DIR)) return null;
  const files = fs.readdirSync(SECURITY_DIR)
    .filter((f) => f.startsWith('npm-audit') && f.endsWith('.json'))
    .map((f) => ({ name: f, full: path.join(SECURITY_DIR, f), mtime: fs.statSync(path.join(SECURITY_DIR, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
  return files.length ? files[0].full : null;
}

function deriveOverridesFromAudit(audit) {
  const overrides = {};
  const advisories = audit.advisories || audit.vulnerabilities || {};
  const entries = Array.isArray(advisories) ? advisories : Object.values(advisories);
  for (const adv of entries) {
    const moduleName = adv.module_name || adv.module || adv.name;
    const patched = (adv.patched_versions || '').replace(/^\s*<\s*/, '>=');
    if (!moduleName || !patched) continue;
    overrides[moduleName] = patched;
  }
  return overrides;
}

function generateOverrideAgent(overrides) {
  const code = `#!/usr/bin/env node\nconst fs = require('fs');\nconst path = require('path');\nconst pkgPath = path.join(process.cwd(), 'package.json');\nconst pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));\npkg.overrides = Object.assign({}, pkg.overrides || {}, ${JSON.stringify(overrides, null, 2)});\nfs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');\nconsole.log('Applied npm overrides to package.json');\n`;
  return { name: 'apply-npm-overrides.cjs', code };
}

function generateAuditFixAgent(force = false) {
  const code = `#!/usr/bin/env node\nconst { execSync } = require('child_process');\ntry {\n  execSync('npm audit fix${force ? ' --force' : ''}', { stdio: 'inherit' });\n  console.log('npm audit fix completed');\n} catch (e) {\n  console.error('npm audit fix failed:', e.message);\n  process.exit(1);\n}\n`;
  return { name: `npm-audit-fix${force ? '-force' : ''}.cjs`, code };
}

function main() {
  ensureDir(OUT_DIR);
  const reportPath = findLatestAuditReport();
  if (!reportPath) { console.error('No npm audit report found.'); process.exit(1); }
  let audit;
  try { audit = JSON.parse(fs.readFileSync(reportPath, 'utf8')); } catch (e) { console.error('Failed to parse report:', e.message); process.exit(1); }
  const overrides = deriveOverridesFromAudit(audit);
  const created = [];
  if (Object.keys(overrides).length) {
    const { name, code } = generateOverrideAgent(overrides);
    const fp = path.join(OUT_DIR, name);
    if (!fs.existsSync(fp)) { fs.writeFileSync(fp, code + '\n'); try { fs.chmodSync(fp, 0o755); } catch {} created.push(fp); }
  }
  for (const force of [false, true]) {
    const { name, code } = generateAuditFixAgent(force);
    const fp = path.join(OUT_DIR, name);
    if (!fs.existsSync(fp)) { fs.writeFileSync(fp, code + '\n'); try { fs.chmodSync(fp, 0o755); } catch {} created.push(fp); }
  }
  const registry = path.join(__dirname, 'logs', 'security-remediation-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), report: path.basename(reportPath), created }, null, 2));
  console.log(`Security remediation factory created ${created.length} agent(s).`);
}

main();