#!/usr/bin/env node
'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

async function safeFetch(url, options = {}) {
  try {
    const res = await axios.get(url, { timeout: options.timeout || 15000, headers: options.headers || {} });
    return res.data;
  } catch {
    return null;
  }
}

function stripWhitespace(text) {
  return (text || '').replace(/[\t\r]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
}

async function searchWithGoogleCSE(query) {
  const cx = process.env.GOOGLE_CSE_ID;
  const key = process.env.GOOGLE_API_KEY;
  if (!cx || !key) return [];
  try {
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&cx=${cx}&key=${key}`;
    const data = await safeFetch(url, { timeout: 12000 });
    if (!data || !data.items) return [];
    return data.items.slice(0, 8).map((it) => ({
      title: stripWhitespace(it.title),
      url: it.link,
      source: 'google',
      snippet: stripWhitespace(it.snippet || ''),
    }));
  } catch {
    return [];
  }
}

async function searchWithHNAlgolia(query) {
  try {
    const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=8`;
    const data = await safeFetch(url, { timeout: 12000 });
    if (!data || !data.hits) return [];
    return data.hits
      .filter((h) => h && (h.url || h.story_url) && h.title)
      .map((h) => ({
        title: stripWhitespace(h.title),
        url: h.url || h.story_url,
        source: 'hn',
        snippet: stripWhitespace(h._highlightResult?.title?.value?.replace(/<[^>]+>/g, '') || ''),
      }));
  } catch {
    return [];
  }
}

async function searchWeb(query) {
  // Prefer Google CSE if configured; otherwise fall back to HN Algolia
  const google = await searchWithGoogleCSE(query);
  if (google && google.length) return google;
  const hn = await searchWithHNAlgolia(query);
  return hn;
}

async function extractReadableText(html) {
  if (!html) return '';
  const $ = cheerio.load(html);
  $('script, style, noscript, svg, iframe').remove();
  const candidates = ['article', 'main', 'section', 'div'];
  let best = '';
  let bestLen = 0;
  for (const sel of candidates) {
    $(sel).each((_, el) => {
      const txt = stripWhitespace($(el).text());
      if (txt.length > bestLen) { best = txt; bestLen = txt.length; }
    });
  }
  if (!best) best = stripWhitespace($('body').text());
  return best;
}

async function fetchAndExtract(url) {
  const html = await safeFetch(url, { timeout: 15000, headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ZionAppBot/1.0)' } });
  if (!html) return '';
  return extractReadableText(html);
}

module.exports = {
  searchWeb,
  fetchAndExtract,
  extractReadableText,
};


