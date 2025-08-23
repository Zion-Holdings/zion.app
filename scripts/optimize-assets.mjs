#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const root = process.cwd();
const exts = new Set(['.png', '.jpg', '.jpeg']);

async function* walk(dir) {
  for (const d of await fs.readdir(dir, { withFileTypes: true })) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else yield entry;
  }
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  const buf = await fs.readFile(file);
  let out;
  if (ext === '.png') {
    out = await sharp(buf).png({ compressionLevel: 9, palette: true }).toBuffer();
  } else {
    out = await sharp(buf).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  }
  if (out.length < buf.length) {
    await fs.writeFile(file, out);
    console.log(`Optimized ${file}: ${buf.length} -> ${out.length}`);
  }
}

(async () => {
  const targets = [];
  for await (const f of walk(root)) {
    if (exts.has(path.extname(f).toLowerCase())) targets.push(f);
  }
  for (const f of targets) {
    try { await optimize(f); } catch (e) { console.warn('Skip', f, e.message); }
  }
  console.log('Asset optimization done');
})();