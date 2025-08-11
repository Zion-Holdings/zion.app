#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'meta-tags-audit');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function listPages(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listPages(full));
    else if (/\.(tsx|jsx)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function has(tag, name, content) {
  const re = new RegExp(`<${tag}[^>]*\\bname=["']${name}["'][^>]*>`, 'i');
  return re.test(content);
}

function hasProp(tag, prop, content) {
  const re = new RegExp(`<${tag}[^>]*\\b${prop}=["'][^"']+["'][^>]*>`, 'i');
  return re.test(content);
}

(function main() {
  const files = listPages(PAGES_DIR);
  const issues = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const inHead = /<Head[\s\S]*?<\/Head>/gi;
    const headBlocks = Array.from(content.matchAll(inHead)).map(m => m[0]);
    if (headBlocks.length === 0) {
      issues.push({ file: path.relative(ROOT, file), problem: 'Missing <Head> block', missing: ['meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:description"]', 'meta[property="og:image"]'] });
      continue;
    }
    const head = headBlocks.join('\n');
    const missing = [];
    if (!has('meta', 'description', head)) missing.push('meta[name="description"]');
    if (!/meta[^>]*\bproperty=["']og:title["']/i.test(head)) missing.push('meta[property="og:title"]');
    if (!/meta[^>]*\bproperty=["']og:description["']/i.test(head)) missing.push('meta[property="og:description"]');
    if (!/meta[^>]*\bproperty=["']og:image["']/i.test(head)) missing.push('meta[property="og:image"]');
    if (!hasProp('meta', 'name="twitter:card"', head) && !/meta[^>]*\bname=["']twitter:card["']/i.test(head)) missing.push('meta[name="twitter:card"]');

    if (missing.length > 0) {
      issues.push({ file: path.relative(ROOT, file), problem: 'Missing meta tags', missing });
    }
  }

  const report = { generatedAt: new Date().toISOString(), totalPages: files.length, totalIssues: issues.length, issues };
  fs.writeFileSync(path.join(REPORT_DIR, 'report.json'), JSON.stringify(report, null, 2));

  const summary = [
    '# Meta Tags Audit',
    '',
    `Generated: ${new Date().toISOString()}`,
    `Pages scanned: ${files.length}`,
    `Pages with issues: ${issues.length}`,
    '',
    ...issues.slice(0, 100).map((it, idx) => `- [${idx+1}] ${it.file}: ${it.missing.join(', ')}`),
  ].join('\n');
  fs.writeFileSync(path.join(REPORT_DIR, 'summary.md'), summary);

  console.log(`Meta tags audit written to ${path.relative(ROOT, REPORT_DIR)}`);
})();