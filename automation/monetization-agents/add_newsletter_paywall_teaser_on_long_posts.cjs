#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const INPUT = path.join(ROOT, 'data', 'reports', 'monetization', 'monetization-actions.json');
const PROPOSALS_DIR = path.join(ROOT, 'data', 'reports', 'monetization', 'proposals');
if (!fs.existsSync(PROPOSALS_DIR)) fs.mkdirSync(PROPOSALS_DIR, { recursive: true });
function writeProposal(title, content) {
  const fp = path.join(PROPOSALS_DIR, title + '.md');
  const lines = ['# ' + title, '', content, ''];
  fs.writeFileSync(fp, lines.join('\n'));
  console.log('Proposal written:', fp);
}
const data = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
const blogPosts = (data.candidateFiles || []).filter(f => f.startsWith('pages/blog/')).slice(0, 50);
const content = blogPosts.map(f => '- Add newsletter teaser to ' + f).join('\n');
writeProposal('newsletter-paywall-teaser', 'Recommend adding newsletter teaser to long posts:\n' + content + '\n\nSuggested snippet:\n<section className=\"bg-purple-50 border border-purple-200 rounded-xl p-6 my-8\">\n  <h3 className=\"text-xl font-semibold\">Enjoying this deep-dive?</h3>\n  <p className=\"mt-2\">Get member-only guides and templates straight to your inbox.</p>\n  <a href=\"/newsletter\" className=\"btn btn-accent mt-4\">Subscribe</a>\n</section>\n');
