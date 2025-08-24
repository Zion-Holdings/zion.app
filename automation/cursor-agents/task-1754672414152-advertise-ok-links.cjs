#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const LOG = path.join(__dirname, '..', 'logs', 'advertise-ok-links.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });
function log(m){ const line = '[' + new Date().toISOString() + '] ' + m; console.log(line); fs.appendFileSync(LOG, line + '
'); }
async function main(){
  const links = [
  "https://ziontechgroup.com/",
  "https://ziontechgroup.com/services",
  "https://ziontechgroup.com/about",
  "https://ziontechgroup.com/contact",
  "https://ziontechgroup.com/products",
  "https://ziontechgroup.com/blog"
];
  log('📣 Advertising links count: ' + links.length);
  const outDir = path.join(__dirname, '..', '..', 'data', 'reports', 'marketing');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const md = ['# Advertised Links', '', ...links.map(l => '- ' + l)].join('
');
  fs.writeFileSync(path.join(outDir, 'advertised-links.md'), md);
  log('✅ Wrote advertised links markdown');
}
main().catch(e=>{ console.error(e); process.exit(1); });
