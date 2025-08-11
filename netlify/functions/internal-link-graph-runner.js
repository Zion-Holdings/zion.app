exports.handler = async function() {
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');

  function walkFiles(dir, patterns, acc = []) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return acc; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walkFiles(full, patterns, acc);
      } else {
        if (patterns.some(p => p.test(e.name))) acc.push(full);
      }
    }
    return acc;
  }

  function extractLinksFromContent(content) {
    const links = new Set();
    const hrefRegex = /href\s*=\s*"(\/[^"#\?\s]+)"/g;
    const linkCompRegex = /<Link\s+href=\{?"(\/[^"#\?\s]+)"\}?/g;
    let m;
    while ((m = hrefRegex.exec(content)) !== null) links.add(m[1]);
    while ((m = linkCompRegex.exec(content)) !== null) links.add(m[1]);
    return Array.from(links);
  }

  function buildGraph(rootDir) {
    const sourceRoots = [path.join(rootDir, 'pages'), path.join(rootDir, 'docs')];
    const patterns = [/\.tsx?$/, /\.jsx?$/, /\.mdx?$/];
    const nodes = new Set();
    const edges = [];

    for (const srcRoot of sourceRoots) {
      const files = walkFiles(srcRoot, patterns);
      for (const file of files) {
        let content = '';
        try { content = fs.readFileSync(file, 'utf8'); } catch { continue; }
        const rel = path.relative(rootDir, file);
        nodes.add(rel);
        const links = extractLinksFromContent(content).filter(l => l.startsWith('/'));
        for (const l of links) {
          edges.push({ from: rel, to: l });
        }
      }
    }

    const stats = {
      nodeCount: nodes.size,
      edgeCount: edges.length,
      topTargets: Object.entries(edges.reduce((m,e)=>{m[e.to]=(m[e.to]||0)+1;return m;},{}))
        .sort((a,b)=>b[1]-a[1]).slice(0,20).map(([target,count])=>({ target, count }))
    };

    return { generatedAt: new Date().toISOString(), nodes: Array.from(nodes), edges, stats };
  }

  try {
    const rootDir = path.resolve(__dirname, '..', '..');
    const outDir = path.join(rootDir, 'public', 'automation');
    fs.mkdirSync(outDir, { recursive: true });
    const reportPath = path.join(outDir, 'internal-link-graph.json');

    const graph = buildGraph(rootDir);
    fs.writeFileSync(reportPath, JSON.stringify(graph, null, 2));

    try {
      execSync('git config user.name "zion-bot"', { cwd: rootDir, stdio: 'inherit' });
      execSync('git config user.email "bot@zion.app"', { cwd: rootDir, stdio: 'inherit' });
      execSync(`git add ${JSON.stringify(path.relative(rootDir, reportPath))}`, { cwd: rootDir, stdio: 'inherit', shell: true });
      execSync('git commit -m "chore(links): update internal link graph [ci skip]" || true', { cwd: rootDir, stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { cwd: rootDir, stdio: 'inherit', shell: true });
    } catch {}

    return { statusCode: 200, body: JSON.stringify({ ok: true, report: '/automation/internal-link-graph.json' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};