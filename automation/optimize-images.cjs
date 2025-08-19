#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'optimize-images.log');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

let sharp;
try {
  sharp = require('sharp');
} catch {
  log('sharp not installed; skipping image optimization');
  process.exit(0);
}

const IMAGE_DIR = path.join(process.cwd(), 'public');
const exts = new Set(['.png', '.jpg', '.jpeg']);

function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

async function optimize(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!exts.has(ext)) return false;
  const buf = fs.readFileSync(filePath);
  const before = buf.length;
  let pipeline = sharp(buf);
  if (ext === '.png') pipeline = pipeline.png({ quality: 80, compressionLevel: 9, effort: 8 });
  else pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
  const out = await pipeline.toBuffer();
  if (out.length < before) {
    fs.writeFileSync(filePath, out);
    log(`Optimized ${path.relative(process.cwd(), filePath)}: ${(before/1024).toFixed(1)}KB → ${(out.length/1024).toFixed(1)}KB`);
    return true;
  }
  return false;
}

(async function main(){
  if (!fs.existsSync(IMAGE_DIR)) {
    log('No public/ directory found');
    process.exit(0);
  }
  let changed = 0;
  const tasks = [];
  for (const file of walk(IMAGE_DIR)) {
    tasks.push(optimize(file).then((ok) => { if (ok) changed += 1; }));
  }
  await Promise.all(tasks);
  log(`Image optimization complete. Files changed: ${changed}`);
  process.exit(0);
})();