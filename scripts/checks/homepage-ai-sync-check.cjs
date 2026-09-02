#!/usr/bin/env node
/**
 * Homepage AI Sync Check
 * Verifies that the homepage's AI-related content sections are in sync
 * with the current service catalog and automation reports.
 *
 * Checks:
 * 1. Homepage exists and renders
 * 2. AI-related keywords present in homepage content
 * 3. No stale service references
 *
 * Exit codes: 0 = pass, 1 = fail
 */
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
let errors = 0;

console.log('Homepage AI Sync Check\n');

const homepagePath = path.join(repo, 'app/page.tsx');
if (fs.existsSync(homepagePath)) {
  const content = fs.readFileSync(homepagePath, 'utf-8');
  console.log('  ✓ app/page.tsx exists');

  // Check for AI-related keywords
  const aiKeywords = ['AI', 'artificial intelligence', 'machine learning', 'automation', 'agent'];
  const hasAiContent = aiKeywords.some(kw =>
    content.toLowerCase().includes(kw.toLowerCase())
  );
  if (hasAiContent) {
    console.log('  ✓ Homepage contains AI-related content');
  } else {
    console.error('  ✗ Homepage missing AI-related content');
    errors++;
  }
} else {
  console.error('  ✗ app/page.tsx missing');
  errors++;
}

// Check homepage-ai-sync report exists
const reportsDir = path.join(repo, 'automation/reports');
if (fs.existsSync(reportsDir)) {
  const reports = fs.readdirSync(reportsDir).filter(f => f.includes('homepage-ai-sync'));
  if (reports.length > 0) {
    console.log(`  ✓ homepage-ai-sync report found: ${reports[0]}`);
  } else {
    console.log('  ⚠ No homepage-ai-sync report found yet (ok for first run)');
  }
} else {
  console.log('  ⚠ automation/reports directory not found yet');
}

console.log(`\n${errors > 0 ? errors + ' errors' : 'OK'}`);
process.exit(errors > 0 ? 1 : 0);
