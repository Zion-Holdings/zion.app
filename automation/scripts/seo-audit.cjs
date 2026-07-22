#!/usr/bin/env node
/**
 * Simple SEO auditor for static sites.
 * Usage: node automation/scripts/seo-audit.cjs [url]
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

async function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { timeout: 15000 }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

async function main() {
  const target = process.argv[2] || 'https://ziontechgroup.com';
  const { status, body } = await fetchText(target);
  console.log('TARGET', target);
  console.log('STATUS', status);
  const checks = [
    ['title', /<title[^>]*>([^<]+)<\/title>/i.exec(body)?.[1] || null],
    ['meta-description', /meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i.exec(body)?.[1] || null],
    ['h1-count', (body.match(/<h1[^>]*>/g) || []).length],
    ['meta-viewport', /meta[^>]+name=["']viewport["']/i.test(body)],
    ['canonical', /link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i.exec(body)?.[1] || null],
    ['og-title', /meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i.exec(body)?.[1] || null],
  ];
  for (const [name, value] of checks) {
    console.log(name + ':', JSON.stringify(value));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
