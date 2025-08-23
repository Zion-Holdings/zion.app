#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function main() {
  const cfgPath = path.join(__dirname, 'alignment-config.json');
  const cfg = fs.existsSync(cfgPath) ? JSON.parse(fs.readFileSync(cfgPath, 'utf8')) : {};
  const docUrl = cfg.googleDocUrl || process.env.ALIGN_GOOGLE_DOC_URL;
  const outDir = path.join(__dirname, '..', 'data', 'reports', 'alignment');
  fs.mkdirSync(outDir, { recursive: true });
  if (!docUrl) {
    fs.writeFileSync(path.join(outDir, 'google-doc.txt'), '');
    console.log('No google doc configured; wrote empty google-doc.txt');
    return;
  }
  try {
    const { data } = await axios.get(docUrl, { timeout: 20000 });
    fs.writeFileSync(path.join(outDir, 'google-doc.txt'), typeof data === 'string' ? data : JSON.stringify(data));
    console.log('Saved google doc content');
  } catch (e) {
    fs.writeFileSync(path.join(outDir, 'google-doc.txt'), '');
    console.log('Failed to fetch google doc; wrote empty file');
  }
}

main();


