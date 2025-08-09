#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUT_DIR = path.join(process.cwd(), 'public', 'automation-reports', 'visual');

const ROUTES = Array.from(new Set([
  '/',
  '/dashboard/client',
  '/dashboard/talent',
  '/about',
  '/contact',
  '/products',
  '/services',
  '/blog'
]));

function safeName(route) {
  return route.replace(/\//g, '_').replace(/^_?$/, 'home') + '.png';
}

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function capture() {
  await ensureDir(OUT_DIR);
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1366, height: 900 } });
  const page = await context.newPage();

  const results = [];
  for (const route of ROUTES) {
    const url = BASE_URL + route;
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      const file = path.join(OUT_DIR, safeName(route));
      await page.screenshot({ path: file, fullPage: true });
      results.push({ route, file: path.relative(process.cwd(), file) });
      console.log('Captured:', route);
    } catch (e) {
      console.warn('Failed:', route, e.message);
      results.push({ route, error: e.message });
    }
  }

  await browser.close();

  const reportPath = path.join(process.cwd(), 'public', 'automation-reports', 'visual-report.json');
  await fs.promises.writeFile(reportPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    results,
  }, null, 2));
  console.log('Report written:', path.relative(process.cwd(), reportPath));
}

capture().catch((e) => {
  console.error(e);
  process.exit(1);
});