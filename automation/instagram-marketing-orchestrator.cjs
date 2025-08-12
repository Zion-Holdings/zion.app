'use strict';

const CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const igUserId = process.env.IG_USER_ID || '';
const igToken = process.env.IG_ACCESS_TOKEN || '';

function log(message) {
  process.stdout.write(`[instagram-marketing] ${message}\n`);
}

if (!igUserId || !igToken) {
  log('Missing IG_USER_ID or IG_ACCESS_TOKEN. Skipping Instagram post.');
  process.exit(0);
}

const caption = `Explore our latest features: ${CANONICAL_URL}`;
log(`Would post to Instagram user ${igUserId}: ${caption}`);

process.exit(0);


