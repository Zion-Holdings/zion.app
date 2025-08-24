#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');

function fileHasOgMeta(content) {
  return /property=["']og:/i.test(content) || /name=["']twitter:card/i.test(content);
}

function extractTitle(content) {
  const m = content.match(/<title>([^<]+)<\/title>/i);
  return m ? m[1].trim() : null;
}

function injectOgMeta(content) {
  const title = extractTitle(content) || 'Zion — Autonomous Cloud Automations';
  const description = 'Futuristic, cloud-native autonomous automations that improve continuously.';
  const metaBlock = `\n        <meta property="og:title" content="${title}" />\n        <meta property="og:description" content="${description}" />\n        <meta property="og:type" content="website" />\n        <meta property="og:image" content="/og-image.png" />\n        <meta name="twitter:card" content="summary_large_image" />\n`;
  // Find first <Head> ... >
  const headOpen = content.indexOf('<Head>');
  if (headOpen === -1) return content; // no head, skip
  const insertPos = headOpen + '<Head>'.length;
  return content.slice(0, insertPos) + metaBlock + content.slice(insertPos);
}

(function main() {
  const files = glob.sync('**/*.{tsx,jsx}', { cwd: PAGES_DIR, absolute: true });
  let updated = 0;
  for (const file of files) {
    const rel = path.relative(ROOT, file);
    const base = path.basename(file);
    if (base.startsWith('_')) continue; // skip _app etc
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<meta property="og:image"') || fileHasOgMeta(content)) continue;
    if (!content.includes('<Head>')) continue;
    const next = injectOgMeta(content);
    if (next !== content) {
      fs.writeFileSync(file, next);
      updated += 1;
      console.log(`Injected OG meta into ${rel}`);
    }
  }
  console.log(`OG enhancement complete. Files updated: ${updated}`);
})();