#!/usr/bin/env node
/**
 * Deep Crawl & Link Audit for ziontechgroup.com
 * 
 * Checks all internal pages discovered from the static HTML export.
 * Reports 404s, 500s, redirects, and missing SEO meta tags.
 * 
 * CLI: --full (check all URLs, not just a sample)
 *      --json (output JSON report)
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_URL = 'https://ziontechgroup.com';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');
const DATA_DIR = path.join(REPORTS_DIR, 'data');
const FULL_CRAWL = process.argv.includes('--full');
const JSON_OUTPUT = process.argv.includes('--json');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function htmlToUrl(filepath) {
  let rel = path.relative(PUBLIC_DIR, filepath);
  if (rel.endsWith('index.html')) {
    rel = rel.slice(0, -10);
    if (rel.endsWith(path.sep)) rel = rel.slice(0, -1);
  }
  rel = rel.split(path.sep).join('/');
  if (!rel || rel === '.') return BASE_URL + '/';
  return `${BASE_URL}/${rel}`;
}

function extractLinks(content) {
  const links = new Set();
  const re = /(?:href|src)\s*=\s*["']([^"']+)["']/g;
  let match;
  while ((match = re.exec(content)) !== null) {
    links.add(match[1]);
  }
  return links;
}

function checkUrl(url) {
  try {
    const output = execSync(
      `curl -sL -o /dev/null -w "%{http_code}|%{redirect_url}" --max-time 15 "${url}"`,
      { timeout: 20000, encoding: 'utf8', stdio: 'pipe' }
    );
    const [status, redirect] = output.trim().split('|');
    return { status: status || '000', redirect: redirect || '' };
  } catch (e) {
    // curl returns non-zero for various HTTP errors, but still outputs the status code
    // The stdout from curl's -w will still be captured in e.stdout
    if (e.stdout && e.stdout.trim()) {
      const [status, redirect] = e.stdout.trim().split('|');
      return { status: status || '000', redirect: redirect || '' };
    }
    return { status: '000', redirect: '' };
  }
}

function extractMeta(content, url) {
  const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
  const descMatch = content.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
                   content.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  const canonicalMatch = content.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);

  return {
    title: titleMatch ? titleMatch[1].trim() : '',
    description: descMatch ? descMatch[1].trim() : '',
    h1: h1Match ? h1Match[1].trim() : '',
    canonical: canonicalMatch ? canonicalMatch[1].trim() : '',
    has_title: !!titleMatch,
    has_description: !!descMatch,
    has_h1: !!h1Match,
    has_canonical: !!canonicalMatch,
    title_len: titleMatch ? titleMatch[1].trim().length : 0,
    desc_len: descMatch ? descMatch[1].trim().length : 0
  };
}

function main() {
  ensureDir(REPORTS_DIR);
  ensureDir(DATA_DIR);

  // 1. Find all HTML files
  const htmlFiles = [];
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(fullPath);
      else if (entry.name.endsWith('.html')) htmlFiles.push(fullPath);
    }
  }
  walk(PUBLIC_DIR);

  console.log(`📄 Found ${htmlFiles.length} HTML files`);

  // 2. Generate URLs
  const urls = new Set();
  for (const f of htmlFiles) {
    urls.add(htmlToUrl(f));
  }
  console.log(`🔗 Generated ${urls.size} unique URLs`);

  // 3. Extract internal links from HTML files
  const internalLinks = new Set();
  for (const f of htmlFiles) {
    try {
      const content = fs.readFileSync(f, 'utf8');
      const links = extractLinks(content);
      for (const link of links) {
        if (link.startsWith('/') || link.toLowerCase().includes('ziontechgroup.com')) {
          if (link.startsWith('/') && !link.startsWith('//')) {
            internalLinks.add(`${BASE_URL}${link}`);
          } else if (link.toLowerCase().includes('ziontechgroup.com')) {
            internalLinks.add(link.replace(/^https?:\/\//, 'https://'));
          }
        }
      }
    } catch (e) { /* skip */ }
  }

  const allUrls = new Set([...urls, ...internalLinks]);
  console.log(`🌐 Total URLs to check: ${allUrls.size}`);

  // 4. Check URLs
  const urlArray = Array.from(allUrls);
  const sampleSize = FULL_CRAWL ? urlArray.length : Math.min(150, urlArray.length);
  const toCheck = FULL_CRAWL ? urlArray : urlArray.slice(0, sampleSize);

  console.log(`🕵️ Checking ${toCheck.length} URLs (full: ${FULL_CRAWL})...`);

  const results = {
    ok: [],
    redirects: [],
    broken: [],
    serverErrors: [],
    timeout: [],
    other: []
  };

  const seoIssues = {
    missing_title: [],
    missing_description: [],
    missing_h1: [],
    missing_canonical: [],
    short_title: [],
    short_description: []
  };

  for (let i = 0; i < toCheck.length; i++) {
    const url = toCheck[i];
    const result = checkUrl(url);

    if (result.status === '200') {
      results.ok.push(url);
    } else if (result.status.startsWith('3')) {
      results.redirects.push({ url, status: result.status, to: result.redirect });
    } else if (result.status === '404') {
      results.broken.push({ url, status: result.status });
      console.log(`  ❌ 404: ${url}`);
    } else if (result.status === '000') {
      results.timeout.push({ url });
    } else if (result.status.startsWith('5')) {
      results.serverErrors.push({ url, status: result.status });
    } else {
      results.other.push({ url, status: result.status });
    }

    // Check SEO on 200 responses (limited)
    if (result.status === '200' && i < 50) {
      try {
        const htmlPath = path.join(PUBLIC_DIR, url.replace(BASE_URL, ''));
        const indexHtml = path.join(htmlPath, 'index.html');
        let content = '';
        if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
          content = fs.readFileSync(htmlPath, 'utf8');
        } else if (fs.existsSync(indexHtml.replace(/\\/g, '/'))) {
          content = fs.readFileSync(indexHtml, 'utf8');
        } else {
          // Try to find the file
          const relPath = url.replace(BASE_URL, '').replace(/^\//, '');
          const possiblePaths = [
            path.join(PUBLIC_DIR, relPath, 'index.html'),
            path.join(PUBLIC_DIR, relPath + '.html'),
            path.join(PUBLIC_DIR, relPath)
          ];
          for (const p of possiblePaths) {
            if (fs.existsSync(p)) {
              content = fs.readFileSync(p, 'utf8');
              break;
            }
          }
        }
        if (content) {
          const meta = extractMeta(content, url);
          if (!meta.has_title) seoIssues.missing_title.push(url);
          if (!meta.has_description) seoIssues.missing_description.push(url);
          if (!meta.has_h1) seoIssues.missing_h1.push(url);
          if (!meta.has_canonical) seoIssues.missing_canonical.push(url);
          if (meta.has_title && meta.title_len > 0 && meta.title_len < 30) seoIssues.short_title.push(url);
          if (meta.has_description && meta.desc_len > 0 && meta.desc_len < 120) seoIssues.short_description.push(url);
        }
      } catch (e) { /* skip */ }
    }

    if ((i + 1) % 25 === 0) {
      console.log(`  Progress: ${i + 1}/${toCheck.length}`);
    }
  }

  // 5. Report
  console.log('\n📊 Deep Crawl Results:');
  console.log(`  ✅ OK (200): ${results.ok.length}`);
  console.log(`  🔁 Redirects: ${results.redirects.length}`);
  console.log(`  ❌ Broken (404): ${results.broken.length}`);
  console.log(`  ⚠️ Server errors: ${results.serverErrors.length}`);
  console.log(`  ⏱ Timeouts: ${results.timeout.length}`);
  console.log(`  📦 Other: ${results.other.length}`);
  console.log(`\n🔍 SEO Issues (first 50 pages checked):`);
  console.log(`  Missing title: ${seoIssues.missing_title.length}`);
  console.log(`  Missing description: ${seoIssues.missing_description.length}`);
  console.log(`  Missing H1: ${seoIssues.missing_h1.length}`);
  console.log(`  Missing canonical: ${seoIssues.missing_canonical.length}`);

  if (results.broken.length > 0) {
    console.log('\n❌ Broken links:');
    results.broken.forEach(b => console.log(`  ${b.status} - ${b.url}`));
  }

  // 6. Write report
  const report = {
    timestamp: new Date().toISOString(),
    base_url: BASE_URL,
    total_html_files: htmlFiles.length,
    total_urls_discovered: allUrls.size,
    total_urls_checked: toCheck.length,
    full_crawl: FULL_CRAWL,
    status_codes: {
      ok_200: results.ok.length,
      redirects: results.redirects.length,
      broken_404: results.broken.length,
      server_errors: results.serverErrors.length,
      timeout: results.timeout.length,
      other: results.other.length
    },
    broken_links: results.broken,
    redirects: results.redirects,
    server_errors: results.serverErrors,
    timeouts: results.timeout,
    seo_issues: seoIssues,
    improvement_ideas: []
  };

  // Generate improvement ideas
  if (results.broken.length > 0) {
    report.improvement_ideas.push({
      priority: 'high',
      issue: 'Broken links (404s) found on live site',
      fix: 'Fix or redirect broken URLs. Common causes: removed pages, wrong hrefs, missing redirects.',
      broken_count: results.broken.length
    });
  }
  if (seoIssues.missing_description.length > 0) {
    report.improvement_ideas.push({
      priority: 'medium',
      issue: 'Missing meta descriptions',
      fix: 'Add meta description tags to pages for better SEO click-through rates.',
      count: seoIssues.missing_description.length
    });
  }
  if (seoIssues.missing_canonical.length > 0) {
    report.improvement_ideas.push({
      priority: 'medium',
      issue: 'Missing canonical tags',
      fix: 'Add rel=canonical tags to prevent duplicate content issues.',
      count: seoIssues.missing_canonical.length
    });
  }
  if (results.redirects.length > 0) {
    report.improvement_ideas.push({
      priority: 'low',
      issue: 'Redirects detected',
      fix: 'Consider updating internal links to point to final destinations to reduce latency.',
      count: results.redirects.length
    });
  }

  const reportPath = path.join(DATA_DIR, 'deep-crawl-results.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n✅ Full report saved to: ${reportPath}`);

  if (!JSON_OUTPUT) {
    console.log('\n💡 Improvement ideas:');
    for (const idea of report.improvement_ideas) {
      console.log(`  [${idea.priority}] ${idea.issue} → ${idea.fix}`);
    }
  }
}

main();
