const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function ensureDir(dirPath) { if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true }); }

function getLatestFile(dir) {
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.json')) : [];
  files.sort((a,b) => fs.statSync(path.join(dir,b)).mtimeMs - fs.statSync(path.join(dir,a)).mtimeMs);
  return files[0] ? path.join(dir, files[0]) : null;
}

exports.handler = async () => {
  const rootDir = path.resolve(__dirname, '..', '..');
  const dataDir = path.join(rootDir, 'data', 'reports', 'link-sentinel');
  const publicDir = path.join(rootDir, 'public', 'reports', 'link-sentinel');
  ensureDir(publicDir);

  // run crawler
  spawnSync('node', [path.join(rootDir, 'automation', 'site-link-crawler.cjs')], { stdio: 'inherit' });

  // publish latest
  const latest = getLatestFile(dataDir);
  if (latest) {
    const latestJson = fs.readFileSync(latest, 'utf8');
    fs.writeFileSync(path.join(publicDir, 'latest.json'), latestJson);

    const parsed = JSON.parse(latestJson);
    const broken = (parsed.results || []).length;
    const htmlIndex = '<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Internal Link Sentinel</title><style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Helvetica,Arial,sans-serif;background:#0b1220;color:#fff;padding:24px}a{color:#67e8f9}code,pre{background:#111827;border:1px solid #1f2937;border-radius:8px;padding:12px;display:block;white-space:pre-wrap}h1{margin:0 0 12px;font-size:24px}h2{margin:24px 0 8px;font-size:18px}</style></head><body><h1>Internal Link Sentinel</h1><p>Latest JSON: <a href="./latest.json">latest.json</a></p><div>Broken links detected: ' + broken + '</div><div id="details"></div><script>' +
      "fetch('./latest.json').then(function(r){return r.json()}).then(function(data){var d=document.getElementById('details'); var list=(data.results||[]).slice(0,100).map(function(x){ return '<li><code>' + x.href + '</code> in <code>' + x.file + '</code> ' + (x.suggestion ? '&rarr; <strong>' + x.suggestion + '</strong>' : '') + '</li>'; }).join(''); d.innerHTML = '<h2>Sample issues</h2><ul>'+list+'</ul>';});" +
      '</script></body></html>';
    fs.writeFileSync(path.join(publicDir, 'index.html'), htmlIndex);
  }

  // git sync
  spawnSync('node', [path.join(rootDir, 'automation', 'advanced-git-sync.cjs')], { stdio: 'inherit' });

  return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'internal-link-sentinel-runner' }) };
};