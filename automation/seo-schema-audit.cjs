const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

async function fetchHtml(url, timeoutMs = 15000) {
  try {
    const res = await axios.get(url, { timeout: timeoutMs, headers: { 'User-Agent': 'zion-seo-audit-bot' } });
    return res.data || '';
  } catch (e) {
    return '';
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function analyzeSeo(html, url) {
  const $ = cheerio.load(html);
  const issues = [];

  const title = $('title').first().text().trim();
  if (!title) issues.push({ type: 'title-missing', message: 'Missing <title>', url });
  else if (title.length < 10 || title.length > 65) issues.push({ type: 'title-length', message: 'Title length outside 10-65 chars', url, length: title.length });

  const desc = $('meta[name="description"]').attr('content') || '';
  if (!desc) issues.push({ type: 'description-missing', message: 'Missing meta description', url });
  else if (desc.length < 50 || desc.length > 170) issues.push({ type: 'description-length', message: 'Description length outside 50-170 chars', url, length: desc.length });

  const canonical = $('link[rel="canonical"]').attr('href') || '';
  if (!canonical) issues.push({ type: 'canonical-missing', message: 'Missing canonical link', url });

  const ogTitle = $('meta[property="og:title"]').attr('content') || '';
  const ogImage = $('meta[property="og:image"]').attr('content') || '';
  if (!ogTitle) issues.push({ type: 'og-title-missing', message: 'Missing og:title', url });
  if (!ogImage) issues.push({ type: 'og-image-missing', message: 'Missing og:image', url });

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
    const issues = analyzeSeo(html, url);
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
  const outFile = path.join(outDir, 'seo-schema-report.json');
  fs.writeFileSync(outFile, JSON.stringify(summary, null, 2));
  console.log(`seo schema report written: ${path.relative(process.cwd(), outFile)}`);
}

if (require.main === module) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}