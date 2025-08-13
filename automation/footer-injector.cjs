#!/usr/bin/env node
'use strict';

// Continuously ensures a footer is present in exported/static html files
// Directories scanned: public/, out/

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET_DIRS = ['public', 'out'];

function read(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return null; }
}

function write(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, data, 'utf8');
}

function listHtmlFiles(dir) {
  const results = [];
  const base = path.join(ROOT, dir);
  if (!fs.existsSync(base)) return results;
  (function walk(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && entry.name.endsWith('.html')) results.push(full);
    }
  })(base);
  return results;
}

function buildFooterHtml() {
  const year = new Date().getFullYear();
  return (
    `\n<footer class="w-full border-t border-gray-200 bg-white text-gray-700"><div class="mx-auto max-w-6xl px-4 py-8"><div class="flex flex-col items-center justify-between gap-3 sm:flex-row"><p class="text-sm">© ${year} Zion Tech Group. All rights reserved.</p><nav class="flex items-center gap-4 text-sm"><a class="hover:underline" href="/">Home</a><a class="hover:underline" href="/newsroom">Newsroom</a><a class="hover:underline" href="/site-health">Site Health</a><a class="hover:underline" href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">ziontechgroup.com</a></nav></div></div></footer>\n`
  );
}

function hasFooter(html) {
  return /<footer[\s\S]*?>[\s\S]*?<\/footer>/i.test(html);
}

function injectFooter(html) {
  const footer = buildFooterHtml();
  // Place before closing body
  if (/<\/body>/i.test(html)) {
    return html.replace(/<\/body>/i, `${footer}</body>`);
  }
  // If no </body>, append
  return html + footer;
}

function processFile(file) {
  const original = read(file);
  if (!original) return false;
  if (hasFooter(original)) return false;
  const updated = injectFooter(original);
  if (updated !== original) {
    write(file, updated);
    console.log(`[footer-injector] injected footer -> ${path.relative(ROOT, file)}`);
    return true;
  }
  return false;
}

function main() {
  let changed = 0;
  for (const dir of TARGET_DIRS) {
    const files = listHtmlFiles(dir);
    for (const f of files) if (processFile(f)) changed++;
  }
  console.log(`[footer-injector] completed. files changed: ${changed}`);
}

main();


