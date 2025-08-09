#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function fetchUrl(url, timeoutMs = 8000) {
  return new Promise((resolve) => {
    try {
      const lib = url.startsWith('https') ? https : http;
      const req = lib.get(url, { timeout: timeoutMs }, (res) => {
        res.on('data', () => {});
        res.on('end', () => resolve({ ok: res.statusCode && res.statusCode < 400, status: res.statusCode }));
      });
      req.on('error', () => resolve({ ok: false, status: 0 }));
      req.on('timeout', () => { req.destroy(); resolve({ ok: false, status: 0 }); });
    } catch { resolve({ ok: false, status: 0 }); }
  });
}

async function main() {
  const root = process.cwd();
  const base = process.env.SELF_BASE_URL || 'http://localhost:3000';
  const routes = ['/', '/academy', '/academy/admin', '/academy/insights'];

  const outDir = path.join(root, 'data', 'reports');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const results = [];
  for (const r of routes) {
    const url = base + r;
    const res = await fetchUrl(url);
    results.push({ url, ok: res.ok, status: res.status });
  }
  fs.writeFileSync(path.join(outDir, 'broken-links.json'), JSON.stringify({ runAt: new Date().toISOString(), base, results }, null, 2));

  const page = `import data from '../../data/reports/broken-links.json';
export default function BrokenLinks(){
  const d = data as any;
  return (
    <div className="py-10 space-y-3">
      <h1 className="text-2xl font-semibold">Broken Links</h1>
      <div className="text-sm text-gray-500">Checked: {new Date(d.runAt).toLocaleString()}</div>
      <ul className="text-sm">
        {d.results?.map((x: any, i: number) => (
          <li key={i} className={x.ok ? 'text-green-600' : 'text-red-600'}>
            {x.status} - {x.url}
          </li>
        ))}
      </ul>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(root, 'pages', 'admin', 'broken-links.tsx'), page);
  console.log('Broken link scan updated.');
}

main().catch((e)=>{ console.error(e); process.exitCode = 1; });