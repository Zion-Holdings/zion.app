#!/usr/bin/env node
/**
 * Autonomous Release Guardian
 *
 * Smoke-tests the production site: fetches the base URL + key routes,
 * checks redirect chains, and writes a report JSON + markdown summary.
 *
 * Report output:
 *   automation/reports/autonomous-release-guardian-latest.json
 *   automation/reports/autonomous-release-guardian-latest.md
 *
 * Exit code: 0 if healthy, 1 if unhealthy (CI will fail and escalate).
 */
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.RELEASE_GUARDIAN_BASE_URL || 'https://ziontechgroup.com';
const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');

const ROUTES = [
  '/',
  '/about/',
  '/services/',
  '/ai-services/',
  '/contact/',
  '/pricing/',
  '/configurator/',
  '/tools/',
];

const ACCEPTABLE_STATUS = [200, 201, 204, 301, 302, 307, 308];

function log(msg) {
  console.log(`[release-guardian] ${msg}`);
}

async function checkRoute(route) {
  const url = route.startsWith('http') ? route : BASE_URL + route;
  const result = { route, url, status: null, redirects: 0, ok: false, error: null, finalUrl: null };

  try {
    let current = url;
    let redirects = 0;
    let finalUrl = url;

    for (let i = 0; i < 5; i++) {
      const res = await fetch(current, {
        method: 'GET',
        redirect: 'manual',
        headers: { 'User-Agent': 'zion-release-guardian/1.0' },
      });

      result.status = res.status;
      finalUrl = current;

      if (res.headers.get('location')) {
        redirects++;
        const location = res.headers.get('location');
        current = new URL(location, current).href;
      } else {
        break;
      }
    }

    result.redirects = redirects;
    result.finalUrl = finalUrl;
    result.ok = ACCEPTABLE_STATUS.includes(result.status);
  } catch (err) {
    result.error = err.message;
    result.ok = false;
  }

  return result;
}

async function main() {
  log(`Running release guardian against ${BASE_URL}`);
  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  const results = await Promise.all(ROUTES.map(checkRoute));
  const unhealthyRoutes = results.filter(r => !r.ok);
  const unhealthyCount = unhealthyRoutes.length;
  const severity = unhealthyCount === 0
    ? 'ok'
    : unhealthyCount <= 2 ? 'warn' : 'critical';

  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    totalRoutes: ROUTES.length,
    healthyCount: results.length - unhealthyCount,
    unhealthyCount,
    severity,
    unhealthyRoutes: unhealthyRoutes.map(r => r.route),
    results,
  };

  const jsonPath = path.join(REPORTS_DIR, 'autonomous-release-guardian-latest.json');
  const mdPath = path.join(REPORTS_DIR, 'autonomous-release-guardian-latest.md');

  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2) + '\n');

  const mdLines = [
    '# Release Guardian Report',
    '',
    `- **Base URL:** ${BASE_URL}`,
    `- **Generated:** ${report.generatedAt}`,
    `- **Severity:** ${severity}`,
    `- **Healthy routes:** ${report.healthyCount}/${report.totalRoutes}`,
    `- **Unhealthy routes:** ${unhealthyCount}`,
    '',
    '## Route Results',
    '',
    '| Route | Status | Redirects | Result |',
    '|-------|--------|-----------|--------|',
  ];

  for (const r of results) {
    mdLines.push(`| ${r.route} | ${r.status || 'N/A'} | ${r.redirects} | ${r.ok ? '✅ pass' : '❌ fail'} |`);
  }

  if (unhealthyRoutes.length > 0) {
    mdLines.push('');
    mdLines.push('## Unhealthy Routes');
    mdLines.push('');
    for (const r of unhealthyRoutes) {
      mdLines.push(`- ${r.route} — ${r.error || `HTTP ${r.status}`}`);
    }
  }

  fs.writeFileSync(mdPath, mdLines.join('\n') + '\n');

  log(`Checked ${ROUTES.length} routes: ${report.healthyCount} healthy, ${unhealthyCount} unhealthy, severity=${severity}`);
  log(`Report written to ${jsonPath}`);

  // Exit non-zero only on unhealthy to let CI escalate via the "Escalate" step
  if (unhealthyCount > 0) {
    log('Unhealthy routes detected — exiting with code 1');
    process.exit(1);
  }

  log('All routes healthy — exiting with code 0');
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
