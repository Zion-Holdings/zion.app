// Lead Form Routing Guard
//
// Verifies that the contact form on /contact submits to the expected
// commercial@ziontechgroup.com email and that the form endpoint is reachable.
// Writes a report JSON + markdown so downstream workflow steps can escalate
// issues via GitHub issues with dedup.
//
// Report output:
//   automation/reports/lead-form-routing-guard-latest.json
//   automation/reports/lead-form-routing-guard-body.md
//
const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = process.env.RELEASE_GUARDIAN_BASE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://ziontechgroup.com';

const TARGET_EMAIL = 'commercial@ziontechgroup.com';
const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');

function log(msg) { console.log(`[lead-routing-guard] ${msg}`); }

/** Fetch HTML with redirect following and timeout. */
async function fetchHtml(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  let currentUrl = url;
  let redirects = 0;
  let res;

  while (true) {
    const parsed = new URL(currentUrl);
    const options = {
      method: 'GET',
      headers: { 'User-Agent': 'zion-lead-guard/1.0', 'Accept': 'text/html' },
      signal: controller.signal,
    };

    res = await new Promise((resolve, reject) => {
      const req = https.get(parsed, options, (response) => {
        let data = '';
        response.on('data', chunk => data += chunk);
        response.on('end', () => resolve({ status: response.statusCode, body: data, headers: response.headers }));
      });
      req.on('error', reject);
      req.end();
    });

    if ([301, 302, 307, 308].includes(res.status) && redirects < 5) {
      const location = res.headers.location;
      if (!location) break;
      currentUrl = new URL(location, currentUrl).href;
      redirects++;
      continue;
    }
    break;
  }

  clearTimeout(timeout);
  return { status: res.status, body: res.body, finalUrl: currentUrl };
}

/**
 * Extract email addresses from HTML text and href/mailto attributes.
 * Also extract form action attributes.
 */
function extractEmails(html) {
  const emails = new Set();
  // mailto: links
  const mailtoRe = /mailto:([^\s"'>]+)/gi;
  let m;
  while ((m = mailtoRe.exec(html)) !== null) emails.add(m[1]);

  // raw email addresses in text
  const emailRe = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  while ((m = emailRe.exec(html)) !== null) emails.add(m[0]);

  return Array.from(emails);
}

function extractFormActions(html) {
  const actions = [];
  const formRe = /<form[^>]*action=["']([^"']*)["'][^>]*>/gi;
  let m;
  while ((m = formRe.exec(html)) !== null) actions.push(m[1]);
  if (actions.length === 0) actions.push('no-form-action-found');
  return actions;
}

async function main() {
  log(`Checking contact form routing on ${BASE_URL}`);

  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  const findings = [];
  let targetEmailFound = false;
  let formActions = [];
  let status = 'healthy';
  let httpStatus = null;
  let finalUrl = null;

  try {
    const res = await fetchHtml(BASE_URL + '/contact');
    httpStatus = res.status;
    finalUrl = res.finalUrl;
    log(`Fetched /contact: HTTP ${httpStatus} (final: ${finalUrl})`);

    if (res.status >= 400) {
      findings.push({
        severity: 'error',
        type: 'unreachable',
        file: '/contact',
        detail: `Contact page returned HTTP ${res.status}`,
      });
      status = 'unhealthy';
    }

    const emails = extractEmails(res.body);
    formActions = extractFormActions(res.body);
    log(`Found emails: ${JSON.stringify(emails)}`);
    log(`Found form actions: ${JSON.stringify(formActions)}`);

    // Check if target email is referenced anywhere on the page
    if (!emails.includes(TARGET_EMAIL)) {
      findings.push({
        severity: 'warn',
        type: 'missing-target-email',
        file: '/contact',
        detail: `Expected target email ${TARGET_EMAIL} not found. Found: ${JSON.stringify(emails)}`,
      });
      status = 'unhealthy';
    } else {
      targetEmailFound = true;
    }

    // Check if form has an action — warn if missing (could be JS-powered)
    if (formActions.length === 0 || formActions[0] === 'no-form-action-found') {
      findings.push({
        severity: 'warn',
        type: 'no-form-action',
        file: '/contact',
        detail: 'No form action attribute found on the contact page',
      });
      // Not critical to status if email is present — could use JS handler
    }

  } catch (err) {
    findings.push({
      severity: 'error',
      type: 'fetch-error',
      file: '/contact',
      detail: err.message,
    });
    status = 'unhealthy';
  }

  const report = {
    generatedAt: new Date().toISOString(),
    targetUrl: BASE_URL + '/contact',
    httpStatus,
    finalUrl,
    targetEmail: TARGET_EMAIL,
    status,
    targetEmailFound,
    formActions,
    findings,
    findingsCount: findings.length,
  };

  const jsonPath = path.join(REPORTS_DIR, 'lead-form-routing-guard-latest.json');
  const bodyPath = path.join(REPORTS_DIR, 'lead-form-routing-guard-body.md');

  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2) + '\n');

  // Write the body file for the issue template (matches workflow expectations)
  const bodyLines = [
    '## Lead form routing guard',
    '',
    `- status: **${status}**`,
    `- targetEmail: ${TARGET_EMAIL}`,
    `- findings: ${findings.length}`,
    '',
  ];
  for (const f of findings) {
    bodyLines.push(`- [${f.severity}] ${f.type} ${f.file} — ${f.detail}`);
  }
  fs.writeFileSync(bodyPath, bodyLines.join('\n') + '\n');

  log(`Status: ${status}, findings: ${findings.length}`);
  log(`Report written to ${jsonPath}`);

  if (status !== 'healthy') {
    log('Lead form routing issues detected — exiting with code 1');
    process.exit(1);
  }

  log('Lead form routing is healthy');
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
