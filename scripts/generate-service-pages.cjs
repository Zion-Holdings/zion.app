#!/usr/bin/env node
/* generate-service-pages.cjs — lightweight static per-service pages */
const fs = require('fs');
const path = require('path');

const OUT_SERVICES = path.join(process.cwd(), 'out', 'services');
const INDEX_PATH = path.join(process.cwd(), 'out', 'service-index.json');

function main() {
  const index = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
  const services = index.services || [];
  const count = services.length;
  console.log(`service pages: ${count} services`);

  fs.mkdirSync(OUT_SERVICES, { recursive: true });

  for (const svc of services) {
    const dir = path.join(OUT_SERVICES, svc.id);
    fs.mkdirSync(dir, { recursive: true });
    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escape(svc.title)} | Zion Tech Group</title>
  <meta name="description" content="${escape(svc.description || '')}" />
  <meta name="robots" content="index,follow" />
  <style>
    :root { color-scheme: dark; }
    body { background:#020617; color:#e5e7eb; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
    .container { max-width: 960px; margin: 0 auto; padding: 24px; }
    .hero { padding: 48px 0 24px; }
    h1 { font-size: 32px; line-height: 1.2; font-weight: 700; }
    .meta { color:#94a3b8; margin-top: 8px; }
    .card { border:1px solid #334155; border-radius:12px; padding:16px; background:#0b1220; margin-top: 24px; }
    .footer { margin-top: 48px; padding: 24px 0; color:#64748b; font-size:13px; text-align: center; }
    a { color:#3b82f6; text-decoration: none; }
  </style>
</head>
<body>
  <main class="container">
    <a href="/services/" class="back-link">← Back to Services</a>
    <section class="hero">
      <h1>${escape(svc.title)}</h1>
      <p class="meta">${escape(svc.category || 'Service')}</p>
    </section>
    <section class="card">
      <p>${escape(svc.description || 'Service details coming soon.')}</p>
    </section>
  </main>
  <footer class="footer">© <span id="y"></span> Zion Tech Group. <a href="/services/">Services</a> · <a href="/contact/">Contact</a></footer>
  <script>document.getElementById('y').textContent = new Date().getFullYear()</script>
</body>
</html>`;
    fs.writeFileSync(path.join(dir, 'index.html'), html);
  }
  console.log(`wrote ${count} service pages to ${OUT_SERVICES}`);
}

function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

try { main(); } catch (e) { console.error(e); process.exit(1); }
