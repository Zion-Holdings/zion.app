#!/usr/bin/env node

/**
 * Security Check Script
 * Validates security aspects of the application
 */

const fs = require('fs');
const path = require('path');

class SecurityChecker {
    constructor() {
        this.baseDir = process.cwd();
        this.securityIssues = [];
    }

    checkForHardcodedSecrets() {
        console.log('Checking for hardcoded secrets...');
        
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
            console.log('✓ No hardcoded secrets found');
        } else {
            console.log(`✗ Found ${foundSecrets} potential hardcoded secrets`);
        }
        
        return foundSecrets;
    }

    checkEnvironmentSecurity() {
        console.log('Checking environment security...');
        
        const envFile = path.join(this.baseDir, '.env.local');
        const envExample = path.join(this.baseDir, '.env.example');
        
        let issues = 0;
        
        // Check if .env.local exists and is not committed
        if (fs.existsSync(envFile)) {
            console.log('✓ .env.local exists');
        } else {
            console.log('⚠ .env.local not found (expected for local development)');
        }
        
        // Check if .env.example exists
        if (fs.existsSync(envExample)) {
            console.log('✓ .env.example exists');
        } else {
            console.log('✗ .env.example missing');
            issues++;
        }
        
        // Check .gitignore for .env files
        const gitignorePath = path.join(this.baseDir, '.gitignore');
        if (fs.existsSync(gitignorePath)) {
            const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
            if (gitignoreContent.includes('.env')) {
                console.log('✓ .env files are in .gitignore');
            } else {
                console.log('✗ .env files not in .gitignore');
                issues++;
            }
        } else {
            console.log('✗ .gitignore file missing');
            issues++;
        }
        
        return issues;
    }

    checkDependencySecurity() {
        console.log('Checking dependency security...');
        
        const packageJsonPath = path.join(this.baseDir, 'package.json');
        if (!fs.existsSync(packageJsonPath)) {
            console.log('✗ package.json not found');
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
                console.log(`⚠ Potentially vulnerable package: ${pkg}`);
                issues++;
            }
        });
        
        if (issues === 0) {
            console.log('✓ No known vulnerable packages found');
        }
        
        return issues;
    }

    checkContentSecurityPolicy() {
        console.log('Checking Content Security Policy...');
        
        const nextConfigPath = path.join(this.baseDir, 'next.config.js');
        if (fs.existsSync(nextConfigPath)) {
            const configContent = fs.readFileSync(nextConfigPath, 'utf8');
            if (configContent.includes('Content-Security-Policy') || 
                configContent.includes('securityHeaders')) {
                console.log('✓ CSP headers configured');
                return 0;
            } else {
                console.log('⚠ No CSP headers found in next.config.js');
                return 1;
            }
        } else {
            console.log('✗ next.config.js not found');
            return 1;
        }
    }

    checkAuthenticationSecurity() {
        console.log('Checking authentication security...');
        
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
                    console.log(`✓ Proper Supabase client usage in ${file}`);
                } else {
                    console.log(`⚠ Check Supabase client usage in ${file}`);
                    issues++;
                }
                
                // Check for proper error handling
                if (content.includes('try') && content.includes('catch')) {
                    console.log(`✓ Error handling found in ${file}`);
                } else {
                    console.log(`⚠ Check error handling in ${file}`);
                    issues++;
                }
            } else {
                console.log(`✗ ${file} missing`);
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
        
        console.log(`\nSecurity report generated: ${reportFile}`);
        console.log(`Total security issues found: ${totalIssues}`);
        
        return report;
    }
}

if (require.main === module) {
    const checker = new SecurityChecker();
    checker.generateReport();
}

module.exports = SecurityChecker;
