#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const GEN_DIR = path.join(__dirname, '..', 'generated', 'copy');
function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function main(){
  ensureDir(GEN_DIR);
  const files = [
    { name: 'hero-copy.md', content: 'Improve hero value proposition and clarity.' },
    { name: 'pricing-copy.md', content: 'Clarify pricing tiers and benefits.' },
    { name: 'cta-copy.md', content: 'Test action-oriented CTA phrasing.' }
  ];
  for(const f of files){ const fp = path.join(GEN_DIR, f.name); if(!fs.existsSync(fp)) fs.writeFileSync(fp, f.content + '
'); }
  console.log('Generated conversion copy suggestions in', GEN_DIR);
}
main();
