#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readFileSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function writeIfChanged(filePath, content) {
  ensureDir(filePath);
  const original = readFileSafe(filePath);
  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function buildRobots(siteUrl) {
  const lines = [];
  lines.push('User-agent: *');
  lines.push('Allow: /');
  const sitemapUrl = siteUrl
    ? `${siteUrl.replace(/\/$/, '')}/sitemap.xml`
    : '/sitemap.xml';
  lines.push(`Sitemap: ${sitemapUrl}`);
  lines.push('');
  return lines.join('\n');
}

function buildHeaders() {
  return [
    '/*',
    '  X-Frame-Options: SAMEORIGIN',
    '  X-Content-Type-Options: nosniff',
    '  Referrer-Policy: strict-origin-when-cross-origin',
    '  Permissions-Policy: interest-cohort=()',
    '  Cache-Control: public, max-age=0, must-revalidate',
    '',
    '/assets/*',
    '  Cache-Control: public, max-age=31536000, immutable',
    '',
    '/_next/static/*',
    '  Cache-Control: public, max-age=31536000, immutable',
    '',
    '/public/*',
    '  Cache-Control: public, max-age=31536000, immutable',
    '',
    '/automation/*.json',
    '  Cache-Control: public, max-age=300',
    ''
  ].join('\n');
}

(function main() {
  const ROOT = process.cwd();
  const publicDir = path.join(ROOT, 'public');
  const robotsPath = path.join(publicDir, 'robots.txt');
  const headersPath = path.join(publicDir, '_headers');
  const siteUrl = process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '';

  const robots = buildRobots(siteUrl);
  const headers = buildHeaders();

  let changes = 0;
  if (writeIfChanged(robotsPath, robots)) {
    console.log(`[robots-headers] Updated ${path.relative(ROOT, robotsPath)}`);
    changes++;
  }
  if (writeIfChanged(headersPath, headers)) {
    console.log(`[robots-headers] Updated ${path.relative(ROOT, headersPath)}`);
    changes++;
  }
  if (changes === 0) {
    console.log('[robots-headers] No changes needed');
  }
})();