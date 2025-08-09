#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const reportsDir = path.join(process.cwd(), 'data', 'reports');
const outPath = path.join(reportsDir, 'security.json');

function ensure() { if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true }); }

function scanDependencies() {
  const issues = [];
  try {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    const vulnerable = ['lodash', 'moment'];
    for (const [name, ver] of Object.entries(deps || {})) {
      if (vulnerable.includes(name)) issues.push({ type: 'vulnerable-dependency', package: name, version: ver, severity: 'medium' });
    }
  } catch {}
  return { type: 'dependencies', issues };
}

function scanCode() {
  const issues = [];
  const dirs = ['pages', 'components', 'utils'];
  const patterns = [
    { re: /eval\(/, desc: 'Use of eval()' },
    { re: /innerHTML/, desc: 'Potential XSS via innerHTML' },
    { re: /localStorage/, desc: 'Sensitive data may be in localStorage' },
  ];
  for (const d of dirs) {
    const root = path.join(process.cwd(), d);
    if (!fs.existsSync(root)) continue;
    const stack = [root];
    while (stack.length) {
      const cur = stack.pop();
      for (const entry of fs.readdirSync(cur)) {
        const p = path.join(cur, entry);
        const st = fs.statSync(p);
        if (st.isDirectory()) stack.push(p); else if (/\.(ts|tsx|js|jsx)$/.test(entry)) {
          const src = fs.readFileSync(p, 'utf8');
          for (const pat of patterns) if (pat.re.test(src)) issues.push({ type: 'code', file: path.relative(process.cwd(), p), message: pat.desc });
        }
      }
    }
  }
  return { type: 'code', issues };
}

function run() {
  ensure();
  const sections = [scanDependencies(), scanCode()];
  const totalIssues = sections.reduce((a, s) => a + s.issues.length, 0);
  const score = Math.max(0, 100 - totalIssues * 5);
  const report = { generatedAt: new Date().toISOString(), score, sections };
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log('[security] report written', { score, totalIssues });
}

run();