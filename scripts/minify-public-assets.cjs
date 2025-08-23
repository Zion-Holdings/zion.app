#!/usr/bin/env node

/**
 * Minify JS and CSS files in the public folder.
 * Simple whitespace/comment removal to reduce file size without dependencies.
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');

function minifyJs(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove block comments
    .replace(/[\n\r]+/g, '')             // remove newlines
    .replace(/\s{2,}/g, ' ')             // collapse whitespace
    .replace(/\s*([{};,:])\s*/g, '$1');  // trim around tokens
}

function minifyCss(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\n+/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s*([{}:;,])\s*/g, '$1');
}

function processFile(file) {
  const ext = path.extname(file);
  let content = fs.readFileSync(file, 'utf8');
  const originalSize = Buffer.byteLength(content, 'utf8');
  if (ext === '.js') {
    content = minifyJs(content);
  } else if (ext === '.css') {
    content = minifyCss(content);
  } else {
    return;
  }
  const minifiedSize = Buffer.byteLength(content, 'utf8');
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Minified ${path.relative(publicDir, file)}: ${originalSize} -> ${minifiedSize} bytes`);
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && ['.js', '.css'].includes(path.extname(entry.name))) {
      processFile(fullPath);
    }
  }
}

walk(publicDir);
