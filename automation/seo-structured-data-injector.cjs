#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const pagesDir = path.join(projectRoot, 'pages');
const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'seo-structured-data-injector.log');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function log(msg) { const line = `[${new Date().toISOString()}] ${msg}\n`; console.log(msg); fs.appendFileSync(logFile, line); }

function listFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stats = fs.statSync(full);
    if (stats.isDirectory()) out.push(...listFiles(full));
    else if (/\.(tsx|jsx)$/.test(entry)) out.push(full);
  }
  return out;
}

function hasStructuredData(content) {
  return /<script[^>]+type=["']application\/ld\+json["'][^>]*>/.test(content);
}

function injectStructuredData(content, routePath) {
  const headOpenIdx = content.indexOf('<Head');
  if (headOpenIdx === -1) return null;
  const headCloseIdx = content.indexOf('</Head>');
  if (headCloseIdx === -1) return null;

  // Build minimal JSON-LD
  const nameMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = nameMatch ? nameMatch[1] : 'Zion App';
  const siteUrl = 'https://ziontechgroup.com';
  const url = `${siteUrl}${routePath}`.replace(/\\/g, '/');
  const json = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    headline: title,
    url,
    isPartOf: { '@type': 'WebSite', name: 'Zion Tech Group', url: siteUrl }
  };
  const scriptTag = `\n        <script type=\"application/ld+json\">${JSON.stringify(json)}</script>`;

  // Insert before </Head>
  const before = content.slice(0, headCloseIdx);
  const after = content.slice(headCloseIdx);
  return before + scriptTag + after;
}

function routeFromFile(file) {
  const rel = file.replace(pagesDir, '').replace(/\\/g, '/');
  if (rel.endsWith('/index.tsx') || rel.endsWith('/index.jsx')) return rel.replace(/\/index\.\w+$/, '/') || '/';
  return rel.replace(/\.\w+$/, '');
}

async function main() {
  ensureDir(logsDir);
  const files = listFiles(pagesDir);
  let modified = 0;
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      if (hasStructuredData(content)) continue;
      const route = routeFromFile(file);
      const updated = injectStructuredData(content, route);
      if (updated && updated !== content) {
        fs.writeFileSync(file, updated);
        modified += 1;
        log(`Injected JSON-LD into ${path.relative(projectRoot, file)}`);
      }
    } catch (e) {
      log(`Error processing ${file}: ${e.message}`);
    }
  }
  log(`Done. Modified ${modified} file(s).`);
}

if (require.main === module) {
  main().catch(e => { log(`Fatal: ${e.message}`); process.exit(1); });
}