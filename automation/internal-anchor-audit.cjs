const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

async function fetchHtml(url, timeoutMs = 15000) {
  try {
    const res = await axios.get(url, { timeout: timeoutMs, headers: { 'User-Agent': 'zion-anchor-audit-bot' } });
    return res.data || '';
  } catch (e) {
    return '';
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

async function validateAnchors(base, url, html) {
  const $ = cheerio.load(html);
  const issues = [];

  const anchors = $('a[href*="#"]').toArray();
  for (const a of anchors) {
    const href = $(a).attr('href') || '';
    if (!href) continue;
    if (href.startsWith('#')) {
      const id = href.slice(1);
      if (!id) continue;
      if ($(`#${id}`).length === 0 && $(`[name="${id}"]`).length === 0) {
        issues.push({ type: 'missing-anchor', message: 'Anchor target not found on page', url, href });
      }
    } else if (/^\/?[^?#]+#/.test(href)) {
      const [route, hash] = href.split('#');
      const targetUrl = `${base}${route.startsWith('/') ? '' : '/'}${route}`;
      const targetHtml = await fetchHtml(targetUrl);
      if (!targetHtml) {
        issues.push({ type: 'target-fetch-failed', message: 'Could not fetch target page', url, href, targetUrl });
        continue;
      }
      const $$ = cheerio.load(targetHtml);
      const id = hash;
      if ($$(`#${id}`).length === 0 && $$(`[name="${id}"]`).length === 0) {
        issues.push({ type: 'missing-anchor', message: 'Anchor target not found on target page', url, href, targetUrl });
      }
    }
  }
  return issues;
}

async function main() {
  const base = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '') || 'https://example.com';
  const routes = Array.from(new Set(['/','/main/front','/automation','/newsroom','/site-health']));

  const results = [];
  for (const route of routes) {
    const url = `${base}${route}`;
    const html = await fetchHtml(url);
    if (!html) {
      results.push({ url, error: 'fetch_failed' });
      continue;
    }
    const issues = await validateAnchors(base, url, html);
    results.push({ url, totals: { issues: issues.length }, issues });
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    base,
    totals: {
      pages: results.length,
      issues: results.reduce((sum, r) => sum + (r.totals?.issues || 0), 0)
    },
    results
  };

  const outDir = path.resolve(__dirname, '..', 'data', 'reports');
  ensureDir(outDir);
  const outFile = path.join(outDir, 'internal-anchors-report.json');
  fs.writeFileSync(outFile, JSON.stringify(summary, null, 2));
  console.log(`internal anchors report written: ${path.relative(process.cwd(), outFile)}`);
}

if (require.main === module) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}