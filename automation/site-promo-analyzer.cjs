#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LINK_REPORT = path.join(__dirname, '..', 'data', 'reports', 'link-monitor', 'site-link-report.json');
const HOMEPAGE_PROMO_DIR = path.join(__dirname, '..', 'data', 'reports', 'homepage-promo');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function loadDiscovered() {
  if (!fs.existsSync(LINK_REPORT)) return [];
  const data = JSON.parse(fs.readFileSync(LINK_REPORT, 'utf8'));
  const urls = (data.discovered || []).filter(Boolean);
  // Convert absolute URLs to paths
  return urls.map(u => {
    try { const url = new URL(u); return url.pathname.replace(/\/$/, '') || '/'; } catch { return null; }
  }).filter(Boolean);
}

function main() {
  ensureDir(HOMEPAGE_PROMO_DIR);
  const discoveredPaths = Array.from(new Set(loadDiscovered())).slice(0, 200);
  const actions = ['add_home_cards_for_new_pages', 'update_navigation_for_new_pages', 'advertise_new_features_in_home'];

  const outPath = path.join(HOMEPAGE_PROMO_DIR, 'homepage-promo-actions.json');
  const report = {
    timestamp: new Date().toISOString(),
    discoveredPages: discoveredPaths,
    newPages: discoveredPaths, // treated as candidates to ensure visibility
    actions
  };
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Site promo analyzer: exported ${discoveredPaths.length} page(s) to homepage promo report`);
}

main();


