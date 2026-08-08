#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const REPO = process.cwd();
const DOCS = path.join(REPO, 'docs');
const SITEMAP = path.join(REPO, 'docs', 'sitemap.xml');
const REPORT_DIR = path.join(REPO, 'automation', 'reports');

function ensureDir(p) { try { fs.mkdirSync(p, { recursive: true }); } catch {} }

function findExistingPath(canon) {
  const rel = canon.replace(/^\/+/, '');
  const candidates = [
    path.join(DOCS, rel),
    path.join(DOCS, rel, 'index.html'),
    path.join(DOCS, `${rel}.html`),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

function canonicalizeLink(link) {
  if (!link || link.startsWith('#') || /^(https?:|mailto:|tel:|javascript:)/i.test(link)) return null;
  let pathname = link;
  if (pathname.startsWith('/')) pathname = pathname.slice(1);
  if (!pathname) return '/';
  return '/' + pathname;
}

const SERVICE_SLUG_RE = /^\/services\/([^/]+)\/?$/;
const BLOG_SLUG_RE = /^\/blog\/([^/]+)\/?$/;
const CASE_SLUG_RE = /^\/case-studies\/([^/]+)\/?$/;
const INDUSTRY_SLUG_RE = /^\/industries\/([^/]+)\/?$/;
const SOLUTION_SLUG_RE = /^\/solutions\/([^/]+)\/?$/;

function createFallbackPage(canon, kind, slug) {
  const rel = canon.replace(/^\/+/, '');
  const target = path.join(DOCS, rel, 'index.html');
  if (fs.existsSync(target)) return false;
  ensureDir(path.dirname(target));
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const description = `${title} — offered by Zion Tech Group.`;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title} | Zion Tech Group</title>
<meta name="description" content="${description}" />
<link rel="canonical" href="https://ziontechgroup.com${canon}/" />
</head>
<body>
<header><nav><a href="/">Home</a> / <a href="/${kind}/">${kind.charAt(0).toUpperCase()+kind.slice(1)}</a></nav></header>
<main>
<h1>${title}</h1>
<p>${description}</p>
<section>
<h2>Overview</h2>
<p>Zion Tech Group delivers this ${kind} capability with measurable outcomes, practical automation, and enterprise support.</p>
</section>
<section>
<h2>Contact</h2>
<p>Email: <a href="mailto:hello@ziontechgroup.com">hello@ziontechgroup.com</a></p>
<p>Phone: +1 (302) 464 0950</p>
</section>
</main>
<footer><p>Zion Tech Group</p></footer>
</body>
</html>`;
  fs.writeFileSync(target, html, 'utf8');
  return true;
}

function patchLinksInFile(filePath, brokenMap) {
  let text = fs.readFileSync(filePath, 'utf8');
  const original = text;
  for (const [bad, good] of Object.entries(brokenMap)) {
    const escaped = bad.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    text = text.replace(new RegExp(`href="${escaped}"`, 'g'), `href="${good}"`);
    if (text !== original) break;
  }
  if (text !== original) {
    fs.writeFileSync(filePath, text, 'utf8');
    return true;
  }
  return false;
}

function crawlLinks(rootDir) {
  const results = [];
  if (!fs.existsSync(rootDir)) return results;
  const htmls = [];
  function walk(dir) {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.endsWith('.html')) htmls.push(full);
    }
  }
  walk(rootDir);
  for (const html of htmls) {
    let text;
    try { text = fs.readFileSync(html, 'utf8'); } catch { continue; }
    const matches = text.match(/href="([^"]+)"/g) || [];
    for (const match of matches) {
      const href = match.slice(6, -1);
      const canon = canonicalizeLink(href);
      if (!canon) continue;
      if (findExistingPath(canon)) continue;
      let m = SERVICE_SLUG_RE.exec(canon);
      let kind = 'services', slug = m && m[1];
      if (!slug) {
        m = BLOG_SLUG_RE.exec(canon);
        kind = 'blog'; slug = m && m[1];
      }
      if (!slug) {
        m = CASE_SLUG_RE.exec(canon);
        kind = 'case-studies'; slug = m && m[1];
      }
      if (!slug) {
        m = INDUSTRY_SLUG_RE.exec(canon);
        kind = 'industries'; slug = m && m[1];
      }
      if (!slug) {
        m = SOLUTION_SLUG_RE.exec(canon);
        kind = 'solutions'; slug = m && m[1];
      }
      if (slug) {
        results.push({ src: html.replace(REPO + path.sep, ''), href, kind, slug, canon });
      }
    }
  }
  return results;
}

function createOrPatch(broken) {
  const byKindSlug = {};
  for (const item of broken) {
    const key = `${item.kind}:${item.slug}`;
    (byKindSlug[key] = byKindSlug[key] || []).push(item);
  }
  let created = 0, patched = 0;
  for (const [key, items] of Object.entries(byKindSlug)) {
    const [kind, slug] = key.split(':');
    const canon = `/${kind}/${slug}`;
    if (createFallbackPage(canon, kind, slug)) {
      created++;
      continue;
    }
    for (const item of items) {
      const p = path.join(REPO, item.src);
      if (fs.existsSync(p) && patchLinksInFile(p, { [item.href]: `/${kind}/` })) {
        patched++;
        break;
      }
    }
  }
  return { created, patched };
}

function ensureHub(kind, label, links) {
  const target = path.join(DOCS, kind, 'index.html');
  if (fs.existsSync(target)) return false;
  ensureDir(path.dirname(target));
  const lis = links.map(l => `<li><a href="${l}">${l.replace(/\/$/, '') || 'Home'}</a></li>`).join('');
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${label} | Zion Tech Group</title>
<meta name="description" content="Explore ${label} resources, services, and insights from Zion Tech Group." />
<link rel="canonical" href="https://ziontechgroup.com/${kind}/" />
</head>
<body>
<header><nav><a href="/">Home</a></nav></header>
<main>
<h1>${label}</h1>
<section>
<h2>Browse</h2>
<ul>${lis}</ul>
</section>
<section>
<h2>Essential reading</h2>
<ul>
<li><a href="/services/">Services</a></li>
<li><a href="/case-studies/">Case Studies</a></li>
<li><a href="/industries/">Industries</a></li>
<li><a href="/blog/">Blog</a></li>
<li><a href="/solutions/">Solutions</a></li>
<li><a href="/contact/">Contact</a></li>
</ul>
</section>
</main>
<footer><p>Zion Tech Group</p></footer>
</body>
</html>`;
  fs.writeFileSync(target, html, 'utf8');
  return true;
}

function ensureHubs() {
  let created = 0;
  created += ensureHub('blog', 'Blog', ['/blog/', '/case-studies/', '/industries/', '/services/']) ? 1 : 0;
  created += ensureHub('case-studies', 'Case Studies', ['/case-studies/', '/blog/', '/services/', '/industries/']) ? 1 : 0;
  created += ensureHub('industries', 'Industries', ['/industries/', '/blog/', '/case-studies/', '/solutions/']) ? 1 : 0;
  created += ensureHub('solutions', 'Solutions', ['/solutions/', '/services/', '/blog/', '/case-studies/']) ? 1 : 0;
  created += ensureHub('tools', 'Tools', ['/tools/', '/blog/', '/services/']) ? 1 : 0;
  created += ensureHub('services', 'Services', ['/services/', '/solutions/', '/industries/', '/case-studies/']) ? 1 : 0;
  return created;
}

function enrichListings() {
  const listingCandidates = [
    path.join(DOCS, 'blog', 'index.html'),
    path.join(DOCS, 'services', 'index.html'),
    path.join(DOCS, 'case-studies', 'index.html'),
    path.join(DOCS, 'industries', 'index.html'),
    path.join(DOCS, 'solutions', 'index.html'),
    path.join(DOCS, 'tools', 'index.html'),
  ];
  let patched = 0;
  for (const target of listingCandidates) {
    if (!fs.existsSync(target)) continue;
    let text = fs.readFileSync(target, 'utf8');
    const original = text;
    const extra = `
<section>
<h2>Essential reading</h2>
<ul>
<li><a href="/services/">Services</a></li>
<li><a href="/case-studies/">Case Studies</a></li>
<li><a href="/industries/">Industries</a></li>
<li><a href="/blog/">Blog</a></li>
<li><a href="/solutions/">Solutions</a></li>
<li><a href="/contact/">Contact</a></li>
</ul>
</section>`;
    if (!text.includes('Essential reading')) {
      text = text.replace('</main>', extra + '</main>');
      if (text !== original) {
        fs.writeFileSync(target, text, 'utf8');
        patched++;
      }
    }
  }
  return patched;
}

function regenerateSitemap() {
  const urls = new Set();
  const htmls = [];
  function walk(dir) {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.endsWith('.html')) htmls.push(full);
    }
  }
  walk(DOCS);
  for (const html of htmls) {
    const rel = path.relative(DOCS, html).replace(/\\/g, '/');
    const parts = rel.split('/');
    if (parts[0] === '404' || parts[0] === '__next') continue;
    let url = 'https://ziontechgroup.com/' + rel.replace(/\.html$/, '').replace(/\/index$/, '/');
    if (!url.endsWith('/')) url += '/';
    urls.add(url);
  }
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  let body = '';
  for (const u of Array.from(urls).sort()) {
    body += `  <url><loc>${u}</loc></url>\n`;
  }
  fs.writeFileSync(SITEMAP, sitemap + body + '</urlset>\n', 'utf8');
  return urls.size;
}

function main() {
  console.log('Crawling docs/...');
  const broken = crawlLinks(DOCS);
  console.log('broken_internal_links', broken.length);
  const linkResult = createOrPatch(broken);
  console.log('link_repair', linkResult);

  const hubsCreated = ensureHubs();
  console.log('hubs_created', hubsCreated);

  const listingsPatched = enrichListings();
  console.log('listings_enriched', listingsPatched);

  const sitemapUrls = regenerateSitemap();
  console.log('sitemap_urls', sitemapUrls);

  const report = {
    timestamp: new Date().toISOString(),
    broken_internal_links: broken.length,
    created_fallback_pages: linkResult.created,
    patched_broken_links: linkResult.patched,
    hubs_created: hubsCreated,
    listings_enriched: listingsPatched,
    sitemap_url_count: sitemapUrls,
  };
  ensureDir(REPORT_DIR);
  fs.writeFileSync(path.join(REPORT_DIR, 'content-loop-latest.json'), JSON.stringify(report, null, 2), 'utf8');
  console.log(JSON.stringify(report, null, 2));
}

main();
