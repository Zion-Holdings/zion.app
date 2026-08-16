#!/usr/bin/env node
/**
 * generate-dynamic-route-public.cjs
 * Syncs dynamically generated HTML routes from out/ to public/
 * so that all service/blog pages are discoverable in static export.
 *
 * This script ensures that routes which exist in out/ (from next build)
 * are also reflected in the public/ directory for direct serving.
 */
const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const publicDir = path.join(process.cwd(), 'public');

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  if (!fs.existsSync(outDir)) {
    console.log('out/ directory does not exist yet; skipping dynamic route sync.');
    return;
  }

  let copiedDirs = 0;
  let copiedFiles = 0;

  // Ensure all top-level dynamic directories from out/ are in public/
  const outEntries = fs.readdirSync(outDir, { withFileTypes: true });
  for (const entry of outEntries) {
    const srcPath = path.join(outDir, entry.name);
    const destPath = path.join(publicDir, entry.name);
    if (entry.isDirectory()) {
      // Copy directory contents
      const before = copiedFiles;
      copyDirSync(srcPath, destPath);
      copiedDirs++;
      const after = countFiles(destPath);
      copiedFiles = after;
      console.log(`  synced ${entry.name}/`);
    } else {
      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
        copiedFiles++;
      }
    }
  }

  console.log(`Dynamic route sync: ${copiedDirs} dirs, ${copiedFiles} files synced to public/`);
}

function countFiles(dir) {
  if (!fs.existsSync(dir)) return 0;
  let count = 0;
  const entries = fs.readdirSync(dir);
  for (const e of entries) {
    const full = path.join(dir, e);
    if (fs.statSync(full).isDirectory()) {
      count += countFiles(full);
    } else {
      count++;
    }
  }
  return count;
}

try { main(); } catch(e) { console.error('generate-dynamic-route-public error:', e.message); process.exit(1); }
