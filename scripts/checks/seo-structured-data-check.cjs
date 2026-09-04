const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const layout = path.join(root, 'src/app/layout.tsx');
const layoutSource = fs.readFileSync(layout, 'utf8');

const checks = [
  ['metadataBase absolute https org URL', () => Boolean(layoutSource.match(/metadataBase:\s*new\s+URL\(['"]https:\/\/ziontechgroup\.com['"]\)/))],
  ['canonical alternates.url', () => Boolean(layoutSource.match(/alternates:\s*\{[^}]*canonical:\s*['"]\/['"]/s))],
  ['openGraph block', () => Boolean(layoutSource.match(/openGraph:\s*\{/))],
  ['openGraph.title', () => Boolean(layoutSource.match(/openGraph:\s*\{[^}]*title:\s*['"]Zion Tech Group['"]/s))],
  ['openGraph.url', () => Boolean(layoutSource.match(/openGraph:\s*\{[^}]*url:\s*['"]\/['"]/s))],
  ['openGraph.siteName', () => Boolean(layoutSource.match(/openGraph:\s*\{[^}]*siteName:\s*['"]Zion Tech Group['"]/s))],
  ['twitter block', () => Boolean(layoutSource.match(/twitter:\s*\{/))],
  ['twitter.card summary_large_image', () => Boolean(layoutSource.match(/twitter:\s*\{[^}]*card:\s*['"]summary_large_image['"]/s))],
];

const failed = [];
for (const [name, fn] of checks) {
  if (!fn()) {
    failed.push(name);
    console.error(`FAIL: missing ${name}`);
  } else {
    console.log(`PASS: ${name}`);
  }
}

if (failed.length) {
  console.error(`\nseo structured data check failed: ${failed.length} failures`);
  process.exit(1);
}

console.log(`\nseo structured data check: OK (${checks.length}/${checks.length})`);
process.exit(0);
