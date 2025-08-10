#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFiles(dir) {
  const res = [];
  if (!fs.existsSync(dir)) return res;
  (function walk(d){
    for (const n of fs.readdirSync(d)) {
      const p = path.join(d, n);
      const st = fs.statSync(p);
      if (st.isDirectory()) walk(p); else res.push(p);
    }
  })(dir);
  return res;
}

function svgFor(title) {
  const safe = title.replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>
  <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='#0ea5e9'/><stop offset='100%' stop-color='#6366f1'/></linearGradient></defs>
  <rect width='100%' height='100%' fill='url(#g)'/>
  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter,ui-sans-serif' font-size='64' fill='white'>
    ${safe}
  </text>
</svg>`;
}

function main(){
  const targets = [path.join(process.cwd(),'docs','lore'), path.join(process.cwd(),'docs','storyboards'), path.join(process.cwd(),'docs','prompts')];
  const outDir = path.join(process.cwd(),'public','og');
  fs.mkdirSync(outDir, { recursive: true });
  let count = 0;
  for (const dir of targets) {
    for (const f of listFiles(dir)) {
      const base = f.replace(process.cwd()+path.sep,'').replace(/[\\/]/g,'-').replace(/\.[^.]+$/, '');
      const title = path.basename(f);
      const svg = svgFor(title);
      fs.writeFileSync(path.join(outDir, `${base}.svg`), svg, 'utf8');
      count++;
    }
  }
  console.log('Generated OG placeholders:', count);
}

main();