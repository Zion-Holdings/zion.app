#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const WORKSPACE = process.cwd();
const LOG_DIR = path.join(WORKSPACE, 'automation', 'logs');
const LOG_FILE = path.join(LOG_DIR, 'auto-redirect-mapper.log');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function safeRead(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function parseCsv(content) {
  const lines = content.split(/\r?\n/).filter(Boolean);
  if (lines.length <= 1) return [];
  const header = lines[0].split(',');
  const idx = Object.fromEntries(header.map((h, i) => [h.trim(), i]));
  const rows = [];
  for (let i = 1; i < lines.length; i += 1) {
    const raw = lines[i];
    // naive CSV parse (no embedded commas in current dataset)
    const cols = raw.split(',');
    if (cols.length < header.length) continue;
    rows.push({
      source_url: cols[idx.source_url]?.trim(),
      link_url: cols[idx.link_url]?.trim(),
      final_url: cols[idx.final_url]?.trim(),
      status_code: Number(cols[idx.status_code] || 0),
      ok: /true/i.test(cols[idx.ok] || ''),
      is_internal: /true/i.test(cols[idx.is_internal] || ''),
      error: (cols[idx.error] || '').trim()
    });
  }
  return rows;
}

function urlPath(urlString) {
  try { return new URL(urlString).pathname; } catch { return '/'; }
}

function suggestTarget(brokenPath) {
  const mapping = new Map([
    ['/services', '/main/front#capabilities'],
    ['/products', '/main/front'],
    ['/contact', '/newsroom'],
  ]);
  if (mapping.has(brokenPath)) return mapping.get(brokenPath);
  // Default safe target: homepage or front hub for deep paths
  if (brokenPath.startsWith('/.netlify/functions')) return '/automation';
  if (brokenPath.split('/').filter(Boolean).length <= 1) return '/';
  return '/main/front';
}

(function main(){
  log('Auto Redirect Mapper starting');
  const csvPath = path.join(WORKSPACE, 'link_report.csv');
  const redirectsPath = path.join(WORKSPACE, 'public', '_redirects');

  const csv = safeRead(csvPath);
  if (!csv) {
    log('No link_report.csv found; nothing to do');
    process.exit(0);
  }

  const rows = parseCsv(csv);
  const brokenInternal = rows.filter(r => r.is_internal && r.status_code === 404);
  const uniqueBroken = new Set(brokenInternal.map(r => urlPath(r.link_url)));

  const lines = [];
  for (const broken of uniqueBroken) {
    if (!broken || broken === '/') continue;
    const target = suggestTarget(broken);
    if (target && target !== broken) {
      lines.push(`${broken} ${target} 301!`);
    }
  }

  const START = '# AUTO-GENERATED: REDIRECT_MAPPER_START';
  const END = '# AUTO-GENERATED: REDIRECT_MAPPER_END';
  const current = safeRead(redirectsPath);

  const block = [START, ...lines, END].join('\n') + '\n';

  let next;
  if (current.includes(START) && current.includes(END)) {
    next = current.replace(new RegExp(`${START}[\s\S]*?${END}\n?`, 'm'), block);
  } else if (current.trim()) {
    next = current.trimEnd() + '\n\n' + block;
  } else {
    next = block;
  }

  fs.writeFileSync(redirectsPath, next);
  log(`Wrote ${lines.length} redirect(s) into ${path.relative(WORKSPACE, redirectsPath)}`);
  log('Auto Redirect Mapper finished');
  process.exit(0);
})();