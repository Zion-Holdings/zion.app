#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SUMMARY = path.join(__dirname, '..', 'AUTOMATION_SYSTEMS_SUMMARY.md');
const PKG = path.join(__dirname, '..', 'package.json');
const OUT_DIR = path.join(__dirname, '..', 'data', 'reports', 'homepage');

function ensureDir(p){ if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(OUT_DIR);

function slurp(p){ try { return fs.readFileSync(p, 'utf8'); } catch { return ''; } }

function parseFeaturesFromSummary(md){
  const features = [];
  const lines = md.split(/\r?\n/);
  for (let i=0;i<lines.length;i++){
    const line = lines[i];
    const m = line.match(/^###\s+\d+\.\s+(.+?)$/);
    if (m) {
      const title = m[1].trim();
      // Next few lines may include File and Purpose
      let purpose = '';
      for (let j=i+1;j<Math.min(i+8, lines.length); j++){
        const pj = lines[j].trim();
        if (pj.startsWith('- **Purpose**')) {
          purpose = pj.replace(/^- \*\*Purpose\*\*:\s*/, '').trim();
          break;
        }
      }
      features.push({ title, description: purpose });
    }
  }
  return features;
}

function parseBenefits(md){
  const blocks = [];
  const sections = ['Continuous Improvement','Error Prevention','Developer Experience','App Diversification'];
  for (const sec of sections){
    const re = new RegExp(`^###\\s+${sec}\\s*$`, 'm');
    const m = md.match(re);
    if (m){
      const idx = md.indexOf(m[0]);
      const tail = md.slice(idx).split('\n').slice(1,20);
      const items = [];
      for (const l of tail){
        const mm = l.match(/^\-\s+\*\*(.+?)\*\*:\s*(.+)$/);
        if (mm) items.push({ name: mm[1], blurb: mm[2] });
        if (l.startsWith('##')) break;
      }
      if (items.length) blocks.push({ section: sec, items });
    }
  }
  return blocks;
}

function parseScripts(pkgJson){
  const scripts = pkgJson.scripts || {};
  const interesting = Object.keys(scripts).filter(k => /(orchestrator|cron|start|audit|links|marketing|autonomous)/i.test(k));
  return interesting.slice(0, 24).map(k => ({ key: k, command: scripts[k] }));
}

(function main(){
  const md = slurp(SUMMARY);
  const pkg = JSON.parse(slurp(PKG) || '{}');
  const features = parseFeaturesFromSummary(md).slice(0, 12);
  const benefits = parseBenefits(md);
  const scripts = parseScripts(pkg);
  const payload = {
    timestamp: new Date().toISOString(),
    features,
    benefits,
    scripts
  };
  fs.writeFileSync(path.join(OUT_DIR, 'homepage-features.json'), JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'homepage-features-latest.json'), JSON.stringify(payload, null, 2));
  console.log('Homepage features analyzed.');
})();