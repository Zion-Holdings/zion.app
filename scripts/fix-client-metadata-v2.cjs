#!/usr/bin/env node
/**
 * Fix ALL client component pages that export `metadata` — not allowed in Next 16.
 * For each affected page:
 * 1. Remove the `export const metadata = {...};` block from page.tsx
 * 2. If layout.tsx doesn't exist in the same dir, create it with the metadata
 * 3. If layout.tsx already has metadata, just remove from page.tsx
 */
const fs = require('fs');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '..', 'app');

function walkDir(dir, fileFilter) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip the 194K service dirs — only process specific directories
      if (fullPath.includes('/app/services/') && !fullPath.includes('/app/services/[id]') && !fullPath.includes('/app/services/explorer')) continue;
      results.push(...walkDir(fullPath, fileFilter));
    } else if (fileFilter(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

// Find all page.tsx files
const pageFiles = walkDir(APP_DIR, name => name === 'page.tsx');
console.log(`Found ${pageFiles.length} page.tsx files`);

let fixed = 0;
const skipDirs = [
  '/app/services/',  // Skip 194K service pages
  '/app/blog/',
  '/app/docs/',
];

for (const filePath of pageFiles) {
  // Skip certain directories
  if (skipDirs.some(d => filePath.includes(d) && !filePath.includes('/app/services/[id]'))) continue;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const hasUseClient = content.includes("'use client'") || content.includes('"use client"');
  const hasMetadata = content.includes('export const metadata');
  
  if (!hasUseClient || !hasMetadata) continue;
  
  // Extract metadata block
  const startIdx = content.indexOf('export const metadata');
  if (startIdx === -1) continue;
  
  const braceStart = content.indexOf('{', startIdx);
  if (braceStart === -1) continue;
  
  let depth = 0;
  let endIdx = -1;
  for (let i = braceStart; i < content.length; i++) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') {
      depth--;
      if (depth === 0) {
        endIdx = i + 1;
        break;
      }
    }
  }
  
  if (endIdx === -1) continue;
  
  while (endIdx < content.length && content[endIdx] !== ';') endIdx++;
  endIdx++;
  
  const metadataBlock = content.substring(startIdx, endIdx);
  const dir = path.dirname(filePath);
  const layoutPath = path.join(dir, 'layout.tsx');
  
  // Remove metadata from page.tsx
  let newContent = content.replace(metadataBlock, '').replace(/^\n{3,}/, '\n\n');
  fs.writeFileSync(filePath, newContent);
  console.log(`Removed metadata from: ${path.relative(APP_DIR, filePath)}`);
  
  // Create layout.tsx if it doesn't exist
  if (!fs.existsSync(layoutPath)) {
    // Extract title, description, alternates from the metadata block
    const titleMatch = metadataBlock.match(/title:\s*(['"`])([^'"`]+)\1/);
    const descMatch = metadataBlock.match(/description:\s*(['"`])([^'"`]+)\1/);
    
    const layoutContent = `// Auto-generated layout for metadata (Next 16: client components can't export metadata)
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ${titleMatch ? `title: '${titleMatch[2]}',` : ''}
  ${descMatch ? `description: '${descMatch[2]}',` : ''}
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
    fs.writeFileSync(layoutPath, layoutContent);
    console.log(`  Created: ${path.relative(APP_DIR, layoutPath)}`);
  } else {
    console.log(`  Skipped layout.tsx (already exists)`);
  }
  
  fixed++;
}

console.log(`\nFixed ${fixed} pages`);
