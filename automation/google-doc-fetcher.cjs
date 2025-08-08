#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function main() {
  const configPath = path.join(__dirname, 'alignment-config.json');
  const cfg = fs.existsSync(configPath)
    ? JSON.parse(fs.readFileSync(configPath, 'utf8'))
    : { googleDocId: process.env.ALIGN_GOOGLE_DOC_ID };

  const docId = cfg.googleDocId || process.env.ALIGN_GOOGLE_DOC_ID;
  if (!docId) {
    console.error('No googleDocId configured');
    process.exit(1);
  }
  const exportUrl = `https://docs.google.com/document/d/${docId}/export?format=txt`;
  const outDir = path.join(__dirname, '..', 'data', 'reports', 'alignment');
  fs.mkdirSync(outDir, { recursive: true });
  const { data } = await axios.get(exportUrl, { timeout: 20000 });
  fs.writeFileSync(path.join(outDir, 'google-doc.txt'), data);
  console.log('Saved google doc text');
}

main().catch((e) => {
  console.error('google-doc-fetcher failed:', e.message);
  process.exit(1);
});


