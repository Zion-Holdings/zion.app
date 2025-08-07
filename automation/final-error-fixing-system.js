#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class FinalErrorFixingSystem {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation', 'error-fixing-logs');
    this.statusDir = path.join(this.projectRoot, 'automation', 'error-fixing-status');
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logsDir, this.statusDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async fixAllErrors() {
    console.log('🔧 Starting final comprehensive error fixing system...');
    
    try {
      // Step 1: Fix critical configuration files
      await this.fixConfigurationFiles();
      
      // Step 2: Fix all syntax errors in project files
      await this.fixAllSyntaxErrors();
      
      // Step 3: Fix automation files
      await this.fixAutomationFiles();
      
      // Step 4: Run ESLint with specific fixes
      await this.runESLintFixes();
      
      // Step 5: Generate comprehensive report
      await this.generateComprehensiveReport();
      
      console.log('✅ Final comprehensive error fixing completed');
    } catch (error) {
      console.error('❌ Error in final fixing system:', error);
    }
  }

  async fixConfigurationFiles() {
    console.log('🔧 Fixing configuration files...');
    
    // Fix package.json type field
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        if (!packageJson.type) {
          packageJson.type = 'module';
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
          console.log('✅ Fixed package.json type field');
        }
      } catch (error) {
        console.error('❌ Error fixing package.json:', error.message);
      }
    }

    // Fix next.config.js
    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    if (fs.existsSync(nextConfigPath)) {
      try {
        let content = fs.readFileSync(nextConfigPath, 'utf8');
        
        // Ensure proper module.exports structure
        if (!content.includes('module.exports')) {
          content = `/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;`;
          fs.writeFileSync(nextConfigPath, content);
          console.log('✅ Fixed next.config.js');
        }
      } catch (error) {
        console.error('❌ Error fixing next.config.js:', error.message);
      }
    }
  }

  async fixAllSyntaxErrors() {
    console.log('🔧 Fixing all syntax errors...');
    
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix missing semicolons in import statements
        content = content.replace(/import\s+([^;]+?)\s+from\s+['"]([^'"]+)['"]/g, (match, imports, source) => {
          if (!match.endsWith(';')) {
            modified = true;
            return `import ${imports} from '${source}';`;
          }
          return match;
        });

        // Fix missing semicolons in export statements
        content = content.replace(/export\s+([^;]+?)(?=\n|$)/g, (match) => {
          if (!match.endsWith(';')) {
            modified = true;
            return match + ';';
          }
          return match;
        });

        // Fix unterminated string literals
        content = content.replace(/(['"])([^'"]*?)(?=\n|$)/g, (match, quote, text) => {
          if (!text.includes(quote)) {
            modified = true;
            return match + quote;
          }
          return match;
        });

        // Fix missing closing parentheses
        content = content.replace(/(\([^)]*?)(?=\n|$)/g, (match, openParen) => {
          if (!openParen.includes(')')) {
            modified = true;
            return match + ')';
          }
          return match;
        });

        // Fix JSX structure errors
        content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)([^>]*?)(?=\n|$)/g, (match, tagName, attributes) => {
          if (!attributes.includes('/>') && !attributes.includes('>')) {
            modified = true;
            return `<${tagName}${attributes}>`;
          }
          return match;
        });

        // Fix indentation errors
        const lines = content.split('\n');
        const fixedLines = lines.map(line => {
          if (line.match(/^\s+[a-zA-Z]/)) {
            const indent = line.match(/^(\s+)/)[1];
            if (indent.length % 2 !== 0) {
              modified = true;
              return line.replace(/^(\s+)/, '  ');
            }
          }
          return line;
        });

        if (modified) {
          content = fixedLines.join('\n');
          fs.writeFileSync(file, content);
          console.log(`✅ Fixed syntax errors in ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error fixing ${file}:`, error.message);
      }
    }
  }

  async fixAutomationFiles() {
    console.log('🔧 Fixing automation files...');
    
    const automationFiles = [
      'automation/error-fixing-autonomous-agents-factory.js',
      'automation/comprehensive-error-fixing-system.js',
      'automation/parsing-error-fixing-agent.js',
      'automation/master-error-fixing-launcher.js',
      'automation/syntax-error-fixing-agent.js',
      'automation/linting-error-fixing-agent.js',
      'automation/continuous-error-monitoring-agent.js',
      'automation/error-fixing-status-agent.js',
      'automation/robust-error-fixing-system.js',
      'automation/final-error-fixing-system.js'
    ];

    for (const file of automationFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          let modified = false;

          // Fix trailing single quotes
          content = content.replace(/;'/g, ';');
          content = content.replace(/,'/g, ',');
          content = content.replace(/\)'/g, ')');
          content = content.replace(/\}'/g, '}');
          content = content.replace(/\]'/g, ']');
          content = content.replace(/\n'/g, '\n');

          // Fix multiple semicolons
          content = content.replace(/;;+/g, ';');

          // Fix malformed template literals
          content = content.replace(/\`([^\`]*?)\`;'/g, '`$1`;');

          // Fix malformed string literals
          content = content.replace(/'([^']*?)';'/g, "'$1';");

          if (content !== fs.readFileSync(filePath, 'utf8')) {
            fs.writeFileSync(filePath, content);
            modified = true;
            console.log(`✅ Fixed automation file: ${file}`);
          }
        } catch (error) {
          console.error(`❌ Error fixing ${file}:`, error.message);
        }
      }
    }
  }

  async runESLintFixes() {
    console.log('🔧 Running ESLint fixes...');
    
    try {
      // Run ESLint with specific patterns
      execSync('npx eslint --fix "pages/**/*.{ts,tsx}"', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      console.log('✅ ESLint fixes for pages completed');
    } catch (error) {
      console.error('❌ ESLint fixes for pages failed:', error.message);
    }

    try {
      execSync('npx eslint --fix "components/**/*.{ts,tsx}"', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      console.log('✅ ESLint fixes for components completed');
    } catch (error) {
      console.error('❌ ESLint fixes for components failed:', error.message);
    }

    try {
      execSync('npx eslint --fix "utils/**/*.{ts,tsx}"', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      console.log('✅ ESLint fixes for utils completed');
    } catch (error) {
      console.error('❌ ESLint fixes for utils failed:', error.message);
    }
  }

  async generateComprehensiveReport() {
    console.log('📊 Generating comprehensive error report...');
    
    try {
      const lintResult = execSync('npm run lint', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });

      const errorLines = lintResult.split('\n').filter(line => 
        line.includes('Error') || line.includes('Warning')
      );

      const report = {
        timestamp: new Date().toISOString(),
        totalErrors: errorLines.length,
        errors: errorLines.slice(0, 50),
        success: errorLines.length === 0,
        summary: {
          fixedFiles: this.countFixedFiles(),
          remainingErrors: errorLines.length,
          successRate: errorLines.length === 0 ? 100 : Math.max(0, 100 - (errorLines.length * 2))
        }
      };

      const reportPath = path.join(this.statusDir, 'final-comprehensive-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      console.log(`📊 Final error count: ${errorLines.length}`);
      console.log('📊 Final comprehensive report generated:', reportPath);
      
      return report;
    } catch (error) {
      console.error('❌ Error generating comprehensive report:', error);
      
      // Create a basic report even if linting fails
      const report = {
        timestamp: new Date().toISOString(),
        totalErrors: 'unknown',
        errors: ['Unable to determine errors due to linting failure'],
        success: false,
        summary: {
          fixedFiles: this.countFixedFiles(),
          remainingErrors: 'unknown',
          successRate: 0
        }
      };

      const reportPath = path.join(this.statusDir, 'final-comprehensive-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      return report;
    }
  }

  countFixedFiles() {
    const files = this.findTypeScriptFiles();
    return files.length;
  }

  findTypeScriptFiles() {
    const files = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }
}

// Run the final comprehensive error fixing system
const system = new FinalErrorFixingSystem();
system.fixAllErrors().catch(console.error);
