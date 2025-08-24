const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function scanForJsonLd(dir) {
  const findings = [];
  function walk(d) {
    let entries = [];
  try { entries = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|ts|jsx|js|html)$/i.test(e.name)) {
        try {
          const content = fs.readFileSync(p, 'utf8');
          if (content.includes('application/ld+json')) {
            findings.push({ file: p.replace(process.cwd() + '/', ''), hasJsonLd: true });
          }
        } catch { /* ignore */ }
      }
    }
  }
  walk(dir);
  return findings;
}

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = { schedule: '0 */6 * * *' };

exports.handler = async () => {
  const repoRoot = path.resolve(__dirname, '..', '..');
  const pagesDir = path.join(repoRoot, 'pages');
  const componentsDir = path.join(repoRoot, 'components');
  const findings = [...scanForJsonLd(pagesDir), ...scanForJsonLd(componentsDir)];

  const report = {
    generatedAt: new Date().toISOString(),
    totalFilesWithJsonLd: findings.length,
    files: findings,
  };

  const outDir = path.join(repoRoot, 'public', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'structured-data-audit.json'), JSON.stringify(report, null, 2));

  runNode('automation/advanced-git-sync.cjs');
  return { statusCode: 200, body: JSON.stringify({ ok: true, total: findings.length }) };
};