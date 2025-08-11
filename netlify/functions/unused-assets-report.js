const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

function listFilesRecursive(dir, predicate = () => true) {
  const result = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const abs = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(abs);
      } else if (predicate(abs)) {
        result.push(abs);
      }
    }
  }
  return result;
}

function isTextFile(filePath) {
  return /\.(js|jsx|ts|tsx|md|mdx|json|css|html|toml|yml|yaml|cjs|mjs)$/i.test(filePath);
}

function isAssetFile(filePath) {
  return /\.(png|jpg|jpeg|gif|svg|webp|avif)$/i.test(filePath);
}

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function relativePublicPath(absPath, repoRoot) {
  const rel = path.relative(path.join(repoRoot, 'public'), absPath).split(path.sep).join('/');
  return rel.startsWith('/') ? rel : `/${rel}`;
}

function writeFileEnsured(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.handler = async () => {
  const repoRoot = path.resolve(__dirname, '..', '..');
  const logs = [];

  // Gather all text content to search references
  const codeDirs = ['pages', 'components', 'styles', 'public'];
  const textFiles = codeDirs
    .map((d) => path.join(repoRoot, d))
    .flatMap((abs) => listFilesRecursive(abs, isTextFile));

  const bigText = textFiles.map(readFileSafe).join('\n');

  // List assets under public, exclude reports dir to avoid self-references
  const publicDir = path.join(repoRoot, 'public');
  const assets = listFilesRecursive(publicDir, (p) => isAssetFile(p) && !p.includes(`${path.sep}reports${path.sep}`));

  const unused = [];
  for (const assetAbs of assets) {
    const rel = relativePublicPath(assetAbs, repoRoot);
    const base = path.basename(assetAbs);
    const referenced = bigText.includes(rel) || bigText.includes(rel.replace(/^\//, '')) || bigText.includes(base);
    if (!referenced) {
      let size = 0;
      try { size = fs.statSync(assetAbs).size; } catch { size = 0; }
      unused.push({ path: rel, size });
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totalAssets: assets.length,
    unusedCount: unused.length,
    unused,
  };

  const outDir = path.join(publicDir, 'reports', 'assets');
  writeFileEnsured(path.join(outDir, 'unused-assets.json'), JSON.stringify(report, null, 2));

  // Simple HTML report
  const rows = unused
    .sort((a, b) => b.size - a.size)
    .map((u) => `<tr><td style="padding:6px;border-bottom:1px solid #eee"><code>${u.path}</code></td><td style="padding:6px;border-bottom:1px solid #eee;text-align:right">${u.size}</td></tr>`)
    .join('\n');
  const html = `<!doctype html><html><head><meta charset="utf-8"/><title>Unused Assets Report</title><meta name="viewport" content="width=device-width, initial-scale=1"/><style>body{font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;margin:24px} h1{font-size:20px;margin:0 0 12px} table{border-collapse:collapse;width:100%;max-width:100%} thead td{font-weight:700;background:#fafafa;border-bottom:1px solid #eee} code{background:#f6f8fa;padding:2px 4px;border-radius:4px}</style></head><body><h1>Unused Assets Report</h1><div>Generated: ${report.generatedAt}</div><div>Total assets: ${report.totalAssets}</div><div>Unused: ${report.unusedCount}</div><hr/><table><thead><tr><td>Asset</td><td style="text-align:right">Bytes</td></tr></thead><tbody>${rows || '<tr><td colspan=2 style="padding:6px">No unused assets found</td></tr>'}</tbody></table></body></html>`;
  writeFileEnsured(path.join(outDir, 'index.html'), html);

  logs.push('Report written to /public/reports/assets');

  // Commit and push
  try {
    const syncRes = runNode('automation/advanced-git-sync.cjs');
    logs.push(syncRes.stdout || 'git sync done');
    if (syncRes.stderr) logs.push(syncRes.stderr);
  } catch (e) {
    logs.push('git sync failed: ' + String(e));
  }

  return { statusCode: 200, body: logs.join('\n') };
};