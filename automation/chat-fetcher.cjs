#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

async function main() {
  const configPath = path.join(__dirname, 'alignment-config.json');
  const cfg = fs.existsSync(configPath)
    ? JSON.parse(fs.readFileSync(configPath, 'utf8'))
    : { chatUrl: process.env.ALIGN_CHAT_URL };

  const url = cfg.chatUrl || process.env.ALIGN_CHAT_URL;
  if (!url) {
    console.error('No chatUrl configured');
    process.exit(1);
  }
  const outDir = path.join(__dirname, '..', 'data', 'reports', 'alignment');
  fs.mkdirSync(outDir, { recursive: true });

  const { data } = await axios.get(url, { timeout: 20000 });
  const $ = cheerio.load(data);
  const text = $('body').text();
  fs.writeFileSync(path.join(outDir, 'chat-raw.txt'), text);
  console.log('Saved chat transcript');
}

main().catch((e) => {
  console.error('chat-fetcher failed:', e.message);
  process.exit(1);
});


