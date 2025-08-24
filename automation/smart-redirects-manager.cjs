'use strict';

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readJsonSafe(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
}

function writeFileSafe(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

function extractRedirectPairsFromReport(reportObj) {
  // Heuristic: search for arrays of objects with recognizable keys
  const pairs = [];
  if (!reportObj) return pairs;

  function scan(obj) {
    if (!obj) return;
    if (Array.isArray(obj)) {
      for (const item of obj) scan(item);
      return;
    }
    if (typeof obj === 'object') {
      // common key pairs
      const from = obj.from || obj.source || obj.url || obj.broken || obj.path;
      const to = obj.to || obj.target || obj.suggestion || obj.suggested || obj.redirect;
      if (from && to && typeof from === 'string' && typeof to === 'string') {
        pairs.push([from, to]);
      }
      for (const k of Object.keys(obj)) scan(obj[k]);
    }
  }

  scan(reportObj);
  return pairs;
}

function normalizePath(urlOrPath) {
  // Convert full URLs to paths, keep paths as-is
  try {
    if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://')) {
      const u = new URL(urlOrPath);
      return u.pathname.replace(/\/$/, '') || '/';
    }
  } catch {}
  return ('/' + urlOrPath).replace(/\/+/g, '/').replace(/\/$/, '');
}

function buildRedirectsBlock(pairs) {
  const lines = [];
  lines.push('# AUTO-GENERATED: SMART_REDIRECTS_START');
  lines.push('# Managed by automation/smart-redirects-manager.cjs');
  for (const [from, to] of pairs) {
    const src = normalizePath(from);
    const dst = normalizePath(to);
    if (!src || !dst || src === dst) continue;
    // Netlify format: from to status
    lines.push(`${src} ${dst} 301`);
  }
  lines.push('# AUTO-GENERATED: SMART_REDIRECTS_END');
  return lines.join('\n') + '\n';
}

function upsertManagedBlock(fileContent, newBlock, startMarker, endMarker) {
  const startIdx = fileContent.indexOf(startMarker);
  const endIdx = fileContent.indexOf(endMarker);
  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    return fileContent.slice(0, startIdx) + newBlock + fileContent.slice(endIdx + endMarker.length);
  }
  // Append with a gap
  return (fileContent.trimEnd() + '\n\n' + newBlock);
}

(function main() {
  const reportsDir = path.resolve('public', 'reports');
  const logsDir = path.resolve('automation', 'logs');
  ensureDir(reportsDir);
  ensureDir(logsDir);

  // Try known report locations
  const candidates = [
    path.resolve(reportsDir, '404-map.json'),
    path.resolve(reportsDir, 'site-404-map.json'),
    path.resolve(reportsDir, 'broken-internal-links.json')
  ];

  let report = null;
  for (const p of candidates) {
    const json = readJsonSafe(p);
    if (json) { report = json; break; }
  }

  const pairs = extractRedirectPairsFromReport(report);
  const uniquePairs = Array.from(new Set(pairs.map(([a,b]) => `${normalizePath(a)} -> ${normalizePath(b)}`)))
    .map((s) => s.split(' -> '));

  const log = {
    generatedAt: new Date().toISOString(),
    inputReportFound: !!report,
    inputReportCandidates: candidates,
    totalPairsFound: pairs.length,
    totalPairsUnique: uniquePairs.length
  };

  writeFileSafe(path.resolve(logsDir, 'smart-redirects-manager.log.json'), JSON.stringify(log, null, 2));

  if (uniquePairs.length === 0) {
    // Nothing to do
    return;
  }

  const redirectsPath = path.resolve('_redirects');
  let existing = '';
  try { existing = fs.readFileSync(redirectsPath, 'utf8'); } catch { existing = ''; }

  const block = buildRedirectsBlock(uniquePairs);
  const updated = upsertManagedBlock(existing, block, '# AUTO-GENERATED: SMART_REDIRECTS_START', '# AUTO-GENERATED: SMART_REDIRECTS_END');
  writeFileSafe(redirectsPath, updated);
})();