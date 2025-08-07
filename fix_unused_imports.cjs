#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

async function fixUnusedImports() {
  console.log('🔧 Fixing unused imports...');
  
  // Find all TypeScript files
  const files = glob.sync('pages/**/*-chat.tsx');
  
  for (const file of files) {
    try {
      console.log(`Processing: ${file}`);
      let content = await fs.readFile(file, 'utf8');
      let modified = false;
      
      const lines = content.split('\n');
      const newLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Skip unused Link imports
        if (line.includes("import Link from 'next/link';") && !content.includes('<Link')) {
          console.log(`  Removing unused Link import from: ${file}`);
          continue;
        }
        
        // Skip unused Head imports if not used
        if (line.includes("import Head from 'next/head';") && !content.includes('<Head')) {
          console.log(`  Removing unused Head import from: ${file}`);
          continue;
        }
        
        // Skip unused NextPage imports if not used
        if (line.includes("import type { NextPage } from 'next';") && !content.includes(': NextPage')) {
          console.log(`  Removing unused NextPage import from: ${file}`);
          continue;
        }
        
        newLines.push(line);
      }
      
      if (newLines.length !== lines.length) {
        await fs.writeFile(file, newLines.join('\n'));
        console.log(`✅ Fixed unused imports in: ${file}`);
        modified = true;
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log('✅ Unused import fixing completed');
}

fixUnusedImports().catch(console.error);
