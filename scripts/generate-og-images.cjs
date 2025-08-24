#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const PUPPETEER_TIMEOUT_MS = Number(process.env.PUPPETEER_TIMEOUT_MS || 20000);
const WIDTH = 1200;
const HEIGHT = 630;

const DATA_OVERRIDES = path.join(process.cwd(), 'data', 'page-metadata', 'overrides.json');
const OUT_DIR = path.join(process.cwd(), 'public', 'og');

function sanitizeRoute(route) {
  if (route === '/') return 'home';
  return route.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '__');
}

async function ensurePuppeteer() {
  try {
    return require('puppeteer');
  } catch (e) {
    console.error('Missing puppeteer. Please install it.');
    process.exit(1);
  }
}

function buildHtml(title) {
  const safeTitle = (title || 'Zion Tech Solutions').toString();
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      @font-face { font-family: Inter; font-style: normal; font-weight: 600; src: local('Inter'); }
      html, body { margin: 0; padding: 0; }
      body { width: ${WIDTH}px; height: ${HEIGHT}px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg,#0f172a,#1f2937); color: #fff; font-family: Inter, ui-sans-serif, system-ui, -apple-system; }
      .card { width: ${WIDTH - 80}px; height: ${HEIGHT - 80}px; border-radius: 24px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); display: flex; flex-direction: column; padding: 40px; justify-content: space-between; }
      .brand { font-size: 28px; letter-spacing: 0.5px; opacity: 0.9; }
      .title { font-size: 64px; font-weight: 700; line-height: 1.05; }
      .footer { display: flex; justify-content: space-between; align-items: center; font-size: 22px; opacity: 0.9; }
      .badge { padding: 6px 12px; border-radius: 999px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); font-size: 18px; }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="brand">Zion Tech Solutions</div>
      <div class="title">${safeTitle.replace(/</g, '&lt;')}</div>
      <div class="footer"><span>ziontechgroup.netlify.app</span><span class="badge">AI‑generated</span></div>
    </div>
  </body>
</html>`;
}

async function main() {
  if (!fs.existsSync(DATA_OVERRIDES)) {
    console.error('overrides.json not found. Run scripts/generate-dynamic-seo.cjs first.');
    process.exit(1);
  }
  const overrides = JSON.parse(fs.readFileSync(DATA_OVERRIDES, 'utf8'));
  const routes = Object.entries(overrides.routes || {});
  if (routes.length === 0) {
    console.log('No routes to process');
    return;
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const puppeteer = await ensurePuppeteer();
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });

  let processed = 0;
  for (const [route, meta] of routes) {
    const title = meta.title || route;
    const html = buildHtml(title);
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: PUPPETEER_TIMEOUT_MS });
    const outFile = path.join(OUT_DIR, `${sanitizeRoute(route)}.png`);
    await page.screenshot({ path: outFile, type: 'png' });
    processed++;
  }

  await browser.close();
  console.log(`Generated ${processed} OG images into ${path.relative(process.cwd(), OUT_DIR)}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}