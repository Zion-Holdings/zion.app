/* Autonomous Content Map
   Crawls Next.js pages dir to build a content coverage map and writes JSON.
*/

const fs = require('fs-extra');
const path = require('path');

function listPages() {
  const pagesDir = path.join(process.cwd(), 'pages');
  const entries = [];
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        if (name === 'api') continue; // skip API routes
        walk(full);
      } else if (/\.(tsx|mdx|md|ts|js|jsx)$/.test(name)) {
        const rel = path.relative(pagesDir, full);
        if (rel.startsWith('_')) continue;
        const route = '/' + rel.replace(/index\.(tsx|ts|js|jsx|md|mdx)$/i, '').replace(/\.(tsx|ts|js|jsx|md|mdx)$/i, '').replace(/\\/g, '/');
        entries.push({ route: route.replace(/\/$/, '') || '/', file: rel });
      }
    }
  }
  if (fs.existsSync(pagesDir)) walk(pagesDir);
  return entries.sort((a, b) => a.route.localeCompare(b.route));
}

async function run() {
  const started = new Date();
  const pages = listPages();
  const count = pages.length;
  const byDir = {};
  for (const p of pages) {
    const dir = p.file.split('/')[0] || '';
    byDir[dir] = (byDir[dir] || 0) + 1;
  }
  const report = {
    generatedAt: started.toISOString(),
    totalPages: count,
    bySection: byDir,
    pages,
  };
  const outDir = path.join(process.cwd(), 'public', 'automation');
  await fs.ensureDir(outDir);
  const outFile = path.join(outDir, 'content-map.json');
  await fs.writeJson(outFile, report, { spaces: 2 });
  const logDir = path.join(process.cwd(), 'automation_logs');
  await fs.ensureDir(logDir);
  const logFile = path.join(logDir, 'content-map.log');
  const durationMs = Date.now() - started.getTime();
  await fs.appendFile(logFile, `[${new Date().toISOString()}] durationMs=${durationMs} pages=${count}\n`);
  console.log(`Content Map -> ${outFile}`);
}

run().catch((e) => {
  console.error('Content Map failed:', e);
  process.exitCode = 1;
});