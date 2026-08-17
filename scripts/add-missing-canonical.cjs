#!/usr/bin/env node
/**
 * Add missing canonical URLs to service pages.
 * Finds pages with `export const metadata = {` that don't have `alternates.canonical`
 * and adds the canonical field.
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const files = execSync(
    'find app/services -name "page.tsx" -exec grep -L "alternates" {} + 2>/dev/null',
    { cwd: process.cwd(), encoding: 'utf8' }
).trim().split('\n').filter(f => f);

let fixed = 0;
for (const file of files) {
    const filepath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filepath, 'utf8');

    // Skip redirect pages and pages using generateMetadata
    if (content.includes('redirect(') || content.includes('generateMetadata')) continue;

    // Extract the metadata block
    const metaMatch = content.match(/export const metadata = \{([\s\S]*?)\};/);
    if (!metaMatch) continue;

    // Build canonical path from file path
    const canonical = '/' + file.replace('/page.tsx', '');

    // Add alternates.canonical to the metadata object
    // Insert before the closing };
    const newContent = content.replace(
        /export const metadata = \{([\s\S]*?)\};/,
        (match, inner) => {
          if (inner.includes('alternates')) return match; // already has canonical
          return `export const metadata = {${inner}${inner.endsWith('\n') ? '' : '\n'}${inner.match(/^\s*$/gm) ? '' : ''},
  alternates: { canonical: '${canonical}' }
};`;
        }
    );

    if (newContent !== content) {
        fs.writeFileSync(filepath, newContent);
        fixed++;
    }
}

console.log(`Fixed ${fixed} pages with canonical URLs`);
