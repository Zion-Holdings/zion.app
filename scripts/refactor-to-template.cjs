#!/usr/bin/env node
/**
 * Refactor pages to use PageTemplate for consistent layout.
 *
 * Strategy:
 * 1. Pages that use <main className="min-h-screen bg-slate-950..."> or <div className="relative min-h-screen bg-slate-950...">
 *    are wrapped content that should use PageTemplate.
 * 2. Pages that already use PageTemplate/PageShell/ProductPageLayout are skipped.
 * 3. Tool pages (interactive tools) get hero={{ variant: 'none' }} since they have their own UI.
 * 4. Content pages (blogs, case studies) get hero={{ variant: 'none' }} and their content goes inside PageTemplate.
 *
 * This script identifies pages without templates and reports their structure.
 * It does NOT modify files - it generates a plan.
 */

const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'app');

function findPageTsxFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'components' && entry.name !== 'data' && entry.name !== 'lib' && entry.name !== 'constants' && entry.name !== 'configurator' && entry.name !== '_components') {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        results.push(pageFile);
      }
      // Also check subdirectories
      results.push(...findPageTsxFiles(fullPath));
    }
  }
  return results;
}

function analyzePage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const hasTemplate = content.includes('PageTemplate') || content.includes('PageShell') || content.includes('ProductPageLayout');
  const hasHeroGradient = /className="relative min-h-screen bg-slate-950"/.test(content) || /className="relative min-h-screen overflow-hidden bg-slate-950"/.test(content);
  const hasMainMinH = /<main className="min-h-screen/.test(content);
  const hasContainerPage = /className="container-page/.test(content);
  const hasMetadata = /export const metadata/.test(content);

  const relPath = path.relative(process.cwd(), filePath);
  category = 'unknown';
  if (relPath.includes('/blog/')) category = 'blog';
  else if (relPath.includes('/tools/')) category = 'tool';
  else if (relPath.includes('/zion-ai-')) category = 'product';
  else if (relPath.includes('/zion-cloud')) category = 'product';
  else if (relPath.includes('/case-studies/')) category = 'case-study';
  else if (relPath.includes('/portal/')) category = 'portal';
  else if (relPath.includes('/ai/')) category = 'ai';
  else category = 'other';

  return {
    file: relPath,
    hasTemplate,
    hasHeroGradient,
    hasMainMinH,
    hasContainerPage,
    hasMetadata,
    category,
  };
}

const files = findPageTsxFiles(appDir);
const analysis = files.map(analyzePage);

const withoutTemplate = analysis.filter(a => !a.hasTemplate);
const withTemplate = analysis.filter(a => a.hasTemplate);

console.log('=== Template Usage Summary ===');
console.log(`Total page.tsx files: ${analysis.length}`);
console.log(`Using PageTemplate/PageShell/ProductPageLayout: ${withTemplate.length}`);
console.log(`Without template: ${withoutTemplate.length}`);

console.log('\n=== Categories of non-templated pages ===');
const byCategory = {};
withoutTemplate.forEach(a => {
  if (!byCategory[a.category]) byCategory[a.category] = [];
  byCategory[a.category].push(a.file);
});
for (const [cat, files] of Object.entries(byCategory)) {
  console.log(`\n[${cat}] (${files.length} pages):`);
  files.forEach(f => console.log(`  ${f}`));
}

console.log('\n=== Layout patterns in non-templated pages ===');
const layoutTypes = {
  'gradient hero (relative min-h-screen)': 0,
  'main min-h-screen bg-slate-950': 0,
  'container-page only': 0,
  'other': 0,
};
withoutTemplate.forEach(a => {
  if (a.hasHeroGradient) layoutTypes['gradient hero (relative min-h-screen)']++;
  else if (a.hasMainMinH) layoutTypes['main min-h-screen bg-slate-950']++;
  else if (a.hasContainerPage) layoutTypes['container-page only']++;
  else layoutTypes['other']++;
});
for (const [k, v] of Object.entries(layoutTypes)) {
  console.log(`  ${k}: ${v}`);
}
