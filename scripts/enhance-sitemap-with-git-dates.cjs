#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITEMAP = path.join(PUBLIC_DIR, 'sitemap.xml');

function getLastCommitDateForPath(relPath) {
  try {
    const out = execSync(`git log -1 --format=%cI -- ${relPath}`, { encoding: 'utf8' }).trim();
    return out || null;
  } catch (_) {
    return null;
  }
}

function main() {
  if (!fs.existsSync(SITEMAP)) {
    console.error('sitemap.xml not found. Run generate-site-artifacts first.');
    process.exit(1);
  }
  let xml = fs.readFileSync(SITEMAP, 'utf8');
  const urlBlocks = xml.split('<url>').slice(1).map((chunk) => '<url>' + chunk);
  const updated = urlBlocks.map((block) => {
    const locMatch = block.match(/<loc>(.*?)<\/loc>/);
    if (!locMatch) return block;
    const url = locMatch[1];
    const route = new URL(url).pathname;
    let fileGuess = route === '/' ? 'pages/index.tsx' : `pages${route}.tsx`;
    if (!fs.existsSync(path.join(process.cwd(), fileGuess))) {
      fileGuess = fileGuess.replace(/\.tsx$/, '.ts');
    }
    const lastmod = getLastCommitDateForPath(fileGuess);
    if (!lastmod) return block;
    if (block.includes('<lastmod>')) {
      return block.replace(/<lastmod>.*?<\/lastmod>/, `<lastmod>${lastmod}<\/lastmod>`);
    }
    return block.replace('</url>', `  <lastmod>${lastmod}<\/lastmod>\n</url>`);
  });
  const header = xml.split('<url>')[0];
  const result = header + updated.join('');
  fs.writeFileSync(SITEMAP, result);
  console.log('Updated sitemap.xml with lastmod dates');
}

if (require.main === module) main();