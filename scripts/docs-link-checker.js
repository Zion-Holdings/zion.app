#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'docs-links');

function walkMarkdown(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkMarkdown(full));
    else if (e.isFile() && /\.(md|mdx)$/i.test(e.name)) out.push(full);
  }
  return out;
}

function extractLinks(markdown) {
  const links = [];
  const rx = /\[[^\]]+\]\(([^)]+)\)/g;
  let m;
  while ((m = rx.exec(markdown))) {
    const url = (m[1] || '').trim();
    if (!/^https?:\/\//i.test(url)) continue; // only external http(s)
    if (/^mailto:|^tel:/i.test(url)) continue;
    links.push(url);
  }
  return Array.from(new Set(links));
}

async function headOrGet(url, timeoutMs = 15000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    let res = await fetch(url, { method: 'HEAD', signal: controller.signal });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, { method: 'GET', signal: controller.signal });
    }
    return { status: res.status, ok: res.ok };
  } catch (e) {
    return { status: 0, ok: false, error: String(e) };
  } finally {
    clearTimeout(timeout);
  }
}

async function checkLinks(links, concurrency = 10) {
  const queue = [...links];
  const results = [];
  let active = 0;
  await new Promise((resolve) => {
    const runNext = () => {
      if (queue.length === 0 && active === 0) return resolve();
      while (active < concurrency && queue.length) {
        const url = queue.shift();
        active++;
        headOrGet(url)
          .then((r) => results.push({ url, ...r }))
          .catch((e) => results.push({ url, status: 0, ok: false, error: String(e) }))
          .finally(() => { active--; runNext(); });
      }
    };
    runNext();
  });
  return results;
}

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function renderHTML(rows) {
  const tr = rows.map(r => `
    <tr>
      <td><a href="${r.url}" target="_blank" rel="noopener">${r.url}</a></td>
      <td>${r.status}</td>
      <td>${r.ok ? 'OK' : 'Broken'}</td>
      <td>${r.error ? ('' + r.error).replace(/</g, '&lt;') : ''}</td>
    </tr>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Docs Outbound Link Check</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; font-size: 14px; }
    th { background: #f3f4f6; text-align: left; }
  </style>
</head>
<body>
  <h1>Docs Outbound Link Check</h1>
  <p>Autonomously generated from markdown in docs/</p>
  <table>
    <thead>
      <tr><th>URL</th><th>Status</th><th>OK</th><th>Error</th></tr>
    </thead>
    <tbody>
      ${tr}
    </tbody>
  </table>
</body>
</html>`;
}

async function main() {
  const files = walkMarkdown(DOCS_DIR);
  const allLinks = new Set();
  for (const f of files) {
    const md = fs.readFileSync(f, 'utf8');
    extractLinks(md).forEach((u) => allLinks.add(u));
  }
  const results = await checkLinks(Array.from(allLinks));
  ensureDir(OUT_DIR);
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(results));
}

main().catch((e) => { console.error(e); process.exitCode = 1; });