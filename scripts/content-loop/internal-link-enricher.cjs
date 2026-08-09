#!/usr/bin/env node
// internal-link-enricher.cjs
// Inject contextual internal links into docs/ and out/ HTML pages.
const fs = require('fs');
const path = require('path');

const REPO = process.cwd();
const DOCS_DIR = path.join(REPO, 'docs');
const OUT_DIR = path.join(REPO, 'out');
const FRONTIER_PATH = path.join(REPO, 'scripts/content-loop/frontier.json');
const MAX_LINKS_PER_PAGE = 6;

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
}

function slugifyUrl(url) {
  const withoutProto = url.replace(/^https?:\/\/[^/]+/, '');
  return withoutProto.replace(/^\/+|\/+$/g, '').replace(/\//g, '__') || 'root';
}

function enrich(html, url, candidates) {
  // Minimal safe insertion: append a Related section inside <article> if present.
  const linkBlock = candidates.slice(0, MAX_LINKS_PER_PAGE).map((c) => `<li><a href="${escapeHtml(c.url)}">${escapeHtml(c.label)}</a></li>`).join('\n');
  const related = `<section aria-label="related">\n  <h2>Related</h2>\n  <ul>\n${linkBlock}\n  </ul>\n</section>`;
  if (html.includes('<article>') && html.includes('</article>')) {
    return html.replace('</article>', `${related}\n</article>`);
  }
  return html + '\n' + related;
}

function run() {
  if (!fs.existsSync(FRONTIER_PATH)) {
    console.error('Missing frontier.json');
    process.exit(1);
  }
  const frontier = JSON.parse(fs.readFileSync(FRONTIER_PATH, 'utf8'));
  const urls = frontier.urls || [];
  const urlMap = new Map(urls.map((u, i) => [u.url, { ...u, index: i }]));
  let updated = 0;

  const roots = [DOCS_DIR, OUT_DIR];
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    const files = [];
    const walk = (dir) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (entry.name.endsWith('.html')) files.push(full);
      }
    };
    walk(root);
    for (const file of files) {
      let html = fs.readFileSync(file, 'utf8');
      let changed = false;
      // Derive candidate links from nearest URL in frontier by prefix match.
      const relative = path.relative(root, file).replace(/\\/g, '/');
      const guessedUrl = 'https://example.com/' + relative.replace(/\/index\.html$/, '');
      const candidates = [];
      for (const u of urls) {
        if (u.url === guessedUrl) continue;
        candidates.push({ url: u.url, label: u.url });
        if (candidates.length >= MAX_LINKS_PER_PAGE) break;
      }
      if (candidates.length) {
        const next = enrich(html, guessedUrl, candidates);
        if (next !== html) {
          html = next;
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(file, html);
        updated++;
      }
    }
  }
  console.log(`[internal-link-enricher] updated ${updated} pages`);
}

run();
