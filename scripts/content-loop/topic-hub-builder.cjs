#!/usr/bin/env node
// topic-hub-builder.cjs
// Group catalog entries into topic hubs and render pillar pages.
const fs = require('fs');
const path = require('path');

const REPO = process.cwd();
const SERVICES_PATH = path.join(REPO, 'app/data/servicesData.json');
const DOCS_DIR = path.join(REPO, 'docs');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
}

function renderHubHtml(topic, children) {
  const childLinks = children.map((c) => `    <li><a href="/services/${escapeHtml(c.slug)}">${escapeHtml(c.name)}</a></li>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(topic)}</title>
  <link rel="canonical" href="/${escapeHtml(topic)}" />
  <meta name="description" content="${escapeHtml(topic)} topic hub." />
</head>
<body>
  <main>
    <article>
      <h1>${escapeHtml(topic)}</h1>
      <ul>
${childLinks}
      </ul>
    </article>
  </main>
</body>
</html>`;
}

function run() {
  if (!fs.existsSync(SERVICES_PATH)) {
    console.error('Missing servicesData.json');
    process.exit(1);
  }
  const raw = JSON.parse(fs.readFileSync(SERVICES_PATH, 'utf8'));
  const catalog = Array.isArray(raw) ? raw : (raw.services || []);
  const groups = new Map();
  for (const svc of catalog) {
    const industry = String(svc.industry || svc.category || 'general').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    if (!groups.has(industry)) groups.set(industry, []);
    groups.get(industry).push({ name: svc.name, slug: svc.id || svc.slug });
  }
  let written = 0;
  for (const [topic, children] of groups) {
    const html = renderHubHtml(topic, children.slice(0, 200));
    const dir = path.join(DOCS_DIR, topic);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    written++;
  }
  console.log(`[topic-hub-builder] wrote ${written} hub pages`);
}

run();
