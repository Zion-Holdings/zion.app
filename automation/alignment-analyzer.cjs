#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function readText(fp) { return fs.existsSync(fp) ? fs.readFileSync(fp, 'utf8') : ''; }

function extractActionItems(chatText, docText) {
  const items = [];
  const regex = /(?:-\s+|\d+\.\s+)(.+)/g;
  let m;
  while ((m = regex.exec(chatText)) !== null) items.push(m[1].trim());
  while ((m = regex.exec(docText)) !== null) items.push(m[1].trim());
  return Array.from(new Set(items)).filter(Boolean);
}

function main() {
  const outDir = path.join(__dirname, '..', 'data', 'reports', 'alignment');
  const chat = readText(path.join(outDir, 'chat-raw.txt'));
  const doc = readText(path.join(outDir, 'google-doc.txt'));
  const crawl = readText(path.join(outDir, 'site-crawl.json'));

  const actions = extractActionItems(chat, doc);
  const report = {
    timestamp: new Date().toISOString(),
    counts: { actions: actions.length, pages: JSON.parse(crawl || '[]').length },
    actions
  };
  fs.writeFileSync(path.join(outDir, 'alignment-report.json'), JSON.stringify(report, null, 2));
  console.log('Generated alignment-report.json');
}

main();


