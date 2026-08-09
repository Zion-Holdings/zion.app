#!/usr/bin/env node
// batch-generator.cjs
// Consume content-loop/frontier.json and render deep static pages in batches.
const fs = require('fs');
const path = require('path');

const REPO = process.cwd();
const FRONTIER_PATH = path.join(REPO, 'scripts/content-loop/frontier.json');
const DOCS_DIR = path.join(REPO, 'docs');
const OUT_DIR = path.join(REPO, 'out');

const BATCH_SIZE = parseInt(process.env.CONTENT_LOOP_BATCH_SIZE || '50', 10);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function renderPageHtml(item) {
  // Deterministic template; real implementation should plug into app templates.
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(item.url)}</title>
  <link rel="canonical" href="${escapeHtml(item.url)}" />
  <meta name="description" content="Service page generated from catalog." />
</head>
<body>
  <main>
    <article>
      <h1>${escapeHtml(item.url)}</h1>
      <p>Generated content placeholder.</p>
    </article>
  </main>
</body>
</html>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function slugifyUrl(url) {
  const withoutProto = url.replace(/^https?:\/\/[^/]+/, '');
  const cleaned = withoutProto.replace(/^\/+|\/+$/g, '').replace(/\//g, '__');
  return cleaned || 'root';
}

function run() {
  if (!fs.existsSync(FRONTIER_PATH)) {
    console.error('Missing frontier.json — run sitemap-first.cjs first');
    process.exit(1);
  }
  const frontier = JSON.parse(fs.readFileSync(FRONTIER_PATH, 'utf8'));
  const urls = frontier.urls || [];
  ensureDir(DOCS_DIR);
  ensureDir(OUT_DIR);

  let generated = 0;
  const batch = urls.slice(0, BATCH_SIZE);
  for (const item of batch) {
    const slug = slugifyUrl(item.url);
    const docPath = path.join(DOCS_DIR, slug, 'index.html');
    const outPath = path.join(OUT_DIR, slug, 'index.html');
    const html = renderPageHtml(item);
    ensureDir(path.dirname(docPath));
    ensureDir(path.dirname(outPath));
    fs.writeFileSync(docPath, html);
    fs.writeFileSync(outPath, html);
    generated++;
  }
  console.log(`[batch-generator] generated ${generated} pages (limit ${BATCH_SIZE})`);
}

run();
