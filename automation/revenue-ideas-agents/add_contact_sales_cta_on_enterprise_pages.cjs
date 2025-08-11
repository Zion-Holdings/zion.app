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
const files = (data.candidateFiles || []).filter(f => /services|products|enterprise|solutions/.test(f)).slice(0, 30);
const content = files.map(f => '- Add Contact Sales CTA to ' + f).join('\n');
writeProposal('contact-sales-cta', 'Recommend adding Contact Sales CTA to:\n' + content + '\n\nSuggested snippet:\n<section className=\"bg-blue-50 border border-blue-200 rounded-xl p-6 my-8\">\n  <h3 className=\"text-xl font-semibold\">Have enterprise needs?</h3>\n  <p className=\"mt-2\">Chat with our solution architects to scope your project.</p>\n  <a href=\"/contact\" className=\"btn btn-secondary mt-4\">Contact sales</a>\n</section>\n');
