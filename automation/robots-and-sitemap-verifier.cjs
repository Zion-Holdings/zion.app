#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'robots-and-sitemap-verifier.log');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function log(msg) { const line = `[${new Date().toISOString()}] ${msg}\n`; console.log(msg); fs.appendFileSync(logFile, line); }

function ensureRobots() {
  const robotsPath = path.join(publicDir, 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    const content = `User-agent: *\nAllow: /\nSitemap: https://ziontechgroup.com/sitemap.xml\n`;
    fs.writeFileSync(robotsPath, content);
    log('Created robots.txt');
    return true;
  }
  return false;
}

function ensureSitemap() {
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://ziontechgroup.com/</loc></url>\n</urlset>\n`;
    fs.writeFileSync(sitemapPath, xml);
    log('Created sitemap.xml');
    return true;
  }
  // Basic sanity check
  const content = fs.readFileSync(sitemapPath, 'utf8');
  if (!content.includes('<urlset')) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://ziontechgroup.com/</loc></url>\n</urlset>\n`;
    fs.writeFileSync(sitemapPath, xml);
    log('Rewrote invalid sitemap.xml');
    return true;
  }
  return false;
}

async function main() {
  ensureDir(logsDir);
  ensureDir(publicDir);
  const r = ensureRobots();
  const s = ensureSitemap();
  log(`Done. robots:${r ? 'created' : 'ok'} sitemap:${s ? 'created/fixed' : 'ok'}`);
}

if (require.main === module) {
  main().catch(e => { log(`Fatal: ${e.message}`); process.exit(1); });
}