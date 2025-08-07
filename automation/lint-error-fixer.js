#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class LintErrorFixer {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'lint-error-fixer.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async fixUnusedImports(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const imports = [];
      const otherLines = [];
      let inImportBlock = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('import ')) {
          inImportBlock = true;
          imports.push(line);
        } else if (inImportBlock && line.trim() === '') {
          imports.push(line);
        } else {
          inImportBlock = false;
          otherLines.push(line);
        }
      }

      // Filter out unused imports (basic check)
      const usedImports = imports.filter(importLine => {
        if (!importLine.trim().startsWith('import ')) return true;
        
        // Extract import names
        const match = importLine.match(/import\s+{([^}]+)}\s+from/);
        if (match) {
          const importNames = match[1].split(',').map(name => name.trim());
          const fileContent = otherLines.join('\n');
          return importNames.some(name => fileContent.includes(name));
        }
        return true;
      });

      const newContent = [...usedImports, ...otherLines].join('\n');
      fs.writeFileSync(filePath, newContent);
      this.log(`✅ Fixed unused imports in: ${filePath}`);
      return true;
    } catch (error) {
      this.log(`❌ Error fixing unused imports in ${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixTypeScriptErrors(filePath) {
    try {
      // Run TypeScript compiler to check for errors
      const result = execSync(`npx tsc --noEmit --project .`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ TypeScript check passed for: ${filePath}`);
      return true;
    } catch (error) {
      this.log(`❌ TypeScript errors in ${filePath}: ${error.stdout || error.message}`);
      
      // Try to fix common TypeScript issues
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        let fixedContent = content;

        // Fix common TypeScript issues
        fixedContent = fixedContent.replace(/const\s+(\w+)\s*:\s*any\s*=/g, 'const $1 =');
        fixedContent = fixedContent.replace(/function\s+(\w+)\s*\(\s*\)\s*:\s*any/g, 'function $1()');
        fixedContent = fixedContent.replace(/:\s*any\s*[,)]/g, '$1');

        if (fixedContent !== content) {
          fs.writeFileSync(filePath, fixedContent);
          this.log(`✅ Fixed TypeScript issues in: ${filePath}`);
          return true;
        }
      } catch (fixError) {
        this.log(`❌ Failed to fix TypeScript issues in ${filePath}: ${fixError.message}`);
      }
      return false;
    }
  }

  async fixESLintErrors(filePath) {
    try {
      const result = execSync(`npx eslint "${filePath}" --fix`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ Fixed ESLint errors in: ${filePath}`);
      return true;
    } catch (error) {
      this.log(`❌ ESLint errors in ${filePath}: ${error.stdout || error.message}`);
      return false;
    }
  }

  async fixFile(filePath) {
    this.log(`🔧 Fixing issues in: ${filePath}`);
    
    const fixes = [
      this.fixUnusedImports(filePath),
      this.fixTypeScriptErrors(filePath),
      this.fixESLintErrors(filePath)
    ];

    const results = await Promise.all(fixes);
    const successCount = results.filter(Boolean).length;
    
    this.log(`📊 Fixed ${successCount}/3 issue types in: ${filePath}`);
    return successCount > 0;
  }

  async fixAllFiles() {
    this.log('🔧 Starting comprehensive lint error fix...');
    
    const patterns = [
      'pages/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'utils/**/*.{js,jsx,ts,tsx}',
      'hooks/**/*.{js,jsx,ts,tsx}'
    ];

    let totalFixed = 0;
    let totalFiles = 0;

    for (const pattern of patterns) {
      const files = this.glob(pattern);
      for (const file of files) {
        totalFiles++;
        const fixed = await this.fixFile(file);
        if (fixed) totalFixed++;
      }
    }

    this.log(`📊 Fixed ${totalFixed}/${totalFiles} files`);
    return { totalFiles, totalFixed };
  }

  glob(pattern) {
    const { globSync } = await import('glob');
    return globSync(pattern, { ignore: ['node_modules/**', '.next/**'] });
  }
}

// CLI handling
const fixer = new LintErrorFixer();
const command = process.argv[2];
const filePath = process.argv[3];

switch (command) {
  case 'file':
    if (filePath) {
      fixer.fixFile(filePath);
    } else {
      console.log('Usage: node lint-error-fixer.js file <filepath>');
    }
    break;
  case 'all':
    fixer.fixAllFiles();
    break;
  default:
    console.log('Usage: node lint-error-fixer.js [file <filepath>|all]');
    process.exit(1);
}
