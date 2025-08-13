const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runGitSync() {
  try {
    const script = path.resolve(process.cwd(), 'automation', 'advanced-git-sync.cjs');
    const res = spawnSync('node', [script], { stdio: 'pipe', encoding: 'utf8' });
    return { status: res.status || 0 };
  } catch (e) {
    return { status: 1 };
  }
}

exports.handler = async () => {
  const root = process.cwd();
  const pagesDir = path.join(root, 'pages');
  const base = (process.env.SITE_URL || process.env.URL || 'https://ziontechgroup.com').replace(/\/$/, '');
  const results = [];

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|jsx|html)$/i.test(e.name)) {
        const content = fs.readFileSync(p, 'utf8');
        const canon = content.match(/rel=\"canonical\"[^>]*href=\"([^\"]+)\"/i);
        const href = canon ? canon[1] : null;
        results.push({ file: path.relative(root, p), canonical: href, ok: href ? href.startsWith(base) : false });
      }
    }
  }

  walk(pagesDir);

  const out = { generatedAt: new Date().toISOString(), totals: { files: results.length, withCanonical: results.filter(r => r.canonical).length }, results };
  const outDir = path.join(root, 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'canonical-audit.json'), JSON.stringify(out, null, 2));

  const git = runGitSync();
  return { statusCode: 200, body: JSON.stringify({ ok: true, git }) };
};