#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const BASE_URL = process.env.APP_MARKETING_URL || 'https://ziontechgroup.com';
const LINKS_DIR = path.join(process.cwd(), 'data', 'reports', 'links');
const REPORT_DIR = path.join(process.cwd(), 'data', 'reports', 'seo');
const LOG_DIR = path.join(__dirname, 'logs');
if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
const LOG = path.join(LOG_DIR, 'seo-meta-audit.log');

function log(m){ const line = `[${new Date().toISOString()}] ${m}\n`; console.log(m); fs.appendFileSync(LOG, line); }

function loadLatestCrawl(){
  const latest = path.join(LINKS_DIR, 'crawl-latest.json');
  if (fs.existsSync(latest)) return JSON.parse(fs.readFileSync(latest,'utf8'));
  const files = fs.readdirSync(LINKS_DIR).filter(f=>f.startsWith('crawl-')).sort().reverse();
  for (const f of files) { try { return JSON.parse(fs.readFileSync(path.join(LINKS_DIR, f),'utf8')); } catch {} }
  return null;
}

async function fetch(url){
  try {
    const res = await axios.get(url, { timeout: 15000, maxRedirects: 5, validateStatus: ()=>true });
    return { status: res.status, html: typeof res.data === 'string' ? res.data : '' };
  } catch (e) {
    return { status: 0, html: '' };
  }
}

function analyzeHtml(url, html){
  const $ = cheerio.load(html);
  const title = $('head > title').text().trim();
  const desc = $('meta[name="description"]').attr('content') || '';
  const canon = $('link[rel="canonical"]').attr('href') || '';
  const ogTitle = $('meta[property="og:title"]').attr('content') || '';
  const ogImage = $('meta[property="og:image"]').attr('content') || '';
  const h1 = $('h1').first().text().trim();
  const missing = [];
  if (!title) missing.push('title');
  if (!desc) missing.push('meta:description');
  if (!canon) missing.push('link:canonical');
  if (!ogTitle) missing.push('og:title');
  if (!ogImage) missing.push('og:image');
  return { url, title, h1, descPresent: !!desc, canonPresent: !!canon, ogTitlePresent: !!ogTitle, ogImagePresent: !!ogImage, missing };
}

async function audit(urls){
  const results = [];
  for (const url of urls) {
    const { status, html } = await fetch(url);
    if (status >= 200 && status < 400 && html) results.push(analyzeHtml(url, html));
  }
  return results;
}

(async function main(){
  log('🚀 SEO meta audit starting');
  const crawl = loadLatestCrawl();
  if (!crawl) { log('No crawl available'); process.exit(0); }
  const internal = (crawl.results || []).map(r=>r.url).filter(u => {
    try { return new URL(u).hostname === new URL(BASE_URL).hostname; } catch { return false; }
  });
  const sample = internal.slice(0, 200);
  const results = await audit(sample);
  const summary = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    pagesChecked: results.length,
    totals: {
      missingTitle: results.filter(r=>r.missing.includes('title')).length,
      missingDescription: results.filter(r=>r.missing.includes('meta:description')).length,
      missingCanonical: results.filter(r=>r.missing.includes('link:canonical')).length,
      missingOgTitle: results.filter(r=>r.missing.includes('og:title')).length,
      missingOgImage: results.filter(r=>r.missing.includes('og:image')).length,
    }
  };
  const out = path.join(REPORT_DIR, `seo-audit-${new Date().toISOString().replace(/[-:TZ.]/g,'').slice(0,12)}.json`);
  fs.writeFileSync(out, JSON.stringify({ summary, results }, null, 2));
  fs.writeFileSync(path.join(REPORT_DIR, 'seo-audit-latest.json'), JSON.stringify({ summary, results }, null, 2));
  log(`📄 SEO audit saved: ${out}`);
})();