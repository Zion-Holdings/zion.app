const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function collectRoutes(rootDir) {
  const pagesDir = path.join(rootDir, 'pages');
  const routes = new Set(['/']);
  function isSpecial(name) { return name.startsWith('_') || name.startsWith('['); }
  function walk(dir, routePrefix = '') {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasIndex = entries.some((e) => e.isFile() && /^(index)\.(tsx|jsx|ts|js)$/i.test(e.name));
    if (hasIndex && routePrefix) routes.add(routePrefix);
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (isSpecial(entry.name)) continue;
        const nextPrefix = path.posix.join(routePrefix || '/', entry.name).replace(/\\/g, '/');
        walk(full, nextPrefix);
      } else if (entry.isFile()) {
        if (!/\.(tsx|jsx|ts|js)$/i.test(entry.name)) continue;
        const base = entry.name.replace(/\.(tsx|jsx|ts|js)$/i, '');
        if (isSpecial(base)) continue;
        if (base === 'index') continue;
        const route = path.posix.join(routePrefix || '/', base).replace(/\\/g, '/');
        routes.add(route);
      }
    }
  }
  walk(pagesDir, '');
  return Array.from(routes);
}

async function fetchHtml(url) {
  try {
    const res = await fetch(url, { redirect: 'follow' });
    const text = await res.text();
    return { ok: true, status: res.status, html: text };
  } catch (e) {
    return { ok: false, status: 0, error: String(e) };
  }
}

function analyzeAccessibility(html) {
  const cheerio = require('cheerio');
  const $ = cheerio.load(html);
  const issues = [];

  // html lang
  const lang = $('html').attr('lang');
  if (!lang) issues.push({ type: 'html-lang-missing', message: '<html> missing lang attribute' });

  // meta description
  if ($('meta[name="description"]').length === 0) {
    issues.push({ type: 'meta-description-missing', message: 'Missing <meta name="description">' });
  }

  // images alt
  $('img').each((_, el) => {
    const alt = $(el).attr('alt');
    if (alt === undefined || alt === null || String(alt).trim() === '') {
      issues.push({ type: 'img-alt-missing', message: 'Image missing alt attribute' });
    }
  });

  // anchors text
  $('a').each((_, el) => {
    const text = $(el).text().trim();
    const aria = $(el).attr('aria-label');
    const hasDesc = text.length > 0 || (aria && aria.trim().length > 0);
    if (!hasDesc) {
      issues.push({ type: 'anchor-text-missing', message: '<a> missing accessible name (text or aria-label)' });
    }
  });

  // heading order
  const headings = $('h1, h2, h3, h4, h5, h6').toArray().map((el) => Number(el.tagName.substring(1)));
  let last = 0;
  for (const level of headings) {
    if (last && level > last + 1) {
      issues.push({ type: 'heading-level-skip', message: `Heading level jumped from h${last} to h${level}` });
    }
    last = level;
  }

  return issues;
}

function writeReports(rootDir, results) {
  const reportDir = path.join(rootDir, 'public', 'reports', 'a11y');
  ensureDir(reportDir);
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const latestPath = path.join(reportDir, 'latest.json');
  const datedPath = path.join(reportDir, `a11y-${ts}.json`);
  const summary = {
    generatedAt: new Date().toISOString(),
    totals: {
      routesScanned: results.length,
      pagesWithIssues: results.filter(r => r.issues.length > 0).length,
      totalIssues: results.reduce((a, r) => a + r.issues.length, 0)
    },
    results
  };
  fs.writeFileSync(latestPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(datedPath, JSON.stringify(summary, null, 2));

  const detailItems = results.slice(0, 60).map((r) => {
    const issueCount = r.issues.length;
    const firstIssue = issueCount > 0 ? escapeHtml((r.issues[0].type || '') + ': ' + (r.issues[0].message || '')) : 'No issues';
    return '<div style="margin:12px 0;padding:12px;border:1px solid #1f2937;border-radius:8px;background:#0f172a">'
      + '<div><strong>Route:</strong> ' + escapeHtml(r.route) + '</div>'
      + '<div>Status: ' + String(r.status) + '</div>'
      + '<div>Issues: ' + String(issueCount) + (issueCount ? ' — ' + firstIssue : '') + '</div>'
      + '</div>';
  }).join('');

  const htmlIndex = [
    '<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>',
    '<title>A11y Report</title>',
    '<style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Helvetica,Arial,sans-serif;background:#0b1220;color:#fff;padding:24px}a{color:#67e8f9}code,pre{background:#111827;border:1px solid #1f2937;border-radius:8px;padding:12px;display:block;white-space:pre-wrap}h1{margin:0 0 12px;font-size:24px}h2{margin:24px 0 8px;font-size:18px}</style></head><body>',
    '<h1>Accessibility Report</h1>',
    '<p>Latest JSON: <a href="./latest.json">latest.json</a></p>',
    '<h2>Summary</h2>',
    '<div>Routes scanned: ' + String(summary.totals.routesScanned) + '</div>',
    '<div>Pages with issues: ' + String(summary.totals.pagesWithIssues) + '</div>',
    '<div>Total issues: ' + String(summary.totals.totalIssues) + '</div>',
    '<h2>Details (sample)</h2>',
    detailItems,
    '</body></html>'
  ].join('');
  fs.writeFileSync(path.join(reportDir, 'index.html'), htmlIndex);
}

exports.handler = async () => {
  const rootDir = path.resolve(__dirname, '..', '..');
  const baseUrl = process.env.DEPLOY_URL || process.env.DEPLOY_PRIME_URL || process.env.URL;
  const routes = collectRoutes(rootDir).slice(0, 60); // cap to 60 pages per run

  const results = [];
  for (const route of routes) {
    const url = baseUrl ? new URL(route, baseUrl).toString() : null;
    if (!url) {
      results.push({ route, status: 0, issues: [{ type: 'env-missing', message: 'Base URL env not found' }] });
      continue;
    }
    const res = await fetchHtml(url);
    if (!res.ok) {
      results.push({ route, status: res.status, issues: [{ type: 'fetch-failed', message: res.error || `HTTP ${res.status}` }] });
      continue;
    }
    const issues = analyzeAccessibility(res.html);
    results.push({ route, status: res.status, issues });
  }

  writeReports(rootDir, results);

  // git sync
  spawnSync('node', [path.join(rootDir, 'automation', 'advanced-git-sync.cjs')], { stdio: 'inherit' });

  return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'a11y-audit-runner', routes: results.length }) };
};