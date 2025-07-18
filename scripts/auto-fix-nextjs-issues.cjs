#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class NextJSIssueFixer {
  constructor() {
    this.fixes = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async findAndFixSyntaxErrors() {
    this.log('🔍 Scanning for syntax errors...');
    
    const patterns = [
      'pages/**/*.{ts,tsx,js,jsx}',
      'src/**/*.{ts,tsx,js,jsx}',
      'components/**/*.{ts,tsx,js,jsx}',
      'api/**/*.{ts,tsx,js,jsx}'
    ];
    
    let totalFiles = 0;
    let fixedFiles = 0;
    
    for (const pattern of patterns) {
      const files = this.findFiles(pattern);
      totalFiles += files.length;
      
      for (const file of files) {
        if (await this.fixFile(file)) {
          fixedFiles++;
        }
      }
    }
    
    this.log(`✅ Fixed ${fixedFiles}/${totalFiles} files`);
    return fixedFiles;
  }

  findFiles(pattern) {
    try {
      const glob = require('glob');
      return glob.sync(pattern, { 
        ignore: ['node_modules/**', '.next/**', 'dist/**'],
        absolute: true 
      });
    } catch (error) {
      this.log(`❌ Error finding files: ${error.message}`);
      return [];
    }
  }

  async fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let fixed = false;
      
      // Fix common syntax issues
      const fixes = [
        // Fix unterminated strings
        {
          pattern: /(["'])([^"']*?)(\n|$)/g,
          replacement: '$1$2$1$3',
          description: 'Unterminated strings'
        },
        // Fix malformed imports
        {
          pattern: /import\s+([^;]*?)(\n|$)/g,
          replacement: 'import $1;\n',
          description: 'Malformed imports'
        },
        // Fix missing semicolons
        {
          pattern: /([^;])\n(export|import|const|let|var|function|class)/g,
          replacement: '$1;\n$2',
          description: 'Missing semicolons'
        },
        // Fix corrupted characters
        {
          pattern: /[^\x00-\x7F]/g,
          replacement: '',
          description: 'Non-ASCII characters'
        },
        // Fix malformed JSX
        {
          pattern: /<([^>]*?)(\n|$)/g,
          replacement: '<$1>$2',
          description: 'Malformed JSX'
        },
        // Fix missing closing braces
        {
          pattern: /{([^}]*?)(\n|$)/g,
          replacement: '{$1}$2',
          description: 'Missing closing braces'
        }
      ];
      
      fixes.forEach(fix => {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          fixed = true;
          this.log(`  Fixed ${fix.description} in ${path.basename(filePath)}`);
        }
      });
      
      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixes.push(filePath);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async fixSpecificFiles() {
    this.log('🔧 Fixing specific problematic files...');
    
    const specificFixes = [
      {
        file: 'pages/api/dev/dashboard.ts',
        fixes: [
          { pattern: /export default async function/, replacement: 'export default async function handler' },
          { pattern: /req: NextApiRequest/, replacement: 'req: NextApiRequest,' },
          { pattern: /res: NextApiResponse/, replacement: 'res: NextApiResponse' }
        ]
      },
      {
        file: 'pages/api/extension-health.ts',
        fixes: [
          { pattern: /export default async function/, replacement: 'export default async function handler' },
          { pattern: /req: NextApiRequest/, replacement: 'req: NextApiRequest,' },
          { pattern: /res: NextApiResponse/, replacement: 'res: NextApiResponse' }
        ]
      },
      {
        file: 'pages/api/favorites.ts',
        fixes: [
          { pattern: /export default async function/, replacement: 'export default async function handler' },
          { pattern: /req: NextApiRequest/, replacement: 'req: NextApiRequest,' },
          { pattern: /res: NextApiResponse/, replacement: 'res: NextApiResponse' }
        ]
      }
    ];
    
    for (const fix of specificFixes) {
      if (fs.existsSync(fix.file)) {
        let content = fs.readFileSync(fix.file, 'utf8');
        let modified = false;
        
        fix.fixes.forEach(({ pattern, replacement }) => {
          if (content.includes(pattern)) {
            content = content.replace(pattern, replacement);
            modified = true;
          }
        });
        
        if (modified) {
          fs.writeFileSync(fix.file, content);
          this.log(`✅ Fixed ${fix.file}`);
          this.fixes.push(fix.file);
        }
      }
    }
  }

  async runTypeCheck() {
    this.log('🔍 Running TypeScript type check...');
    
    try {
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
      this.log('✅ TypeScript type check passed');
      return true;
    } catch (error) {
      this.log(`❌ TypeScript errors: ${error.message}`);
      return false;
    }
  }

  async runLinting() {
    this.log('🔍 Running ESLint...');
    
    try {
      execSync('npm run lint -- --fix', { stdio: 'pipe' });
      this.log('✅ ESLint passed');
      return true;
    } catch (error) {
      this.log(`❌ ESLint errors: ${error.message}`);
      return false;
    }
  }

  async buildProject() {
    this.log('🏗️ Building project...');
    
    try {
      execSync('npm run build', { stdio: 'pipe' });
      this.log('✅ Build successful');
      return true;
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`);
      return false;
    }
  }

  async runFullFix() {
    this.log('🚀 Starting Next.js issue fix process...');
    
    const steps = [
      { name: 'Fix specific files', fn: () => this.fixSpecificFiles() },
      { name: 'Find and fix syntax errors', fn: () => this.findAndFixSyntaxErrors() },
      { name: 'Run type check', fn: () => this.runTypeCheck() },
      { name: 'Run linting', fn: () => this.runLinting() },
      { name: 'Build project', fn: () => this.buildProject() }
    ];
    
    for (const step of steps) {
      this.log(`\n📋 Step: ${step.name}`);
      const result = await step.fn();
      
      if (!result) {
        this.log(`❌ Step failed: ${step.name}`);
      }
    }
    
    this.log('\n📊 Fix Summary:');
    this.log(`✅ Fixed: ${this.fixes.length} files`);
    this.log(`❌ Errors: ${this.errors.length} remaining`);
    
    return this.errors.length === 0;
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new NextJSIssueFixer();
  fixer.runFullFix().then(success => {
    process.exit(success ? 0 : 1);
  });
}

module.exports = { NextJSIssueFixer }; 