#!/usr/bin/env node
/**
 * Smoke Routes Drift Check
 * Verifies that static routes in app/ have corresponding sitemap entries
 * (excluding dynamic [slug] routes which are handled by services catalog).
 *
 * Checks:
 * 1. Static routes that exist in app/ are represented in sitemap
 * 2. _redirects file is valid and non-empty
 * 3. No service-breaking wildcard redirects
 */
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
let errors = 0;
let warnings = 0;

console.log('Smoke Routes Drift Check\n');

// Discover actual static routes from app/ directory
const appDir = path.join(repo, 'app');
const staticRoutes = ['/' ];

if (fs.existsSync(path.join(appDir, 'about'))) staticRoutes.push('/about');
if (fs.existsSync(path.join(appDir, 'contact'))) staticRoutes.push('/contact');
if (fs.existsSync(path.join(appDir, 'ai'))) staticRoutes.push('/ai');
if (fs.existsSync(path.join(appDir, 'ai-services'))) staticRoutes.push('/ai-services');
if (fs.existsSync(path.join(appDir, 'blog'))) staticRoutes.push('/blog');
if (fs.existsSync(path.join(appDir, 'dashboard'))) staticRoutes.push('/dashboard');
if (fs.existsSync(path.join(appDir, 'faq'))) staticRoutes.push('/faq');
if (fs.existsSync(path.join(appDir, 'careers'))) staticRoutes.push('/careers');
if (fs.existsSync(path.join(appDir, 'case-studies'))) staticRoutes.push('/case-studies');
if (fs.existsSync(path.join(appDir, 'business-customers'))) staticRoutes.push('/business-customers');

// Check sitemap
const sitemapPath = path.join(repo, 'sitemap.xml');
let sitemapContent = '';
if (fs.existsSync(sitemapPath)) {
  sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  console.log('  ✓ sitemap.xml exists');
} else {
  console.error('  ✗ sitemap.xml missing');
  process.exit(1);
}

// Only check routes that actually exist as directories in app/
staticRoutes.forEach(route => {
  const fullUrl = `https://ziontechgroup.com${route}/`;
  const fullUrlNoSlash = `https://ziontechgroup.com${route}`;
  if (sitemapContent.includes(`>${fullUrl}</loc>`) || sitemapContent.includes(`>${fullUrlNoSlash}</loc>`) || sitemapContent.includes(`>${route}</loc>`)) {
    console.log(`  ✓ sitemap includes ${route}`);
  } else {
    console.error(`  ✗ sitemap missing ${route}`);
    errors++;
  }
});

// Check _redirects
const redirectsPath = path.join(repo, 'public/_redirects');
if (fs.existsSync(redirectsPath)) {
  const rcontent = fs.readFileSync(redirectsPath, 'utf-8');
  const lines = rcontent.split('\n').filter(l => l.trim() && !l.startsWith('#'));
  if (lines.length > 0) {
    console.log(`  ✓ public/_redirects valid (${lines.length} rules)`);
  } else {
    console.error('  ✗ public/_redirects is empty');
    errors++;
  }
} else {
  console.error('  ✗ public/_redirects missing');
  errors++;
}

// Check root _redirects doesn't have wildcard that breaks service pages
const rootRedirects = path.join(repo, '_redirects');
if (fs.existsSync(rootRedirects)) {
  const rcontent = fs.readFileSync(rootRedirects, 'utf-8');
  if (rcontent.includes('/services/* /services/ 301')) {
    console.error('  ✗ root _redirects has service-breaking wildcard redirect');
    errors++;
  } else {
    console.log('  ✓ root _redirects does not have service-breaking wildcards');
  }
}

// Check services route is in sitemap
if (sitemapContent.includes('https://ziontechgroup.com/services')) {
  console.log('  ✓ sitemap includes /services');
} else {
  console.error('  ✗ sitemap missing /services');
  errors++;
}

// Count service pages in sitemap
const serviceEntries = (sitemapContent.match(/\/services\/[a-f0-9-]+/g) || []).length;
console.log(`  ℹ ${serviceEntries} service pages found in sitemap`);

console.log(`\n${errors > 0 ? errors + ' errors' : 'OK'}`);
process.exit(errors > 0 ? 1 : 0);
