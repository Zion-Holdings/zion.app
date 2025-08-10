#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const root = process.cwd();
const SITE_URL = process.env.SITE_URL || '';
const file = path.join(root, 'index.html');

function setOrUpdateMeta(html, selectorRegex, replacement) {
  if (selectorRegex.test(html)) {
    return html.replace(selectorRegex, replacement);
  }
  const headClose = '</head>';
  return html.replace(headClose, `${replacement}\n${headClose}`);
}

(async () => {
  if (!SITE_URL) {
    console.warn('SITE_URL not set; skipping SEO enhance');
    process.exit(0);
  }
  let html = await fs.readFile(file, 'utf8');
  const canonicalTag = new RegExp('<link\\s+rel="canonical"[\"\'\s\S]*?>', 'i');
  const ogUrlMeta = new RegExp('<meta\\s+property="og:url"[\"\'\s\S]*?>', 'i');
  const twCard = new RegExp('<meta\\s+name="twitter:card"[\"\'\s\S]*?>', 'i');
  const twTitle = new RegExp('<meta\\s+name="twitter:title"[\"\'\s\S]*?>', 'i');
  const twDesc = new RegExp('<meta\\s+name="twitter:description"[\"\'\s\S]*?>', 'i');
  const twImg = new RegExp('<meta\\s+name="twitter:image"[\"\'\s\S]*?>', 'i');

  html = setOrUpdateMeta(html, canonicalTag, `    <link rel="canonical" href="${SITE_URL}/" />`);
  html = setOrUpdateMeta(html, ogUrlMeta, `    <meta property="og:url" content="${SITE_URL}/" />`);

  // Extract existing title/description to reuse for Twitter
  const titleMatch = html.match(/<title>([\s\S]*?)<\\/title>/i);
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'Zion';
  const description = descMatch ? descMatch[1].trim() : 'AI‑powered marketplace for high‑tech.';

  html = setOrUpdateMeta(html, twCard, '    <meta name="twitter:card" content="summary_large_image" />');
  html = setOrUpdateMeta(html, twTitle, `    <meta name="twitter:title" content="${title}" />`);
  html = setOrUpdateMeta(html, twDesc, `    <meta name="twitter:description" content="${description}" />`);
  html = setOrUpdateMeta(html, twImg, `    <meta name="twitter:image" content="${SITE_URL}/og-image.png" />`);

  await fs.writeFile(file, html);
  console.log('SEO enhanced index.html with canonical, og:url, and Twitter meta');
})().catch((e) => { console.error(e); process.exit(1); });