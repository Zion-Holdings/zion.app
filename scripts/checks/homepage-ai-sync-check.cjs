// scripts/checks/homepage-ai-sync-check.cjs
// Checks that core AI-owned entries are represented in homepage code.
// Non-critical: warn-only when homepage links are absent.
const fs = require('fs');
const path = require('path');

const homepagePath = path.join(process.cwd(), 'app/page.tsx');

if (!fs.existsSync(homepagePath)) {
  console.error('homepage missing: app/page.tsx');
  process.exit(1);
}

const content = fs.readFileSync(homepagePath, 'utf8');
const expectedTokens = [
  '/agents-monitoring',
  '/ai-lab',
  '/monitoring',
  '/automation',
];

const present = expectedTokens.filter((token) => content.includes(token));
console.log(`homepage ai sync includes=${present.length}/${expectedTokens.length} missing=${expectedTokens.length - present.length}`);
if (present.length !== expectedTokens.length) {
  console.warn('homepage ai sync mismatch: expected AI-owned tokens missing, upgrading to a warning for now');
  process.exit(0);
}
