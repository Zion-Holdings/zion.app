// scripts/checks/verify-postbuild-artifacts.cjs
// Validates expected postbuild artifacts exist in out/ after build.
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const outDir = path.join(repo, 'out');

const REQUIRED = [
  path.join(outDir, 'index.html'),
  path.join(outDir, '404.html'),
  path.join(outDir, '.nojekyll'),
  path.join(outDir, 'robots.txt'),
  path.join(outDir, 'data', 'services.json'),
  path.join(outDir, 'service-index.json'),
];

const missing = REQUIRED.filter((filePath) => !fs.existsSync(filePath));

if (missing.length !== 0) {
  console.error('postbuild artifacts missing:');
  missing.forEach((filePath) => console.error(`  - ${path.relative(repo, filePath)}`));
  process.exit(1);
}

const robotsPath = path.join(outDir, 'robots.txt');
const robotsContent = fs.readFileSync(robotsPath, 'utf8');
const sitemapRef = 'https://ziontechgroup.com/sitemap.xml';

if (!robotsContent.includes(sitemapRef)) {
  console.error(`robots.txt missing expected sitemap reference: ${sitemapRef}`);
  process.exit(1);
}

console.log(`postbuild artifacts ok files=${REQUIRED.length}`);
