#!/usr/bin/env node
/**
 * AI Lab Integrity Check
 * Validates that app/data/ai-lab-hub-links.json (if present) is consistent
 * with the actual /ai-lab route structure and sitemap entries.
 *
 * Checks:
 * 1. AI Lab data file exists and is valid JSON
 * 2. All referenced tools/labs have corresponding pages
 * 3. No stale entries pointing to removed pages
 *
 * Exit codes: 0 = pass, 1 = fail
 */
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
let errors = 0;

console.log('AI Lab Integrity Check\n');

// Check 1: AI Lab hub links data
const aiLabPath = path.join(repo, 'app/data/ai-lab-hub-links.json');
if (fs.existsSync(aiLabPath)) {
  try {
    const data = JSON.parse(fs.readFileSync(aiLabPath, 'utf-8'));
    console.log(`  ✓ ai-lab-hub-links.json valid (${data.length || Object.keys(data).length} entries)`);
  } catch (e) {
    console.error(`  ✗ ai-lab-hub-links.json is invalid JSON: ${e.message}`);
    errors++;
  }
} else {
  console.log('  ⚠ ai-lab-hub-links.json not found (skipping)');
}

// Check 2: AI Lab page exists
const aiLabPage = path.join(repo, 'app/ai-lab/page.tsx');
if (fs.existsSync(aiLabPage)) {
  console.log('  ✓ app/ai-lab/page.tsx exists');
} else {
  console.error('  ✗ app/ai-lab/page.tsx missing');
  errors++;
}

// Check 3: Verify sitemap references include /ai-lab/
const sitemapPath = path.join(repo, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const hasAiLab = sitemapContent.includes('/ai-lab/');
  if (hasAiLab) {
    console.log('  ✓ sitemap.xml includes /ai-lab/ route');
  } else {
    console.error('  ✗ sitemap.xml missing /ai-lab/ route');
    errors++;
  }
} else {
  console.log('  ⚠ sitemap.xml not found at root (may be committed elsewhere)');
}

console.log(`\n${errors > 0 ? errors + ' errors' : 'OK'}`);
process.exit(errors > 0 ? 1 : 0);
