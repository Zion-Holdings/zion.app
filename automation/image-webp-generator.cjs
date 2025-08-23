#!/usr/bin/env node
/* Convert public/**/*.{png,jpg,jpeg} to webp and write data/assets/webp-map.json */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
let sharp;
try { sharp = require('sharp'); } catch(e){
  console.error('sharp not installed. Install devDependency sharp.');
  process.exit(1);
}

const files = glob.sync('public/**/*.{png,jpg,jpeg}', { nocase: true });
const map = {};
(async () => {
  for (const f of files){
    const out = f.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    await sharp(f).webp({ quality: 80 }).toFile(out);
    map[f] = out;
    console.log('Converted', f, '->', out);
  }
  const outDir = path.join('data','assets');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir,'webp-map.json'), JSON.stringify(map, null, 2));
  console.log('Wrote mapping to data/assets/webp-map.json');
})().catch(e=>{ console.error(e); process.exit(1); });