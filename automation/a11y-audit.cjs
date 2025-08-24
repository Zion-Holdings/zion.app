const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

async function fetchHtml(url, timeoutMs = 15000) {
  try {
    const res = await axios.get(url, { timeout: timeoutMs, headers: { 'User-Agent': 'zion-a11y-audit-bot' } });
    return res.data || '';
  } catch (e) {
    return '';
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function analyzeA11y(html, url) {
  const $ = cheerio.load(html);
  const issues = [];

  // html[lang]
  if ($('html').attr('lang') == null) {
    issues.push({ type: 'html-lang-missing', message: 'Missing lang attribute on <html>', url });
  }

  // meta description
  if ($('meta[name="description"]').length === 0) {
    issues.push({ type: 'meta-description-missing', message: 'Missing meta description', url });
  }

  // images without alt
  $('img').each((_, el) => {
    const alt = $(el).attr('alt');
    if (alt == null || String(alt).trim() === '') {
      issues.push({ type: 'img-alt-missing', message: 'Image missing alt attribute', url, src: $(el).attr('src') || '' });
    }
  });

  // anchors without text
  $('a').each((_, el) => {
    const text = $(el).text().trim();
    const ariaLabel = $(el).attr('aria-label');
    if (!text && !(ariaLabel && ariaLabel.trim())) {
      issues.push({ type: 'anchor-no-text', message: 'Anchor without discernible text', url, href: $(el).attr('href') || '' });
    }
  });

  return issues;
}

async function main() {
  const base = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '') || 'https://example.com';
  const pages = Array.from(new Set([
    '/', '/main/front', '/automation', '/newsroom', '/site-health'
  ]));

  const results = [];
  for (const route of pages) {
    const url = `${base}${route}`;
    const html = await fetchHtml(url);
    if (!html) {
      results.push({ url, error: 'fetch_failed' });
      continue;
    }
    const issues = analyzeA11y(html, url);
    results.push({ url, issues, totals: { issues: issues.length } });
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
  const outFile = path.join(outDir, 'a11y-report.json');
  fs.writeFileSync(outFile, JSON.stringify(summary, null, 2));
  console.log(`a11y report written: ${path.relative(process.cwd(), outFile)}`);
}

if (require.main === module) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}