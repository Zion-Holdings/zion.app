#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'seo-optimizer.log');
const reportFile = path.join(logsDir, 'seo-report.json');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  console.log(msg);
  fs.appendFileSync(logFile, line);
}

function scanPages(rootDir) {
  const results = [];
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      const s = fs.statSync(full);
      if (s.isDirectory()) walk(full);
      else if (/\.(tsx|ts|jsx|js)$/.test(item)) {
        const content = fs.readFileSync(full, 'utf8');
        const issues = [];
        if (!content.includes('<title>')) issues.push('missing-title');
        if (!/meta[^>]+name=["']description["']/i.test(content)) issues.push('missing-description');
        if (!/og:/i.test(content)) issues.push('missing-og');
        if (!/application\/ld\+json/i.test(content)) issues.push('missing-structured-data');
        if (issues.length) {
          results.push({ file: full, issues });
        }
      }
    }
  };
  walk(rootDir);
  return results;
}

function main() {
  ensureDir(logsDir);
  log('Starting SEO optimizer...');
  const pagesRoot = path.join(__dirname, '..', 'pages');
  const issues = scanPages(pagesRoot);
  fs.writeFileSync(reportFile, JSON.stringify({ timestamp: new Date().toISOString(), issues }, null, 2));
  log(`Found ${issues.length} file(s) with SEO issues`);
}

if (require.main === module) main();
