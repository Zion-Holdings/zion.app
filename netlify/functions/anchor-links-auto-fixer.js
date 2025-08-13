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

function collectAnchorsAndHeadings(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const anchors = Array.from(content.matchAll(/href=\"#([A-Za-z0-9_-]+)\"/g)).map(m => m[1]);
  const headings = new Set();
  // ids on headings or any element
  Array.from(content.matchAll(/id=\"([A-Za-z0-9_-]+)\"/g)).forEach(m => headings.add(m[1]));
  // derive from simple headings like <h2>Title</h2>
  Array.from(content.matchAll(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/g)).forEach(m => {
    const slug = m[1].trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    if (slug) headings.add(slug);
  });
  const missing = anchors.filter(a => !headings.has(a));
  return { anchors, headings: Array.from(headings), missing };
}

exports.config = { schedule: '*/5 * * * *' };

exports.handler = async () => {
  try {
    const root = process.cwd();
    const pagesDir = path.join(root, 'pages');
    const results = [];

    function walk(dir) {
      if (!fs.existsSync(dir)) return;
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const e of entries) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p);
        else if (/\.(tsx|jsx|html)$/i.test(e.name)) {
          const r = collectAnchorsAndHeadings(p);
          if (r.anchors.length) results.push({ file: path.relative(root, p), ...r });
        }
      }
    }

    walk(pagesDir);

    const issues = results.filter(r => r.missing.length);
    const outDir = path.join(root, 'data', 'reports');
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'anchor-links-audit.json');
    fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), totals: { filesChecked: results.length, filesWithIssues: issues.length }, results }, null, 2));

    const git = runGitSync();
    return { statusCode: 200, body: JSON.stringify({ ok: true, report: outPath, git }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};