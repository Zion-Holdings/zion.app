#!/usr/bin/env node
/*
 Alignment Google Doc Fetcher
 - Fetches the shared Google Doc HTML and extracts readable text
 - Stores structured output under data/reports/alignment and a public latest snapshot
 - No credentials used; relies on public doc access
*/

const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const DOC_URL = process.env.ALIGNMENT_DOC_URL || 'https://docs.google.com/document/d/1Q3-QbWjIIj83VYX_Hx258kmvEyF9qBR2nF09IOi4ppM/edit?usp=sharing';

async function fetchHtml(url) {
  const resp = await axios.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    },
    timeout: 30000,
    maxRedirects: 5,
    validateStatus: s => s < 500
  });
  return resp.data;
}

function extractContent(html) {
  const $ = cheerio.load(html);
  const title = $('title').first().text().trim() || 'Google Doc';
  const metaDesc = $('meta[name="description"]').attr('content') || '';
  // Google Docs viewer has text inside .kix-zoomdocumentplugin-outer > ...; fallback to all text
  const bodyText = $('body').text().replace(/\s+/g, ' ').trim();
  return { title, metaDesc, text: bodyText };
}

async function main() {
  const now = new Date();
  const stamp = now.toISOString().replace(/[:.]/g, '-');
  const repoRoot = path.resolve(__dirname, '..');
  const dataOut = path.join(repoRoot, 'data', 'reports', 'alignment');
  const publicOut = path.join(repoRoot, 'public', 'reports', 'alignment');
  await fs.mkdirs(dataOut);
  await fs.mkdirs(publicOut);
  try {
    const html = await fetchHtml(DOC_URL);
    const doc = extractContent(html);
    const output = { source: 'google-doc', url: DOC_URL, fetchedAt: now.toISOString(), doc };
    const file = path.join(dataOut, `doc-${stamp}.json`);
    const latest = path.join(publicOut, 'doc-latest.json');
    await fs.writeJson(file, output, { spaces: 2 });
    await fs.writeJson(latest, output, { spaces: 2 });
    console.log(`[alignment-google-doc-fetcher] Saved ${file}`);
  } catch (err) {
    console.error('[alignment-google-doc-fetcher] Error:', err.message);
    const file = path.join(publicOut, 'doc-latest.json');
    await fs.writeJson(file, { error: true, message: String(err) }, { spaces: 2 });
    process.exitCode = 1;
  }
}

main();


