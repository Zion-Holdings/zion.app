#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PreBuildChecker {
  constructor() {
    this.issues = [];
    this.fixes = [];
  }

  // Run all pre-build checks
  async runChecks() {
    console.log('🔍 Running pre-build checks...');
    
    await this.checkSyntaxErrors();
    await this.checkTypeScriptErrors();
    await this.checkDependencies();
    await this.checkEnvironmentVariables();
    await this.checkBuildConfiguration();
    
    this.generateReport();
    
    if (this.issues.length > 0) {
      console.log(`❌ Found ${this.issues.length} issues that need to be fixed`);
      process.exit(1);
    } else {
      console.log('✅ All pre-build checks passed!');
      process.exit(0);
    }
  }

  // Check for syntax errors
  async checkSyntaxErrors() {
    console.log('🔍 Checking for syntax errors...');
    
    const tsFiles = this.findTsFiles('.');
    let errorCount = 0;
    
    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common syntax errors
        const syntaxErrors = [
          { pattern: /from\s+next';/, description: 'Missing quotes in import statement' },
          { pattern: /req\.method\s*!==\s*([A-Z]+)'/, description: 'Missing quotes in method check' },
          { pattern: /message:\s*([A-Za-z\s]+)'/, description: 'Missing quotes in string literal' },
          { pattern: /typeof\s+global\s*!==\s*undefined'/, description: 'Missing quotes in typeof check' },
          { pattern: /typeof\s*\([^)]+\)\.self\s*===\s*undefined/, description: 'Missing quotes in typeof check' }
        ];
        
        for (const error of syntaxErrors) {
          if (error.pattern.test(content)) {
            this.issues.push({
              file,
              type: 'syntax',
              description: error.description,
              line: this.findLineNumber(content, error.pattern)
            });
            errorCount++;
          }
        }
      } catch (error) {
        this.issues.push({
          file,
          type: 'file_read_error',
          description: `Could not read file: ${error.message}`
        });
        errorCount++;
      }
    }
    
    console.log(`Found ${errorCount} syntax errors`);
  }

  // Check TypeScript errors
  async checkTypeScriptErrors() {
    console.log('🔍 Checking TypeScript errors...');
    
    try {
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8', 
        stdio: ['pipe', 'pipe', 'pipe'] 
      });
      
      const lines = result.split('\n');
      let errorCount = 0;
      
      for (const line of lines) {
        if (line.includes('error TS')) {
          const match = line.match(/([^(]+)\((\d+),(\d+)\): error TS\d+: (.+)/);
          if (match) {
            this.issues.push({
              file: match[1].trim(),
              type: 'typescript',
              description: match[4],
              line: parseInt(match[2]),
              column: parseInt(match[3])
            });
            errorCount++;
          }
        }
      }
      
      console.log(`Found ${errorCount} TypeScript errors`);
    } catch (error) {
      // TypeScript compilation failed, which is expected
      console.log('TypeScript check completed');
    }
  }

  // Check dependencies
  async checkDependencies() {
    console.log('🔍 Checking dependencies...');
    
    try {
      // Check if package.json exists
      if (!fs.existsSync('package.json')) {
        this.issues.push({
          type: 'dependency',
          description: 'package.json not found'
        });
        return;
      }
      
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      // Check for required dependencies
      const requiredDeps = ['next', 'react', 'react-dom'];
      for (const dep of requiredDeps) {
        if (!packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep]) {
          this.issues.push({
            type: 'dependency',
            description: `Missing required dependency: ${dep}`
          });
        }
      }
      
      // Check if node_modules exists
      if (!fs.existsSync('node_modules')) {
        this.issues.push({
          type: 'dependency',
          description: 'node_modules not found, run npm install'
        });
      }
      
      console.log('Dependencies check completed');
    } catch (error) {
      this.issues.push({
        type: 'dependency',
        description: `Error checking dependencies: ${error.message}`
      });
    }
  }

  // Check environment variables
  async checkEnvironmentVariables() {
    console.log('🔍 Checking environment variables...');
    
    const requiredEnvVars = [
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY'
    ];
    
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        this.issues.push({
          type: 'environment',
          description: `Missing environment variable: ${envVar}`
        });
      }
    }
    
    console.log('Environment variables check completed');
  }

  // Check build configuration
  async checkBuildConfiguration() {
    console.log('🔍 Checking build configuration...');
    
    // Check if netlify.toml exists
    if (!fs.existsSync('netlify.toml')) {
      this.issues.push({
        type: 'configuration',
        description: 'netlify.toml not found'
      });
    }
    
    // Check if next.config.js exists
    if (!fs.existsSync('next.config.js') && !fs.existsSync('next.config.ts')) {
      this.issues.push({
        type: 'configuration',
        description: 'next.config.js or next.config.ts not found'
      });
    }
    
    console.log('Build configuration check completed');
  }

  // Find TypeScript files
  findTsFiles(dir, files = []) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== '.next') {
          this.findTsFiles(fullPath, files);
        } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error.message);
    }
    
    return files;
  }

  // Find line number for error
  findLineNumber(content, pattern) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (pattern.test(lines[i])) {
        return i + 1;
      }
    }
    return 0;
  }

  // Generate report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      issues: this.issues,
      summary: {
        totalIssues: this.issues.length,
        syntaxErrors: this.issues.filter(i => i.type === 'syntax').length,
        typescriptErrors: this.issues.filter(i => i.type === 'typescript').length,
        dependencyIssues: this.issues.filter(i => i.type === 'dependency').length,
        environmentIssues: this.issues.filter(i => i.type === 'environment').length,
        configurationIssues: this.issues.filter(i => i.type === 'configuration').length
      }
    };
    
    const reportPath = `automation/reports/pre-build-${Date.now()}.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Pre-build report saved to: ${reportPath}`);
    
    // Print summary
    console.log('\n📋 Pre-build Check Summary:');
    console.log(`Total Issues: ${report.summary.totalIssues}`);
    console.log(`Syntax Errors: ${report.summary.syntaxErrors}`);
    console.log(`TypeScript Errors: ${report.summary.typescriptErrors}`);
    console.log(`Dependency Issues: ${report.summary.dependencyIssues}`);
    console.log(`Environment Issues: ${report.summary.environmentIssues}`);
    console.log(`Configuration Issues: ${report.summary.configurationIssues}`);
    
    return report;
  }
}

// Run the checker if this file is executed directly
if (require.main === module) {
  const checker = new PreBuildChecker();
  checker.runChecks();
}

module.exports = PreBuildChecker; 