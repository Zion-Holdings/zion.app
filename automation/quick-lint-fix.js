#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class QuickLintFix {
  constructor() {
    this.projectRoot = process.cwd();
  }

  async run() {
    console.log('🔧 Running quick lint fix...');
    
    try {
      // Check if ESLint is installed
      try {
        execSync('npx eslint --version', { stdio: 'pipe' });
      } catch (error) {
        console.log('📦 Installing ESLint...');
        execSync('npm install --save-dev eslint eslint-config-next @typescript-eslint/eslint-plugin @typescript-eslint/parser', { stdio: 'inherit' });
      }

      // Create ESLint config if it doesn't exist
      this.createEslintConfig();
      
      // Run ESLint with --fix flag
      console.log('🔍 Running ESLint with auto-fix...');
      execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --fix', {
        stdio: 'inherit'
      });
      
      console.log('✅ Quick lint fix completed successfully!');
      
      // Run additional fixes
      await this.runAdditionalFixes();
      
    } catch (error) {
      console.error('❌ Quick lint fix failed:', error.message);
      process.exit(1);
    }
  }

  createEslintConfig() {
    const eslintConfigPath = path.join(this.projectRoot, '.eslintrc.json');
    
    if (!fs.existsSync(eslintConfigPath)) {
      const config = {
        extends: [
          'next/core-web-vitals',
          '@typescript-eslint/recommended'
        ],
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        rules: {
          '@typescript-eslint/no-unused-vars': 'warn',
          '@typescript-eslint/no-explicit-any': 'warn',
          'prefer-const': 'warn',
          'no-var': 'error',
          'no-console': 'warn',
          'no-debugger': 'error'
        },
        env: {
          browser: true,
          node: true,
          es6: true
        }
      };
      
      fs.writeFileSync(eslintConfigPath, JSON.stringify(config, null, 2));
      console.log('📝 Created .eslintrc.json configuration');
    }
  }

  async runAdditionalFixes() {
    console.log('🔧 Running additional fixes...');
    
    // Find all JS/TS files
    const files = this.findFiles(['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx']);
    
    for (const file of files) {
      await this.fixCommonIssues(file);
    }
    
    console.log('✅ Additional fixes completed');
  }

  findFiles(patterns) {
    const files = [];
    
    patterns.forEach(pattern => {
      const glob = require('glob');
      const matches = glob.sync(pattern, {
        ignore: ['node_modules/**', '.next/**', 'automation/**']
      });
      files.push(...matches);
    });
    
    return files;
  }

  async fixCommonIssues(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix common issues
      const fixes = [
        // Remove trailing whitespace
        { pattern: /\s+$/gm, replacement: '' },
        // Fix double semicolons
        { pattern: /;;+/g, replacement: ';' },
        // Fix missing semicolons after statements
        { pattern: /(\w+)\s*\n/g, replacement: '$1;\n' },
        // Fix import statements
        { pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?\s*;+/g, replacement: 'import { $1 } from \'$2\';' },
        // Fix export statements
        { pattern: /export\s+{\s*([^}]+)\s*};?\s*;+/g, replacement: 'export { $1 };' }
      ];

      fixes.forEach(fix => {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`🔧 Fixed common issues in ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error fixing common issues in ${filePath}:`, error.message);
    }
  }
}

// CLI interface
async function main() {
  const fixer = new QuickLintFix();
  await fixer.run();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = QuickLintFix;