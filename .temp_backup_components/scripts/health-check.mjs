#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import axios from 'axios';

const URLS = [
  'https://ziontechgroup.com/',
  'https://ziontechgroup.com/services',
  'https://ziontechgroup.com/blog',
  'https://ziontechgroup.com/contact',
];

async function checkUrl(url) {
  const startedAt = Date.now();
  try {
    const res = await axios.get(url, { timeout: 15000 });
    return { url, status: res.status, ok: res.status < 400, ms: Date.now() - startedAt };
  } catch (err) {
    return { url, status: err?.response?.status ?? 0, ok: false, ms: Date.now() - startedAt };
  }
}

async function run() {
  const results = [];
  for (const url of URLS) {
    results.push(await checkUrl(url));
  }
  const out = {
    checkedAt: new Date().toISOString(),
    summary: {
      total: results.length,
      healthy: results.filter(r => r.ok).length,
    },
    results,
  };
  const outDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'health.json'), JSON.stringify(out, null, 2), 'utf8');
  console.log('✅ Health check complete: public/health.json');
}

run();