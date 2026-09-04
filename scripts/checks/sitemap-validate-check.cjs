#!/usr/bin/env node
/**
 * Sitemap Validation Check
 * Verifies that sitemap.xml is present, valid XML, and contains no duplicate URLs.
 *
 * Checks:
 * 1. sitemap.xml exists at repo root
 * 2. Valid XML structure
 * 3. No duplicate <loc> entries
 * 4. Has <urlset> root element with proper namespace
 *
 * Exit codes: 0 = pass, 1 = fail
 */
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
let errors = 0;

console.log('Sitemap Validation Check\n');

const sitemapPath = path.join(repo, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error('  ✗ sitemap.xml missing from repo root');
  process.exit(1);
}

const content = fs.readFileSync(sitemapPath, 'utf-8');
console.log('  ✓ sitemap.xml exists');

// Basic XML validity check
const xmlHeader = content.trim().startsWith('<?xml');
const hasUrlset = content.includes('<urlset');
const hasNamespace = content.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"') ||
                     content.includes("xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'");

if (!xmlHeader) {
  console.error('  ✗ sitemap.xml missing XML declaration');
  errors++;
} else {
  console.log('  ✓ XML declaration present');
}

if (!hasUrlset) {
  console.error('  ✗ sitemap.xml missing <urlset> root element');
  errors++;
} else {
  console.log('  ✓ <urlset> root element present');
}

if (!hasNamespace) {
  console.error('  ✗ sitemap.xml missing proper namespace declaration');
  errors++;
} else {
  console.log('  ✓ Proper namespace declaration');
}

// Check for duplicate URLs
const locMatches = content.match(/<loc>([^<]+)<\/loc>/g) || [];
const urls = locMatches.map(m => m.replace(/<\/?loc>/g, ''));
const urlSet = new Set(urls);
if (urls.length !== urlSet.size) {
  const duplicates = urls.filter((url, i) => urls.indexOf(url) !== i);
  console.error(`  ✗ ${duplicates.length} duplicate URLs found in sitemap`);
  errors++;
} else {
  console.log(`  ✓ No duplicate URLs (${urls.length} unique entries)`);
}

// Check for proper <url> entry count
const urlCount = locMatches.length;
if (urlCount > 0) {
  console.log(`  ✓ Sitemap contains ${urlCount} URL entries`);
} else {
  console.error('  ✗ Sitemap contains no URL entries');
  errors++;
}

console.log(`\n${errors > 0 ? errors + ' errors' : 'OK'}`);
process.exit(errors > 0 ? 1 : 0);
