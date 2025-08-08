#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'feature-marketing');
const PAGES_DIR = path.join(__dirname, '..', 'pages');
const COMPONENTS_DIR = path.join(__dirname, '..', 'components');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function scanFeatures() {
  const features = [];
  const candidates = [
    path.join(PAGES_DIR, 'enhanced-home.tsx'),
    path.join(COMPONENTS_DIR, 'layout', 'EnhancedNavigation.tsx'),
    path.join(COMPONENTS_DIR, 'layout', 'EnhancedFooter.tsx'),
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      const src = fs.readFileSync(p, 'utf8');
      if (src.includes('Futuristic') || src.includes('Enhanced') || src.includes('AI')) {
        features.push({ file: p, hint: 'marketing_hook' });
      }
    }
  }
  return features;
}

function detectActions() {
  const actions = new Set([
    'ensure_home_hero_promotes_all_features',
    'generate_feature_sections',
    'refresh_blog_teasers',
    'update_sitemap_after_feature_pages',
  ]);
  return Array.from(actions);
}

function main() {
  ensureDir(REPORT_DIR);
  const features = scanFeatures();
  const actions = detectActions();
  const report = { timestamp: new Date().toISOString(), actions, features };
  fs.writeFileSync(path.join(REPORT_DIR, 'feature-marketing-actions.json'), JSON.stringify(report, null, 2));
  console.log(`Feature marketing analyzer completed: ${actions.length} action(s)`);
}

main();


