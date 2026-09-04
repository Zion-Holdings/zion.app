/**
 * Mirror honest money/ops pages into public/ so GitHub Pages (which
 * serves public/ when present) and pages.yml stay aligned.
 */
import fs from 'node:fs';
import path from 'node:path';
import { FILES } from './publish-gh-pages.mjs';
import { SERP_CLOSER_PATHS, honestCloser, titleFromSlug } from './honest-closer.mjs';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const PUBLIC = path.join(ROOT, 'public');

/** Working Portuguese tools — never overwrite with English leftover leftover closers. */
const WORKING_PT_TOOLS = new Set([
  'tools/json-formatter/index.html',
  'tools/qr-code-generator/index.html',
  'tools/box-shadow-generator/index.html',
  'tools/phishing-analyzer/index.html',
  'tools/cron-expression-explainer/index.html',
  'tools/2026-ma-due-diligence-checklist/index.html',
]);

function mkdirp(dir) {
  if (fs.existsSync(dir) && fs.statSync(dir).isFile()) fs.unlinkSync(dir);
  fs.mkdirSync(dir, { recursive: true });
}

function write(rel, content) {
  const dest = path.join(PUBLIC, rel);
  mkdirp(path.dirname(dest));
  fs.writeFileSync(dest, content);
}

function looksLikeHonestCloser(html) {
  return html.includes('Not a packaged SKU') && html.includes('noindex');
}

function looksLikeLeftover(html) {
  return (
    html.includes('_next/static') ||
    html.includes('Get Free Consultation') ||
    html.includes('Agende sua') ||
    html.startsWith('---\n') ||
    html.startsWith('---\r\n')
  );
}

for (const rel of FILES) {
  const src = path.join(ROOT, rel);
  if (!fs.existsSync(src)) {
    console.warn('missing', rel);
    continue;
  }
  write(rel, fs.readFileSync(src, 'utf8'));
}

function closerCanonical(rel) {
  if (rel.startsWith('blog/')) return '/blog/';
  if (rel.startsWith('tools/')) return '/tools/';
  if (rel.startsWith('solutions/')) return '/solutions/';
  if (/^ai\/it-support-/.test(rel)) return '/it-support/';
  if (rel.startsWith('direitos-globais') || rel.startsWith('roteiros/')) return '/services/';
  if (rel.startsWith('community/')) return '/';
  if (rel.startsWith('privacy-policy')) return '/privacy/';
  if (/^(industry|trust|government|composio-stack|whatsapp-automation)\//.test(rel)) return '/';
  if (rel === 'hp-support.html' || rel === 'outsourcing-it.html') return '/';
  if (!rel.startsWith('services/') && !rel.startsWith('blog/') && !rel.startsWith('tools/')) {
    // leftover hash SKUs dumped at repo root are not heritage hardware
    if (/-[0-9a-f]{8}\/index\.html$/.test(rel)) return '/';
    return '/heritage/';
  }
  return '/services/';
}

for (const rel of SERP_CLOSER_PATHS) {
  if (WORKING_PT_TOOLS.has(rel)) {
    console.log('skip working Portuguese tool', rel);
    continue;
  }
  const src = path.join(ROOT, rel);
  const closer = honestCloser({ title: titleFromSlug(rel), canonical: closerCanonical(rel) });
  let content = closer;
  if (fs.existsSync(src) && fs.statSync(src).isFile()) {
    const existing = fs.readFileSync(src, 'utf8');
    if (looksLikeHonestCloser(existing) && !looksLikeLeftover(existing)) content = existing;
  } else {
    mkdirp(path.dirname(src));
    fs.writeFileSync(src, content);
  }
  if (fs.existsSync(src) && fs.statSync(src).isFile() && looksLikeLeftover(fs.readFileSync(src, 'utf8'))) {
    fs.writeFileSync(src, closer);
    content = closer;
  }
  write(rel, content);
}

write('.nojekyll', '');
write('CNAME', 'ziontechgroup.com\n');

const four = path.join(ROOT, '404.html');
if (fs.existsSync(four)) write('404.html', fs.readFileSync(four, 'utf8'));

console.log('public/ synced', FILES.length, 'FILES +', SERP_CLOSER_PATHS.length, 'SERP closers');
