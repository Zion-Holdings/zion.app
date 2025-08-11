// netlify/functions/anchor-auditor.js
const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

function httpGet(url) {
  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => resolve({ status: res.statusCode || 0, body: data }));
      })
      .on('error', () => resolve({ status: 0, body: '' }));
  });
}

function getBase() {
  return process.env.SITE_BASE_URL || process.env.URL || process.env.DEPLOY_URL || 'https://zion.app';
}

exports.config = {
  schedule: '0 */6 * * *', // every 6 hours
};

exports.handler = async () => {
  const base = getBase().replace(/\/$/, '');
  const paths = ['/', '/main/front', '/automation'];

  const findings = [];

  for (const p of paths) {
    const url = `${base}${p}`;
    const { status, body } = await httpGet(url);
    if (status !== 200 || !body) {
      findings.push({ page: url, ok: false, reason: `status ${status}` });
      continue;
    }
    try {
      const $ = cheerio.load(body);
      const anchors = Array.from($('a[href^="#"]').toArray());
      const ids = new Set(Array.from($('[id]').toArray()).map((el) => $(el).attr('id') || ''));
      const bad = anchors
        .map((a) => $(a).attr('href') || '')
        .filter((h) => h.length > 1)
        .filter((h) => !ids.has(h.slice(1)));
      if (bad.length) {
        findings.push({ page: url, ok: false, missingAnchors: bad.slice(0, 50) });
      } else {
        findings.push({ page: url, ok: true });
      }
    } catch {
      findings.push({ page: url, ok: false, reason: 'parse-error' });
    }
  }

  const report = { ts: new Date().toISOString(), base, findings };
  const outDir = path.resolve(__dirname, '..', '..', 'public', 'automation');
  try { fs.mkdirSync(outDir, { recursive: true }); } catch {}
  const outFile = path.join(outDir, 'anchor-audit.json');
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));

  try {
    const { execSync } = require('child_process');
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app"', { stdio: 'inherit' });
    execSync('git add public/automation/anchor-audit.json', { stdio: 'inherit' });
    execSync('git commit -m "chore(a11y): anchor audit report [skip ci]" || true', { stdio: 'inherit', shell: true });
    execSync('git push origin main || true', { stdio: 'inherit', shell: true });
  } catch {}

  return { statusCode: 200, headers: { 'content-type': 'application/json' }, body: JSON.stringify(report) };
};