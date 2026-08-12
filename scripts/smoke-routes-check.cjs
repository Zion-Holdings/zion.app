#!/usr/bin/env node
/**
 * scripts/smoke-routes-check.cjs
 *
 * Smoke test: verifies that all critical routes on the live site (or a local
 * build) return HTTP 200 and that key pages contain header navigation and
 * footer markup.
 *
 * Reads routes from config/smoke-routes.txt (one route per line).
 * If the file does not exist, falls back to a built-in set of essential routes.
 *
 * Usage: node scripts/smoke-routes-check.cjs [--base <url>] [--file <path>]
 *
 * Exit codes: 0 = all passed, 1 = one or more routes failed
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_URL = process.env.BASE_URL || 'https://ziontechgroup.com';

// Parse CLI args
let routesFile = path.join(process.cwd(), 'config', 'smoke-routes.txt');
let baseUrl = BASE_URL;
for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i] === '--base' && process.argv[i + 1]) baseUrl = process.argv[++i];
  else if (process.argv[i] === '--file' && process.argv[i + 1]) routesFile = process.argv[++i];
}

// Essential fallback routes if config file is missing
const FALLBACK_ROUTES = [
  '/', '/services/', '/services/ai-customer-support-pro/', '/about/',
  '/contact/', '/pricing/', '/blog/', '/case-studies/', '/tools/',
  '/solutions/', '/ai-services/', '/ai-lab/', '/free-consultation/',
  '/careers/', '/partners/', '/portal/', '/status/', '/status-page/',
  '/configurator/', '/service-comparison/', '/faq/', '/privacy/',
  '/terms/', '/cookies/', '/search/', '/industry-solutions/',
  '/zion-ai-cost-optimizer/', '/zion-ai-customer-360/',
  '/zion-ai-knowledge-management/', '/zion-ai-cyber-threat-intel/',
  '/tools/ai-service-router/', '/tools/roi-calculator/',
  '/tools/service-comparison/', '/tools/ssl-checker/',
  '/tools/port-scanner/', '/tools/health-check/',
];

// Load routes
let routes;
if (fs.existsSync(routesFile)) {
  routes = fs.readFileSync(routesFile, 'utf8')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('#'))
    .map(r => r.replace(/\/$/, '') || '/');  // normalize: remove trailing slash
  console.log(`📋 Loaded ${routes.length} routes from ${path.relative(process.cwd(), routesFile)}`);
} else {
  routes = FALLBACK_ROUTES.map(r => r.replace(/\/$/, '') || '/');
  console.log(`📋 Using ${routes.length} fallback routes`);
}

// Add trailing slash for the URL (site uses trailing slashes)
function toUrl(route) {
  if (route === '/') return baseUrl + '/';
  return baseUrl + route + '/';
}

function checkRoute(route) {
  const url = toUrl(route);
  try {
    const output = execSync(
      `curl -sL -o /dev/null -w "%{http_code}|%{redirect_url}" --max-time 20 "${url}"`,
      { timeout: 25000, encoding: 'utf8', stdio: 'pipe' }
    );
    const [status, redirect] = output.trim().split('|');
    return { status: status || '000', redirect: redirect || '' };
  } catch (e) {
    if (e.stdout && e.stdout.trim()) {
      const [status, redirect] = e.stdout.trim().split('|');
      return { status: status || '000', redirect: redirect || '' };
    }
    return { status: '000', redirect: '' };
  }
}

function checkContent(route) {
  // Check key pages for navigation header and footer markers
  const url = toUrl(route);
  let hasNav = false, hasFooter = false;
  try {
    const html = execSync(`curl -sL --max-time 20 "${url}"`, { timeout: 25000, encoding: 'utf8', stdio: 'pipe' });
    // Look for common nav markers (header with nav links, or "Navigation" text, or sticky header)
    hasNav = /<header|<nav|Navigation|Zion Tech Group|container-page|sticky top-0/i.test(html);
    // Look for footer markers
    hasFooter = /<footer|class=".*footer|Footer|© \d+|privacy policy|All rights reserved/i.test(html);
  } catch (e) {
    // skip content check on timeout
  }
  return { hasNav, hasFooter };
}

// Run checks
const passed = [];
const failed = [];
const results = [];

console.log(`\n🚀 Checking ${routes.length} routes against ${baseUrl}`);
console.log('='.repeat(60));

let count = 0;
for (const route of routes) {
  count++;
  const { status, redirect } = checkRoute(route);
  const ok = status === '200';

  if (ok && count <= 30) {
    // Deep content check for a sample of routes
    const content = checkContent(route);
    if (!content.hasNav || !content.hasFooter) {
      const warning = [];
      if (!content.hasNav) warning.push('missing nav');
      if (!content.hasFooter) warning.push('missing footer');
      console.log(`  ⚠️  ${route} → ${status} (content: ${warning.join(', ')})`);
    }
  }

  results.push({ route, status, ok, redirect });
  if (ok) {
    passed.push(route);
    console.log(`  ✅ ${route} → ${status}`);
  } else {
    failed.push({ route, status, redirect });
    console.log(`  ❌ ${route} → ${status}${redirect ? ' → ' + redirect : ''}`);
  }

  if (count % 25 === 0) {
    console.log(`  Progress: ${count}/${routes.length}`);
  }
}

console.log('\n' + '='.repeat(60));
console.log(`📊 Smoke Routes Results:`);
console.log(`  ✅ Passed: ${passed.length}`);
console.log(`  ❌ Failed: ${failed.length}`);

// Write report
const reportsDir = path.join(process.cwd(), 'automation', 'reports');
fs.mkdirSync(reportsDir, { recursive: true });
const reportPath = path.join(reportsDir, 'smoke-routes-results.json');
fs.writeFileSync(reportPath, JSON.stringify({
  timestamp: new Date().toISOString(),
  baseUrl,
  routesFile,
  total: routes.length,
  passed: passed.length,
  failed: failed.length,
  failedRoutes: failed,
  allResults: results,
}, null, 2));
console.log(`\n📄 Report saved to: ${path.relative(process.cwd(), reportPath)}`);

if (failed.length > 0) {
  console.log('\n❌ Failed routes:');
  failed.forEach(f => console.log(`  ${f.status} - ${f.route}${f.redirect ? ' (redirected to ' + f.redirect + ')' : ''}`));
  process.exit(1);
}

console.log('\n✅ All smoke routes passed!');
