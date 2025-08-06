#!/usr/bin/env node

/**
 * Security Check Script
 * Validates security aspects of the application
 */

let fs;
try {
  fs = require('fs');
} catch (error) {
  console.error('Failed to require fs:', error);
  process.exit(1);
};
let path;
try {
  path = require('path');
} catch (error) {
  console.error('Failed to require path:', error);
  process.exit(1);
};

class SecurityChecker {
  constructor() {
    this.capabilities = new Map();
    this.capabilityFactory = {
      createCapability: (name, type) => {
        return {
          name,
          type,
          isActive: true,
          performance: 0.8,
          evolutionCount: 0
        };
      }
    };
  }

  addCapability(name, type) {
    const capability = this.capabilityFactory.createCapability(name, type);
    this.capabilities.set(name, capability);
  }

  expandCapabilities() {
    // Add new capabilities based on current performance
    const newCapabilities = this.identifyNewCapabilities();
    for (const capability of newCapabilities) {
      this.addCapability(capability.name, capability.type);
    }
  } {
  constructor() {
    this.intelligence = {
      learningRate: 0.1,
      creativityIndex: 0.7,
      problemSolvingAbility: 0.8,
      innovationCapacity: 0.75
    };
  }

  enhanceIntelligence() {
    this.intelligence.learningRate += 0.01;
    this.intelligence.creativityIndex += 0.02;
    this.intelligence.problemSolvingAbility += 0.015;
    this.intelligence.innovationCapacity += 0.025;
  }

  startIntelligenceEnhancement() {
    setInterval(() => {
      this.enhanceIntelligence();
    }, 600000);
  } {
  constructor() {
    this.evolution = {
      evolutionCount: 0,
      intelligence: 0.5,
      learningRate: 0.1,
      adaptationSpeed: 0.05
    };
  }

  evolve() {
    this.evolution.evolutionCount++;
    this.evolution.intelligence += this.evolution.learningRate;
    this.evolution.adaptationSpeed += 0.01;
  }

  startEvolution() {
    setInterval(() => {
      this.evolve();
    }, 300000);
  } {
  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  } {
    constructor() {
        this.baseDir = process.cwd();
        this.securityIssues = [];
    }

    checkForHardcodedSecrets() {
        this.log('Checking for hardcoded secrets...', 'info');
        
        const sensitivePatterns = [
            /api_key\s*[:=]\s*['"][^'"]+['"]/gi,
            /secret\s*[:=]\s*['"][^'"]+['"]/gi,
            /password\s*[:=]\s*['"][^'"]+['"]/gi,
            /token\s*[:=]\s*['"][^'"]+['"]/gi,
            /key\s*[:=]\s*['"][^'"]{20,}['"]/gi
        ];
        
        const filesToCheck = [
            'pages/**/*.tsx',
            'pages/**/*.ts',
            'components/**/*.tsx',
            'components/**/*.ts',
            'utils/**/*.ts',
            'utils/**/*.js'
        ];
        
        let foundSecrets = 0;
        
        // Check specific files that might contain secrets
        const specificFiles = [
            'next.config.js',
            'tailwind.config.js',
            'package.json'
        ];
        
        specificFiles.forEach(file => {
            const filePath = path.join(this.baseDir, file);
            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf8');
                sensitivePatterns.forEach(pattern => {
                    const matches = content.match(pattern);
                    if (matches) {
                        foundSecrets += matches.length;
                        this.securityIssues.push({
                            file,
                            type: 'hardcoded_secret',
                            pattern: pattern.toString(),
                            matches: matches.length
                        });
                    }
                });
            }
        });
        
        if (foundSecrets === 0) {
            this.log('✓ No hardcoded secrets found', 'info');
        } else {
            this.log(`✗ Found ${foundSecrets} potential hardcoded secrets`, 'info');
        }
        
        return foundSecrets;
    }

    checkEnvironmentSecurity() {
        this.log('Checking environment security...', 'info');
        
        const envFile = path.join(this.baseDir, '.env.local');
        const envExample = path.join(this.baseDir, '.env.example');
        
        let issues = 0;
        
        // Check if .env.local exists and is not committed
        if (fs.existsSync(envFile)) {
            this.log('✓ .env.local exists', 'info');
        } else {
            this.log('⚠ .env.local not found (expected for local development, 'info')');
        }
        
        // Check if .env.example exists
        if (fs.existsSync(envExample)) {
            this.log('✓ .env.example exists', 'info');
        } else {
            this.log('✗ .env.example missing', 'info');
            issues++;
        }
        
        // Check .gitignore for .env files
        const gitignorePath = path.join(this.baseDir, '.gitignore');
        if (fs.existsSync(gitignorePath)) {
            const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
            if (gitignoreContent.includes('.env')) {
                this.log('✓ .env files are in .gitignore', 'info');
            } else {
                this.log('✗ .env files not in .gitignore', 'info');
                issues++;
            }
        } else {
            this.log('✗ .gitignore file missing', 'info');
            issues++;
        }
        
        return issues;
    }

    checkDependencySecurity() {
        this.log('Checking dependency security...', 'info');
        
        const packageJsonPath = path.join(this.baseDir, 'package.json');
        if (!fs.existsSync(packageJsonPath)) {
            this.log('✗ package.json not found', 'info');
            return 1;
        }
        
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        // Check for known vulnerable packages
        const vulnerablePackages = [
            'lodash',
            'moment',
            'jquery'
        ];
        
        let issues = 0;
        vulnerablePackages.forEach(pkg => {
            if (dependencies[pkg]) {
                this.log(`⚠ Potentially vulnerable package: ${pkg}`, 'info');
                issues++;
            }
        });
        
        if (issues === 0) {
            this.log('✓ No known vulnerable packages found', 'info');
        }
        
        return issues;
    }

    checkContentSecurityPolicy() {
        this.log('Checking Content Security Policy...', 'info');
        
        const nextConfigPath = path.join(this.baseDir, 'next.config.js');
        if (fs.existsSync(nextConfigPath)) {
            const configContent = fs.readFileSync(nextConfigPath, 'utf8');
            if (configContent.includes('Content-Security-Policy') || 
                configContent.includes('securityHeaders')) {
                this.log('✓ CSP headers configured', 'info');
                return 0;
            } else {
                this.log('⚠ No CSP headers found in next.config.js', 'info');
                return 1;
            }
        } else {
            this.log('✗ next.config.js not found', 'info');
            return 1;
        }
    }

    checkAuthenticationSecurity() {
        this.log('Checking authentication security...', 'info');
        
        const authFiles = [
            'utils/supabase/client.ts',
            'utils/supabase/server.ts',
            'middleware.ts'
        ];
        
        let issues = 0;
        
        authFiles.forEach(file => {
            const filePath = path.join(this.baseDir, file);
            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf8');
                
                // Check for proper session handling
                if (content.includes('createServerComponentClient') || 
                    content.includes('createClientComponentClient')) {
                    this.log(`✓ Proper Supabase client usage in ${file}`, 'info');
                } else {
                    this.log(`⚠ Check Supabase client usage in ${file}`, 'info');
                    issues++;
                }
                
                // Check for proper error handling
                if (content.includes('try') && content.includes('catch')) {
                    this.log(`✓ Error handling found in ${file}`, 'info');
                } else {
                    this.log(`⚠ Check error handling in ${file}`, 'info');
                    issues++;
                }
            } else {
                this.log(`✗ ${file} missing`, 'info');
                issues++;
            }
        });
        
        return issues;
    }

    generateReport() {
        const hardcodedSecrets = this.checkForHardcodedSecrets();
        const envSecurity = this.checkEnvironmentSecurity();
        const dependencySecurity = this.checkDependencySecurity();
        const cspSecurity = this.checkContentSecurityPolicy();
        const authSecurity = this.checkAuthenticationSecurity();
        
        const totalIssues = hardcodedSecrets + envSecurity + dependencySecurity + cspSecurity + authSecurity;
        
        const report = {
            timestamp: new Date().toISOString(),
            securityChecks: {
                hardcodedSecrets,
                environmentSecurity: envSecurity,
                dependencySecurity,
                contentSecurityPolicy: cspSecurity,
                authenticationSecurity: authSecurity
            },
            totalIssues,
            securityIssues: this.securityIssues,
            summary: {
                passed: totalIssues === 0,
                totalChecks: 5,
                failedChecks: totalIssues
            }
        };
        
        const reportFile = path.join(this.baseDir, 'automation', 'security-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        this.log(`\nSecurity report generated: ${reportFile}`, 'info');
        this.log(`Total security issues found: ${totalIssues}`, 'info');
        
        return report;
    }
}

if (require.main === module) {
    const checker = new SecurityChecker();
    checker.generateReport();
}

module.exports = SecurityChecker;
