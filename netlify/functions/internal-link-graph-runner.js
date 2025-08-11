const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { execSync } = require('child_process');

function run(cmd) { execSync(cmd, { stdio: 'inherit', shell: true }); }

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function isInternal(href) {
  if (!href) return false;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('#')) return false;
  return href.startsWith('/');
}

exports.config = { schedule: '*/5 * * * *' };

exports.handler = async () => {
  try {
    const workspace = process.cwd();
    const files = glob.sync(path.join(workspace, '**/*.{tsx,jsx,ts,js,md,mdx}'), {
      nodir: true,
      absolute: true,
      ignore: ['**/node_modules/**', '**/.next/**', '**/out/**', '**/netlify/functions/**']
    });

    const sourceToLinks = {};
    const targetInboundCounts = {};

    for (const file of files) {
      const rel = path.relative(workspace, file);
      const content = fs.readFileSync(file, 'utf8');

      const hrefs = new Set();
      // Next.js Link href
      for (const m of content.matchAll(/<Link\s+[^>]*href={["']([^"'}]+)["']}|<Link\s+[^>]*href="([^"]+)"|<Link\s+[^>]*href='([^']+)'/g)) {
        const cand = m[1] || m[2] || m[3];
        if (isInternal(cand)) hrefs.add(cand);
      }
      // Plain anchors
      for (const m of content.matchAll(/<a\s+[^>]*href="([^"]+)"|<a\s+[^>]*href='([^']+)'/g)) {
        const cand = m[1] || m[2];
        if (isInternal(cand)) hrefs.add(cand);
      }

      if (hrefs.size > 0) {
        sourceToLinks[rel] = Array.from(hrefs).sort();
        for (const t of hrefs) {
          targetInboundCounts[t] = (targetInboundCounts[t] || 0) + 1;
        }
      }
    }

    const report = {
      generatedAt: new Date().toISOString(),
      sources: sourceToLinks,
      inboundCounts: Object.fromEntries(Object.entries(targetInboundCounts).sort((a, b) => b[1] - a[1]))
    };

    const outDir = path.join(workspace, 'data/reports/internal-links');
    ensureDir(outDir);
    const latestPath = path.join(outDir, 'latest.json');
    fs.writeFileSync(latestPath, JSON.stringify(report, null, 2));
    const stampedPath = path.join(outDir, `internal-links-${Date.now()}.json`);
    fs.writeFileSync(stampedPath, JSON.stringify(report, null, 2));

    // Git sync
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(links): update internal link graph report [skip ci]" || true');
    run('git push origin main || true');

    return { statusCode: 200, body: JSON.stringify({ ok: true, sources: Object.keys(sourceToLinks).length, uniqueTargets: Object.keys(targetInboundCounts).length }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};