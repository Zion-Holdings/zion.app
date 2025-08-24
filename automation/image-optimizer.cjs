#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = process.cwd();
const IN_DIR = path.join(ROOT, 'public');
const OUT_DIR = path.join(ROOT, 'public');

const exts = new Set(['.png', '.jpg', '.jpeg']);

async function listImages(dir) {
  /** @type {string[]} */
  const out = [];
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...await listImages(full));
    } else if (e.isFile()) {
      const ext = path.extname(e.name).toLowerCase();
      if (exts.has(ext)) out.push(full);
    }
  }
  return out;
}

async function optimize(file) {
  const rel = path.relative(IN_DIR, file);
  const base = path.join(OUT_DIR, rel);
  const dir = path.dirname(base);
  await fs.promises.mkdir(dir, { recursive: true });

  const input = await fs.promises.readFile(file);
  const before = input.length;

  let output;
  if (file.toLowerCase().endsWith('.png')) {
    output = await sharp(input).png({ compressionLevel: 9, palette: true }).toBuffer();
  } else {
    output = await sharp(input).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  }
  await fs.promises.writeFile(base, output);
  const after = output.length;
  return { file: rel, before, after, saved: Math.max(0, before - after) };
}

async function main() {
  const files = await listImages(IN_DIR);
  const results = [];
  for (const f of files) {
    try {
      const r = await optimize(f);
      results.push(r);
      console.log('Optimized:', r.file, `${r.saved} bytes saved`);
    } catch (e) {
      console.warn('Failed image:', f, e.message);
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totalSaved: results.reduce((a, r) => a + r.saved, 0),
    items: results,
  };
  const reportFile = path.join(ROOT, 'public', 'automation-reports', 'image-optimizer-report.json');
  await fs.promises.mkdir(path.dirname(reportFile), { recursive: true });
  await fs.promises.writeFile(reportFile, JSON.stringify(report, null, 2));
  console.log('Image optimizer report written:', path.relative(ROOT, reportFile));
}

main().catch((e) => { console.error(e); process.exit(1); });