#!/usr/bin/env node
const https = require('https');

const BASE_URL = process.env.SITE_BASE_URL || 'https://ziontechgroup.com';
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

function ping(url) {
  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        console.log(`Pinged ${url} -> ${res.statusCode}`);
        res.resume();
        resolve();
      })
      .on('error', (e) => {
        console.log(`Ping error ${url}:`, e.message);
        resolve();
      });
  });
}

(async function run() {
  const google = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  const bing = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  await Promise.all([ping(google), ping(bing)]);
  console.log('Sitemap ping completed');
})();