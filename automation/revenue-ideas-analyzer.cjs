#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'revenue-ideas');
const REPORT_PATH = path.join(REPORT_DIR, 'revenue-ideas-actions.json');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function listFilesRecursive(dir, exts = ['.tsx', '.mdx', '.md']) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...listFilesRecursive(full, exts));
    else {
      const ext = path.extname(entry.name).toLowerCase();
      if (exts.includes(ext)) results.push(full);
    }
  }
  return results;
}

function discoverCandidatePages() {
  const pagesDir = path.join(__dirname, '..', 'pages');
  const blogDir = path.join(pagesDir, 'blog');
  const servicesDir = path.join(pagesDir, 'services');
  const productsDir = path.join(pagesDir, 'products');

  const candidates = [];
  const pushIfExists = (p) => { if (fs.existsSync(p)) candidates.push(p); };

  pushIfExists(path.join(pagesDir, 'index.tsx'));
  pushIfExists(path.join(pagesDir, 'enhanced-home.tsx'));
  pushIfExists(path.join(pagesDir, 'contact.tsx'));
  pushIfExists(path.join(pagesDir, 'about.tsx'));

  for (const d of [blogDir, servicesDir, productsDir]) candidates.push(...listFilesRecursive(d));
  return Array.from(new Set(candidates)).slice(0, 200);
}

function buildActions() {
  return [
    'introduce_pricing_cta_sections_on_high_traffic_pages',
    'add_contact_sales_cta_on_enterprise_pages',
    'generate_paid_consultation_booking_component',
    'create_affiliate_link_wrappers_for_blog_posts',
    'add_newsletter_paywall_teaser_on_long_posts'
  ];
}

function main() {
  ensureDir(REPORT_DIR);
  const candidates = discoverCandidatePages();
  const actions = buildActions();
  const report = {
    timestamp: new Date().toISOString(),
    candidateFiles: candidates.map((p) => path.relative(path.join(__dirname, '..'), p)),
    actions,
    notes: 'Revenue ideas analyzer output; downstream agents will propose/apply changes.'
  };
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`Revenue ideas analyzer exported ${candidates.length} candidate files and ${actions.length} actions.`);
}

main();