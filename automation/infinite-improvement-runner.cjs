#!/usr/bin/env node
const { execSync } = require('child_process');

function run(cmd) {
  console.log(`$ ${cmd}`);
  try { execSync(cmd, { stdio: 'inherit' }); } catch (e) { console.log(`Command failed (continuing): ${cmd}`); }
}

// Core intelligent orchestrator
run('node automation/intelligent-orchestrator.cjs run intelligent');

// High-impact orchestrations
run('node automation/self-healing-orchestrator.cjs');
run('node automation/site-maintenance-orchestrator.cjs');
run('node automation/site-link-orchestrator.cjs');
run('node automation/revenue-ideas-orchestrator.cjs');
run('node automation/responsive-content-orchestrator.cjs');
run('node automation/ui-evolution-orchestrator.cjs');
run('node automation/instagram-marketing-orchestrator.cjs');
run('node automation/linkedin-marketing-orchestrator.cjs');
run('node automation/linkedin-pro-orchestrator.cjs');
run('node automation/saas-services-orchestrator.cjs');

// Content and changelog
run('node automation/seo-optimizer.cjs');
run('node automation/auto-changelog.cjs');

// Post-run: lint, type-check, build smoke
run('npm run lint');
run('npm run type-check');
run('npm run build');