const fs = require('fs');
const path = require('path');

function readCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/).filter(Boolean);
  const header = lines.shift();
  const headers = header.split(',');
  return lines.map((line) => {
    const cols = line.split(',');
    const row = {};
    headers.forEach((h, i) => (row[h.trim()] = (cols[i] || '').trim()));
    return row;
  });
}

function ensureDir(directoryPath) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

function upsertRedirectBlock(redirectsPath, lines) {
  const START = '# AUTO-GENERATED: SMART_REDIRECTS_START';
  const END = '# AUTO-GENERATED: SMART_REDIRECTS_END';
  let content = fs.existsSync(redirectsPath)
    ? fs.readFileSync(redirectsPath, 'utf8')
    : '';

  const block = [START, ...lines, END].join('\n') + '\n';

  if (content.includes(START) && content.includes(END)) {
    const before = content.split(START)[0];
    const after = content.split(END)[1] || '';
    content = before + block + after;
  } else {
    if (content && !content.endsWith('\n')) content += '\n';
    content += '\n' + block;
  }

  fs.writeFileSync(redirectsPath, content);
}

function buildIntelligentRedirects(rows) {
  const baseMap = new Map([
    ['/services', '/main/front#capabilities'],
    ['/products', '/main/front'],
    ['/contact', '/newsroom'],
    ['/pricing', '/main/front#benefits'],
    ['/about', '/main/front#capabilities'],
  ]);

  const picks = new Map();

  for (const row of rows) {
    try {
      const isInternal = String(row.is_internal || '').toLowerCase() === 'true';
      const ok = String(row.ok || '').toLowerCase() === 'true';
      const status = Number(row.status_code || '0');
      if (!isInternal || ok) continue;

      const url = new URL(row.link_url);
      const fromPath = url.pathname.replace(/\/$/, '') || '/';

      // Skip home
      if (fromPath === '/') continue;

      let toPath = null;

      if (baseMap.has(fromPath)) {
        toPath = baseMap.get(fromPath);
      } else {
        const seg = fromPath.split('/').filter(Boolean)[0] || '';
        switch (seg) {
          case 'services':
            toPath = '/main/front#capabilities';
            break;
          case 'product':
          case 'products':
            toPath = '/main/front';
            break;
          case 'contact':
            toPath = '/newsroom';
            break;
          case 'pricing':
            toPath = '/main/front#benefits';
            break;
          case 'about':
            toPath = '/main/front#capabilities';
            break;
          default:
            toPath = '/main/front';
        }
      }

      if (!picks.has(fromPath)) picks.set(fromPath, toPath);
    } catch (e) {
      // ignore malformed rows
    }
  }

  // Convert to redirect lines: "/from /to 301!"
  const redirectLines = [];
  for (const [from, to] of picks.entries()) {
    redirectLines.push(`${from} ${to} 301!`);
  }

  return { picks, redirectLines };
}

function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const csvPath = path.resolve(repoRoot, 'link_report.csv');
  const redirectsPath = path.resolve(repoRoot, 'public', '_redirects');
  const reportsDir = path.resolve(repoRoot, 'public', 'reports');

  if (!fs.existsSync(csvPath)) {
    console.error('link_report.csv not found:', csvPath);
    process.exit(0); // no-op if CSV is absent
  }

  const rows = readCsv(csvPath);
  const { picks, redirectLines } = buildIntelligentRedirects(rows);

  upsertRedirectBlock(redirectsPath, redirectLines);

  ensureDir(reportsDir);
  const report = {
    generatedAtUtc: new Date().toISOString(),
    totalCandidates: rows.length,
    redirects: Array.from(picks.entries()).map(([from, to]) => ({ from, to })),
  };
  fs.writeFileSync(path.join(reportsDir, 'smart-redirects.json'), JSON.stringify(report, null, 2));

  console.log('Smart Redirects updated:', redirectLines.length);
}

if (require.main === module) {
  main();
}