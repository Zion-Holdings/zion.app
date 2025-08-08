#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'homepage-promo', 'homepage-promo-actions.json');
const OUT_DIR = path.join(__dirname, 'homepage-promo-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

const AGENTS = {
  add_home_cards_for_new_pages: `#!/usr/bin/env node\nconsole.log('Adding homepage cards for new pages...');\n// TODO: generate components for new page cards and insert into pages/index.tsx` ,
  update_navigation_for_new_pages: `#!/usr/bin/env node\nconsole.log('Updating navigation and footer for new pages...');\n// TODO: edit components/layout/*Navigation*.tsx and EnhancedFooter.tsx` ,
  advertise_new_features_in_home: `#!/usr/bin/env node\nconsole.log('Advertising new features on homepage...');\n// TODO: append badges/sections in pages/enhanced-home.tsx` ,
  periodic_homepage_refresh_review: `#!/usr/bin/env node\nconsole.log('Running periodic homepage refresh review...');\n// TODO: check for stale promos and rotate featured sections` ,
};

function main() {
  if (!fs.existsSync(REPORT)) {
    console.error('No homepage promo report found');
    process.exit(1);
  }
  ensureDir(OUT_DIR);
  const { actions } = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const created = [];
  for (const action of actions) {
    const code = AGENTS[action];
    if (!code) continue;
    const fp = path.join(OUT_DIR, `${action}.cjs`);
    if (!fs.existsSync(fp)) {
      fs.writeFileSync(fp, code + '\n');
      try { fs.chmodSync(fp, 0o755); } catch {}
      created.push(fp);
    }
  }
  const registry = path.join(__dirname, 'logs', 'homepage-promo-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Created ${created.length} homepage promo agents`);
}

main();


