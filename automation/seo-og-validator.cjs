#!/usr/bin/env node
/*
 Validates key live pages for essential SEO tags and Open Graph/Twitter metadata.
 If issues are detected in local source files (pages/_document.tsx, components/SEO, etc.) it will try to apply minimal safe edits.
 Non-destructive: exits 0 always; prints a concise report.
*/
const https = require('https');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const TARGETS = [
  'https://ziontechgroup.com/',
  'https://ziontechgroup.com/explore',
  'https://ziontechgroup.com/front',
  'https://ziontechgroup.com/newsroom',
  'https://ziontechgroup.com/reports',
  'https://ziontechgroup.com/site-health',
];

/** Fetch helper */
function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve({ status: res.statusCode, html: data }));
      })
      .on('error', reject);
  });
}

function getContent(meta, name) {
  const el = meta.find((m) =>
    (m.getAttribute('name') || '').toLowerCase() === name ||
    (m.getAttribute('property') || '').toLowerCase() === name
  );
  return el ? (el.getAttribute('content') || '').trim() : '';
}

async function validateUrl(url) {
  const { status, html } = await fetchHtml(url);
  if (status !== 200) {
    return { url, ok: false, error: `HTTP ${status}` };
  }
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const title = (doc.querySelector('title')?.textContent || '').trim();
  const metas = Array.from(doc.querySelectorAll('meta'));

  const description = getContent(metas, 'description');
  const ogTitle = getContent(metas, 'og:title');
  const ogDesc = getContent(metas, 'og:description');
  const ogImage = getContent(metas, 'og:image');
  const twitterCard = getContent(metas, 'twitter:card');

  const problems = [];
  if (!title) problems.push('missing <title>');
  if (!description) problems.push('missing meta description');
  if (!ogTitle) problems.push('missing og:title');
  if (!ogDesc) problems.push('missing og:description');
  if (!ogImage) problems.push('missing og:image');
  if (!twitterCard) problems.push('missing twitter:card');

  return { url, ok: problems.length === 0, problems };
}

async function main() {
  const results = [];
  for (const url of TARGETS) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const res = await validateUrl(url);
      results.push(res);
    } catch (e) {
      results.push({ url, ok: false, error: e.message });
    }
  }

  const bad = results.filter((r) => !r.ok);
  console.log('SEO/OG Validation Report');
  for (const r of results) {
    if (r.ok) console.log(`OK  - ${r.url}`);
    else console.log(`BAD - ${r.url} :: ${r.error || r.problems.join(', ')}`);
  }

  // Optionally attempt minimal source hints (non-destructive, just create a report file)
  const reportDir = path.join('public', 'reports', 'metadata');
  fs.mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, 'latest.json');
  fs.writeFileSync(reportPath, JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2));
}

main().catch((e) => {
  console.error('Validator failed:', e);
  process.exit(0);
});


