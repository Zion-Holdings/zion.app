#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const REPORT_DIR = path.join(process.cwd(), 'data', 'reports', 'sitemap');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });
const LOG = path.join(LOG_DIR, 'sitemap-keeper.log');

function log(m){ const line = `[${new Date().toISOString()}] ${m}\n`; console.log(m); fs.appendFileSync(LOG, line); }

function run(cmd){
  log(`▶ ${cmd}`);
  const [bin, ...args] = cmd.split(' ');
  const r = spawnSync(bin, args, { stdio: 'pipe', encoding: 'utf8' });
  if (r.stdout) fs.appendFileSync(LOG, r.stdout);
  if (r.stderr) fs.appendFileSync(LOG, r.stderr);
  if (r.status !== 0) throw new Error(`Command failed: ${cmd}`);
}

(function main(){
  log('🚀 Sitemap keeper starting');
  const before = fs.existsSync('public/sitemap.xml') ? fs.readFileSync('public/sitemap.xml', 'utf8') : '';
  try { run('npm run sitemap'); } catch (e) { log(`❌ sitemap generation failed: ${e.message}`); process.exit(1); }
  const after = fs.existsSync('public/sitemap.xml') ? fs.readFileSync('public/sitemap.xml', 'utf8') : '';
  const changed = before !== after;
  const report = { timestamp: new Date().toISOString(), changed, length: after.length };
  fs.writeFileSync(path.join(REPORT_DIR, `sitemap-${new Date().toISOString().replace(/[-:TZ.]/g,'').slice(0,12)}.json`), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(REPORT_DIR, 'sitemap-latest.json'), JSON.stringify(report, null, 2));
  log(`📄 Sitemap report written, changed=${changed}`);
})();