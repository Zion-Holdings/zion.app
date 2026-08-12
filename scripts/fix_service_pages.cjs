#!/usr/bin/env node
/**
 * generate-service-redirects.cjs
 * 
 * Creates _redirects entries for service URLs that exist in servicesData.json
 * but were NOT statically generated (only 746 of 45K were built).
 * These redirects point to /services/ so visitors don't hit 404.
 *
 * Also:
 * - Fixes the canonical URL bug in app/services/[id]/page.tsx
 * - Expands generateStaticParams to generate ALL services
 * - Creates robots.txt
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const PUBLIC_SERVICES = path.join(PUBLIC_DIR, 'services');
const PUBLIC_REDIRECTS = path.join(PUBLIC_DIR, '_redirects');
const SERVICES_JSON = path.join(ROOT, 'app', 'data', 'servicesData.json');
const SVC_PAGE = path.join(ROOT, 'app', 'services', '[id]', 'page.tsx');

// ── Step 1: Fix canonical URL bug in [id]/page.tsx ──
function fixCanonical() {
  const file = fs.readFileSync(SVC_PAGE, 'utf8');
  let fixed = file;

  // Fix the broken canonical URL (missing closing backtick)
  fixed = fixed.replace(
    /canonical: `https:\/\/ziontechgroup\.com\/services\/\$\{service\.id\}\/\`/,
    'canonical: `https://ziontechgroup.com/services/${service.id}/`.replace(/\\/$/, "")'
  );

  // Simpler fix: just add the missing backtick
  fixed = file.replace(
    "canonical: `https://ziontechgroup.com/services/${service.id}/\n",
    'canonical: `https://ziontechgroup.com/services/${service.id}/`\n'
  );

  // Fix breadcrumb item URL too
  fixed = fixed.replace(
    'item: `https://ziontechgroup.com/services/${service.id}`,',
    'item: `https://ziontechgroup.com/services/${service.id}/`,'
  );

  if (fixed !== file) {
    fs.writeFileSync(SVC_PAGE, fixed);
    console.log('✅ Fixed canonical URL in app/services/[id]/page.tsx');
  } else {
    console.log('ℹ️  Canonical URL already fixed');
  }
}

// ── Step 2: Expand generateStaticParams ──
function expandStaticParams() {
  const file = fs.readFileSync(SVC_PAGE, 'utf8');

  // Pattern: the old "only top 20" block
  const oldBlock = `export async function generateStaticParams() {
  // Only statically generate the top 20 most important/popular services
  const sorted = [...allServices].sort((a, b) => {
    const scoreA = (a.features?.length || 0) * 3 + (a.benefits?.length || 0) * 2 + (a.popular ? 50 : 0);
    const scoreB = (b.features?.length || 0) * 3 + (b.benefits?.length || 0) * 2 + (b.popular ? 50 : 0);
    return scoreB - scoreA;
  });
  const top = sorted.slice(0, 20);
  const params: { id: string }[] = [];
  for (const service of top) {
    params.push({ id: service.id });
    if (service.id.includes('_')) {
      params.push({ id: service.id.replace(/_/g, '-') });
    }
  }
  return params;
}`;

  const newBlock = `export async function generateStaticParams() {
  // Generate pages for ALL services in the catalog
  const params: { id: string }[] = [];
  for (const service of allServices) {
    params.push({ id: service.id });
    if (service.id.includes('_')) {
      params.push({ id: service.id.replace(/_/g, '-') });
    }
  }
  return params;
}`;

  if (file.includes(oldBlock)) {
    fs.writeFileSync(SVC_PAGE, file.replace(oldBlock, newBlock));
    console.log('✅ Expanded generateStaticParams to generate ALL services');
  } else {
    console.log('ℹ️  generateStaticParams already generates all services');
  }
}

// ── Step 3: Generate redirects for unbuilt service URLs ──
function generateRedirects() {
  const data = JSON.parse(fs.readFileSync(SERVICES_JSON, 'utf8'));
  console.log(`Loaded ${data.length} services from servicesData.json`);

  // Get existing public service dirs
  const existing = new Set();
  if (fs.existsSync(PUBLIC_SERVICES)) {
    for (const entry of fs.readdirSync(PUBLIC_SERVICES, { withFileTypes: true })) {
      if (entry.isDirectory()) existing.add(entry.name);
      else if (entry.name.endsWith('.html')) existing.add(entry.name.replace('.html', ''));
    }
  }
  console.log(`Existing service pages in public/services/: ${existing.size}`);

  // Find service IDs in JSON that DON'T have built pages
  const missing = [];
  for (const svc of data) {
    if (!existing.has(svc.id)) {
      missing.push(svc.id);
    }
  }
  console.log(`Missing service pages: ${missing.length}`);

  // Read existing redirects
  let redirectsContent = '';
  if (fs.existsSync(PUBLIC_REDIRECTS)) {
    redirectsContent = fs.readFileSync(PUBLIC_REDIRECTS, 'utf8');
  }

  // Remove old "services/" redirect blocks (we'll regenerate)
  const redirectLines = redirectsContent.split('\n');
  const keptLines = [];
  let inOldServicesBlock = false;
  for (const line of redirectLines) {
    if (line.includes('/services/') && (line.includes('301') || line.includes('/services/'))) {
      inOldServicesBlock = true;
      continue;
    }
    inOldServicesBlock = false;
    keptLines.push(line);
  }

  // Add redirects for missing services - redirect to /services/
  const batchSize = 1000;
  let newRedirects = '\n# === Auto-generated redirects for unbuilt service URLs ===\n';
  for (let i = 0; i < missing.length; i += batchSize) {
    const batch = missing.slice(i, i + batchSize);
    newRedirects += `\n# Batch ${i / batchSize + 1}: ${batch.length} unbuilt services\n`;
    for (const id of batch) {
      newRedirects += `/services/${id} /services/ 301\n`;
      newRedirects += `/services/${id}/ /services/ 301\n`;
    }
  }

  // Write combined redirects
  const fullRedirects = keptLines.join('\n') + newRedirects;
  fs.writeFileSync(PUBLIC_REDIRECTS, fullRedirects);
  console.log(`✅ Generated ${missing.length * 2} redirect entries in public/_redirects`);

  return missing.length;
}

// ── Step 4: Create robots.txt ──
function createRobotsTxt() {
  const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
  const content = `# robots.txt for Zion Tech Group
# https://ziontechgroup.com

User-agent: *
Allow: /
Crawl-delay: 1

# Sitemaps
Sitemap: https://ziontechgroup.com/sitemap.xml
`;
  fs.writeFileSync(robotsPath, content);
  console.log('✅ Created public/robots.txt');
}

// ── Step 5: Regenerate sitemap from actual public/ pages ──
function regenerateSitemap() {
  // Use the sitemap generator script
  const sitemapScript = path.join(ROOT, 'scripts', 'generate-public-sitemap.cjs');
  if (fs.existsSync(sitemapScript)) {
    const { execSync } = require('child_process');
    try {
      const output = execSync(`node ${sitemapScript}`, { encoding: 'utf8' });
      console.log('✅ Sitemap regenerated from public/ contents');
      console.log(output.split('\n').filter(l => l.includes('Written') || l.includes('Collected') || l.includes('Wrote') || l.includes('URLs')).join('\n'));
    } catch (e) {
      console.error('⚠️  Sitemap generation error:', e.message);
    }
  }
}

// ── Main ──
function main() {
  console.log('=== Fixing service page issues ===\n');

  fixCanonical();
  expandStaticParams();
  generateRedirects();
  createRobotsTxt();
  regenerateSitemap();

  console.log('\n=== Done ===');
}

main();
