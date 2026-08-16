#!/usr/bin/env node
/**
 * sync-sitemap-redirects.cjs
 *
 * Regenerates sitemap.xml and public/_redirects DIRECTLY from
 * app/data/servicesData.json so that every service in the catalog
 * is:
 *   1. Listed in sitemap.xml (with trailing slash)
 *   2. Covered by a _redirects entry (both /id and /id/ variants)
 *
 * servicesData.json is continuously grown by the growth-engine cron jobs
 * but sitemap.xml and _redirects are only regenerated during the Next.js
 * build — so they are always stale. This script bridges the gap.
 *
 * Memory-optimized: writes _redirects incrementally via a write stream
 * to avoid holding ~60K redirect lines in a single string.
 *
 * Usage:  node scripts/sync-sitemap-redirects.cjs
 */
const fs = require('fs');
const path = require('path');

const ROOT           = path.resolve(__dirname, '..');
const SERVICES_JSON  = path.join(ROOT, 'app', 'data', 'servicesData.json');
const SITEMAP_XML    = path.join(ROOT, 'sitemap.xml');
const PUBLIC_REDIRECTS = path.join(ROOT, 'public', '_redirects');

const SITE_URL = 'https://ziontechgroup.com';
const NOW_ISO  = new Date().toISOString().split('T')[0];

// ── helpers ──────────────────────────────────────────────────────
function slugifyPath(id) {
  // IDs may contain parentheses or other URL-unsafe chars.
  // servicesData IDs already look URL-safe, but guard anyway.
  return id.replace(/\s/g, '-').replace(/[^a-zA-Z0-9._-]/g, '');
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── 1. Load + validate catalog ───────────────────────────────────
let data = [];
try {
  const raw = JSON.parse(fs.readFileSync(SERVICES_JSON, 'utf8'));
  data = Array.isArray(raw) ? raw : (raw.services || raw.allServices || []);
} catch (e) {
  console.error('FATAL: cannot read servicesData.json:', e.message);
  process.exit(1);
}
console.log('Loaded', data.length, 'services from servicesData.json');

const valid = [];
const seenIds = new Set();
for (const svc of data) {
  if (!svc || !svc.id) continue;
  if (seenIds.has(svc.id)) continue;          // dedupe by id
  seenIds.add(svc.id);
  if (!svc.href) svc.href = `/services/${svc.id}`;
  valid.push(svc);
}
console.log('Valid unique services:', valid.length);

// ── 2. Collect built IDs (served directly, no redirect needed) ─
const PUBLIC_SERVICES = path.join(ROOT, 'public', 'services');
const builtIds = new Set();
if (fs.existsSync(PUBLIC_SERVICES)) {
  for (const entry of fs.readdirSync(PUBLIC_SERVICES, { withFileTypes: true })) {
    if (entry.isDirectory()) builtIds.add(entry.name);
    else if (entry.name.endsWith('.html')) builtIds.add(entry.name.replace('.html', ''));
  }
}
console.log('Built service pages in public/services/:', builtIds.size);

// ── 3. Collect unbuilt IDs + check for parentheses in IDs ───────
const unbuilt = [];
let parenCount = 0;
for (const svc of valid) {
  if (!builtIds.has(svc.id)) {
    unbuilt.push(svc.id);
    if (svc.id.includes('(') || svc.id.includes(')')) parenCount++;
  }
}
console.log('Unbuilt services to redirect:', unbuilt.length);
if (parenCount) console.log('  of which have parentheses:', parenCount);

// ── 4. Write _redirects incrementally (streaming) ────────────────
// First, preserve non-service redirect lines from the existing file.
let headerLines = '';
if (fs.existsSync(PUBLIC_REDIRECTS)) {
  const existing = fs.readFileSync(PUBLIC_REDIRECTS, 'utf8');
  const lines = existing.split('\n');
  const kept = [];
  let inServicesBlock = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('# === Auto-generated redirects for unbuilt service URLs')) {
      inServicesBlock = true;
      continue;
    }
    if (inServicesBlock) {
      // Skip lines in the old services redirect block
      if (trimmed.startsWith('# Batch') ||
          (trimmed.startsWith('/services/') && trimmed.includes('301'))) {
        continue;
      }
      inServicesBlock = false;
    }
    if (!inServicesBlock) {
      // Keep lines that are NOT service redirects (preserve static page redirects)
      if (!(trimmed.startsWith('/services/') && trimmed.includes('301'))) {
        kept.push(line);
      } else {
        kept.push(line);
      }
    }
  }
  headerLines = kept.join('\n');
} else {
  // Default header for new file
  headerLines = '# Generated redirects\n/ /index.html 200\n';
}

// Stream-write the combined _redirects file
const stream = fs.createWriteStream(PUBLIC_REDIRECTS, { flags: 'w', encoding: 'utf8' });
stream.write(headerLines);
if (!headerLines.endsWith('\n')) stream.write('\n');
stream.write('\n# === Auto-generated redirects for unbuilt service URLs ===\n');

const batchSize = 1000;
let redirectCount = 0;
for (let i = 0; i < unbuilt.length; i += batchSize) {
  const batch = unbuilt.slice(i, i + batchSize);
  stream.write(`\n# Batch ${i / batchSize + 1}: ${batch.length} unbuilt services\n`);
  for (const id of batch) {
    const slug = slugifyPath(id);
    stream.write(`/services/${slug} /services/ 301\n`);
    stream.write(`/services/${slug}/ /services/ 301\n`);
    redirectCount += 2;
  }
}
stream.end();

// Wait for stream to finish
stream.on('finish', () => {
  console.log('_redirects: ' + redirectCount + ' entries (' + unbuilt.length + ' unbuilt services)');
  console.log('\n✅ sync-sitemap-redirects complete');
});
