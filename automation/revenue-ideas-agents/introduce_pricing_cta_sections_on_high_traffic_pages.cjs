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
const data = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
const files = (data.candidateFiles || []).slice(0, 20);
const content = files.map(f => '- Add Pricing CTA section to ' + f).join('\n');
writeProposal('pricing-cta-on-top-pages', 'Recommend adding pricing CTA sections to:\n' + content + '\n\nSuggested snippet:\n<section className=\"bg-amber-50 border border-amber-200 rounded-xl p-6 my-8\">\n  <h3 className=\"text-xl font-semibold\">Ready to unlock more value?</h3>\n  <p className=\"mt-2\">Explore transparent pricing and tailored plans.</p>\n  <a href=\"/pricing\" className=\"btn btn-primary mt-4\">View pricing</a>\n</section>\n');
