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
  return (
    `\n<footer class="border-t border-white/10 bg-black/20"><div class="mx-auto max-w-7xl px-6 py-8 text-sm text-white/70 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><span class="font-semibold text-white">Zion</span> — Autonomous Cloud Automations</div><nav class="flex flex-wrap items-center gap-4"><a href="/automation" class="hover:text-white">Automations</a><a href="/site-health" class="hover:text-white">Site Health</a><a href="/newsroom" class="hover:text-white">Newsroom</a><a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" class="hover:text-white">ziontechgroup.com</a></nav></div></footer>\n`
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


