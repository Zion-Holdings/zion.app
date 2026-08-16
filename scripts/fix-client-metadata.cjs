#!/usr/bin/env node
/**
 * Fix client component pages that export `metadata` — not allowed in Next 16.
 * For each affected page:
 * 1. Extract the `export const metadata = {...};` block
 * 2. Remove it from page.tsx
 * 3. Create layout.tsx with the metadata (server component)
 */
const fs = require('fs');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '..', 'app');

const conflicts = [
  'services-explorer/page.tsx',
  'tools/service-recommender/page.tsx',
  'tools/port-scanner/page.tsx',
  'tools/service-comparison/page.tsx',
  'tools/ssl-checker/page.tsx',
  'tools/health-check/page.tsx',
  'tools/analytics/page.tsx',
  'ai-lab/page.tsx',
  'press/page.tsx',
  'solutions/page.tsx',
  'industry-solutions/page.tsx',
  'service-comparison/page.tsx',
  'status/page.tsx',
  'search/page.tsx',
  'ai-services/page.tsx',
  'page.tsx',
  'help/page.tsx',
  'proposals/page.tsx',
  'client-portal/page.tsx',
  'proposal-generator/page.tsx',
];

function extractMetadata(content) {
  // Match: export const metadata = { ... }; (including nested braces)
  const startIdx = content.indexOf('export const metadata');
  if (startIdx === -1) return null;
  
  // Find the opening brace
  const braceStart = content.indexOf('{', startIdx);
  if (braceStart === -1) return null;
  
  // Find matching closing brace
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
  
  if (endIdx === -1) return null;
  
  // Find the semicolon
  while (endIdx < content.length && content[endIdx] !== ';') endIdx++;
  endIdx++; // include the semicolon
  
  return content.substring(startIdx, endIdx);
}

function fixPage(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${filePath} (not found)`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if it has use client
  const hasUseClient = content.includes("'use client'") || content.includes('"use client"');
  if (!hasUseClient) {
    console.log(`SKIP: ${filePath} (no use client)`);
    return;
  }
  
  // Extract metadata
  const metadataBlock = extractMetadata(content);
  if (!metadataBlock) {
    console.log(`SKIP: ${filePath} (no metadata export)`);
    return;
  }
  
  // Determine canonical URL from the directory path
  const dir = path.dirname(filePath);
  const relDir = path.relative(APP_DIR, dir);
  const canonicalPath = relDir === '.' ? '/' : `/${relDir.replace(/\\/g, '\/')}/`;
  
  // Create layout.tsx path
  const layoutPath = path.join(dir, 'layout.tsx');
  
  // Check if layout.tsx already exists
  if (fs.existsSync(layoutPath)) {
    console.log(`SKIP: ${filePath} (layout.tsx already exists)`);
    return;
  }
  
  // Create layout.tsx
  const layoutContent = `// Auto-generated layout for metadata (Next 16: client components can't export metadata)
import type { Metadata } from 'next';

${metadataBlock.replace('export const metadata', 'export const metadata')}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
  
  fs.writeFileSync(layoutPath, layoutContent);
  console.log(`Created: ${path.relative(APP_DIR, layoutPath)}`);
  
  // Remove metadata from page.tsx
  const newContent = content.replace(metadataBlock, '').replace(/^\n{3,}/, '\n\n');
  fs.writeFileSync(filePath, newContent);
  console.log(`Fixed: ${path.relative(APP_DIR, filePath)}`);
}

for (const rel of conflicts) {
  fixPage(path.join(APP_DIR, rel));
}

console.log('\nDone!');
