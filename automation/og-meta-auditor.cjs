#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function filePathToRoute(pagesDir, filePath) {
  const rel = path.relative(pagesDir, filePath);
  let route = '/' + rel.replace(/\\/g, '/').replace(/\.(tsx|ts|jsx|js)$/i, '');
  route = route.replace(/\/index$/i, '/');
  // Skip dynamic routes for now
  if (route.includes('[')) return null;
  // Normalize double slashes
  route = route.replace(/\/+/g, '/');
  return route;
}

function scanHeadContent(source) {
  // Extract Head blocks very loosely
  const headBlocks = [];
  const headRegex = /<Head[\s\S]*?>[\s\S]*?<\/Head>/gi;
  let m;
  while ((m = headRegex.exec(source)) !== null) {
    headBlocks.push(m[0]);
  }
  const combined = headBlocks.join('\n');
  const checks = {
    'og:title': /<meta\s+[^>]*property=["']og:title["'][^>]*>/i.test(combined),
    'og:description': /<meta\s+[^>]*property=["']og:description["'][^>]*>/i.test(combined),
    'og:image': /<meta\s+[^>]*property=["']og:image["'][^>]*>/i.test(combined),
    'twitter:card': /<meta\s+[^>]*name=["']twitter:card["'][^>]*>/i.test(combined),
    'twitter:title': /<meta\s+[^>]*name=["']twitter:title["'][^>]*>/i.test(combined) || /<meta\s+[^>]*property=["']twitter:title["'][^>]*>/i.test(combined),
    'twitter:description': /<meta\s+[^>]*name=["']twitter:description["'][^>]*>/i.test(combined) || /<meta\s+[^>]*property=["']twitter:description["'][^>]*>/i.test(combined),
    'twitter:image': /<meta\s+[^>]*name=["']twitter:image["'][^>]*>/i.test(combined) || /<meta\s+[^>]*property=["']twitter:image["'][^>]*>/i.test(combined),
  };
  const missing = Object.entries(checks).filter(([, ok]) => !ok).map(([k]) => k);
  return { hasHead: headBlocks.length > 0, missing, present: Object.keys(checks).filter(k => checks[k]) };
}

function generateHtmlReport(entries, generatedAtIso) {
  const total = entries.length;
  const ok = entries.filter(e => e.missing.length === 0).length;
  const warn = entries.filter(e => e.missing.length > 0).length;
  const rows = entries.map(e => {
    const status = e.missing.length === 0 ? 'OK' : 'Missing: ' + e.missing.join(', ');
    return `<tr><td style="padding:6px 8px;border-bottom:1px solid #222">${e.route}</td><td style="padding:6px 8px;border-bottom:1px solid #222">${e.hasHead ? 'Yes' : 'No'}</td><td style="padding:6px 8px;border-bottom:1px solid #222">${status}</td><td style="padding:6px 8px;border-bottom:1px solid #222">${e.file}</td></tr>`;
  }).join('\n');
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>OG Meta Auditor — Report</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin:0;background:#0b1220;color:#e5e7eb;font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
  <div style="max-width:1100px;margin:24px auto;padding:0 16px">
    <h1 style="margin:0 0 8px;font-size:28px;color:#fff">OG Meta Auditor</h1>
    <div style="margin:0 0 16px;color:#9ca3af">Generated at ${generatedAtIso}. Total pages: ${total}. OK: ${ok}. With issues: ${warn}.</div>
    <div style="overflow:auto;border:1px solid #1f2937;border-radius:8px;background:#0f172a">
      <table style="border-collapse:collapse;width:100%">
        <thead>
          <tr>
            <th style="text-align:left;padding:8px;border-bottom:1px solid #222;color:#a5b4fc">Route</th>
            <th style="text-align:left;padding:8px;border-bottom:1px solid #222;color:#a5b4fc">Head</th>
            <th style="text-align:left;padding:8px;border-bottom:1px solid #222;color:#a5b4fc">Status</th>
            <th style="text-align:left;padding:8px;border-bottom:1px solid #222;color:#a5b4fc">File</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  </div>
</body>
</html>`;
}

function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const pagesDir = path.resolve(repoRoot, 'pages');
  const outDir = path.resolve(repoRoot, 'public', 'reports', 'og-meta');
  ensureDir(outDir);

  const files = glob.sync('**/*.{tsx,jsx,ts,js}', { cwd: pagesDir, nodir: true, absolute: true });
  const results = [];

  for (const file of files) {
    // Skip API routes and underscored files
    if (file.includes(path.sep + 'api' + path.sep)) continue;
    const base = path.basename(file);
    if (base.startsWith('_')) continue;
    const route = filePathToRoute(pagesDir, file);
    if (!route) continue;

    const source = fs.readFileSync(file, 'utf8');
    const { hasHead, missing, present } = scanHeadContent(source);
    results.push({ route, file: path.relative(repoRoot, file), hasHead, missing, present });
  }

  // Sort by severity then route
  results.sort((a, b) => {
    if (a.missing.length !== b.missing.length) return b.missing.length - a.missing.length;
    return a.route.localeCompare(b.route);
  });

  const generatedAt = new Date().toISOString();
  const json = { generatedAt, total: results.length, ok: results.filter(r => r.missing.length === 0).length, warn: results.filter(r => r.missing.length > 0).length, results };
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(json, null, 2), 'utf8');

  const html = generateHtmlReport(results, generatedAt);
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

  // Also maintain a simple index pointer
  const indexJsonPath = path.resolve(repoRoot, 'public', 'reports', 'og-meta', 'index.json');
  fs.writeFileSync(indexJsonPath, JSON.stringify({ latest: '/reports/og-meta/latest.json', generatedAt }, null, 2), 'utf8');

  console.log(`OG Meta Auditor completed. Pages scanned: ${results.length}.`);
}

if (require.main === module) {
  try { 
    main();
    process.exit(0);
  } catch (err) {
    console.error('OG Meta Auditor failed:', err);
    process.exit(1);
  }
}