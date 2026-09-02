#!/usr/bin/env node
/**
 * Cloudflare Workers Builds prepare step.
 *
 * Workers Builds injects WORKERS_CI=1. Never run `next build` here:
 * the recovered App Router tree is ~19k pages and is published from
 * committed public/ fallbacks (same as GitHub Pages).
 */
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const publicDir = path.join(repo, 'public');

if (!fs.existsSync(publicDir)) {
  console.error('public/ is missing — cannot publish Workers static assets');
  process.exit(1);
}

function copyIfMissing(fromRel, toRel) {
  const from = path.join(repo, fromRel);
  const to = path.join(repo, toRel);
  if (!fs.existsSync(from)) return;
  if (fs.existsSync(to)) return;
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
  console.log(`copied ${fromRel} -> ${toRel}`);
}

copyIfMissing('_redirects', 'public/_redirects');
copyIfMissing('_headers', 'public/_headers');
copyIfMissing('CNAME', 'public/CNAME');
copyIfMissing('index.html', 'public/index.html');

const notFound = path.join(publicDir, '404.html');
if (!fs.existsSync(notFound)) {
  fs.writeFileSync(
    notFound,
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Not found | Zion Tech Group</title>
</head>
<body style="font-family:system-ui,sans-serif;background:#0b1221;color:#e5e7eb;padding:48px;text-align:center">
  <h1>Page not found</h1>
  <p><a href="/" style="color:#a78bfa">Back to home</a></p>
</body>
</html>
`
  );
  console.log('wrote public/404.html');
}

const index = path.join(publicDir, 'index.html');
if (!fs.existsSync(index)) {
  console.error('public/index.html is missing');
  process.exit(1);
}

console.log('Workers static prepare OK (publishing committed public/)');
process.exit(0);
