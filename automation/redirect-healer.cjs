#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const url = require('url');

const WORKSPACE = path.resolve(__dirname, '..');
const LINK_REPORT = path.join(WORKSPACE, 'link_report.csv');
const REDIRECTS = path.join(WORKSPACE, 'public', '_redirects');

function readCsv(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const lines = raw.split(/\r?\n/).filter(Boolean);
    const header = lines.shift();
    const cols = header.split(',');
    const rows = lines.map(l => {
      const parts = [];
      let current = '';
      let inQuotes = false;
      for (let i = 0; i < l.length; i += 1) {
        const ch = l[i];
        if (ch === '"') {
          inQuotes = !inQuotes;
          continue;
        }
        if (ch === ',' && !inQuotes) {
          parts.push(current);
          current = '';
        } else {
          current += ch;
        }
      }
      parts.push(current);
      const obj = {};
      cols.forEach((c, idx) => obj[c] = (parts[idx] ?? '').trim());
      return obj;
    });
    return rows;
  } catch (e) {
    return [];
  }
}

function parsePath(maybeUrl) {
  try {
    const u = new url.URL(maybeUrl);
    return u.pathname || '/';
  } catch {
    try {
      return new url.URL('https://example.com' + (maybeUrl.startsWith('/') ? '' : '/') + maybeUrl).pathname;
    } catch {
      return '/';
    }
  }
}

function loadRedirects(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
  } catch {
    return [];
  }
}

function writeRedirects(filePath, lines) {
  const cleaned = lines
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .filter((l, i, a) => a.indexOf(l) === i);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, cleaned.join('\n') + '\n');
}

function suggestTarget(fromPath) {
  const map = new Map([
    ['/services', '/main/front#capabilities'],
    ['/products', '/main/front'],
    ['/contact', '/newsroom'],
    ['/pricing', '/main/front#benefits'],
  ]);
  if (map.has(fromPath)) return map.get(fromPath);
  // heuristic fallbacks
  if (/^\/docs?\b/.test(fromPath)) return '/.netlify/functions/docs-index-runner';
  if (/^\/api\b/.test(fromPath)) return '/';
  return '/';
}

(function main() {
  const rows = readCsv(LINK_REPORT);
  if (!rows.length) {
    console.log('[redirect-healer] No link report rows found. Skipping.');
    process.exit(0);
  }

  const existing = loadRedirects(REDIRECTS);
  const existingSet = new Set(existing.map(l => l.trim()).filter(Boolean));

  let added = 0;
  let considered = 0;

  for (const r of rows) {
    const isInternal = String(r.is_internal || '').toLowerCase() === 'true';
    const ok = String(r.ok || '').toLowerCase() === 'true';
    const status = parseInt(r.status_code || '0', 10) || 0;
    if (!isInternal) continue;
    if (ok && status < 400) continue;
    considered += 1;

    const brokenPath = parsePath(r.link_url || r.final_url || '/');
    if (!brokenPath || brokenPath === '/') continue;

    const target = suggestTarget(brokenPath);
    // Use permanent for canonical structural moves, temporary for contact
    const isTemp = brokenPath === '/contact';
    const rule = `${brokenPath.padEnd(14)} ${target.padEnd(28)} ${isTemp ? '302' : '301!'} `;
    if (!existingSet.has(rule.trim())) {
      existing.push(rule);
      existingSet.add(rule.trim());
      added += 1;
    }
  }

  if (added > 0) {
    writeRedirects(REDIRECTS, existing);
    console.log(`[redirect-healer] Added ${added} redirect rules (from ${considered} broken candidates).`);
  } else {
    console.log('[redirect-healer] No new redirects needed.');
  }
})();