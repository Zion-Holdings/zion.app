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

function collectSummaries(dir, root) {
  const items = [];
  if (!fs.existsSync(dir)) return items;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) items.push(...collectSummaries(p, root));
    else if (/\.(md|mdx|tsx|jsx)$/i.test(e.name)) {
      const content = fs.readFileSync(p, 'utf8');
      const titleMatch = content.match(/<title>([^<]+)<\/title>|export\s+const\s+title\s*=\s*['\"]([^'\"]+)['\"]/i);
      const title = (titleMatch && (titleMatch[1] || titleMatch[2])) || path.basename(p);
      items.push({ file: path.relative(root, p), title });
    }
  }
  return items;
}

exports.handler = async () => {
  const root = process.cwd();
  const docsDir = path.join(root, 'docs');
  const pagesDir = path.join(root, 'pages');
  const pack = {
    generatedAt: new Date().toISOString(),
    docs: collectSummaries(docsDir, root),
    pages: collectSummaries(pagesDir, root),
  };
  const outDir = path.join(root, 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'knowledge-pack.json'), JSON.stringify(pack, null, 2));
  const git = runGitSync();
  return { statusCode: 200, body: JSON.stringify({ ok: true, git }) };
};