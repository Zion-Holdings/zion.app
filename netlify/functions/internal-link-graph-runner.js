const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function writeJson(targetPath, data) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
}

function runGitSync() {
  try {
    const script = path.resolve(process.cwd(), 'automation', 'advanced-git-sync.cjs');
    const res = spawnSync('node', [script], { stdio: 'pipe', encoding: 'utf8' });
    return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
  } catch (e) {
    return { status: 1, stderr: String(e) };
  }
}

exports.config = { schedule: '*/5 * * * *' };

exports.handler = async () => {
  try {
    const root = process.cwd();
    const csvPath = path.join(root, 'link_report.csv');
    const pagesDir = path.join(root, 'pages');
    const links = [];

    if (fs.existsSync(csvPath)) {
      const lines = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/).slice(1);
      for (const line of lines) {
        if (!line.trim()) continue;
        const [source_url, link_url, final_url, status_code, ok, is_internal] = line.split(',');
        if (is_internal === 'True' || is_internal === 'true') {
          links.push({ source: source_url, target: final_url || link_url, status: Number(status_code) || 0 });
        }
      }
    }

    function scanFileForLinks(file) {
      const content = fs.readFileSync(file, 'utf8');
      const re = /href=\"([^\"]+)\"/g;
      let m;
      while ((m = re.exec(content))) {
        const href = m[1];
        if (href.startsWith('http')) continue;
        if (href.startsWith('mailto:') || href.startsWith('tel:')) continue;
        links.push({ source: file.replace(root, ''), target: href, status: 0 });
      }
    }

    function walk(dir) {
      if (!fs.existsSync(dir)) return;
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const e of entries) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p);
        else if (/\.(tsx|jsx|md|mdx|html)$/i.test(e.name)) scanFileForLinks(p);
      }
    }

    walk(pagesDir);

    const nodeSet = new Set();
    links.forEach(l => { nodeSet.add(l.source); nodeSet.add(l.target); });
    const nodes = Array.from(nodeSet).map(id => ({ id }));
    const edges = links.map((l) => ({ from: l.source, to: l.target, status: l.status }));

    const outPath = path.join(root, 'data', 'reports', 'internal-link-graph.json');
    writeJson(outPath, { generatedAt: new Date().toISOString(), nodes, edges, totals: { nodes: nodes.length, edges: edges.length } });

    const git = runGitSync();
    return { statusCode: 200, body: JSON.stringify({ ok: true, report: outPath, git: { status: git.status } }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(err) }) };
  }
};