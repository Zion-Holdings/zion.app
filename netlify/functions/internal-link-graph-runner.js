const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = { schedule: '*/10 * * * *' };

exports.handler = async () => {
  const logs = [];
  const dataDir = path.resolve(__dirname, '..', '..', 'data');
  const reportPath = path.join(dataDir, 'internal-link-graph.json');
  fs.mkdirSync(dataDir, { recursive: true });

  // naive graph: parse pages and extract hrefs
  const pagesDir = path.resolve(__dirname, '..', '..', 'pages');
  const graph = {};
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(abs);
      else if (/\.(tsx|jsx|md|mdx|html)$/.test(entry.name)) {
        const rel = '/' + path.relative(pagesDir, abs).replace(/\\/g, '/');
        const content = fs.readFileSync(abs, 'utf8');
        const links = Array.from(content.matchAll(/href\s*=\s*"(\/[^"#?\s]+)"/g)).map(m => m[1]);
        graph[rel] = Array.from(new Set(links));
      }
    }
  }
  walk(pagesDir);
  fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), graph }, null, 2));
  logs.push(`wrote ${reportPath}`);

  // commit
  const { status, stdout, stderr } = spawnSync('node', [path.resolve(__dirname, '..', '..', 'automation/advanced-git-sync.cjs')], { stdio: 'pipe', encoding: 'utf8' });
  logs.push(stdout || '');
  logs.push(stderr || '');
  logs.push('git exit=' + status);

  return { statusCode: 200, body: logs.join('\n') };
};