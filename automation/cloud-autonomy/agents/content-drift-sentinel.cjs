const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function readMd() {
  const p = path.resolve(__dirname, '../../../docs/zion-protocol-whitepaper.md');
  return fs.readFileSync(p, 'utf8');
}

function extractHeadings(md) {
  return (md.match(/^##\s+.*$/mg) || []).map((h) => h.replace(/^##\s+/, '').trim());
}

function hash(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

(function main() {
  const startedAt = new Date().toISOString();
  const md = readMd();
  const headings = extractHeadings(md);
  const current = { headings, hash: hash(headings.join('|')) };

  const baselineDir = path.resolve(__dirname, '../../../data/cloud-automations/baselines');
  fs.mkdirSync(baselineDir, { recursive: true });
  const baselinePath = path.join(baselineDir, 'whitepaper-headings.json');

  let previous = null;
  if (fs.existsSync(baselinePath)) {
    previous = JSON.parse(fs.readFileSync(baselinePath, 'utf8'));
  }

  fs.writeFileSync(baselinePath, JSON.stringify(current, null, 2));

  const drift = previous ? previous.hash !== current.hash : false;
  const status = {
    name: 'Content Drift Sentinel',
    key: 'content-drift-sentinel',
    startedAt,
    finishedAt: new Date().toISOString(),
    success: true,
    metrics: { drift, previousHeadings: previous?.headings || [], currentHeadings: headings },
    error: null,
  };

  const outDir = path.resolve(__dirname, '../../../data/cloud-automations');
  fs.writeFileSync(path.join(outDir, 'content-drift-sentinel.json'), JSON.stringify(status, null, 2));
  console.log('[content-drift-sentinel] ok');
})();