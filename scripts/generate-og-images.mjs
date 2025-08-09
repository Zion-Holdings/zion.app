import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'public', 'og');

const pages = [
  { slug: 'index', title: 'Zion AI Marketplace', subtitle: 'Autonomous Cloud Automations' },
  { slug: 'automation', title: 'Automations Catalog', subtitle: 'Agents that run 24/7' }
];

function svgFor({ title, subtitle }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="100%" height="100%" fill="#0b0b0b"/>
  <text x="60" y="220" font-size="72" fill="#ffffff" font-family="Arial,Helvetica,sans-serif">${title}</text>
  <text x="60" y="320" font-size="36" fill="#cccccc" font-family="Arial,Helvetica,sans-serif">${subtitle}</text>
  <text x="60" y="520" font-size="24" fill="#888888" font-family="Arial,Helvetica,sans-serif">zion.app</text>
</svg>`;
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const p of pages) {
    const svg = svgFor(p);
    const svgPath = path.join(OUT_DIR, `${p.slug}.svg`);
    fs.writeFileSync(svgPath, svg);
  }
  console.log('OG images (SVG) generated at', OUT_DIR);
}

main().catch(e => { console.error(e); process.exit(1); });