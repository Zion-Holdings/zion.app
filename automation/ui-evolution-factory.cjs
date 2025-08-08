#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'ui-evolution', 'ui-evolution-analysis.json');
const OUT_DIR = path.join(__dirname, 'ui-evolution-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function makeAgent(name, code) {
  const filePath = path.join(OUT_DIR, `${name}.cjs`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, code);
    try { fs.chmodSync(filePath, 0o755); } catch {}
  }
  return filePath;
}

function createAgentCode(issue, file) {
  const safeComment = issue.replace(/`/g, '\\`');
  const displayFile = file.replace(/`/g, '\\`');
  return `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('UI Evolution agent addressing ${safeComment} in ${displayFile}');
// NOTE: This agent is intentionally conservative and uses regex-driven suggestions with a no-op fallback.
// In a full implementation, this would apply a codemod or structured AST transform.
const target = path.resolve('${displayFile}');
if (!fs.existsSync(target)) process.exit(0);
let src = fs.readFileSync(target, 'utf8');
let changed = false;

switch ('${safeComment}') {
  case 'missing_enhanced_layout': {
    if (!/EnhancedLayout/.test(src)) {
      // Suggest wrapping default export with EnhancedLayout
      // This is left as a no-op to avoid breaking SSR; orchestration can open a PR with manual review.
    }
    break;
  }
  case 'missing_enhanced_navigation': {
    if (!/EnhancedNavigation|InteractiveNavigation/.test(src)) {
      // Suggest import and insert placeholder component comment
    }
    break;
  }
  case 'missing_nav_landmark': {
    if (!/<nav[\s>]/i.test(src)) {
      // Suggest adding <nav> landmark around navigation elements
    }
    break;
  }
  case 'missing_skip_link': {
    if (!/skip-link|href="#main"/.test(src)) {
      // Suggest adding visually-hidden skip link to #main
    }
    break;
  }
  case 'missing_breadcrumbs': {
    if (!/breadcrumb/i.test(src)) {
      // Suggest breadcrumb region
    }
    break;
  }
  case 'missing_head_import':
  case 'missing_viewport_meta':
  case 'no_active_link_highlight':
  case 'missing_mobile_menu':
  case 'no_dark_theme_support': {
    // Suggestions only; no automatic edits to avoid regressions.
    break;
  }
}

if (changed) {
  fs.writeFileSync(target, src);
  console.log('Applied minimal safe change for ${safeComment} in ${displayFile}');
} else {
  console.log('No automatic change applied for ${safeComment} in ${displayFile}');
}
`;
}

function main() {
  if (!fs.existsSync(REPORT)) {
    console.error('No UI evolution report found');
    process.exit(1);
  }
  ensureDir(OUT_DIR);
  const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const created = [];
  for (const item of report.items.slice(0, 200)) {
    const file = item.file;
    for (const issue of item.issues) {
      const agentName = `ui-evo-${issue}-${path.basename(file).replace(/\W+/g, '-')}`.toLowerCase();
      const code = createAgentCode(issue, file);
      created.push(makeAgent(agentName, code));
    }
  }
  const registry = path.join(__dirname, 'logs', 'ui-evolution-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), agents: created }, null, 2));
  console.log(`Created ${created.length} UI evolution agents`);
}

if (require.main === module) {
  main();
}