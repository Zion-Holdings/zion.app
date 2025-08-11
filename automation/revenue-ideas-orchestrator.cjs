const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');

function readFirstHeading(md) {
  const m = md.match(/^#\s+(.+)$/m) || md.match(/^##\s+(.+)$/m);
  return m ? m[1].trim() : 'Untitled Proposal';
}

(function run() {
  const proposalsDir = path.resolve(__dirname, '..', 'data', 'reports', 'revenue-ideas', 'proposals');
  const files = glob.sync('**/*.md', { cwd: proposalsDir, nodir: true });

  const proposals = files.map((rel) => {
    const abs = path.join(proposalsDir, rel);
    const md = fs.readFileSync(abs, 'utf8');
    const title = readFirstHeading(md) || path.basename(rel, '.md');
    const slug = rel.replace(/\//g, '-').replace(/\.md$/i, '');
    return { slug, title, relPath: `data/reports/revenue-ideas/proposals/${rel}` };
  });

  const outDir = path.resolve(__dirname, '..', 'public', 'reports', 'revenue-ideas');
  fse.mkdirpSync(outDir);

  const jsonPath = path.join(outDir, 'latest.json');
  fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), proposals }, null, 2));

  const htmlItems = proposals.map((p) => `
    <li>
      <a href="https://github.com/Zion-Holdings/zion.app/tree/main/${p.relPath}" target="_blank" rel="noopener">${p.title}</a>
    </li>`).join('\n');
  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Revenue Ideas — Proposals</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: ui-sans-serif, system-ui; background: #0b1220; color: #e6f0ff; padding: 24px; }
    a { color: #7dd3fc; }
  </style>
</head>
<body>
  <h1>Revenue Ideas — Proposals</h1>
  <p>Autonomously aggregated proposals from the revenue ideas agents.</p>
  <ul>
    ${htmlItems}
  </ul>
</body>
</html>`;
  fs.writeFileSync(path.join(outDir, 'index.html'), html);

  console.log(`[revenue-ideas] Aggregated ${proposals.length} proposals.`);
})();