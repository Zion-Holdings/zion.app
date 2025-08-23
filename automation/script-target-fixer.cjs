#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'code-health');
if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });

function writeReport(name, data) {
  const file = path.join(REPORT_DIR, name);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  return file;
}

function listAllFiles(dir) {
  const out = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...listAllFiles(full));
    else out.push(full);
  }
  return out;
}

function normalizeName(p) {
  const base = path.basename(p).toLowerCase();
  return base.replace(/[_.-]/g, '');
}

function findSimilar(targetRel) {
  const targetNorm = normalizeName(targetRel);
  const candidates = listAllFiles(ROOT)
    .filter(p => !p.includes('node_modules') && !p.includes('.next'))
    .map(p => path.relative(ROOT, p));
  const scored = candidates.map(rel => ({ rel, score: similarity(targetNorm, normalizeName(rel)) }))
    .sort((a, b) => b.score - a.score);
  return scored.filter(s => s.score >= 0.6).slice(0, 3);
}

function similarity(a, b) {
  const s = new Set(a.split(''));
  const t = new Set(b.split(''));
  const inter = new Set([...s].filter(x => t.has(x))).size;
  const uni = new Set([...s, ...t]).size;
  return uni === 0 ? 0 : inter / uni;
}

function ensureFile(rel, content) {
  const abs = path.join(ROOT, rel);
  const dir = path.dirname(abs);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(abs, content);
  return rel;
}

function createShim(targetRel, redirectRel) {
  const fileExt = path.extname(targetRel).toLowerCase();
  const importPath = './' + redirectRel.replace(/^.*\//, '');
  const tsShim = `#!/usr/bin/env node\n// Auto-generated shim to satisfy missing script target.\n(async () => {\n  try {\n    await import('${importPath}');\n  } catch (e) {\n    console.error('Shim target not found:', '${redirectRel}', e.message);\n    process.exit(1);\n  }\n})();\n`;
  const jsShim = `#!/usr/bin/env node\n// Auto-generated shim to satisfy missing script target.\ntry { require('${importPath}'); } catch (e) { console.error('Shim target not found:', '${redirectRel}', e.message); process.exit(1); }\n`;
  const content = fileExt === '.ts' || fileExt === '.tsx' ? tsShim : jsShim;
  ensureFile(targetRel, content);
}

function fixMissingScripts() {
  const pkgPath = path.join(ROOT, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const actions = [];

  for (const [name, cmd] of Object.entries(pkg.scripts || {})) {
    const matches = Array.from(String(cmd).matchAll(/\b(?:node|bash)\s+([^\s&|;]+)/g));
    for (const m of matches) {
      const rel = m[1];
      if (rel.startsWith('-e') || rel.startsWith('http')) continue;
      const abs = path.isAbsolute(rel) ? rel : path.join(ROOT, rel);
      if (!fs.existsSync(abs)) {
        const similar = findSimilar(rel);
        if (similar.length === 1) {
          const newCmd = String(cmd).replace(rel, similar[0].rel);
          pkg.scripts[name] = newCmd;
          actions.push({ script: name, type: 'rewrite', from: rel, to: similar[0].rel });
        } else if (similar.length > 1) {
          const targetRel = rel;
          const redirect = similar[0].rel;
          createShim(targetRel, redirect);
          actions.push({ script: name, type: 'shim', file: targetRel, redirect });
        } else {
          const placeholder = `#!/usr/bin/env node\nconsole.log('Placeholder for missing script target: ${rel}');`;
          ensureFile(rel, placeholder);
          actions.push({ script: name, type: 'placeholder', file: rel });
        }
      }
    }
  }

  if (actions.length) {
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  }
  const report = { generatedAt: new Date().toISOString(), actions };
  writeReport('script-target-fixer-actions.json', report);
  return report;
}

const report = fixMissingScripts();
console.log(`Script target fixer completed with ${report.actions.length} action(s).`);