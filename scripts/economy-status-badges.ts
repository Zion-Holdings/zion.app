import fs from 'fs';
import path from 'path';

function readJson(p: string): any | null { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; } }
function ensureDir(dir: string) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

function badge(label: string, value: string, color = '#10B981') {
  const width = Math.max(120, 10 + (label.length + value.length) * 7);
  const mid = 60;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="20" role="img" aria-label="${label}: ${value}">
  <linearGradient id="smooth" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <mask id="round">
    <rect width="${width}" height="20" rx="3" fill="#fff"/>
  </mask>
  <g mask="url(#round)">
    <rect width="${mid}" height="20" fill="#555"/>
    <rect x="${mid}" width="${width - mid}" height="20" fill="${color}"/>
    <rect width="${width}" height="20" fill="url(#smooth)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
    <text x="${mid/2}" y="15">${label}</text>
    <text x="${mid + (width - mid)/2}" y="15">${value}</text>
  </g>
</svg>`;
}

function main() {
  const reportsDir = path.join(process.cwd(), 'data', 'reports', 'economy');
  const latest = readJson(path.join(reportsDir, 'latest.json'))?.latest;
  if (!latest) return;
  const econ = readJson(path.join(reportsDir, `${latest}.json`));
  const s = econ?.baseline?.summary;
  if (!s) return;

  const outDir = path.join(process.cwd(), 'public', 'badges');
  ensureDir(outDir);

  fs.writeFileSync(path.join(outDir, 'avg-inflation.svg'), badge('avg inflation', `${s.avgInflationPct.toFixed(2)}%`, '#3B82F6'));
  fs.writeFileSync(path.join(outDir, 'ending-treasury.svg'), badge('ending treasury', `${Math.round(s.endingTreasury).toLocaleString()}`, '#8B5CF6'));
  fs.writeFileSync(path.join(outDir, 'ending-supply.svg'), badge('ending supply', `${Math.round(s.endingSupply).toLocaleString()}`, '#F59E0B'));
  console.log('Status badges updated in public/badges');
}

main();