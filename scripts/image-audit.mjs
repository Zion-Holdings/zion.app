import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const OUT_DIR = path.resolve('data/reports/images');

function listFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files = files.concat(listFiles(full));
    else files.push(full);
  }
  return files;
}

function main() {
  const exts = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif']);
  const files = fs.existsSync(PUBLIC_DIR) ? listFiles(PUBLIC_DIR) : [];
  const images = files.filter(f => exts.has(path.extname(f).toLowerCase()));
  const results = images.map(f => {
    const stat = fs.statSync(f);
    return { file: path.relative(PUBLIC_DIR, f), bytes: stat.size };
  }).sort((a,b) => b.bytes - a.bytes);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const ts = Date.now();
  fs.writeFileSync(path.join(OUT_DIR, `image-audit-${ts}.json`), JSON.stringify({ timestamp: ts, images: results }, null, 2));
}

main();