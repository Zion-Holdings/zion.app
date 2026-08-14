#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BLOG_SRC = path.join(process.cwd(), 'app', 'blog');
const SVC_SRC = path.join(process.cwd(), 'app', 'services');
const BLOG_DOCS = path.join(process.cwd(), 'docs', 'blog');
const SVC_DOCS = path.join(process.cwd(), 'docs', 'services');

const BLOG_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{{TITLE}} | Zion Tech Group</title>
  <meta name="description" content="{{TITLE}}" />
  <link rel="canonical" href="{{CANONICAL}}" />
  <meta name="robots" content="index,follow" />
  <style>
    body { background: #0b1220; color: #e5e7eb; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
    .wrap { max-width: 860px; margin: 0 auto; padding: 40px 20px; }
    a { color: #c4b5fd; }
    .cta { display:inline-block; margin-top: 18px; padding: 12px 18px; border-radius: 12px; background: white; color: #0f172a; font-weight: 600; text-decoration:none; }
    h1 { font-size: 28px; line-height: 1.2; margin: 0 0 12px; color: white; }
    p { line-height: 1.6; color: #cbd5e1; }
    .meta { color: #94a3b8; font-size: 12px; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>{{TITLE}}</h1>
    <p class="meta">By Zion Tech Group • IT and AI insights • 2026</p>
    <p>{{TITLE}} is moving from experiment to operating layer. Most programs fail because they optimize for demos instead of outcomes.</p>
    <h2>What works</h2>
    <ul>
      <li>Start with low-risk, high-value workflows</li>
      <li>Use production data, not synthetic demos</li>
      <li>Create operator runbooks and escalation paths</li>
      <li>Review model behavior weekly</li>
    </ul>
    <h2>Outcome</h2>
    <p>With strong governance, {{TITLE_LOWER}} becomes reliable infrastructure.</p>
    <p><a href="/contact" class="cta">Talk to Zion Tech Group →</a></p>
  </div>
</body>
</html>
`;

const SVC_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{{TITLE}} | Zion Tech Group</title>
  <meta name="description" content="End-to-end {{TITLE_LOWER}} services: assessment, deployment, and managed operations." />
  <link rel="canonical" href="{{CANONICAL}}" />
  <style>
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;background:#0a0a0f;color:#f5f7ff;min-height:100vh;padding:60px 20px}
    .wrap{max-width:1100px;margin:0 auto}
    header{display:flex;justify-content:space-between;align-items:center;margin-bottom:40px;padding-bottom:18px;border-bottom:1px solid #1f2937}
    .brand{color:#7dd3fc;font-weight:700;text-decoration:none}
    nav a{color:#cbd5e1;text-decoration:none;margin-left:18px}
    main a{color:#7dd3fc;text-decoration:none}
    footer{margin-top:70px;padding-top:22px;border-top:1px solid #1f2937;color:#94a3b8;font-size:14px;text-align:center}
    footer a{color:#7dd3fc;text-decoration:none;margin:0 10px}
  </style>
</head>
<body>
<div class="wrap">
<header>
<a class="brand" href="/">Zion Tech Group</a>
<nav>
<a href="/services/">Services</a>
<a href="/blog/">Blog</a>
<a href="/contact/">Contact</a>
</nav>
</header>
<main>
<h1>{{TITLE}}</h1>
<p>End-to-end {{TITLE_LOWER}} services: assessment, deployment, and managed operations.</p>
<h2 style="color:#fff;margin:24px 0 10px">Features</h2>
<ul style="display:grid;gap:10px;margin-top:12px">
<li style="display:flex;gap:10px;color:#cbd5e1"><span style="color:#7dd3fc">✦</span> Implementation</li>
<li style="display:flex;gap:10px;color:#cbd5e1"><span style="color:#7dd3fc">✦</span> Managed Support</li>
<li style="display:flex;gap:10px;color:#cbd5e1"><span style="color:#7dd3fc">✦</span> Automation</li>
</ul>
<a class="cta" href="/contact/" style="display:inline-block;margin-top:22px;padding:12px 16px;border-radius:12px;background:#2563eb;color:#fff;font-weight:600;text-decoration:none">Get started</a>
</main>
<footer>
<p>© 2026 Zion Tech Group. All rights reserved.</p>
</footer>
</div>
</body>
</html>
`;

function extractTitleFromPage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const m = content.match(/title:\s*'([^']+)'/);
  return m ? m[1] : path.basename(path.dirname(filePath));
}

function writeDocsHtml(docsDir, slug, title, template) {
  const dir = path.join(docsDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  const canonical = docsDir === BLOG_DOCS
    ? `https://ziontechgroup.com/blog/${slug}/`
    : `https://ziontechgroup.com/services/${slug}/`;
  const html = template
    .replace(/{{TITLE}}/g, title)
    .replace(/{{TITLE_LOWER}}/g, title.toLowerCase())
    .replace(/{{CANONICAL}}/g, canonical);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

function processRange(srcDir, docsDir, template, min, max) {
  if (!fs.existsSync(srcDir)) return;
  const dirs = fs.readdirSync(srcDir).filter(d => {
    const full = path.join(srcDir, d);
    if (!fs.statSync(full).isDirectory() || !fs.existsSync(path.join(full, 'page.tsx'))) return false;
    const m = d.match(/-(\d+)$/);
    if (!m) return false;
    const num = parseInt(m[1], 10);
    return num >= min && num <= max;
  });
  let count = 0;
  for (const slug of dirs) {
    const docsTarget = path.join(docsDir, slug, 'index.html');
    if (fs.existsSync(docsTarget)) continue;
    const pagePath = path.join(srcDir, slug, 'page.tsx');
    const title = extractTitleFromPage(pagePath);
    writeDocsHtml(docsDir, slug, title, template);
    count++;
  }
  console.log(`Synced ${count} pages to ${docsDir}`);
}

const queuePath = path.join(process.cwd(), 'content', 'queue.md');
let lastCycle = 0;
try {
  const txt = fs.readFileSync(queuePath, 'utf8');
  const m = txt.match(/Last cycle:\s*(\d+)/i);
  if (m) lastCycle = parseInt(m[1], 10);
} catch {}
// Sync only pages that are not yet in docs (full history sync)
processRange(BLOG_SRC, BLOG_DOCS, BLOG_TEMPLATE, 1, lastCycle);
processRange(SVC_SRC, SVC_DOCS, SVC_TEMPLATE, 1, lastCycle);
