#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

const MODULES = [
  '/core/auth','/core/user','/core/marketplace','/core/payments','/core/messaging','/core/analytics','/core/roles','/core/talent','/core/client',
  '/ai/gpt','/ai/resume-generator','/ai/proposal-writer','/ai/contract-writer','/ai/assistant','/ai/prompts',
  '/dao/proposals','/dao/voting','/dao/quorum','/dao/staking','/dao/snapshot-integration',
  '/token/rewards','/token/pricing-engine','/token/escrow','/token/payout-engine','/token/wallet',
  '/academy/courses','/academy/certifications','/academy/quiz','/academy/video','/academy/ai-tutor',
  '/governance/manifesto','/governance/constitution','/governance/roadmap','/governance/changelog',
  '/deployments/multiverse','/deployments/subdomains','/deployments/config-templates','/deployments/environments',
  '/api/docs','/api/partners','/api/integrations','/api/webhooks'
];

const TEMPLATE_SECTIONS = [
  '## Purpose',
  '## Boundaries',
  '## Public API',
  '## Data & Storage',
  '## Owners',
];

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function ensureTemplate(readmePath) {
  let content = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : '';
  let changed = false;
  for (const section of TEMPLATE_SECTIONS) {
    if (!new RegExp('^' + section.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '$', 'm').test(content)) {
      content += `\n${section}\n\nTBD.\n`;
      changed = true;
    }
  }
  if (changed) fs.writeFileSync(readmePath, content);
  return changed;
}

function main() {
  let updates = 0;
  for (const m of MODULES) {
    const dir = path.join(ROOT, m);
    ensureDir(dir);
    const readme = path.join(dir, 'README.md');
    if (ensureTemplate(readme)) updates++;
  }
  console.log(`module-readme-template: ensured templates; updated ${updates} files`);
}

if (require.main === module) main();