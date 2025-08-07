#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

async function fixTypeScriptSyntaxErrors() {
  console.log('🔧 Fixing TypeScript syntax errors...');
  
  // Find all TypeScript files with syntax errors
  const files = glob.sync('pages/**/*-chat.tsx');
  
  for (const file of files) {
    try {
      console.log(`Processing: ${file}`);
      let content = await fs.readFile(file, 'utf8');
      let modified = false;
      
      // Fix variable names that start with numbers
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Fix const declarations that start with numbers
        if (line.includes('const ') && /const\s+[0-9]/.test(line)) {
          const match = line.match(/const\s+([0-9][a-zA-Z0-9]*)/);
          if (match) {
            const oldName = match[1];
            const newName = 'Chat' + oldName.charAt(0).toUpperCase() + oldName.slice(1);
            
            lines[i] = line.replace(oldName, newName);
            modified = true;
            console.log(`  Fixed variable name: ${oldName} -> ${newName}`);
          }
        }
        
        // Fix function names that start with numbers
        if (line.includes('function ') && /function\s+[0-9]/.test(line)) {
          const match = line.match(/function\s+([0-9][a-zA-Z0-9]*)/);
          if (match) {
            const oldName = match[1];
            const newName = 'Chat' + oldName.charAt(0).toUpperCase() + oldName.slice(1);
            
            lines[i] = line.replace(oldName, newName);
            modified = true;
            console.log(`  Fixed function name: ${oldName} -> ${newName}`);
          }
        }
      }
      
      if (modified) {
        await fs.writeFile(file, lines.join('\n'));
        console.log(`✅ Fixed syntax errors in: ${file}`);
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log('✅ TypeScript syntax error fixing completed');
}

fixTypeScriptSyntaxErrors().catch(console.error);
