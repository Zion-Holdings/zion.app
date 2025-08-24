/* Autonomous Site Validator
   - Exports the site
   - Scans static HTML for links and Open Graph/Twitter tags
   - Checks link statuses and reports missing OG tags
*/

const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');
const { spawnSync } = require('child_process');

function exportSite() {
  const res = spawnSync('npm', ['run', 'export'], { stdio: 'inherit' });
  if (res.status !== 0) throw new Error('next export failed');
}

function getHtmlFiles(rootDir) {
  const files = [];
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walk(full);
      else if (name.endsWith('.html')) files.push(full);
    }
  }
  walk(rootDir);
  return files;
}

async function checkUrl(url) {
  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(url, { method: 'HEAD', signal: controller.signal });
    clearTimeout(t);
    if (res.ok) return { ok: true, status: res.status };
    // fallback to GET in case HEAD is blocked
    const res2 = await fetch(url, { method: 'GET' });
    return { ok: res2.ok, status: res2.status };
  } catch (e) {
    return { ok: false, status: 0, error: e.message };
  }
}

function normalizeUrl(basePath, href) {
  if (!href) return '';
  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return '';
  if (/^https?:\/\//i.test(href)) return href;
  // relative path in exported site
  const outUrl = new URL(href, 'https://example.com' + basePath.replace(/index\.html$/, ''));
  return outUrl.toString().replace('https://example.com', '');
}

async function run() {
  const started = new Date();
  exportSite();
  const outDir = path.join(process.cwd(), 'out');
  const htmlFiles = getHtmlFiles(outDir);

  const brokenLinks = new Map();
  const pagesOgIssues = [];

  for (const file of htmlFiles) {
    const rel = '/' + path.relative(outDir, file).replace(/\\/g, '/');
    const html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);

    // OG/Twitter tag checks
    const requiredMeta = ['og:title', 'og:description', 'og:image', 'twitter:card'];
    const missing = requiredMeta.filter((name) => $(`meta[property='${name}'], meta[name='${name}']`).length === 0);
    if (missing.length > 0) pagesOgIssues.push({ page: rel, missing });

    // Links and images
    const hrefs = new Set();
    $('a[href]').each((_, el) => hrefs.add($(el).attr('href')));
    $('img[src]').each((_, el) => hrefs.add($(el).attr('src')));

    const checks = [];
    for (const raw of hrefs) {
      const n = normalizeUrl(rel, raw);
      if (!n) continue;
      // External absolute URLs keep as-is, internal are relative like /path
      const target = /^https?:/i.test(raw) ? raw : `https://zion.local${n}`; // placeholder domain for internal structure test
      checks.push({ raw, target, page: rel });
    }

    // Perform checks (sequential to be polite)
    for (const c of checks) {
      const { ok, status } = await checkUrl(c.target);
      if (!ok) {
        const key = c.raw + '|' + c.page;
        brokenLinks.set(key, { url: c.raw, page: c.page, status });
      }
    }
  }

  const report = {
    generatedAt: started.toISOString(),
    pagesScanned: htmlFiles.length,
    brokenLinks: Array.from(brokenLinks.values()),
    pagesWithOgIssues: pagesOgIssues.length,
    ogIssues: pagesOgIssues.slice(0, 200),
  };

  const pubDir = path.join(process.cwd(), 'public', 'automation');
  await fs.ensureDir(pubDir);
  await fs.writeJson(path.join(pubDir, 'site-validator.json'), report, { spaces: 2 });

  const logDir = path.join(process.cwd(), 'automation_logs');
  await fs.ensureDir(logDir);
  await fs.appendFile(
    path.join(logDir, 'site-validator.log'),
    `[${new Date().toISOString()}] pages=${htmlFiles.length} broken=${report.brokenLinks.length} ogPages=${report.pagesWithOgIssues}\n`
  );

  console.log('Site Validator completed');
}

run().catch((e) => {
  console.error('Site Validator failed:', e);
  process.exitCode = 1;
});