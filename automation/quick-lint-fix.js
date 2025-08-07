#!/usr/bin/env node
/**
 * Quick Lint Fix
 * 
 * This system provides rapid linting and fixing capabilities for immediate
 * code quality improvements.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class QuickLintFix {
  constructor() {
    this.config = {
      autoFix: true,
      checkAllFiles: false,
      specificFiles: [],
      maxFileSize: 1024 * 1024 // 1MB
    };

    this.stats = {
      filesProcessed: 0,
      issuesFound: 0,
      issuesFixed: 0,
      startTime: null
    };
  }

  async run() {
    console.log('⚡ Starting quick lint fix...');
    this.stats.startTime = new Date();

    try {
      // Run ESLint with auto-fix
      await this.runESLintFix();
      
      // Run Prettier formatting
      await this.runPrettierFormat();
      
      // Generate report
      this.generateReport();

      console.log('✅ Quick lint fix completed successfully');
    } catch (error) {
      console.error('❌ Quick lint fix failed: ', error.message);
      process.exit(1);
    }
  }

  async runESLintFix() {
    console.log('🔧 Running ESLint with auto-fix...');
    
    try {
      const command = this.config.autoFix ? 'npm run lint -- --fix' : 'npm run lint';
      const result = execSync(command, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      console.log('✅ ESLint fix completed');
      this.stats.issuesFixed += this.parseESLintOutput(result);
    } catch (error) {
      console.error('❌ ESLint fix failed: ', error.message);
      // Try to parse the error output for more details
      if (error.stdout) {
        console.log('ESLint output: ', error.stdout);
      }
      
      throw error;
    }
  }

  async runPrettierFormat() {
    console.log('🎨 Running Prettier formatting...');
    
    try {
      // Check if Prettier is available
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        if (packageJson.devDependencies && packageJson.devDependencies.prettier) {
          const files = this.config.checkAllFiles 
            ? "src/**/*.{js,ts,jsx,tsx} automation/**/*.js"
            : this.config.specificFiles.join(" ");
          
          if (files.trim()) {
            execSync(`npx prettier --write ${files}`, { stdio: 'inherit' });
            console.log('✅ Prettier formatting completed');
          } else {
            console.log('ℹ️  No files specified for formatting');
          }
        } else {
          console.log('ℹ️  Prettier not found, skipping formatting');
        }
      }
    } catch (error) {
      console.error('❌ Prettier formatting failed: ', error.message);
    }
  }

  parseESLintOutput(output) {
    // Simple parsing of ESLint output to count fixes
    const lines = output.split('\n');
    let fixes = 0;
    
    lines.forEach(line => {
      if (line.includes('fixed') || line.includes('Fixed')) {
        fixes++;
      }
    });
    
    return fixes;
  }

  generateReport() {
    const endTime = new Date();
    const duration = endTime - this.stats.startTime;
    
    console.log('\n📊 Quick Lint Fix Report:');
    console.log(`⏱️  Duration: ${duration}ms`);
    console.log(`📁 Files processed: ${this.stats.filesProcessed}`);
    console.log(`🔍 Issues found: ${this.stats.issuesFound}`);
    console.log(`🔧 Issues fixed: ${this.stats.issuesFixed}`);
    
    if (this.stats.issuesFixed > 0) {
      console.log('🎉 Code quality improved!');
    } else {
      console.log('✨ Code is already clean!');
    }
  }
}

// CLI interface
const args = process.argv.slice(2);
const command = args[0];

const quickFix = new QuickLintFix();

if (command === 'run') {
  quickFix.run();
} else {
  console.log('Usage: node quick-lint-fix.js run');
  console.log('  run - Execute quick lint fix');
  process.exit(1);
}
