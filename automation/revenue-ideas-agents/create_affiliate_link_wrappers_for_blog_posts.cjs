#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const INPUT = path.join(ROOT, 'data', 'reports', 'revenue-ideas', 'revenue-ideas-actions.json');
const PROPOSALS_DIR = path.join(ROOT, 'data', 'reports', 'revenue-ideas', 'proposals');
if (!fs.existsSync(PROPOSALS_DIR)) fs.mkdirSync(PROPOSALS_DIR, { recursive: true });
function writeProposal(title, content) {
  const fp = path.join(PROPOSALS_DIR, title + '.md');
  const lines = ['# ' + title, '', content, ''];
  fs.writeFileSync(fp, lines.join('\n'));
  console.log('Proposal written:', fp);
}
const wrapperDir = path.join(ROOT, 'utils', 'monetization');
if (!fs.existsSync(wrapperDir)) fs.mkdirSync(wrapperDir, { recursive: true });
const utilPath = path.join(wrapperDir, 'affiliate.ts');
if (!fs.existsSync(utilPath)) {
  fs.writeFileSync(utilPath, "export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {\n  if (!code) return url;\n  const u = new URL(url);\n  u.searchParams.set('ref', code);\n  return u.toString();\n}\n");
}
writeProposal('affiliate-link-wrapper', 'Created utils/monetization/affiliate.ts. Use affiliate(url, code) for outbound blog links.');
