#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORT_FILE = path.join(ROOT, 'data', 'reports', 'internal-links', 'latest.json');

function readJson(p) { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; } }

function safeWrite(filePath, content) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

function tryFixHref(source, badHref, suggestedHref) {
  // Replace occurrences in href attributes and <Link href="...">
  let changed = source;
  const patterns = [
    new RegExp(`href\\s*=\\s*(?:\\{\\s*)?[\"']${badHref}[\"']`, 'g'),
    new RegExp(`<Link\\s+([^>]*?)href\\s*=\\s*(?:\\{\\s*)?[\"']${badHref}[\"']`, 'g'),
    new RegExp(`\\[([^\\]]+)\\]\\(${badHref}\\)`, 'g'),
  ];
  for (const re of patterns) {
    changed = changed.replace(re, (m) => m.replace(badHref, suggestedHref));
  }
  return changed;
}

function inferFix(href) {
  // Heuristics:
  // - if missing trailing slash for folder route (e.g., /reports/ai-trends -> /reports/ai-trends/ or /reports/ai-trends/index.html)
  // - if pointing to /reports/... that exists in public as /reports/.../index.html
  // - remove accidental double slashes (except leading)
  if (!href.startsWith('/')) return null;
  if (href.includes('//')) return href.replace(/\/\/+/, '/');
  const noHashOrQuery = href.split('#')[0].split('?')[0];
  // Try public folder index.html
  const asDirIndex = path.join(ROOT, 'public', noHashOrQuery.replace(/^\//, ''), 'index.html');
  if (fs.existsSync(asDirIndex)) return noHashOrQuery.endsWith('/') ? noHashOrQuery : noHashOrQuery + '/';
  // Try public direct html
  const asHtml = path.join(ROOT, 'public', noHashOrQuery.replace(/^\//, '') + '.html');
  if (fs.existsSync(asHtml)) return noHashOrQuery + '.html';
  return null;
}

function main() {
  const report = readJson(REPORT_FILE);
  if (!report) {
    console.error('No internal link report found at', REPORT_FILE);
    process.exit(1);
  }
  const fixes = [];
  const byFile = new Map();
  for (const issue of report.missing || []) {
    const sourceFile = path.join(ROOT, issue.sourceFile);
    let src; try { src = fs.readFileSync(sourceFile, 'utf8'); } catch { continue; }
    const suggestion = inferFix(issue.href);
    if (!suggestion) continue;
    const updated = tryFixHref(src, issue.href, suggestion);
    if (updated !== src) {
      byFile.set(sourceFile, updated);
      fixes.push({ sourceFile: issue.sourceFile, from: issue.href, to: suggestion });
    }
  }

  for (const [file, content] of byFile.entries()) {
    fs.writeFileSync(file, content, 'utf8');
  }

  const outDir = path.join(ROOT, 'data', 'reports', 'internal-links');
  fs.mkdirSync(outDir, { recursive: true });
  const summary = { timestamp: new Date().toISOString(), totalFixes: fixes.length, fixes };
  fs.writeFileSync(path.join(outDir, 'fixes-latest.json'), JSON.stringify(summary, null, 2));
  fs.writeFileSync(path.join(outDir, `fixes-${Date.now()}.json`), JSON.stringify(summary, null, 2));
  console.log(`Internal link fixes applied: ${fixes.length}`);
}

main();