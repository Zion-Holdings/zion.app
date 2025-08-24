#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'performance');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8', ...opts });
  return { code: res.status ?? 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

async function measure(url) {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = http.get(url, (res) => {
      const ttfbMs = Date.now() - start;
      let bytes = 0;
      res.on('data', (chunk) => (bytes += chunk.length));
      res.on('end', () => {
        resolve({ url, statusCode: res.statusCode, ttfbMs, bytes });
      });
    });
    req.on('error', () => resolve({ url, statusCode: 0, ttfbMs: -1, bytes: 0 }));
  });
}

async function main() {
  ensureDir(REPORT_DIR);

  const build = run('npm', ['run', 'build']);
  const buildOk = build.code === 0;

  // Start Next.js server on port 3000 in background for measurement
  let serverPid = null;
  if (buildOk) {
    const child = spawnSync('sh', ['-lc', 'nohup npm run start >/dev/null 2>&1 & echo $!'], { encoding: 'utf8' });
    serverPid = parseInt((child.stdout || '').trim(), 10) || null;
    // wait briefly for server to boot
    await new Promise((r) => setTimeout(r, 6000));
  }

  const targets = ['http://localhost:3000/', 'http://localhost:3000/enhanced-home'];
  const results = [];
  for (const url of targets) {
    // retry a couple times in case server not ready
    let r = await measure(url);
    if (r.statusCode === 0) { await new Promise((x) => setTimeout(x, 1500)); r = await measure(url); }
    results.push(r);
  }

  if (serverPid) {
    try { process.kill(serverPid); } catch {}
  }

  const report = {
    generatedAt: new Date().toISOString(),
    build: { ok: buildOk, code: build.code, stderr: build.stderr?.slice(0, 8000) },
    metrics: results,
    thresholds: { ttfbMs: 800, bytesHtml: 250000 },
    alerts: results.filter(r => r.statusCode === 200 && (r.ttfbMs > 800 || r.bytes > 250000))
  };

  const outFile = path.join(REPORT_DIR, `performance-${Date.now()}.json`);
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  console.log('Performance audit report written to', outFile);
}

main().catch((e) => { console.error('Performance audit failed', e); process.exitCode = 1; });