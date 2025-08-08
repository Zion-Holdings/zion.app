#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'homepage-promo');
const PROPOSALS_DIR = path.join(REPORT_DIR, 'proposals');
const STATE_FILE = path.join(REPORT_DIR, 'known-pages.json');
const PAGES_DIR = path.join(__dirname, '..', 'pages');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function listPages(baseDir) {
  const pages = [];
  function walk(dir, rel = '') {
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      const relPath = path.join(rel, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        if (entry === 'api') continue;
        walk(full, relPath);
      } else if (entry.endsWith('.tsx') || entry.endsWith('.ts') || entry.endsWith('.jsx') || entry.endsWith('.js')) {
        const base = path.basename(entry, path.extname(entry));
        if (base.startsWith('_')) continue; // _app, _document
        pages.push('/' + relPath
          .replace(/index\.(tsx|ts|jsx|js)$/,'')
          .replace(/\.(tsx|ts|jsx|js)$/,'')
          .replace(/\\/g,'/')
        );
      }
    }
  }
  if (fs.existsSync(baseDir)) walk(baseDir);
  return Array.from(new Set(pages.map(p => p.replace(/\/$/, '') || '/'))).sort();
}

function main() {
  ensureDir(REPORT_DIR);
  ensureDir(PROPOSALS_DIR);
  const allPages = listPages(PAGES_DIR);
  const known = fs.existsSync(STATE_FILE) ? JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')) : { pages: [] };
  const knownSet = new Set(known.pages || []);
  const newPages = allPages.filter(p => !knownSet.has(p) && p !== '');

  const actions = [];
  if (newPages.length > 0) {
    actions.push('add_home_cards_for_new_pages');
    actions.push('update_navigation_for_new_pages');
    actions.push('advertise_new_features_in_home');
  } else {
    actions.push('periodic_homepage_refresh_review');
  }

  const report = {
    timestamp: new Date().toISOString(),
    discoveredPages: allPages,
    newPages,
    actions
  };
  fs.writeFileSync(path.join(REPORT_DIR, 'homepage-promo-actions.json'), JSON.stringify(report, null, 2));

  // Write a human-readable proposal draft
  const proposalMd = [
    '# Homepage Promotion Proposal',
    '',
    `Generated at: ${new Date().toISOString()}`,
    '',
    '## New Pages Detected',
    ...(newPages.length ? newPages : ['(none)']).map(p => `- ${p}`),
    '',
    '## Recommended Homepage Updates',
    '- Add hero/feature cards linking to new pages',
    '- Update top navigation and footer links',
    '- Add promotional badges and short descriptions',
    '- Include call-to-action buttons',
  ].join('\n');
  fs.writeFileSync(path.join(PROPOSALS_DIR, `proposal-${Date.now()}.md`), proposalMd);

  // Update known pages state for next runs
  fs.writeFileSync(STATE_FILE, JSON.stringify({ pages: allPages }, null, 2));

  console.log(`Homepage promo analyzer: ${actions.length} action(s), ${newPages.length} new page(s)`);
}

main();


