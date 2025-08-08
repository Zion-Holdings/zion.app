#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const CFG = require('./spec-dev-config.json');

const OUT_DIR = path.join(__dirname, '..', 'data', 'reports', 'spec-dev');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function normalize(u) { try { const url = new URL(u, CFG.siteStartUrl); if (url.hostname !== CFG.siteDomain) return null; url.hash=''; return url.toString(); } catch { return null; } }

async function fetch(u) { try { const r = await axios.get(u, { timeout: 15000 }); return { status: r.status, html: r.data }; } catch(e) { return { status: e.response ? e.response.status : -1, html: '' }; } }

async function crawl() {
  const seen = new Set();
  const queue = [CFG.siteStartUrl];
  const pages = [];
  while (queue.length && pages.length < 300) {
    const u = queue.shift();
    if (!u || seen.has(u)) continue;
    seen.add(u);
    const { status, html } = await fetch(u);
    pages.push({ url: u, status });
    if (status >= 400) continue;
    const $ = cheerio.load(html || '');
    $('a[href]').each((_, a) => {
      const n = normalize($(a).attr('href'));
      if (n && !seen.has(n) && !queue.includes(n)) queue.push(n);
    });
  }
  return { pages, discovered: Array.from(seen) };
}

async function main() {
  ensureDir(OUT_DIR);
  const res = await crawl();
  const fp = path.join(OUT_DIR, 'site-crawl.json');
  fs.writeFileSync(fp, JSON.stringify({ timestamp: new Date().toISOString(), ...res }, null, 2));
  console.log(`Spec-dev site crawled: ${res.discovered.length} page(s)`);
}

main();


