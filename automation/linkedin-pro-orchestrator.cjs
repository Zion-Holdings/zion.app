'use strict';

const CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const token = process.env.LINKEDIN_ACCESS_TOKEN || '';
const orgId = process.env.LINKEDIN_ORG_ID || '';

function log(message) {
  process.stdout.write(`[linkedin-pro] ${message}\n`);
}

if (!token || !orgId) {
  log('Missing LINKEDIN_ACCESS_TOKEN or LINKEDIN_ORG_ID. Skipping pro post.');
  process.exit(0);
}

const content = `Professional insights and features at ${CANONICAL_URL}.`;
log(`Would post (Pro) to LinkedIn org ${orgId}: ${content}`);

process.exit(0);


