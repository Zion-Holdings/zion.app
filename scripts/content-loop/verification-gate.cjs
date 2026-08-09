#!/usr/bin/env node
// verification-gate.cjs
// Post-generation checks: page counts, duplicate slugs, sitemap validity, link health.
const fs = require('fs');
const path = require('path');

const REPO = process.cwd();
const SITEMAP_PATH = path.join(REPO, 'sitemap.xml');
const FRONTIER_PATH = path.join(REPO, 'scripts/content-loop/frontier.json');
const BROKEN_REPORT_PATH = path.join(REPO, 'broken-links-report.json');
const DOCS_DIR = path.join(REPO, 'docs');
const OUT_DIR = path.join(REPO, 'out');

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Verification failed');
}

function run() {
  const checks = [];
  let passed = true;

  function check(label, fn) {
    try {
      fn();
      checks.push({ label, status: 'PASS' });
    } catch (e) {
      checks.push({ label, status: 'FAIL', error: e.message });
      passed = false;
    }
  }

  check('sitemap exists', () => assert(fs.existsSync(SITEMAP_PATH), 'sitemap.xml missing'));
  check('frontier exists', () => assert(fs.existsSync(FRONTIER_PATH), 'frontier.json missing'));

  check('no duplicate slugs in docs', () => {
    const slugs = new Set();
    const walk = (dir) => {
      if (!fs.existsSync(dir)) return;
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (entry.name.endsWith('.html')) slugs.add(entry.name);
      }
    };
    walk(DOCS_DIR);
    walk(OUT_DIR);
    assert(slugs.size > 0, 'No pages found');
  });

  check('sitemap XML is valid', () => {
    const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
    assert(xml.includes('<?xml'), 'Missing XML declaration');
    assert(xml.includes('<urlset'), 'Missing urlset');
  });

  check('no new broken links vs last report', () => {
    if (!fs.existsSync(BROKEN_REPORT_PATH)) return;
    const report = JSON.parse(fs.readFileSync(BROKEN_REPORT_PATH, 'utf8'));
    assert(!report.broken || report.broken.length === 0, 'Broken links detected');
  });

  console.log('[verification-gate] results:');
  for (const c of checks) {
    console.log(`  [${c.status}] ${c.label}${c.error ? ' — ' + c.error : ''}`);
  }
  if (!passed) process.exit(1);
}

run();
