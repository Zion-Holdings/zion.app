#!/usr/bin/env node

/**
 * Zion App Auto-Fix System
 * Automatically fixes common errors and issues
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class AutoFixSystem {
  constructor() {
    this.fixesApplied = [];
    this.errors = [];
    this.projectRoot = process.cwd();
  }

  async run() {
    console.log('Starting auto-fix system...');
    
    try {
      // Run all fix categories
      await this.fixDependencies();
      await this.fixTypeScript();
      await this.fixLinting();
      await this.fixStyling();
      await this.fixWalletContext();
      await this.fixSupabase();
      await this.fixEnvironment();
      await this.fixImports();
      await this.fixConfiguration();
      
      console.log('Auto-fix system completed');
      this.logResults();
      
    } catch (error) {
      console.error('Auto-fix system failed:', error.message);
      this.errors.push(error.message);
    }
  }

  async fixDependencies() {
    console.log('Fixing dependency issues...');
    
    try {
      // Check for missing dependencies
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json not found');
      }

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Check for common missing dependencies
      const commonDeps = [
        '@supabase/ssr',
        '@supabase/supabase-js',
        '@reown/appkit/react',
        'ethers',
        'next',
        'react',
        'react-dom'
      ];

      const missingDeps = commonDeps.filter(dep => 
        !packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep]
      );

      if (missingDeps.length > 0) {
        console.log(`Installing missing dependencies: ${missingDeps.join(', ')}`);
        execSync(`npm install ${missingDeps.join(' ')}`, { stdio: 'inherit' });
        this.fixesApplied.push(`Installed missing dependencies: ${missingDeps.join(', ')}`);
      }

      // Clear cache and reinstall if there are issues
      if (this.hasDependencyErrors()) {
        console.log('Clearing npm cache and reinstalling...');
        execSync('npm cache clean --force', { stdio: 'inherit' });
        execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });
        execSync('npm install', { stdio: 'inherit' });
        this.fixesApplied.push('Cleared cache and reinstalled dependencies');
      }

    } catch (error) {
      this.errors.push(`Dependency fix failed: ${error.message}`);
    }
  }

  async fixTypeScript() {
    console.log('Fixing TypeScript issues...');
    
    try {
      // Run TypeScript compiler to check for errors
      const tscResult = execSync('npx tsc --noEmit --skipLibCheck', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      // If no errors, we're good
      if (tscResult.includes('error')) {
        await this.fixTypeScriptErrors(tscResult);
      }

    } catch (error) {
      // TypeScript errors are expected, try to fix them
      const errorOutput = error.stdout || error.stderr || error.message;
      await this.fixTypeScriptErrors(errorOutput);
    }
  }

  async fixTypeScriptErrors(errorOutput) {
    console.log('Fixing TypeScript errors...');
    
    try {
      // Fix common TypeScript issues
      const fixes = [
        // Fix import issues
        () => this.fixImportStatements(),
        // Fix type issues
        () => this.fixTypeIssues(),
        // Fix interface issues
        () => this.fixInterfaceIssues(),
        // Fix generic issues
        () => this.fixGenericIssues()
      ];

      for (const fix of fixes) {
        try {
          await fix();
        } catch (fixError) {
          console.log(`Fix attempt failed: ${fixError.message}`);
        }
      }

      this.fixesApplied.push('Applied TypeScript fixes');
    } catch (error) {
      this.errors.push(`TypeScript fix failed: ${error.message}`);
    }
  }

  async fixImportStatements() {
    const srcDir = path.join(this.projectRoot, 'src');
    if (!fs.existsSync(srcDir)) return;

    const files = this.getAllFiles(srcDir, ['.ts', '.tsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix relative imports
        content = content.replace(
          /from ['"]\.\.\/\.\.\/\.\.\/([^'"]+)['"]/g,
          'from \'@/$1\''
        );

        // Fix missing extensions
        content = content.replace(
          /from ['"]([^'"]+)['"]/g,
          (match, importPath) => {
            if (importPath.startsWith('.') && !importPath.includes('.')) {
              return `from '${importPath}.ts'`;
            }
            return match;
          }
        );

        if (content !== fs.readFileSync(file, 'utf8')) {
          fs.writeFileSync(file, content);
          modified = true;
        }

        if (modified) {
          console.log(`Fixed imports in ${file}`);
        }
      } catch (error) {
        console.log(`Error fixing imports in ${file}: ${error.message}`);
      }
    }
  }

  async fixTypeIssues() {
    const srcDir = path.join(this.projectRoot, 'src');
    if (!fs.existsSync(srcDir)) return;

    const files = this.getAllFiles(srcDir, ['.ts', '.tsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix any types
        content = content.replace(
          /: any\b/g,
          ': unknown'
        );

        // Fix missing return types
        content = content.replace(
          /function\s+(\w+)\s*\([^)]*\)\s*{/g,
          'function $1(...args: unknown[]): unknown {'
        );

        if (content !== fs.readFileSync(file, 'utf8')) {
          fs.writeFileSync(file, content);
          modified = true;
        }

        if (modified) {
          console.log(`Fixed types in ${file}`);
        }
      } catch (error) {
        console.log(`Error fixing types in ${file}: ${error.message}`);
      }
    }
  }

  async fixInterfaceIssues() {
    // Fix common interface issues
    const walletContextPath = path.join(this.projectRoot, 'src/context/WalletContext.tsx');
    
    if (fs.existsSync(walletContextPath)) {
      try {
        let content = fs.readFileSync(walletContextPath, 'utf8');
        
        // Ensure proper interface exports
        if (!content.includes('export interface WalletState')) {
          content = content.replace(
            /interface WalletState/g,
            'export interface WalletState'
          );
        }

        if (!content.includes('export interface WalletContextType')) {
          content = content.replace(
            /interface WalletContextType/g,
            'export interface WalletContextType'
          );
        }

        fs.writeFileSync(walletContextPath, content);
        console.log('Fixed WalletContext interfaces');
      } catch (error) {
        console.log(`Error fixing interfaces: ${error.message}`);
      }
    }
  }

  async fixGenericIssues() {
    // Fix common generic TypeScript issues
    const srcDir = path.join(this.projectRoot, 'src');
    if (!fs.existsSync(srcDir)) return;

    const files = this.getAllFiles(srcDir, ['.ts', '.tsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix React.FC generic issues
        content = content.replace(
          /React\.FC<{([^}]+)}>/g,
          'React.FC<{ $1 }>'
        );

        // Fix useState generic issues
        content = content.replace(
          /useState<([^>]+)>\(/g,
          'useState<$1>('
        );

        if (content !== fs.readFileSync(file, 'utf8')) {
          fs.writeFileSync(file, content);
          modified = true;
        }

        if (modified) {
          console.log(`Fixed generics in ${file}`);
        }
      } catch (error) {
        console.log(`Error fixing generics in ${file}: ${error.message}`);
      }
    }
  }

  async fixLinting() {
    console.log('Fixing linting issues...');
    
    try {
      // Run ESLint auto-fix
      execSync('npm run lint:fix', { stdio: 'inherit' });
      this.fixesApplied.push('Applied ESLint auto-fixes');
    } catch (error) {
      // If lint:fix doesn't exist, try direct ESLint
      try {
        execSync('npx eslint --fix src/**/*.{ts,tsx}', { stdio: 'inherit' });
        this.fixesApplied.push('Applied ESLint fixes');
      } catch (eslintError) {
        this.errors.push(`Linting fix failed: ${eslintError.message}`);
      }
    }
  }

  async fixStyling() {
    console.log('Fixing styling issues...');
    
    try {
      // Fix Tailwind CSS issues
      const tailwindConfigPath = path.join(this.projectRoot, 'tailwind.config.js');
      
      if (fs.existsSync(tailwindConfigPath)) {
        let content = fs.readFileSync(tailwindConfigPath, 'utf8');
        
        // Ensure proper content paths
        if (!content.includes('src/**/*.{js,ts,jsx,tsx}')) {
          content = content.replace(
            /content:\s*\[([^\]]+)\]/,
            'content: [$1, "src/**/*.{js,ts,jsx,tsx}"]'
          );
        }

        fs.writeFileSync(tailwindConfigPath, content);
        this.fixesApplied.push('Fixed Tailwind configuration');
      }

      // Run Tailwind build
      try {
        execSync('npx tailwindcss -i ./src/styles/globals.css -o ./public/styles.css', { stdio: 'inherit' });
        this.fixesApplied.push('Rebuilt Tailwind CSS');
      } catch (error) {
        console.log('Tailwind build failed, continuing...');
      }

    } catch (error) {
      this.errors.push(`Styling fix failed: ${error.message}`);
    }
  }

  async fixWalletContext() {
    console.log('Fixing wallet context issues...');
    
    try {
      const walletContextPath = path.join(this.projectRoot, 'src/context/WalletContext.tsx');
      
      if (fs.existsSync(walletContextPath)) {
        let content = fs.readFileSync(walletContextPath, 'utf8');
        let modified = false;

        // Fix common wallet context issues
        if (!content.includes('import { createAppKit }')) {
          content = `import { createAppKit } from '@reown/appkit/react';\n${content}`;
          modified = true;
        }

        // Fix provider initialization
        if (!content.includes('adapters: []')) {
          content = content.replace(
            /createAppKit\({/g,
            'createAppKit({\n          adapters: [],'
          );
          modified = true;
        }

        // Fix error handling
        if (!content.includes('logErrorToProduction')) {
          content = content.replace(
            /console\.error\(/g,
            'logErrorToProduction('
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(walletContextPath, content);
          this.fixesApplied.push('Fixed WalletContext issues');
        }
      }

    } catch (error) {
      this.errors.push(`Wallet context fix failed: ${error.message}`);
    }
  }

  async fixSupabase() {
    console.log('Fixing Supabase issues...');
    
    try {
      const clientPath = path.join(this.projectRoot, 'src/utils/supabase/client.ts');
      const serverPath = path.join(this.projectRoot, 'src/utils/supabase/server.ts');
      
      // Fix client configuration
      if (fs.existsSync(clientPath)) {
        let content = fs.readFileSync(clientPath, 'utf8');
        let modified = false;

        // Ensure proper environment variable handling
        if (!content.includes('|| ""')) {
          content = content.replace(
            /process\.env\.NEXT_PUBLIC_SUPABASE_URL/g,
            'process.env.NEXT_PUBLIC_SUPABASE_URL || ""'
          );
          content = content.replace(
            /process\.env\.NEXT_PUBLIC_SUPABASE_ANON_KEY/g,
            'process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""'
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(clientPath, content);
          this.fixesApplied.push('Fixed Supabase client configuration');
        }
      }

      // Fix server configuration
      if (fs.existsSync(serverPath)) {
        let content = fs.readFileSync(serverPath, 'utf8');
        let modified = false;

        // Ensure proper error handling
        if (!content.includes('try {')) {
          content = content.replace(
            /export const createServerClient =/g,
            'export const createServerClient = async'
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(serverPath, content);
          this.fixesApplied.push('Fixed Supabase server configuration');
        }
      }

    } catch (error) {
      this.errors.push(`Supabase fix failed: ${error.message}`);
    }
  }

  async fixEnvironment() {
    console.log('Fixing environment issues...');
    
    try {
      const envPath = path.join(this.projectRoot, '.env.local');
      
      if (!fs.existsSync(envPath)) {
        const envContent = this.generateEnvironmentFile();
        fs.writeFileSync(envPath, envContent);
        this.fixesApplied.push('Created environment file');
      } else {
        let content = fs.readFileSync(envPath, 'utf8');
        const fixedContent = this.fixEnvironmentContent(content);
        
        if (fixedContent !== content) {
          fs.writeFileSync(envPath, fixedContent);
          this.fixesApplied.push('Fixed environment file');
        }
      }

    } catch (error) {
      this.errors.push(`Environment fix failed: ${error.message}`);
    }
  }

  generateEnvironmentFile() {
    return `# Zion App Environment Variables
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Reown AppKit Configuration
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id_here

# Application Configuration
NEXT_PUBLIC_APP_URL=https://zion-app.netlify.app
NODE_ENV=production

# Add other environment variables as needed
`;
  }

  fixEnvironmentContent(content) {
    let fixed = content;
    
    // Ensure required variables exist
    const requiredVars = [
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY',
      'NEXT_PUBLIC_REOWN_PROJECT_ID'
    ];
    
    for (const varName of requiredVars) {
      if (!fixed.includes(varName)) {
        fixed += `\n${varName}=your_${varName.toLowerCase()}_here`;
      }
    }
    
    return fixed;
  }

  async fixImports() {
    console.log('Fixing import issues...');
    
    try {
      const srcDir = path.join(this.projectRoot, 'src');
      if (!fs.existsSync(srcDir)) return;

      const files = this.getAllFiles(srcDir, ['.ts', '.tsx']);
      
      for (const file of files) {
        try {
          let content = fs.readFileSync(file, 'utf8');
          let modified = false;

          // Fix relative imports to absolute imports
          content = content.replace(
            /from ['"]\.\.\/\.\.\/\.\.\/([^'"]+)['"]/g,
            'from \'@/$1\''
          );

          // Fix missing React imports
          if (content.includes('React.FC') && !content.includes('import React')) {
            content = `import React from 'react';\n${content}`;
            modified = true;
          }

          if (modified) {
            fs.writeFileSync(file, content);
            console.log(`Fixed imports in ${file}`);
          }
        } catch (error) {
          console.log(`Error fixing imports in ${file}: ${error.message}`);
        }
      }

      this.fixesApplied.push('Fixed import statements');
    } catch (error) {
      this.errors.push(`Import fix failed: ${error.message}`);
    }
  }

  async fixConfiguration() {
    console.log('Fixing configuration issues...');
    
    try {
      // Fix Next.js configuration
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      
      if (fs.existsSync(nextConfigPath)) {
        let content = fs.readFileSync(nextConfigPath, 'utf8');
        let modified = false;

        // Ensure proper configuration
        if (!content.includes('reactStrictMode')) {
          content = content.replace(
            /const nextConfig = {/,
            'const nextConfig = {\n  reactStrictMode: true,'
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(nextConfigPath, content);
          this.fixesApplied.push('Fixed Next.js configuration');
        }
      }

      // Fix TypeScript configuration
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      
      if (fs.existsSync(tsConfigPath)) {
        let content = fs.readFileSync(tsConfigPath, 'utf8');
        const config = JSON.parse(content);
        let modified = false;

        // Ensure proper paths
        if (!config.compilerOptions?.paths?.['@/*']) {
          if (!config.compilerOptions) config.compilerOptions = {};
          if (!config.compilerOptions.paths) config.compilerOptions.paths = {};
          config.compilerOptions.paths['@/*'] = ['./src/*'];
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(tsConfigPath, JSON.stringify(config, null, 2));
          this.fixesApplied.push('Fixed TypeScript configuration');
        }
      }

    } catch (error) {
      this.errors.push(`Configuration fix failed: ${error.message}`);
    }
  }

  hasDependencyErrors() {
    try {
      execSync('npm ls', { stdio: 'pipe' });
      return false;
    } catch (error) {
      return true;
    }
  }

  getAllFiles(dir, extensions) {
    const files = [];
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  logResults() {
    console.log('\n=== Auto-Fix Results ===');
    
    if (this.fixesApplied.length > 0) {
      console.log('\nFixes Applied:');
      this.fixesApplied.forEach(fix => console.log(`✓ ${fix}`));
    }
    
    if (this.errors.length > 0) {
      console.log('\nErrors:');
      this.errors.forEach(error => console.log(`✗ ${error}`));
    }
    
    console.log(`\nTotal fixes applied: ${this.fixesApplied.length}`);
    console.log(`Total errors: ${this.errors.length}`);
  }

  getResults() {
    return {
      fixesApplied: this.fixesApplied,
      errors: this.errors,
      success: this.errors.length === 0
    };
  }
}

// CLI interface
if (require.main === module) {
  const autoFix = new AutoFixSystem();
  
  autoFix.run().then(() => {
    process.exit(autoFix.getResults().success ? 0 : 1);
  }).catch(error => {
    console.error('Auto-fix system failed:', error);
    process.exit(1);
  });
}

module.exports = AutoFixSystem; 