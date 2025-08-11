const fs = require('fs');
const path = require('path');

function readFileSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return { headers: [], rows: [] };
  const headers = lines[0].split(',').map(h => h.trim());
  const rows = lines.slice(1).map(line => {
    const cols = line.split(',');
    const obj = {};
    headers.forEach((h, i) => { obj[h] = (cols[i] || '').trim(); });
    return obj;
  });
  return { headers, rows };
}

function findColumn(headers, candidates) {
  const lower = headers.map(h => h.toLowerCase());
  for (const name of candidates) {
    const idx = lower.indexOf(name);
    if (idx !== -1) return idx;
  }
  return -1;
}

(function main() {
  const workspace = process.cwd();
  const csvPath = path.join(workspace, 'link_report.csv');
  const canonical = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
  const outDir = path.join(workspace, 'public', 'automation');
  try { fs.mkdirSync(outDir, { recursive: true }); } catch {}

  const text = readFileSafe(csvPath);
  if (!text) {
    const outPath = path.join(outDir, 'redirect-report.json');
    fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), error: 'link_report.csv not found' }, null, 2));
    console.log(`[redirect-optimizer] link_report.csv not found`);
    return;
  }

  const { headers, rows } = parseCsv(text);
  // Try to infer columns
  const statusIdx = findColumn(headers, ['status', 'status_code', 'code']);
  const fromIdx = findColumn(headers, ['from', 'url', 'source', 'page']);
  const toIdx = findColumn(headers, ['to', 'target', 'final_url', 'location']);

  const suggestions = [];
  for (const row of rows) {
    const status = statusIdx !== -1 ? (row[headers[statusIdx]] || '') : '';
    const from = fromIdx !== -1 ? (row[headers[fromIdx]] || '') : '';
    const to = toIdx !== -1 ? (row[headers[toIdx]] || '') : '';
    if (!status || !from || !to) continue;
    if (!/^30[12]$/.test(String(status))) continue;
    const isInternal = to.startsWith('/') || to.startsWith(canonical) || from.startsWith('/') || from.startsWith(canonical);
    if (!isInternal) continue;
    suggestions.push({ from, to, status: String(status), note: 'Consider linking directly to final URL to avoid redirect.' });
  }

  const report = {
    generatedAt: new Date().toISOString(),
    canonical,
    totalChecked: rows.length,
    internalRedirects: suggestions.length,
    suggestions
  };

  const outPath = path.join(outDir, 'redirect-report.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`[redirect-optimizer] Wrote ${outPath}. checked=${rows.length} internalRedirects=${suggestions.length}`);
})();