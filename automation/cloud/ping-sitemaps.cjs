#!/usr/bin/env node
const https = require('https');

const SITE = process.env.SITE_ORIGIN || 'https://zion.app';
const SITEMAP_URL = `${SITE.replace(/\/$/, '')}/sitemap.xml`;

function ping(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => { res.resume(); resolve(res.statusCode); }).on('error', () => resolve(0));
  });
}

(async () => {
  const google = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  const bing = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  const gs = await ping(google);
  const bs = await ping(bing);
  console.log(`[sitemap] Pinged Google(${gs}) and Bing(${bs}) for ${SITEMAP_URL}`);
})();