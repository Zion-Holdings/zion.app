#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const CFG = require('./spec-dev-config.json');
const OUT_DIR = path.join(__dirname, '..', 'data', 'reports', 'spec-dev');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

async function main() {
  ensureDir(OUT_DIR);
  try {
    const res = await axios.get(CFG.chatUrl, { timeout: 20000 });
    const rawPath = path.join(OUT_DIR, 'chat-raw.html');
    fs.writeFileSync(rawPath, res.data);
    console.log(`Spec-dev chat fetched → ${rawPath}`);
  } catch (e) {
    console.log('Spec-dev chat fetch failed:', e.message);
  }
}

main();


