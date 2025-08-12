#!/usr/bin/env node
/*
 Alignment Site Crawler
 - Crawls https://ziontechgroup.netlify.app to collect pages, titles, headings, and internal links
 - Respects same-origin, configurable limits via env
*/

const axios = require('axios');
const cheerio = require('cheerio');
const urlLib = require('url');
const fs = require('fs-extra');
const path = require('path');

const START_URL = process.env.ALIGNMENT_START_URL || 'https://ziontechgroup.netlify.app/';
const MAX_PAGES = Number(process.env.ALIGNMENT_MAX_PAGES || 400);
const MAX_DEPTH = Number(process.env.ALIGNMENT_MAX_DEPTH || 4);
const REQUEST_DELAY_MS = Number(process.env.ALIGNMENT_REQUEST_DELAY_MS || 250);

function sleep(ms){return new Promise(r=>setTimeout(r,ms));}

function normalizeUrl(href, base) {
  try {
    return new URL(href, base).toString().replace(/#.*$/, '');
  } catch {
    return null;
  }
}

function isSameOrigin(url, origin) {
  try {
    return new URL(url).origin === origin;
  } catch { return false; }
}

async function fetchPage(url) {
  const resp = await axios.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; AlignmentCrawler/1.0; +https://ziontechgroup.com)'
    },
    timeout: 20000,
    validateStatus: s => s < 500
  });
  return resp.data;
}

function extractData(html, pageUrl) {
  const $ = cheerio.load(html);
  const title = $('title').first().text().trim();
  const desc = $('meta[name="description"]').attr('content') || '';
  const h1 = $('h1').first().text().trim();
  const links = [];
  $('a[href]').each((_, a) => {
    const href = $(a).attr('href');
    const norm = normalizeUrl(href, pageUrl);
    if (norm) links.push(norm);
  });
  const text = $('body').text().replace(/\s+/g, ' ').trim().slice(0, 2000);
  return { title, desc, h1, links, text };
}

async function crawl(start) {
  const origin = new URL(start).origin;
  const queue = [{ url: start, depth: 0 }];
  const visited = new Set();
  const pages = [];
  while (queue.length && pages.length < MAX_PAGES) {
    const { url, depth } = queue.shift();
    if (visited.has(url)) continue;
    visited.add(url);
    try {
      const html = await fetchPage(url);
      const data = extractData(html, url);
      pages.push({ url, depth, ...data });
      if (depth < MAX_DEPTH) {
        for (const link of data.links) {
          if (isSameOrigin(link, origin) && !visited.has(link)) {
            queue.push({ url: link, depth: depth + 1 });
          }
        }
      }
      await sleep(REQUEST_DELAY_MS);
    } catch (err) {
      pages.push({ url, depth, error: String(err.message || err) });
    }
  }
  return pages;
}

async function main(){
  const now = new Date();
  const stamp = now.toISOString().replace(/[:.]/g,'-');
  const repoRoot = path.resolve(__dirname, '..');
  const dataOut = path.join(repoRoot, 'data', 'reports', 'alignment');
  const publicOut = path.join(repoRoot, 'public', 'reports', 'alignment');
  await fs.mkdirs(dataOut);
  await fs.mkdirs(publicOut);
  try {
    const pages = await crawl(START_URL);
    const output = { source: 'site-crawl', start: START_URL, fetchedAt: now.toISOString(), counts: { pages: pages.length }, pages };
    const file = path.join(dataOut, `site-${stamp}.json`);
    const latest = path.join(publicOut, 'site-latest.json');
    await fs.writeJson(file, output, { spaces: 2 });
    await fs.writeJson(latest, output, { spaces: 2 });
    console.log(`[alignment-site-crawler] Saved ${file}`);
  } catch (err) {
    console.error('[alignment-site-crawler] Error:', err.message);
    await fs.writeJson(path.join(publicOut,'site-latest.json'), { error:true, message:String(err) }, { spaces: 2 });
    process.exitCode = 1;
  }
}

main();


