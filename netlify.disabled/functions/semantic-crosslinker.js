exports.handler = async function() {
  const fs = require('fs');
  const path = require('path');
  const { spawnSync } = require('child_process');

  const workspace = path.resolve(__dirname, '..', '..');
  const pagesDir = path.join(workspace, 'pages');
  const outDir = path.join(workspace, 'public', 'automation');
  const outFile = path.join(outDir, 'semantic-crosslinks.json');

  function run(cmd) {
    const res = spawnSync(cmd, { shell: true, encoding: 'utf8' });
    return { code: res.status || 0, out: (res.stdout||'') + (res.stderr||'') };
  }

  function listPages(dir) {
    const results = [];
    function walk(d) {
      for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
        if (entry.isDirectory()) { walk(path.join(d, entry.name)); continue; }
        if (!entry.name.endsWith('.tsx') && !entry.name.endsWith('.md') && !entry.name.endsWith('.mdx')) continue;
        const abs = path.join(d, entry.name);
        results.push(abs);
      }
    }
    walk(dir);
    return results;
  }

  try {
    const files = fs.existsSync(pagesDir) ? listPages(pagesDir) : [];
    const graph = {};

    for (const abs of files) {
      const rel = abs.replace(workspace + path.sep, '');
      let content = '';
      try { content = fs.readFileSync(abs, 'utf8'); } catch {}
      const links = [];
      const hrefRegex = /href\s*=\s*"(\/[^"#?\s]+)"/g;
      let m;
      while ((m = hrefRegex.exec(content))) {
        const href = m[1];
        if (href.startsWith('/.netlify/')) continue;
        links.push(href);
      }
      graph['/' + rel.replace(/^pages\//, '').replace(/index\.tsx$/, '').replace(/\.tsx$/, '')] = Array.from(new Set(links)).sort();
    }

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outFile, JSON.stringify({ generatedAt: new Date().toISOString(), graph }, null, 2));

    const sync = run(`node ${path.join(workspace, 'automation', 'advanced-git-sync.cjs')}`);

    return { statusCode: 200, body: JSON.stringify({ pages: files.length, outFile: outFile.replace(workspace + path.sep, ''), git: sync.out.slice(-4000) }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ error: String(e) }) };
  }
};