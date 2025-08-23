#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Script to clean up duplicate pages in Next.js project
 * Removes compiled .js and .d.ts files where .tsx or .ts versions exist
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.join(path.dirname(__dirname), 'pages');

function findDuplicates() {
  const files = new Map();
  const toDelete = [];

  function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name);
        const baseName = path.basename(entry.name, ext);
        const relativePath = path.relative(pagesDir, dir);
        const key = path.join(relativePath, baseName);
        
        if (!files.has(key)) {
          files.set(key, {});
        }
        
        const fileInfo = files.get(key);
        fileInfo[ext] = fullPath;
      }
    }
  }

  scanDirectory(pagesDir);

  // Find files to delete
  for (const [key, versions] of files.entries()) {
    const hasTsx = versions['.tsx'];
    const hasTs = versions['.ts'];
    const hasJs = versions['.js'];
    const hasDts = versions['.d.ts'];
    
    // If we have a .tsx or .ts version, remove .js and .d.ts
    if (hasTsx || hasTs) {
      if (hasJs) {
        const sourceType = hasTsx ? '.tsx' : '.ts';
        toDelete.push({
          file: hasJs,
          reason: `.js file when ${sourceType} exists: ${key}`
        });
      }
      if (hasDts) {
        const sourceType = hasTsx ? '.tsx' : '.ts';
        toDelete.push({
          file: hasDts,
          reason: `.d.ts file when ${sourceType} exists: ${key}`
        });
      }
    }
    // If we only have .js and .d.ts (but no .tsx or .ts), keep .js and remove .d.ts
    else if (hasJs && hasDts && !hasTsx && !hasTs) {
      toDelete.push({
        file: hasDts,
        reason: `.d.ts file when only .js exists: ${key}`
      });
    }
  }

  return toDelete;
}

function main() {
  console.log('🔍 Scanning for duplicate pages...\n');
  
  const toDelete = findDuplicates();
  
  if (toDelete.length === 0) {
    console.log('✅ No duplicate pages found!');
    return;
  }

  console.log(`📋 Found ${toDelete.length} files to delete:\n`);
  
  toDelete.forEach((item, index) => {
    console.log(`${index + 1}. ${item.file}`);
    console.log(`   Reason: ${item.reason}\n`);
  });

  // Check if we should actually delete
  const shouldDelete = process.argv.includes('--delete');
  
  if (!shouldDelete) {
    console.log('💡 Run with --delete flag to actually remove these files');
    console.log('   node scripts/cleanup-duplicate-pages.js --delete');
    return;
  }

  console.log('🗑️  Deleting files...\n');
  
  let deleteCount = 0;
  let errorCount = 0;

  for (const item of toDelete) {
    try {
      fs.unlinkSync(item.file);
      console.log(`✅ Deleted: ${item.file}`);
      deleteCount++;
    } catch (error) {
      console.log(`❌ Failed to delete: ${item.file} - ${error.message}`);
      errorCount++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Successfully deleted: ${deleteCount} files`);
  console.log(`   ❌ Failed to delete: ${errorCount} files`);
  
  if (deleteCount > 0) {
    console.log('\n🎉 Duplicate pages cleanup completed!');
    console.log('💡 You should now restart your Next.js dev server to see the changes');
  }
}

// Check if this script is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { findDuplicates }; 