// scripts/checks/live-smoke-routes.cjs
// Live crawl audit: primary routes + 50 random /services/[slug].
const fs = require('fs');
const path = require('path');

const HOST = process.env.ZION_HOST || 'ziontechgroup.com';
const PROTOCOL = 'https:';
const TIMEOUT_MS = 12000;
const CONCURRENCY = 8;

async function fetchUrl(target) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(target, { signal: controller.signal, redirect: 'manual' });
    clearTimeout(timer);
    const text = await res.text();
    return { status: res.status, body: text };
  } catch (e) {
    clearTimeout(timer);
    return { status: 0, body: String(e && e.message ? e.message : e) };
  }
}

function pick(arr, n) {
  const out = [];
  const len = arr.length;
  for (let i = 0; i < n; i++) out.push(arr[(i * 13 + 7) % len]);
  return [...new Set(out)].slice(0, n);
}

async function main() {
  const servicesJsonPath = path.resolve('app/data/servicesData.json');
  if (!fs.existsSync(servicesJsonPath)) {
    console.error('SERVICE_JSON_MISSING=' + servicesJsonPath);
    process.exit(2);
  }
  const json = JSON.parse(fs.readFileSync(servicesJsonPath, 'utf8'));
  const services = Array.isArray(json?.services) ? json.services : [];
  const slugs = services.map((s) => (s && s.id) || '').filter(Boolean);
  if (!slugs.length) {
    console.error('NO_SLUGS');
    process.exit(2);
  }

  const primary = ['/', '/services', '/solutions', '/pricing', '/about', '/contact'];
  const sampleSlugs = pick(slugs, Math.min(50, slugs.length));
  const routes = [...primary, ...sampleSlugs.map((slug) => `/services/${slug}`)];

  const results = [];
  const errors = [];
  let broken = 0;

  for (let i = 0; i < routes.length; i += CONCURRENCY) {
    const batch = routes.slice(i, i + CONCURRENCY).map(async (r) => {
      const { status, body } = await fetchUrl(`${PROTOCOL}//${HOST}${r}`);
      results.push({ route: r, status, bodyLen: body.length });
      if (status !== 200 || !body.length) {
        broken++;
        errors.push({ route: r, status, error: !status ? body : 'EMPTY_BODY' });
      }
    });
    await Promise.all(batch);
  }

  console.log(`crawl_complete checked=${routes.length} broken=${broken}`);
  if (errors.length) {
    console.log('broken_routes=' + errors.map(e => `${e.route}::${e.status}`).join(','));
  }

  const outDir = path.resolve('scripts/checks/audit');
  fs.mkdirSync(outDir, { recursive: true });
  const report = {
    ts: new Date().toISOString(),
    host: HOST,
    checked: routes.length,
    broken_count: broken,
    ok: broken === 0,
    broken_routes: errors,
  };
  const outFile = path.join(outDir, `live-smoke-${Date.now()}.json`);
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  console.log('report=' + outFile);
  process.exit(broken === 0 ? 0 : 1);
}

main().catch((e) => {
  console.error('AUDIT_FATAL=' + String(e && e.message));
  process.exit(2);
});
