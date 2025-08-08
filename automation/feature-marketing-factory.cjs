#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'feature-marketing', 'feature-marketing-actions.json');
const OUT_DIR = path.join(__dirname, 'feature-marketing-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

const AGENTS = {
  ensure_home_hero_promotes_all_features: `#!/usr/bin/env node\nconsole.log('Ensuring home hero promotes all features...');\n// TODO: update pages/enhanced-home.tsx hero with feature CTAs` ,
  generate_feature_sections: `#!/usr/bin/env node\nconsole.log('Generating feature sections on homepage...');\n// TODO: append sections/cards for features with links` ,
  refresh_blog_teasers: `#!/usr/bin/env node\nconsole.log('Refreshing blog teasers related to features...');\n// TODO: update pages/blog/index.tsx teasers` ,
  update_sitemap_after_feature_pages: `#!/usr/bin/env node\nconsole.log('Updating sitemap after feature page generation...');\n// TODO: run scripts/generate-sitemap.mjs` ,
};

function main() {
  if (!fs.existsSync(REPORT)) {
    console.error('No feature-marketing report found');
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
  const registry = path.join(__dirname, 'logs', 'feature-marketing-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Created ${created.length} feature marketing agents`);
}

main();


