#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const GEN_DIR = path.join(__dirname, '..', 'generated', 'abtests');
function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function main(){
  ensureDir(GEN_DIR);
  const variants = ['headline', 'cta', 'hero'];
  for(const v of variants){
    const fp = path.join(GEN_DIR, 'variant-' + v + '.md');
    if(!fs.existsSync(fp)) fs.writeFileSync(fp, '# AB Test Variant: ' + v + '
- hypothesis: improve conversion via ' + v + ' change
');
  }
  console.log('Generated AB test variants in', GEN_DIR);
}
main();
