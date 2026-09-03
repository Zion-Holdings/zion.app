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

function write(rel, content) {
  const dest = path.join(PUBLIC, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, content);
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
  if (rel.startsWith('community/')) return '/';
  return '/services/';
}

for (const rel of SERP_CLOSER_PATHS) {
  const src = path.join(ROOT, rel);
  const content = fs.existsSync(src)
    ? fs.readFileSync(src, 'utf8')
    : honestCloser({ title: titleFromSlug(rel), canonical: closerCanonical(rel) });
  if (!fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(src), { recursive: true });
    fs.writeFileSync(src, content);
  }
  write(rel, content);
}

write('.nojekyll', '');
write('CNAME', 'ziontechgroup.com\n');

const four = path.join(ROOT, '404.html');
if (fs.existsSync(four)) write('404.html', fs.readFileSync(four, 'utf8'));

console.log('public/ synced', FILES.length, 'FILES +', SERP_CLOSER_PATHS.length, 'SERP closers');
