#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://ziontechgroup.netlify.app';
const OUT_DIR = path.join(process.cwd(), 'public', 'reports', 'a11y');

async function ensureDeps() {
  try { require('puppeteer'); require('axe-puppeteer'); } catch (e) {
    console.error('Missing puppeteer/axe-puppeteer'); process.exit(1);
  }
}

async function fetchSitemapUrls(siteUrl, limit = 30) {
  const fetch = global.fetch || ((...args) => import('node-fetch').then(({default: f}) => f(...args)));
  try {
    const res = await fetch(`${siteUrl.replace(/\/$/,'')}/sitemap.xml`);
    const xml = await res.text();
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]).filter(Boolean);
    return urls.slice(0, limit);
  } catch {
    return [siteUrl, `${siteUrl}/blog`, `${siteUrl}/products`, `${siteUrl}/services`, `${siteUrl}/jobs`];
  }
}

function dateSlug() {
  return new Date().toISOString().slice(0,10);
}

async function run() {
  await ensureDeps();
  const puppeteer = require('puppeteer');
  const { AxePuppeteer } = require('axe-puppeteer');

  const urls = await fetchSitemapUrls(SITE_URL, 30);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const results = [];

  for (const url of urls) {
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      const axe = new AxePuppeteer(page);
      const res = await axe.analyze();
      results.push({ url, violations: res.violations.length, details: res.violations });
      console.log(`a11y: ${url} -> ${res.violations.length} violations`);
    } catch (e) {
      results.push({ url, error: e.message });
      console.error(`a11y failed: ${url}`, e.message);
    }
  }

  const payload = { generatedAt: new Date().toISOString(), site: SITE_URL, pages: results };
  const file = path.join(OUT_DIR, `${dateSlug()}.json`);
  fs.writeFileSync(file, JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify(payload, null, 2));
  await browser.close();
  console.log(`Wrote a11y report: ${path.relative(process.cwd(), file)}`);
}

run().catch((e)=>{ console.error(e); process.exit(1); });