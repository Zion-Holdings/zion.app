#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');

function writeFile(filepath, content) {
  const dir = path.dirname(filepath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
}

async function fetch(url) {
  try {
    const res = await axios.get(url, { timeout: 10000, maxRedirects: 5 });
    return { status: res.status, data: res.data };
  } catch (err) {
    if (err.response) return { status: err.response.status, data: '' };
    return { status: null, data: '', error: String(err) };
  }
}

(async () => {
  const base = process.env.SITE_BASE_URL || process.env.URL || process.env.NETLIFY_BASE_URL;
  if (!base) {
    console.error('No SITE_BASE_URL/URL provided');
  }
  const start = base || 'https://example.com';
  const out = { base: start, generatedAt: new Date().toISOString(), errors: [] };

  const home = await fetch(start);
  if (home.status && String(home.status).startsWith('2')) {
    const $ = cheerio.load(home.data);
    const anchors = Array.from($('a')).map(a => $(a).attr('href')).filter(Boolean);
    const sameOrigin = anchors
      .map(h => {
        try { return new URL(h, start).href; } catch { return null; }
      })
      .filter(u => u && u.startsWith(new URL(start).origin));

    const unique = Array.from(new Set(sameOrigin)).slice(0, 50);

    for (const url of unique) {
      const res = await fetch(url);
      if (!res.status || res.status >= 400) {
        out.errors.push({ url, status: res.status, when: new Date().toISOString() });
      }
    }
  }

  writeFile(path.resolve(process.cwd(), 'data/404-map.json'), JSON.stringify(out, null, 2));
  console.log('404 map written to data/404-map.json');
})();