const fs = require('fs');
const path = require('path');

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function writeFile(p, data) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, data);
}

function runNode(relPath, args = []) {
  const { spawnSync } = require('child_process');
  const abs = path.resolve(__dirname, '..', '..', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
}

exports.config = { schedule: '11 */6 * * *' };

exports.handler = async () => {
  const base = (process.env.SITE_URL || process.env.URL || '').replace(/\/$/, '');
  const apiKey = process.env.GOOGLE_API_KEY || process.env.PSI_API_KEY || '';
  const strategies = ['mobile', 'desktop'];
  const paths = ['/', '/automation', '/site-health', '/newsroom', '/main/front'];

  if (!base) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'No SITE_URL/URL provided' }) };
  }

  const metrics = [];
  for (const p of paths) {
    for (const s of strategies) {
      const url = `${base}${p}`;
      const qs = new URLSearchParams({ url, strategy: s });
      if (apiKey) qs.set('key', apiKey);
      try {
        const json = await fetchJson(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${qs.toString()}`);
        const lighthouse = json.lighthouseResult || {};
        const categories = lighthouse.categories || {};
        metrics.push({
          path: p,
          strategy: s,
          performance: categories.performance?.score ?? null,
          accessibility: categories.accessibility?.score ?? null,
          seo: categories.seo?.score ?? null,
          pwa: categories.pwa?.score ?? null
        });
      } catch (e) {
        metrics.push({ path: p, strategy: s, error: String(e) });
      }
    }
  }

  const root = path.resolve(__dirname, '..', '..');
  const outDir = path.join(root, 'public', 'reports', 'perf');
  const jsonPath = path.join(outDir, 'pagespeed.json');
  const mdPath = path.join(outDir, 'pagespeed.md');

  writeFile(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), base, metrics }, null, 2));
  const rows = metrics.map(m => `| ${m.path} | ${m.strategy} | ${m.performance ?? ''} | ${m.accessibility ?? ''} | ${m.seo ?? ''} | ${m.pwa ?? ''} | ${m.error ?? ''} |`).join('\n');
  const md = `# PageSpeed Insights\n\nBase: ${base}\nGenerated: ${new Date().toISOString()}\n\n| Path | Strategy | Perf | A11y | SEO | PWA | Error |\n|---|---|---:|---:|---:|---:|---|\n${rows}\n`;
  writeFile(mdPath, md);

  runNode('automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: JSON.stringify({ ok: true, total: metrics.length, base }) };
};