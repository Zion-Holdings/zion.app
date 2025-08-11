const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function fetchPsi(url, strategy = 'mobile') {
  const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&category=PERFORMANCE`;
  const res = await axios.get(api, { timeout: 60000 });
  return res.data;
}

function extractMetrics(lhJson) {
  const audits = lhJson?.lighthouseResult?.audits || {};
  const cats = lhJson?.lighthouseResult?.categories || {};
  const perfScore = (cats.performance?.score ?? null) === null ? null : Math.round(cats.performance.score * 100);
  const getNum = (id) => audits[id]?.numericValue ?? null;
  return {
    performanceScore: perfScore,
    fcpMs: getNum('first-contentful-paint'),
    lcpMs: getNum('largest-contentful-paint'),
    tbtMs: getNum('total-blocking-time'),
    cls: audits['cumulative-layout-shift']?.numericValue ?? null,
    speedIndexMs: getNum('speed-index'),
    interactiveMs: getNum('interactive'),
  };
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeJson(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function writeHtml(filePath, summary) {
  const rows = summary.results.map(r => {
    const s = r.metrics;
    return `<tr>
<td>${r.url}</td>
<td>${r.strategy}</td>
<td>${s.performanceScore ?? ''}</td>
<td>${s.lcpMs ? Math.round(s.lcpMs) : ''}</td>
<td>${s.cls ?? ''}</td>
<td>${s.tbtMs ? Math.round(s.tbtMs) : ''}</td>
<td>${s.fcpMs ? Math.round(s.fcpMs) : ''}</td>
</tr>`;
  }).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Performance Audit</title>
<style>
body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial; background:#0b1020; color:#e6e6f0; padding: 24px; }
.container { max-width: 1000px; margin: 0 auto; }
h1 { font-size: 24px; margin-bottom: 8px; }
p { color:#9aa3b2; }
.table { width:100%; border-collapse: collapse; margin-top: 16px; }
.table th, .table td { border: 1px solid #23304a; padding: 8px 10px; font-size: 14px; }
.table th { background:#111a2e; text-align:left; }
small { color:#8292a6; }
.badge { display:inline-block; padding:2px 8px; border-radius:999px; background:#12223e; border:1px solid #23304a; font-size:12px; }
</style>
</head>
<body>
<div class="container">
  <h1>Performance Audit</h1>
  <p>Autonomously generated via PageSpeed Insights. <span class="badge">${new Date(summary.timestamp).toISOString()}</span></p>
  <table class="table">
    <thead>
      <tr>
        <th>URL</th>
        <th>Strategy</th>
        <th>Perf</th>
        <th>LCP (ms)</th>
        <th>CLS</th>
        <th>TBT (ms)</th>
        <th>FCP (ms)</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</div>
</body>
</html>`;
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, html);
}

async function main() {
  const base = process.env.SITE_BASE_URL || 'https://zion.app';
  const urls = [
    process.env.SITE_HOMEPAGE_URL || `${base}/`,
    `${base}/automation`,
    `${base}/main/front`,
    `${base}/reports/seo`,
  ];

  const strategies = ['mobile', 'desktop'];
  const results = [];
  for (const url of urls) {
    for (const strat of strategies) {
      try {
        const json = await fetchPsi(url, strat);
        results.push({ url, strategy: strat, metrics: extractMetrics(json) });
      } catch (e) {
        results.push({ url, strategy: strat, metrics: { error: true, message: e.message } });
      }
    }
  }

  const summary = { timestamp: Date.now(), results };
  const jsonPath = path.resolve(__dirname, '..', 'public', 'reports', 'perf', 'latest.json');
  const htmlPath = path.resolve(__dirname, '..', 'public', 'reports', 'perf', 'index.html');
  writeJson(jsonPath, summary);
  writeHtml(htmlPath, summary);

  console.log('Performance report written to', htmlPath);
}

main().catch((err) => {
  console.error('Performance audit failed:', err);
  process.exitCode = 0; // best-effort, do not fail pipelines
});