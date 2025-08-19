#!/usr/bin/env node
/*
 Alignment Chat Fetcher
 - Fetches the shared ChatGPT conversation HTML and extracts readable text
 - Stores structured output under data/reports/alignment and a public latest snapshot
 - Safe to run locally; no secrets required
*/

const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const CHAT_URL = process.env.ALIGNMENT_CHAT_URL || 'https://chatgpt.com/share/688b6030-1aa0-800b-9b63-ec9a269ea62d';

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

function extractConversation(html) {
  const $ = cheerio.load(html);
  // Fallback to all text if selectors change; keep best-effort extraction
  const text = $('body').text().replace(/\s+/g, ' ').trim();
  const title = $('title').first().text().trim() || 'Shared Chat';
  const metaDesc = $('meta[name="description"]').attr('content') || '';
  // Attempt to capture message blocks if present
  const messages = [];
  $('[data-message-author], .message, .markdown').each((_, el) => {
    const role = $(el).attr('data-message-author') || ($(el).hasClass('message') ? 'message' : 'markdown');
    const content = $(el).text().replace(/\s+/g, ' ').trim();
    if (content) messages.push({ role, content });
  });
  return { title, metaDesc, text, messages };
}

async function main() {
  const now = new Date();
  const stamp = now.toISOString().replace(/[:.]/g, '-');
  const dataDir = path.join(__dirname, '..', 'data', 'reports', 'alignment');
  const publicDir = path.join(__dirname, '..', 'public', 'reports', 'alignment');
  const repoRoot = path.resolve(__dirname, '..');

  // Adjust for script location in automation/
  const dataOut = path.join(repoRoot, 'data', 'reports', 'alignment');
  const publicOut = path.join(repoRoot, 'public', 'reports', 'alignment');

  await fs.mkdirs(dataOut);
  await fs.mkdirs(publicOut);

  try {
    const html = await fetchHtml(CHAT_URL);
    const conversation = extractConversation(html);
    const output = {
      source: 'chat',
      url: CHAT_URL,
      fetchedAt: now.toISOString(),
      conversation
    };
    const file = path.join(dataOut, `chat-${stamp}.json`);
    const latest = path.join(publicOut, 'chat-latest.json');
    await fs.writeJson(file, output, { spaces: 2 });
    await fs.writeJson(latest, output, { spaces: 2 });
    console.log(`[alignment-chat-fetcher] Saved ${file}`);
  } catch (err) {
    console.error('[alignment-chat-fetcher] Error:', err.message);
    const file = path.join(publicOut, 'chat-latest.json');
    await fs.writeJson(file, { error: true, message: String(err) }, { spaces: 2 });
    process.exitCode = 1;
  }
}

main();


