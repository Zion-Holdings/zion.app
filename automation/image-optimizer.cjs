#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function* walkImages(startDir, exts = ['.png', '.jpg', '.jpeg']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (exts.includes(path.extname(entry.name).toLowerCase())) yield full;
      }
    }
  }
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const base = path.basename(filePath, ext);
  const tmpOut = path.join(dir, `${base}.optimized${ext}`);
  const input = fs.readFileSync(filePath);
  let buffer;
  if (ext === '.png') {
    buffer = await sharp(input).png({ compressionLevel: 9, palette: true }).toBuffer();
  } else {
    buffer = await sharp(input).jpeg({ quality: 72, mozjpeg: true }).toBuffer();
  }
  if (buffer.length < input.length * 0.98) {
    fs.writeFileSync(tmpOut, buffer);
    fs.renameSync(tmpOut, filePath);
    return { file: filePath, saved: input.length - buffer.length };
  }
  return { file: filePath, saved: 0 };
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  const report = { generatedAt: new Date().toISOString(), files: [], totalSavedBytes: 0 };
  const tasks = [];
  for (const img of walkImages(publicDir)) tasks.push(img);
  for (const f of tasks) {
    try {
      const res = await optimizeImage(f);
      report.files.push(res);
      report.totalSavedBytes += res.saved;
    } catch (e) {
      report.files.push({ file: f, error: e.message });
    }
  }
  const outDir = path.join(process.cwd(), 'data', 'reports', 'images');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `image-optimization-${Date.now()}.json`);
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(report, null, 2));
  console.log(`Optimized ${report.files.length} images. Saved ${report.totalSavedBytes} bytes.`);
}

main().catch((e) => { console.error(e); process.exit(1); });